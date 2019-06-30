const color = document.querySelectorAll(".pad")
const simonsChoice = []
const playButton = document.getElementById('play-button') 



const colorPicker = function() {
    simonsChoice.push(Math.floor(Math.random() * color.length))
    console.log(simonsChoice);
}

const simonsColorPicks = () => {
// TODO  chnage console log to a computer clicking
    simonsChoice.forEach(item => console.log(color[item].id))
}

color.forEach(item => {
    console.log(item.id)
    item.addEventListener('click', () => {
        console.log(this.event.target)
    })
})

playButton.addEventListener('click', () => {
    console.log(123);
    
})




// const blue = document.getElementById('blue')
// blue.addEventListener("click", () => {
//     console.log("clciked");
    
// })

