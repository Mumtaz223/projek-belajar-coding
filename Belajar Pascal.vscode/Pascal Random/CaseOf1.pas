program struktur_case;
uses crt;

var
bulan : integer;

begin
  clrscr;
  write('Silahkan input angka untuk bulan (1-12) :');
  readln(bulan);

  case (bulan) of
  1 : writeln('Januari');
  2: WriteLn('februari');
  3: WriteLn('maret');
4: writeln('april');
  5: WriteLn('mei');
  6: WriteLn('juni');
   7 : writeln('juli');
  8: WriteLn('agustus');
  9: WriteLn('september');
   10 : writeln('oktober');
  11: WriteLn('november');
  12: WriteLn('desember');
end;
ReadLn;
end.