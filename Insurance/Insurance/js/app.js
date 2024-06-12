// Event Listener
document.addEventListener("DOMContentLoaded", function () {
  // Create the <option> for the years
  const html = new HTMLUI();
  html.displayYears();
});

const form = document.querySelector("#request-quote");
const yearSelector = document.querySelector("#year");

form.addEventListener("submit", calcPrice);
//  Objects
let nowYear = new Date().toLocaleDateString("fa-IR");
// ========================================
function HTMLUI() {}
// displays the latest 20 years in the selet
HTMLUI.prototype.displayYears = function () {
  // max and min years
  const max = new Date().getFullYear();
  const min = max - 20;

  // Generate the list with the latest 20 years
  const selectYears = document.getElementById("years");
  // print the values

  for (let i = max; i >= min; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectYears.appendChild(option);
  }
};
// ========================================
function yearss() {
  // Solar year
  let nowYear = new Date().toLocaleDateString("fa-IR");
  nowYear = nowYear.slice(0, 4);
  console.log(nowYear);
  let maxYear = nowYear;
const selectSall = document.getElementById('years')
  let minYear = maxYear - 20;

  for (let i = maxYear; i >= minYear; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.innerText = `سال ${i}`;
    selectSall.appendChild(option);
  }
}

yearss()
// ========================================
function calcPrice(x) {
  x
  //  reading value form the form

  const make = document.getElementById("make").value;
  const yearsss = selectSall.value;
  const level = document.querySelector('input[name="level"]:checked')?.value;

  // check the value of fields are correct
  if (make === "" || yearsss === "" || level === "") {
    displayerror("Nabinamet");
  } else {
    console.warn("Naaaaaaaa Khosham omad");
  }
}


// ========================================
function displayerror(msg) {
  // creat messge box
  const messagebox = document.createElement("div");
  messagebox.classList = "error";
  messagebox.innerText = msg;

  form.insertAdjacentElement('beforebegin'.messagebox)
}

