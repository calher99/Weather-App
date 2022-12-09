// 1st geo location API
// https://openweathermap.org/api/geocoding-api
// 2nd 5 days forecast
// https://openweathermap.org/forecast5


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
    console.log(lat)
    console.log(lon)
}

getCoordinates('madrid');



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
