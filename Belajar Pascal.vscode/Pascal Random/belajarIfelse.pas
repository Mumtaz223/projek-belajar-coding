Program If_bertingkat;
Uses crt;
Var
   Nilai:integer;
   Huruf:CHAR;
Begin
clrscr;
Write('Masukkan nilai akhir: ');
Readln(nilai);
If nilai>80 then
   huruf:='A'
else
    If nilai>70 then
       huruf:='B'
    else
        If nilai>56 then
           huruf:='C'
        else
            If nilai>45 then
               huruf:='D'
            else
                huruf:='E';
Write('Nilai huruf: ',huruf);
Readln;
end.
