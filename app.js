const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const cartitem = []; //function addto cart

function display(mydata){
  let i = mydata.map(function(value,index){
    return `<article class="menu-item">
    <img src=${value.img} alt="menu item" class="photo" />
    <div class="item-info">
      <header>
        <h4>${value.title}</h4>
        <h4 class="price">${value.price}</h4>
      </header>
      <p class="item-text">
       ${value.desc}
      </p>
      <button type="button" class="filter-btn" data-id="all" onclick="addtocart(${index})" >Add To Cart </button>
    </div>
  </article>`
  })

document.getElementById("menu").innerHTML = i.join("");


}

display(menu);

let categories = menu.reduce(function(pre,value){
  if(pre.includes(value.category) == false)
  {
    pre.push(value.category)
  }
  return pre;
},[])

categories.push("All");

let b = categories.map(function(value){
  return `<button type="button" class="filter-btn" data-id="all" onclick="filtercategory('${value}')" >${value}</button>`
})

document.getElementById("btn").innerHTML = b.join("");



function filtercategory(category){
  let finfcategory = menu.filter(function(value){
    return value.category == category || category == "All";
  })

  display(finfcategory);
}


function lowtohigh(){
  menu.sort(function(a,b){
    return a.price - b.price;
  })
  display(menu);
  
}

function hightolow(){
  menu.sort(function(a,b){
    return b.price - a.price;
  })
  display(menu);
}

function atoz(){
  menu.sort(function(a,b){
    if(a.title > b.title){
      return 1;
    }
    else{
      return -1;
    }
  })

  display(menu);
}

function ztoa(){
  menu.sort(function(a,b){
    if(a.title > b.title){
      return -1;
    }
    else{
      return 1;
    }
  })

  display(menu);
}

function searchvalue(){

  let search = document.getElementById("search").value;
  let p = menu.filter(function(value){
    return value.title.toLowerCase().includes(search.toLowerCase());
  }) 
  display(p);
}

function addtocart(index)
{
  const selectedproduct = menu[index];


  let productexit = cartitem.find(function(value){
    return value.item.id == selectedproduct.id;
  })

  if(!productexit)
  {
    cartitem.push({item:selectedproduct,count:1});
  }
  else
  {
    productexit.count = productexit.count+1;
  }
  
  console.log(cartitem);
  document.getElementById("count").innerHTML = cartitem.length;
}
