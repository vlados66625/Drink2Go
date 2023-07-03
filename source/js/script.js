let navPage = document.querySelector('.header__navigation-page');
let navToggle = document.querySelector('.navigation-user__toggle');

navPage.classList.remove('header-top__main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navPage.classList.contains('navigation-page--closed')) {
    navPage.classList.remove('navigation-page--closed');
    navPage.classList.add('navigation-page--opened');
    navToggle.classList.remove('navigation-user__toggle--closed');
    navToggle.classList.add('navigation-user__toggle--opened');
  } else {
    navPage.classList.add('navigation-page--closed');
    navPage.classList.remove('navigation-page--opened');
    navToggle.classList.add('navigation-user__toggle--closed');
    navToggle.classList.remove('navigation-user__toggle--opened');
  }
});
