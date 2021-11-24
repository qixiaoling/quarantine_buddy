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
//Tab: first remove all the active classList, then add based on the dataset.id
const value = document.querySelector(".our-value");
const valueBtns = document.querySelectorAll(".value-btn");
const contents = document.querySelectorAll(".value-content");
value.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
        valueBtns.forEach(function (btn) {
            btn.classList.remove("active");
        })
        e.target.classList.add("active");


        contents.forEach(function (content) {
            content.classList.remove("active");
        })
        const element = document.getElementById(id);
        element.classList.add("active");
    }
})

//review
// local reviews data
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

const body = document.querySelector(".review-body");


let counter = 0;

window.addEventListener("DOMContentLoaded", function () {
    showPerson(counter);
});



function showPerson(index) {
    const profile = reviews[index];

    body.innerHTML = `<div class="review-img-container">
        <img class="review-img"
             src=${profile.img}
        alt=${profile.name}/>
    </div>
    <h4 class="review-name">${profile.name}</h4>
    <p class="review-text">${profile.text}
    </p>
    <p class="review-job-title">${profile.job}</p>
    <div class="review-btn-container">
        <button class="prev-btn">
            <i class="fas fa-chevron-left"></i>
        </button>
        <button class="next-btn">
            <i class="fas fa-chevron-right"></i>
        </button>
    </div>`

    const nextBtn = document.querySelector(".next-btn");
    nextBtn.addEventListener("click", nextPerson);
    const prevBtn = document.querySelector(".prev-btn");
    prevBtn.addEventListener("click", prevPerson);


}
function nextPerson(){
    counter++;
    if(counter > reviews.length-1){
        counter = 0;
    }
    showPerson(counter);
}
function prevPerson(){
    counter--;
    if(counter < 0){
        counter = reviews.length-1;
    }
    showPerson(counter);
}

//***************** Modal Section *************************/
const modalSection = document.querySelector(".modal-section")

window.addEventListener("DOMContentLoaded", showModal);



function showModal(){
    setTimeout(()=>{
        modalSection.classList.add("modal-active");
    }, 3000);

    const modalCloseBtn= document.querySelector(".modal-close-btn");
    modalCloseBtn.addEventListener("click", function(){
        modalSection.classList.remove("modal-active")
        console.log("hi am modal");
    })
}
//***************** Questions Section *************************/
//***************** Gallery Section *************************/

//***************** Menu Section *************************/



