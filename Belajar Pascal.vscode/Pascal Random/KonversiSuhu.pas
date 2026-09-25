program konversiSuhu;
uses crt;

var
celcius, reamur, fahrenheit, kelvin : Real;

begin
  
  clrscr;
  WriteLn('Konversi suhu dari celcius');
  writeln('==================================');
  write('celcius :');
  ReadLn(celcius);

  kelvin:=celcius+273.15;
  fahrenheit:=(celcius*1.8)+32;
  reamur:=celcius*4/5;

  WriteLn('Suhu celcius ke kelvin :', kelvin:0:2);
  WriteLn('Suhu celcius ke fahrenheit:', fahrenheit:0:2);
  writeln('suhu celcius ke reamur :', reamur:0:2);
  ReadLn;
end.