console.log("Mesin Penghitung Karakter");

//seleksi elemennya dulu
const inputArea = document.getElementById('post-input');
const countertext = document.getElementById('counter');

const maxchars="600";

inputArea.addEventListener('input', function(){
    //ambil karakter yg udah diketik
    const currentleght= inputArea.value.length;

    //hitung sisa karakter
    const chartleft = maxchars - currentleght;

    //manipulasi domnya : perbarui text pada element counter
    countertext.textContent=`${chartleft}/${maxchars}`;

    if (chartleft<20){
        countertext.style.color="red";
    }
    else if (chartleft <0){
        countertext.style.color='red';
    }
    else{
        countertext.style.color='#555';
    }
});