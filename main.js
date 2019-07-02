// Clicking Play Button will currently pick a color for simon and flash the pad
// Clicking any of the pads will populate the userChoice array and flash the pad

// Variables
const color = document.querySelectorAll(".pad")
const playButton = document.getElementById('play-button')
const simonsChoice = []
const userChoice = []

// eventListener
color.forEach(item => {
    item.addEventListener('click', usersColorPick)
})

playButton.addEventListener('click', playGame)

// functions
function simonsColorPicks() {
    randomNumber = Math.floor(Math.random() * color.length)
    simonsChoice.push(color[randomNumber].id)
    flash(color[randomNumber].id)
    console.log(color[randomNumber].id)
}

function usersColorPick() {
    userChoice.push(event.target.id)
    flash(event.target.id)
    console.log(event.target.id)
}

function flash(colorIndex) {
    document.querySelector(`#${colorIndex}`).style.filter = 'opacity(0.5)'
    setTimeout(function() {
        document.querySelector(`#${colorIndex}`).style.filter = 'opacity(1)'
    }, 300)
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