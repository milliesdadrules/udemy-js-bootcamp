let mybook = {
    title: "1984",
    Author: "George Orwell",
    pageCount: 394
}
let otherbook = {
    title: "The Gruffalo",
    Author: "Jess McNeil",
    pageCount: 750
}

let getSummary = function(book){
    return {
        summary: `${book.title} by ${book.Author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}

let myBookSummary = getSummary(mybook)
let otherBookSummary = getSummary(otherbook)
console.log(myBookSummary.pageCountSummary)
console.log(otherBookSummary.summary)

let temp = function(farenheit){
    return {
        tempFarenheit: farenheit,
        tempCelsius: celsius = ((farenheit - 32)  * 5) / 9,
        tempKelvin: kelvin = celsius + 273.15
    }

}

let getTemp = temp(50)
console.log(getTemp)

// let farenheit = 50
// let celsius = ((farenheit - 32)  * 5) / 9
// let kelvin = celsius + 273.15

// console.log(farenheit + " temp in celsius: " + celsius)
// console.log(celsius + " temp in kelvin: " + kelvin)