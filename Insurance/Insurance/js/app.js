// Event Listener
document.addEventListener("DOMContentLoaded", function () {
    // Create the <option> for the years
    const html = new HTMLUI();
    html.displayYears();
  });
  
  //  Objects
  
  function HTMLUI() {}
  // displays the latest 20 years in the selet
  HTMLUI.prototype.displayYears = function () {
    // max and min years
    const max = new Date().getFullYear();
    const min = max - 20;
    // console.log(max);
    // console.log(min);
  
    // Generate the list with the latest 20 years
    const selectYears = document.getElementById('years')
    // print the values
  
    for (let i = max; i >= min; i--) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i;
     selectYears.appendChild(option);
    }
  };
  