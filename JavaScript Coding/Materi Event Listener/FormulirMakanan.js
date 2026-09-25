const namaLengkap = document.getElementById('nama');
const InputMakanan = document.getElementById('Makanan');
const InputMinuman = document.getElementById('Minuman');
const Hasilnya = document.getElementById('Hasil');
const FormPendaftaran = document.getElementById('FormDaftar');

InputMakanan.addEventListener('change', function(){
    const InputMakanan2 = InputMakanan.value;
    const InputMinuman2= InputMinuman.value;

    if (InputMinuman2 && InputMakanan2){
        console.log(`Pengguna Memilih Makanan ${InputMakanan2}`);
        Hasilnya.innerHTML=`<p>
         <p>
                Makanan Anda: <strong>${InputMakanan2}</strong> <br>
                Minuman Anda: <strong>${InputMinuman2}</strong> <br>
                Silahkan Klik Daftar Jika Yakin Dengan Pilihanmu.
            </p>`;
    }
})

FormPendaftaran.addEventListener('submit', function(event){
    event.preventDefault(event);

    const Makanan3 = InputMakanan.value;
    const Minuman3 = InputMinuman.value;
    const namaPelanggan=namaLengkap.value;

    Hasilnya.innerHTML = `
    <h3>Pendaftaran berhasil! </h3>
    <p>Selamat Datang, <strong>${namaPelanggan}</strong>!</p>
    <p>silahkan untuk mengambil <strong>${Makanan3}</strong> dan <strong>${Minuman3}</strong>.</p>
    <p>Selamat Menikmati</p>
    `;

    console.log(`Form disubmit! nama : ${namaPendaftar}, Jurusan : ${jurusanPendaftar}`);
})


