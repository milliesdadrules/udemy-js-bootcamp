
const game = new Hangman("Harry Potter",5)
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

getPuzzle("4",(error, puzzle) => {
    if(error){
        console.log(`Error: ${error}`);
    } else {
        console.log(puzzle);
    }
})

console.log("Do something Else")

const countryCode = "US"
getCountry(countryCode,(error, country) =>{
    if(error){
        console.log(`Error: ${error}`)
    } else {
        console.log(country.name);
    }
})