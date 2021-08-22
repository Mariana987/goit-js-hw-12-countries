fetch('https://restcountries.eu/rest/v2/name/ty')
    .then(response => {
        return response.json();
    })
    .then(country => {
        console.log(country)
    })
    .catch(error => {
        consolr.log(error)
    })