// NUMBER DI CALCULATOR
function numberOne() {
  let getElement = document.getElementById("display").innerHTML;

  if (getElement == 0) {
    getElement = "";
  }

  let total = getElement + 1;
  document.getElementById("display").innerHTML = total;
}

function numberTwo() {
  let getElement = document.getElementById("display").innerHTML;

  if ((getElement == 0)) {
    getElement = "";
  }

  let total = getElement + 2;
  document.getElementById("display").innerHTML = total;
}

function numberThree() {
  let getElement = document.getElementById("display").innerHTML;

  if ((getElement == 0)) {
    getElement = "";
  }

  let total = getElement + 3;
  document.getElementById("display").innerHTML = total;
}
function numberFour() {
  let getElement = document.getElementById("display").innerHTML;

  if ((getElement == 0)) {
    getElement = "";
  }

  let total = getElement + 4;
  document.getElementById("display").innerHTML = total;
}
function numberFive() {
  let getElement = document.getElementById("display").innerHTML;

  if ((getElement == 0)) {
    getElement = "";
  }

  let total = getElement + 5;
  document.getElementById("display").innerHTML = total;
}
function numberSix() {
  let getElement = document.getElementById("display").innerHTML;

  if ((getElement == 0)) {
    getElement = "";
  }

  let total = getElement + 6;
  document.getElementById("display").innerHTML = total;
}
function numberSeven() {
  let getElement = document.getElementById("display").innerHTML;

  if ((getElement == 0)) {
    getElement = "";
  }

  let total = getElement + 7;
  document.getElementById("display").innerHTML = total;
}
function numberEight() {
  let getElement = document.getElementById("display").innerHTML;

  if ((getElement == 0)) {
    getElement = "";
  }

  let total = getElement + 8;
  document.getElementById("display").innerHTML = total;
}
function numberNine() {
  let getElement = document.getElementById("display").innerHTML;

  if ((getElement = 0)) {
    getElement = "";
  }

  let total = getElement + 9;
  document.getElementById("display").innerHTML = total;
}

function pertambahan() {
  let getElement = document.getElementById("display").innerHTML;
  let total = getElement + " + ";
  document.getElementById("display").innerHTML = total;
}

function pengurangan() {
  let getElement = document.getElementById("display").innerHTML;
  let total = getElement + " - ";
  document.getElementById("display").innerHTML = total;
}
function perkalian() {
  let getElement = document.getElementById("display").innerHTML;
  let total = getElement + " x ";
  document.getElementById("display").innerHTML = total;
}
function pembagian() {
  let getElement = document.getElementById("display").innerHTML;
  let total = getElement + " / ";
  document.getElementById("display").innerHTML = total;
}

function calculateResult() {
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
