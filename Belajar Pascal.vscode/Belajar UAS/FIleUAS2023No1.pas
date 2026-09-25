program soalNomor1;
uses crt;

var

input, hasil,i, sisa : integer;

begin

clrscr;

write('Masukkan ANgka yang di hitung ');
ReadLn(input);

i:=1;
while i<=10 do
begin
  if i mod 2 = 1 then
  begin
    hasil:= input div i;
    sisa:= input mod i;
    WriteLn(input, ':', i, '=', hasil, 'Sisa ', sisa);
    end
    else
    begin
      hasil:= input * i;
      
      WriteLn(input, ' X ', i, '=', hasil);
    end;
    i:= i +1;
end;
  
  readln;
end.