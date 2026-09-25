Program matriks;
uses crt;
    
var
    A, B, C : array [1..3, 1..3] of integer;  
    i, j : integer;

begin
  clrscr;

    //masukkan Matriks A
    writeln('Matriks : A'); 
  for i:= 1 to 3 do
    begin
      for j:=1 to 3 do
        begin
          write('A[', i, ',', j, ']');
          ReadLn(A[i, j]);
        end;
    end;

    writeln;

    //Massukan matriks B
    writeln('Matriks B : ');
    for i:= 1 to 3 do
      begin
        for j := 1 to 3 do
        begin
          writeln('B[', i, ',', j, '] : ');
          readln(B[i,j]);
        end;
      end;

        //Hitung penjumlahannya di Matriks C
      for i:= 1 to 3 do
        begin
          for j:= 1 to 3 do
            begin
              C[i, j] := A[i, j] + B[i, j]; 
        end;
        end;

        writeln;

        for i:= 1 to 3 do
          begin
            for j:= 1 to 3 do
              begin
                write(A[i, j]:5);
              end;
              writeln;
          end;
          writeln;
          
        writeln('Hasil penjumlahan matriks C : ');

        for i:= 1 to 3 do
          begin
            for j:= 1 to 3 do
              begin
                write(C[i, j]:5);
              end;
              writeln;
          end;


readln;
end.