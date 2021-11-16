
//Navbar: by clicking the hamburger menu, one will add the classList to the body.
//when body has the "nav-open" class, the hidden nav will translate back to 0 and show itself.
//by clicking any of the link, the classList on the body will be removed.
const nav_toggle = document.querySelector(".nav-toggle");
const nav_links = document.querySelectorAll(".nav-link");

nav_toggle.addEventListener("click", function(){
    document.body.classList.toggle("nav-open");
})

nav_links.forEach(function(link){
    link.addEventListener("click", function(){
        document.body.classList.remove("nav-open");
    })
})
//Tab: first remove all the active classList, then add based on the dataset.id
const value = document.querySelector(".our-value");
const valueBtns = document.querySelectorAll(".value-btn");
const contents = document.querySelectorAll(".value-content");
value.addEventListener("click", function(e){
    const id = e.target.dataset.id;
    if(id) {
        valueBtns.forEach(function(btn){
            btn.classList.remove("active");
        })
        e.target.classList.add("active");


        contents.forEach(function(content){
            content.classList.remove("active");
        })
        const element = document.getElementById(id);
        element.classList.add("active");
    }
})


