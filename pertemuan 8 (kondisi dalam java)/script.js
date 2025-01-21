let umur = 19;
//MENGGUKAN IF SAJA
if (umur>=18) {
 console.log("anda sudah besar");  
}

// MENGGUNAKAN IF ELSE
if (umur>=18) {
    console.log("anda sudah besar");
} 
else{
    console.log("anda belum besar");
    
}

// menggunakan if else if
let nilaiMatematika = 80;
if (nilaiMatematika >= 90) {
    console.log('Grade A');
}
else if (nilaiMatematika >=80) {
    console.log('Grade B');
}

else if (nilaiMatematika >=70) {
    console.log('Grade C');
    
}

// konversi bolean dalam if
let cetekan = 0;
if (cetekan) {
    console.log('hidup');
}
else{
    console.log('mati');   
}

//false (falsy) adalah : 0, "" (string kosong), null, undefined, NaN, false.
//selain itu adalah true



//Opertor kondisional
cetekan ? console.log('hidup') : console.log('mati'); // kerana tanda ? adalah permisalan

let number2 = 10;
number2 >= 10 ? console.log('angkanya 10 atau lebih') : console.log('angkanya kurang dari 10');

//multiple tenary
let number3 = 9;
number3 >=90 ? console.log('Grade A') : //if
  number3 >= 80 ? console.log('Grade B') : //else if
   number3 >= 70 ? console.log('Grade C') : //else if
   number3 >= 60 ? console.log('Grade D') : //else if
   console.log('Grade E'); // else
   
   //penggunaan ? Non-tradisional
   let isLogin = true;

   //contoh 1
   isLogin ? console.log('Selamat datang') : console.log('Anda belum login');

   //contoh 2
   let pesan = isLogin ? 'Anda sudah login' : 'anda belum login';
   console.log(pesan);

   //switch statement
   let number4 = 100;
   switch(number4){
    case 100:
    case 90:
    console.log('Grade A');
    break;
    case 80:
        console.log('Grade B');
        break;
    default:
        console.log('Grade E');
        
        
   }
   let hasil = (nilai > 70) ? "Lulus" : "Tidak Lulus";
   
   
   
   

   


