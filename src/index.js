import css from './style.css';
import { renderHomePage } from './customModules/homePage';

const content = document.getElementById('content');
let homePage  = renderHomePage();
content.appendChild(homePage.homeContainer);

//create module for form to collect city, state, and country info
//have a submit button turn the information into objects
//insert the objects into the api fetch function
//display choosen information on new weather page
//style pages accordingly



