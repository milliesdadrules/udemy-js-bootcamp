const game = new Hangman("draco malfoy",5)
const wordEl = document.querySelector("#word")
const statusEl = document.querySelector("#status")
console.log(game.status)
wordEl.textContent = game.getPuzzle()
statusEl.textContent = `Playing => Guesses left: ${game.remainingGuesses}`

window.addEventListener("keypress", (e) => {
    const guess = e.key
    game.makeGuess(guess)
    wordEl.textContent = game.getPuzzle()
    if(game.status === "Playing"){
        statusEl.textContent = `Playing => Guesses left: ${game.remainingGuesses}`
    }else if (game.status === "Failed"){
        statusEl.textContent = `Failed => Nice try! The word was "${game.answer}"`
    } else {
        statusEl.textContent = `Finished => Great work! You guessed the word.`
    }
    console.log(game.status);
})