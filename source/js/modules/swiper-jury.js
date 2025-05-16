import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const jurySwiper = new Swiper('.jury__container', {
  modules: [Navigation],
  speed: 600,
  loop: true,
  direction: 'horizontal',
  navigation: {
    nextEl: '.jury__button--next',
    prevEl: '.jury__button--prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
      simulateTouch: false,
    },
  }
});

jurySwiper.init();
