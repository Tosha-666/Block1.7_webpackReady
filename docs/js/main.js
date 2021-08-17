const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1.3,
  spaceBetween: 16,
  watchOverflow: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.3,
      spaceBetween: 16
    },
    // when window width is >= 480px
    576: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2.6,
      spaceBetween: 24
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    1120: {
      slidesPerView: 4,
      spaceBetween: 32
      
    }
  }
});


