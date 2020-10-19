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

// create new array filtered on completed value being false (length used to count outstanding tasks)
const incompleteTodos = todos.filter(function(todo){
    return !todo.completed
})

// 
const summaryIncomplete = document.createElement('h2')
summaryIncomplete.textContent = `You have ${incompleteTodos.length} todo's left`
document.querySelector('#todo-summary').appendChild(summaryIncomplete)


// do a forEach on array and conditionally on show incomplete tasks
todos.forEach(function(task){
    if(!task.completed){
        const newTodo = document.createElement('p')
        newTodo.textContent = task.text
        document.querySelector('#list-todos').appendChild(newTodo)
    }
})

// Listen for new todo creation
document.querySelector("#add-todo").addEventListener("click", function(e){
    console.log("Place holder to add new todo")
})

// Listen for todo text change
document.querySelector("#new-todo").addEventListener("input", function(e){
    console.log(e.target.value)
})




// const paragraphs = document.querySelectorAll("p")
// paragraphs.forEach(function(paragraph){
//     if(paragraph.textContent.includes("the")){
//         paragraph.remove()
//     }

// })