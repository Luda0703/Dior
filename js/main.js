const swiperTop = new Swiper('.top__swiper', {
    effect: 'fade',

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

  });

  const swiperAbout = new Swiper(".about__slider", {
    slidesPerView: 3.3,
    spaceBetween: 20,
    freeMode: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  })