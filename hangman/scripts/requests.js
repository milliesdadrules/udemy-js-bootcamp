const getPuzzle = async (wordCount) => {
    const myResponse = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`,{})
    if(myResponse.status === 200){
        const data = await myResponse.json()
        return data.puzzle
    } else {
        throw new Error("Oops fetch failed!!!")
    }
}

const getPuzzleOld = (wordCount) => {
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

const getCountryOld = (countryCode) => {
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

const getCountry = async (countryCode) => {
    const response = await fetch("http://restcountries.eu/rest/v2/all",{})
        if(response.status === 200){
            const data = await response.json()
            return country = data.find((country) => country.alpha2Code === countryCode)
        } else {
            throw new Error("Error :O")
        }
}

const getLocation = async () => {
    const response = await fetch("http://ipinfo.io/json?token=188a2feed7d51d",{})
        if(response.status === 200){
            return response.json()
        } else {
            throw new Error("Failed to fetch data")
        }
}

const getCurrentLocation = async () => {
    const location = await getLocation()
    return country = await getCountry(location.country)
}