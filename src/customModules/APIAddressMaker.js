function APIMaker(zipcode, country) {
    return 'http://api.openweathermap.org/geo/1.0/zip?zip=' 
        + zipcode
        + ','
        + country 
        + '&appid=3bdeb7609c3eff9d1997a47ba5ce1830'
}

export { APIMaker };