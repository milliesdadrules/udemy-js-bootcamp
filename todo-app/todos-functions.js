// Read todos from localStorage
const getTodos = () =>{
    const todosJSON = localStorage.getItem("todos")
     return todosJSON !== null ? JSON.parse(todosJSON) : []
}

const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    if(todo !== undefined){
        todo.completed = !todo.completed
    }
}

// Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem("todos",JSON.stringify(todos))
}

const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id == id)
    if(todoIndex > -1){
        todos.splice(todoIndex,1)
    }
}

const renderTodos = (todos,todoFilter) => {
    const  filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(todoFilter.searchText.toLowerCase())
        const hideCompletedMatch = !todoFilter.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    document.querySelector('#todo-summary').innerHTML = ""
    document.querySelector('#todo-summary').appendChild(generateSummaryDOM(incompleteTodos))
    document.querySelector("#list-todos").innerHTML = ""

    filteredTodos.forEach((todo) => {
        document.querySelector("#list-todos").appendChild(generateTodoDOM(todo))
    })
}

const generateTodoDOM = (todo) => {
    const listTodos = document.createElement("div")
    const checkTodo = document.createElement("input")
    checkTodo.setAttribute("type","checkbox")
    checkTodo.checked = todo.completed

    checkTodo.addEventListener("change",() => {
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
    delButton.addEventListener("click", () => {
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

const generateSummaryDOM = (incompleteTodos) => {
    const summaryIncomplete = document.createElement('h2')
    summaryIncomplete.textContent = `You have ${incompleteTodos.length} todo's left`
    return summaryIncomplete
}