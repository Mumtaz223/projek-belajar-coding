//Arrow Biasa

const hitungUmur = (tahunLahir) => {
    const result = 2025 - tahunLahir;
    return result;
}

tahunLahirnya = hitungUmur(2007);
console.log(`Jadi Kamu Lahir Pada Tahun : `, tahunLahirnya)

// dengan lebih ringkas refactor

const hitungTanggal =
 (tanggalSekarang) => 7 + tanggalSekarang;

 tanggalSekarangnya = hitungTanggal(7);
 console.log(tanggalSekarangnya);

 //function ekspression 

const hitungKelapa = function (kelapaSekarang){
    const result = 20 + kelapaSekarang;
    return
}