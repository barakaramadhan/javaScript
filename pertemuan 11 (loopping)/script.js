// WHILE (di cek kondisi terlebih dahulu kemudian di proses)
let i = 1;

while (i <=5) {//jika i kurang dari sama dengan 3
    console.log(i);
    // i++;// i = i + 1
    i +=4;// intinya adalah itu cuman  ditambah
}

// DO WHILE (di proses atau di cetak kemudian di cek kondisi)
let j = 0;
do {
    console.log(j);
    j++;
} while (j<= 5);


// FOR
for (let k = 1; k <= 5; k++){
    console.log(k);
    
}

// melewatkan bagian continue
// melewatkan angka 2 karena 1 tidak sama dengan 2 (perbandingan)
for (let l = 1; l <=5; l++){
    if(l === 2) continue;
    console.log(l);
    
}

// menghentikan pengulangan menggunakan break

for (let m = 1; m <=5; m++){
    if(m === 4) break;
    console.log(m);
}

// contoh kasus

for (let n = 10; n >= 4; n--){
    console.log(n);
    
}

/// kasus baru

for (let n = 2; n <= 5; n++ ){
    if (n === 4)continue;
    if ( n === 5)break;
    console.log(n);
    
}