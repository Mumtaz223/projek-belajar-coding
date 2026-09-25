program totalnilai;
uses crt;

var

uas, uts, tugas, nilaiAkhir: Integer;
nama: string;
nilaiHuruf: Char;


begin
clrscr;
  WriteLn('Total Nilai akhir aku');
  writeln('Masukkan nama anda');
  ReadLn(nama);
  writeln('Masukkan Nilai UAS');
  ReadLn(uas);
  WriteLn('Masukkan nilai UTS :');
  ReadLn(uts);
  WriteLn('Masukkan nilai Tugas :');
  ReadLn(tugas);
  WriteLn('================================');

  nilaiAkhir:=tugas+uts+uas;

  if nilaiAkhir>900 then
    nilaiHuruf:='A'
    else if nilaiAkhir>700 then
      nilaiHuruf:='B'
    else if nilaiAkhir >500 then
      nilaiHuruf:='C'
    else
    nilaiHuruf:='D';

    writeln('Kamu Mendapatkan nilai Huruf :', nilaiHuruf);
    Writeln('total nilai yang kamu dapatkan adalah : ', nilaiAkhir);

    if nilaiAkhir>500 then
      WriteLn('Selamat Kamu Telah Lulus')
      else
      Writeln('Kamu Harus Mengikuti Remedial');
  readln;
end.