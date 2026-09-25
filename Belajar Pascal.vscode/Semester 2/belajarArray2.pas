program belajarArray2;
uses crt;

const
    seri : array [1..3] of string = ('Yamaha', 'Honda', 'Suzuki');


var
    noSeri : integer;
begin
clrscr;

  writeln(seri[1]);
  writeln('Masukkan no seri :');
    readln(noSeri);

    writeln('No seri yang dimasukkan adalah ', seri[noSeri]);
  readln;
end.