const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement(){
            count--
        },
        get(){
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get());

const createTipper = (tipPercent) => {
    return (bill) => {
        return (tipPercent/100) * bill
    }
}

const tip15 = createTipper(15)
const tip20 = createTipper(20)
const tip50 = createTipper(50)
console.log(tip15(25))
console.log(tip20(25))
console.log(tip50(25))