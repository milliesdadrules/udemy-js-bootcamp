import Hangman from './hangman'
import getPuzzle from './requests'

const wordEl = document.querySelector("#word")
const statusEl = document.querySelector("#status")
let game

window.addEventListener("keypress", (e) => {
    const guess = e.key
    game.makeGuess(guess)
    render()
})

const render = () => {

    wordEl.innerHTML = ""
    statusEl.textContent = game.statusMessage

    game.puzzle.split("").forEach((letter) =>{
        const puzzleLetter = document.createElement("span")
        puzzleLetter.textContent = letter
        wordEl.append(puzzleLetter)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle("2")
    game = new Hangman(puzzle, 5)
    render()
}

document.querySelector("#reset").addEventListener("click", startGame)

startGame()
