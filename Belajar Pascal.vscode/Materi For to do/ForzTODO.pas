program  toDO;
uses crt;

var
b,k ,i, j, m, n, c, d, counter, hasil: integer;

begin
  clrscr;

  for b:= 1 to 5 do
  begin
   for k:=1 to 5 do
     
    begin
      Write(b*k);
      write(' ');
    end;
    WriteLn;
    end;
    writeln('==========================');

    for i:= 1 to 5 do
      begin
        for j:= 1 to i do
        begin
          
          write('x ');

      end;
      writeln;
      end;

      writeln('-============================');

      for m:=1 to 5 do
        begin
          for n:= 1 to m do
            begin
              write(n );
            end;
            writeln;
        end;

        writeln('========================');

        hasil:=1;
        write('Input Bilangan Pertama : ');
        readln(c);
        write('Input bilangan kedua : ');
        readln(d);

        for counter := 1 to d do
          begin
          hasil:= hasil * c;
          end;
          writeln('Maka nilai', c , 'Pangkat ', d, ' Adalah : ', hasil);
    readln;
end.