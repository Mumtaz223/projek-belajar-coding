program MatriksNxN;

uses crt;

const
  max = 10;

type
  Matriks = array[1..max,1..max] of integer;

var
  A : Matriks;
  n, i, j : integer;

{ Function jumlah diagonal utama }
function DiagonalUtama(M: Matriks; n: integer): integer;
var
  i, jumlah : integer;
begin
  jumlah := 0;
  for i := 1 to n do
    jumlah := jumlah + M[i,i];

  DiagonalUtama := jumlah;
end;

{ Function jumlah diagonal kedua }
function DiagonalKedua(M: Matriks; n: integer): integer;
var
  i, jumlah : integer;
begin
  jumlah := 0;
  for i := 1 to n do
    jumlah := jumlah + M[i,n-i+1];

  DiagonalKedua := jumlah;
end;

{ Procedure menampilkan segitiga atas }
procedure SegitigaAtas(M: Matriks; n: integer);
var
  i,j : integer;
begin
  writeln('Elemen Segitiga Atas:');
  for i:=1 to n do
  begin
    for j:=1 to n do
    begin
      if i <= j then
        write(M[i,j]:4)
      else
        write('   -');
    end;
    writeln;
  end;
end;

{ Procedure menampilkan segitiga bawah }
procedure SegitigaBawah(M: Matriks; n: integer);
var
  i,j : integer;
begin
  writeln('Elemen Segitiga Bawah:');
  for i:=1 to n do
  begin
    for j:=1 to n do
    begin
      if i >= j then
        write(M[i,j]:4)
      else
        write('   -');
    end;
    writeln;
  end;
end;

{ Function cek simetris }
function Simetris(M: Matriks; n: integer): boolean;
var
  i,j : integer;
begin
  Simetris := true;

  for i:=1 to n do
    for j:=1 to n do
      if M[i,j] <> M[j,i] then
      begin
        Simetris := false;
        exit;
      end;
end;

begin
clrscr;

write('Masukkan ukuran matriks (maks 10): ');
readln(n);

if (n < 1) or (n > 10) then
begin
  writeln('Ukuran tidak valid!');
  readln;
  exit;
end;

writeln('Masukkan elemen matriks:');
for i:=1 to n do
begin
  for j:=1 to n do
  begin
    write('A[',i,',',j,'] = ');
    readln(A[i,j]);
  end;
end;

writeln;
writeln('Matriks:');
for i:=1 to n do
begin
  for j:=1 to n do
    write(A[i,j]:4);
  writeln;
end;

writeln;
writeln('Jumlah diagonal utama = ', DiagonalUtama(A,n));
writeln('Jumlah diagonal kedua = ', DiagonalKedua(A,n));
writeln;

SegitigaAtas(A,n);
writeln;

SegitigaBawah(A,n);
writeln;

if Simetris(A,n) then
  writeln('Matriks adalah SIMETRIS')
else
  writeln('Matriks TIDAK simetris');

readln;
end.