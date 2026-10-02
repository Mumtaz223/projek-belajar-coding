#Cara Konvensional

kuadrat = []

for x in range (1, 6):
    kuadrat.append(x**2)
    print(kuadrat)

#CList Comprehesion 
print("\n")
kuadrat = [x**2 for x in range(1, 6)]
print(kuadrat)

print("\n")
genap = [x for x in range (1, 11) if x % 2 == 0]
print(genap)

print("\n")
suhu_celcius = [20, 25, 30, 35, 40]
suhu_fahrenheit = [(c * 9/5) + 32 for c in suhu_celcius]
suhu_panas = [c for c in suhu_celcius if c > 28]
print("Fahrenheit z;l ", suhu_fahrenheit)
print("Diatas 28 C : ", suhu_panas)

a = 17
b = 5
print("penjumlahan ( a + b)", a + b)
print("Pengurangan (a - b)", a - b)
print("Perkalian (a * b)", a * b)
print("Pembagian (a / b)", a / b)
print("Pembagian Bulat (a // b)", a // b)
print("Sisa Bagi (a % b)", a % b)
print("pangkat ( a ** b)", a ** b)

print("\n")
panjang = 8 
lebar = 4
luas = panjang * lebar
keliling = 2 * (panjang + lebar)
print("Panjang : ", panjang)
print("lebar :", lebar)
print("luas : ", luas)
print("keliling :", keliling)

print("\n")
import math
angka = 25
akar = math.sqrt(angka)
pembulatan_bawah = math.floor(7.8)
pembulatan_atas = math.ceil(7.2)
faktorial = math.factorial(5)
print("Akar kuadrat dari :", angka, "adalah ", akar)
print("Pembulatan ke bawah dari 7.8 adalah : ", pembulatan_bawah)
print("Pembulatan ke atas dari 7.2 adalah ", pembulatan_atas)
print("Faktorial dari 5 adalah ", faktorial)


print("\n")
sisi_a = 3
sisi_b = 4
sisi_c = math.sqrt(sisi_a**2 + sisi_b**2)       
print("Sisi a : ", sisi_a)
print("Sisi b :", sisi_b)
print("Sisi miring (c)", sisi_c)

print("\n")
print("Nilai pi (math.pi)", math.pi)
print("Nilai Euler (math.e): ", math.e)
print("Nilai TAU (math.tau) :", math.tau)

jari_jari = 7
luas_lingkaran = math.pi * jari_jari ** 2
keliling_lingkaran = 2 * math.pi * jari_jari
print("Luas lingkaran dengan jari jari ", jari_jari, "Adalah ", luas_lingkaran) 
print("Keliling lingkaran :", keliling_lingkaran)

print("\n")
def luas_segitiga(alas, tinggi):
    hasil = 0.5 * alas * tinggi 
    return hasil
alas_segitiga = 10
tinggi_segitiga = 6
luas = luas_segitiga(alas_segitiga, tinggi_segitiga)
print("Alas segitiga : ", alas_segitiga)
print("Tinggi segitiga : ", tinggi_segitiga)
print("Luas segitiga : ", luas)

print("\n")
def celcius_to_fahrenheit(celcius):
    fahrenheit = (celcius * 9/5) + 32
    return fahrenheit
suhu_celcius = 30
suhu_fahrenheit = celcius_to_fahrenheit(suhu_celcius)
print("Suhu dalam celcius : ", suhu_celcius)
print("Suhu dalam fahrenheit : ", suhu_fahrenheit)

