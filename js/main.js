// MOBILE NAVIGATION

const hamburger = document.querySelector('.hamburger');
const mobileNavigation = document.querySelector('.mobile-navigation');
const mobileNavClose = document.querySelector('.mobile-nav-close');
hamburger.addEventListener('click', (e) => {
	hamburger.classList.add('hide');
	mobileNavigation.classList.remove('hide');
});

mobileNavClose.addEventListener('click', () => {
	hamburger.classList.remove('hide');
	mobileNavigation.classList.add('hide');
});
