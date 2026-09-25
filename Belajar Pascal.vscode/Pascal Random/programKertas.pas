program kertas;
uses crt;

var 
kodeKertas, nama : string;
harga, jumlah,total : integer;

begin 
clrscr;
writeln('Program Fotokopi');
writeln('Masukkan kode kertas : ');
ReadLn(kodeKertas);

case (kodeKertas) of 

'P' : begin
  nama:= 'polio';
  harga :=175;
end;
'Q' : begin
  nama:= 'Quarto';
  harga:= 150;
end;
'H' : begin
  nama:= 'HVS';
  harga:= 125;
end;

end;

writeln('Menggunakan Kertas :', nama);
WriteLn('Biaya per lembar :', harga);

WriteLn('Jumlah yang di fotokopi : ');
ReadLn(jumlah);
total:= harga * jumlah;
Writeln('Yan harus dibayar : ', total);

ReadLn;
end.