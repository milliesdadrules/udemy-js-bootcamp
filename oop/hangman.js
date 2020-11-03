const Hangman = function (word,remainingGuesses) {
    this.word = word,
    this.remainingGuesses = remainingGuesses
}

const game = new Hangman("Cat",5)
console.log(game);

const game2 = new Hangman("James Bond",9)
console.log(game2);