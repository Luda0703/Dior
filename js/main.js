const swiperTop = new Swiper('.top__swiper', {
    effect: 'fade',

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: ".swiper-pagination",
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

  });

  const swiperAbout = new Swiper(".about__slider", {
    slidesPerView: 4,
    freeMode: true,

    breakpoints: {
        520: {
          spaceBetween: 10,
        },

      },

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
