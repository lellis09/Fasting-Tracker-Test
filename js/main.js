
// let endTime = document.getElementById('end-time').value

let hourDisplay = document.getElementById('hour-display')
let minDisplay = document.getElementById('min-display')
let hourTime = 0
let minTime = 0
// console.log(endDisplay)

let time = 0
// function increase12(){
//  time += startTime + 12
//  endTime.innerText =time
// }

function addTo(x, y){
     x= Number(document.getElementById('hours').value)
     y = Number(document.getElementById('minutes').value)
    
    hourTime += x
    minTime += y
    // time += startTime + 12
    // hourDisplay.innerText = hourTime +12
    // minDisplay.innerText = minTime
    // console.log(endDisplay)
    console.log(hourTime)
    console.log(minTime)
    return (hourTime, minTime)
    }

function addTwelve(hourTime, minTime){
    
    hourDisplay.innerText = hourTime +12
    minDisplay.innerText = minTime
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