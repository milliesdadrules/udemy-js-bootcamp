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

const filters = {
    searchText: ""
}

const renderNotes = function(notes, filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    console.log(filteredNotes)
}

renderNotes(notes, filters)
document.querySelector("#create-note").addEventListener("click",function(e){
    e.target.textContent = "Text changed"
})

document.querySelector('#remove-all').addEventListener("click", function(e){
    document.querySelectorAll(".note").forEach(function(note){
        note.remove()
    })
})

document.querySelector("#search-text").addEventListener("input", function(e){
    // console.log(e.target.value)
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})