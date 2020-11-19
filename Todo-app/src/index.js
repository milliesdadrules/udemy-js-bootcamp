import { removeNote } from '../../notes-app/src/notes';
import {getTodos, createTodo, removeTodo, toggleTodo} from './todos'
import { renderTodos} from './views'
import { setFilters } from './filters'
renderTodos()

document.querySelector("#search-todos").addEventListener("input", (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

document.querySelector("#todo-form").addEventListener("submit", (e) => {
    const text = e.target.elements.newTodo.value.trim()
    e.preventDefault()
    if(text.trim().length > 0){
        createTodo(text)
        renderTodos()
        e.target.elements.newTodo.value= ""
    }
})

document.querySelector("#hide-complete").addEventListener("change", (e) => {
     setFilters({
         hideCompleted: e.target.checked
     })
     renderTodos()
})

