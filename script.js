
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
    extractWeather (data.list[0])
    //Printweather
    //Gets the object and renders it in the screen
    const sky = data.list[0].weather[0].main;
    const sky_description = data.list[0].weather[0].description;
    const temp=data.list[0].main.temp;
}

getCoordinates('barcelona')

function extractWeather(obj) {
    
}


// NOT WORKING
// async function getCityData(city) {
//     try{
//         const link = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=44e48fc145b6aa381c040fcc939ec2e5`
//         const response = await fetch (link);
//         const data = await response.json();
//         return data;

//     }catch (error){
//         console.log(error);
//     }
// }
// function getCoordinates (city){
//     let latitude = ''
//     let longitude = ''

//     getCityData(city)
//         .then((obj)=>{
//         latitude = obj[0].lat;
//         longitude = obj[0].lon;
//         console.log(latitude);
//         }).catch((error) => {
//             console.log(error);
//         })
//     return latitude;
    
// }

// const coordinates = getCoordinates('madrid');
// console.log(coordinates)
