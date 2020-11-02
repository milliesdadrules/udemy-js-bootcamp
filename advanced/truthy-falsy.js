const products = [{
    name: "Computer Mouse"
}]
const product = products[0]

// Truthy - Values that resolve to true in a boolean context
// Falsy = Values that resolve to false in a boolean context
// Falsy values - false, 0, empty string, null, undefined, NaN

if(product){
    console.log("product found!");
} else {
    console.log("Product not found");
}
console.log(product);