// Deklarasi function
function sayHello(){
    console.log(" Abu dzar sekarang sudah SMA bukan pondok");
}
sayHello()

// expresi function
let pondok = function(){
    console.log("Rumpin di bogor");
}
pondok();

// Penjabaran expresi function agar mudah di mengerti
function pondok2(){
    console.log(" Stasiun cisauk ada di tangerang");
}

let pondok3 = pondok2;
// pondok3();
pondok2();

// Callback function
// alert(" Ini adalah alert")
let isBoss = confirm(" apakah kamu adalah bos?");
alert(isBoss);

function pertanyaan(penanya, yes, tidak){
    if (confirm(penanya)) {
        ya();
    }else{
        tidak();
    }
}
function tampilya(){
    alert("ya saya santri")
}
function tampiltidak(){
    alert("saya bukan santri")
}
pertanyaan(" apakah kamu adalah santri?", tampilya, tampiltidak);


//  expresi function VS deklaration function
// 1. perbedaan syntax
// ? syntax deklarasion

function nilai(){
    return 100;
}

// ? syntax experssion
let nilai2 = function(){
    return 100;
}

// 2/ java script engine
//? deklarasi function
sayHello1();
function sayHello1(){
    alert(" Hello world");
}


 //? expression function
 let sayHello2 = function(){
    alert(" Hello world 2");
 }
 sayHello2();
