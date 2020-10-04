let add = function (a, b, c=5) {
    return a + b + c
}

let result = add(10, 1, 10)
console.log(result)

//Default

let getScoreText = function (name = "Anonymous", score=0) {
    return "Name: " + name + "\n" + "Score: " + score
}

let scoreText = getScoreText("James", 99)
console.log(scoreText)


// Challeng

function calculateTip(total, tipPercent = 20) {
    let totalTip = (total / 100) * tipPercent
    return `Total bill: ${total}\nPercent Tipping: ${tipPercent}\nTip cost: ${totalTip}`
}

let bill = calculateTip(150, 50)
console.log(bill)