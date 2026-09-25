program Array1Dimensi;
uses crt;

var
  nilai : array[1..5] of integer;
  i : integer;

begin
  clrscr;

  { Input data }
  for i := 1 to 5 do
  begin
    write('Masukkan nilai ke-', i, ' : ');
    readln(nilai[i]);
  end;

  writeln;
  writeln('Isi Array :');

  { Output data }
  for i := 1 to 5 do
  begin
    writeln('nilai[', i, '] = ', nilai[i]);
  end;

  readln;
end.
