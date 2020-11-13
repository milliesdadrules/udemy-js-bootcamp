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

const getLocation = () => {
    return fetch("http://ipinfo.io/json?token=188a2feed7d51d",{}).then((response) =>{
        if(response.status === 200){
            return response.json()
        } else {
            throw new Error("Failed to fetch data")
        }
    }).then((data) => data)
}
