const Person = function(firstName,lastName, age, likes=[]){
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age
    this.likes = likes
}


Person.prototype.getBio = function(){
    return `${this.firstName} is ${this.age}`
}

Person.prototype.setName = function(fullName){
    const names = fullName.split(" ")
    this.firstName = names[0]
    this.lastName = names[1]
}

const me = new Person("James","McNeil",47, ["Coding","Piano"])
me.setName("Jess McNeil")
console.log(me.getBio());


const meToo = new Person("Millie","McNeil",11)
console.log(meToo.getBio());