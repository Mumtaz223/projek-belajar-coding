program tugasUasNomor2;
uses crt;

var

p, f, a : real;


begin
  clrscr;

  Writeln('Input Gaya F : ');
  readln(f);
  Writeln('Input gaya A : ');
  readln(a);

  p:= f/a;

  Writeln('Tekanan (P)', p:0:0);

  if (p>=0) and (p <= 999) then
    Writeln('Klasifikasi : Tekanan Rendah');
    else if (p >= 1000) and (p <= 4999) then
      
    Writeln('Klasifikasi : Tekanan Sedang')
    else
    Writeln('Klasifikasi : Tekanan Tinggi');



  readln;
end.