const Person = function(firstName,lastName, age){
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age
}

const me = new Person("James","McNeil",47)


console.log(me);

const meToo = new Person("Millie","McNeil",11)
console.log(meToo);