import { createNote } from './notes.js'
import { setFilters} from './filters'
import {renderNotes} from './views'

// Initally renter the collection of notes with empty filter
renderNotes()
document.querySelector("#create-note").addEventListener("click",(e) => {
    const noteID = createNote()
    location.assign(`/edit.html#${noteID}`)
})

// chech search-text box for input
document.querySelector("#search-text").addEventListener("input", (e) => {

    setFilters({
        searchTest: e.target.value
    })
    renderNotes()
})

document.querySelector("#filter-by").addEventListener("change",(e) => {
    setFilters({
        sortBy: e.target.value
    })
    renderNotes()
})

window.addEventListener("storage",(e) => {
    if(e.key === 'notes'){
        renderNotes()
    }
})
