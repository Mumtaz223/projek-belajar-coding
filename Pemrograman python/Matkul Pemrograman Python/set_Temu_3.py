#Menyimpan data yang tidak boleh ada duplikat dan tidak berurutan pada data

angka_list = [1,2,2,3,3,3,4]

angka_unik = set(angka_list)
print(angka_unik)    

print("\n")
matkul_ganjil = {"Algoritma", "Struktur Data", "Basis Data"}
matkul_genap = {"Struktur Data", "Jaringan Komputer", "Basis Data"}
print(matkul_ganjil.union(matkul_genap))
print(matkul_ganjil.intersection(matkul_genap))
print(matkul_ganjil.difference(matkul_genap))


print("\n")
matkul_ganjil.add("Kalkulus") #Menambahkan Kalkulus pada set
print(matkul_ganjil)
matkul_ganjil.remove("Kalkulus") #Menghilangkan kalkulus
print(matkul_ganjil)

kelas_A = {"Budi", "sinta", "Rian"}
Kelas_B = {"Sinta", "Wati", "Rian", "Dedi"}
print("Gabungan : ", kelas_A.union(Kelas_B))
print("Ikut Keduanya : ", kelas_A.intersection(Kelas_B))