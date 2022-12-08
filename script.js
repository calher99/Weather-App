// 1st geo location API
// https://openweathermap.org/api/geocoding-api
// 2nd 5 days forecast
// https://openweathermap.org/forecast5

async function getCoordinates(city) {
    const link = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=44e48fc145b6aa381c040fcc939ec2e5`
    const response = await fetch (link);
}