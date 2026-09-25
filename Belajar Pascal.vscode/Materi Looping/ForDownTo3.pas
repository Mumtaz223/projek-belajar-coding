program fordown;
uses crt;

var
i,b, Gelas :integer;

begin
  

  for i:=10 downto 0 do
    writeln('Menghitung MUndur : ', i);

    writeln('Masukkan Gelas yang ada : ');
    readln(Gelas);

    for b:=Gelas downto 1 do
      writeln('Jumlah gelas : ', b);
    readln;
end.