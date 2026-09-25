print("====== 1. INISIALISASI LIST======")

nilai_mahasiswa = [75, 88, 60, 92, 45, 80, 70]
print(f"List Awal : {nilai_mahasiswa}")
print(f"JUmlah elemen : {len(nilai_mahasiswa)}")

print("\n=== 2. AKSES ELEMENT LIST ===")
print(f"Elemen Pertama (indeks 0) : {nilai_mahasiswa[0]}")
print(f"elemen ketiga (indeks 2) : {nilai_mahasiswa[2]}")
print(f"elemen terakhir (indeks -1) : {nilai_mahasiswa[-1]}")

print("\n===3. SLICING (PEMOTONGAN LIST) ")
print(f"3 nilai awal (0-3) : {nilai_mahasiswa[0:3]}")
print(f"Nilai indeks 2 sampai akhir : {nilai_mahasiswa[2:]}")
print("Urutan terbaik (reverse) : ", nilai_mahasiswa[::-1])

