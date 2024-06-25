let zaman = new Date(); // bu günün tarihini verir 
 
console.log(zaman.getMonth());
console.log(zaman.getDate()); // haftanın kaçıncı günündeysek o döner
console.log(zaman.getDay());
console.log(zaman.getFullYear());
console.log(zaman.getHours());
console.log(zaman.getMinutes());
console.log(zaman.getSeconds());
console.log(zaman.getMilliseconds());


console.log(zaman);

// set METOD 
zaman.setMonth(12); // ayı değiştirdik 

// kullanıcının yaşını hesaplarsak 

let today = new Date();
let bdate = new Date(25,12,2003);
console.log(today.getFullYear()-bdate.getUTCFullYear());