const btns = document.querySelectorAll(".question-btn");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const element = e.currentTarget.parentElement.parentElement;
        element.classList.toggle("show-text");
    })
})