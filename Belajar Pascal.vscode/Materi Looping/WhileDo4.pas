program while_do_Hitung_Mundur;
uses crt;

var
i, j:Integer;

begin
clrscr;
  i:=100;

  while i>=0 do
  begin
    WriteLn('Hitung Mundur :', i);
    i:=i-1;
  end;
  readln;
end.