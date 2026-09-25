Program If1;
Uses crt;
Var
   nilai:integer;
   keterangan:string;
Begin
clrscr;
write('masukkan nilai akhir: ');
readln(nilai);
If nilai>65 then
   keterangan:='lulus'
else
    keterangan:='gagal';
writeln('Keterangan: ',keterangan);
readln;
end.
