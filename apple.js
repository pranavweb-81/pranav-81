
function greetUser() {
    let name = document.getElementById("name").value;
    let course =document.getElementById("course").value;
    let invoice =document.getElementById("invoice").value;
    document.getElementById("message").innerText = "Hello " + name +invoice+course+"! Welcome to JavaScript.";
}
