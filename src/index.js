import css from './style.css';
import { searchForm } from './customModules/searchForm';

function test() {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=34.052235&lon=-118.243683&appid=3bdeb7609c3eff9d1997a47ba5ce1830', { mode:'cors'})
        .then(function(response) {
            console.log(response.json());
        })
        .catch(function(err){
            console.log('error')
        })
}

const content = document.getElementById('content');
let searchFormRender = searchForm();
console.log(searchFormRender.searchContainer);
content.appendChild(searchFormRender.searchContainer);

//create module for form to collect city, state, and country info
//have a submit button turn the information into objects
//insert the objects into the api fetch function
//display choosen information on new weather page
//style pages accordingly



