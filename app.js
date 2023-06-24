
const gamesBoardContainer = document.querySelector('#gamesboard-container')
const optionContainer = document.querySelector('.option-container')
const flipButton = document.querySelector('#flip-button')

// Option choosing
let angle = 0
function flip() {
    const optionShips = Array.from(optionContainer.children)
    if (angle === 0) {
        angle = 90
    } else {
        angle = 0
    }
    optionShips.forEach(optionShip => optionShip.style.transform = `rotate(${angle}deg)`)
}

// Creating Boards
const width = 10

function createBoard() {
    const gamesBoardContainer = document.createElement('div')
    gamesBoardContainer.classList.add('game-board')
    gamesBoardContainer.style.backgroundColor = 'pink'

    gamesBoardContainer.append(gamesBoardContainer)
}

createBoard()

flipButton.addEventListener('click', flip)