console.log("script berhasil dibuat");

const namaprofil = document.getElementById('nama');
const deskripsiProfil =document.getElementById('deskripsi');
const tombol = document.getElementById('tombol-ubah');
const kartu = document.querySelector('.card');

tombol.addEventListener('click', function() {
    console.log("Tombol ditekan!");
    namaprofil.textContent="Siti Aminah";
    deskripsiProfil.textContent="Yay dom berhasil dimanipulasi";

    kartu.style.backgroundColor ='#498a13ff';
    kartu.style.borderColor = '#790000ff';
})

