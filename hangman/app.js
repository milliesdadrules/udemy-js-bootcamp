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

// Making an an HTTP request

// const request = new XMLHttpRequest()

// request.addEventListener("readystatechange",(e) =>{
//     if(e.target.readyState === 4 && e.target.status === 200){
//         const data = JSON.parse(e.target.responseText)
//         console.log(data)
//     } else if (e.target.readyState === 4) {
//         console.log("An error has taken place")
//     }
// })

// request.open("GET","http://puzzle.mead.io/puzzle?wordCount=3")
// request.send()

const countryCode = "GB"
const request = new XMLHttpRequest()
request.addEventListener("readystatechange", (e) => {
    if(e.target.readyState === 4 && e.target.status === 200){
        const data = JSON.parse(e.target.responseText)
        const country = data.find((country) => country.alpha2Code === countryCode)
        console.log(country.name)
    } else if (e.target.readyState === 4){
        console.log("Unable to fetch data");
    }
})
request.open("GET","http://restcountries.eu/rest/v2/all")
request.send()