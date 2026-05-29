const display = document.getElementById("displaynum");

function addnum(input){
    display.value += input;
}

// THIS function should perform the math
function calculate(){
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = "Error";
    }
}

// THIS function should just clear the screen
function clearcalc(){
    display.value = "";
}
