console.log('===  Materi Asynchronous Process ===');
/*
kode javascript ga harus di tungguin sampe selesai agar kode yang mengikutinya dapat dieksekusi
Yang berarti antrian kode selanjutnya bakal tetap berjalan sambil nunggu dan mengharapkan kode yang sebelumnya

Kita bisa memakai setTimeout untuk membuat proses asikron
SetTimeout adalah timer pengatur agar function dieksekusi

*/

import { makeCoffee, makePizza, makeBurger, buatKopi, kirimkopi} from './coffee.mjs';

console.log('Saya memesan kopi di cafe');

makeCoffee();

console.log('Pramusaji memberikan pesanan');
console.log('Saya mendapatkan kopi dan menghabiskannya');

console.log(' ');
console.log('====================');

console.log('Saya memesan sepotong Pizza');

makePizza();

console.log('memberikan pesanan');
console.log('dapat pizza dan menghabiskannya');

console.log(' ');
console.log('==========================');
console.log(' ');

//Contoh penerapan Callback :

console.log('saya memesan sepotong burger');   //pertama ini di cetak

makeBurger(() => {    //Setelah di cetak, maka lanjut cetak ke function makeBurger => 
    console.log('Pesanan Burger akan segera di antarkan');
    console.log('Burger sudah di antarkan dan siap dimakan');

    console.log(' ');
    console.log('==========================');
    console.log(' ');

}
)

const order = 'Kopi ekspresso';

console.log(`Saya memesan ${order} di kafe`);

buatKopi(order,(buatKopiError, buatKopiData) => {
    if (buatKopiError){
        console.error(buatKopiError);
        return;
    }

    kirimkopi(buatKopiData, (kirimKopiError, kirimKopiData) => {
        if(kirimKopiError) {
            console.error(kirimKopiError);
            return;
        }

        
    }




    );

}

);





