
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

const btns = document.querySelectorAll(".question-btn");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const element = e.currentTarget.parentElement.parentElement;
        element.classList.toggle("show-text");
    })
})