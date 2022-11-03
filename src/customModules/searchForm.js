import { APIMaker } from "./APIAddressMaker";

const searchForm = () => {
    //get submit button to turn information into an API address
    //Get submit button to run apimaker function
    //fetch api and display    
    const searchForm = document.createElement('form');
        searchForm.id = 'searchForm';

    const zipcodeInput = document.createElement('input');
        zipcodeInput.type = 'text';
        zipcodeInput.id = 'zipcodeInput';
        zipcodeInput.name = 'zipcode';
    const zipcodeLable = document.createElement('lable');
        zipcodeLable.id = 'zipcodeLable';
        zipcodeLable.for = 'zipcode';
        zipcodeLable.innerHTML = 'zipcode';

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
        submitButton.innerHTML = 'submit';
        submitButton.onClick = e => {
            e.stopPropagation();
            console.log(countryInput.value);
        }

    searchForm.appendChild(zipcodeLable);
    searchForm.appendChild(zipcodeInput);
    searchForm.appendChild(countryLable);
    searchForm.appendChild(countryInput);
    searchForm.appendChild(submitButton);

    return { searchForm };
}

export { searchForm };