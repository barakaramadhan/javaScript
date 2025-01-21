//LATIHAN SOAL NOMOR 1

//MISI 1
let susulanUjianAndi = 81;
if (susulanUjianAndi >=91) {
    console.log('GRADE A');
}
else if (susulanUjianAndi >=81){
    console.log('GRADE B');
}
else if (susulanUjianAndi >=71){
    console.log('GRADE C');
}
else{
    console.log('GRADE D'); 
}

//MISI 2
let ujianSusulan = 81;
ujianSusulan>=91 ? console.log('GRADE A'):
ujianSusulan>=81 ? console.log('GRADE B'):
ujianSusulan>=71 ? console.log('GRADE C'):
console.log('GRADE D');



//LATIHAN SOAL NOMOR 2

let belanjaPergi = 'Nangka';
let belanjaPulang = 'Salak';

switch (belanjaPergi) {
    case "Cherry":
        console.log('Buah yang di dapatkan adalah Cherry');
        break;
    case "Nangka":
        console.log('Buah yang di dapatkan adalah Nangka');
        break;
    case "Salak":
        console.log('Buah yang di dapatkan adalah Nangka');
        break;
    case "Salak dan Nangka":
        console.log('Buah yang di dapatkan adalah Salak dan Nangka');
        break;
    default:
        console.log('Nurudin tidak membeli apapaun');
        
}
// SAAT PULANG
switch (belanjaPulang) {
    case "Salak":
        console.log(' Ketika pulang Nurudin membeli Salak 2 kg');
        break;

    default:
        console.log('Tidak ada tambahan');
        
}


// LATIHAN SOAL NOMOR 3
let saklar;
if (saklar) {
    console.log('Saklarnya Hidup');
}
else{
    console.log('Saklarnya Mati');
    
}