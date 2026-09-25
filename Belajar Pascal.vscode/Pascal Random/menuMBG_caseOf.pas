program menuMBG;
uses crt;

var
menu, nama : string;
pilihAngka : integer;

begin
  clrscr;

  writeln('===Pemilihan Menu MBG===');
  WriteLn('Masukkan Nama Anda : ');
  ReadLn(nama);
  WriteLn('1 : Nasi Goreng + Telur');
  WriteLn('2 : Nasi Ayam Bakar');
  writeln('3 : Nasi Ayam Goreng');
  writeln('4 : Nasi Ayam Bali');
  Writeln('5 : Nasi Padang');
  writeln('Masukkan angka 1 - 5 untuk memilih menu MBG di atas :');
  ReadLn(pilihAngka);

  case (pilihAngka) of
  1 : begin
    menu:= 'menu MGB besok adalah Nasi Goreng';
  end;
  2 : begin
    menu:='Menu MBG besok Nasi Ayam Bakar';
  end;
  3 : begin
    menu:= 'Menu MBG besok Nasi Ayam Goreng';
  end;
  4 : begin
    menu:='Menu MBG besok adalah Nasi Ayam Bali';
  end;
  5 : begin
    menu:='Menu MBG besok Nasi Padang';
  end;
  end;

  WriteLn(menu);


  Readln;
end.