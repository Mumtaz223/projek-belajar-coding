program input_karyawan;
uses crt;

var
karyawan : string;
gajiBersih, gajiPokok, tunjangan, totalGaji, pajak: real;

begin
clrscr;

  WriteLn('Hitung Total Gaji Karyawan : ');
  WriteLn('=====================================');
  WriteLn('Nama Karyawan :');
  ReadLn(karyawan);
  WriteLn('Gaji Pokok : ');
  ReadLn(gajiPokok);

  tunjangan:=0.2*gajiPokok;
  totalGaji:=gajiPokok+tunjangan;
  pajak:=00.2*gajiPokok;
  gajiBersih:=gajiPokok+tunjangan-pajak;

  WriteLn;
  WriteLn('tunjangan :', tunjangan:0:0);
  writeln('Total Gaji : ', totalGaji:0:0);
  WriteLn('Pajak : ', pajak:0:0);
  WriteLn('Gaji bersih yang diterima : ', gajiBersih:0:0);


readln;
end.