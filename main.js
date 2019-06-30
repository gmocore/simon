const color = document.querySelectorAll(".pad")
const simonsChoice = []

const colorPicker = function() {
    simonsChoice.push(Math.floor(Math.random() * color.length))
    console.log(simonsChoice);
}

const simonsColorPicks = () => {
// TODO  chnage console log to a computer clicking
    simonsChoice.forEach(item => console.log(color[item].id))
}