program record_Random;
uses crt;

type
data = record
nama : string;
umur : integer;
kelas : string;
harga : real;

end;

var

barang : array[1..100] of data;

begin
    clrscr;

writeln('==== Mencoba metode pembayaran Menggunakan Record ===');
  writeln('Masukkan Nama Anda : '); readln(barang[1].nama);
  writeln('Masukkan umur anda :'); readln(barang[1].umur);
  writeln('Masukkan kelas anda : '); readln(barang[1].kelas);
  writeln('Masukkan Harga suatu barang'); readln(barang[1].harga);

  writeln();
  
  if (barang[1].harga > 100000) then
  begin
    
 
    writeln('Barang dengan grade A');
    end

    else if (barang[1].harga < 100000) then
    begin
      Writeln('Barang dengan Grade B');
      end;

  writeln(barang[1].nama);
  readln;
end.

