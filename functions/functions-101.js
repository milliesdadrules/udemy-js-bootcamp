let greetUser = function () {
    console.log("Welcome!!!!")
}

greetUser()


let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
console.log(value)

let convertFarenheit = function (farenheit) {
    let celsius = ((farenheit - 32)  * 5) / 9
    return celsius
}

let conversion = convertFarenheit(95)
console.log(conversion)