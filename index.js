
const container = document.querySelector('#container')
var playerPosition = 202

// creates a grid that is 15x15 with the div
for (let i = 0; i < 225; i++) {
    const square = document.createElement('div')
    container.appendChild(square);
}

const squares = Array.from(document.querySelectorAll('#container div'))

// indexes of where the aliens will go
const aliens = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
]

const placeAliens = () => {
    for (let i = 0; i < aliens.length; i++){
        squares[aliens[i]].classList.add('enemy')
    }
}

squares[playerPosition].classList.add('player')

placeAliens()

const placePlayer = () => {

}



// const playerMove = (w) => {
//     console.log("mouse location:", e.clientX, e.clientY)
// }

// playerMove()

playerPosition.onmousemove = function(e){e.clientX}
