const temp_celsius_fahrenheit = document.getElementById("temp_celsius_fahrenheit");
const temp_fahrenheit = document.getElementById("temp_fahrenheit");
const btn_celsius_fahrenheit = document.getElementById("btn_celsius_fahrenheit");

const temp_celsius_kelvin = document.getElementById("temp_celsius_kelvin");
const temp_kelvin = document.getElementById("temp_kelvin");
const btn_celsius_kelvin = document.getElementById("btn_celsius_kelvin");

btn_celsius_fahrenheit.addEventListener("click", convierteFahrenheit)
btn_celsius_kelvin.addEventListener("click", convierteKelvin)

function convierteFahrenheit(){
    const valorTemperatura = temp_celsius_fahrenheit.value;
    if(isNaN(valorTemperatura) || valorTemperatura == ""){
        alert("Sólo puedes ingresar valores numéricos")
    } else {
        temp_fahrenheit.value= (parseFloat(valorTemperatura)*1.8) + 32;
    }
    
}

function convierteKelvin(){
    const valorTemperatura = (temp_celsius_kelvin.value);
    
    if(isNaN(valorTemperatura) || valorTemperatura == ""){
        alert("Sólo puedes ingresar valores numéricos")
    } else {
        temp_kelvin.value= (parseFloat(valorTemperatura) + 273.15);
    }
}