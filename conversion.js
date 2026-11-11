const inputValue = document.getElementById("input_style");
const btn = document.getElementById("btn");
const lengthResult = document.getElementById("length-result");
const volumeResult = document.getElementById("volume-result");
const massResult = document.getElementById("mass-result");

function lengthcalculation(value) {
    const cmtoM = value / 100;
    const MtoCm = value * 100;
    const result = `${value} centimeters  = ${cmtoM} meters  | ${value} meters = ${MtoCm.toFixed(2)} centimeters`;
   return lengthResult.textContent = result;
}

function volumecalculation(value) {
    const ltoML = value * 1000 ;
    const MLtoL = value /1000;
    const resultName = `${value} liters = ${ltoML} millimeters | ${value} millimeters = ${MLtoL} liters`;
   return volumeResult.textContent = resultName;
}

function masscalculation(value) {
    const gramtoKg = value / 1000;
    const Kgtogram =value * 1000 ;
    const resultvalue = `${value} gram = ${gramtoKg} kilograms  | ${value} gram = ${Kgtogram} kilogram`;
   return massResult.textContent = resultvalue;

}

btn.addEventListener("click", function () {
    const value = inputValue.value;
    lengthcalculation(value)
    volumecalculation(value)    
    masscalculation(value)

})