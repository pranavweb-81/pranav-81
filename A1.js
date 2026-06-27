
function checkAge(){

let age = Number(document.getElementById("age").value);
let result = document.getElementById("result");

if(age >= 18){
    result.innerText = "You are eligible to vote";
}
else{
    result.innerText = "You are not eligible to vote";
}

}
