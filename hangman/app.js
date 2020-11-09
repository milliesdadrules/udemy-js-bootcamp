const game = new Hangman("draco malfoy",5)
const wordEl = document.querySelector("#word")
const statusEl = document.querySelector("#status")
console.log(game.status)
wordEl.textContent = game.puzzle
statusEl.textContent = `Playing => Guesses left: ${game.remainingGuesses}`

window.addEventListener("keypress", (e) => {
    const guess = e.key
    game.makeGuess(guess)
    wordEl.textContent = game.puzzle
    statusEl.textContent = game.statusMessage
})