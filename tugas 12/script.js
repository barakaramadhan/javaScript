
// LATIHAN SOAL NOMOR 1
function greet(){
    console.log("Hello, World!");
}
greet();

// LATIHAN SOAL NOMOR 2
function showMessage (){
    let message = "Ini adalah pesan lokal";
    console.log(message);
}
showMessage();


// LATIHAN SOAL NOMOR 3
let username = 'Guest';
function updateUsername(){
    console.log(username);
    
    // proses update
    username = ' Admin'
}
updateUsername();
console.log(username);


// LATIHAN SOAL NOMOR 5
function greet1( name = 'user') {
     console.log(`Hello, ${name}!`);
}
greet1();  
greet1("Alya")


//  LATIHAN SOAL NOMOR 6
function setUser(userName){
    userName = userName ?? "Guest"

    console.log(userName);
}
setUser()

// LATIHAN SOAL NOMOR 7
function add(paramOne, paramTwo){
    return paramOne + paramTwo;
}
let hasilPenjumlahan = add (10, 7);
console.log(hasilPenjumlahan);
