/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const userNumEl = document.getElementById("user-number")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
let userNum = userNumEl.value;

convert();

convertBtn.addEventListener("click", convert)

function convert(){
    userNum = userNumEl.value;
    lengthEl.textContent = `${userNum} meters = ${(userNum*3.281).toFixed(3)} feet | ${userNum} feet = ${(userNum/3.281).toFixed(3)} meters`
    volumeEl.textContent = `${userNum} liters = ${(userNum*0.264).toFixed(3)} gallons | ${userNum} gallons = ${(userNum/0.264).toFixed(3)} liters`
    massEl.textContent = `${userNum} kilos = ${(userNum*2.204).toFixed(3)} pounds | ${userNum} pounds = ${(userNum/2.204).toFixed(3)} kilos`
}


