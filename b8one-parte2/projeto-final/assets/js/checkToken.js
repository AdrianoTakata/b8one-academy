function checkToken(){
  const token = localStorage.getItem('token');
  if(token){
    document.location.href = "/main.html";
  } 
}

export default checkToken;