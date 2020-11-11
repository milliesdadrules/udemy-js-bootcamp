const game = new Hangman("game Word",5)
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


getPuzzle(6).then((data) => {
    console.log(data)
}, (err) => {
    console.log(err);
})

const countryCode = "GB"
getCountry(countryCode).then((country) => {
    console.log(country.name);
},(err) =>{
    console.log(err);
})

