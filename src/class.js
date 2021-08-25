// export default class CountrySearchService {
//     constructor() {
//         this.search.value = '';
//     }

//     fetchCountries() {
//         const name = search.value;
//         const url = `https://restcountries.eu/rest/v2/name/${name}`;

//         // e.preventDefault();

//         // const name = search.value;
//         return fetch(url)
//             .then(response => {
//                 return response.json();
//             })
//             .then(data => {
//                 console.log(data)
//                 console.log(data.length)
//                 return data;
//             })
//             .catch(error => {
//                 console.log(error)
//             });

//     }