program repeatUntil4;
uses crt;

var
i: Integer;

begin
  
  repeat
    begin
      writeln('Terus mengulang dari', i);
      i:=i+1;
    end;
  until i=10;
  readln;
end.