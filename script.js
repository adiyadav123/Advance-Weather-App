let search_button = document.querySelector(".search");
let apiKey = 'c1b724d4a8b26f8f2bf3bd5cbd950b10';
let searchInput = document.querySelector("#text");


search_button.addEventListener("click", async() => {
    let city = searchInput.value;
    if(!city){
        return Swal.fire(
            'City is required'
          )
    } 
    
    let geoApi = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;
    let geoRes = await fetch(geoApi);
    let geoData = await geoRes.json();

    if(geoData.length < 1){
        return Swal.fire(
            'City not found.'
          )
    }

    let city_lon = geoData[0].lon;
    let city_lat = geoData[0].lat;

    let weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${city_lat}&lon=${city_lon}&appid=${apiKey}&units=metric`;
    let weatherRes = await fetch(weatherApi);
    let weatherData = await weatherRes.json();

    console.log(weatherData);


});