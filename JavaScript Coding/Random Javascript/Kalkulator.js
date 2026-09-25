console.log("---Materi Fungsi (function, parameter, return), Arrow Function---");

function sapaDunia(){
    console.log("Halo ini materi function pertama");
    console.log("Belajar terus, gapai mimpi");
}

sapaDunia(); //fungsinya untuk manggil function di atas
 console.log("---Materi Parameter---");
function sapaPengguna(nama){
    console.log(`Halo ${nama} bagaimana kabarmu?`);
}

sapaPengguna("Mumtaz");
sapaPengguna("silva");
sapaPengguna("ardi");

console.log("---Materi RETURN---");
function LuasPersegi(panjang, lebar){
    const hasil = panjang * lebar;
    return hasil ;
    console.log("Ini tidak akan tampil");
}

const luasruangan = LuasPersegi(10, 8);
console.log(`Luas Ruangannya adalah ${luasruangan} meter persegi`);

const LuasMeja= LuasPersegi(2, 1.5);
console.log (`Luas mejanya adalah ${LuasMeja} meter persegi`);

const Cuma = LuasPersegi(10, 9);
console.log(`Ini cuma ${Cuma}`);

console.log("---Materi ARROW Function---");
const tambah = (a, b) => a + b;
const kurang = (a, b) => a - b;
const kuadrat = angka => angka * angka;
const bagi = (a, b) => (a / b);
let bagi2 = (a, b) => (a / b);

console.log("Hasil Tambah : ", tambah(5, 5));
console.log("Hasil Kurang : ", kurang(9, 3));
console.log("Hasil Kuadrat :", kuadrat(9));
console.log("Hasil pembagiannya adalah ", bagi(8, 4));
console.log("Hasil pembagian yang kedua :", bagi2(9, 3));

console.log("___---RANDOM---___");

function Total(tinggi, pendek){
    const totalnya = tinggi * pendek;
    return totalnya;
}

const TotalMakanan = Total(7, 5);
console.log(`total makanannya ${TotalMakanan}`);

const totalminuman = Total(6, 3);
console.log(`Total minumannya adalah : ${totalminuman}`);

const kali = (a, b) => (a * b);

console.log("Hasil perkalian 5 kali 5 ", kali(5, 5));

function Total1( tingggi1, pendek1){
    const hasil1 = tingggi1 * pendek1;
    return hasil1;
}

const LBLaptop = Total1 (5, 5);
console.log(`Total tinggi laptop adalah ${LBLaptop}`);

console.log("---KALKULATOR SEDERHANA---");

const tambah1 = (a, b) => (a + b);
const kurang1 = (a, b) => a - b;
const kali1 = (a, b) => a * b;
const bagi1 = (a, b) => a / b;

function hitung(angka1, angka2, operasi){
    let hasil2;
    if (operasi === 'tambah1'){
        hasil2 = tambah1(angka1, angka2);
    }
    else if (operasi === 'kurang1'){
        hasil2 = kurang1(angka1, angka2);
    }
     else if (operasi === 'kali1'){
        hasil2 = kali1(angka1, angka2);
    }
     else if (operasi === `bagi1`){
        hasil2 = bagi1(angka1, angka2);
    }
    else {
        return "operasi tidak dikenal;";
    }
    return `Hasil dari ${angka1} ${operasi} ${angka2} adalah ${hasil2}`;
}

const hasil6 = hitung (10, 5, 'tambah1');
console.log(hasil6);

const hasil3 = hitung(7, 3, 'kali1');
console.log(hasil3);

const hasil7 = hitung (10, 5, 'tambah1');
console.log(hasil7);

const hasil4 = hitung (10, 5, 'kurang1');
console.log(hasil4);

const hasil8 = hitung (11, 5, 'kali1');
console.log(hasil8);

console.log("Hasil tambah :", tambah1(5, 5));

const hasil9 = hitung (20, 5, 'tambah1');
console.log(hasil9);

console.log("---KALKULATOR KEDUA---");







 