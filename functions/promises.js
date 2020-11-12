// // callback
// const getDataCallback = (callback) => {
//     setTimeout(() => {
//         callback(undefined, 'This time is the data');
//     }, 2000)
// }

// getDataCallback((err, data) => {
//     if(err){

//     } else {
//         console.log(data)
//     }
// })

// promise
const getDataPromise = (num) => new Promise((resolve, reject) => {
        setTimeout(() => {
            typeof num === "number" ? resolve(num * 2) : reject("num must be a number")
        }, 2000)
    })
    
 getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) =>{
        console.log(`This is data: ${data}`);
    }, (err) => {
        console.log(err);
    })
    },(err)=>{
        console.log(err);
 })
 
getDataPromise("10").then((data) => {
    return getDataPromise(data)
}).then((data)=> {
    console.log(`Chain data: ${data}`);
}).catch((err) => {
    console.log(err);
})

// const myPromise = getDataPromise(2)
// myPromise.then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// })