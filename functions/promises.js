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
const getDataPromise = (n) => new Promise((resolve, reject) => {
        setTimeout(() => {
            if(n){
                resolve(`This is ${n}`)
            } else {
            reject("This is my promise error")
            }
        }, 2000)
    })
    
const myPromise = getDataPromise()
myPromise.then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
})