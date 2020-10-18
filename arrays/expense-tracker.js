const account = {
    name: "James McNeil",
    addExpense: function(description, value){  
        this.expenses.push({
            item: description,
            amount: value
        })
    },
    addIncome: function(description, amount){
        this.income.push({
            description: description,
            amount: amount
        })
    },
    expenses: [],
    income: [],
    getAccountSummary: function(){
        let totalExpenses = 0
        this.expenses.forEach(function(expense){
            totalExpenses = totalExpenses + expense.amount
        })
        let totalIncome = 0
        this.income.forEach(function(sale){
            totalIncome = totalIncome + sale.amount
        })
        const balance = totalIncome - totalExpenses
        return `The expenses for ${account.name} is \$${balance} in expenses. \$${totalIncome} in income. \$${totalExpenses} in expenses.`
    }
}

account.addIncome("Sales",2000)

account.addExpense("Rent", 900)
account.addExpense("Food", 100)

console.log(account.getAccountSummary())


//account.getAccountSummary()
//console.log(account.getAccountSummary())

// Expenses -> description, amount
// Object Methods
// addExpense (description, ammount)
// getAccountSummary -> total up all expenses (James McNeil has $5000 in expenses)