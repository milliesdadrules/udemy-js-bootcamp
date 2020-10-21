// Read existing notes from localStorage
const getSavedNotes = function(){
    const notesJSON = localStorage.getItem("notes")
    if(notesJSON !== null){
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}


// Generate the DOM structure
const generateNoteDOM = function(note){
    const showNote = document.createElement('p')
    if(note.title.length > 0){
        showNote.textContent = note.title
    }else {
        showNote.textContent = "Unnamed note"
    }
    return showNote
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