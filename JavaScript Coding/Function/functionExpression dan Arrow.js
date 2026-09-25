// Function Expression

const hitungUmur = function(tahunLahir){
    const result = 2025 - tahunLahir;
    return result;
}

const tahunLahirnya = hitungUmur(2007);
console.log(tahunLahirnya); 

console.log(`============================`);

const hitungKelapa = function (kelapaSekarang){
    const result = 20 + kelapaSekarang;
    return result;

}
kelapaSekarangNya = hitungKelapa(20);
console.log(`Jadi Kelapa yang dimiliki adalah : `, kelapaSekarangNya);


//Arrow Biasa

const hitungKopi = (kopiSekarang) => {
    const result = 2025 - kopiSekarang;
    return result;
}

kopiSekarangNya = hitungKopi(2007);
console.log(`Jadi Kamu Punya kopi : `, kopiSekarangNya);

const hitungKelilingPersegi = (lebar) => {
    const result = 4 * lebar;
    return result;
}

lebarnya = hitungKelilingPersegi(5);
console.log(`keliling Persegi Tersebut Adalah : ${lebarnya}`);

// dengan lebih ringkas refactor

const hitungTanggal =
 (tanggalSekarang) => 7 + tanggalSekarang;

 tanggalSekarangnya = hitungTanggal(7);
 console.log(`Jadi Kamu Akan bermain pada hari ke ${tanggalSekarangnya}`);

 const LebarSegiPanjang = 20;

const hitungLuasPersegiPanjang = 
(Panjang) => Panjang * LebarSegiPanjang;

panjangnya = hitungLuasPersegiPanjang(60);
console.log(`Luas Persegi Panjang Adalah ${panjangnya}`);
