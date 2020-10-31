const square =  (num) => num * num

const squareLong =  (num) => {
    return num * num
}

console.log(square(10));

const people = [{
    name: "James",
    age: 47
},{
    name:"Jess",
    age: 8
},{
    name: "Millie",
    age: 11
}]

// const under30Long = people.filter(function(person){
//     return person.age < 30
// })

const under30 = people.filter((person) => person.age < 30)

console.log(under30);

const getAge = people.find((person) => person.age === 11)
console.log(getAge.name);