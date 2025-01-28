// nullish ??
let firstName = null;
console.log(firstName);

// jika firtsName itu isinya null/undefined, maka tampilkan isi firstName, jika tidak maka tampilkan 'tidak memiliki nama'
let hasil = firstName ?? "Tidak memiliki nama";
console.log(hasil);


// case 2
let firstNames = 0;
let lastName = null;
let nickName ;

let fullName = firstNames ?? lastName ?? nickName ?? "Anonymous";
console.log(fullName);


// perbandingan ||
// nilai false adalah antara 0, false , string kosong"" dan null / undefined
let namaAwal = null;
let namaAkhir = null;
let namaTengah = 0;

let namaSeluruhnya = namaAwal || namaAkhir || namaTengah || "NO NAME";
console.log(namaSeluruhnya);


let value = null ?? "default";
console.log(value);  