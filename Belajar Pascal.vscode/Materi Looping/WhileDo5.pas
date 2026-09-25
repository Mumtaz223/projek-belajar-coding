program whileDo5;
uses crt;

var
i:Integer;

begin
clrscr;
i:=5;

WriteLn('Berikut adalah bilangan kelipatan 5 : ');

while i<=50 do
begin
  WriteLn(i);
  i:=i+5;
end;
  readln;
end.