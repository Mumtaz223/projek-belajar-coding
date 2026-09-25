Program NestedLoop;
uses crt;

var

i,j, baris, kolom: integer;

begin
  clrscr;
  writeln('Input jumlah baris : ');
  ReadLn(baris);
  writeln('Input Jumlah kolom : ');
  readln(kolom);

  for i:= 1 to baris do
    begin
      for j:= 1 to kolom do
        begin
          if j mod 2 = 1 then
            write('X ')
            else 
            Write('O ');
        end;
        writeln;
    end;


readln;
end.