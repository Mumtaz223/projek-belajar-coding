//ARRAY
console.log(`===Memakai Array===`);
const baju = ['Mumtaz', 'silvi', 'Dewi'];
console.log(baju[0]);

const ikan = ['Ikan Mujair', 'Ikan Mas', 'Ikan Hiu MBG'];
console.log(ikan[2]);

//memakai Data New Set
console.log(`===Memakai Data New Set===`);

const pizza = new Set ();
pizza.add('Besar');
pizza.add('Jumbo');

console.log(pizza);

const nasiUduk = new Set();
nasiUduk.add('nasiUdukEnak');
nasiUduk.add('Nasi Uduk Biasa aja');

nasiUduk.forEach((nasi) => console.log(nasi));

console.log(`====List Data Parfum====`);

const parfum = new Set ();
parfum.add('Mykonos California');
parfum.add('Ysl Y Edp');
parfum.add('humans Alpha');

parfum.forEach((Parfum1)=> console.log(Parfum1));


const ikanLaut = new Set (['Ikan Mas', 'Ikan Hiu MBG', 'Ikan Salmon']);
console.log(ikanLaut);

const bendaTajam = (['Pisau', 'Katana', 'Ama no Murakumo']);
console.log(bendaTajam);

const smartphone = new Set ();
smartphone.add ('Xiaomi 17 pro');
smartphone.add('Ipphone 17 ');
smartphone.add('Oppo');

smartphone.forEach((smartphone) => console.log(smartphone));

const Thrift2 = new Set();
Thrift2.add('Sepatu New Balance');
Thrift2.add('Sepatu Nike');
Thrift2.add('Sepatu Adidas');

Thrift2.forEach((Thrift2) => console.log(Thrift2));

const makananIndia = new Set();
makananIndia.add('Pani Puri');
makananIndia.add('Air Kobokan');

makananIndia.forEach((makananIndia) => console.log(makananIndia));

console.log(`===Daftar Menu Burger===`);
const daftarMenuMakanan = new Set();
daftarMenuMakanan.add('Burger Jumbo');
daftarMenuMakanan.add('Burger Sedang');
daftarMenuMakanan.add('Burger kecil');

daftarMenuMakanan.forEach((daftarMenuMakanan) => console.log(daftarMenuMakanan));


//memakai Data New Map

console.log(`===Memakai Data New Map===`);

const burger = new Map([
    ['Jumbo Harganya ', 30000],
    ['kecil Harganya', 20000],
]);

console.log(burger);

const helm = new Map ([
    ['Helm KYT', 200000],
    ['Helm NJS', 600000],
]);

console.log(helm);

const makananAyam = ([
    ['Vitamin', 300000],
    ['Dedak, 60000'],
]);

console.log(makananAyam);

const makananEnak = ([
    ['Menu 1', 'Pizza Goreng'],
    ['menu 2 ', 'Pizza Chocolate'],
    ['Menu 3', 'Pizza geprek'],
])

console.log(makananEnak);

const ikanLaut2 = new Map();
ikanLaut2.set('Ikan MBG', 'Ikan Hiu');

console.log(ikanLaut2);

//Menampilkan Objek

console.log(`===Menampilkan Objek===`);

const piring = {
    biasa : 10000,
    biasaja : 5000,
};

const {biasa, biasaja} = piring;

console.log(biasa);

//Spread Operator = Menyebarkan Objek dan array

console.log(`===Spread Operator===`);

const baju1 = ['Bagus', 'Keren', 'Mantap'];
const semuaBaju = [...baju,...baju1];

console.log(semuaBaju);

const namaBurung = ['Kacer', 'Kutilang', 'Perkutut'];
const semuaBurung = [...namaBurung];

console.log(`Nama semua burung : `, semuaBurung );


//Rest Operator 

console.log(`===Rest Operator`);

function makanan1(number,...namaMakanan){
    console.log(`number`, number);
    console.log(`makanan`, namaMakanan);
}

makanan1('Burger', 'Bueger lagi', 'udah males');

//Versi Pakai Length
function bakso(...namaBakso){
    console.log(namaBakso.length);
    console.log('Nama Bakso', namaBakso);
}

bakso(`Bakso enak`, `bakso pedes`, `Bakso Depan Taman`);

function sepatu(...namaSepatu){
    console.log(namaSepatu.length);
    console.log('Jenis Sepatu : ', namaSepatu);
}
sepatu('Adidas', 'nike', 'Puma');

const Thrift = ['Sepatu adidas', 'sepatu nike', 'carhart', 'Sepatu New balance'];

const [pertama, kedua, ...sisaNya] = Thrift;

console.log(pertama);
console.log(kedua);
console.log(sisaNya);


//All Materi Random Bukan Sembarang Data

console.log(`===All Materi Bukan sembarang Data===`);

const nama2 = {
    'Nama' : 'Mumtaz',
    'Last' : 'Qaulani',
}

const {Nama, Last} = nama2;
console.log(Nama);

const ikanSungai = {
    'ikan1': 'Ikan Mujair',
    'Ikan2':'Ikan Mas',
};

delete ikanSungai.ikan1;
console.log(ikanSungai);


const makananJepang = ['Sushi', 'Ramen', 'mochi'];
console.log(makananJepang[1]);

const makananJepang2 = Array.from('Ikan');
console.log(makananJepang2);

const makananKorea = ['Mie Samyang', 'Kimchi', 'Bibimbab', 'jjampong'];
makananKorea[1] = 'Bulgogi'; //Memanipulasi element
makananKorea.push('Kimbap'); //Menambahkan Elemen pada baris terakhir (key value)
delete makananKorea[0]; //Menghapus elemennya saja, saat ditampilkan hasilnya empty
makananKorea.splice(3, 3); //menghapus element dan datanya (key value)

console.log(makananKorea);

//Array Versi Descructuring
const makananKorea2 = ['Kimbap', 'Kimchi', 'Bulgogi'];
const [mknrea1, mknrea2, mknrea3] = makananKorea2; 
console.log(mknrea1);

//Menstrukturkan data dengan map
const makananIndonesia = new Map();
makananIndonesia.set('ikan Bakar', 'Ikan Goreng', 'pepes Tahhu', 'Tahu isi');

console.log(makananIndonesia);

const makananIndonesia2 = new Map([
    ['Makanan Pertama', 'Ikan Goreng'],
    ['Makanan Kedua ', 'Nasi Padang'],

])

console.log(makananIndonesia2);

//Menstrukturkan data dengan set

const makananChina = new Set();
makananChina.add('Kwetiaw');          //ini pakai method add
makananChina.add('Kue Keranjang');
makananChina.add('Dodol China');
makananChina.delete('Kwetiaw');     //Menghapus element

makananChina.forEach((makananChina) => console.log(makananChina));

//Spread Operator

const makananChina2 = ['Dodol China', 'Kue Keranjang'];
const makananChina3 = ['Kwetiaw', 'Dimsum'];
const semuaMakananchina = [...makananChina2,...makananChina3];

console.log(semuaMakananchina);

//Rest Operator
//Dimana Menyimpan lebih dari 1 data pada argumen

function minumanSegar(...minuman){
    console.log('Minuman Yang Segar', minuman);
}

minumanSegar('Es Teh Manis', 'Es jeruk', 'Matcha');

function minumanSegar2(...minuman2){
    console.log('Minuman Segar Kedua', minuman2);
}
minumanSegar2('Es Kopi Susu', 'Green Tea Ice', 'Thai Tea Ice');

const employees = [
  {
    name: 'Fulan',
    email: 'fulan@dicoding.com',
    joinYear: 2020,
  },
];

function addEmployee(name, email, joinYear) {
  // Membuat objek karyawan baru
  const newEmployee = {
    name: name,
    email: email,
    joinYear: joinYear,
  };

  // Menambahkan ke array employees
  employees.push(newEmployee);
}

// Contoh penggunaan:
addEmployee('Aisyah', 'aisyah@dicoding.com', 2022);

console.log(employees);
