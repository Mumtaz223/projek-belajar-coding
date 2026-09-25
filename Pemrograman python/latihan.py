print("======1. Fungsi Input & Conversion (Casting)=======")

nama_str = input("Masukkan Nama Anda: ")
umur_str = input("Masukkan Umur Anda (tahun):  ")
tb_str = input("Masukkan Tinggi Badan Anda (cm):  ")
is_mhs = input ("Apakah anda mahasiswa aktif? (y/n) :")

umur_int = int(umur_str)
tb_float = float(tb_str)
is_aktif = is_mhs.lower() == "y"

print("\n=== 2. Fungsi Output  & Pemeriksaan Tipe Data ===")

print("\n [HASIL PROFIL USER]")
print(f"nama : {nama_str} |tipe data: {type(nama_str)}")
print(f"Umur : {umur_int} tahun | Tipe : {type(umur_int)}")
print(f"Tinggi Badan : {tb_float:.1f} cm | Tipe : {type(tb_float)}")
print(f"Status Aktif :  {is_aktif} | tipe : {type(is_aktif)}")


tahun_lahir = 2026 - umur_int
print(f"\nEstimasi Tahun Lahir : {tahun_lahir}")