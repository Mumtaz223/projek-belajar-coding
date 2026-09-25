program cobaRecord; // Diganti titik koma (;)
uses crt;

type
  data = record
    nama: string;
    kelas: integer;
    umur: integer;
    namaBarang: string;
    harga: real;
  end;

  daftarData = array[1..100] of data;

var
  kode: daftarData;
  i: integer;

begin
  clrscr;

  i := 1;

  writeln('Masukkan nama anda :');
  readln(kode[i].nama);
  writeln('Masukkan kelas anda :');
  readln(kode[i].kelas);
  writeln('Masukkan umur :');
  readln(kode[i].umur);
  writeln('Masukkan nama barang :');
  readln(kode[i].namaBarang);
  writeln('Masukkan harga barang :');
  readln(kode[i].harga);

  // Menampilkan hasil agar bisa dipastikan tersimpan
  writeln;
  writeln('--- Data Tersimpan ---');
  writeln('Nama   : ', kode[i].nama);
  writeln('Barang : ', kode[i].namaBarang);
  writeln('Harga  : Rp ', kode[i].harga:0:2); // Format desimal rapi

  readln;
end.