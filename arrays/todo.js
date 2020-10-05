const todos = ["Tidy Room", "practice Piano","Hour of Code","Make Dinner","Clean Fish Tank"]

// Delete 3rd item
todos.splice(2,1)
console.log(todos)

// Add new item onto the end
todos.push("Get fish food")
console.log(todos)

// remove first item from list
todos.splice(0,1)
console.log(todos)


console.log(`You have ${todos.length} todos still to be completed.`)
console.log(todos)