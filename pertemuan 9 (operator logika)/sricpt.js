// OPERATOR AND (&&)
let a = true;
let b = false;
let c = true;
// fungsi && untuk mengecek semua variable bernilai true
console.log(a && b);
if (a && b) {
    console.log('kedua variable itu bernilai benar/salah');
}
else{
    console.log('kedua variable itu bernilai salah/benar');
    
}

//operator OR(||)
//fungsi (||) adalah untuk mengecek 'salah satu' variable bernilai true
let d = true;
let e = false;
let f = true;
let g = false;

console.log( d|| e);
console.log( d||f);
console.log( e|| g);

if ( d || e || g) {
    console.log('Salah satu bernilai true/benar');
}
else{
    console.log('Semua variable bernilai false/ salah atau tidak bernilai true');
    
}

// OPERATOR NOT (!)
// fungsinya operator not (!) adalah membalikan nilai bolean(true atau false)
let h = true;
let i = false;
let j = true;
let isRaining = true;

console.log(h);
console.log(!h);

if (!isRaining) {
    console.log('HARI INI HUJAN');
}
else{
    console.log('HARI INI TIDAK HUJAN');
    
}


// LATIHAN
let nilaiMatematika = 91;
let nilaiBahasaInggris = 75;
let saklar = false;

if (nilaiMatematika >= 80 && nilaiBahasaInggris<=85 && !saklar) {
    console.log('lulus');
}
else{
    console.log('Tidak lulus');
    
}
