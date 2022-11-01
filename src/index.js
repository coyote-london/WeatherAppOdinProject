import css from './style.css';

function test() {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=34.052235&lon=-118.243683&appid=3bdeb7609c3eff9d1997a47ba5ce1830', { mode:'cors'})
        .then(function(response) {
            console.log(response.json());
        })
        .catch(function(err){
            console.log('error')
        })
}

test();
