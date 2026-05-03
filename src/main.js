import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import './css/styles.css';
import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// SWIPER
const projectSliders = document.querySelectorAll('.project-item');

projectSliders.forEach(item => {
  const container = item.querySelector('.swiper');
  const nextBtn = item.querySelector('.swiper-button-next');
  const prevBtn = item.querySelector('.swiper-button-prev');

  new Swiper(container, {
    modules: [Navigation, Pagination, EffectFade],
    speed: 600,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    rewind: true,
    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn,
    },
    pagination: {
      el: item.querySelector('.swiper-pagination'),
      type: 'bullets',
      clickable: true,
    },
  });
});

// swiper.allowSlideNext(true);
// swiper.allowSlidePrev(true);
// swiper.allowTouchMove(true);

// ACCORDION

document.addEventListener('DOMContentLoaded', () => {
  new Accordion('.accordion-container', {
    openOnInit: [0],
    showMultiple: false,
  });
});

// BURGER MENU
const burgerBtn = document.getElementById('burger-btn');
const decorDots = document.getElementsByClassName('.nav-dots');
const openMenu = document.getElementById('nav-menu');
const closeBtn = document.getElementById('close-btn');
const navLink = document.querySelectorAll('.nav-item a');

burgerBtn.addEventListener('click', () => {
  openMenu.classList.add('is-open');
  closeBtn.classList.add('is-open');
  decorDots.classList.add('is-open');
});

function closeMobileNav(e) {
  openMenu.classList.remove('is-open');
  closeBtn.classList.remove('is-open');
}

closeBtn.addEventListener('click', closeMobileNav);

navLink.forEach(link => {
  link.addEventListener('click', closeMobileNav);
});

openMenu.addEventListener('click', e => {
  if (e.target === openMenu) {
    closeMobileNav();
  }
});
