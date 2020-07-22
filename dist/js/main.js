// Select DOM Items
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-Branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial Sate Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

const toggleMenu = () => {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('close');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach((item) => item.classList.add('show'));

    // Set Menu State
    showMenu = !showMenu;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('close');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach((item) => item.classList.remove('show'));

    // Set Menu State
    showMenu = !showMenu;
  }
};
