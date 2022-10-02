let popup=document.querySelector(".popup");
window.onload=function(){
    setTimeout(function(){
        popup.style.display="block"
    },1000)
}
document.querySelector(".close").addEventListener("click",function(){
    popup.style.display="none"
});
document.querySelector(".filterlogin").addEventListener("click", allfilter)
function allfilter(){
    let show=document.querySelector(".container");
    if(show.style.display=="none")
    { 
        show.style.display="block";
    }
    else{
        show.style.display="none";   
    }
}

let cartitem=JSON.parse(localStorage.getItem("items"))||0;
let cart =cartitem.length||0;
document.querySelector("sup").innerText=cart;
