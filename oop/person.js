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

class Student extends Person {
    constructor(firstName, lastName, age, grade,likes){
        super(firstName,lastName,age,likes)
        this.grade = grade
    }
    getBio(){
        const status = this.grade >= 70 ? "passing" : "failing"
        return `${this.firstName} is ${status} the class`
    }
    updateGrade(change){
       return this.grade += change
    }
}

const james = new Student("James","McNeil",47,70,["Coding","Running"])
console.log(james.getBio())
console.log(james.updateGrade(-25))
console.log(james.getBio())



class Employee extends Person {
    constructor(firstName,lastName,age,position, likes){
        super(firstName,lastName,age,likes)
        this.position = position
    }
    getBio(){
        return `${this.firstName} ${this.lastName} is a ${this.position}.`
    }
    getYearsLeft(){
        return 65 - this.age
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

// const me = new Employee("James","McNeil",47,"Coder" ,["Coding","Piano"])
// me.setName("Jess McNeil")
// console.log(me.getBio());
// console.log(me.getYearsLeft());

// const meToo = new Person("Millie","McNeil",11,["Make Up","Gaming"])
// console.log(meToo.getBio());