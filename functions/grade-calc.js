// studentScore, possibleScore
let grades = function(studentScore, possibleScore){
    if(typeof studentScore !== "number" || typeof possibleScore !== "number"){
        
        throw Error("studentScore and possibleScore should be typeof number")
    }

    let percent = (studentScore / possibleScore) * 100
    let grade
    if (percent >= 90 && percent <=100) {
        grade = "A"        
    } else if (percent >= 80) {
        grade = "B"
    } else if (percent >= 70) {
        grade = "C"
    } else if (percent >= 60) {
        grade = "D"
    }else {
        grade = "F"
    }
    return `You scored ${studentScore} out of ${possibleScore}.\n${percent}% is a grade of ${grade}.`

} 


try {
    console.log(grades(15,"20"))
} catch (e) {
    console.log("The catch block is running")
    console.log(e.message)
}
