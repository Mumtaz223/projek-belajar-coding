program Kelipatan5dan3;
uses crt;

var 
i : integer;

begin
clrscr;
  WriteLn('kelipatan 3 dan 5 :' );

  for i:= 1 to 199 do
    begin
      if (i mod 3 = 0) or (i mod 5 = 0) then
        write(i, ' ');
    end;
    readln;
end.