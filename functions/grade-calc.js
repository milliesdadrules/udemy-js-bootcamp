// studentScore, possibleScore
let grades = function(studentScore, possibleScore){
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

console.log(grades(10,20))