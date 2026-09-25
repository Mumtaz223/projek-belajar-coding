function hello(name, origin = "Bandung") {
  return `Halo! Nama saya ${name}. Saya tinggal di ${origin}.`;
}

const rahmat = hello("Rahmat", "Semarang");
const indra = hello("Indra");

console.log(rahmat);
console.log(indra);


function daftarMakanan(nama, makanan){
    return `Hallo ${nama} silahkan ambil pesanan ${makanan} di samping meja kasir ya`;

}

const Mumtaz = daftarMakanan("Mumtaz", "Ayam Goreng");

console.log(Mumtaz);