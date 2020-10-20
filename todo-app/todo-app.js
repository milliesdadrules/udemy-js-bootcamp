let todos = []


const todosJSON = localStorage.getItem("todos")

if(todosJSON !== null) {
    todos = JSON.parse(todosJSON)
} 


// Object to hold search box input
const todoFilter = {
    searchText: "",
    hideCompleted: false

}

 
// Function to filter todos on search term
const renderTodos = function(todos,todoFilter){
    const  filteredTodos = todos.filter(function(todo){
        const searchTextMatch = todo.text.toLowerCase().includes(todoFilter.searchText.toLowerCase())
        const hideCompletedMatch = !todoFilter.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    // filteredTodos = filteredTodos.filter(function(todo){
    //     return !todoFilter.hideCompleted || !todo.completed
    //     // if (todoFilter.hideCompleted){
    //     //     return !todo.completed
    //     // } else {
    //     //     return true
    //     // }
    // })
    // create new array filtered on completed value being false (length used to count outstanding tasks)
    const incompleteTodos = filteredTodos.filter(function(todo){
        return !todo.completed
    })
    document.querySelector('#todo-summary').innerHTML = ""
    // Display summary of filtered outstanding tasks
    const summaryIncomplete = document.createElement('h2')
    summaryIncomplete.textContent = `You have ${incompleteTodos.length} todo's left`
    document.querySelector('#todo-summary').appendChild(summaryIncomplete)

    // clear the div #list-todos

    document.querySelector("#list-todos").innerHTML = ""

    // loop search filtered array of todos display in div #list-todos
    filteredTodos.forEach(function(todo){
        const todoResult = document.createElement("p")
        todoResult.textContent = todo.text
        document.querySelector("#list-todos").appendChild(todoResult)
    })

}
renderTodos(todos,todoFilter)

document.querySelector("#search-todos").addEventListener("input", function(e){
    todoFilter.searchText = e.target.value
    renderTodos(todos,todoFilter)
})

document.querySelector("#todo-form").addEventListener("submit", function(e){
    e.preventDefault()
    todos.push({
        text: e.target.elements.newTodo.value,
        completed: false
    })
    localStorage.setItem("todos",JSON.stringify(todos))
    renderTodos(todos, todoFilter)
    e.target.elements.newTodo.value= ""
})

document.querySelector("#hide-complete").addEventListener("change", function(e){
     todoFilter.hideCompleted = e.target.checked
     renderTodos(todos,todoFilter)
})



