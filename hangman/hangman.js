const Hangman = function (word,remainingGuesses) {
    this.word = word.toLowerCase().split("")
    this.lettersGuessed = []
    this.remainingGuesses = remainingGuesses
    this.status = "Playing"
}

Hangman.prototype.getGameState = function(){

    // This creates a new array of letters from the "word" that haven't been guessed
    // const lettersUnguessed = this.word.filter((letter) => {
    //     return !this.lettersGuessed.includes(letter)
    // })
    // console.log(lettersUnguessed);
    // const finished = lettersUnguessed.length === 0
    // let finished = true

    // this.word.forEach((letter) => {
    //     //console.log(`Word Array letter: ${letter}`);
    //     console.log(`${this.lettersGuessed} includes ${letter} = ${this.lettersGuessed.includes(letter)}`);
    //     if(this.lettersGuessed.includes(letter) || letter === " "){
    //         console.log(`found : ${finished}`);
    //     } else {
    //         console.log(`setting to false`);
    //         finished = false
    //     }
    // })

    const finished = this.word.every((letter) => {
        console.log(`${this.lettersGuessed} check for letter ${letter} = ${this.lettersGuessed.includes(letter)}`);
        return this.lettersGuessed.includes(letter) || letter === " "
    })

    console.log(finished)
    if(!this.remainingGuesses){
        this.status = "Failed"
    } else if (finished){
        this.status = "Finished"
    } else {
        this.status = "Playing"
    }

}

Hangman.prototype.makeGuess = function(guess){
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

