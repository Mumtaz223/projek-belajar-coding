program wahiledo;
uses crt;

var

angka, sisa, bagi,i, hasil : integer;
begin
  clrscr;
  writeln('Input sebuah angka ');
  ReadLn(angka);

  i:=1;
  while  i<=10 do
  begin
    hasil:= angka div i;
    sisa := angka mod i;
    writeln(angka, ' : ', i, ' = ', hasil, ' Sisa ', sisa);
    i:= i+1;
  end;
    
readln;
end.