console.log('Ini adalah materi Sang Penghantar Program');

//Materi If Statement = sebuah keputusan apakah kodenya di jalankan atau tidak

const gajian = true;

if (gajian) {
    console.log('Makan di Mall');
}
else {
    console.log('Makan DI Ruman');
}

const score = 80;
if (score>=90){
    console.log('Kamu Lullus Ujian dan dapat nilai A+');
}
else if (score>=80){
    console.log('Kamu Lulus Ujian');
}
else{
    console.log('Kamu Harus Remedial');
}

const nilaiSiswa = 80;

if (nilaiSiswa>=90) {
    console.log(`Kamu mendapatkan nilai ${nilaiSiswa} dengan Grade : A+`);
}
else if (nilaiSiswa>= 70) {
    console.log(`Nilai kamu ${nilaiSiswa} dengan Grade : A`);
}
else if (nilaiSiswa>=50){
    console.log(`Nilai kamu ${nilaiSiswa}, dengan Grade : B`);
}
else if (nilaiSiswa>=30){
    console.log(`Kamu dapat nilai ${nilaiSiswa} dengan grade : C`);
}
else{
    console.log('Kamu Remedial');
}
//Tenary Operator

const harga = 100000;
const Membership = true;
const discount = Membership ? 0.1 :0;

console.log(`Anda mendapatkan diskon ${discount*harga}`);

//Switch Case = mengevaluasi ekspresion yang akan di jalankan

const fruit = 'Pinapple';     //syntax fruit adalah ekspresion

switch (fruit) {
    case 'apple' :
        console.log('I am Apple');
        break;  //Keyword break wajib dipakai untuk memberhentikan program jika kondisi sudah terpenuhi
        case 'orange' :
            console.log('I am Orange');
            break;
            case 'Banana' :
                console.log('I am Banana');
                break;
                default :
                console.log('No, I am Programmer');
}

const makananIndonesia = 3;

switch (makananIndonesia) {
    case 1 :
        console.log('Nasi Padang Lengkap');
        break;
        case 2 :
            console.log('Nasi uduk + Es Teh');
            break;
            case 3 :
                console.log('Dapet Nasihuyy di penjaruyy');
                break;
                default:
                    console.log('gak Dapet Nasihuyy');
}

const pilihAngka = 1;

switch (pilihAngka) {
    case 1:
    console.log('Bulan Januari');
    break;
    case 2:
        console.log('Bulan Februari');
        break;
        case 3:
            console.log('Bulan Maret');
            break;
            default :
            console.log('Masukkan angka hanya 1-12');
}

const pilihVarian = 3;

switch (pilihVarian) {
    case 1 :
        console.log('Varian Taro Cheese Cake');
        break;
        case 2 :
            console.log('varian Banana Hana');
            break;
            case 3 :
                console.log('Varian Bolu Lapis Talas');
                break;
                default :
                console.log('Pilih Pilihan 1-3');
}

const pilihBulanLahir = 1;

switch (pilihBulanLahir) {
    case 1:
        console.log('Khodam anda bangku warnet');
        break;
        case 2:
            console.log('Khodam anda sendok kondangan')
            break;
            case 3:
                console.log('Khodam anda Wiwok Detok');
                break;
                default :
                console.log('Kamu ga punya khodam');
}

const pilihSiza = 1;
switch (pilihSiza) {
    case 1:
        console.log('Ukuran Jumbo');
        break;
        case 2:
            console.log('Size Sedang');
            break;
            case 3:
                console.log('Size Kecil');
                break;
                default :
                console.log('Pilih angka 1 sampai 3');
}
//Looping = statement untuk mengeksekusi kode secara berulang

//Looping For Loop

for ( let i = 0 ; i < 5 ; i++){  
    //let i adalah nilai dari variabel, i <5 adalah pengecekan kondisi daro variabel, i++ kalau 
// pengecekan sesuai maka nilai i terus berjalan sampai kondisi terpenuhi
    console.log(`Angka ke ${i} adalah ${i}`);
}

for (let g = 0 ; g<5 ; g++){
    console.log(`Angka ${g}`);
}

for (let s = 0 ; s<5 ; s++){
    console.log(`Angkanya ${s}`);
}
//for in, sering untuk objek karena bisa melakukan iterasi ke seluruh objek
console.log('===For In===');

const person = {Nama :'Mumtaz', Nama2 :'Rafa',Nama3 :'Sipa'};

for (const property in person){
    console.log(`nilai ${property}, bernilai ${person[property]}`);
}

console.log(`====Makanan Daerah====`);

const makananDaerah = {papua : 'Papeda', Betawi : 'Kerak Telor', Bandung : 'Seblak'};

for (const Daerah in makananDaerah){
    console.log(`Makanan Daerah ${Daerah} adalah ${makananDaerah[Daerah]}`);
}

console.log('====Benda Tajam====');
const bendaTajam = {benda1 : 'pisau', benda2 : 'Katana', benda3 : 'Golok'};

for (const benda in bendaTajam){
    console.log(`Jenis ${benda}, adalah ${bendaTajam[benda]}`);
}

const daftarMenuMakanan = {menu1 : 'Paket Burger Jumbo', menu2 : 'paket Burger Biasa', menu3 : 'Paket menu kecil'};

for (const menu in daftarMenuMakanan){
    console.log(`${menu} kamu dapat ${daftarMenuMakanan[menu]}`);
}

//For Of, mirip seperti for in tetapi tidak perlu memikirkan key dan property dan dia pakai []
/*
 For Of berbeda ddengan for in karena melakukan looping hanya dengan memanggil variabel
 Sedangkan OFr In melakukan Looping ddengan memanggil property dan variabelnya
*/
console.log('===For Of===');

const makananJepang = ['Ramen', 'Sushi', 'Odeng'];
 
for (const makanannnya of makananJepang){
    console.log(`Makanan khas Jepang : ${makanannnya}`);
}

const makananJepang2 = ['Odeng', 'Mochi', 'Dorayaki'];

for (const makananjepangku of makananJepang2){
    console.log(`Makanan khas Jepang berikutnya ${makananjepangku}`);
}

const makananDaerah2 = ['Kerak Telor', 'Seblak', 'Soto Betawi', 'Pempeks'];

for(const Daerah2 of makananDaerah2){
    console.log(Daerah2);
}

const hewanKarnivora = ['Harimau', 'Buaya', 'Singa', 'Macan'];

for (namaHewan of hewanKarnivora){
    console.log(`${namaHewan} adalah hewan Karnivora`);
}

const bendaTumpul = ['Stik Golf', 'Stik BaseBall', 'Tongkat Pramuka'];

for (bendaTumpulPro of bendaTumpul){
    console.log(`Jenis Jenis Benda Tumpul ${bendaTumpulPro}`);
}

const makananOlahan = ['Sosis', 'Burger', 'HotDog', 'Nuggets'];

for (const Olahan of makananOlahan){
    console.log(`${Olahan} termasuk makanan olahan`);
}

//             ======While======= 
/*
Statement akan dijalankan ketika kondisi bernilai truthy
Jangan lupa untuk memberikan true dan false agar tidak terjadi infinity
While tidak perlu tahhu jumlah data yang di looping, maka dari itu kita harus tau kapan dia akan berhenti
*/

console.log('===Materi Looping While===');

let i = 0;

while (i < 5){
    console.log(`Angka ${i} adalah ${i}`);
    i++;
}

let ikan = 0;
while (ikan < 5 ){
    console.log(`Tangkapan ikan ke ${ikan}`);
    ikan++;
}

//DO While 
/*
Mirip seperti While tetapi pengecekan kondisi diletakkan di akhir
*/

let ikan2 = 0;

do {
    console.log(`Hasil Tangkapan yang ke ${ikan2}`);
    ikan2++
} while (ikan2<5);


/*
Control Statement, statement yang digunakan untuk menghentikan eksekusi
Control Statement bisa pakai break dan continue
*/

console.log('===Materi Control Statement===');

//Menggunakan Break

for (let a = 0; a < 10; a++ ){
    if (a === 5){  //Jika nilai a = 5, maka program akan dihentikan oleh break
        break;  
    }
    console.log(`Angka Yang Muncul ${a}`);
}

for (let c = 0 ; c < 100 ; c++){
    if (c === 50){
        break;
    }
    console.log(`Angka nilai c : ${c}`);
}

//Menggunakan continue

for (let b = 0 ; b < 10; b++){
    if (b === 5){     //Jika b sama dengan 5
        continue;     //Eksekusi dihentikan, kemudian dilanjutkan 
    }
    console.log(b);   //Dengan perintah berikutnya yaitu console.log(b)
}

for (let c = 0 ; c<20 ; c++){
    if (c === 5){
        continue;
    }
    console.log(c);
}

for (let e = 0 ; e< 5 ; e++){
    if (e === 3){
        continue;
    }
    console.log(e);
}


//          =====ERROR HANDLING====
/*
Merupakan cara bagaimana kita untuk menemukan dan mengatasi eror
Ada 2 macam yaitu Throwing Error dan Catching Error
*/

//Throwing error cuman cara bikin eror doang
// Catching Error, Bagaimana cara kita untuk menangkap error

/* Try - Catch, merupakah salah satu cara menangani error yang dimana memiliki 2 blok utama yaitu Try dan Catch. 
Try Adalah kode untuk menangani error sedangkan catch adalah kode yang dijalankan jika ada error di blok Try
*/ 

try {
    console.log('Tidak Terjadi error');
} catch (err){
    console.log('tidak ada eror');  //Barisan ini tidak tampil karena blok Try tidak error
}

//      ====Implementasi FLow Control====

function checkGrades(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (typeof grades[i] !== 'number') {
      throw new Error('Invalid input. Please provide an array of numbers.');
    }
 
    const grade = grades[i];
    let predicate;
 
    if (grade >= 90) {
      predicate = 'A';
    } else if (grade >= 80) {
      predicate = 'B';
    } else if (grade >= 70) {
      predicate = 'C';
    } else if (grade >= 60) {
      predicate = 'D';
    } else {
      predicate = 'E';
    }
 
    console.log(`Grade ${i + 1}: ${grade} (${predicate})`);
  }
}
 
try {
  const studentGrades = [95, 85, 65, 80, 70];
  checkGrades(studentGrades);
} catch (e) {
  console.error(e);
}


