class Person {
    constructor(firstName,lastName, age, likes=[]){
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age
        this.likes = likes
    }
    getBio(){
        let bio = `${this.firstName} is ${this.age}.`
        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
        return bio
    }
    setName(fullName){
        const names = fullName.split(" ")
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

//#region 
/*
const Person = function(firstName,lastName, age, likes=[]){
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age
    this.likes = likes
}


Person.prototype.getBio = function(){
    let bio = `${this.firstName} is ${this.age}.`
    this.likes.forEach((like) => {
        bio += `${this.firstName} likes ${like}.`
    })
    return bio
}

Person.prototype.setName = function(fullName){
    const names = fullName.split(" ")
    this.firstName = names[0]
    this.lastName = names[1]
}
*/
//#endregion

const me = new Person("James","McNeil",47, ["Coding","Piano"])
me.setName("Jess McNeil")
console.log(me.getBio());


const meToo = new Person("Millie","McNeil",11,["Make Up","Gaming"])
console.log(meToo.getBio());