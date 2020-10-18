// DOM - Document Object Model
// JavaScript "document" object used

// Query and remove
// const p = document.querySelector("p")
// p.remove()

// query and remove all
const ps = document.querySelectorAll("p")

ps.forEach(function(p){
    p.textContent = "***********"
    // console.log(p.textContent)
    // p.remove()
})