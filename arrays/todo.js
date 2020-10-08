const todos = [{
    text:"Tidy Room",
    completed: true
}, {
    text: "practice Piano",
    completed: true
}, {
    text: "Hour of Code",
    completed: false
}, {
    text: "Make Dinner",
    completed: true
}, {
    text: "Clean Fish Tank",
    completed: false
}]

const deleteTodo = function(list, text){
    const index = list.findIndex(function(list){
        return list.text.toLowerCase() === text.toLowerCase()
    }) 
    if (index > -1){
        list.splice(index,1)
    }
    
}

console.log(deleteTodo(todos, "&&&make dinner"))
console.log(todos)