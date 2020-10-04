// let num = 103.941

// console.log(num.toFixed(2))

// console.log(Math.round(num)) // round up
// console.log(Math.floor(num)) // round down
// console.log(Math.ceil(num)) // force to round down  

// let randomNum = Math.random(10)
// console.log(randomNum)

// function getRandomInt(min, max){
//     return Math.floor(Math.random(min) * Math.floor(max - min + 1))
// }

let min = 10
let max = 20
let randNum = Math.floor(Math.random(min) * Math.floor(max - min + 1) + min)

console.log(randNum)