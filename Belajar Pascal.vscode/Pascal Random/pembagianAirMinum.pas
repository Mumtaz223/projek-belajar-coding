program hitungAir;
uses crt;

var
botolBesar, botolKecil, totalAir, sisaAir : integer;

Begin 

clrscr;
writeln('Masukkan jumlah air yang tersedia  : ',totalAir);
ReadLn(totalAir);
botolBesar:= totalAir div 600;
sisaAir:= totalAir mod 600;
botolKecil:=sisaAir div 300;

writeln('Botol Besar ada : ', botolBesar);
WriteLn('Botol Kecil Ada : ', botolKecil, ' botol');
ReadLn;
end.


