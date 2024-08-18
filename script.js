const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grapCursor: true,
    spaceBetween: 30,
    slidesPerView: 3,
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });