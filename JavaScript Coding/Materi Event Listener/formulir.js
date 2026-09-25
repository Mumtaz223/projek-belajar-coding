const formDaftar = document.getElementById('form-daftar');
const inputNama = document.getElementById('nama');
const pilihJjurusan = document.getElementById('Jurusan');
const hasilDiv = document.getElementById('hasil');


pilihJjurusan.addEventListener('change', function(){
    const jurusanTerpilih = pilihJjurusan.value;

    if(jurusanTerpilih){

        console.log(`pengguna memilih jurusan ${jurusanTerpilih}`);
        hasilDiv.innerHTML = `<p>Pilihan Anda : <strong>${jurusanTerpilih}</strong>. Silahkan lengkapi nama dan klik daftar.</p>`;

    }
});

formDaftar.addEventListener('submit', function(event){
    event.preventDefault();
    const namaPendaftar = inputNama.value;
    const jurusanPendaftar=pilihJjurusan.value;

    if (jurusanPendaftar === ""){
        alert("Harap pilih jurusan terlebih dahuliu");
        return;
    }

    hasilDiv.innerHTML = `
    <h3>Pendaftaran berhasil! </h3>
    <p>Selamat Datang, <strong>${namaPendaftar}</strong>!</p>
    <p>Anda telah terdaftar di jurusan <strong>${jurusanPendaftar}</strong>.</p>
    `;

    console.log(`Form disubmit! nama : ${namaPendaftar}, Jurusan : ${jurusanPendaftar}`);
});