const game = new Hangman("Rocky Three",5)
const wordEl = document.querySelector("#word")
const guessesEl = document.querySelector("#guesses")
console.log(game.status)
wordEl.textContent = game.getPuzzle()
guessesEl.textContent = game.remainingGuesses

window.addEventListener("keypress", (e) => {
    const guess = e.key
    game.makeGuess(guess)
    wordEl.textContent = game.getPuzzle()
    guessesEl.textContent = game.remainingGuesses
    console.log(game.status);
})