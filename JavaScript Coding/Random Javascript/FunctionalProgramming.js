// === Functional Prpgramming ===
/*
Adalah paradigma pemrograman yang didasar matematika murni
yakni fungsi harus menghindari perubahan data sehingga selalu menghasilkan nilai yang sama sesuai dengan argumen yang sama
dengan ini kita dapat membuat aplikasi dengan kode yang deklaratif (lebih simpel, tegas, dan terprediksi).
*/

// Cara Imperatif, ntuk mencapai suatu tujuan, 
// kita perlu menulis instruksi yang sifatnya langkah demi langkah. Kita perlu mendefinisikan cara melakukan perulangan, waktu perulangannya harus berhenti, hingga mengisikan nilai ke array baru
const names = ['Mumtaz', 'sipa', 'Dappa'];

const namaBaru = [];

for (let i = 0; i< names.length; i++){
    namaBaru.push(`${names[i]}!`);
}

console.log(namaBaru);

// Cara Deklaratif, 

const name2 = ['Mumtaz', 'madul', 'shafa'];

const namaBaru2 = name2.map((nama) => `${nama}!`);  // map adalah implementasi dari konsep FP

console.log(namaBaru2);

const name3 = ['Mumtaz', 'Bima', 'Setiawan'];
const panggilName3 = name3.map((nama2) => `${nama2}`);
console.log(panggilName3);

const name4 =['Mumtaz', 'Syukron', 'Rifqi'];
const panggilName4 = name4.map((nama2) => `${nama2}`);
console.log(panggilName4);

// === Pure Function ===
//  FP menawarkan banyak fitur sehingga kode yang ditulis akan lebih ringkas dan kode mudah dijalankan. Oleh karena itu kita belajar pure Function
// Keuntungan memakai PF adalah untuk mengoptimalkan kode dengan Memoization, yaitu menyimpan fungsi dan akan digunakan ketika menerima input yang sama Tapi ini ga dibahas sekarang
/*
Pure Function memiliki 2 fungsi
1. Mengeluarkan nilai yang sama jika di panggil argumen yang sama. Misalnya kalau argumen x maka nilainya Harus Y (Tidak Boleh berubah apapun yang terjadi)
2. tidak memiliki efek samping kepada hal diluar dari function tersebut
*/
// ===================Contoh Impure Function =====================

let value = 0;

function addWith(addingValue) {
    value += addingValue;
    console.log(`Angka ${value} harus bernilai sama setiap di cetak`);
    return value;
}
const result1 = addWith(1);   //Memiliki efek samping karena mengubah value yang ada di function
const result2 = addWith(2);
const result3 = addWith(3);

console.log(result1, result2, result3);   // Kalau di cetak, hasilnya tidak sama dengan argumen yang diberikan

// ============= Contoh Pure Function ============

function addDengan (Nilai, addingNilai){  //Nilai dan addingNilai adalah argumen yang akan di beri nilainya di variabel const di bawah
    return Nilai + addingNilai;
}

const Hasil1 = addDengan(0, 1);
console.log(`Nilainya Tetap sama dengan argumen di atas ${Hasil1}`);

const Hasil2 = addDengan(1, 1);  // Angka 1, 1 adalah argumen
console.log(`Hasilnya tetap sama dengan argumen di atas ${Hasil2}`);

console.log(Hasil1, Hasil2);

let nilai = 0;

function AddOleh(Nilai1, AddingNilai2){
    return Nilai1 + AddingNilai2;
}

const Hasil3 = AddOleh(2,2);
console.log(`Nilai yang akan keluar : ${Hasil3}`);

function Tambahkan(Jumalah1, Jumlah2){
    return Jumalah1 + Jumlah2;
}

const Hasil4 = Tambahkan(3, 3);
console.log(`Nilai yang akan keluar ${Hasil4}`);

function addOakai(Nilai2, Nilai3){
    return Nilai2 + Nilai3;
}

const Hasil5 = addOakai(9, 9);

console.log(`Hasil yang akan keluar adalah ${Hasil5}`);

// ==== High Order Function ===
/*
Yang berarti function dipakai sebagai expression(contoh = 8 + 8) yang disimpan di sebuah variabel, 
dan  nilai dari expression akan dimasukkan sesuai sengan dengan variabel yang kita mau 
Pokoknya expressionnya nanti di isi dengan nilai yang bisa berbeda beda
*/

function appy(operation, ...args){
    return operation(...args);
}

function sum(a, b, c){
    return a + b + c;
}

function discount(disc, value){
    return value - ((disc / 100) * value);
}

const productPrice = appy(sum, 200, 200, 200);
const withDiscount = appy(discount, 25, productPrice);

console.log(`Harga Produk : ${productPrice}`);
console.log(`Diskon yang didapat ${withDiscount}`);

function Tambahkan2(operasi2, ...array2){
    return operasi2(...array2);
}
function HitungKali(a, b, c, d){
    return a * b * c * d;
}
function hitungDiskon(diskon2, value2){
    return value2 - ((diskon2 / 100) * value2);
}

const totalPembelian = Tambahkan2(HitungKali, 20, 20, 8, 8);
const totalDiskon = Tambahkan2(hitungDiskon, 30, 30);

console.log(`Total dari perkalian barangnya adalah : ${totalPembelian}`);
console.log(`Total diskon yang akan didapatkan ${totalDiskon}`);
    

function Mulai(operasi,...deklarasi){
    return operasi(...deklarasi);
}

function JumlahApel(a, b, c){
    return a + b +c;
}

const hitungApel = Mulai(JumlahApel, 2, 2, 2);

console.log(`Jumlah apel yang ada adalah ${hitungApel}`);



function apply(Perhitungan, ...Tempat){

    return Perhitungan(...Tempat);
}

function pertambahan(a, b, c){
    return a +b + c;
}

function penguranganKompleks(a, b){
    return a - b;
}

const hitungPertambahan = apply(pertambahan, 100, 200, 300);
const hitungOenguranganKompleks = apply(penguranganKompleks, );

console.log(`Hasil Pertambahannya adalah ${hitungPertambahan}`);



// Hal lain yang bisa di lakukan  HOF adalah Currying
// dia ambil 1 argumen dulu, terus ngembaliin function baru yang nerima argumen kedua
// ==- Contoh Currying pada fungsi adjectovy dan multiplyby

function adjectivfy(adjective){
    return function (noun){
    return `${noun} ${adjective}.`;
    }
} 

function multiplyby(x){
    return function(y) {
        return x * y;
    }
}

const coolifer = adjectivfy('Keren');
const funnifier = adjectivfy('Seru');

const multiplefive = multiplyby(5);

console.log(coolifer('Dicoding'));
console.log(funnifier('JavaScript'));

console.log(multiplefive(8));

console.log(`====================`);

function kataYgMasuk(KataDitambahkan){
    return function(noun){
        return `${noun} ${KataDitambahkan}`;
    }
}

function hitungX(x){
    return function(y){
        return x *y *x;
    }
}

const GabungkanKata = kataYgMasuk('Engginer');
const Gabungangka = hitungX(4);

console.log(GabungkanKata('Mumtaz'));
console.log(Gabungangka(10));

console.log(`====================`);

function kataYgMasuk2(KataDitambahkan2){
    return function(noun){
        return` ${noun} ${KataDitambahkan2}`
    }
}

function hitungXX(XX){
    return function(y){
        return y + XX / y;
    }
}

const GabungkanKata2 = kataYgMasuk2(`Anjay`);
const Gabungangka2 = hitungXX(3);

console.log(GabungkanKata2(`Halo`));
console.log(Gabungangka2(2));





//HOF juga bisa digunakan untuk komposisi fungsi yaitu menggabungkan beberapa fungsi kecil menjadi satu fungsi yang kompels

function addOne(x){
    return x + 1;   // disini nilai x adalah 3, maka 3 + 1 = 4
}

function square(x){   //disini fungsi x berubah jadi 4
    return x * x;  //Jadi 4 * 4 = 16
}

function compose(f, g){
    return (x) => {
        return f(g(x));
    }
}

const addOneandSquare = compose(square, addOne);

console.log(addOneandSquare(3));

// === AKU MEMANGGIL DIRIKU (RECURSIVE) ===
/*
Dalam dunia FP tidak ada yang namanya perulangan
Tidak ada perulangan karena  dibutuhkan perubahan data pada variabel, sedangkan FP menghindari perubahan data
Recursive adalah teknik yang dimana function memanggil dirinya sendiri sampai sebuah perintah terpenuhi

*/

function generateArray(n){
    const result = [];
    for (let counter = 0 ; counter <= n ; counter +=1) { //FP tidak boleh ada perubahan data sehingga nilai dari counter gabisa di ubah
        result.push(counter);
    }
    return result;
}

console.log(generateArray(7));

// Solusi yang ditawarkan :
function generateArray2(n){
    if (n < 0) {
        return [];
    }
    return [...generateArray2(n - 1), n];
}

console.log(generateArray(5));

function buatkanArray(n){
    if (n < 0){
        return [];
    }
    return [...buatkanArray (n -1 ), n];
}

console.log(buatkanArray(100));


// === IMMUTABILITY ===
/*
ada konsep yang dimana yang udah dibuat tidak bisa dikembalikan lagi
Tujuannya agar nilai tidak mudah untuk dirubah atau bahkan  tidak bisa, serta untuk menghindari bug
*/

// kode ini bukan pure kode

function max(arrayOfNumbers){
    return arrayOfNumbers
    .sort((a, b) => a - b)
    .pop();
}

const numbers = [10, 23,56,39,55,80];
const largest = max(numbers);

console.log(largest);
console.log(numbers);



// contoh object.assignn dapat mengubah nilai pada sebuah objek :

function RegisterEmail(person, email){
    return Object.assign(person, {email});
}

const person = {
    name: 'Mumtaz',
    username: '@Mumtaz',
};

const personWithEmail = RegisterEmail(person, 'Mumtaz@dicoding.com');

console.log(person);
console.log(personWithEmail);

// Perbaikan kedua kode di atas :

function maximal(DeretAngka){
    return [...DeretAngka]  //Pake spread operator ...DeretAngka
    .sort((a, b) => a - b)
    .pop();
}

function buatEmail(nama, alamatEmail){
    return {...nama, alamatEmail}; // Pake spread operator ...nama
}

const Angka = [10, 20 ,30, 40, 50, 60];
const angkaTerbesar = maximal(Angka);

console.log(Angka);
console.log(angkaTerbesar);

const nama = {
    nama: 'Mumtaz',
    username: '@MumtazPakeS',
}

const namaDenganEmail = buatEmail(nama, 'Mumtaz@dicoding.com');

console.log(namaDenganEmail);
console.log(`Berikut adalah data lengkap : ${namaDenganEmail}`);  //Gabisa cuk
console.log(nama);

// Contoh yang lain :

function dataLengkap(nama, alamatRumah){
    return {...nama, alamatRumah};
}

const nama3 = {
    nama: 'Mumtaz',
    Umur: '18 Tahun',
    Citacita : 'Punya perusahaan coding, hosting terbesar',
}

const nama3denganAlamatRumah = dataLengkap(nama3, 'Jalan Agung Raya 1 ');

console.log(nama3denganAlamatRumah);

// Kode di atas bisa digunakan dengan array 

// macam macam Array :

// Array Map
const oldArray = ['Mumtaz', 'Madul', 'Shafa', 'Bima'];
const newArray = oldArray.map((namaa) => `${namaa}!!!`);

console.log(oldArray);
console.log(newArray);

// Array Filter 

const students = [
    {
        nama :'Mumtaz',
        Nilai : 100,
    },
    {
        nama : 'Shafa',
        Nilai : 100,
    },
    {
        nama : 'Sahroni',
        Nilai : 67,
    }
];

const SiswayangEligible = students.filter((student) => student.Nilai > 85);

console.log(SiswayangEligible);

// Array reduce, Nanti bakal keluar 1 output aja contoh dibawah adalah menjumlahkan nilai siswa 
// Kode dibawa eror gatau kenapa aneh

const namaSiswa = [
    {
        nama : 'Mumtaz',
        Nilai : 100,
    },
    {
        nama : 'Shafa',
        Nillai : 100,
    },
    {
        Nama : 'Sahroni',
        Nilai: 67,
    }
];

const totalScore = namaSiswa.reduce((acc, siswa) => acc + siswa.Nilai, 0);

console.log(totalScore);

// Immutable object, yang dimana kode akan freeze dan tidak ada perubahan di objeknya

const namaOrang = {
    nama : 'Mumtaz',
    Umur : 19,
};

Object.freeze(namaOrang); // Ini membekukan variabel namaOrang jadinya gabisa di ubah ubah

namaOrang.email = 'anjay';  // coba ubah properti yang dibekuin, tapi gabisa

console.log(namaOrang);


const sampleProducts = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
  { id: 2, name: 'Phone', category: 'Electronics', price: 500 },
  { id: 3, name: 'Shirt', category: 'Apparel', price: 50 },
  { id: 4, name: 'Shoes', category: 'Apparel', price: 80 },
  { id: 5, name: 'Watch', category: 'Accessories', price: 200 },
];

function getProductsByCategory(products, category) {
  /**
   * TODO:
   * Gunakan metode array immutable untuk mengembalikan array produk yang termasuk dalam kategori yang diberikan.
   */

  return products.filter(product => product.category === category);

}

function findProductById(products, id) {
  /**
   * TODO:
   * Gunakan metode array immutable untuk mengembalikan produk dengan ID yang cocok.
   */

  return products.find( product => product.id === id);
}

function calculateTotalPrice(products) {
  /**
   * TODO:
   * Gunakan metode array immutable untuk menghitung total harga semua produk.
   */
  return products.reduce((total, product) => total + product.price, 0);


}

function applyDiscount(products, discount) {
  /**
   * TODO:
   * Gunakan metode array immutable untuk mengembalikan array baru,
   * di mana setiap produk memiliki harga yang sudah dikurangi dengan diskon yang diberikan.
   */
  return products.map(product => ({
    ...product,
    price: product.price - (product.price * discount / 100)
  }));

}

console.log(getProductsByCategory(sampleProducts, 'Electronics')); // Should return products with id 1 and 2
console.log(calculateTotalPrice(sampleProducts)); // Should return 1830
console.log(applyDiscount(sampleProducts, 10)); // Should return products with prices reduced by 10%
console.log(findProductById(sampleProducts, 3)); // Should return the product with id 3


