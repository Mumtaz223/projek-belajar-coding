program linkfifo;
uses crt;
type
point=^recpoint;
recpoint=record
isi:string;
next:point;
prev:point;
end;
var
head,tail,now:point;
procedure create;
begin
  head:=nil;tail:=nil;
end;
function empty:boolean;
begin
  if head=nil then
  empty:=true
  else
  empty:=false;
end;

procedure find_first;
begin
  now:=head;
  write(now^.isi);
end;

procedure find_next;
begin
if now^.next<>nil then
now:=now^.next;
writeln(now^.isi);
end;

procedure retrieve;
var r:string;
begin
 r:=now^.isi;
end;

procedure insert(elemen:string);
var now:point;
begin
  new(now);
  if head=nil then
  head:=now
  else
  tail^.next:=now;
  tail:=now;
  tail^.next:=nil;
  now^.isi:=elemen;
end;

procedure update;
var u:string;
begin
  now^.isi:=u;
end;
procedure deletehead;
begin
  if head<>nil then
  begin
  now:=head;
  head:=head^.next;
  dispose(now);
  now:=head;
  now^.next:=head;
  head:=now;
  head^.prev:=nil;
  end;
end;


begin
clrscr;
insert('TV');
insert('computer');
insert('compo');
writeln;
write('Data pertama    :');
find_first;writeln;
write('Data berikutnta :');
find_next;
retrieve;
update;
deletehead;
readln;
end.

