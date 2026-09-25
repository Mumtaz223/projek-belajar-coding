#Tuple menyimpan data yang isinya tidak dapat dirubahq

koordinat_toko = (-6.2088, 106.8456)
print(koordinat_toko)
print("Latitude :", koordinat_toko[0])
print("Longtitude : ", koordinat_toko[1])

print("\n")
try:
    koordinat_toko[0] = -6.3
except TypeError as e:
    print("Error :", e)

print("\n")
identitas = ("Marsya", 20, "Teknik Informatika")
nama, usia, jurusan = identitas #Setiap indeks bisa diberikan nama
print(f"Nama : {nama}, usia {usia}, Jurusan {jurusan}")

print("\n")

angka = (1,2,3,2,4,2)
print(angka.count(2)) #Menghitung kemunculan indeks 2. Menghitung ada berapa angka 2
print(angka.index(3)) #posisi indeks 3

hari_libur = ("Sabtu", "Minggu")
try:
    hari_libur.append("Jumat")
except AttributeError as e:
    print("Error:", e)