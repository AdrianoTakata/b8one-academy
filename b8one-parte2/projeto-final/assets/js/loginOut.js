function loginOut() {

  const loginOutContainer = document.querySelector(".loginOut");

  loginOutContainer.addEventListener("click", function() {

    const token = localStorage.removeItem('token');
    document.location.href = "/login.html"

  })

}

export default loginOut;