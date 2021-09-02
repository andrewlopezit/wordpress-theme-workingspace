import '../scss/stylesheet.scss';

// import modules

import HeroImageSlider from './modules/frontend/HeroImageSlider';
import HamburgerMenu from './modules/frontend/HamburgerMenu';
import TestimonialsSlider from './modules/frontend/TestimonialsSlider';
import Main from './modules/frontend/Main';
import CustomRoomsMeta from '../../inc/customroomsmeta/js/modules/front-end/CustomRoomsMeta';
import CustomMapsMeta from '../../inc/custommapsmeta/js/modules/front-end/CustomMapsMeta';

// instantiate module classes
let heroImageSlider;
let hamburgerMenu;
let testimonialsSlider;
let main;
let customRoomsMeta;
let customMapsMeta;

const hompage = document.querySelector(".home");

if(hompage) {
    heroImageSlider = new HeroImageSlider();
}

hamburgerMenu = new HamburgerMenu();
main  = new Main();
testimonialsSlider = new TestimonialsSlider();


// include front-end init
customRoomsMeta = new CustomRoomsMeta();
customMapsMeta = new CustomMapsMeta();
