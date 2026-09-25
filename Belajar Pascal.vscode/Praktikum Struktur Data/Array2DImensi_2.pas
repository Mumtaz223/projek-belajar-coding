program array2Dimensi_2;
uses crt;

const 
kolom = 3;
baris = 3;

type


    matriks = ARRAY [1..baris, 1..kolom] of integer;
    
var

    AKU: matriks;
   
    Procedure ISI_MATRIKS(m, n: integer);
    var
    i, j : integer;
    begin
    for i:=1 to m do
    begin
    for j := 1 to n do
    begin
        read(AKU[i,j]);
    end;
    readln;
    end;
    end;

    Procedure TULIS_MATRIKS(m, n: integer);
    var
    i, j : integer;
    begin
    for i:=1 to m do
    begin
    for j := 1 to n do
    begin
        write(AKU[i,j]:5);
    end;
    writeln;
    end;
    end;

    Begin
    clrscr;
    isi_matriks(kolom,baris);
    tulis_matriks(kolom,baris);
    readln;
    end.

    


