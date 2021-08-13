import '../scss/stylesheet.scss';

// import modules

import HeroImageSlider from './modules/frontend/HeroImageSlider';
import HamburgerMenu from './modules/frontend/HamburgerMenu';
import TestimonialsSlider from './modules/frontend/TestimonialsSlider';
import Main from './modules/frontend/Main';
import CustomRoomsMeta from '../../inc/customroomsmeta/js/modules/front-end/CustomRoomsMeta';

// instantiate module classes
let heroImageSlider;
let hamburgerMenu;
let testimonialsSlider;
let main;
let customRoomsMeta;

const hompage = document.querySelector(".home");

if(hompage) {
    heroImageSlider = new HeroImageSlider();
    testimonialsSlider = new TestimonialsSlider();
}

hamburgerMenu = new HamburgerMenu();
main  = new Main();

// include front-end init
customRoomsMeta = new CustomRoomsMeta();