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
// Getting the corresponded animal
function getAnimal(inputYear) {
  var toYear = 1997;
  var birthYear = inputYear;

  x = (toYear - birthYear) % 12;
  if (x == 1 || x == -11) {
    info[0].classList.add("show");
  } else {
    if (x == 0) {
      info[1].classList.add("show");
    } else {
      if (x == 11 || x == -1) {
        info[2].classList.add("show");
      } else {
        if (x == 10 || x == -2) {
          info[3].classList.add("show");
        } else {
          if (x == 9 || x == -3) {
            info[4].classList.add("show");
          } else {
            if (x == 8 || x == -4) {
              info[5].classList.add("show");
            } else {
              if (x == 7 || x == -5) {
                info[6].classList.add("show");
              } else {
                if (x == 6 || x == -6) {
                  info[7].classList.add("show");
                } else {
                  if (x == 5 || x == -7) {
                    info[8].classList.add("show");
                  } else {
                    if (x == 4 || x == -8) {
                      info[9].classList.add("show");
                    } else {
                      if (x == 3 || x == -9) {
                        info[10].classList.add("show");
                      } else {
                        if (x == 2 || x == -10) {
                          info[11].classList.add("show");
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
