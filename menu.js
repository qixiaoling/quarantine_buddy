//Navbar: by clicking the hamburger menu, one will add the classList to the body.
//when body has the "nav-open" class, the hidden nav will translate back to 0 and show itself.
//by clicking any of the link, the classList on the body will be removed.


const nav_toggle = document.querySelector(".nav-toggle");
const nav_links = document.querySelectorAll(".nav-link");

nav_toggle.addEventListener("click", function () {
    document.body.classList.toggle("nav-open");
})

nav_links.forEach(function (link) {
    link.addEventListener("click", function () {
        document.body.classList.remove("nav-open");
    })
})
const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./img/menu-img/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./img/menu-img/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./img/menu-img/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./img/menu-img/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./img/menu-img/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./img/menu-img/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./img/menu-img/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./img/menu-img/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./img/menu-img/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "quarantine Jelly",
        category: "Jelly-things",
        price: 16.99,
        img: "./img/menu-img/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];
const btnSection = document.querySelector(".menu-btn-container");

const menuSection = document.querySelector(".menu-section-center");
window.addEventListener("DOMContentLoaded", function(){
    loadMenuItems(menu);
    loadMenuBtns();
})

function loadMenuItems(menus){
    let menuItems = menus.map(function(menuItem) {
        return `<article class="menu-item" data-id=${menuItem.category}>
      <img src=${menuItem.img} alt=${menuItem.title} class="photo" />
      <div class="item-info">
        <div class="item-title">
          <h4>${menuItem.title}</h4>
          <h4 class="price">$ ${menuItem.price}</h4>
        </div>
        <p class="item-text">
          ${menuItem.desc}
        </p>
      </div>
    </article>`;
    })
    menuItems = menuItems.join("");
    menuSection.innerHTML = menuItems;
}
function loadMenuBtns(){
  const categories = menu.reduce(function(values, menuItem){
      if(!values.includes(menuItem.category)){
          values.push(menuItem.category);
      }
      return values;
  }, ["all"]);

  let btns = categories.map(function(category){
      return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>
`});
  btns = btns.join("");/*John used const and directly .join("")*/
  btnSection.innerHTML = btns;
/*filtering*/
  const categoryBtns = btnSection.querySelectorAll(".filter-btn");
  categoryBtns.forEach(function(btn){
      btn.addEventListener("click", function(e){
          const targetCategory = e.currentTarget.dataset.id;
          const selectedMenuArray =  menu.filter(function(menuItem){
              if(menuItem.category === targetCategory){
                  return menuItem;
              }
          })
          if(targetCategory === "all"){
              loadMenuItems(menu);
          }else {
              loadMenuItems(selectedMenuArray);
          }

      })
  })
}
