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

// 
const todoFilter = {
    todoSearch: ""
}

const renderTodos = function(todos,todoFilter){
    const filteredTodos = todos.filter(function(todo){
        return todo.text.toLowerCase().includes(todoFilter.todoSearch.toLowerCase())
    })
    console.log(filteredTodos)
    document.querySelector("#list-todos").innerHTML = ""

    filteredTodos.forEach(function(todo){
        const todoResult = document.createElement("p")
        todoResult.textContent = todo.text
        document.querySelector("#list-todos").appendChild(todoResult)
    })

}
renderTodos(todos,todoFilter)

const searchTodos = document.querySelector("#search-todos").addEventListener("input", function(e){
    todoFilter.todoSearch = e.target.value
    // console.log(todoFilter.todoSearch)
    renderTodos(todos,todoFilter)
})
// create new array filtered on completed value being false (length used to count outstanding tasks)
const incompleteTodos = todos.filter(function(todo){
    return !todo.completed
})

// Display summary of outstanding tasks
const summaryIncomplete = document.createElement('h2')
summaryIncomplete.textContent = `You have ${incompleteTodos.length} todo's left`
document.querySelector('#todo-summary').appendChild(summaryIncomplete)


// do a forEach on array and conditionally on show incomplete tasks
// todos.forEach(function(task){
//     if(!task.completed){
//         const newTodo = document.createElement('p')
//         newTodo.textContent = task.text
//         document.querySelector('#list-todos').appendChild(newTodo)
//     }
// })

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