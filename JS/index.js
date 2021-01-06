
    const hamburger = document.querySelector(".hamburger");
    const iconBurger = document.querySelector(".fa-bars");
    const iconX = document.querySelector(".fa-times");
    const row = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function(){
        iconBurger.classList.toggle("show");
        iconX.classList.toggle("show");
        row.classList.toggle("show");
    })



