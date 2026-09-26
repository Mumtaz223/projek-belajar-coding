print("===== Kasir Toko Buku =====")

nama_buku = ["Buku Pemrograman", "Buku Matematika", "Buku Bahasa"]
harga_buku = [50000, 40000, 30000]

print(f"""

Daftar Buku :
    1. {nama_buku[0]} - {harga_buku[0]}
    2. {nama_buku[1]} - {harga_buku[1]}
    3. {nama_buku[2]} - {harga_buku[2]}
""")

beli_buku = int(input("Pilih nomor buku :"))

jumlah_buku = int(input("Masukkan jumlah buku yang dibeli :"))

indeks = beli_buku - 1
buku_terpilih = nama_buku[indeks]
harga_satuan = harga_buku[indeks]

total_harga = harga_satuan * jumlah_buku

print("=== Rincian Pembayaran ===")

if total_harga >= 1000000:
    diskon = 10/100 * total_harga
    total_bayar = total_harga - diskon
    print("Selamat ! Anda mendapatkan diskon sebesar : ", diskon)
else:
    diskon = 0
    total_bayar = total_harga - diskon
    print("Anda tidak mendapatkan diskon")

print(f"Total yang harus dibayar adalah : {total_bayar}")





