// callback
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, 'This time is the data');
    }, 2000)
}

getDataCallback((err, data) => {
    if(err){

    } else {
        console.log(data)
    }
})

// promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve("This is the promise data")
        reject("This is my promise error")
    }, 2000)
})

myPromise.then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
})