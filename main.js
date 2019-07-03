let flash;
let intervalId;
let compTurn;
let turn;
let good;
let simonsChoice = [];
let usersChoice = [];
const colors = ['blue', 'green', 'yellow', 'red'];
const playButton = document.querySelector('#play-button');
const blue = document.querySelector('#blue');
const green = document.querySelector('#green');
const yellow = document.querySelector('#yellow');
const red = document.querySelector('#red');

playButton.addEventListener('click', (event) => {
    playGame()
})

function playGame() {
    flash = 0;
    compTurn = true
    good = true;
    simonsChoice = []
    usersChoice = [];
    turn = 1
    intervalId = setInterval(simonsColorPicks, 800);
}

function simonsColorPicks() {
    if (flash == turn) {
        clearInterval(intervalId);
        compTurn = false;
        clearColor();
      }
    if (compTurn) {
        clearColor()
        randomNumber = Math.floor(Math.random() * 4)
        simonsChoice.push(colors[randomNumber])
        console.log(randomNumber)
        console.log(colors[randomNumber])
        setTimeout(() => {
            if (simonsChoice[flash] == 'blue') changeBlue();
            if (simonsChoice[flash] == 'green') changeGreen();
            if (simonsChoice[flash] == 'yellow') changeYellow();
            if (simonsChoice[flash] == 'red') changeRed();
            flash++;
          }, 200);
    }
}

function changeBlue() {
    blue.style.filter = 'opacity(0.1)'
}
function changeGreen() {
    green.style.filter = 'opacity(0.1)'
}
function changeYellow() {
    yellow.style.filter = 'opacity(0.1)'
}
function changeRed() {
    red.style.filter = 'opacity(0.1)'
}

function clearColor() {
    blue.style.filter = 'opacity(1)'
    green.style.filter = 'opacity(1)'
    yellow.style.filter = 'opacity(1)'
    red.style.filter = 'opacity(1)'
}

function flashColor() {
    blue.style.filter = 'opacity(.1)'
    green.style.filter = 'opacity(.1)'
    yellow.style.filter = 'opacity(.1)'
    red.style.filter = 'opacity(.1)'
}

blue.addEventListener('click', (event) => {
    usersChoice.push(event.target.id)
    check()
    changeBlue()
    setTimeout(() => {
        clearColor()
    }, 300)
})
green.addEventListener('click', (event) => {
    usersChoice.push(event.target.id)
    check()
    changeGreen()
    setTimeout(() => {
        clearColor()
    }, 300)
})
yellow.addEventListener('click', (event) => {
    usersChoice.push(event.target.id)
    check()
    changeYellow()
    setTimeout(() => {
        clearColor()
    }, 300)
})
red.addEventListener('click', (event) => {
    usersChoice.push(event.target.id)
    check()
    changeRed()
    setTimeout(() => {
        clearColor()
    }, 300)
})

function check() {
    if (usersChoice[usersChoice.length - 1] !== simonsChoice[usersChoice.length - 1]) {
        good = false;
    }

    if (good == false) {
        flashColor();
        setTimeout(() => {
            clearColor()
            playGame()
        }, 800);
    };

    if (turn == usersChoice.length && good) {
        turn++;
        usersChoice = []
        compTurn = true;
        flash = 0;
        intervalId = setInterval(simonsColorPicks, 800);
    }

}