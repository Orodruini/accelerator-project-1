import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const reviewsSwiper = new Swiper('.reviews__slider', {
  modules: [Navigation],
  speed: 600,
  direction: 'horizontal',
  slidesPerView: 1,
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },
});

reviewsSwiper.init();
