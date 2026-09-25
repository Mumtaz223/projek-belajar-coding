program inputanArray;
uses crt;
type
array_Satu = array[1..5] of integer;
var
bilangan : integer;
panggilArray : array_Satu;

begin
  clrscr;
   

  panggilArray[1]:= 40;
  panggilArray[2]:= 45;
  panggilArray[3]:= 50;
  panggilArray[4]:= 70;
  panggilArray[5]:= 80;

  writeln(panggilArray[1]);
    for bilangan:= 1 to 5 do
      begin
        WriteLn(panggilArray[bilangan]);
      end;

  readln;
end.