import 'intl-tel-input/build/css/intlTelInput.css';
import '../scss/stylesheet.scss';


// import modules

import HeroImageSlider from './modules/frontend/HeroImageSlider';
import HamburgerMenu from './modules/frontend/HamburgerMenu';
import TestimonialsSlider from './modules/frontend/TestimonialsSlider';
import Main from './modules/frontend/Main';
import Posts from './modules/frontend/Posts';
import RequestForm from './modules/frontend/RequestForm';

import CustomRoomsMeta from '../../inc/customroomsmeta/js/modules/front-end/CustomRoomsMeta';
import CustomMapsMeta from '../../inc/custommapsmeta/js/modules/front-end/CustomMapsMeta';

// instantiate module classes
let heroImageSlider;
let hamburgerMenu;
let testimonialsSlider;
let main;
let customRoomsMeta;
let customMapsMeta;
let posts;
let requestForm;

const hompage = document.querySelector(".home");

if(hompage) {
    heroImageSlider = new HeroImageSlider();
}

hamburgerMenu = new HamburgerMenu();
main  = new Main();
testimonialsSlider = new TestimonialsSlider();
posts = new Posts();
requestForm = new RequestForm();


// include front-end init
customRoomsMeta = new CustomRoomsMeta();
customMapsMeta = new CustomMapsMeta();
