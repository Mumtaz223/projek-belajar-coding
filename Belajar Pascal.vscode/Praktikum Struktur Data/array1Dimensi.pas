program array1Dimensi;
uses crt;

var
  
    i, n : integer;
        a : array[1..10] of integer;

        begin
        clrscr;
        writeln('Program Array 1 Dimensi');
        a[1] := 10;
        a[2] := 15;
        a[3] := a[1] + a[2];
        writeln(a[1]);
        writeln(a[2]);
        writeln(a[3]);

        readln;
        end.
        