const display = document.getElementById("display");
function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0, -1);
}

function percentage() {
    let expression = display.value;

    let match = expression.match(/(.*)([+\-*/])(\d*\.?\d+)$/);

    if (match) {
        let firstNumber = eval(match[1]);
        let operator = match[2];
        let secondNumber = parseFloat(match[3]);

        if (operator === "+" || operator === "-") {
            secondNumber = firstNumber * secondNumber / 100;
        } else {
            secondNumber = secondNumber / 100;
        }

        display.value = match[1] + operator + secondNumber;
    } else {
        display.value = parseFloat(expression) / 100;
    }
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}