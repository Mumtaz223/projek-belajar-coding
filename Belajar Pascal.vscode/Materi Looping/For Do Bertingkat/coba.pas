program coba;
uses crt;

var 

i, j : integer;

begin
for i:= 1 to 5 do
  for j := 1 to i do
    begin
      Write(j);
    end;
  writeln(' ');
  readln;
end.