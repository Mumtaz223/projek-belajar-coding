program whiledo;
uses crt;

var
i,b:integer;

begin

writeln('Masukkan angka yang ingin kamu jadikan kelipatan : note : masukkan 2 angka yang sama !');
readln(i);
WriteLn('Masukkan angka kedua : ');
readln(b);
writeln('Kelipatan dari ', i, ' Adalah');

while i<40 do
begin
WriteLn(i);
i:= i+b;
end;
  readln;
end.