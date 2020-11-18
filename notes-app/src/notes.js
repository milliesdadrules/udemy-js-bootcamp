import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
let notes = []
const timestamp = moment().valueOf()
// Read existing notes from localStorage
const loadNotes = () => {
    const notesJSON = localStorage.getItem("notes")
    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (error) {
        return []
    }
    
}

// Save the notes to local storage
const saveNotes = () => {
    localStorage.setItem("notes", JSON.stringify(notes))
}

// expose notes from module
const getNotes = () => notes

const createNote = () => {
    const noteID = uuidv4()
    notes.push({
        id: noteID,
        title: "",
        body: "",
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes()
    return noteID
}

// Remove a note from the list
const removeNote = (noteID) => {
    const noteIndex = notes.findIndex((note) => note.id == noteID)

    if(noteIndex > -1){
        notes.splice(noteIndex, 1)
        saveNotes()
    }
}

// sort you notes by one of three ways
const sortNotes = (sortBy) => {
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
    } else {
        return notes
    }
}

const updateNote = (id, updates) =>{
    const note = notes.find((note) => note.id === id)

    if(!note){
        return
    }

    if(typeof updates.title === 'string'){
        note.title = updates.title
        note.updatedAt = moment().valueOf()
    }

    if(typeof updates.body === 'string'){
        note.body = updates.body
        note.updatedAt = moment().valueOf()
    }
    saveNotes()
    return note
}

notes = loadNotes()

export { getNotes, createNote, removeNote, sortNotes, updateNote }