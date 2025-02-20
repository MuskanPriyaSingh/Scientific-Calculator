let isOn = false;
        
function turnON(){
    isOn = true;
    const display = document.getElementById("result");
    display.disabled = false;
    display.value = "0";
}

function turnOFF(){
    isOn = false;
    const display = document.getElementById("result");
    display.disabled = true;
    display.value = ""; 
}

function appendToDisplay(value){
    if (isOn) {
        const display = document.getElementById("result");
        if (display.value === "0") {
            display.value = value;
        } else {
            display.value += value;
        }
    }
}

function solve(){
    const display = document.getElementById("result");
    let x = display.value;
    let y = eval(x);
    display.value = y;
}

function deleteLast(){
    let current = document.getElementById("result").value;
    document.getElementById("result").value = current.slice(0, -1);
}

function clearDisplay(){
    const display = document.getElementById("result");
    display.value = '';
}

function x2(){
    const display = document.getElementById("result");
    display.value = Math.pow(display.value, 2);
}

function x3(){
    const display = document.getElementById("result");
    display.value = Math.pow(display.value, 3);
}

function x4(){
    const display = document.getElementById("result");
    display.value = Math.pow(display.value, 4);
}

function x5(){
    const display = document.getElementById("result");
    display.value = Math.pow(display.value, 5);
}

function x6(){
    const display = document.getElementById("result");
    display.value = Math.pow(display.value, 6);
}

function x7(){
    const display = document.getElementById("result");
    display.value = Math.pow(display.value, 7);
}

function percentval(){
    const display = document.getElementById("result");
    let res = eval(display.value); 
    display.value = res * 100;
}

function sin(){
    const display = document.getElementById("result");
    display.value = Math.sin(display.value * (Math.PI/180));
}

function sinh(){
    const display = document.getElementById("result");
    display.value = Math.sinh(display.value);
}

function asin(){
    const display = document.getElementById("result");
    display.value = Math.asin(display.value);
}

function asinh(){
    const display = document.getElementById("result");
    display.value = Math.asinh(display.value);
}

function cos(){
    const display = document.getElementById("result");
    display.value = Math.cos(display.value * (Math.PI/180));
}

function cosh(){
    const display = document.getElementById("result");
    display.value = Math.cosh(display.value);
}

function acos(){
    const display = document.getElementById("result");
    display.value = Math.acos(display.value);
}

function acosh(){
    const display = document.getElementById("result");
    display.value = Math.acosh(display.value);
}

function tan(){
    const display = document.getElementById("result");
    display.value = Math.tan(display.value * (Math.PI/180));
}

function tanh(){
    const display = document.getElementById("result");
    display.value = Math.tanh(display.value);
}

function atan(){
    const display = document.getElementById("result");
    display.value = Math.atan(display.value);
}

function atanh(){
    const display = document.getElementById("result");
    display.value = Math.atanh(display.value);
}

function cot(){
    const display = document.getElementById("result");
    display.value = 1/Math.tan(display.value);
}

function coth(){
    const display = document.getElementById("result");
    display.value = 1/Math.tanh(display.value);
}

function log(){
    const display = document.getElementById("result");
    display.value = Math.log10(display.value);
}

function ln(){
    const display = document.getElementById("result");
    display.value = Math.log(display.value);
}

function exponentiate(){
    const display = document.getElementById("result");
    display.value = Math.pow(Math.E, display.value);
}

function sqrt(){
    const display = document.getElementById("result");
    display.value = Math.sqrt(parseFloat(display.value));
}

function cuberoot(){
    const display = document.getElementById("result");
    display.value = Math.cbrt(parseFloat(display.value), 3);
}

function factorial(){
    const display = document.getElementById("result");
    let n = parseInt(display.value);
    
    if (isNaN(n) || n < 0) {
        display.value = "Error"; 
        return;
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    
    display.value = result;
}

function X10powx(){
    const display = document.getElementById("result");
    display.value = display.value * (Math.pow(10, display.value));
}