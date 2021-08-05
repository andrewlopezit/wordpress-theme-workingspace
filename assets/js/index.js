import '../scss/stylesheet.scss';

// import modules
import HeroImageSlider from './modules/frontend/HeroImageSlider';
import HamburgerMenu from './modules/frontend/HamburgerMenu';
import TestimonialsSlider from './modules/frontend/TestimonialsSlider';
import Main from './modules/frontend/Main';

// instantiate module classes
let heroImageSlider;
let hamburgerMenu;
let testimonialsSlider;
let main;

const hompage = document.querySelector(".home");

if(hompage) {
    heroImageSlider = new HeroImageSlider();
    testimonialsSlider = new TestimonialsSlider();
}

hamburgerMenu = new HamburgerMenu();
main  = new Main();