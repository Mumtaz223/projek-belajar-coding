const formTugas = document.getElementById('form-tugas');
const inputTugas = document.getElementById('input-tugas');
const daftarTugas = document.getElementById('daftar-tugas');

formTugas.addEventListener('submit', function(event){
    event.preventDefault();

    const teksTugas = inputTugas.value;

    const liBaru = document.createElement('li');

    const spanTeks = document.createElement('span');
    spanTeks.textContent = teksTugas;

    const tombolHapus = document.createElement('button');
    tombolHapus.textContent = 'Hapus';
    tombolHapus.className = 'tombol-hapus';

    tombolHapus.addEventListener('click', function(){
        liBaru.remove();
    })
    liBaru.appendChild(spanTeks);
    liBaru.appendChild(tombolHapus);
    daftarTugas.appendChild(liBaru);
    inputTugas.value= '';
})