import { searchForm } from "./searchForm";

const renderHomePage = () => {
    const homeContainer = document.createElement('div');
        homeContainer.id = 'homeContainer';
    const userInput = searchForm();
    homeContainer.appendChild(userInput.searchForm);
    return { homeContainer }
}

export { renderHomePage };