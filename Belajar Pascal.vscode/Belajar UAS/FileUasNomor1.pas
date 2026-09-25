program belajar_uas;
uses crt;

var

Bunga, SukuBunga, SaldoAkhir: real;
SaldoAwal : LongInt;
LamaTahun : integer;

begin

writeln('Masukkan Saldo Awal : ');
ReadLn(SaldoAwal);
Writeln('Masukkan suku bunga per tahun : ');
ReadLn(SukuBunga);
Writeln('Masukkan Lama Tahun : ');
readln(LamaTahun);

Bunga:= SaldoAwal * (SukuBunga/100)*LamaTahun;
SaldoAkhir:= SaldoAwal + Bunga;

WriteLn('Saldo Awal : Rp', SaldoAwal);
WriteLn('Total Bunga : Rp', Bunga:0:0);
Writeln('Saldo Akhir : Rp, ', SaldoAkhir:0:0);

 readln; 
end.