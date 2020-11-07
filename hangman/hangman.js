const Hangman = function (word,remainingGuesses) {
    this.word = word.toLowerCase().split("")
    this.lettersGuessed = []
    this.remainingGuesses = remainingGuesses
}

Hangman.prototype.makeGuess = function(guess){
    guess = guess.toLowerCase()
    const isUnique = !this.lettersGuessed.includes(guess)
    const isBadGuess =  !this.word.includes(guess)
    if(isUnique){
        this.lettersGuessed.push(guess)
    }
    if(isUnique && isBadGuess){
        this.remainingGuesses--
    }
}

Hangman.prototype.getPuzzle = function(){
    let puzzle = ""
    this.word.forEach((letter) => {

        if(this.lettersGuessed.includes(letter) || letter === " "){
            puzzle += letter
        } else {
            puzzle += "*"
        }

    })
    return puzzle
}

// Hangman.prototype.generateDOM = function(){
//     const hangmanBoard = document.querySelector("#hangman-board")
//     const word = document.createElement("span")
//     const space = document.createElement("p")
//     const guesses = document.createElement("span")
//     hangmanBoard.innerHTML = ""
//     word.textContent = this.getPuzzle()
//     guesses.textContent = `You have ${this.remainingGuesses} remaining.`
//     hangmanBoard.appendChild(word)
//     hangmanBoard.appendChild(space)
//     hangmanBoard.appendChild(guesses)
// }

