scr = &7C00
DIM code 2000
seed=&70

rx = 0
ry = 1
rd = 2
ra = 4
rsize = 6

r0 = seed + 4
r1 = r0 + rsize
tmp = r1 + rsize

FOR pass = 0 TO 3 STEP 3
P% = code
[
        OPT pass

.init   LDA #&BE
        STA seed + 0
        STA seed + 1
        STA seed + 2
        STA seed + 3

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


.getpt  JSR rand
        AND #31
        CMP #25
        BCS getpt
        TAY
.gp1    JSR rand
        AND #63
        CMP #40
        BCS gp1
        RTS

.square TAY
        BPL sq0
        EOR #&FF
        TAY
        INY
.sq0    STY tmp + 0
        STY tmp + 1
        LDA #0
        STA tmp + 2
        STA tmp + 3
        STA tmp + 4
        LDY #8
.sq1    LSR tmp + 0
        BCC sq2
        CLC
        LDA tmp + 3
        ADC tmp + 1
        STA tmp + 3
        LDA tmp + 4
        ADC tmp + 2
        STA tmp + 4
.sq2    ASL tmp + 1
        ROL tmp + 2
        DEY
        BNE sq1
        LDA tmp + 3
        LDY tmp + 4
        RTS

.mkpt   JSR getpt
        STA r0 + rx, X
        STY r0 + ry, X
        SEC
        SBC #20
        JSR square       \ C clear
        STA tmp + 5
        STY tmp + 6
        LDA r0 + ry, X
        SBC #11          \ =12, C clear from above
        JSR square       \ C clear
        ADC tmp + 5
        STA r0 + rd, X
        TYA
        ADC tmp + 6
        STA r0 + rd + 1, X

.cell   LDA r0 + rx, X
        STA r0 + ra, X     \ init lo byte is X
        LDA #scr DIV 256
        STA r0 + ra + 1, X \ hi byte of &7C00
        LDA #0             \ multiply Y by 40 and add to address
        STA tmp + 5
        LDA r0 + ry, X
        ASL A             \ 24 * 8, max 192, no overflow, C clear
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

.swap   LDX #r1 - r0
        JSR mkpt
        LDX #0
        JSR mkpt
        LDA r0 + rd
        CMP r1 + rd
        LDA r0 + rd + 1
        SBC r1 + rd + 1
        ROL tmp + 5         \ stash carry
        LDA (r0 + ra, X)    \ Yay?
        CMP (r1 + ra, X)
        ROL A
        EOR tmp + 5
        ROR A
        BCS swX
        LDA (r0 + ra, X)
        PHA
        LDA (r1 + ra, X)
        STA (r0 + ra, X)
        PLA
        STA (r1 + ra, X)
.swX    RTS

.loop   JSR init
.l1     JSR swap
        JMP l1

]
NEXT

PRINT P% - code; " bytes"

PRINT INKEY(500)

MODE 7
FOR X% = 0 TO 999 : X%?&7C00 = RND(95) + 31 : NEXT

CALL loop
