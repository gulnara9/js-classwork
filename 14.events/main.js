let namee = document.querySelector("#name");
let surname = document.querySelector("#surname");
let email = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let checkbox = document.querySelector("#checkbox");
let checkText = document.querySelector("#label-check");
let submitBtn = document.querySelector("#submit");
let radio = document.querySelectorAll("#radio");
//name
namee.addEventListener("focus", function () {
  namee.style.background = "gray";
  namee.style.color = "white";
});
namee.addEventListener("blur", function () {
  namee.style.background = "transparent";
});
//surname
surname.addEventListener("mouseover", function () {
  surname.style.background = "green";
});
surname.addEventListener("mouseout", function () {
  surname.style.background = "transparent";
});
//email
email.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  email.style.background = "red";
});
email.addEventListener("blur", (event) => {
  email.style.background = "";
});
//password
passwordInput.addEventListener("focus", function () {
  passwordInput.value = "lalalala";
});
passwordInput.addEventListener("blur", function () {});
//check
checkbox.addEventListener("click", function () {
  if (checkbox.checked) {
    checkText.style.visibility = "visible";
  } else {
    checkText.style.visibility = "hidden";
  }
});

//submit

submitBtn.setAttribute("disabled", "");

checkbox.addEventListener("click", function submitButton() {
  if (namee.value && surname.value && checkbox.checked) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.disabled = true;
  }
});
submitBtn.addEventListener("click", function () {
  alert("thankss");
});
//radio
radio.forEach((element) => {
  element.addEventListener("click", function () {
    alert("Helloo");
    this.style.accentColor = "blue";
  });
});
