program kasir;
uses crt;
type
  data = record
  kode : string[5]; //angka 5 adalah panjang karakter yang bisa diinputkan
  nama : string[10];
  harga : real;
  jumlah : integer;
  total : real;
  ket:string[20];
end;

var
  t,n,a:string;
  jumlahbrg,i,j:byte;
  totalpembelian,tot,kembali:real;
  nama:string[20];
  barang:array [1..100] of data;

begin
clrscr;
writeln('Nama   : Bay Haqi             ');
writeln('NIM    : 23443434                 ');
writeln('____________________________________');
writeln('             Nota Pembelian              ');
writeln('             Toko  Bay Haqi              ');
writeln('Jl. Bausasran Kec. Danurejan (08994025463)');
writeln('-----------------------------------------');
writeln;
write('Tanggal Pembelian        : ');readln(t);
write('Nama Pembeli             : ');readln(n);
writeln;
write('Jumlah Pembelian         : ');readln(jumlahbrg);
for i := 1 to jumlahbrg do
begin
  writeln('Masukkan data ke-',i:2);

  begin
  write('Kode Barang    : ');readln(barang[i].kode);
  write('Nama Barang    : ');readln(barang[i].nama);
  write('Harga Satuan   : ');readln(barang[i].harga);
  write('Jumlah Beli    : ');readln(barang[i].jumlah);
end;
end;
writeln;
writeln('Nama Pembeli : ',n);
if(barang[i].harga>100) then
begin
barang[i].ket:='Mahal'
end
else
barang[i].ket:='Murah';
writeln('===============================================================');
writeln('|No|Nama Barang|Harga Satuan|Jumlah Beli| Total  | Keterangan |');
writeln('===============================================================');

begin
barang[i].total:=0;
for i := 1 to jumlahbrg do
begin
barang[i].total:=barang[i].harga*barang[i].jumlah;
write(i:2);
write(barang[i].nama:12);
write(barang[i].harga:14:2);
write(barang[i].jumlah:5);
write(barang[i].total:15:2);
writeln(barang[i].ket:12);
end;
writeln('--------------------------------------------------------------');
for j:= 1 to jumlahbrg do
tot:= tot+barang[j].total;
writeln('       Total Keseluruhan  : ',tot:20:2);
write('       Total  Pembayaran  : ');read(totalpembelian);
kembali:= totalpembelian-tot;
writeln('       Jumlah Kembalian   : ',kembali:20:2);
readln;
writeln('==============================================================');
writeln('TERIMA KASIH')
end;
readln;
end.