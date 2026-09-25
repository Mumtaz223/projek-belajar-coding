print("Ini adalah materi list ") #Materi List pada python

data = [1,2,3,4,5,6,7,8,9]
merk_Mobil = ["Toyota", "Honda", "Mitsubishi", "Suzuki", "Daihatsu"]

merk_Mobil[1] = "Nissan" #Mengubah data list pada indeks ke 1
merk_Mobil.append("Mazda") #Menambahkan data list pada akhir list



print(f"Data list merk mobil : {merk_Mobil}")
print(f"Merk mobil yang paling aku suka adalah {merk_Mobil[0]}")


print(f"Aku mencetak data dari list : {data}")
print(f"Aku akan mencetak data list dari indeks ke 0-5 : {data[0:6]}")

nama = input("Masukkan nama anda :")
umur = int(input("Masukkan umur anda :"))
tahun_Lahir = input("Masukkann tahun lahir anda :")

tahun_input = int(tahun_Lahir)
print(f"Halo, nama saya adalah {nama} umur saya adalah {umur} tahun, dan saya lahir pada tahun {tahun_input}")

print("===============================")
print("     MASUK MATERI IF ELSE")
print("===============================")

print("")

if umur>10:
    print("SELAMAT! KAMU BOLEH MASUK WAHANA")
elif umur<10:
    print("MAAF! UMUR TIDAK CUKUP, TIDAK BOLEH MASUK WAHANA")


