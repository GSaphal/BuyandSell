var swiper = new Swiper(".featured-slider", {
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    991: {
      slidesPerView: 3,
      centeredSlides: true
    },
    768: {
      slidesPerView: 2,
      centeredSlides: true
    },
    640: {
      slidesPerView: 1,
      centeredSlides: false
    },
    320: {
      slidesPerView: 1,
      centeredSlides: false
    }
  }
});
