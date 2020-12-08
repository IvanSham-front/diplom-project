const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetweenSlides: 20
      },
      1024: {
          slidesPerView: 2,
          spaceBetweenSlides: 20
      },
      1200: {
          slidesPerView: 3,
          spaceBetweenSlides: 20,
          spaceBetween: 37
      }
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })