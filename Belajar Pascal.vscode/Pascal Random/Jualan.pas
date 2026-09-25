program jualan;
uses crt;

var 
harga, harga1: real;
huruf, pilihan: String;


begin
  clrscr;

  writeln('----Selamat datang di Resto Pizza----');
  WriteLn('==========================================');
  Writeln('Silahkan pilih dalah satu menu di bawah ini');
  WriteLn('');
  writeln('Pizza Jumbo, Pizza Sedang,  Pizza kecil');
  WriteLn('===========================================');
  write('Masukkan menu yang kamu pilih : ');
ReadLn(huruf);
 if huruf='Pizza Jumbo' then
 WriteLn('Kamu memilih Pizza Besar dengan harga 100.000')
  else if huruf='Pizza Sedang' then
  WriteLn('Kamu memilih Pizza Sedang dengan harga 70.000')
 else if huruf='Pizza Kecil' then
  WriteLn('Kamu memilih Pizza Kecil dengan harga 50.000')
  else
  WriteLn('Maaf menu yang kamu pilih tidak ada');


   

Readln;
end.