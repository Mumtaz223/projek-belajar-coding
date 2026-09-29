program corecord;
uses crt;
type
  hasil=record
  nama:string[30];
  npm:string[20];
  iuran:integer;
  end;
  var
  mhs:hasil;
  begin
  clrscr;
  with mhs do
  begin
  write('Masukkan nama=');readln(nama);
  write('Masukkan npm=');readln(npm);
  write('Masukkan iuran=');readln(iuran);
  writeln('Nama=',nama);
  writeln('Nama=',npm);
  writeln('Nama=',iuran);
readln;
end;
end.



