program Algoritma_Array;
uses crt;

var
  data, dataAsc, dataDesc: array[1..100] of integer;
  n, i, j, temp, cari: integer;
  low, high, mid: integer;
  ketemu: boolean;

begin
  clrscr;
  
  { 1. Input Data }
  write('Input jumlah data: '); readln(n);
  for i := 1 to n do
  begin
    write('Data ke-', i, ' : '); readln(data[i]);
    // Salin data ke array pembantu agar data asli tidak rusak saat di-sort
    dataAsc[i] := data[i];
    dataDesc[i] := data[i];
  end;
  
  { 2. Proses Sorting Ascending (Bubble Sort) }
  for i := 1 to n - 1 do
    for j := 1 to n - i do
      if dataAsc[j] > dataAsc[j+1] then
      begin
        temp := dataAsc[j];
        dataAsc[j] := dataAsc[j+1];
        dataAsc[j+1] := temp;
      end;
      
  { 3. Proses Sorting Descending (Bubble Sort) }
  for i := 1 to n - 1 do
    for j := 1 to n - i do
      if dataDesc[j] < dataDesc[j+1] then
      begin
        temp := dataDesc[j];
        dataDesc[j] := dataDesc[j+1];
        dataDesc[j+1] := temp;
      end;
      
  { 4. Menampilkan Hasil Sorting }
  writeln;
  write('Urutan data ascending  : ');
  for i := 1 to n do
  begin
    write(dataAsc[i]);
    if i < n then write(', ');
  end;
  writeln;
  
  write('Urutan data descending : ');
  for i := 1 to n do
  begin
    write(dataDesc[i]);
    if i < n then write(', ');
  end;
  writeln;
  
  { 5. Proses Pencarian Data (Binary Search) }
  writeln;
  write('Input data yang anda cari : '); readln(cari);
  
  low := 1;
  high := n;
  ketemu := false;
  
  while (low <= high) and (not ketemu) do
  begin
    mid := (low + high) div 2;
    if dataAsc[mid] = cari then
      ketemu := true
    else if dataAsc[mid] < cari then
      low := mid + 1
    else
      high := mid - 1;
  end;
  
  { 6. Output Status Pencarian }
  if ketemu then
    writeln('Angka ', cari, ' ditemukan dalam data yang diinput.')
  else
    writeln('Angka ', cari, ' tidak ditemukan dalam data.');
    
  readln;
end.