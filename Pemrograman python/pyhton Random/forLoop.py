jumlah_mahasiswa = int(input("Masukkan jumlah mahasiswa: "))
print()

data_mahasiswa = []

print("--- Masukkan Data Mahasiswa ---")
print()

for i in range(1, jumlah_mahasiswa + 1):
    print(f"Data Mahasiswa ke-{i}:")
    nama = input("  Nama Mahasiswa : ")
    tugas = float(input("  Nilai Tugas     : "))
    uts = float(input("  Nilai UTS       : "))
    uas = float(input("  Nilai UAS       : "))
    print()


    rata_rata = (tugas + uts + uas) / 3

    data_mahasiswa.append([nama, tugas, uts, uas, rata_rata])

print("=" * 65)
print(f"{'NAMA':<20} {'TUGAS':<10} {'UTS':<10} {'UAS':<10} {'RATA-RATA':<10}")
print("=" * 65)

for mhs in data_mahasiswa:
    print(
        f"{mhs[0]:<20} {mhs[1]:<10.1f} {mhs[2]:<10.1f} {mhs[3]:<10.1f} {mhs[4]:<10.2f}"
    )

print("=" * 65)