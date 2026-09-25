console.log("---KALKULATOR KEDUA LATIHAN---");

const tambah = (a, b) => (a + b);
const kurang = (a, b) => (a - b);
const bagi = (a, b) => (a / b);
const kali = (a, b) => (a * b);

function hitung (angka1, angka2, operasi){
    let hasil1;
    if (operasi === 'tambah'){
        hasil1 = tambah (angka1, angka2);
    }
    else if (operasi === 'kali'){
        hasil1 = kali (angka1, angka2);
    }
    else if (operasi === 'kurang'){
        hasil1 = kurang (angka1, angka2);
    }
    else if (operasi === 'bagi'){
        hasil1 = bagi (angka1, angka2);
    }
    else{
        return "operasi tidak dikenal";
    }
    return `hasil dari ${angka1} ${operasi} ${angka2} adalah ${hasil1}`;
}

const perkalian = hitung (10, 4, 'kali');
console.log(perkalian);

const pembagian = hitung (10, 5, 'bagi');
console.log(pembagian);

const pertambahan = hitung (100, 300, 'tambah');
console.log(pertambahan);

const pengurangan = hitung ( 50, 20, 'kurang');
console.log(pengurangan);

const pertambahan1 = hitung (50, 50, 'tambah');
console.log(pertambahan1);
console.log(perkalian);
