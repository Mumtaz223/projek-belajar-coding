#Dictionary menyimpan data dalam pasangan key value

mahasiswa = {"nama":"marsya","nim":"202543500380","Jurusan":"Teknok Informatika"} #ini pakai key value. Key = nama value = marsya
print(mahasiswa)
print(mahasiswa["nama"]) #memanggil key nama

mahasiswa["semester"]=1 #Menambahkan ke indeks terakhir
print(mahasiswa)
print(mahasiswa.get("nim")) #Memanggil key dengan GET

print(mahasiswa.keys())
print(mahasiswa.values())
print(mahasiswa.items())

mahasiswa.pop("semester")
print(mahasiswa)

print("\n")
buku = {"judul":"Belajar Python", "Penulis":"Andi", "Tahun":"2023"}
buku["harga"] = 8500
print("Judul : ", buku.get("judul"))
print("Harga : ", buku.get("harga"))

