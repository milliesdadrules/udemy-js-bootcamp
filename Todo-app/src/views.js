import { getTodos, toggleTodo, removeTodo } from './todos'
import { getFilters } from './filters'

const renderTodos = () => {
    const todoList = document.querySelector("#list-todos")
    const todoFilter = getFilters()
    const  filteredTodos = getTodos().filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(todoFilter.searchText.toLowerCase())
        const hideCompletedMatch = !todoFilter.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    document.querySelector('#todo-summary').innerHTML = ""
    document.querySelector('#todo-summary').appendChild(generateSummaryDOM(incompleteTodos))
    document.querySelector("#list-todos").innerHTML = ""

    if(filteredTodos.length >= 1){
        filteredTodos.forEach((todo) => {
            document.querySelector("#list-todos").appendChild(generateTodoDOM(todo))
        })
    } else {
        const emptyMessage = document.createElement("p")
        emptyMessage.classList.add("empty-message")
        emptyMessage.textContent = "No to-do's to show"
        document.querySelector("#list-todos").appendChild(emptyMessage)
    }

}

const generateTodoDOM = (todo) => {
    const listTodos = document.createElement("label")
    const containerEl = document.createElement("div")
    const checkTodo = document.createElement("input")
    const todoResult = document.createElement("span")
    const delButton = document.createElement("button")

    // Setup Checkbox
    checkTodo.setAttribute("type","checkbox")
    checkTodo.checked = todo.completed
    containerEl.appendChild(checkTodo)
    checkTodo.addEventListener("change",() => {
        toggleTodo(todo.id)
        renderTodos()
    })

    // setup todo text
    todoResult.textContent = todo.text
    containerEl.appendChild(todoResult)

    // setup the remove button
    delButton.textContent = "remove"
    delButton.classList.add("button","button--text")

    // setup container
    listTodos.classList.add("list-item")
    containerEl.classList.add("list-item__container")
    listTodos.appendChild(containerEl)

    listTodos.appendChild(delButton)
    delButton.addEventListener("click", () => {
        removeTodo(todo.id)
        renderTodos()
    })

    return listTodos
}

const generateSummaryDOM = (incompleteTodos) => {
    const summaryIncomplete = document.createElement('h2')
    const todos = incompleteTodos.length !== 1 ? "s" : ""
    summaryIncomplete.classList.add("list-title")
    summaryIncomplete.textContent = `You have ${incompleteTodos.length} todo${todos} left`
    return summaryIncomplete
}

export { renderTodos, generateTodoDOM, generateSummaryDOM}