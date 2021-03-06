import requestServe from "./requestServe.js";
import checkedEmail from "./checkEmail.js";
import checkedEmailLogin from "./checkEmailLogin.js";
import showPassword from "./showPassword.js";
import checkToken from "./checkToken.js"

async function loginIn(event) {
  
  if (event.key === "Enter" || event.pointerType == "mouse") {

    const inputEmail = document.querySelector(".login-content__form--input-email");
    const inputPassword = document.querySelector(".login-content__form--input-password");
    const user = {
      email: inputEmail.value,
      password: inputPassword.value,
    }

    const response = await requestServe(user);
    const mantainConected = document.querySelector(".login-content__options-checkbox");
    const isCheck = mantainConected.checked;

    if (response) {
      document.location.href = "/dashboard.html";
      if (isCheck) {
        localStorage.setItem('token', JSON.stringify(user));
      }
    } else {
      checkedEmailLogin();
    }
  }
}

function main() {

  checkToken();

  const buttonPassword = document.querySelector(".login-content__form--button-password");
  const buttonForm = document.querySelector(".login-content__form--button");
  const inputEmail = document.querySelector(".login-content__form--input-email");
  const inputPassword = document.querySelector(".login-content__form--input-password");

  buttonForm.addEventListener("click", loginIn);
  buttonPassword.addEventListener("click", showPassword);
  inputEmail.addEventListener("blur", checkedEmail);
  inputPassword.addEventListener("keypress", loginIn)

}

main();