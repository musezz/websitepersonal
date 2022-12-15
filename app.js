const menu = document.querySelector('#mobile-menu')
const menulink = document.querySelector('.navbar__menu')
const navlogo = document.querySelector('#navbar__logo')


menu.mobileMenu = () => {
menu.classList.toggle('is-active');
menulinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

