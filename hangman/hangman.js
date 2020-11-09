const Hangman = function (word,remainingGuesses) {
    this.word = word.toLowerCase().split("")
    this.answer = word
    this.lettersGuessed = []
    this.remainingGuesses = remainingGuesses
    this.status = "Playing"
}

Hangman.prototype.getGameState = function(){

    const finished = this.word.every((letter) => this.lettersGuessed.includes(letter) || letter === " ")

    if(!this.remainingGuesses){
        this.status = "Failed"
    } else if (finished){
        this.status = "Finished"
    } else {
        this.status = "Playing"
    }
}

Hangman.prototype.makeGuess = function(guess){
    if(this.status === "Playing"){
        guess = guess.toLowerCase()
        const isUnique = !this.lettersGuessed.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        if(isUnique){
            this.lettersGuessed.push(guess)
        }
        if(isUnique && isBadGuess){
            this.remainingGuesses--
        }
        this.getGameState()
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
