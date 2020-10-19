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

// filter object to hold search box content on change
const filters = {
    searchText: ""
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
        const showNote = document.createElement('p')
        showNote.textContent = note.title
        document.querySelector("#notes").appendChild(showNote)
    })
}

// Initally renter the collection of notes with empty filer
renderNotes(notes, filters)
document.querySelector("#create-note").addEventListener("click",function(e){
    e.target.textContent = "Text changed"
})

// chech search-text box for input
document.querySelector("#search-text").addEventListener("input", function(e){
    // console.log(e.target.value)
    // update filters object, seatchText with inout box value
    filters.searchText = e.target.value
    // call the renderNotes function after each input to search notes
    renderNotes(notes, filters)
})

document.querySelector("#for-fun").addEventListener("change", function(e){
    console.log(e.target.checked)
})