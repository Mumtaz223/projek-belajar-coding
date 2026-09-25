program WarnaLoop;
var
  x: integer;
begin
  for x := 1 to 5 do
  begin
    if (x mod 2 = 0) then
      writeln('merah')
    else if (x mod 3 = 0) then
      writeln('kuning')
    else
      write('hijau');
  end;
end.
