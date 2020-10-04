

let convertFarenheit = function (farenheit) {
    let celsius = ((farenheit - 32)  * 5) / 9
    if (celsius <= 0) {
        let itIsFreezing = true
    }
    return celsius
}

let conversion = convertFarenheit(95)
console.log(conversion)


// Template strings use back ticks
let name = "James"
console.log(`Hello, My name is ${name}`)