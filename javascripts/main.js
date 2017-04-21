console.log("hello");

var tempInput = document.getElementById("temp-input");
var fSelected = document.getElementById("f-selected");
var cSelected = document.getElementById("c-selected");
var convertedTemp = document.getElementById("converted-temp");
var submitButton = document.getElementById("submit-button");
var clearButton = document.getElementById("clear-button");

function determineConverter(){ //2:This will determine which radio button (F or C) was selected.
	if(fSelected.checked){
		toFahrenheit(tempInput.value); //if this was selected, toFahrenheit funcion is called, with (arg).
	}else if(cSelected.checked){
		toCelsius(tempInput.value); //if this was selected, toCelsius funcion is called, with (arg).
	}
}

function clearField(){
	tempInput.value = "";
	tempInput.focus();
}

//CONVERTERS
function toFahrenheit (temp) {
	console.log("temp", temp)
	var cTemp = (temp * 1.8) + 32;
	changeColor(cTemp, "F");
}

function toCelsius (temp) {
	console.log("temp", temp)
	var fTemp = (temp-32) / 1.8;
	changeColor(fTemp, "C");
}

function changeColor (temp, scale) {
	console.log("temp", temp, "scale", scale);
	convertedTemp.classList.remove("red","blue","green")
	if(scale === "F") {
		if(temp > 90){
			convertedTemp.classList.add("red");
		} else if(temp < 32) {
			convertedTemp.classList.add("blue");
		} else {
			convertedTemp.classList.add("green");
		}
	}else {
		if(temp > 32){
			convertedTemp.classList.add("red");
		} else if(temp < 0) {
			convertedTemp.classList.add("blue");
		} else {
			convertedTemp.classList.add("green");
		}
	}
	outputResult(temp, scale);
}

//Validate Input Field
// function fieldValidate(){
// 	if (typeof(parseInt(tempInput.value)) != number){
// 		alert("You need to enter a number");
// 	} else {
// 		determineConverter();
// 	}
// }

function outputResult(temp, scale){
	var initialScale;
	if(scale === "F"){
		initialScale = "C";
	}else{
		initialScale = "F";
	}
	convertedTemp.innerHTML = `<p>Your temperature of ${tempInput.value}&deg; ${initialScale} has been converted to ${temp}&deg; ${scale}</p>`
	clearField();
}

//EVENT HANDLERS
submitButton.addEventListener("click", determineConverter); //1. User will click the button to get everything running. This will call on the "determineConverter" function.

tempInput.addEventListener("keyup", function(e){
	// console.log(e);
	if(event.keyCode === 13) {
		determineConverter();
	}
})

clearButton.addEventListener("click", clearField);


