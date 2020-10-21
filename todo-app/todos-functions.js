// Read todos from localStorage
const getTodos = function(){
    const todosJSON = localStorage.getItem("todos")
    if(todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }

}

// Save todos to localStorage
const saveTodos = function(todos){
    localStorage.setItem("todos",JSON.stringify(todos))
}

const renderTodos = function(todos,todoFilter){
    const  filteredTodos = todos.filter(function(todo){
        const searchTextMatch = todo.text.toLowerCase().includes(todoFilter.searchText.toLowerCase())
        const hideCompletedMatch = !todoFilter.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function(todo){
        return !todo.completed
    })

    document.querySelector('#todo-summary').innerHTML = ""
    document.querySelector('#todo-summary').appendChild(generateSummaryDOM(incompleteTodos))
    document.querySelector("#list-todos").innerHTML = ""

    filteredTodos.forEach(function(todo){
        document.querySelector("#list-todos").appendChild(generateTodoDOM(todo))
    })
}

const generateTodoDOM = function(todo){
    const todoResult = document.createElement("p")
    todoResult.textContent = todo.text
    return todoResult
}

const generateSummaryDOM = function(incompleteTodos){
    const summaryIncomplete = document.createElement('h2')
    summaryIncomplete.textContent = `You have ${incompleteTodos.length} todo's left`
    return summaryIncomplete
}