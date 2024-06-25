// functions 
function merhaba(){
    console.log("hello world")
}
merhaba(); 

function veri (name,age){
    console.log('isim: ${name} yaş: ${age}');
}
veri("hatice",20);

function hesapla(bdate){
    return 2024-bdate;
}
let age= hesapla(2003);
console.log(age);