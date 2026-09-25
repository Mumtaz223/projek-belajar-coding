program hitungNilaiRataRata;
uses crt;

Const Max = 100;

var

Nilai : array[1..Max] of Integer;
jumlah, rataRata : Real;
i,n : integer;

begin
  
    clrscr;
    Writeln('Program hitung Nilai Rata Rata');

    Write('Input jumlah nilai yang dimasukkan : ');
    ReadLn(n);

    writeln;

    for i:= 1 to n do
      begin
        Write('Nilai ke - ',i:2, ' :');
        ReadLn(Nilai[i]);
      end;

      jumlah := 0;

      for i:= 1 to n do
        jumlah:= jumlah + Nilai[i];
        rataRata:=jumlah/n;
       
        writeln;

        writeln('Jumlah : ', jumlah:4:2);
        writeln('Rata rata : ', rataRata:4:2);


  readln;
end.