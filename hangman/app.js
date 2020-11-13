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


getPuzzle(2).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err);
})

const countryCode = "MX"
getCountry(countryCode).then((country) => {
    console.log(country.name);
}).catch((err) =>{
    console.log(err);
})

getLocation().then((data) => {
    return getCountry(data.country)
}).then((country) => {
    return country.name
}).catch((err) =>{
    console.log(err)
})