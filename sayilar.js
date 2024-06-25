let veri ;
veri = Number("5"); // string olan veriyi sayıya dönüştürdü
veri= parseInt("4");
veri= parseFloat("2.3");
// girilen bir durumu önlemek için 
veri=isNaN("f4"); // true döndü çünkü bu ifade sayıya 

var sayi=12334567;
veri = sayi.toPrecision(4); // sayının ilk 4 rakamını verir
veri = Math.PI;
veri = Math.round(3.4);
veri = Math.ceil(3.4);
veri = Math.floor(3.4);
veri = Math.pow(3);
veri = Math.sqrt(3.4);
veri = Math.max(1,3,5,8,9,6); // en büyük değeri verir
veri = Math.min(1,3,5,8,9,6); // en küçük değeri verir
veri = Math.abs(-3.4); // pozitife çevirir
veri = Math.random()*2; // 2  adet random sayı üretir