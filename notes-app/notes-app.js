let notes = [] 

// filter object to hold search box content on change
const filters = {
    searchText: ""
}

// Check for existing saved data
const notesJSON = localStorage.getItem("notes")
if(notesJSON !== null){
    notes = JSON.parse(notesJSON)
    console.log("LS NULL")
}


//console.log(userJSON)
// function to filter notes array with includes from filters object.seatchText value
const renderNotes = function(notes, filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    // delete div #notes contents when funcation is called
    document.querySelector("#notes").innerHTML = ""

    // filter filteredNotes object and append to div #notes 
    filteredNotes.forEach(function(note){
        const showNote = document.createElement('p')
        if(note.title.length > 0){
            showNote.textContent = note.title
        }else {
            showNote.textContent = "Unnamed note"
        }
        document.querySelector("#notes").appendChild(showNote)
    })
}

// Initally renter the collection of notes with empty filer
renderNotes(notes, filters)
document.querySelector("#create-note").addEventListener("click",function(e){
    notes.push({
        title: "",
        body: ""
    })
    localStorage.setItem("notes", JSON.stringify(notes))
    renderNotes(notes, filters)
})

// chech search-text box for input
document.querySelector("#search-text").addEventListener("input", function(e){
    // console.log(e.target.value)
    // update filters object, seatchText with inout box value
    filters.searchText = e.target.value
    // call the renderNotes function after each input to search notes
    renderNotes(notes, filters)
})

document.querySelector("#filter-by").addEventListener("change",function(e){
    console.log(e.target.value)
})