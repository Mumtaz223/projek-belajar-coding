list_kosong = []
tuple_kosong = ()
dict_kosong = {}
set_kosong = set()

print(type(list_kosong))
print(type(tuple_kosong))
print(type(dict_kosong))
print(type(set_kosong))

data_list = [1,2,3,2,1]
data_tuple = tuple(data_list)
data_set = set(data_list)
data_list.append("bertambah")
data_list[5] = "Berkurang dan bertambah"


print("ini adalah isi data list : ", data_list)
print("list-> :", data_tuple)
print("list->set : ", data_set) #Mencatak dan membuang data yang duplikat

data_makanan = ["sushi", "ramen", "mie ayam", "bakso"]
data_makanan.remove("sushi")

print("\n")
print(data_makanan)
del data_makanan[1]
print("ramen sudah dihapus : ", data_makanan)

print("\n")
print("=== PERULANGAN WHILE ===")

nilai_ujian = []

for i in range(5):
    nilai_ujian.append(80+i)

print(nilai_ujian)

