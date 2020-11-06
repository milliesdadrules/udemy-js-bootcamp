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
const game = new Hangman("Cat",2)
game.makeGuess("c")
game.makeGuess("t")
game.makeGuess("y")
console.log(game.getPuzzle());
console.log(`You have ${game.remainingGuesses} remaining.`);

const game2 = new Hangman("New Jersey",4)
game2.makeGuess("w")
console.log(game2.getPuzzle());
console.log(`You have ${game2.remainingGuesses} remaining.`);