
const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`,{}).then((myResponse) => {
        if(myResponse.status === 200){
            return myResponse.json()
        } else {
            throw new Error("Oops fetch failed!!!")
        }
    }).then((data) => {
        return data.puzzle
    })
}

const getCountry = (countryCode) => {
    return fetch("http://restcountries.eu/rest/v2/all",{}).then((response) =>{
        if(response.status === 200){
            return response.json()
        } else {
            throw new Error("Error :O")
        }
    }).then((data) => {
        return country = data.find((country) => country.alpha2Code === countryCode)
    })
}

// const getCountry = (countryCode) => new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest()
//     request.addEventListener("readystatechange", (e) => {
//         if(e.target.readyState === 4 && e.target.status === 200){
//             const data = JSON.parse(e.target.responseText)
//             const country = data.find((country) => country.alpha2Code === countryCode)
//             resolve(country)
//         } else if (e.target.readyState === 4){
//             reject("Unable to fetch data");
//         }
//     })
//     request.open("GET","http://restcountries.eu/rest/v2/all")
//     request.send()
// })

