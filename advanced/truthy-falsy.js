const products = ['some item']
const product = products[0]

// Truthy - Values that resolve to true in a boolean context
// Falsy = Values that resolve to false in a boolean context

if(product !== undefined){
    console.log("product found!");
} else {
    console.log("Product not found");
}