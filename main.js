// color[0].id 
const color = document.querySelectorAll(".pad")

console.log(color);


const simonsChoice = []

const colorPicker = function() {
    simonsChoice.push(Math.floor(Math.random() * color.length))
    console.log(simonsChoice);
}
