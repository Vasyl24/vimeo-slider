import Swiper from 'swiper';

import 'swiper/swiper-bundle.min.css';
// // import { Navigation } from 'swiper';

// // Swiper.use([Navigation]);

// const swiper = new Swiper('#swiper-1', {
//   direction: 'horizotal',
//   loop: true,
//   width: 600,

//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

// // swiper.slideNext();

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  observer: true,
  observeParents: true,
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  width: 600,
});
swiper.update();

export { swiper };
