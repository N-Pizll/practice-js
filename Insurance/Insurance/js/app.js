// Selected box and level ,radio
const year = document.getElementById("#year");
const level = document.getElementById("#LEVEL");
const radio = document.getElementById("#RADIO");

year.addEventListener('DOMContentLoaded',getYear)
// =================================================
//  function sall  shamsi
function getYear() {
    let hereyear = new Date().toLocaleDateString('fa-ir')
    hereyear = hereyear.slice(0,4)
    let maxYear = getYear();
    
    for (let i =maxYear; i >= maxYear - 20; i--){
        const option = document.createElement('option');
        option.value = i;
        option.innerText=`سال${i}`
    }
    
}


console.log(getYear());






