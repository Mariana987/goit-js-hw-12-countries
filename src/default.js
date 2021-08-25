
import { debounce } from "lodash";
import searchResults from '../src/search-results.hbs';
import countryCards from '../src/country-cards.hbs';

const inputSearch = document.querySelector('[data-action="input-search"]');
const countryContainer = document.querySelector('.container')
inputSearch.addEventListener('input', debounce(onSearch, 500))



function onSearch(e) {
    e.preventDefault();

    const name = search.value;

    const url = `https://restcountries.eu/rest/v2/name/${name}`;

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
            console.log(data.length)

            if (data.length === 1) {
                appendCountryCard(data)
            }
            return data;
        })

        .then(appendCountryMarkup)



    // .catch(error => {
    //     console.log(error)
    // });


}

function appendCountryMarkup(data) {
    countryContainer.insertAdjacentHTML('beforeend', searchResults(data))
    return
}
function appendCountryCard(data) {
    countryContainer.insertAdjacentHTML('beforeend', countryCards(data))
    return
}