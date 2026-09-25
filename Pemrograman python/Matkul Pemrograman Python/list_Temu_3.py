#Materi List Python

data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(data)
print(data[5])
print(data[:5])
print(data[10-5:])
print(data[2:9])
print(data[-10])
print(data[-8])
print(data[:-8])
print(data[-7:])

print("\n")
data_mix = [1, "teknik Informatika", "Pemrograman", "Marsya", 1.2]

print([data_mix[3]])

print("\n")
keranjang_belanja = ["susu", "roti", "telur"]
keranjang_belanja.append("kopi")
print(keranjang_belanja)

print("\n")
nilai_kelas = [[80,90], [75, 85]]
nilai_target = nilai_kelas[1][1]
print("nilai tugas 2 mahasiswa B :", nilai_target)
nilai_kelas[1][1] = 100
nilai_target = nilai_kelas[1][1]
print(" nilai kelas setelah diganti :", nilai_kelas)
print("nilai tugas 2 Mahasiswa B setelah diganti :", nilai_target)

print("\n")
stok_gudang = [
    [10, 25, 5], #rak 1 : kaos, celana, topi
    [9, 15, 20] #rak 2 : Kaos, Celana, Topi
]
print("Celana di rak 2 : ", stok_gudang[1][1])
stok_gudang[0][2]+=5 #stok_gudang = stok_gudang + 5
print(stok_gudang)
