"use strict"
const todos = getTodos()


// Object to hold search box input
const todoFilter = {
    searchText: "",
    hideCompleted: false

}

renderTodos(todos,todoFilter)

document.querySelector("#search-todos").addEventListener("input", (e) => {
    todoFilter.searchText = e.target.value
    renderTodos(todos,todoFilter)
})

document.querySelector("#todo-form").addEventListener("submit", (e) => {
    const text = e.target.elements.newTodo.value.trim()
    e.preventDefault()
    if(text.trim().length > 0){
        todos.push({
            id: uuidv4(),
            text: text,
            completed: false
        })
        saveTodos(todos)
        renderTodos(todos, todoFilter)
        e.target.elements.newTodo.value= ""
    }
})

document.querySelector("#hide-complete").addEventListener("change", (e) => {
     todoFilter.hideCompleted = e.target.checked
     renderTodos(todos,todoFilter)
})



