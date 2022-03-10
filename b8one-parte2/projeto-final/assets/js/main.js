import requestServe from "./requestServe.js";
import checkedEmail from "./checkEmail.js";
import checkedEmailLogin from "./checkEmailLogin.js";
import showPassword from "./showPassword.js";

async function loginIn(){

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
    document.location.href = "/index2.html";
    if (isCheck) {
      localStorage.setItem('token', JSON.stringify(user));
    }
  } else {
    checkedEmailLogin();
  }
}

function checkToken(){
  const token = localStorage.getItem('token');
  console.log(token);
  if(!token){
    document.location.href = "/index2.html";
  }
}


function main() {

  checkToken();

  const buttonPassword = document.querySelector(".login-content__form--button-password");
  const buttonForm = document.querySelector(".login-content__form--button");
  const inputEmail = document.querySelector(".login-content__form--input-email");

  buttonForm.addEventListener("click", loginIn);
  buttonPassword.addEventListener("click", showPassword);
  inputEmail.addEventListener("blur", checkedEmail);

}

main()