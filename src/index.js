function updateTime(){
//London
let londonElement = document.querySelector("#london");
 if (londonElement) {
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time")
let londonTime = moment().tz("Europe/London");
londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY")
londonTimeElement.innerHTML = `${londonTime.format("h:mm:ss [<small>]A[</small>]")}`
 }

//Orlando
let orlandoElement = document.querySelector("#orlando");
 if (orlandoElement) {
let orlandoDateElement = orlandoElement.querySelector(".date");
let orlandoTimeElement = orlandoElement.querySelector(".time")
let orlandoTime = moment().tz("America/Kentucky/Monticello");
orlandoDateElement.innerHTML = orlandoTime.format("MMMM Do YYYY")
orlandoTimeElement.innerHTML = `${orlandoTime.format("h:mm:ss [<small>]A[</small>]")}`
}}
updateTime();
setInterval (updateTime, 1000);

function updateCity(event) {
    let selectElement = event.target;
    let selectedOption = selectElement.options[selectElement.selectedIndex];
    let cityTimeZone = selectElement.value;
    let cityName, cityTime;

    if (cityTimeZone === 'current') {
        cityTimeZone = moment.tz.guess(); // Guess the current time zone
        cityName = cityTimeZone; // Use the time zone identifier as the city name
        cityTime = moment().tz(cityTimeZone);
    } else {
        cityName = selectedOption.text; 
        cityTime = moment().tz(cityTimeZone);
    }

    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `<div class="city">
            <div>
              <h2>${cityName}</h2>
              <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
          </div>
        </div>`;
}


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);