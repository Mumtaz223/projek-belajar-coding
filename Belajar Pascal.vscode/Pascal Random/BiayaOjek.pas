program ojekMumtaz;
uses crt;

var

nama_pelanggan : string;
biaya, jarak, diskon : integer;

begin 
clrscr;

writeln('Nama Custumer');
ReadLn(nama_pelanggan);
writeln('Jarak yang ditempuh (km)');
ReadLn(jarak);

//baiaya jarak tempuh
if jarak<=4 then
  biaya:=9500
  else
  biaya:=9500 + 2500;

if jarak>15 then
  diskon:=5000
  else if jarak>10 then
    diskon:=2000
    else
    diskon:=0;
  Writeln('biaya yang harus anda bayar', biaya);
  WriteLn('anda mendapatkan diskon', diskon);
  ReadLn;
  end.