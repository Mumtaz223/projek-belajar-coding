program RumusHexa;
uses crt;

var

n, i : Integer;
hex, total : LongInt;

begin
  clrscr;

  Write(' Input Bilangan : ');
  readln(n);

  write(n, ' Bilangan Hexagonal Pertama : ' );

    total:=0;
    
  for i:= 1 to n do
    begin
      hex:= (2*i*i) - i;
      Write(hex, ' ');
      total:=  total + hex;
      
    end;
  WriteLn();
    WriteLn('Total Bilangan : ', total);
  readln;
end.