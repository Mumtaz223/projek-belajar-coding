program LinkkedListSederhana;
uses crt;

type 
tipeinfo = record
npm :string;
nilai : integer;
end;

tipeptr = ^tipenode;
tipelist = tipeptr;

tipenode = record
info : tipeinfo;
next : tipeptr;
end;

var 
Head, Tail, nodeBaru : tipelist;

procedure Create;
begin
Head:=nil;
Tail:=nil;
end;

begin
clrscr;

Create;

new(nodeBaru);
nodeBaru^.info.npm := '2025001';
nodeBaru^.info.nilai:= 95;
nodeBaru^.next := nil;

Head := nodeBaru;
Tail := nodeBaru;

writeln('=== Isi Linked List Sederhana ===');
writeln('NPM :', Head^.info.npm);
writeln('Nilai : ', Head^.info.nilai);

readln;
end.