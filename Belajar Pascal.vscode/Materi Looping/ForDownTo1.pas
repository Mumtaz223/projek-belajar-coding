program fordownto;
uses crt;

var
i,a, b, c:integer;

begin
  clrscr;
  for i:= 10 downto 0 do  //Perulangan dimulai dari 10 sampai 0
    begin
      writeln('Hitung Mundur i :', i);   // mencetak ini dari 10 ke 0
    end;

    for a:=10 downto 0 do
      writeln('Menghitung Mundur a : ', a);

      for b:=10 downto 0 do
        writeln('mengitung mundur B : ', b);

        c:=0;
        while c<10 do
          begin
            WriteLn('Halo semuanya', c);
            c:=c+1;
          end;




    readln;
end.