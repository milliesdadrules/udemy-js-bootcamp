let notes = getSavedNotes()

// filter object to hold search box content on change
const filters = {
    searchText: ""
}

// Initally renter the collection of notes with empty filter
renderNotes(notes, filters)
document.querySelector("#create-note").addEventListener("click",function(e){
    const noteID = uuidv4()
    notes.push({
        id: noteID,
        title: "",
        body: ""
    })
    saveNotes(notes)
    location.assign(`/edit.html#${noteID}`)
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

window.addEventListener("storage",function(e){
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

const dateOne = new Date("December 18 2020 12:00:00")
const dateTwo = new Date()
const dateOneTimestamp = dateOne.getTime()
const dateTwoTimestamp = dateTwo.getTime()

if(dateOneTimestamp < dateTwoTimestamp){
    console.log(`${dateOne.toString()}`)
} else if (dateTwoTimestamp < dateOneTimestamp){
    console.log(`${dateTwo.toString()}`)
}