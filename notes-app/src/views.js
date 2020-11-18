import moment from 'moment'
import { getFilters } from './filters'
import { sortNotes, getNotes } from './notes'
// Generate the DOM structure
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('a')
    const textEl = document.createElement("a")
    const statusEl = document.createElement("p")



    // Setup the note title text
    if(note.title.length > 0){
        textEl.textContent = note.title
    }else {
        textEl.textContent = "Unnamed note"
    }
    textEl.classList.add("list-item__title")
    noteEl.appendChild(textEl)

    // Setup the link
    noteEl.href = `/edit.html#${note.id}` 
    noteEl.classList.add("list-item")

    statusEl.textContent = getLastEdited(note.updatedAt)
    statusEl.classList.add("list-item__subtitle")
    noteEl.appendChild(statusEl)


    return noteEl
}

const renderNotes = () => {
    const filters = getFilters()
    const notesEl = document.querySelector("#notes")
    const notes = sortNotes(filters.sortBy)

    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    // delete div #notes contents when funcation is called
    notesEl.innerHTML = ""

    if(filteredNotes.length > 0){
        // filter filteredNotes object and append to div #notes 
        filteredNotes.forEach((note) => {
            const showNote = generateNoteDOM(note)
            notesEl.appendChild(showNote)
        })
    } else {
        const emptyMessage = document.createElement("p")
        emptyMessage.textContent = "No notes to display"
        emptyMessage.classList.add("empty-message")
        notesEl.appendChild(emptyMessage)
    }
}

const initializeEditPage = (noteID)=>{
    const titleElement = document.querySelector("#note-title")
    const bodyElement = document.querySelector("#note-body")
    const editedElement = document.querySelector("#last-edit")
    const notes = getNotes()
    const note = notes.find((note) => note.id === noteID)
    
    if(!note){
        location.assign("/index.html")
    }
    
    titleElement.value = note.title
    bodyElement.value = note.body
    editedElement.textContent = `Last updated ${moment(note.updatedAt).fromNow()}`
    
}

const getLastEdited = (note) => `Last updated ${moment(note.updatedAt).fromNow()}`

export { generateNoteDOM, renderNotes, getLastEdited, initializeEditPage }