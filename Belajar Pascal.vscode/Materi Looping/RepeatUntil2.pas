program repepeat_until_kedua;
uses crt;

var
i : integer;

begin
  clrscr;
  i:=5;

  writeln('Berikut adalah bilangan deret kelipatan 5 : ');

  repeat
    begin
      Write(i,'');
      i:=i+5;
    end;
  until i>100;
readln;
end.