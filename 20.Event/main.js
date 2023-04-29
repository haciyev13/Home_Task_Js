<<<<<<< HEAD
const inputName = document.querySelector("#name");
const inputSurname = document.querySelector("#surname");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const inputCheck = document.querySelector("#check");
const labelCheckbox = document.querySelector("#checkbox");
const inputRadio = document.querySelectorAll("#radio");
const submitBtn = document.querySelector("#submit-btn");

submitBtn.disabled = "true";
inputCheck.style.accentColor = "brown";

inputName.addEventListener("focus", (event) => {
  event.target.style.background = "grey";
  event.target.style.color = "blanchedalmond";
});

inputName.addEventListener("mouseout", (event) => {
  submitBtn.setAttribute("disabled", "true");
});
inputSurname.addEventListener("focus", (event) => {
  event.target.style.background = "green";
});
inputSurname.addEventListener("mouseover", (event) => {
  event.target.style.background = "green";
});
inputSurname.addEventListener("mouseout", (event) => {
  event.target.style.background = "transparent";
});
inputEmail.addEventListener("contextmenu", (event) => {
  event.target.style.background = "burlywood";
});
inputPassword.addEventListener("focus", (event) => {
  event.target.value = "123456789";
});
inputPassword.addEventListener("mouseout", (event) => {
  event.target.value = "";
});
inputCheck.addEventListener("click", function () {
  if (inputCheck.checked) {
    labelCheckbox.style.visibility = "visible";
  } else {
    labelCheckbox.style.visibility = "hidden";
  }
});

inputRadio.forEach((element) => {
    element.addEventListener("click", function () {
        element.style.accentColor = "midnightblue";
        alert("Thanks");
    });
});
inputRadio.required = required;
=======
const inputName = document.querySelector("#name");
const inputSurname = document.querySelector("#surname");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const inputCheck = document.querySelector("#check");
const labelCheckbox = document.querySelector("#checkbox");
const inputRadio = document.querySelectorAll("#radio");
const submitBtn = document.querySelector("#submit-btn");

submitBtn.disabled = "true";
inputCheck.style.accentColor = "brown";

inputName.addEventListener("focus", (event) => {
  event.target.style.background = "grey";
  event.target.style.color = "blanchedalmond";
});

inputName.addEventListener("mouseout", (event) => {
  submitBtn.setAttribute("disabled", "true");
});
inputSurname.addEventListener("focus", (event) => {
  event.target.style.background = "green";
});
inputSurname.addEventListener("mouseover", (event) => {
  event.target.style.background = "green";
});
inputSurname.addEventListener("mouseout", (event) => {
  event.target.style.background = "transparent";
});
inputEmail.addEventListener("contextmenu", (event) => {
  event.target.style.background = "burlywood";
});
inputPassword.addEventListener("focus", (event) => {
  event.target.value = "123456789";
});
inputPassword.addEventListener("mouseout", (event) => {
  event.target.value = "";
});
inputCheck.addEventListener("click", function () {
  if (inputCheck.checked) {
    labelCheckbox.style.visibility = "visible";
  } else {
    labelCheckbox.style.visibility = "hidden";
  }
});

inputRadio.forEach((element) => {
    element.addEventListener("click", function () {
        element.style.accentColor = "midnightblue";
        alert("Thanks");
    });
});
inputRadio.required = required;
>>>>>>> dda1c431a68359a4b0d590c4446ef94448d87a19
inputRadio.required = required;