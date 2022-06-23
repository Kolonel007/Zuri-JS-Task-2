let x = prompt("Enter First Number");
let y = prompt("Enter Second Number");
let z = prompt("Enter the operator");

if (z == "+") {
    alert(Number(x) + Number(y));
} else if (z == "-") {
    alert(Number(x) - Number(y));
} else if (z == "/") {
    alert(Number(x) / Number(y));
} else if (z == "%") {
    alert(Number(x) % Number(y));
} else if (z == "*") {
    alert(Number(x) * Number(y));
}
else{alert("Wrong input, refersh page to start again"); }