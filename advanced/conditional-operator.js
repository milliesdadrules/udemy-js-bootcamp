// const myAge = 47
// const message = myAge >= 18 ? "You can vote!" : "You cannot vote"
// console.log(message)

const myAge = 47
const showPage = () => {
    return "showing the page"
}

const showErrorPage = () => {
    return "showing the error page"
}

const message = myAge >= 47 ? showPage() : showErrorPage()
console.log(message);