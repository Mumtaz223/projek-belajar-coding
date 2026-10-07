program recopointer;
uses crt;
type
  penunjukkaryawan=^catatankaryawan;
  catatankaryawan=record
    kode:string[5];
    nama:string[25];
    gaji:real;
    end;
var
  datakaryawan1,datakaryawan2,datakaryawan3,datakaryawan4 : penunjukkaryawan;
begin
  clrscr;
  writeln('Masukkan 4 buah data karyawan:');
  writeln;
  writeln('Karyawan ke-1:');
  new(datakaryawan1);
  with datakaryawan1^ do
  begin
  write('Kode karyawan:');readln(kode);
  write('Nama karyawan:');readln(nama);
  write('Gaji karyawan:');readln(gaji);
end;
writeln('Karyawan ke-2:');
  new(datakaryawan2);
  with datakaryawan2^ do
  begin
  write('Kode karyawan:');readln(kode);
  write('Nama karyawan:');readln(nama);
  write('Gaji karyawan:');readln(gaji);
end;
 writeln('Karyawan ke-3:');
  new(datakaryawan3);
  with datakaryawan3^ do
  begin
  write('Kode karyawan:');readln(kode);
  write('Nama karyawan:');readln(nama);
  write('Gaji karyawan:');readln(gaji);
end;
writeln('Karyawan ke-4:');
  new(datakaryawan4);
  with datakaryawan4^ do
  begin
  write('Kode karyawan:');readln(kode);
  write('Nama karyawan:');readln(nama);
  write('Gaji karyawan:');readln(gaji);
end;
writeln;
writeln('Data karyawan diambil dari heap:');
writeln('--------------------------------');
writeln('Kode     Nama         Gaji      ');
writeln;
with datakaryawan1^ do writeln(kode:5,nama:25,gaji:12:2);
with datakaryawan2^ do writeln(kode:5,nama:25,gaji:12:2);
with datakaryawan3^ do writeln(kode:5,nama:25,gaji:12:2);
with datakaryawan4^ do writeln(kode:5,nama:25,gaji:12:2);
readln;
end.
