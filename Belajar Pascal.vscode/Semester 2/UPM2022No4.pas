program PencarianStokToko;
uses crt;

var
    { Syarat A: Minimal memiliki sebuah variabel bertipe data array }
    daftarBarang: array[1..5] of String;
    i, pilihan: Integer;
    cari: String;

{ Syarat B: Minimal memiliki sebuah procedure atau function }
procedure CariBarang(namaCari: String);
var
    ditemukan: Boolean;
    idx: Integer;
begin
    ditemukan := false;
    idx := 1;

    { Syarat C: Menggunakan perulangan (while-do) }
    { Syarat D: Memiliki sistem pencarian (Sequential Search) }
    while (idx <= 5) and (not ditemukan) do
    begin
        { Syarat C: Menggunakan kondisi pemilihan (if-then) }
        if UpCase(daftarBarang[idx]) = UpCase(namaCari) then
        begin
            ditemukan := true;
        end
        else
        begin
            idx := idx + 1;
        end;
    end;

    { Output hasil pencarian }
    Writeln('------------------------------------------');
    if ditemukan then
        Writeln('Hasil: Barang "', namaCari, '" TERSEDIA di rak nomor ', idx, '.')
    else
        Writeln('Hasil: Barang "', namaCari, '" TIDAK DITEMUKAN di toko ini.');
    Writeln('------------------------------------------');
end;

{ Program Utama }
begin
    clrscr;
    { Inisialisasi data ke dalam array }
    daftarBarang[1] := 'Buku';
    daftarBarang[2] := 'Pensil';
    daftarBarang[3] := 'Penggaris';
    daftarBarang[4] := 'Penghapus';
    daftarBarang[5] := 'Spidol';

    Writeln('=== SISTEM INFORMASI STOK BARANG TOKO ===');
    Writeln('Daftar barang yang tersedia di rak:');
    for i := 1 to 5 do
    begin
        Writeln(i, '. ', daftarBarang[i]);
    end;
    Writeln;

    { Input kata kunci pencarian }
    Write('Masukkan nama barang yang ingin dicari: ');
    Readln(cari);

    { Memanggil prosedur pencarian }
    CariBarang(cari);

    Readln;
end.