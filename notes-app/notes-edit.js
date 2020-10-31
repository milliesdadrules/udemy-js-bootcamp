const titleElement = document.querySelector("#note-title")
const bodyElement = document.querySelector("#note-body")
const removeElement = document.querySelector("#remove-note")
const editedElement = document.querySelector("#last-edit")

const noteID = location.hash.substring(1)
let notes = getSavedNotes()



let note = notes.find(function(note){
    return note.id === noteID
})

if(note === undefined){
    location.assign("/index.html")
}

titleElement.value = note.title
bodyElement.value = note.body
editedElement.textContent = `Last updated ${moment(note.updatedAt).fromNow()}`


console.log(note.updatedAt)

titleElement.addEventListener("input", function(e){
    note.title = e.target.value
    editedElement.textContent = getLastEdited(note)
    note.updatedAt = moment().valueOf()
    saveNotes(notes)
})

bodyElement.addEventListener("input", function(e){
    note.body = e.target.value
    editedElement.textContent = getLastEdited(note)
    note.updatedAt = moment().valueOf()
    saveNotes(notes)
})

removeElement.addEventListener("click", function(e){
    removeNote(note.id)
    saveNotes(notes)
    location.assign("/index.html")
})

window.addEventListener("storage", function(e){
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        note = notes.find(function(note){
            return note.id === noteID
        })
        
        if(note === undefined){
            location.assign("/index.html")
        }
        
        titleElement.value = note.title
        bodyElement.value = note.body
        editedElement.textContent = getLastEdited(note)

    }
})

