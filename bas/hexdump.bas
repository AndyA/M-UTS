osbyte=&FFF4
oswrch=&FFEE
osnewl=&FFE7
ws=&70
bpl=&74
esc_flag=&FF

DIM CODE% 1000

FOR PASS = 0 TO 3 STEP 3
P% = CODE%

[OPT PASS
.hex_dump     LDX #22
.hd1          BIT esc_flag
              BMI escape
              JSR hex_line
              DEX
              BNE hd1
              RTS

.escape       LDA #126
              JSR osbyte
              BRK
              EQUB 17
              EQUS "Escape"
              EQUB 0

.hex_line     LDA ws+1
              JSR hex_byte
              LDA ws
              JSR hex_byte_sp

              LDY #0
.hl1          LDA (ws), Y
              JSR hex_byte_sp
              INY
              CPY bpl
              BCC hl1

              LDY #0
.hl2          LDA (ws), Y
              CMP #&7F
              BCS hl3
              CMP #&20
              BCS hl4
.hl3          LDA #ASC"." 
.hl4          JSR oswrch
              INY
              CPY bpl
              BCC hl2
              
              CLC
              TYA
              ADC ws
              STA ws
              BCC hlx
              INC ws+1
.hlx          JMP osnewl

.hex_byte_sp  PHA
              JSR hex_byte
              LDA #ASC" "
              BNE hxn1

.hex_byte     PHA
              LSR A : LSR A : LSR A : LSR A
              JSR hex_nybble
              PLA

.hex_nybble   PHA
              AND #&0F
              CLC
              ADC #ASC"0"
              CMP #ASC"9" + 1
              BCC hxn1
              ADC #ASC"a" - (ASC"9" + 1) - 1
.hxn1         JSR oswrch
              PLA
              RTS

              EQUS "Andy"
]
NEXT