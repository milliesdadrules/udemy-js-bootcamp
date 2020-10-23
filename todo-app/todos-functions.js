// Read todos from localStorage
const getTodos = function(){
    const todosJSON = localStorage.getItem("todos")
    if(todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }

}

const toggleTodo = function(id){
    const todo = todos.find(function(todo){
        return todo.id === id
    })
    if(todo !== undefined){
        todo.completed = !todo.completed
    }
}

// Save todos to localStorage
const saveTodos = function(todos){
    localStorage.setItem("todos",JSON.stringify(todos))
}

const removeTodo = function(id){
    const todoIndex = todos.findIndex(function(todo){
        
        return todo.id == id
    })
    if(todoIndex > -1){
        todos.splice(todoIndex,1)
    }
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
    const listTodos = document.createElement("div")
    const checkTodo = document.createElement("input")
    checkTodo.setAttribute("type","checkbox")
    checkTodo.checked = todo.completed

    checkTodo.addEventListener("change",function(){
        toggleTodo(todo.id)
        // if(todo.completed){
        //     todo.completed = false
        // } else {
        //     todo.completed = true
        // }
        saveTodos(todos)
        renderTodos(todos,todoFilter)
    })


    const todoResult = document.createElement("span")
    
    const delButton = document.createElement("button")
    delButton.textContent = "x"
    delButton.addEventListener("click", function(){
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos,todoFilter)
    })

    listTodos.appendChild(checkTodo)
    todoResult.textContent = todo.text
    listTodos.appendChild(todoResult)
    listTodos.appendChild(delButton)
    return listTodos
}

const generateSummaryDOM = function(incompleteTodos){
    const summaryIncomplete = document.createElement('h2')
    summaryIncomplete.textContent = `You have ${incompleteTodos.length} todo's left`
    return summaryIncomplete
}