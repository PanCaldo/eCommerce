const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerGroup: 1,
    spaceBetween: 32,
    slidesPerView: 3,
    centeredSlides: true, 
    freeMode: true,
    
});
  
