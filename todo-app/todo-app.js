const todos = [{
    text: "Tidy Room",
    completed: false
}, {
    text: "practice Piano",
    completed: false
}, {
    text: "Hour of Code",
    completed: false
}, {
    text: "Make Dinner",
    completed: true
}, {
    text: "Clean Fish Tank",
    completed: true
}]

const incompleteTodos = todos.filter(function(todo){
    return !todo.completed
})

// let outstandingTasks = 0
// todos.forEach(function(task){
//     if(!task.completed){
//         outstandingTasks = outstandingTasks + 1
//     }
// })
const summaryIncomplete = document.createElement('h2')
summaryIncomplete.textContent = `You have ${incompleteTodos.length} todo's left`
document.querySelector('body').appendChild(summaryIncomplete)

todos.forEach(function(task){
    if(!task.completed){
        const newTodo = document.createElement('p')
        newTodo.textContent = task.text
        document.querySelector('body').appendChild(newTodo)
    }
})

document.querySelector("button").addEventListener("click", function(e){
    console.log("Place holder to add new todo")
})





// const paragraphs = document.querySelectorAll("p")
// paragraphs.forEach(function(paragraph){
//     if(paragraph.textContent.includes("the")){
//         paragraph.remove()
//     }

// })