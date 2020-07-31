var form = document.getElementById("form");
var input = document.querySelector(".input");
var info = document.querySelectorAll(".animal-info");
var small = document.querySelector("small");

// Form Event Listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  var year = +input.value;
  resetButton();
  verifyYear(year, 1924, 2020);
});

// Reseting input and animal for next search
function resetButton() {
  input.value = "";
  small.innerHTML = "";

  for (i = 0; i < info.length; i++) {
    info[i].classList.remove("show");
  }
}

// Verifying if year is valid
function verifyYear(inputYear, min, max) {
  if (inputYear < min || inputYear > max) {
    showError();
  } else if (inputYear.length < 4 || inputYear.length > 4) {
    showError();
  } else {
    getAnimal(inputYear);
  }
}

// Showing error message
function showError() {
  small.classList.add("error");
  small.innerHTML = "Invalid Birth Year";
}

//  Getting the corresponded animal
function getAnimal(inputYear) {
  var x = (inputYear - 4) % 12;
  console.log(x);
  info[x].classList.add("show");
}