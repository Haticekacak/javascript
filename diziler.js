let names = ["hatice", "şenay", "feyza", "ayşenur"];
let year = [2003, 1999, 2001, 2000];

console.log(names);
console.log(names.length);

console.log(year);
console.log(names[3]);
names[2] = "nisa";
names[5] = "emine";
names[names.length] = "ayşe";

// diziye eleman eklemek
names.push("eda");  // dizinin sonuna ekler
names.unshift("ela"); // dizinin başına  ekler

// eleman silmek 

year.pop(); // dizinin son elemanını siler 
year.shift(); // dizinin ilk elemanını siler 

// indexof 

let bul = names.indexOf("hatice");
names.reverse(); // liste tersine döner
year.short(); // küçükten büyüğe , a'dan z'ye sıralama yapar 