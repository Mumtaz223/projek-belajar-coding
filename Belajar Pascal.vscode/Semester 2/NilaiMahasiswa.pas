program SistemNilaiMahasiswa;

uses crt;

const
   max = 50;

type
   Mahasiswa = record
      nama : string;
      uts, uas, tugas : real;
      na : real;
      grade : char;
      ranking : integer;
   end;

var
   mhs : array[1..max] of Mahasiswa;
   n,i : integer;

{================ FUNCTION HITUNG NILAI AKHIR ================}
function HitungNA(uts, uas, tugas:real):real;
begin
   HitungNA := (0.30*uts) + (0.40*uas) + (0.30*tugas);
end;

{================ FUNCTION TENTUKAN GRADE ====================}
function TentukanGrade(na:real):char;
begin
   if na >= 85 then
      TentukanGrade := 'A'
   else if na >= 75 then
      TentukanGrade := 'B'
   else if na >= 65 then
      TentukanGrade := 'C'
   else if na >= 50 then
      TentukanGrade := 'D'
   else
      TentukanGrade := 'E';
end;

{================ PROCEDURE SORT DESCENDING ==================}
procedure UrutNilai(var data:array of Mahasiswa; jumlah:integer);
var
   i,j:integer;
   temp:Mahasiswa;
begin
   for i:=0 to jumlah-2 do
   begin
      for j:=0 to jumlah-2-i do
      begin
         if data[j].na < data[j+1].na then
         begin
            temp:=data[j];
            data[j]:=data[j+1];
            data[j+1]:=temp;
         end;
      end;
   end;
end;

{========================== MAIN =============================}
begin
clrscr;

write('Jumlah mahasiswa (maks 50): ');
readln(n);

if n>50 then
begin
   writeln('Maksimal 50 mahasiswa!');
   readln;
   exit;
end;

{ Input Data }
for i:=1 to n do
begin
   writeln;
   writeln('Data Mahasiswa ke-',i);
   write('Nama   : ');
   readln(mhs[i].nama);

   write('Nilai UTS   : ');
   readln(mhs[i].uts);

   write('Nilai UAS   : ');
   readln(mhs[i].uas);

   write('Nilai Tugas : ');
   readln(mhs[i].tugas);

   mhs[i].na := HitungNA(
                 mhs[i].uts,
                 mhs[i].uas,
                 mhs[i].tugas);

   mhs[i].grade := TentukanGrade(mhs[i].na);
end;

{ Sorting descending berdasarkan nilai akhir }
UrutNilai(mhs,n);

{ Menentukan ranking }
for i:=1 to n do
begin
   mhs[i].ranking:=i;
end;

{ Output Tabel }
clrscr;
writeln('====================================================================');
writeln('No Nama            UTS   UAS  Tugas  NilaiAkhir Grade Ranking');
writeln('====================================================================');

for i:=1 to n do
begin
   writeln(
      i:2,' ',
      mhs[i].nama:15,' ',
      mhs[i].uts:5:0,' ',
      mhs[i].uas:5:0,' ',
      mhs[i].tugas:6:0,' ',
      mhs[i].na:10:2,' ',
      mhs[i].grade:5,' ',
      mhs[i].ranking:5
   );
end;

writeln('====================================================================');

readln;
end.