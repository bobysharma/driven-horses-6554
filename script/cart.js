let cartproduct=JSON.parse(localStorage.getItem("items"));

 
cartproduct.forEach(function(el){
 let trow=document.createElement("div");
//  let atr=document.createAttribute("class")
 trow.setAttribute("class", "product-details"); 
 let td1=document.createElement("span");
 let productimage=document.createElement("img");
 productimage.src=el.image_url;
 td1.append(productimage);






 let td2=document.createElement("span");


 // let title=document.createElement("h3");
 td2.innerText=el.name;
 // td2.append(title)

let td7=document.createElement("span");
 let td4=document.createElement("p");
 td4.innerText="-";
 
 let td5=document.createElement("p");
 td5.innerText=el.quantity;
 let td6=document.createElement("p");
 td6.innerText="+";
 td5.setAttribute("class", "incr");
td6.addEventListener("click", function(){
    increment(el);
});

 let td3=document.createElement("span");
 // let price=document.createElement("h3"); 
 td3.innerText=el.price; 
 td3.setAttribute("class", "price");
 
  
td7.append(td4,td5,td6)



 trow.append(td1,td2,td7,td3)
 document.querySelector(".cartitems").append(trow);
});

function increment(el){
    console.log(cartproduct.indexOf(el))
    let qyt=el.quantity++;
    document.querySelector(".incr").innerText=qyt;
    let total=Number(el.price*qyt);
     localStorage.setItem("quantity",qyt);

}