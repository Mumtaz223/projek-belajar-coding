program MasukanPin;
uses crt;

var

    i, pin, j: integer;

begin
clrscr;
  Write('Masukkan Pin anda : ');
  readln(pin);

    i:=12345;
    j:= 1;

    repeat
      if pin = i then
        begin
     
          Write('Pin benar, Lanjutkan transaksi : ');
          end;
            else if
            begin
             Write('Masukkan Pin anda : ');
             ReadLn(pin);
             end;
        j:= j + 1;
    until j > 3;
    WriteLn;
    Write('Pin Yang anda masukkan salah, Transaksi gagal');
  readln;

end.