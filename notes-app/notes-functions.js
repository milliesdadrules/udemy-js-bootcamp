// Read existing notes from localStorage
const getSavedNotes = function(){
    const notesJSON = localStorage.getItem("notes")
    if(notesJSON !== null){
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}


// Save the notes to local storage
const saveNotes = function(notes){
    localStorage.setItem("notes", JSON.stringify(notes))
}

// Remove a note from the list
const removeNote = function(noteID){
    const noteIndex = notes.findIndex(function(note){
        return note.id == noteID
    })
    if(noteIndex > -1){
        notes.splice(noteIndex, 1)
    }
}

// Generate the DOM structure
const generateNoteDOM = function(note){
    const showNote = document.createElement('div')
    const textEl = document.createElement("a")
    textEl.href = `/edit.html#${note.id}`
    //textEl.i
    
 
    const button = document.createElement("button") 
    // Setup the remove button
    button.textContent = "x"
    showNote.appendChild(button)
    button.addEventListener("click", function(e){
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes,filters)
    })
    // Setup the note title text
    if(note.title.length > 0){
        textEl.textContent = note.title
    }else {
        textEl.textContent = "Unnamed note"
    }

    showNote.appendChild(textEl)
    return showNote
}


// sort you notes by one of three ways
const sortNotes = function(){

}

// function to filter notes array with includes from filters object.seatchText value
const renderNotes = function(notes, filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    // delete div #notes contents when funcation is called
    document.querySelector("#notes").innerHTML = ""

    // filter filteredNotes object and append to div #notes 
    filteredNotes.forEach(function(note){
        const showNote = generateNoteDOM(note)
        document.querySelector("#notes").appendChild(showNote)
    })
}