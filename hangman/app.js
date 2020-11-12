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
},(err) =>{
    console.log(err);
})

// fetch("http://puzzle.mead.io/puzzle?wordCount=4",{}).then((reponse) => {
//     if(reponse.status === 200){
//         return reponse.json()
//     } else {
//         throw Error("Can get puzzle")
//     }
// }).then((data) => {
//     console.log(data.puzzle);
// }).catch((error) => {
//     console.log(error);
// })