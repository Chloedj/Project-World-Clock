function updateTime(){
//London
let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time")
let londonTime = moment().tz("Europe/London");
londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY")
londonTimeElement.innerHTML = `${londonTime.format("h:mm:ss [<small>]A[</small>]")}`


//Orlando
let orlandoElement = document.querySelector("#orlando");
let orlandoDateElement = orlandoElement.querySelector(".date");
let orlandoTimeElement = orlandoElement.querySelector(".time")
let orlandoTime = moment().tz("America/Kentucky/Monticello");
orlandoDateElement.innerHTML = orlandoTime.format("MMMM Do YYYY")
orlandoTimeElement.innerHTML = `${orlandoTime.format("h:mm:ss [<small>]A[</small>]")}`
}
updateTime();
setInterval (updateTime, 1000);