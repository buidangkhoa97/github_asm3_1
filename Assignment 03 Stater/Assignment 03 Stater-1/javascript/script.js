"use strict";
// Thông tin cá nhân
const inputPersonalInfo = document.querySelector(".input-personal-info");
const outputPersonalInfo = document.querySelector(".output-personal-info");
const btnInputInfo = document.querySelector(".btnInputPersonal");
const emailaddress = document.querySelector(".form-control");
const textEmailnote = document.querySelector(".form-text");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

btnInputInfo.addEventListener("click", function () {
  const enteredEmail = emailaddress.value;
  if (regex.test(enteredEmail)) {
    outputPersonalInfo.classList.remove("hide");
    inputPersonalInfo.classList.add("hide");
  } else {
    textEmailnote.textContent = "Your email is not valid";
    textEmailnote.style.color = "red";
  }
});
