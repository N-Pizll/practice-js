// Get elements
let form = document.querySelector('#request-quote')
let yearSelector = document.querySelector('#year')


// Add event listener
document.addEventListener('DOMContentLoaded', init)
form.addEventListener('submit', formSubmision)
// ???
yearSelector.addEventListener('change', (e)=>{
    dataConfig.yearDiffrence = e.target.selectedIndex - 1
})


function init() {
    showYears()
}


// Create a function for form submition 
function formSubmision(e) {

    let formValue = checkForm(e)

    calculatePrice(formValue)
}


// Create a function that create and show the years
function showYears() {

    // Create a new date object with the current date
    let currentYear = new Date().toLocaleDateString('fa-IR')
    currentYear = currentYear.slice(0, 4)

    // Calculate max year
    let maxYear = fixNumbers(currentYear)

    // Create a for to calculate the years from currentYear to twenty years ago
    for (let i = maxYear; i >= maxYear - 20 ; i--) {

        // Create option tag
        let option = document.createElement('option')
        option.value = i
        option.innerText = `سال ${i}`

        // Append options to select
        yearSelector.append(option)

    }
}


// Convert persian Numbers
function fixNumbers(str) {

    let persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g]
    let arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g]

    if (typeof str === 'string') {

        for (let i = 0; i <= 9; i++) {

            str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
        }
    }

    return Number(str);
}


// Create a function to check the form values
function checkForm(e){

    e.preventDefault();

    // Get the value of the form
    let make = document.getElementById("make").value
    let year = yearSelector.value
    let level = document.querySelector('input[name="level"]:checked')?.value

    //Check the value of inputs
    if (make === "" || year ==="" || level === ""){

        showMsg('!Complete the form please')
    }
    else{
        return {
            'make': make,
            'year': year,
            'level': level
        }
    }
    
}


// Show error messages
function showMsg(msg){

    // Create message box
    let msgBox = document.createElement('div')
    msgBox.classList = "error"
    msgBox.innerText = msg

    // Show message box
    form.prepend(msgBox)

    // Remove message box
    setTimeout(
        ()=>{
            document.querySelector('.error').remove()
        } 
        , 3000
    )

}


// Make an object to configure car ratio and other data
const dataConfig = {
    'makeRatio': {
        'saipa-pride': 1.35,
        'kia-optima': 1.8,
        'porche-911': 3.0
    },

    'yearDiffrence': 0,
    'decRatio': 1.2,
}


// Create a function that calculate price
function calculatePrice(info) {

    let basePrice = 2_500_000;

    let finalPrice = 0;

    //Calculate cars ratio
    finalPrice = basePrice * dataConfig.makeRatio[info.make]

    //Calculate year 
    finalPrice = finalPrice - (((diffrenceYear(info.year) * 2) / 100) * finalPrice)

    console.log('base:', basePrice.toLocaleString(), 'final:', finalPrice.toLocaleString());
}


// Calculate year diffrence
function diffrenceYear(selectYear) {

    return showYears() - selectYear 

}

