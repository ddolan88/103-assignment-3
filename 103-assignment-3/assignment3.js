function calc(){
    var a = parseInt(document.querySelector("#value1") .value);
    var b = parseInt(document.querySelector("#value2") .value);
    var op = document.querySelector("#operator") .value;
    var calculate;

    if (op=="add") {
        calculate = a + b;
    } 
    else if (op == "sub"){
        calculate= a - b;
    } 
    else if (op == "mult"){
        calculate= a * b;
    } 
    else if (op == "divide"){
        calculate= a / b;
    }

    document.querySelector("#result").innerHTML = calculate;
}