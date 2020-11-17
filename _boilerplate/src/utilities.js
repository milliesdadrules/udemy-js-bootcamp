// Named export (as many as required)
// Default export (only one)
const add = (a, b) => a + b
const name = "Mike"
const square = (x) => x * x
export {add, name, square as default}