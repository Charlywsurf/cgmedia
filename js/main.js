const buttOn = document.querySelector(".logo-toggle");
const navMenu =document.querySelector(".nav-bar")

buttOn.addEventListener("click", () => {
    navMenu.classList.toggle("visible");
});

