// Clicking Play Button will currently pick a color for simon and fade the pad
// Clicking any of the pads will populate the userChoice array
// Equality functionality works with logging arraysEqual(simonsChoice, userChoice) in the chrome terminal

// TODO:  simsonsColorPicks()
// 1.  Create an Interval to loop through simonsChoice array.
// 2.  Change opacity of item in array
// 3.  Change opacity of item in array back to original
// 4.  Continue until end of array

// TODO:  EqualityCheck
//      Simon says green.  User clicks green.. we're good.
//      Simon says green, blue, red, yellow. User clicks green..
//          Our current checker will return false since one has 4 elements and the other only has 1 at this current state

// TODO:  playGame()
// 1. Activate simonsColorPicks
// 2. Wait for return from userColorPick()
// 3. If arraysEqual() returns true star over

// Variables
const color = document.querySelectorAll(".pad")
const simonsChoice = []
const userChoice = []
const playButton = document.getElementById('play-button')

// eventListener
color.forEach(item => {
    item.addEventListener('click', usersColorPick)
})

playButton.addEventListener('click', playGame)

// functions
function simonsColorPicks() {
    randomNumber = Math.floor(Math.random() * color.length)
    simonsChoice.push(color[randomNumber].id)
    flash()
}

function flash() {
    color[randomNumber].style.filter = 'opacity(0.5)'
    setTimeout(function() {
        color[randomNumber].style.filter = 'opacity(1)'
    }, 300)
}

function usersColorPick() {
    userChoice.push(event.target.id)
}



function playGame() {
    simonsColorPicks()
}


// This Compare Function works
// https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;
  
    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }