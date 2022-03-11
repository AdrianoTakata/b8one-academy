function checkToken(){
  const token = localStorage.getItem('token');
  if(token){
    document.location.href = "/dashboard.html";
  } 
}

export default checkToken;