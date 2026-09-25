program inputan;
uses crt;

var

angka, angka2, hasil: Integer;

 begin
 clrscr;
    write('Hello world');
    Write('Kita akan belajar menghitung perkalian dan oembagian');
    Write('mulai dari perkalian 7 dikali 8, kita harus memasukkan angkanya terlebih dahulu');
    write('masukkan angka');
    ReadLn(angka);
    Write('masukkan angka kedua');
    ReadLn(angka2);
   
    hasil:=angka*angka2;
     Write('hasil dari', angka, 'dan', angka2, 'adalah :', hasil);
    readln;
 end.