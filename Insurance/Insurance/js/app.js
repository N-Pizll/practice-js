// Event Listener
document.addEventListener("DOMContentLoaded", function () {
    // Create the <option> for the years
    const html = new HTMLUI();
    html.displayYears();
  });
  
  //  Objects
  let nowYear = new Date().toLocaleDateString('fa-IR')


  function HTMLUI() {}
  // displays the latest 20 years in the selet
  HTMLUI.prototype.displayYears = function () {
    // max and min years
    const max = new Date().getFullYear();
    const min = max - 20;
    
    
    // Solar year
   let nowYear = new Date().toLocaleDateString('fa-IR')
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
  
  console.log(nowYear);