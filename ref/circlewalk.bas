REM FOR c = 32 TO 126:VDU c:NEXT:PRINT:END

scr = &7C00
DIM code 2000
W% = &70

seed = FNws(4)

cx = FNws(1)
cy = FNws(1)

rx = 0
ry = 1
rd = 2
ra = 4
rsize = 6

r0 = FNws(rsize)
r1 = FNws(rsize)

tmp = FNws(6)

ch$ = "++---$$%%__:::~"
REPEAT ch$ = " " + ch$ : UNTIL LEN(ch$) >= 32

FOR pass = 0 TO 3 STEP 3
P% = code
[
OPT pass

.chars  EQUS ch$

.init   DEC seed + 3

.rand   LDA seed + 0
        JSR rbit8
        STA seed + 0
        RTS

.rbit8  JSR rbit4
.rbit4  JSR rbit2
.rbit2  JSR rbit
.rbit   ASL A
        ROL seed + 1
        ROL seed + 2
        ROL seed + 3
        BCC rb1
        EOR #&F5
.rb1    RTS

.abs    CMP #0
        BPL ab0
        EOR #&FF
        ADC #0
.ab0    RTS

\ A => AY = A * A
.square STA tmp + 0
        STA tmp + 1
        LDY #0
        STY tmp + 2
        JSR squ1
.squ1   JSR squ2
.squ2   JSR squ3
.squ3   LSR tmp + 0
        BCC squ4
        CLC
        ADC tmp + 1
        PHA
        TYA
        ADC tmp + 2
        TAY
        PLA
.squ4   ASL tmp + 1
        ROL tmp + 2
        RTS

.mkpt   JSR rand
        AND #63
        CMP #40
        BCS mkpt
        STA r0 + rx, X
        SEC              \ Calc DX * DX
        SBC cx
        JSR abs
        JSR square       \ C clear
        STA tmp + 5
        STY tmp + 6

.mp1    JSR rand
        AND #31
        CMP #25
        BCS mp1
        STA r0 + ry, X
        SEC
        SBC cy           \ =12, C clear from above
        JSR abs
        STA tmp + 0      \ DY *= 1.5 to flatten circle
        ASL tmp + 0
        ADC tmp + 0
        LSR A
        JSR square       \ C clear
        ADC tmp + 5
        STA r0 + rd, X
        TYA
        ADC tmp + 6
        STA r0 + rd + 1, X

        \ Calculate character cell address &7C00 + X + Y * 40
.cell   LDA r0 + rx, X
        STA r0 + ra, X     \ init lo byte is X
        LDA #scr DIV 256
        STA r0 + ra + 1, X \ hi byte of &7C00
        LDA #0             \ multiply Y by 40 and add to address
        STA tmp + 5
        LDA r0 + ry, X
        ASL A             \ max 24 * 8 = 192, no overflow, C clear
        ASL A
        ASL A
        PHA
        JSR ce1
        PLA
        ASL A
        ROL tmp + 5
        ASL A
        ROL tmp + 5        \ C clear
.ce1    ADC r0 + ra, X
        STA r0 + ra, X
        LDA tmp + 5
        ADC r0 + ra + 1, X
        STA r0 + ra + 1, X
        RTS

.swap   JSR mkpt
        LDX #0
        \ Compare distance from centre
        LDA r0 + rd
        CMP r1 + rd
        LDA r0 + rd + 1
        SBC r1 + rd + 1
        ROL tmp + 5         \ stash carry
        \ Compare character values
        LDA (r0 + ra, X)
        CMP #ASC("*")
        BNE sw1
        JSR rand
        AND #31
        TAY
        LDA chars, Y
.sw1    EOR #1
        STA (r0 + ra, X)
        CMP (r1 + ra, X)
        ROL A
        EOR tmp + 5          \ combine tests
        ROR A
        BCS swX
        \ Swap characters
        LDA (r0 + ra, X)
        PHA
        LDA (r1 + ra, X)
        STA (r0 + ra, X)
        PLA
        STA (r1 + ra, X)
.swX    RTS

.start  JSR init
        \ Clear screen to '*'
        LDX #0
        LDA #ASC("*")
.st1    STA &7C00, X
        STA &7D00, X
        STA &7E00, X
        STA &7F00, X
        INX
        BNE st1
        RTS

.loop   LDY #0
.l1     BIT &FF     \ check escape
        BMI l2
        TYA
        PHA
        LDX #r1 - r0
        JSR swap    \ update r1 and swap, X = 0 on exit
        JSR swap    \ update r0 and swap
        PLA
        TAY
        INY
        BNE l1
.l2     RTS

]
NEXT

PRINT P% - code; " bytes"

PRINT INKEY(200)

MODE 7
VDU 23, 1, 0; 0; 0; 0; 

CALL start
ccx = 20
ccy = 12
dcx = 0.017
dcy = -0.023

REPEAT 
  ccx = ccx + dcx : IF ccx < 0 OR ccx >= 40 THEN ccx = ccx - dcx : dcx = -dcx
  ccy = ccy + dcy : IF ccy < 0 OR ccy >= 25 THEN ccy = ccy - dcy : dcy = -dcy
  ?cx = ccx : ?cy = ccy : CALL loop
UNTIL FALSE
END

DEF FNws(size)
W% = W% + size
= W% - size
