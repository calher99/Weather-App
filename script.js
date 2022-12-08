// 1st geo location API
// https://openweathermap.org/api/geocoding-api
// 2nd 5 days forecast
// https://openweathermap.org/forecast5

async function getCityData(city) {
    const link = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=44e48fc145b6aa381c040fcc939ec2e5`
    const response = await fetch (link);
    const data = await response.json();
    return data;
}
function getCoordinates (city){
    let latitude = ''
    let longitude = ''

    getCityData(city)
        .then((obj)=>{
        latitude = obj[0].lat;
        longitude = obj[0].lon;
        return [latitude,longitude]
        }).catch((error) => {
            console.log(error);
        })
    
}

const coordinates = getCoordinates('madrid');
console.log(coordinates)
