program repeatUntil;
uses crt;

var

i :Integer;

begin
clrscr;
i:=0;

repeat
  begin
    WriteLn('Halo semuanya', i);     //Terus mencetak ini
    i:=i+1;   //Setiap mencetak iterasinya bertambah 1, Ini wajib ada agar tidak infinity
  end;
until i=10;    //Berhenti sampai nilainya 10

  ReadLn;
end.