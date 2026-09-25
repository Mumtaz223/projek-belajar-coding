console.log("--- KARTU PELAJAR DIGITAL ---");
const mahasiswa="Mumtaz Qa'ulani";
const nim="202512345678910";
const jurusan="Teknik Informatika";

let tingkat ="2";
let statusAktif="true";
let a=15;
let b=4;

const matkulfavorit=["Algoritma", "jaringan Komputer", "Kecerdasan Buatan"];

console.log(`Nama : ${mahasiswa}`);
console.log(`Nomor Induk : ${nim}`);
console.log(`Jurusan : ${jurusan}`);
console.log(`Tingkat/smester : ${tingkat}`);
console.log(`Status Aktif : ${statusAktif}`);

console.log(`MatKul yang disukai : ${matkulfavorit[1]}`);
console.log("--------------------------");
console.log("--------------------------");

console.log("---Masuk Materi Operator, if/else, perbandingan---");
console.log("a + b =", a + b);
console.log("a - b =", a - b );
console.log("a % b =", a % b );
console.log("---Materi IF/Else---");

let umur="18";
let punyaSIM="true";
let nilaiUjian="70";
let nilaiAbsen="85";
let sedangHujan="engga";
let punyaTiket="true";
let umurPengunjung="15";
let tinggiBadan="160";

console.log("Jika umur > 17 maka =", umur > 17 && punyaSIM);
console.log(nilaiUjian > 75 || nilaiAbsen > 80);
console.log(`${!sedangHujan}`);


console.log("---SIMULASI WAHANA ROLLER COASER---");
console.log(`Status Tiket : ${punyaTiket}`);
console.log(`Umur : ${umurPengunjung}`);
console.log(`Tinggi badan : ${tinggiBadan}`);
console.log("-------------------------------");

if (punyaTiket==true){
    console.log("tiket valid. silahkan cek tinggi dan umur");
}
else{
    console.log("Tiket tidak valid");
}
if (umurPengunjung < 12 || tinggiBadan >= 150){
    console.log("Selamat Anda memenuhi syarat, Silahkan masuk wahana");
}
else{
    console.log("Maaf anda tidak memenuhi syarat");
}


console.log("----MASUK MATERI Loop: for, while, forEach---");
console.log("----Loop for----");
console.log("Memulai 'for' loop...");
for (let i = 1; i<=5; i++) {
    console.log(`Ini adalah putaran ke- ${i}`);
}
console.log("'for' loop selesai");


let baterai = 100;
let jam = 0;

console.log("Memulai 'while' loop");
while (baterai > 0){
console.log(`jam ke-${jam}, Baterai: ${baterai}%`);

baterai = baterai - 20;

}
console.log(`Baterai habis pada jam ke-${jam-1}!`);

console.log(`---for each loop---`);

const keranjangbuah=["Apel", "Jeruk", "Mangga", "Anggur"];

keranjangbuah.forEach(function(buah){
    console.log(`Saya punya buah ${buah}`);
})
console.log("foreach LOOP Selesai");

console.log("---AGENDA HARIAN");
//1. menggunakan foreach untuk menampilkan semua tugas
const TugasHariIni=["Bangun Pagi", "Sarapan", "Mengerjakan Proyek JS", "Makan siang"];
console.log("/n[Tugas Utama Hari Ini]");
TugasHariIni.forEach(tugas =>{
    console.log(`- ${tugas}`);
})

//2. menggunakan for untuk mengulangi yang udah tau jumlahnya
const JumlahEmail=3;
console.log("Tugas Email");

for (let i = 1; i<JumlahEmail; i++){
    console.log(`Mengecek tugas email ke-${i} kalinya`);
}

//3. pakai while untuk tugas kondisional
let gelasAir=5;

while(gelasAir>0){
console.log(`Minum segelas air. Sisa target : ${gelasAir - 1} gelas.`);
gelasAir--;
}
console.log("TArget Air Minum Tercapai");
console.log("Semua Agenda Selesai");

const absen=10;

console.log("cek absen");
for (let i = 1; i<absen; i++){
    console.log(`Yang masuk absen ke-${i}`);
}

const daftarmakanan=["pizzza", "Burger", "Spagetti"];

daftarmakanan.forEach(makanan =>{
    console.log(`Menu yang ada yaitu ${makanan}`);
})

let laptop=8;

for (let i=1; i<laptop; i++){
    console.log(`laptop yang akan dibawa ${i}`);
}






