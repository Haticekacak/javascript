let sayi;
var a = 5;
var b = 20;
sayi = a + b;
sayi = a - b;
sayi = a / b;
sayi = a * b;
sayi = a %b; // mod alma ifadesidir a'nın b'yee bölümünden kalanı verir


sayi = a += 1;
sayi = a++;
sayi = a--;

// Atama operatörü 
sayi= a;
sayi +=a;
sayi= 5=="5"; // olduğunda sayılar eşit olduğu iiçin true döner
sayi= 5==="5"; // olduğunda sayılar eşit olsa dahi türleri eşit olmadığı için false döner
sayi = a!=b; // a b ye eşit değildir anlamına gelir sonuç ture olur
sayi = a!==b; // a b ye tür ve sayı olarak eşit değildir anlamına gelir sonuç ture olur

//  && ve bağlacı her iki durunun da sağlanması gerekir

//  || or(yada) bağlacı bir durunun sağlanması gerekir






console.log(sayi);
console.log(typeof sayi);