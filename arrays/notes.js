// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// const notes = ["Note 1","Note 2","Note 3"]

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

// notes.forEach(function (stuff, num) {
//     console.log(`${num + 1} - ${stuff}`)
// })


// console.log(notes.length)
// console.log(notes)

// for (let index = 0; index <= 2; index++) {
//     console.log(`Counting......${index}`) 
// }

// for (let index = 0; index < notes.length; index++) {
//     console.log(`Note: ${notes[index]}`) 
// }

// for (let index = 0; index < notes.length; index++) {
//     console.log(`Note ${index + 1}: ${notes[index]}`) 
// }

const notes = [ {
    title: "My next trip",
    body: "I would like to go to Canada"
}, {
    title: "Habbits to work on",
    body: "Exercise, Eating more healthy"
}, {
    title: "Office Modifications",
    body: "Get a new chair"
}] 


const sortNotes = function(notes){
    notes.sort(function(a, b){  // a and b are used as holders of objects to compare an sort in order of them to be returned
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1 // a to return first return value ="-1"
        } else if (b.title.toLowerCase() < a.title.toLowerCase()){
            return 1
        } else {
            return 0
        }
        
        
        
    })
}

//sortNotes(notes)
console.log(notes)


const findNote = function(notes, noteTitle){
    return notes.find(function(note, index){
            return note.title.toLowerCase() === noteTitle.toLowerCase()
    })    
}

const findNotes = function(notes, query){ // function takes array of objects "notes" and search term "query"
    return notes.filter(function(note, index){ //callback function use filter method on notes input via findNotes function (index, would return the array index of the element)
        const isTitleMatch = note.title.toLocaleLowerCase().includes(query.toLowerCase()) // creates a variable to check if the title contains search query
        const isBodyMatch = note.body.toLocaleLowerCase().includes(query.toLowerCase()) // creates a variable to check if the body contains search query
        return isTitleMatch || isBodyMatch // returns if title or body return true
    })
}


// console.log(findNotes(notes, "office"))
// const findNote = function(notes, noteTitle){
//     const index = notes.findIndex(function(note, index){
//             return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     if (index != -1){
//         return notes[index]
//     } else {
//         return "Nothing found"
//     }
// }

// const note = findNote(notes, "office Modifications")
// console.log(note)
// // console.log(notes.length)
// // console.log(notes)

// const index = notes.findIndex(function(note, index){
//     console.log(note)
//     return note.title === "Habbits to work on"
// })

// console.log(index)