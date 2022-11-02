const searchForm = () => {
    //create div container
    //attach form to container
    //attach city, state, and country inputs
    //get submit button to turn information into an API address
    const searchContainer = document.createElement('div');
        searchContainer.id = 'searchContainer';
    
    const searchForm = document.createElement('form');
        searchForm.id = 'searchForm';
    
    const cityInput = document.createElement('input');
        cityInput.type = 'text';
        cityInput.id = 'cityInput';
        cityInput.name = 'city';
    const cityLable = document.createElement('label');
        cityLable.id = 'cityLable';
        cityInput.for = 'city';
        cityLable.innerHTML = 'city';

    const stateInput = document.createElement('input');
        stateInput.type = 'text';
        stateInput.id = 'stateInput';
        stateInput.name = 'state';
    const stateLable = document.createElement('lable');
        stateLable.id = 'stateLable';
        stateLable.for = 'state';
        stateLable.innerHTML = 'state';

    const countryInput = document.createElement('input');
        countryInput.type = 'text';
        countryInput.id = 'countryInput';
        countryInput.name = 'country';
    const countryLable = document.createElement('lable');
        countryLable.id = 'countryLable';
        countryLable.for = 'country';
        countryLable.innerHTML = 'country';

    const submitButton = document.createElement('input');
        submitButton.type = 'submit';
        submitButton.value = 'submit';

    
    searchContainer.appendChild(searchForm);

    searchForm.appendChild(countryLable);
    searchForm.appendChild(countryInput);
    searchForm.appendChild(stateLable);
    searchForm.appendChild(stateInput);
    searchForm.appendChild(cityLable);
    searchForm.appendChild(cityInput);
    searchForm.appendChild(submitButton);

    return { searchContainer };
}

export { searchForm };