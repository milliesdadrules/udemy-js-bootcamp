const todos = ["Tidy Room", "practice Piano","Hour of Code","Make Dinner","Clean Fish Tank"]

// Delete 3rd item
todos.splice(2,1)

// Add new item onto the end
todos.push("Get fish food")

// remove first item from list
todos.splice(0,1)

console.log(`You have ${todos.length} todos still to be completed.`)
