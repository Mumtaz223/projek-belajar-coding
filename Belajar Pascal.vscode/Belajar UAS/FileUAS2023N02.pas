program kelipatanGajelas;
uses crt;

var
i, input, kelipatan, atas, bawah, total : integer;



begin
  write('Input kelipatan ');
  ReadLn(kelipatan);
  Write('Input batas Bawah : ');
  readln(bawah);
  Write('Input Batas Atas : ');
  readln(atas);

  WriteLn('=========================');
    total:=0;
    i:= bawah;
    Write('Output : ');
  repeat
    begin
      if i mod kelipatan = 0 then
      begin
        Write(i, ' ');
        total:=total+i;
        end;
    end;
    i:=i + 1
  until i > atas;

       
    WriteLn;
 
    WriteLn('Total : ', total);

  readln;
end.

