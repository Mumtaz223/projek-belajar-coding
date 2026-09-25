program Kelipatan3atau5;
uses crt;

var
  n, i : integer;
  genap, ganjil : integer;

begin
  clrscr;
  genap := 0;
  ganjil := 0;

  write('Input batasan angka : ');
  readln(n);

  writeln('====================================');
  writeln('Angka-angka yang merupakan kelipatan 3 atau 5 kurang dari ', n, ' adalah:');

  for i := 1 to n-1 do
  begin
    if (i mod 3 = 0) or (i mod 5 = 0) then
    begin
      write(i, ' ');

      if i mod 2 = 0 then
        genap := genap + 1
      else
        ganjil := ganjil + 1;
    end;
  end;

  writeln;
  writeln('Jumlah angka genap : ', genap, ' angka');
  writeln('Jumlah angka ganjil : ', ganjil, ' angka');

  readln;
end.
