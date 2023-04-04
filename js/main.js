


let hourDisplay = document.getElementById('hour-display')
console.log(hourDisplay)
let minDisplay = document.getElementById('min-display')
console.log(minDisplay)
let hourTime = 0
let minTime = 0

function addTo(){
     let hourInput = Number(document.getElementById('hours').value)
    //  console.log(hourInput)
     let minInput = Number(document.getElementById('minutes').value)
    //  console.log(minInput)
    
    hourTime = hourInput
    minTime = minInput
    // time += startTime + 12
    hourDisplay.innerText = hourTime 
    minDisplay.innerText = minTime
    // console.log(endDisplay)
   
    return (hourTime, minTime)
 }
    

function addTwelve(){
   addTo(hourTime, minTime)
   let newFast = hourTime + 12
    hourDisplay.innerText = newFast
    minDisplay.innerText = minTime
    console.log(newFast)
    if(newFast > 12){
       hourDisplay =  newFast-12
    }
    // console.log(hourTime)
    // console.log(minTime)
}

// function addTo(){
//     let startTime = document.getElementById('start').value
//     console.log(startTime)
//     // time += startTime + 12
//     endDisplay.innerText = startTime
//     // console.log(endDisplay)
// }

// function addto(){
//     let startTime = Number(document.getElementById('start').value)
//     console.log(startTime)
//     time += startTime + 12
//     endDisplay.innerText = time
//     console.log(endDisplay)
// }

//TODO check out date method it starts the timer from when they click it