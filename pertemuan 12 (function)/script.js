function buatTeh() {
  console.log("Rebus air");
  console.log("Masukan teh ke dalam air panas");
  console.log("Aduk dan siap untuk di minum");
}

// buatTeh();

//variable lokal
//variable yang di buat di dalam function hanya bisa di akses dalam fungsi tersebut.

function varLokal() {
  let x = 10; // di sebut dengan variable local
  console.log(x);
}

varLokal();
// console.log(x); // eror. variable tidak bisa di akses di luar function





// variable global atau variable luar
// vaiable yang di buat di luar fungsi dapat di akses oleh fungsi ( jika tisak ada konflik nama)

let firstName = 'fuad';
function varLuar(){
    console.log(firstName);

    // PROSES UPDATE
    firstName = 'ABDURRAHMAN'
}
varLuar();// memanggil fungsinya
console.log(firstName);






//parameter
// parameter adalah input yang di kirimkan kr fungsi

function angka(nilaiParameter, nilaiParameterTwo){
    console.log(nilaiParameter);
    console.log(nilaiParameterTwo);
    
    
}
angka(45, 90);

// nilai default
// parameter bisa memiliki nilai default jika tidak ada input

function number(no = 0 ){ // no = parameter sedangkan angka 0 adalah nilai default
    console.log(no);
}
number();



// Alternatif nilai default parameter
// case 1 menggunakan '|| ( dia akan mengecek string kosong "", false, 0, null, undifined, NaN)
function lastName(name){
name = name || "Abdurrahman";

// update prosess
console.log(name);

  
}
lastName("");

// case 2 menggunakan '?? ( null / undifined)
function nickName(nick){
  nick = nick ?? "Supercode"

  console.log(nick);
  
}
nickName(null);

// MENGEMBALIKAN NILAI ( RETURN )
// Fungsinya dapat mengembalikan nilai dengan menggunakan kata kunci "return"

function perkalian(a,b){
  return a * b;
}
let hasilPerkalian = perkalian( 2, 3);
console.log(hasilPerkalian);


// MENAMAKAN FUNGSI
function cetakTwo (){
  console.log('cetakTwo');
  
}
cetakTwo();
// syarat - syarat menamakan funsi
// nama hanya boleh mengandung huruf, digit / simbol seperti $ dan _
// karakter pertama tidak boleh digit




