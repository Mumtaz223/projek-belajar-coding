program ArrayToDo;
uses crt;

type
array_angka = array[1..5] of Integer;

var

PanggilArray: array_angka;
i: integer;

begin
  for i:= 1 to 5 do
    begin
      write('Input Angka ke - ', i , '=');
      readln(PanggilArray[i]);
    end;

    for i:= 1 to 5 do
      begin
        Write(PanggilArray[i]); 
      end;
  readln;
end.