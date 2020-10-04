// isValidPassword

// length > 8 and doesn't contain the word "password"

//let myPass = "AbcPassword1"

//console.log(myPass.includes("Password"))
let isValidPassword = function(password) {

    return password.length > 8 && !password.toLowerCase().includes("password")
}

console.log(isValidPassword("Milliemacnjess1"))
console.log(isValidPassword("james1"))
console.log(isValidPassword("AbcPassword1"))