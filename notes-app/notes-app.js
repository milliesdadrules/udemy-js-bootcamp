const notes = getSavedNotes()

// filter object to hold search box content on change
const filters = {
    searchText: ""
}

//console.log(userJSON)


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