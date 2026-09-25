program whiledo2;
uses crt;

var 
i:integer;

begin
clrscr;
   i:=3;
      Writeln('Berikut adalah bilaangn kelipatan  3 :');

      while i<=30 do
        begin
          WriteLn(i);
          i:=i+3;
        end;
        readln;
end.