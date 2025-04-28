import bisect
import json
import re
from dataclasses import dataclass, field
from functools import cached_property
from typing import Callable

from py65emu.cpu import CPU
from py65emu.mmu import MMU, ReadOnlyError


@dataclass(kw_only=True, frozen=True)
class MMUDelta:
    pre: dict[int, int]
    post: dict[int, int]

    def _changed(self, addr: int) -> bool:
        return addr in self.pre and self.pre[addr] != self.post[addr]

    @cached_property
    def changes(self) -> set[int]:
        return {addr for addr in self.post if self._changed(addr)}

    @cached_property
    def stack_changes(self) -> set[int]:
        return {addr for addr in self.changes if 0x100 <= addr < 0x200}

    @cached_property
    def stack_used(self) -> int:
        sw = self.stack_changes
        return max(sw) - min(sw) + 1 if sw else 0

    @cached_property
    def mem_changes(self) -> set[int]:
        return self.changes - self.stack_changes


class MutsMMU(MMU):
    pre: dict[int, int]
    post: dict[int, int]

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.clear()

    def clear(self):
        self.pre = dict()
        self.post = dict()

    @property
    def delta(self) -> MMUDelta:
        delta = MMUDelta(pre=self.pre, post=self.post)
        self.clear()
        return delta

    def write(self, addr: int, value: int) -> None:
        if addr not in self.pre:
            self.pre[addr] = self.read(addr)
        self.post[addr] = value
        # print(f"write {addr:04x}: {value:02x}")
        try:
            super().write(addr, value)
        except ReadOnlyError:
            pass

    def writeWord(self, addr: int, value: int) -> None:
        self.write(addr, value & 0xFF)
        self.write(addr + 1, (value >> 8) & 0xFF)


class MutsCPU(CPU):
    def stackPush(self, v):
        # Override to make sure sp is below the byte we write
        prev_s = self.r.s
        self.r.s = (self.r.s - 1) & 0xFF
        self.mmu.write(self.stack_page * 0x100 + prev_s, v)


def nice_hex(value: int) -> str:
    if value < 10:
        return str(value)
    return f"${value:x}"


@dataclass(kw_only=True, frozen=True)
class SymbolTable:
    stab: dict[str, int]

    def __getattr__(self, name):
        return self.stab[name]

    @cached_property
    def reverse_map(self) -> dict[int, list[str]]:
        rmap = {}
        for k, v in self.stab.items():
            rmap.setdefault(v, []).append(k)
        return rmap

    @cached_property
    def memory_map(self) -> list[int, list[str]]:
        return sorted(self.reverse_map.items())

    def resolve(self, addr: int) -> list[str]:
        mm = self.memory_map
        pos = bisect.bisect_right(mm, addr, key=lambda x: x[0])
        if pos == 0:
            return nice_hex(addr)
        base = mm[pos - 1]
        offset = addr - base[0]
        if offset == 0:
            return base[1][0]
        return f"{base[1][0]} + {nice_hex(offset)}"

    @classmethod
    def from_file(cls, sym: str):
        stab: dict[str, int] = {}
        with open(sym, "r") as f:
            for line in f:
                m = re.match(r"\s+(\S+)\s*=\s*\$([0-9a-f]+)", line, re.I)
                if not m:
                    raise ValueError(f"Invalid symbol line: {line}")
                stab[m.group(1)] = int(m.group(2), 16)
        return cls(stab=stab)


@dataclass(kw_only=True, frozen=True)
class MutsMachine:
    base_name: str
    mos: dict[int, Callable] = field(default_factory=dict)

    @cached_property
    def m(self) -> MutsMMU:
        with open(f"{self.base_name}.rom", "rb") as f:
            return MutsMMU(
                [
                    (0x0000, 0x8000),
                    (0x8000, 0x4000, True, f),
                ]
            )

    @cached_property
    def c(self) -> MutsCPU:
        return MutsCPU(self.m)

    @cached_property
    def s(self) -> SymbolTable:
        return SymbolTable.from_file(f"{self.base_name}.sym")

    def jmp(self, addr: int) -> None:
        self.c.r.pc = addr

    def patch(self, addr: int, handler: Callable) -> None:
        self.mos[addr] = handler

    def step(self) -> None:
        pc = self.c.r.pc
        if pc in self.mos:
            self.mos[pc]()
            self.jmp(self.c.stackPopWord() + 1)
        else:
            self.c.step()

    def call(self, addr: int) -> None:
        self.c.stackPushWord(0)
        self.jmp(addr)
        self.m.clear()
        while self.c.r.pc != 1:
            # print(self.c.r)
            self.step()


@dataclass(kw_only=True, frozen=True)
class MutsTube(MutsMachine):
    out_chars: list[int] = field(default_factory=list)

    def __post_init__(self):
        self.patch(self.s.oswrch, self.oswrch)
        self.patch(self.s.osasci, self.osasci)

    def _wrch(self, c: int) -> None:
        self.out_chars.append(c)

    def oswrch(self) -> None:
        self._wrch(self.c.r.a)

    def osasci(self) -> None:
        if self.c.r.a == 0x0D:  # CR
            self._wrch(0x0A)
        self._wrch(self.c.r.a)

    @property
    def out(self) -> str:
        return "".join(chr(c) for c in self.out_chars)


class StateAssertion:
    def __init__(self, **kwargs):
        print(kwargs)


def test_acc0_to_acc2():
    x = MutsTube(base_name="m-uts")
    x.m.writeWord(x.s.acc0, 0x1234)
    x.m.writeWord(x.s.acc2, 0xFFFF)

    x.call(x.s.acc0_to_acc2)

    assert x.m.readWord(x.s.acc2) == 0x1234
    delta = x.m.delta
    for w in delta.changes:
        print(f"{w:04x}: {x.s.resolve(w)}")
    assert delta.mem_changes == {x.s.acc2, x.s.acc2 + 1}
    assert delta.stack_used == 0

    sa = StateAssertion(
        A=None,
        Z=None,
        changed=(x.s.acc2, x.s.acc2 + 1),
    )
    print(sa)


def test_oswrch_counted():
    x = MutsTube(base_name="m-uts")
    x.c.r.a = 0x42
    x.m.write(x.s.acc2, 0x00)
    x.call(x.s.oswrch_counted)
    print(json.dumps(x.out))

    sa = StateAssertion(
        P=None,
        changed=(x.s.ptr0, x.s.ptr0 + 1),
    )
    print(sa)


def test_pr_muts():
    x = MutsTube(base_name="m-uts")
    x.call(x.s.pr_muts)
    print(json.dumps(x.out))
    for w in x.m.delta.changes:
        print(f"{w:04x}: {x.s.resolve(w)}")
    # print(x.m.writes)

    sa = StateAssertion(
        A=None,
        X=None,
        Y=None,
        P=None,
        changed=(x.s.ptr0, x.s.ptr0 + 1),
    )
    print(sa)


def test_radix_out():
    x = MutsTube(base_name="m-uts")
    x.c.r.a = 10
    x.m.writeWord(x.s.acc0, 12345)
    x.call(x.s.radix_out)
    print(json.dumps(x.out))
    for w in x.m.delta.changes:
        print(f"{w:04x}: {x.s.resolve(w)}")

    sa = StateAssertion(
        A=None,
        X=None,
        Y=None,
        P=None,
        changed=(x.s.acc0, x.s.acc0 + 1),
    )
    print(sa)


test_acc0_to_acc2()
test_oswrch_counted()
test_pr_muts()
test_radix_out()
