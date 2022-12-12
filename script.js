function initializeInput () {
    const form = document.querySelector('form');
    const input = document.querySelector('input');

    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        getCoordinates(input.value);
    });
}



async function getCoordinates(city) {
    try{
        const link = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=44e48fc145b6aa381c040fcc939ec2e5`
        const response = await fetch (link);
        const data = await response.json();
        const latitude = data[0].lat;
        const longitude = data[0].lon;
        getWeather(await latitude, await longitude);
    }catch (error){
        console.log(error);
    }
}

async function getWeather (lat, lon){
    try{
        const link = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=44e48fc145b6aa381c040fcc939ec2e5`
        const response = await fetch (link);
        const data = await response.json();
        processWeather(await data);
    }catch (error){
        console.log(error);
    }
}

function processWeather (data){
    // Function to extract the data we want?¿ or print
    // 3 days 3 times per day
    // 00:00 9:00 and 15:00
    // temp, clouds and rain?¿
    // Get day today and hour and loop through array?¿
    // Every 3 hours --> 00 3 6 9 12 15 18 21 00
    // console.log(data.list[0]);

    //---Extract weather
    //takes 1 position of the array and returns an object with the key parameters to print
    const today = extractWeather (data.list[0]);
   
    //Gets the object and renders it in the screen
    renderSelected(today);
    
}



function extractWeather(obj) {
    // console.log(obj)
    const temp = Math.round((obj.main.temp - 273.15) * 10) / 10;
    const raw_date = obj.dt_txt;
    const date_array = raw_date.split(' ');
    const date = date_array[0];
    const time = date_array[1];
    return {
        date,
        time,
        sky :obj.weather[0].main,
        sky_description : obj.weather[0].description,
        temp 
    };
}

function renderSelected(data) {

    // call gifty
    fetchWeather(data.sky_description)

    // display writteninfo
    const weather_desc = document.querySelector('#weather_description');
    const temperature = document.querySelector('#temperature');
    weather_desc.textContent=data.sky_description;
    temperature.textContent = data.temp;
}

function fetchWeather(word){
    const link = `https://api.giphy.com/v1/gifs/translate?api_key=6CjiRKGYn3jII1YqFdWKkdameqWMdK6r&s=${word}`
    const img = document.querySelector('img');
    fetch(link, { mode: 'cors' })
        .then(function (response) {
            if (!response.ok) {
                console.log('error with the API!')
            }
            return response.json();
        })
        .then(function (response) {
            img.src = response.data.images.original.url;
        })
        .catch(error => console.log('error in the fetch!'))
}