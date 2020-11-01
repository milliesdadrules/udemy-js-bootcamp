// const myAge = 47
// const message = myAge >= 18 ? "You can vote!" : "You cannot vote"
// console.log(message)

const myAge = 20
const showPage = () => {
    console.log("showing the page");
}

const showErrorPage = () => {
    console.log("showing the error page");
}

myAge >= 47 ? showPage() : showErrorPage()