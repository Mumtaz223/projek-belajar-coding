program belajarArray1;
uses crt;

    const
    bulan : array [1..5] of string = ('Januari', 'februari', 'Maret', 'April', 'Mei');

var

n,i : integer;
 A : array [1..100] of Integer;
    noBulan : integer;
begin
  clrscr;
  A[1] := 10;
   writeln(A[1]);
    Writeln('Masukkan nomor Bulan :');
    readln(noBulan);

    Writeln('Nomor bulan yang dimasukkan', noBulan, ' Sekarang bulan ', bulan[noBulan]);
    readln;
end.