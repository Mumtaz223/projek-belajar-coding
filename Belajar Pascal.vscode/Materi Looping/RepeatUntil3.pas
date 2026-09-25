program bilangankelipatan10;
uses crt;

var

i:integer;

begin
  clrscr;
  i:=10;

  writeln('Berikut adalah bilangan kelipatan 10 : ');

  repeat
    begin
      WriteLn(i, '');
      i:=i+10;
    end;
  until i=200;
end.