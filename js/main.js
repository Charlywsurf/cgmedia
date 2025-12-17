const buttOn = document.querySelector(".logo-toggle");
const navMenu = document.querySelector(".nav-bar");

buttOn.addEventListener("click", () => {
  navMenu.classList.toggle("visible");
});

// funcion detecta ancho ventana

window.addEventListener("resize", function () {
  let nuevoAncho = window.innerWidth;
  console.log(`La ventana ha cambiado de tamaño a: ${nuevoAncho}px`);

  if (nuevoAncho < 768 && nuevoAncho > 660) {
var swiper = new Swiper(".mySwiper0", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
    // console.log(`ahora sliDes es = a ${sliDes}`);
  } else if (nuevoAncho < 660) {
var swiper = new Swiper(".mySwiper0", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
  }
  else {
var swiper = new Swiper(".mySwiper0", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
  }})



//  Initialize Swiper



// -----------------------------------

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2100,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 2200,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper3", {
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 2300,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
