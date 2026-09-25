export function makeCoffee (){
    const estimationTime = 5000;

    const inSecond = Math.ceil(estimationTime / 1000);
    console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalan ${inSecond} detik`);

    setTimeout(()=>{
        console.log('Pramusaji selesai membuat kopi');
    }, estimationTime);
}

export function makePizza(){
    const estimationTime = 4000;

    const dalamDetik = Math.ceil(estimationTime / 1000);

    console.log(`Pizza sedang di buat. Mohon tunggu dalam waktu ${dalamDetik}`);

    setTimeout(()=>{
        console.log(`Selesai membuat pizza`);

    }, estimationTime);


}

export function makeBurger(callback){  //Mencetak function makeBurger. wajib Pakai Callback
    const estimationTime = 3000;  //Definisiin waktunya dulu

    const dalamDetik2 = Math.ceil(estimationTime / 1000);   // kode selanjutnya akan dicetak setelah 3 detik

    console.log(`Mohon menunggu Burgernya, estimasi datang dalam ${dalamDetik2} detik`);  // mencetak ini untuk memberi tahu ada kode yang dicetak 3 detik kedepan

    setTimeout(() => {  // saat sudah 3 detik maka mencetak kode ini
        console.log('Burger selesai dibuat');
        callback();  //Setelah selesai mencetak, kemudian lanjut cetak ke slide sebelumnya deh
    },estimationTime);
}

export function buatKopi(name, callback){
    const estimationTime = 5000;
    let isSuccess = false;

    const inSecond = Math.ceil(estimationTime / 1000);

    console.log(`Mohon menunggu. Kopi ekspresso sedang dibuatkan dalam ${inSecond} detik`);

    setTimeout(() => {

        const number = Math.random();
        if (number > 0.3){
            isSuccess = true;
        }

        if (!isSuccess){
            callback(new Error('gagal Membuatkan Kopi.'), null);
            return;
        }

        console.log('Kopi ekspresso sudah selesai dibuat.');
        callback(null, name);

    }, estimationTime

    );
}

export function kirimkopi(name, callback) {
    const estimationTime = 2000;
    let isSuccess = false;

    console.log(`Pramusaji sedang mengantarkan kopi ekspresso pesanan`);

    setTimeout(() => {
        const number = Math.random();

        if (number > 0.3) {
            isSuccess = true;
        }

        if (!isSuccess){
            callback(new Error('Gagal Mengantarkan Kopi ekspressonya'), null);
            return;
        }

        console.log('Pramusaji Sudah sampai ke meja ekspresso');
        callback(null, name);



    }, estimationTime);
}
