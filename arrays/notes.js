// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const notes = ["Note 1","Note 2","Note 3"]

// //  Removes the first element from an array and returns it
// console.log(notes.pop())

// // Removes the first element from an array and returns it
// notes.shift()

// // Inserts new elements at the start of an array.
// notes.unshift("My new first Note")

// // Appends new elements to an array, and returns the new length of the array.
// notes.push("Collect shopping")

// // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// // Array<string>.splice(start: number, deleteCount?: number): string[] (+1 overload)
// notes.splice(1,0,"Yes Son!!!")


// notes[0] = "This is now the new Note 1"

notes.forEach(function (stuff, num) {
    console.log(`${num} - ${stuff}`)
})


console.log(notes.length)
console.log(notes)

// for (let index = 0; index <= 2; index++) {
//     console.log(`Counting......${index}`) 
// }

// for (let index = 0; index < notes.length; index++) {
//     console.log(`Note: ${notes[index]}`) 
// }

for (let index = notes.length; index > 0; index--) {
    console.log(`Note ${index -1}: ${notes[index -1]}`) 
}