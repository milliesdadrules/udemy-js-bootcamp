let = isGuestOneVegan = false
let = isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("show full vegan menu")
} else if (isGuestTwoVegan || isGuestOneVegan) {
    console.log("show both meat and vegan menus")
} else {
    console.log("all meat eaters")
}