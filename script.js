let seconds = 0;
let tens = 0;
let mins = 0;
let lapCount = 1;

let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let getMins = document.querySelector('.mins');
let btnStart = document.querySelector('.btn-start');
let btnPause = document.querySelector('.btn-pause');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let btnLap = document.querySelector('.btn-lap');
let lapList = document.querySelector('.lap-list');
let interval;

btnStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});

btnPause.addEventListener('click', () => {
    clearInterval(interval);
});

btnStop.addEventListener('click', () => {
    clearInterval(interval);
    resetTimer();
});

btnReset.addEventListener('click', () => {
    clearInterval(interval);
    resetTimer();
});

btnLap.addEventListener('click', () => {
    addLap();
});

function startTimer() {
    tens++;
    if (tens <= 9) {
        getTens.innerHTML = '0' + tens;
    }
    if (tens > 9) {
        getTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + 0;
    }
    if (seconds > 9) {
        getSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
        mins++;
        getMins.innerHTML = '0' + mins;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0;
    }
    if (mins > 9) {
        getMins.innerHTML = mins;
    }
}

function resetTimer() {
    tens = 0;
    seconds = 0;
    mins = 0;
    getSeconds.innerHTML = '00';
    getTens.innerHTML = '00';
    getMins.innerHTML = '00';
    lapCount = 1;
    lapList.innerHTML = '';
}

function addLap() {
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCount}: ${getMins.innerHTML}:${getSeconds.innerHTML}:${getTens.innerHTML}`;
    lapList.appendChild(lapItem);
    lapCount++;
}
