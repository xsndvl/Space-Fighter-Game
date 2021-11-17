
const container = document.querySelector('#container')
let playerPosition = 202
let width = 15
let direction = 1
let aliensId

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

const removeAliens = () => {
    for (let i = 0; i < aliens.length; i++){
        squares[aliens[i]].classList.remove('enemy')
    }
}

squares[playerPosition].classList.add('player')

placeAliens()


const movePlayer = (e) => {
    squares[playerPosition].classList.remove('player')
    switch(e.key){
        case 'ArrowLeft':
            if (playerPosition % width !== 0) playerPosition -= 1
            break
        case 'ArrowRight':
            if(playerPosition % width < width -1) playerPosition += 1
            break
    }
    squares[playerPosition].classList.add('player')
}

document.addEventListener('keydown', movePlayer)

const moveAliens = () => {
    const leftEdge = aliens[0] % width === 0
    constrightEdge = aliens[aliens.length - 1] % width === width - 1
    removeAliens()

    if(rightEdge) {
        for (let i = 0; i < aliens.length, i++) {
            aliens[]
        }
    }

    for (let i = 0; i < aliens.length; i++) {
        aliens[i] += direction
    }

    placeAliens()
}

aliensId = setInterval(moveAliens, 500)