function checkedEmail(event) {

  const emailErroSpan = document.querySelector(".login-content__form--email-error");
  const loginSection = document.querySelector(".login-content");
  const inputEmail = document.querySelector(".login-content__form--input-email");
  const description = document.querySelector(".login-content__description");

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

export default checkedEmail;
