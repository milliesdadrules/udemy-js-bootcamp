const account = {
    name: "James McNeil",
    addExpense: function(description, value){  
        this.expenses.push({
            item: description,
            amount: value
        })
    },
    expenses: [],
    getAccountSummary: function(){
        let balance = 0
        this.expenses.forEach(function(expense, index){
            balance = balance + expense.amount
            console.log(balance)
        })
        return `The expenses for ${account.name} is \$${balance} in expenses.`
    }
}

account.addExpense("Rent", 900)
account.addExpense("Food", 100)
account.addExpense("Travel", 350)

console.log(account.getAccountSummary())


console.log(account.expenses)
//account.getAccountSummary()
//console.log(account.getAccountSummary())

// Expenses -> description, amount
// Object Methods
// addExpense (description, ammount)
// getAccountSummary -> total up all expenses (James McNeil has $5000 in expenses)