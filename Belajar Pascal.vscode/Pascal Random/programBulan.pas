program bulan;
uses crt;

var

nomorBulan : integer;

begin
clrscr;

  writeln('Masukkan nomor bulan 1-12 :');
  ReadLn(nomorBulan);

  if nomorBulan = 1 then
    writeln('Januari')
    else if nomorBulan = 2 then
      writeln('Februari')
      else if nomorBulan = 3 then
        WriteLn('Maret')
        else if nomorBulan = 4 then 
        WriteLn('April')
        else if nomorBulan = 5 then
          WriteLn('Mei')
          else if nomorBulan = 6 then
            WriteLn('Juni ')
            else if nomorBulan = 7 then
              writeln('Juli')
              else if nomorBulan = 8 then
                WriteLn('Agustus')
                else if nomorBulan = 9 then
                  writeln('September')
                  else if nomorBulan = 10 then
                    WriteLn('Oktober')
                    else if nomorBulan = 11 then 
                    WriteLn('November')
                    else if nomorBulan = 12 then
                      WriteLn('Desember')
      else
      WriteLn('Tidak ada yang kamu pilih');
    
    ReadLn;
end.