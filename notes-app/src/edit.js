import { initializeEditPage, getLastEdited } from './views'
import { updateNote, removeNote } from './notes'
const titleElement = document.querySelector("#note-title")
const bodyElement = document.querySelector("#note-body")
const removeElement = document.querySelector("#remove-note")
const editedElement = document.querySelector("#last-edit")
const noteID = location.hash.substring(1)

initializeEditPage(noteID)

titleElement.addEventListener("input", (e) => {
    const note = updateNote(noteID,{
        title: e.target.value
    })
    editedElement.textContent = getLastEdited(note)
})

bodyElement.addEventListener("input", (e) => {
    const note = updateNote(noteID,{
        body: e.target.value
    })
    editedElement.textContent = getLastEdited(note)
})

removeElement.addEventListener("click", (e) => {
    removeNote(noteID)
    location.assign("/index.html")
})

window.addEventListener("storage", (e) => {
    if(e.key === 'notes'){
        initializeEditPage(noteID)
    }
})

