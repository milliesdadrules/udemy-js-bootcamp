import { getNotes, createNote, removeNote, sortNotes, updateNote } from './notes.js'
import {getFilters, setFilters} from './filters'
// console.log(getNotes())
// createNote()
//removeNote("3c02a717-02fb-4c85-a32f-63832a6040d0")
// updateNote("5d8c3bf2-c049-40eb-85e9-13784256a0ce",{
//     title: "This is my note title",
//     body: "This is the body of the note"
// })


console.log(getFilters())
setFilters({
    searchText: "Office",
    sortBy: "byCreated"
})
console.log(getFilters())