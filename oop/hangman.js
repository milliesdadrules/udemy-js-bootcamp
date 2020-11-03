const Hangman = function (word,guesses) {
    this.word = word,
    this.guesses = guesses
}

const game = new Hangman("Cat",5)
console.log(game);

const game2 = new Hangman("James Bond",9)
console.log(game2);