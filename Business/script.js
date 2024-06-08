let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

var  product=[
    {
        id:1,
        images:"./images/menu-1.png",
        name:"Cafe Latte",
        price1:245,
        price2:270
    },
    {
        id:2,
        images:"./images/menu-2.png",
        name:"Breve",
        price1:189,
        price2:200
    },
    {
        id:3,
        images:"./images/menu-3.png",
        name:"Cortado",
        price1:150,
        price2:200
    },
    {
        id:4,
        images:"./images/menu-4.png",
        name:"Cappuccino",
        price1:180,
        price2:190
    },
    {
        id:5,
        images:"./images/menu-5.png",
        name:"Cafe au Lait",
        price1:199,
        price2:210
    },
    {
        id:6,
        images:"./images/menu-6.png",
        name:"Cafe au Lait",
        price1:199,
        price2:210
    }


];

var categories=[...new Set(product.map((item)=>{

    return item
}))];
var i=0;

document.querySelector("#card2").innerHTML=categories.map((item)=>{

    var {images,name,price1,price2}=item;

    return(
        ` <div class="box">
        <img src="${images}" alt="">
        <h3>${name}</h3>
        <div class="price">₱${price1}<span>₱${price2}</span></div>`+
        "<a  class='btn'  onclick='addtocart("+(i++)+ ")'>add to cart</a>"+
    `</div>`
    );

});

var cart=[];

function deleteElement(a){

    cart.splice(a,1);
    displaycart();

}

function addtocart(a){
    cart.push({...categories[a]});
    displaycart(a);
}


    
function displaycart(a){
    let j=0,total=0;
    let e=0
  document.querySelector("#count").innerHTML=cart.length;
  document.querySelector("#total").innerHTML="₱"+0+"";
        document.querySelector(".cart-items-container").innerHTML =  cart.map((item)=>
        {
            var {images,name,price1,}=item;
              total=total+price1;
            document.querySelector("#total").textContent="₱"+total+"";
            return(

               ` <div class="cart-item">
                <span class="fas fa-times"></span>
                <img src="${images}" alt="">
                <div class="content">
                    <h3>${name}</h3>
                    <div class="price">₱${price1}/-</div>`+
                    "<span class='x'onclick='deleteElement("+(j++)+")'>x</span>"+
                `</div>
            </div>
              `
            );
          
          

        });


        

    }
// }



