import 'intl-tel-input/build/css/intlTelInput.css';
import '../scss/stylesheet.scss';


// import modules

import HeroImageSlider from './modules/frontend/HeroImageSlider';
import HamburgerMenu from './modules/frontend/HamburgerMenu';
import TestimonialsSlider from './modules/frontend/TestimonialsSlider';
import Main from './modules/frontend/Main';
import Posts from './modules/frontend/Posts';
import RequestForm from './modules/frontend/RequestForm';
import Page from './modules/frontend/Page';
import Modal from './modules/frontend/Modal';
import SearchPage from './modules/frontend/SearchPage';
import Auth from './modules/frontend/Auth';
import Heart from './modules/frontend/Heart';
import WorkingspacesMaps from './modules/frontend/WorkingspacesMaps';

import CustomRoomsMeta from '../../inc/customroomsmeta/js/modules/front-end/CustomRoomsMeta';

// instantiate module classes
let heroImageSlider;
let hamburgerMenu;
let testimonialsSlider;
let main;
let customRoomsMeta;
let posts;
let requestForm;
let page;
let modal;
let searchPage;
let auth;
let heart;
let workingspacesMaps;

const hompage = document.querySelector(".home");

if(hompage) {
    heroImageSlider = new HeroImageSlider();
}

hamburgerMenu = new HamburgerMenu();
main  = new Main();
testimonialsSlider = new TestimonialsSlider();
posts = new Posts();
requestForm = new RequestForm();
page = new Page();
modal = new Modal();
searchPage = new SearchPage();
auth = new Auth();
heart = new Heart();
workingspacesMaps = new WorkingspacesMaps();

// include front-end init
customRoomsMeta = new CustomRoomsMeta();