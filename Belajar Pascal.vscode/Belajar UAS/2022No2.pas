program faktorial;
uses crt;

var

angka,hasil, i : Integer;

begin
clrscr;
  writeln('Input Sebuah angka : ');
  ReadLn(angka);

  hasil:=1;
  for i:= 1 to angka do
    begin
      hasil:= i * hasil;
      
      
    end;
    writeln('==============================');
    writeln(angka, 'Faktorial ',hasil);
readln;
end.