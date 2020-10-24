const noteID = location.hash.substring(1)
const notes = getSavedNotes()

const note = notes.find(function(note){
    return note.id === noteID
})

if(note === undefined){
    location.assign("/index.html")
}