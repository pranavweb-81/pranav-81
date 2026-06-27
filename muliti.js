
function generateTable(){

let num = Number(document.getElementById("number").value);
let result = document.getElementById("result");

result.innerHTML = "";

for(let i = 1; i <= 10; i++){

    result.innerHTML += num + " x " + i + " = " + (num * i) + "<br>";

}

}




function add(){

let a = Number(document.getElementById("num1").value);
let b = Number(document.getElementById("num2").value);

let result = a + b;

document.getElementById("result").innerText = "Result: " + result;

}

function subtract(){

let a = Number(document.getElementById("num1").value);
let b = Number(document.getElementById("num2").value);

let result = a - b;

document.getElementById("result").innerText = "Result: " + result;

}

function multiply(){

let a = Number(document.getElementById("num1").value);
let b = Number(document.getElementById("num2").value);

let result = a * b;

document.getElementById("result").innerText = "Result: " + result;

}

function divide(){

let a = Number(document.getElementById("num1").value);
let b = Number(document.getElementById("num2").value);

let result = a / b;

document.getElementById("result").innerText = "Result: " + result;

}
