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

const deleteTodo = function(list, text){ // Create function that takes in arguements of array value (list) and query value (text)
    const index = list.findIndex(function(list){ // create call back function to find the index where list contains search text
        return list.text.toLowerCase() === text.toLowerCase()  // converts both contents and search to lowercase and returns index value
    }) 
    if (index > -1){ // if index value -1 then nothing
        list.splice(index,1) // use splice to remove item from array. splice(starting point, number of items to remove)
    }
    
}
console.log(todos)


// console.log(getThingsTodo(todos))


console.log(deleteTodo(todos, "make dinner"))
console.log(todos)