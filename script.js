let search_button = document.querySelector(".search");
let apiKey = 'c1b724d4a8b26f8f2bf3bd5cbd950b10';
let searchInput = document.querySelector("#text");
let city_name = document.querySelector("#city_name");
let time = document.querySelector(".time");
let temp = document.querySelector("#temp");
let st = document.querySelector(".status");


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

    let months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    console.log(weatherData);
    let date = new Date();
    let day = date.getDate();
    let mon = date.getMonth();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    city_name.innerHTML = `${weatherData.name}`;
    time.innerHTML = `${day} ${months[mon]} ${hours}:${minutes}`;
    temp.innerHTML = `${weatherData.main.feels_like}`;
    st.innerHTML = `${weatherData.weather[0].description}`;

});