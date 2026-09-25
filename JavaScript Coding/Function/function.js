function hitungUmur(tanggalLahir){
    const rumushitungUmur = 2025 - tanggalLahir;
    console.log('Umur Saya adalah : ', rumushitungUmur);
}

const tanggalLahirNya = 2007;
hitungUmur(tanggalLahirNya);

function hitungPesanan(pesananRumah){
    const rumusPesanan = 10 + pesananRumah;
    console.log(`Jumlah makanan yang ada : `, rumusPesanan);
}

hitungPesanan(10);

function Pendapatan1bulan(gajiPerHari){
    const rumusPendapatan = 30 * gajiPerHari;
    console.log(`Total Gaji dalam 1 Bulan : `, rumusPendapatan);
}

Pendapatan1bulan(100000000);

function hitungLuasLingkaran(jariJari){
    const rumusLuasLingkaran = 3.14 * jariJari * jariJari;
    console.log(`Jadi Luas Lingkaran tersebut adalah : ${rumusLuasLingkaran}cm`);
}

hitungLuasLingkaran(10);

function totalBuku(bukuSkrg){
    const hitungBuku = bukuSkrg + 140;
    console.log(`Total Bukunya adalah :`, hitungBuku);
}

totalBuku(90);

function totalgelas(Gelas){
    const hitungGelas = Gelas + 100;
    console.log(`Total gelas yang ada di rumah adalah : `, hitungGelas);
}

totalgelas(10);

function totalKopi(kopiSkrg, kopikmrn){
    const result = kopiSkrg + kopikmrn;
    return result;
}

const result = totalKopi(10, 10);
console.log(`Total Kopinya Adalah : `, result);

console.log(`======================================`);
