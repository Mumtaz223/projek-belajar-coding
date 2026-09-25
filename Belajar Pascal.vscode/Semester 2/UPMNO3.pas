program OlahDataArray;
uses crt;

var
    data: array[1..50] of Integer;
    i, j, temp, total, maks, min: Integer;
    rataRata: Real;

begin
    clrscr;
    total := 0;

    { 1. Input 50 angka ke dalam array }
    Writeln('--- Input 50 Data Angka ---');
    for i := 1 to 50 do
    begin
        Write('Masukkan data ke-', i, ': ');
        Readln(data[i]);
        total := total + data[i]; { Menghitung total untuk rata-rata }
    end;

    { 2. Tampilkan seluruh data awal yang diinput }
    Writeln;
    Writeln('a. Seluruh data array yang diinput:');
    for i := 1 to 50 do
    begin
        Write(data[i], ' ');
    end;
    Writeln;

    { 3. Cari Nilai Terbesar dan Terkecil sebelum diurutkan }
    maks := data[1];
    min := data[1];
    for i := 2 to 50 do
    begin
        if data[i] > maks then maks := data[i];
        if data[i] < min then min := data[i];
    end;

    { 4. Proses Mengurutkan secara Ascending (Bubble Sort) }
    for i := 1 to 49 do
    begin
        for j := 1 to 50 - i do
        begin
            if data[j] > data[j+1] then
            begin
                temp := data[j];
                data[j] := data[j+1];
                data[j+1] := temp;
            end;
        end;
    end;

    { 5. Tampilkan data setelah diurutkan }
    Writeln;
    Writeln('b. Seluruh data array yang sudah terurut secara ascending:');
    for i := 1 to 50 do
    begin
        Write(data[i], ' ');
    end;
    Writeln;

    { 6. Hitung rata-rata }
    rataRata := total / 50;

    { 7. Tampilkan hasil statistik akhir }
    Writeln;
    Writeln('c. Nilai terbesar: ', maks);
    Writeln('d. Nilai terkecil: ', min);
    Writeln('e. Nilai rata-rata: ', rataRata:0:2);

    Readln;
end.