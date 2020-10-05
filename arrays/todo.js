const todos = ["Tidy Room", "practice Piano","Hour of Code","Make Dinner","Clean Fish Tank"]


todos.splice(2,1) // Delete 3rd item
todos.push("Get fish food") // Add new item onto the end
todos.shift() // remove first item from list

console.log(`You have ${todos.length} todos still to be completed.`)

todos.forEach(function (item, index) {
    console.log(`${index + 1}. ${item}`)    
})