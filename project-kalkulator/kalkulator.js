// NUMBER DI CALCULATOR
function numberOne(numberOne) {
  let getElement = document.getElementById("display").innerHTML;

  if (getElement == 0) {
    getElement = "";
  }

  let total = getElement + numberOne;
  document.getElementById("display").innerHTML = total;
}
function numberNol(numberNol) {
  let getElement = document.getElementById("display").innerHTML;

  let total = getElement + numberNol;
  document.getElementById("display").innerHTML = total;
}
  
function numberTwo(numberTwo) {
  let getElement = document.getElementById("display").innerHTML;

  if ((getElement == 0)) {
    getElement = "";
  }

  let total = getElement + numberTwo;
  document.getElementById("display").innerHTML = total;
}

function numberThree(numberThree) {
  let getElement = document.getElementById("display").innerHTML;

  if ((getElement == 0)) {
    getElement = "";
  }

  let total = getElement + numberThree;
  document.getElementById("display").innerHTML = total;
}
function numberFour(numberFour) {
  let getElement = document.getElementById("display").innerHTML;

  if ((getElement == 0)) {
    getElement = "";
  }

  let total = getElement + numberFour;
  document.getElementById("display").innerHTML = total;
}
function numberFive(numberFive) {
  let getElement = document.getElementById("display").innerHTML;

  if ((getElement == 0)) {
    getElement = "";
  }

  let total = getElement + numberFive;
  document.getElementById("display").innerHTML = total;
}
function numberSix(numberSix) {
  let getElement = document.getElementById("display").innerHTML;

  if ((getElement == 0)) {
    getElement = "";
  }

  let total = getElement + numberSix;
  document.getElementById("display").innerHTML = total;
}
function numberSeven(numberSeven) {
  let getElement = document.getElementById("display").innerHTML;

  if ((getElement == 0)) {
    getElement = "";
  }

  let total = getElement + numberSeven;
  document.getElementById("display").innerHTML = total;
}
function numberEight(numberEight) {
  let getElement = document.getElementById("display").innerHTML;

  if ((getElement == 0)) {
    getElement = "";
  }

  let total = getElement + numberEight;
  document.getElementById("display").innerHTML = total;
}
function numberNine(numberNine) {
  let getElement = document.getElementById("display").innerHTML;

  if ((getElement = 0)) {
    getElement = "";
  }

  let total = getElement + numberNine;
  document.getElementById("display").innerHTML = total;
}

function pertambahan(pertambahan) {
  let getElement = document.getElementById("display").innerHTML;
  let total = getElement + pertambahan;
  document.getElementById("display").innerHTML = total;
}

function pengurangan(pengurangan) {
  let getElement = document.getElementById("display").innerHTML;
  let total = getElement + pengurangan;
  document.getElementById("display").innerHTML = total;
}
function perkalian(perkalian) {
  let getElement = document.getElementById("display").innerHTML;
  let total = getElement +  perkalian;
  document.getElementById("display").innerHTML = total;
}
function pembagian(pembagian) {
  let getElement = document.getElementById("display").innerHTML;
  let total = getElement + pembagian;
  document.getElementById("display").innerHTML = total;
}

function calculateResult(hasil) { // hasil dari penjumlahan
  let getElement = document.getElementById("display").innerHTML;
  console.log(getElement);

  // kondisi
  if (getElement.includes("+")) {
    let parts = getElement.trim().split("+");
    console.log(parts);

    let operand1 = Number(parts[0]);
    let operand2 = Number(parts[1]);
    let total = operand1 + operand2;
    console.log(total);

    document.getElementById("display").innerHTML = total;
  } else if (getElement.includes("-")) {
    let parts = getElement.trim().split("-");
    console.log(parts);

    let operand1 = Number(parts[0]);
    let operand2 = Number(parts[1]);
    let total = operand1 - operand2;
    console.log(total);

    document.getElementById("display").innerHTML = total;
  } else if (getElement.includes("x")) {
    let parts = getElement.trim().split("x");
    console.log(parts);

    let operand1 = Number(parts[0]);
    let operand2 = Number(parts[1]);
    let total = operand1 * operand2;
    console.log(total);

    document.getElementById("display").innerHTML = total;
    
  } else if (getElement.includes("/")) {
    let parts = getElement.trim().split("/");
    console.log(parts);

    let operand1 = Number(parts[0]);
    let operand2 = Number(parts[1]);
    let total = operand1 / operand2;
    console.log(total);

    document.getElementById("display").innerHTML = total;
  }
}

function clearDisplay(){
  let num1 = document.getElementById('display').innerHTML;

  numbers = 0;// hapus 1 karakter dari kanan

  document.getElementById('display').innerText = numbers;
}
function backspace(){
  let num1 = document.getElementById('display').innerHTML;

  numbers = num1.trim().slice( 0,-1);

  document.getElementById('display').innerText = numbers;
}