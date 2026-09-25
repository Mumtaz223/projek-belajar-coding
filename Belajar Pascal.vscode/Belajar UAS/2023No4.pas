program inputArray;
uses crt;

var
Angka : array[1..4] of integer;
i: integer;


begin
clrscr;

for i:= 1 to 4 do
  begin
    Write('Input bilangan ke - ', i, ':');
    readln(Angka[i]);
  end;


    writeln('=========================');
   

    for i:= 1 to 4 do 
    begin
      Write(Angka[i], ' ');
      writeln();

      writeln(Angka[i], ' X ', i, ' = ', Angka[i] * i);

    end;
readln;
end.