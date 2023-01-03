const details=[
    {
        shopname:"SS Hyerabad Briyani",
        location:"Biriyani,North Indian,Chines",
        image:"img-1.jpg",
        rating:"4.3",
        time:"32 MIN",
        price:"300 for two ",
        offer: "50% off | Use WELCOME 50"
    },
    {
        shopname:"K F C",
        location:"American,snacks,Biriyani",
        image:"img-2.jpg",
        rating:"3.3",
        time:"32 MIN",
        price:"350 for two",
        offer: "50% off | Use WELCOME 50"
    },
    {
        shopname:"Yannaikal Rajeswari",
        location:"Biriyani,North Indian,Chines",
        image:"img-3.jpg",
        rating:"3.9",
        time:"32 MIN",
        price:"250 for two",
        offer: "50% off | Use WELCOME 50"
    },
    {
        shopname:"Hotel New Sri Saparise ",
        location:"Biriyani,North Indian,Chines",
        image:"img-4.jpg",
        rating:"4.9",
        time:"32 MIN",
        price:"200 for two",
        offer: "50% off | Use WELCOME 50"
    },
    {
        shopname:"SS Hyerabad Briyani",
        location:"Biriyani,North Indian,Chines",
        image:"img-1.jpg",
        rating:"4.3",
        time:"32 MIN",
        price:"300 for two ",
        offer: "50% off | Use WELCOME 50"
    },
    {
        shopname:"K F C",
        location:"American,snacks,Biriyani",
        image:"img-2.jpg",
        rating:"3.3",
        time:"32 MIN",
        price:"350 for two",
        offer: "50% off | Use WELCOME 50"
    },
    {
        shopname:"Yannaikal Rajeswari",
        location:"Biriyani,North Indian,Chines",
        image:"img-3.jpg",
        rating:"3.9",
        time:"32 MIN",
        price:"250 for two",
        offer: "50% off | Use WELCOME 50"
    },
    {
        shopname:"Hotel New Sri Saparise ",
        location:"Biriyani,North Indian,Chines",
        image:"img-4.jpg",
        rating:"4.9",
        time:"32 MIN",
        price:"200 for two",
        offer: "50% off | Use WELCOME 50"
    }
    
]
let home=document.querySelector(".container");
let card=document.createElement("div");
card.classList.add("row");
home.appendChild(card);
details.forEach(list => {

    let cards=document.createElement("div");
    cards.classList.add("col");
    card.appendChild(cards);
    
    let content=document.createElement("div");
    content.classList.add("col-card");
    cards.appendChild(content);
  
      let img=document.createElement("img");
    img.src=list.image;
    content.appendChild(img);

    let head=document.createElement("h3");
    content.appendChild(head);
    head.innerHTML=list.shopname;

    let location=document.createElement("p");
    content.appendChild(location);
    location.innerHTML=list.location;

    let ratingall=document.createElement("div");
    ratingall.classList.add("rating");
    content.appendChild(ratingall);
    
    

    let rating=document.createElement("p");
    
    
    ratingall.appendChild(rating);
    rating.innerHTML=list.rating;
    rating.style.color="#fff"

    let iconstar=document.createElement("span");
    iconstar.setAttribute("class","fa fa-star");
    rating.appendChild(iconstar);

    if(list.rating>4){
        rating.style.backgroundColor="green"
    }
    else{
        rating.style.backgroundColor="red"
    }

    let before=document.createElement("span");
    ratingall.appendChild(before);
    before.innerHTML=".";
    before.style.fontSize="xx-large";

    let time=document.createElement("p");
    ratingall.appendChild(time);
    time.innerHTML=list.time;

    let after=document.createElement("span");
    ratingall.appendChild(after);
    after.innerHTML=".";
    after.style.fontSize="xx-large";

    let price=document.createElement("p");
    ratingall.appendChild(price);
    price.innerHTML=list.price;

    let offer=document.createElement("p");
    content.appendChild(offer);
    offer.innerHTML=list.offer;

    let items=document.createElement("div");
    items.classList.add("items");
    content.appendChild(items);
   
    let icon1=document.createElement("span");
    icon1.setAttribute("class","fa fa-minus");
    items.appendChild(icon1);

    let item=document.createElement("input");
    item.classList.add("text")
    item.setAttribute("type","text");
    item.setAttribute("value","0");
    items.appendChild(item);
    

    let icon2=document.createElement("div");
    icon2.setAttribute("class","fa fa-plus");
    items.appendChild(icon2);
    
    var itemval=parseInt(item.value);
    icon1.addEventListener("click",function(){
    if(item.value>0){
        
    item.value=--itemval;
    }
    })
  
    icon2.addEventListener("click",function(){
    item.value=++itemval;  
  })
    
});



 