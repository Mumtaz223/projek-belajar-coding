program gajiKaryawan;
uses crt;

var 
pajak, gajiBersih, tunjangan, gajiPokok : Real;
nama : string;

begin
  clrscr;
  writeln('=====================');
  WriteLn('GAJI KARYAWAN');
  writeln('=======================');
  Writeln('Masukkan Nama Anda :');
  ReadLn(nama);
  write('Masukkan Gaji Pokok Anda : ');
  ReadLn(gajiPokok);

tunjangan:= gajiPokok*0.2;
pajak:=(tunjangan + gajiPokok) * 0.15;
gajiBersih:= gajiPokok + tunjangan - pajak;

WriteLn('Tunjangan yang diterima oleh : ', nama);
WriteLn('Tunjangan yang diterima :', tunjangan:0:0);
WriteLn('Gaji yang dipotong : ', pajak:0:0);
Writeln('Gaji bersih yang diterima adalah : ', gajiBersih:0:0);
end.