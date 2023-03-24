
// let endTime = document.getElementById('end-time').value

let endDisplay = document.getElementById('end')
// let userInput = document.getElementById('start')
// console.log(endDisplay)

let time = 0
// function increase12(){
//  time += startTime + 12
//  endTime.innerText =time
// }

function addTo(){
    let startTime = document.getElementById('start').value
    console.log(startTime)
    // time += startTime + 12
    endDisplay.innerText = startTime
    // console.log(endDisplay)
}

// function addto(){
//     let startTime = Number(document.getElementById('start').value)
//     console.log(startTime)
//     time += startTime + 12
//     endDisplay.innerText = time
//     console.log(endDisplay)
// }

//TODO check out date method it starts the timer from when they click it