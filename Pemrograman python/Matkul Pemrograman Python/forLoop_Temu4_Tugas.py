print(" --- Masukkan Data Mahasoswa --- ")

data = int(input("Masukkan jumlah data mahasiswa : "))

for i in range(data):
    print(f"Data Mahasiswa ke-{i+1}")
    nama = input("Masukkan nama mahasiswa : ")
    nilai_tugas = int(input("Nilai Tugas : "))
    nilai_uts = int(input("Nilai UTS : "))
    nilai_uas = int(input("Nilai uas : "))
    rata_rata = (nilai_tugas + nilai_uts + nilai_uas) / 3
    print(nama, nilai_tugas)
