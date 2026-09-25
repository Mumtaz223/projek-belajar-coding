program hitungPajak;
uses crt;

var 
penghasilan, jumlahPajak : real;
Pajak:Integer;


begin
clrscr;

writeln('Masukkan GAji Tahunan :');
readln(penghasilan);

if penghasilan<=60000000 Then 
begin
Pajak:=5;
jumlahPajak:= penghasilan * 0.5;
end
else 
begin
Pajak:=10;
jumlahPajak:= penghasilan * 0.10;
end;

Writeln('Besaran Pajak adalah :', Pajak,'%');
WriteLn('Jumlah Pajak Yang harus dibayar : ', jumlahPajak:0:0);

ReadLn;
end.

