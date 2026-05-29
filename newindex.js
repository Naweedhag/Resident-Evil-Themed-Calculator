const display = document.getElementById("displaynum");
let buttons = document.getElementById('buttons');

function addnum(num) {
    playSound();
    display.value += num;
}

function calculate(){
    playSound();
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = "Error";
    }
}

function clearcalc(){
    playSound();
    display.value = "";
}

function playSound() {
    const sound = document.getElementById('button-sound');
    if (sound) {
        sound.currentTime = 0;
        sound.play();
    }
}
