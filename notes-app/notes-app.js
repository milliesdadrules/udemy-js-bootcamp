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

document.querySelector("#create-note").addEventListener("click",function(e){
    e.target.textContent = "Text changed"
})

document.querySelector('#remove-all').addEventListener("click", function(e){
    document.querySelectorAll(".note").forEach(function(note){
        note.remove()
    })
})
