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