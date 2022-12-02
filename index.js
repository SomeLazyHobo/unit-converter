/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let input = document.querySelector('input') 
input.addEventListener('input', resizeInput)
resizeInput.call(input) 

function resizeInput() {
  this.style.width = this.value.length + "ch";
}

const unitBox = document.getElementById("unitBox-el")
const length = document.getElementById("metersFeet-el")
const volume = document.getElementById("literGallon-el")
const mass = document.getElementById("kiloPound-el")
const convertBtn = document.getElementById("convertButton")

let initialValue = 0
let meter = 0
let feet = 0
let liter = 0
let gallon = 0
let kilogram = 0
let pound = 0

convertBtn.addEventListener("click", function() {
    if (unitBox.value) {
    initialValue = unitBox.value
    runConversion()
    } else {
        eraseValues()
    }
})

function calculateLength() {
    meter = Number(initialValue / 3.281).toFixed(3)
    feet = Number(initialValue * 3.281).toFixed(3)
}

function calculateVolume() {
    liter = Number(initialValue / 0.264).toFixed(3)
    gallon = Number(initialValue * 0.264).toFixed(3)
}

function calculateMass() {
    kilo = Number(initialValue / 2.204).toFixed(3)
    pound = Number(initialValue * 2.204).toFixed(3)
}

function runConversion() {
    calculateLength()
    calculateVolume()
    calculateMass()
    length.innerHTML = `
        ${initialValue} meters = ${feet} feet | ${initialValue} feet = ${meter} meters
    ` 
    volume.innerHTML = `
        ${initialValue} liters = ${gallon} gallons | ${initialValue} gallons = ${liter} liters
    ` 
    mass.innerHTML = `
        ${initialValue} kilos = ${pound} pounds | ${initialValue} pounds = ${kilogram} kilos
    ` 
}

function eraseValues() {
    length.innerHTML = ""
    volume.innerHTML = ""
    mass.innerHTML = ""
}