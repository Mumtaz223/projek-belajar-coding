program ForTODown2;
uses crt;

var

anak_ayam, i : integer;

begin
  clrscr;
  writeln('=============');
  WriteLn('Lagu Anak Ayam');
  writeln('==============');

  writeln('Input jumlah anak ayam : ');
  ReadLn(anak_ayam);
  writeln;

  for i:= anak_ayam downto 1 do   //Perulangan dimulai dari nilai variabel yang dimasukkan dampai 1
    begin
      writeln('Anak ayam turun 1 ', i, ' Pergi satu tinggal ', i-1);       
    end;

    
    readln;
end.