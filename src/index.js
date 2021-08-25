import { debounce } from "lodash";
import searchResults from '../src/search-results.hbs';
import countryCard from '../src/country-card.hbs';

const inputSearch = document.querySelector('[data-action="input-search"]');
const countryContainer = document.querySelector('.container')
inputSearch.addEventListener('input', debounce(onSearch, 500))



function onSearch(e) {
    e.preventDefault();

    const name = search.value;

    clearContainer()
    const url = `https://restcountries.eu/rest/v2/name/${name}`;

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
            console.log(data.length)
            return data;
        })
        .then(buildingCard)
        .catch(error => {
            console.log(error)
        });


}

function appendCountryMarkup(data) {
    countryContainer.insertAdjacentHTML('beforeend', searchResults(data))
    return
}
function appendCountryCard(data) {
    countryContainer.insertAdjacentHTML('beforeend', countryCard(data))
    return
}

function buildingCard(data) {

    if (data.length >= 2 && data.length <= 10) {
        // resetInput()
        return appendCountryMarkup(data)

    }
    if (data.length === 1) {
        return appendCountryCard(data)
    }
    else {
        return alert('kaput')
    }
}


// function resetInput() {
//     return search.value = ''
// }
function clearContainer() {
    countryContainer.innerHTML = ''
}