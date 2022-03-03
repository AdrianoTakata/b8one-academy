const inputPassword = document.querySelector(".login-content__form--input-password");
const buttonPassword = document.querySelector(".login-content__form--button-password");
const showPasswordIcon = document.querySelector(".login-content__form--show");
const unshowPassordIcon= document.querySelector(".login-content__form--unshow");

const inputEmail = document.querySelector(".login-content__form--input-email");
const emailErroSpan = document.querySelector(".login-content__form--email-error");
const loginSection = document.querySelector(".login-content");
const description = document.querySelector(".login-content__description");


function showPassword(event) {
  if (event.target.checked) {
    inputPassword.type = "text";
    showPasswordIcon.style.display = "none";
    unshowPassordIcon.style.display = "block";
  } else {
    inputPassword.type = "password";
    showPasswordIcon.style.display = "block";
    unshowPassordIcon.style.display = "none";
  }
}

function checkedEmail(event) {
  console.log({event})
  console.log({loginSection})
  let height = loginSection.offsetHeight;
  let re = /\S+@\S+\.\S+/;
  let email = event.target.value.trim();
  if (height >= 500 ) {
    if (!re.test(email)){
      emailErroSpan.style.display = "block";
      loginSection.style.height = "524px";
      inputEmail.style.border = "2px solid #f03460";
    } else {
      emailErroSpan.style.display = "none";
      loginSection.style.height = "500px";
      inputEmail.style.border = "1px solid #555555";
    }
  } else {
    if (!re.test(email)){
      emailErroSpan.style.display = "block";
      loginSection.style.height = "444px";
      inputEmail.style.border = "2px solid #f03460";
      // description.style = "font-weigth: normal, font-size: 16px, line-height: 20px, padding: 0 30px";
      description.style.fontWeigth = "normal";
      description.style.fontSize = "16px";
      description.style.lineHeight = "20px" 
      description.style.padding = "0 30px";
    } else {
      emailErroSpan.style.display = "none";
      loginSection.style.height = "428px";
      inputEmail.style.border = "1px solid #555555";
    }
  }
}

buttonPassword.addEventListener("click", showPassword);
inputEmail.addEventListener("blur", checkedEmail);
