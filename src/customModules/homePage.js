import { searchForm } from "./searchForm";

const renderHomePage = () => {
    const homeContainer = document.createElement('div');
        homeContainer.id = 'homeContainer';
    const pageHeading = document.createElement('h1');
        pageHeading.id = 'pageHeading';
        pageHeading.innerHTML = 'Current Weather Data'
    homeContainer.appendChild(pageHeading)
    const userInput = searchForm();
    homeContainer.appendChild(userInput.searchForm);
    return { homeContainer }
}

export { renderHomePage };