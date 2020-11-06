const Hangman = function (word,remainingGuesses) {
    this.word = word.toLowerCase().split("")
    this.guesses = ["s","l","r","t","o"]
    this.remainingGuesses = remainingGuesses
}

Hangman.prototype.getPuzzle = function(){
    let puzzle = ""
    this.word.forEach((letter) => {

        if(this.guesses.includes(letter) || letter === " "){
            puzzle += letter
        } else {
            puzzle += "*"
        }

    })
    return puzzle
}
const game = new Hangman("Trolls 2",5)
console.log(game.getPuzzle());

// const game2 = new Hangman("James Bond",9)
// console.log(game2);