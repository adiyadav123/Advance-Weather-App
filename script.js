let search_button = document.querySelector(".search");
let apiKey = 'c1b724d4a8b26f8f2bf3bd5cbd950b10';
let searchInput = document.querySelector("#text");
let city_name = document.querySelector("#city_name");
let time = document.querySelector(".time");
let temp = document.querySelector("#temp");
let st = document.querySelector(".status");

function timer() {
    let date = new Date();
    let datee = date.getDay();
    let seconds = date.getSeconds();
    // console.log(seconds);
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let months = ['', "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let real_months = months[datee];

    let modified_min = minutes.toString();

    if (modified_min.length < 2) {
        modified_min = `0${modified_min}`;
    }


    let final_date = `${day} ${real_months} ${hours}:${modified_min}:${seconds}`;

    time.innerHTML = final_date;
}

setInterval(() => {
    timer();
}, 1000);


search_button.addEventListener("click", async () => {


    // let city = searchInput.value;
    // if (!city) {
    //     return Swal.fire(
    //         'City is required'
    //     )
    // }

    // let geoApi = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;
    // let geoRes = await fetch(geoApi);
    // let geoData = await geoRes.json();

    // if (geoData.length < 1) {
    //     return Swal.fire(
    //         'City not found.'
    //     )
    // }

    // let city_lon = geoData[0].lon;
    // let city_lat = geoData[0].lat;

    // let weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${city_lat}&lon=${city_lon}&appid=${apiKey}&units=metric`;
    // let weatherRes = await fetch(weatherApi);
    // let weatherData = await weatherRes.json();

    // console.log(weatherData);
    // temp.innerHTML = `${weatherData.main.feels_like}`;
    // st.innerHTML = `${weatherData.weather[0].description}`;

    return Swal.fire(
        'Ahh! \n I added lines of code to make my app more easier. One of the feature was adding enter button detector. I added to make your work easier and you are still using search button to search 👀. You are such a dumb 🤦‍♂️. '
    )

});

document.addEventListener('keydown', async (event) => {
    if (event.key.toString().toLowerCase() == "enter") {
        let city = searchInput.value;
        if (!city) {
            searchInput.focus();
            return Swal.fire(
                'City is required'
            )
        } else {
            let geoApi = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;
            let geoRes = await fetch(geoApi);
            let geoData = await geoRes.json();

            if (geoData.length < 1) {
                return Swal.fire(
                    'City not found.'
                );
            }

            let city_lon = geoData[0].lon;
            let city_lat = geoData[0].lat;

            let weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${city_lat}&lon=${city_lon}&appid=${apiKey}&units=metric`;
            let weatherRes = await fetch(weatherApi);
            let weatherData = await weatherRes.json();

            console.log(weatherData);

            city_name.innerHTML = `${weatherData.name}`;
            temp.innerHTML = `${weatherData.main.feels_like}`;
            st.innerHTML = `${weatherData.weather[0].description}`;
        }


    }
})