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

// const deleteTodo = function(list, text){ // Create function that takes in arguements of array value (list) and query value (text)
//     const index = list.findIndex(function(list){ // create call back function to find the index where list contains search text
//         return list.text.toLowerCase() === text.toLowerCase()  // converts both contents and search to lowercase and returns index value
//     }) 
//     if (index > -1){ // if index value -1 then nothing
//         list.splice(index,1) // use splice to remove item from array. splice(starting point, number of items to remove)
//     }
    
// }
// console.log(deleteTodo(todos, "make dinner"))
// console.log(todos)

// const getThingsTodo = function(todos){
//     return todos.filter(function(todoOutstanding,index){
//         return !todoOutstanding.completed
//     })
// }

// console.log(getThingsTodo(todos))

const sortTodos = function(todos){
    todos.sort(function(a,b){
        if(!a.completed && b.completed){
            return -1
        } else if (!b.completed && a.completed){
            return 1
        } else {
            return 0
        }
    })
}
// console.log(todos)
sortTodos(todos)
console.log(todos)
