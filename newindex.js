const display = document.getElementById("displaynum");
<<<<<<< HEAD
let buttons = document.getElementById('buttons');

function addnum(num) {
    playSound();
    display.value += num;
}

function addnum(input){
     playSound();
=======

function addnum(input){
>>>>>>> 88f1600fceea88db551c621df43c882bc2689694
    display.value += input;
}

// THIS function should perform the math
function calculate(){
<<<<<<< HEAD
     playSound();
=======
>>>>>>> 88f1600fceea88db551c621df43c882bc2689694
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = "Error";
    }
}
<<<<<<< HEAD
function clearcalc(){
     playSound();
    display.value = "";
}

function playSound() {
    const sound = document.getElementById('button-sound');
    sound.currentTime = 0;
    sound.play();
}
=======

// THIS function should just clear the screen
function clearcalc(){
    display.value = "";
}
>>>>>>> 88f1600fceea88db551c621df43c882bc2689694
