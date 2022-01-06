    10	DIM code 200
    20	OSNEWL=&FFE7
    30	OSWRCH=&FFEE
    40	FOR pass = 0 TO 3 STEP 3
    50	P% = code
    60	[
    70	        OPT pass
    80	\ Sub Y from X. On exit
    90	\ &70 - P on entry
   100	\ &71 - Y on entry
   110	\ &72 - X on entry
   120	\ &73 - X + Y
   130	\ &74 - P on exit
   140	.sbc    PHP
   150	        PLA
   160	        STA &70
   170	        STY &71
   180	        STX &72
   190	        TXA
   200	        SBC &71
   210	        STA &73
   220	        PHP
   230	        PLA
   240	        STA &74
   250	        RTS
      	
   260	.hexbyt PHA
   270	        LSR A
   280	        LSR A
   290	        LSR A
   300	        LSR A
   310	        JSR hexnyb
   320	        PLA
   330	.hexnyb AND #15
   340	        CMP #10
   350	        SED
   360	        ADC #ASC("0")
   370	        CLD
   380	        JMP OSWRCH
      	
   390	.try    JSR sbc
      	
   400	.dump   TXA
   410	        PHA
   420	        LDX #0
   430	.d1     LDA &70, X
   440	        JSR hexbyt
   450	        LDA #ASC(" ")
   460	        JSR OSWRCH
   470	        INX
   480	        CPX #5
   490	        BCC d1
   500	        JSR OSNEWL
   510	        PLA
   520	        TAX
   530	        RTS
      	
   540	.test   LDX #0
   550	        LDY #0
   560	.t1     CLC
   570	        CLD
   580	        JSR try
   590	        SEC
   600	        CLD
   610	        JSR try
   620	        CLC
   630	        SED
   640	        JSR try
   650	        SEC
   660	        SED
   670	        JSR try
   680	        CLD
   690	        INX
   700	        BNE t1
   710	        INY
   720	        BNE t1
   730	        RTS
      	
   740	]
   750	NEXT
   760	REM CALL test