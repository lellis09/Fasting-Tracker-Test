


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
    
    console.log(newFast)
    if(newFast > 12){
       newFast = newFast-12 + 'PM'
    }
    hourDisplay.innerText = newFast
    minDisplay.innerText = minTime
    console.log(newFast)
    
}



//TODO check out date method it starts the timer from when they click it