const game = new Hangman("Cat",2)
const wordEl = document.querySelector("#word")
const guessesEl = document.querySelector("#guesses")

wordEl.textContent = game.getPuzzle()
guessesEl.textContent = game.remainingGuesses

window.addEventListener("keypress", (e) => {
    const guess = e.key
    game.makeGuess(guess)
    wordEl.textContent = game.getPuzzle()
    guessesEl.textContent = game.remainingGuesses
})