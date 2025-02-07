// Deklarasi function
function deklarasi(param){
    console.log('deklarasi');
    
}

// expression function
let expression = function(param){
    console.log('expression');
    
};

// arrow function
let arrowName = (param) => {
    console.log('arrow function');
    
}

// eksekusi/pemanggilan function
deklarasi();
expression();
arrowName();

// contoh arrow function
let sum = (a,b) =>{ // arrow = function
    return a+b;
}  
console.log(sum(1,2));

// refaktor
let total = (c, d) => c + d;
console.log(total(1,2));

// hanya satu parameter
let tampil = (username) => `hellow ${username}`;
console.log(tampil('Andi'));

// FUNNGSI ARROW MULTI BARIS
// wajib menggunakan return dan kurung {}
// tidak wajib menggunakan return dan kurung {}
let perkalian = (e, f) => {
    let hasil = e * f;
    hasil+=1
    return hasil;
   
}
 console.log(perkalian(2,3)); 


 // fungsi arrow tanpa paramater
 // jika tidak ada parameter tetap harus menggunakan kurung {}
 let sayHello = () => 'Hello';
 console.log(sayHello());

 // fungsi arrow dengan satu parameter
 // jika hanya satu parameter, () bisa diabaikan
 let sayHelloTwo = lastName => `Hello ${lastName}`;
 console.log(sayHelloTwo('Andi'));