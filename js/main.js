const swiperTop = new Swiper('.top__swiper', {
    effect: 'fade',

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },

  });

  const swiperAbout = new Swiper(".about__slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  })

   document.querySelectorAll('.accardeon__triger').forEach((item) => {
    item.addEventListener('click', () => {
      item.parentNode.classList.toggle('accardeon__item--active')
    })
  })
