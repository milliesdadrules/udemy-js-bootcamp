"use strict"

// Read existing notes from localStorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem("notes")
    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (error) {
        return []
    }
    
}


// Save the notes to local storage
const saveNotes = (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes))
}

// Remove a note from the list
const removeNote = (noteID) => {
    const noteIndex = notes.findIndex((note) => note.id == noteID)

    if(noteIndex > -1){
        notes.splice(noteIndex, 1)
    }
}

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

// sort you notes by one of three ways
const sortNotes = (notes, sortBy) => {
    if(sortBy === "byEdited"){
        return notes.sort((a,b) => {
            if(a.updatedAt > b.updatedAt){
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1    
            } else {
                return 0
            }
        })
    } else if( sortBy === "byCreated"){
        return notes.sort((a,b) => {
            if(a.createdAt > b.createdAt){
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1    
            } else {
                return 0
            }
        })
    } else if (sortBy === "alphabetical"){
        return notes.sort((a,b) => {
            if(a.title.toLowerCase() < b.title.toLowerCase()){
                return -1
            } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
                return 1    
            } else {
                return 0
            }
        })
    }
}

// function to filter notes array with includes from filters object.seatchText value
const renderNotes = (notes, filters) => {
    const notesEl = document.querySelector("#notes")
    notes = sortNotes(notes, filters.sortBy)

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

const getLastEdited = (note) => `Last updated ${moment(note.updatedAt).fromNow()}`
