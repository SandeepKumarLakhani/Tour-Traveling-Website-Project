let menu=document.querySelector('#menu-btn');
let navbar=document.querySelector('.header.navbar');

menu.onclick=()=>{
    menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};
window.onscroll=()=>{
    menu.classList.remove('fa-times');
   navbar.classList.remove('active');
};
var swiper = new Swiper(".home-slider", {
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".reviews-slider", {
    loop:true,
    spaceBetween:20,
    autoHeight:true,
    grabCursor:true,
    breakpoints: {
    640: {
      slidesPerView: 2,
      
    },
    768: {
      slidesPerView: 4,
      
    },
    1024: {
      slidesPerView: 5,
      
    },
  },
});
  