program copointer;
uses crt;
var
  nama1,nama2,nama3,nama4:^string;
begin
  clrscr;
  new(nama1);new(nama2);new(nama3);new(nama4);
  write('Masukkan nama3=');readln(nama3^);
  write('Masukkan nama4=');readln(nama4^);
  writeln(nama3^);
  writeln(nama4^);
  readln;
end.

