
const wordEl = document.querySelector("#word")
const statusEl = document.querySelector("#status")
let game

// wordEl.textContent = game.puzzle
// statusEl.textContent = `Playing => Guesses left: ${game.remainingGuesses}`

window.addEventListener("keypress", (e) => {
    const guess = e.key
    game.makeGuess(guess)
    render()
})

const render = () => {
    wordEl.textContent = game.puzzle
    statusEl.textContent = game.statusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzle("2")
    game = new Hangman(puzzle, 5)
    render()
}

document.querySelector("#reset").addEventListener("click", startGame)

startGame()
// getPuzzle(2).then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err);
// })

// const countryCode = "GB"
// getCountry(countryCode).then((country) => {
//     console.log(country.name);
// }).catch((err) =>{
//     console.log(err);
// })

// getCurrentLocation().then((country) => {
//     console.log(country.name);
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// })

// getLocation().then((data) => {
//     return getCountry(data.country)
// }).then((country) => {
//     console.log(country.name, "getLocation()")
// }).catch((err) =>{
//     console.log(err)
// })