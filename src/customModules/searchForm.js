import { APIMaker } from "./APIAddressMaker";

const searchForm = () => {
    //get submit button to turn information into an API address
    //Get submit button to run apimaker function
    //fetch api and display    
    let zipcode = '';
    let country = '';
    let API = ''
    
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
        submitButton.type = 'button';
        submitButton.value = 'submit';
        submitButton.addEventListener('click', e => {
            e.stopPropagation();
            country = countryInput.value;
            zipcode = zipcodeInput.value;
            API = APIMaker(zipcode, country);
            console.log(API);
            fetch(API, { mode:'cors'})
        .then(function(response) {
            console.log(response.json());
        })
        .catch(function(err){
            console.log('error')
        })
        });
    searchForm.appendChild(zipcodeLable);
    searchForm.appendChild(zipcodeInput);
    searchForm.appendChild(countryLable);
    searchForm.appendChild(countryInput);
    searchForm.appendChild(submitButton);

    return { searchForm };
}

export { searchForm };