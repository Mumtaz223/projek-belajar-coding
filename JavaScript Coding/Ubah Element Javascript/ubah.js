const tmblSuka = document.getElementById('tombolSuka');
const jmlhSukaspan = document.getElementById('jumlahSuka');

let jumlahSukaa=0;
let sudahSuka= false;

tmblSuka.addEventListener('click', function (){

    if (sudahSuka === false){
        jumlahSukaa++;
        sudahSuka=true;
        tmblSuka.classList.add('liked');
    }
    else{
        jumlahSukaa--;
        sudahSuka=false;
        tmblSuka.classList.remove('liked');
    }
    jmlhSukaspan.textContent=jumlahSukaa;
})
