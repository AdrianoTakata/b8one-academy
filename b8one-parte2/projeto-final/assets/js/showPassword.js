
function showPassword(event) {
  const inputPassword = document.querySelector(".login-content__form--input-password");
  const showPasswordIcon = document.querySelector(".login-content__form--show");
const unshowPassordIcon= document.querySelector(".login-content__form--unshow");
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

export default showPassword;