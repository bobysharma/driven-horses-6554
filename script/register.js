 document.querySelector("form").addEventListener("submit",storedata);

function storedata(event){
    event.preventDefault();
    let username=document.getElementById("name").value;
   let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    
    console.log(username,email,password);
    
    localStorage.setItem("name",username);
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);

 }