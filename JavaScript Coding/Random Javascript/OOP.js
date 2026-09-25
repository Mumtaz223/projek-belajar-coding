/*
Paradigma pemrograman adalah cara bagaimana programmer menulis kode atau memecahkan masalah dengan berbagai macam solusi
Paradigma terdiri dari mperative, object-oriented, procedural, dan functional
Kali ini kita membahas paradigma OOP
*/

//  Javascript bukan bahasa berbasis class tapi prototype
// Membuat objek dengan Constructor Function
function Person(name, age) {  //Ini adalah blueprint untuk entitas person (masih blm dipanggil)
  this.name = name;
  this.age = age;
}
 
Person.prototype.eat = function() {
  console.log(`${this.name} is eating`);
}

//   Membuat Objek Person
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);
 
console.log(person1.name); // Output: Alice
console.log(person2.name); // Output: Bob
 
person1.eat();
person2.eat();

const person3 = new Person('Mumtaz', 18);

console.log(person3.name);

person3.eat();

//  ===ES6===
//  Cara modern untuk membuat objek dan juga class

class Orang {        //Cetak birunya
  constructor(nama, umur){
    this.nama = nama;
    this.umur = umur;
  }
  makan(){
    console.log(`${this.nama} lagi makan `);
  }
}

const Person4 = new Orang ('Mumtaz', 18);  //Mendefinisikan Nilai Pada cetak biru
const Person5 = new Orang ('Enel', 20);

console.log(Person4.nama);   // memanggil objeknya

Person5.makan();   //Memanggil Objeknya/mencetak nilainya

class orang2 {
  constructor(nama2, umur2){
    this.nama2 = nama2;
    this.umur2 = umur2;
  }
  kegiatan(){
    console.log(`${this.nama2} lagi belajar JavaScript`);
  }
}

const Person6 = new orang2('Mumtaz Pake S', 18);

console.log(Person6.nama2);

Person6.kegiatan();


console.log('===Makanan Jepang====');
class makananJepang{
  constructor(Jenis, tipe){
    this.Jenis=Jenis;
    this.tipe=tipe;
  }
  spesial(){
    console.log(`${this.tipe} adalah menu spesial`);
  }
}

const personMakananJepang = new makananJepang('Chiken Katsu', 'Porsi Jumbo');

console.log(personMakananJepang.Jenis);

personMakananJepang.spesial();


console.log('=== Makanan Khas Bandung ===');

class makananBandung{
  constructor(namaMakananBandung, porsiMakananBandung){
    this.namaMakananBandung = namaMakananBandung;
    this.porsiMakananBandung = porsiMakananBandung;
  }
  spesial(){
    console.log(`Untuk porsi ${this.porsiMakananBandung} adalah porsi paling lengkap`);
  }
}

const personMakananBandung = new makananBandung('Seblak', 'Jumbo Spesial');

console.log(personMakananBandung.namaMakananBandung);

personMakananBandung.spesial();


//   ===Berbagai macam pilar Paradigma===

/*   ===Pilar1 = Inheritance===
Inheritance berarti pewarisan yang dimana dapat mewariskan property dan method dari class lain
Intinya class dapat diwariskan dan digunakan untuk banyak class lagi
Tujuannya agar program bisa lebih ringkas lagi
 Mewariskan class dan method disebut SuperClass
  Mewariskan class dan method dari class lain disebut SubClass
*/

class Mobil {
  constructor(nama, warna, CC){
    this.nama = nama;
    this.warna = warna;
    this.CC = CC;
  }


Penggerak(){
  console.log(`${this.nama} pake penggerak 4 x 4`);
}
}

class Diesel extends Mobil{
    JenisDiesel(){
  console.log('Mobil ini bermesin Diesel');
    }
}

class bensin extends Mobil{
  Jenisbensin(){
    console.log('Mobil Ini bermesin bensin');
  }
}

const Person7 = new Diesel('Land Cruiser Vx80', 'hijau', '2400CC');
const Person8 = new bensin('Mazda 3', 'Merah', '2000CC');

Person7.JenisDiesel();
Person8.Jenisbensin();

console.log(Person7.nama);

class makananJepangKedua{
  constructor(nama, jenis, porsi){
    this.nama = nama;
    this.jenis = jenis;
    this.porsi = porsi;
  }
  pelengkap(){
    console.log(`Khusus Jenis ${this.jenis} include minuman Gratis`);
  }
}

class JenisSpesial extends makananJepangKedua{
  EkstraMie(){
    console.log('Mendapatkan ekstra mie');
  }
}

const personMakananJepangKedua = new JenisSpesial('Ramen', 'Tori Miso', 'Besar');

personMakananJepangKedua.EkstraMie();
personMakananJepangKedua.pelengkap();

console.log('=== HP Adnroid dan Iphone ===');

class Smartphone {
  constructor(nama, warna, jenis){
    this.nama = nama;
    this.warna = warna;
    this.jenis = jenis;
  }

  kesamaan(){
    console.log('Sama Be');
  }
}
  class Android extends Smartphone{
    JenisAndroid(){
    console.log('Android memiliki banyak akses');
  }
  }
  class Iphone extends Smartphone{
    JenisIphone(){
    console.log('Akses Iphone tidak sebanyak android');
  }
}


const IOS = new Iphone('Ipnone 17 Pro Max', 'Orange', 'Ram 16GB');
const Andro = new Android('Xiaomi 17 Pro Max', 'Silver', 'Ram 16GB');

IOS.JenisIphone();
Andro.JenisAndroid();

//  ===Encapsulation ===
/*
Encapsulation secara singkat membatasi/privat kode yang dibutuhkan, jadi ga sembarang orang bisa melihat kodenya. Jadi 
Encapsulation adalah proses untuk membungkus data di suatu wadah yang disebut dengan class. Menyembunyikan data adalah bagian kunci dari encapsulation.
Pada class bisa mendefinisikan 2 hal yaitu property sama method, kalo di encapsulation kita harus mendefinisikannya keduanya
*/

console.log('=== Mengubah property yang ada ===');

class CoffeMachine {
  constructor(waterAmount){
    this.waterAmount = waterAmount;
    this.Temperature = 90;
  }


makeCoffe(){
  console.log('Membuat kopi dengan suhu', this.Temperature);
}
}

const coffe = new CoffeMachine(100);
coffe.Temperature = 60;

coffe.makeCoffe();

console.log('Ubah nama menu');

class daftarMakanan {
  constructor(Ramen){
    this.Ramen = Ramen;
    this.Kuah = 20;
  }
  Spesial(){
    console.log('Kuah SUper Spesial', this.Kuah);
  }
}

const daftarMakananYoi = new daftarMakanan('Ramen Ektra Beef');
daftarMakananYoi.Kuah = 90;

daftarMakananYoi.Spesial();
console.log(daftarMakananYoi.Ramen);


// Contoh di atas kita mengubah nilainya menjadi 60. Untuk mencegah perubahan nilai kita bisa pake getter dan setter
// Getter = dari method get, cara mendapatkan nilai dari property, Setter = method set, cara menetapkan nilai property
//Contoh Getter dan Setter :

console.log('=== Mencegah perubahan nilai ===');

class buatKopi {
  constructor(Air){
    this.Air - Air;
    this._Suhu = 90  //Underscore untuk menandakan kalo nilai tidak bisa di rubah
  }


  set Suhu(Suhu){
    console.log('kamu tidak bisa mengubah nilai');
  }

  get Suhu(){
    return this._Suhu;
  }
}

const kopi = new buatKopi();

console.log('Sebelum diubah : ', kopi.Suhu);
kopi.Suhu = 80;
console.log('Setelah diubah : ', kopi.Suhu);



//  Agar nilai benar benar tidak berubah, maka gunakan # bukan underscore. Contoh :

class mesinJus {
  #Suhu = 90;

  constructor(Air){
    this.Air = Air;
    this.#Suhu = this.#defaultSuhu();
  }
  
  set Suhu(Suhu) {
    console.log('kamu gabisa merubah nilai suhunya');
  }

  get Suhu(){
    return this.#Suhu;
  }

  #defaultSuhu(){
    return 90;
  }
}
// === Polymhorphsm ===
/*
 Adalah bagaimana cara mengubah implementasi yang diturunkan dari superclass contohnya : Charging ();
 Intinya dapat mengubah Properti dari constructor dan mengubah implementasi dari superclass
*/
// Overriding Constructor adalah cara untuk menambahkan property constructor yang ada di superclass dengan SubClass
// Overriding Method adalah bagaimana cara mengubah implementasi yang ada di superclass mengggunakan SubClass

// === Overrdiding Method ===

console.log('=== Contoh Overrriding Method ---');

class Laptop {
  constructor(brand, jenis, OS){
    this.brand = brand;
    this.jenis = jenis;
    this.OS = OS;
  }

  Mode(){
    console.log(`Mode Gaming?`);
  }
}

class LaptopUmum extends Laptop{
   constructor(brand, jenis, OS, Warna){
    super(brand, jenis, OS);
    this.Warna = Warna;
  }
  Mode(){
    super.Mode();
    console.log(`Khusus Laptop ${this.brand} Sudah Bisa Gaming`);
  }

}

class LaptopMac extends Laptop{
  constructor(brand, jenis, OS, Warna){
    super(brand, jenis, OS);
    this.Warna = Warna;
  }

  Mode(){
    super.Mode();
    console.log(`Khusus ${this.brand} tidak ada untuk gaming`);
  }
}

const LaptopMSI = new LaptopUmum('MSI', 'MSI Thin', 'Windows', 'Grey');
const MacBook = new LaptopMac('MacBook', 'Air', 'Mac OS', 'Hitam');

LaptopMSI.Mode();
MacBook.Mode();

class sepatu {   //Ini adalah superclassnya
  constructor(Brand, Jenis, Warna){
    this.Brand = Brand;
    this.Jenis = Jenis;
    this.Warna = Warna;
  }
  Sprint(){
    console.log(`Brand Ini Sudah ada jenis Sprint`);
  }
}

class sepatuBrand extends sepatu{    //Ini adalah SubClassnya
  constructor(Brand, Jenis, Warna, Ukuran){
    super(Brand, Jenis, Warna);
    this.Ukuran = Ukuran;
  }

  Sprint(){
    super.Sprint();
    console.log(`Brand ${this.Brand} punya varian sepatu Futsal `);
  }

  Collab(){
    console.log(`${this.Brand} ada spesial collab`);
  }
}

class sepatuBrandMahal extends sepatu {
  constructor(Brand, Jenis, Warna, Ukuran){
    super(Brand, Jenis, Warna);
    this.Ukuran = Ukuran;
  }
}

const SepatuTernama = new sepatuBrand('Adidas', 'Samba', 'Abu Abu', '40');

SepatuTernama.Sprint();
SepatuTernama.Collab();
console.log(`Ukuran : ${SepatuTernama.Ukuran}`)


// == Object Composition ===
/* 
Misal ada karakter wizard, defent, dan atacker yang memiliki kemampuannya masing masing. 
Masalahnya ketika timbul karakter warior yang memiliki semua kemampuan dari ketiga karakter tersebut
Maka kita akan menggunakan Object Composition agar lebih efektif
*/ 

class character {
  constructor(name, healt, position){
    this.name = name;
    this.healt = healt;
    this.position = position;
  }

  canMove(){
    console.log(`${this.name} pindah ke posisi lain!`)
  }
}

function canAttack(character){   // Ini adalah berbagai macam kemampuan dari karakter yang akan dipakai karakter yang memiliki kemampuannya
  return{
    attack: () => {
      console.log(`${character.name} attack with weapon!`);
    }
};
}

function canDefend(character){
  return{
    defend: () => {
      console.log(`${character.name} defend with a shield!`);
    }
  };
}

function canSpell(character){
  return{
    spell: () => {
      console.log(`${character.name} casts a spell!`);
    }
  };
}

function createMonster(name){   // Menyain property yang dimiliki oleh karakternya, kita mengelompokkan skils ke objek disini
  const Character = new character(name, 100, 0);  // function ini berfungsi untuk menambahkan skils attack ke objek Monster
  return Object.assign(Character, canAttack(Character));  // Object.assign() akan mengembalikan objek target yang dimodifikasi.
}

function crateDefend(name){ 
  const Character = new character(name, 100, 0 );
  return Object.assign(Character, canDefend(Character));
}

const monster = createMonster('Monster');  // Untuk mencetak Objek yang udah di kelompokkan
monster.attack();
monster.canMove();

const Defender = crateDefend('Defender');
Defender.defend();
Defender.canMove();

class Animal {
  constructor(name, age, isMamal){
    this.name = name;
    this.age = age;
    this.isMamal = isMamal;
  }
}

class Rabbit extends Animal{
  eat(){
    return `${this.name} sedang makan!`;
  }
}

class Eagle{
  constructor(name, age, isMamal){
    this.name = name;
    this.age = age;
    this.isMamal = isMamal;
  }
  fly(){
    return `${this.name} sedang terbang!`;
  }
}

const myRabbit = new Rabbit('labi', 2);
const MyEagle = new Eagle('Elo', 4);

console.log(myRabbit.eat());
console.log(MyEagle.fly());

console.log(myRabbit instanceof Animal);
console.log(MyEagle instanceof Animal);