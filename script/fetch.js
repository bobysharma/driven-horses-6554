document.querySelector("form").addEventListener("submit",fetchdata);
let warningpass="";
    let waring="";
    
function fetchdata(event){
    event.preventDefault();
    let warningpass="";
    let waring="";
    document.querySelector("#emailwar").innerText=waring; 
    document.querySelector("#passwordwar").innerText=warningpass;
    let inputemail=document.getElementById("email").value;
    let inputpassword=document.getElementById("password").value;
    let email=localStorage.getItem("email");
    let password=localStorage.getItem("password");
    let name=localStorage.getItem("name");
    if(inputemail==email && inputpassword==password){
         document.querySelector(".sign").innerText= "hi there" ;
    }
     if(inputemail!=email){
        // inputemail="";
         waring="Please enter correct email";
        document.querySelector("#emailwar").innerText=waring; 
        document.querySelector("#emailwar").style.color="red";  
          
    }
    console.log(inputemail,inputpassword);
     if(inputpassword!=password){
      warningpass="Please enter correct password";
    document.querySelector("#passwordwar").innerText=warningpass;
    document.querySelector("#passwordwar").style.color="red";   

 }
}