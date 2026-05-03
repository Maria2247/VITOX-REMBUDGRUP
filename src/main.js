import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import './css/styles.css';
import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// LOAD MORE

const loadMoreBtn = document.querySelector('#load-more');
const allProjects = document.querySelectorAll('.projects-item');
let visibleCount = 2;

const showProjects = () => {
  allProjects.forEach((item, index) => {
    if (index < visibleCount) {
      item.classList.add('is-visible');
    }
  });

  if (visibleCount >= allProjects.length) {
    loadMoreBtn.classList.add('is-hidden');
  }
};

showProjects();

loadMoreBtn.addEventListener('click', () => {
  visibleCount += 2;
  showProjects();
});

window.dispatchEvent(new Event('resize'));

// SWIPER
const projectSliders = document.querySelectorAll('.projects-item');

projectSliders.forEach((item, index) => {
  const swiperEl = item.querySelector('.swiper');
  if (!swiperEl) return;

  new Swiper(swiperEl, {
    modules: [Navigation, Pagination, EffectFade],
    speed: 600,
    effect: 'fade',
    slidesPerView: 1,
    fadeEffect: {
      crossFade: true,
    },
    rewind: true,
    navigation: {
      nextEl: item.querySelector('.swiper-button-next'),
      prevEl: item.querySelector('.swiper-button-prev'),
    },
    pagination: {
      el: item.querySelector('.swiper-pagination'),
      type: 'bullets',
      clickable: true,
    },
  });
});

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
