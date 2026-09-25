Program LuasSegitiga;
uses crt;

procedure Hitung(A, B : Real);

var

    C: Real;

    begin
      C:= 1/2 * A * B;
      write('Luas Segitiga Adalah : ', C:0:0);
    end;

    var
    alas, tinggi : Integer;

    begin

    clrscr;
      write('masukkan alas Segitiga : ' );
        readln(alas);
        write('Masukkan Tinggi : ');
        ReadLn(tinggi);
        Hitung(alas, tinggi);
      readln;
    end.