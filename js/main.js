const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');
menuBtn.addEventListener('click', ()=> {
    menuMobile.classList.toggle('menu--open')
});

const swiperOne = new Swiper('.feedback__slider', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },
  });

  const swiperTwo = new Swiper('.sertificates__slider', {
   
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
  
    pagination: {
      el: '.swiper-pagination',

    },

  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 2,
    },
    360: {
      slidesPerView: 1,
    }
  },
});
// Get all accordion items
const accordionItems = document.querySelectorAll('.accordion__item');

// Add click event listener to each accordion item
accordionItems.forEach(function (accordionItem) {
  const accordionTitle = accordionItem.querySelector('.accordion__title');
  const accordionText = accordionItem.querySelector('.accordion__text');

  accordionTitle.addEventListener('click', function () {
    // Toggle the active class for the clicked accordion item
    accordionTitle.classList.toggle('accordion__title--active');

    // Toggle visibility for the accordion text
    accordionText.classList.toggle('accordion__text--visible');

    // Update the max-height style to show or hide the text smoothly
    if (accordionText.classList.contains('accordion__text--visible')) {
      accordionText.style.maxHeight = accordionText.scrollHeight + 'px';
    } else {
      accordionText.style.maxHeight = null;
    }
  });
});