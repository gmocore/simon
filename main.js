// Variables
const color = document.querySelectorAll(".pad")
const simonsChoice = []
const userChoice = []
const playButton = document.getElementById('play-button') 

// eventListener
color.forEach(item => {
    item.addEventListener('click', () => {
        console.log(this.event.target)
        console.log(this.event)
        // let clickedTarget = this.event.target
        userChoice.push(this.event.target)
        // return clickedTarget
    })
})

playButton.addEventListener('click', () => {
    playGame()
})

// functions
const colorPicker = function() {
    // simonsChoice.push(Math.floor(Math.random() * color.length))
    console.log('colorpicker ran');
    return Math.floor(Math.random() * color.length)
}

const simonsColorPicks = () => {
    simonsChoice.push(color[colorPicker()].id)
    // simonsChoice.forEach(item => console.log(color[item].id))
    // simonsChoice.forEach(item => color[item].style.filter = 'opacity(0.5)')
}

// const userColorPicks = () => {
//     userChoice.push(clickedTarget)
// }

const playGame = () => {
    // colorPicker() 
    simonsColorPicks()
}




// crazy compare function
function compare(userChoice,simonsChoice){
  
    if(!userChoice  || !simonsChoice) return
   
     let result;
   
   userChoice.forEach((e1,i)=>simonsChoice.forEach(e2=>{
     
          if(e1.length > 1 && e2.length){
             result = compare(e1,e2);
          }else if(e1 !== e2 ){
             result = false
          }else{
             result = true
          }
     })
   )
   
   return result
   
 }