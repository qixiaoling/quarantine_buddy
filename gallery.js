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

const prevBtn = document.querySelector(".gallery-prev-btn");
const nextBtn = document.querySelector(".gallery-next-btn");

const slides = document.querySelectorAll(".slide");

//index (programmed) starts from 0
slides.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`;
})

let counter = 0;
nextBtn.addEventListener("click", function(){
    counter++;
    translateX();
})
prevBtn.addEventListener("click", function(){
    counter --;
    translateX();
})
function translateX () { //everytime you click, that is 100% to the left
    if(counter<slides.length-1) {
        nextBtn.style.display = "block";
    }else {
        nextBtn.style.display = "none";
    }

    if(counter>0) {
        prevBtn.style.display = "block";
    }else {
        prevBtn.style.display = "none";
    }
    slides.forEach(function(slide) {
      slide.style.transform = `translateX(-${counter* 100}%)`
    })
}