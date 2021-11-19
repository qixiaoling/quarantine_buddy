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