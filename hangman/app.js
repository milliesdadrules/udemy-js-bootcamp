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


getPuzzle(5).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err);
})

// const countryCode = "GB"
// getCountry(countryCode).then((country) => {
//     console.log(country.name);
// }).catch((err) =>{
//     console.log(err);
// })

getCurrentLocation().then((country) => {
    console.log(country.name);
}).catch((error) => {
    console.log(`Error: ${error}`)
})

// getLocation().then((data) => {
//     return getCountry(data.country)
// }).then((country) => {
//     console.log(country.name, "getLocation()")
// }).catch((err) =>{
//     console.log(err)
// })