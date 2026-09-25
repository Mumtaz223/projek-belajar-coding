program DepresiasiBarang;
uses crt;

var
  harga: real;
  depresiasi: real;
  tahun: integer;

begin
  clrscr;

  write('Harga Awal Barang: ');
  readln(harga);

  write('Input nilai Depresiasi per tahun (%): ');
  readln(depresiasi);

  tahun := 1;

  writeln;
  repeat
    writeln('Tahun ke-', tahun, ': ', harga:0:0);
    harga := harga - (harga * depresiasi / 100);
    tahun := tahun + 1;
  until tahun > 5;

  readln;
end.
