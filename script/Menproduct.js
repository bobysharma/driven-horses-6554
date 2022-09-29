 
    let arr=[];
    var mensData = [
    {
      image_url:"https://www.jcrew.com/s7-img-facade/BE996_YD1914?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480", 
      name: "Broken-in organic cotton oxford shirt",

      price: "INR 10,867",
      strikedoffprice: "2599",
    },
    {
      image_url:"https://www.jcrew.com/s7-img-facade/BJ706_YD1962?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
      name: "MEN'S REEBOK SWIM ARUBA FLIP SLIPPERS ",
      price: 699,
      strikedoffprice: 999,
    },
    {
      image_url:"https://www.jcrew.com/s7-img-facade/BJ446_YD1929_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
      name: " MEN'S REEBOK RUNNING AUSTIN SHOES",
      price: 945,
      strikedoffprice: 2099,
    },
    {
      image_url:"https://www.jcrew.com/s7-img-facade/BJ705_WZ0199_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
      name: "MEN'S REEBOK SWIM AVENGER FLIP LP SLIPPERS",
      price: 399,
      strikedoffprice: 799,
    },
    {
      image_url:"https://www.jcrew.com/s7-img-facade/BF792_YD2123_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
      name: "MEN'S REEBOK RUNNING TEMPO SHOES ",
      price: 1620,
      strikedoffprice: 3599,
    },
    {
      image_url:"https://www.jcrew.com/s7-img-facade/BJ498_YD0088_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
      name: " MEN'S REEBOK RUNNING ASTRO BOOSTER SHOES ",
      price: 1440,
      strikedoffprice: 3199,
    },
    {
      image_url: "https://www.jcrew.com/s7-img-facade/BJ497_YD1606_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
      name: " MEN'S TRAINING WORKOUT READY ELITAGE PANTS ",
      price: 1999,
      strikedoffprice: 3199,
    },
    {
      image_url:"https://www.jcrew.com/s7-img-facade/BJ463_YD1610_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
      name: "MEN'S REEBOK TRAINING  POLO T-SHIRTS TEE  ",
      price: 769,
      strikedoffprice: 1099,
    },
    {
      image_url:"https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/styles/listing_two_blocks/public/2021-11/GW6147_SMC_eCom-0.jpg?itok=FAtx5Mnh",
      name: "MEN'S REEBOK TRAINING WORKOUT  TEE  ",
      price: 1299,
      strikedoffprice: 1440,
    },
    {
      image_url:"https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/styles/listing_two_blocks/public/2021-11/GW6147_SMC_eCom-0.jpg?itok=FAtx5Mnh ",
      name: "MEN'S REEBOK SUPER SOFT FLIP SLIPPERS",
      price: 699,
      strikedoffprice: 999,
    },
    {
      image_url:"https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/styles/listing_two_blocks/public/2021-11/GW6147_SMC_eCom-0.jpg?itok=FAtx5Mnh ",
      name: "MEN'S REEBOK RUNNING RUN SHOES  ",
      price: 1620,
      strikedoffprice: 3599,
    },
    {
      image_url:"https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/styles/listing_two_blocks/public/2021-11/GW6147_SMC_eCom-0.jpg?itok=FAtx5Mnh ",
      name: "MEN'S REEBOK RUNNING GENESIS RUNNER SHOES  ",
      price: 1620,
      strikedoffprice: 3599,
    },
    {
      image_url:"https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/styles/listing_two_blocks/public/2021-11/GW6147_SMC_eCom-0.jpg?itok=FAtx5Mnh",
      name: "MEN'S REEBOK SWIM RUSSLE FLIP SLIPPERS  ",
      price: 599,
      strikedoffprice: 999,
    },
    {
      image_url:  "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/styles/listing_two_blocks/public/2021-11/GW6147_SMC_eCom-0.jpg?itok=FAtx5Mnh ",
      name: " MEN'S REEBOK RUNNING TREND RUNNER SHOES",
      price: 1575,
      strikedoffprice: 3499,
    },
    {
      image_url:"https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/styles/listing_two_blocks/public/2021-11/GW6147_SMC_eCom-0.jpg?itok=FAtx5Mnh ",
      name: "UNISEX REEBOK RUNNING ZIG KINETICA II SHOES  ",
      price: 9999,
      strikedoffprice: 12000,
    },
    {
      image_url:"https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/styles/listing_two_blocks/public/2021-11/GW6147_SMC_eCom-0.jpg?itok=FAtx5Mnh ",
      name: " MEN'S REEBOK TRAINING BAS POLO TEE ",
      price: 779,
      strikedoffprice: 1299,
    },
    {
      image_url:"https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/styles/listing_two_blocks/public/2021-11/GW6147_SMC_eCom-0.jpg?itok=FAtx5Mnh",
      name: "MEN'S REEBOK TRAINING FOUNDATION  PANTS  ",
      price: 1019,
      strikedoffprice: 1699,
    },
    {
      image_url:"https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/styles/listing_two_blocks/public/2021-11/GW6147_SMC_eCom-0.jpg?itok=FAtx5Mnh",
      name: "MEN'S REEBOK TRAINING FOUNDATION PANTS  ",
      price: 1019,
      strikedoffprice: 1699,
    },
    {
      image_url:"https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/styles/listing_two_blocks/public/2021-11/GW6147_SMC_eCom-0.jpg?itok=FAtx5Mnh",
      name: " MEN'S REEBOK RUNNING TREND SHOES",
      price: 1575,
      strikedoffprice: 3499,
    },
    {
      image_url: " https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/styles/listing_two_blocks/public/2021-11/GW6147_SMC_eCom-0.jpg?itok=FAtx5Mnh",
      name: "  MEN'S REEBOK RUNNING ZTAUR RUN SHOES ",
      price: 3499,
      strikedoffprice: 4999,
    },
    {
      image_url:"https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/styles/listing_two_blocks/public/2021-11/GW6147_SMC_eCom-0.jpg?itok=FAtx5Mnh",
      name: "MEN'S REEBOK SWIM ULTRA FLIP SLIPPERS   ",
      price: 749,
      strikedoffprice: 1499,
    },
    {
      image_url:"https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/styles/listing_two_blocks/public/2021-11/GW6147_SMC_eCom-0.jpg?itok=FAtx5Mnh   ",
      name: "  MEN'S REEBOK SWIM FLEX CONNECT SANDALS ",
      price: 1149,
      strikedoffprice: 2299,
    },
    {
      image_url:"https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/styles/listing_two_blocks/public/2021-11/GW6147_SMC_eCom-0.jpg?itok=FAtx5Mnh",
      name: " MEN'S REEBOK RUNNING GENESIS RUNNER SHOE  ",
      price: 1620,
      strikedoffprice: 3599,
    },
    {
      image_url:"https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/styles/listing_two_blocks/public/2021-11/GW6147_SMC_eCom-0.jpg?itok=FAtx5Mnh",
      name: " MEN'S REEBOK TRAINING RUNNER SHORTS  ",
      price: 779,
      strikedoffprice: 1299,
    },
    {
      image_url:"https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/styles/listing_two_blocks/public/2021-11/GW6147_SMC_eCom-0.jpg?itok=FAtx5Mnh",
      name: " MEN REEBOK CLASSICS TRACKSUIT HOODIE  ",
      price: 3499,
      strikedoffprice: 4999,
    },
    {
      image_url:"https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/styles/listing_two_blocks/public/2021-11/GW6147_SMC_eCom-0.jpg?itok=FAtx5Mnh",
      name: "MEN'S REEBOK CLASSIC TRACKSUIT GOLF HOODIE   ",
      price: 3499,
      strikedoffprice: 4999,
    },
     
  ];
 
  mensData.forEach(function(el){
    let card=document.createElement("div");
let img=document.createElement("img");
img.src=el.image_url;

let  title=document.createElement("h3");
title.innerText=el.name;
let price=document.createElement("h4");
price.innerText=el.price; 
let sprice=document.createElement("h4");
sprice.innerHTML="Price off -"+"<s>"+el.strikedoffprice+"</s>";
 
let btn=document.createElement("button");
btn.innerText="Add TO Cart";
btn.addEventListener("click",function(){
    addcart(el);
})
card.append(img,title,price,sprice,btn);
document.querySelector(".show-allproduct").append(card);

  })
  function addcart(el){
    arr.push(el);
    localStorage.setItem("items",JSON.stringify(arr));
  }

 