print("=== SISTEM GAJI KARYAWAN ===")

posisi = ["Staff", "Supervisor", "Manager"]
gaji_pokok = [4000000, 6000000, 10000000]

print(f"""
    Daftar Jabatan :
    1. {posisi[0]} - RP {gaji_pokok[0]}
    2. {posisi[1]} - Rp{gaji_pokok[1]}
    3. {posisi[2]} - Rp{gaji_pokok[2]}
 """)

nomor_jabatan = int(input("Pilih nomor jabatan : "))
hari_kerja = int(input("Masukkan jumlah total hari kerja bulan ini : "))
omset = float(input("Masukkan total omzet penjualan bulan ini : (Rp)"))
indeks = nomor_jabatan-1

if omset >= 50000000:
    bonus = omset * 0.5
else:
    bonus = 0
    
uang_makan = hari_kerja * 50000
penghasilan_kotor = gaji_pokok[indeks] + uang_makan + bonus
potongan_bpjs = penghasilan_kotor / 50
gaji_akhir = penghasilan_kotor - potongan_bpjs

print("=== RINCIAN GAJI BULANAN ===")




print("Jabatan", posisi[indeks])
print("Gaji Pokok : ", gaji_pokok[indeks])
print("Uang makan : ", uang_makan)
print("Bonus omzet (5%) : ", bonus)
print("Penghasilan Kotor : ", penghasilan_kotor)
print("Potongan BPJS (2%) : Rp", potongan_bpjs)
print("Total gaji bersih (THP) : Rp", gaji_akhir)