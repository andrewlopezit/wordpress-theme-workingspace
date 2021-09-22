/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var intl_tel_input_build_css_intlTelInput_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! intl-tel-input/build/css/intlTelInput.css */ "./node_modules/intl-tel-input/build/css/intlTelInput.css");
/* harmony import */ var _scss_stylesheet_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/stylesheet.scss */ "./assets/scss/stylesheet.scss");
/* harmony import */ var _modules_frontend_HeroImageSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/frontend/HeroImageSlider */ "./assets/js/modules/frontend/HeroImageSlider.js");
/* harmony import */ var _modules_frontend_HamburgerMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/frontend/HamburgerMenu */ "./assets/js/modules/frontend/HamburgerMenu.js");
/* harmony import */ var _modules_frontend_TestimonialsSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/frontend/TestimonialsSlider */ "./assets/js/modules/frontend/TestimonialsSlider.js");
/* harmony import */ var _modules_frontend_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/frontend/Main */ "./assets/js/modules/frontend/Main.js");
/* harmony import */ var _modules_frontend_Posts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/frontend/Posts */ "./assets/js/modules/frontend/Posts.js");
/* harmony import */ var _modules_frontend_RequestForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/frontend/RequestForm */ "./assets/js/modules/frontend/RequestForm.js");
/* harmony import */ var _modules_frontend_Page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/frontend/Page */ "./assets/js/modules/frontend/Page.js");
/* harmony import */ var _modules_frontend_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/frontend/Modal */ "./assets/js/modules/frontend/Modal.js");
/* harmony import */ var _inc_customroomsmeta_js_modules_front_end_CustomRoomsMeta__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../inc/customroomsmeta/js/modules/front-end/CustomRoomsMeta */ "./inc/customroomsmeta/js/modules/front-end/CustomRoomsMeta.js");
/* harmony import */ var _inc_custommapsmeta_js_modules_front_end_CustomMapsMeta__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../inc/custommapsmeta/js/modules/front-end/CustomMapsMeta */ "./inc/custommapsmeta/js/modules/front-end/CustomMapsMeta.js");

 // import modules










 // instantiate module classes

let heroImageSlider;
let hamburgerMenu;
let testimonialsSlider;
let main;
let customRoomsMeta;
let customMapsMeta;
let posts;
let requestForm;
let page;
let modal;
const hompage = document.querySelector(".home");

if (hompage) {
  heroImageSlider = new _modules_frontend_HeroImageSlider__WEBPACK_IMPORTED_MODULE_2__["default"]();
}

hamburgerMenu = new _modules_frontend_HamburgerMenu__WEBPACK_IMPORTED_MODULE_3__["default"]();
main = new _modules_frontend_Main__WEBPACK_IMPORTED_MODULE_5__["default"]();
testimonialsSlider = new _modules_frontend_TestimonialsSlider__WEBPACK_IMPORTED_MODULE_4__["default"]();
posts = new _modules_frontend_Posts__WEBPACK_IMPORTED_MODULE_6__["default"]();
requestForm = new _modules_frontend_RequestForm__WEBPACK_IMPORTED_MODULE_7__["default"]();
page = new _modules_frontend_Page__WEBPACK_IMPORTED_MODULE_8__["default"]();
modal = new _modules_frontend_Modal__WEBPACK_IMPORTED_MODULE_9__["default"](); // include front-end init

customRoomsMeta = new _inc_customroomsmeta_js_modules_front_end_CustomRoomsMeta__WEBPACK_IMPORTED_MODULE_10__["default"]();
customMapsMeta = new _inc_custommapsmeta_js_modules_front_end_CustomMapsMeta__WEBPACK_IMPORTED_MODULE_11__["default"]();

/***/ }),

/***/ "./assets/js/modules/frontend/Api.js":
/*!*******************************************!*\
  !*** ./assets/js/modules/frontend/Api.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const Api = url => {
  class Api {
    constructor(url) {
      this.endpoint = url;
    }

    getWorkingspacesByFilter(filter) {
      let url = `${this.endpoint}/wp-json/wp/v2/workingspaces?${this.getStringFilterUrl(filter)}`;
      return axios__WEBPACK_IMPORTED_MODULE_0___default()(url);
    }

    getPostsByFilter(filter) {
      let url = `${this.endpoint}/wp-json/wp/v2/posts?${this.getStringFilterUrl(filter)}`;
      return axios__WEBPACK_IMPORTED_MODULE_0___default()(url);
    }

    getStringFilterUrl(filter) {
      let url = '';

      for (let key in filter) {
        if (filter.hasOwnProperty(key) && filter[key]) {
          url += `${key}=${filter[key]}&`;
        }
      }

      return url;
    }

  }

  return new Api(url);
};

/* harmony default export */ __webpack_exports__["default"] = (Api);

/***/ }),

/***/ "./assets/js/modules/frontend/HamburgerMenu.js":
/*!*****************************************************!*\
  !*** ./assets/js/modules/frontend/HamburgerMenu.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class HamburgerMenu {
  constructor() {
    // initialize elements variables
    this.$hamburgerMenu = $('#hamburger');
    this.$navigationMenu = $('#menu-navigation');
    this.$headerContainer = $('#header-container'); // init gsap animation

    this.initAnimationHamburgerMenu(); // initialize events function

    this.events();
  }

  get getBackdropHoverProperties() {
    return {
      opacity: 1,
      scale: 1.6,
      duration: 0.25
    };
  }

  get getBackdropExtendProperties() {
    return {
      width: '100vw',
      height: 'auto',
      minHeight: '100vh',
      scale: 1,
      top: 0,
      left: 0,
      translateY: -20,
      translateX: -(($(document).width() - this.$headerContainer.width()) / 2),
      duration: 0.2
    };
  }

  initAnimationHamburgerMenu() {
    // hamburger menu animation
    this.menuNavigationBackdropAnimation = gsap.timeline({
      paused: true
    });

    if (this.isTouchEvent()) {
      this.menuNavigationBackdropAnimation.to(this.$navigationMenu, {
        opacity: 0,
        duration: 0
      }).to(this.$navigationMenu, this.getBackdropExtendProperties).to(this.$navigationMenu, {
        opacity: 1,
        duration: 0.3
      }).to(this.$navigationMenu.find('#header-content'), {
        display: 'inherit',
        opacity: 1,
        duration: 0
      });
    } else {
      this.menuNavigationBackdropAnimation.to(this.$navigationMenu, this.getBackdropHoverProperties).add('middle').to(this.$navigationMenu, this.getBackdropExtendProperties).to(this.$navigationMenu.find('#header-content'), {
        display: 'inherit',
        opacity: 1,
        duration: 0.1
      }).add('end');
    } // hamburger layer animation


    this.hamburgermenuLayerAnimation = gsap.timeline({
      paused: true
    });
    this.hamburgermenuLayerAnimation.to(this.$hamburgerMenu.find('span').eq(1), {
      x: -40,
      opacity: 0,
      duration: 0.1
    }).to(this.$hamburgerMenu.find('span').eq(0), {
      rotate: 45,
      translateY: 10,
      duration: 0.05
    }).to(this.$hamburgerMenu.find('span').eq(2), {
      rotate: -45,
      translateY: -10,
      duration: 0.05
    }, '<');
  }

  events() {
    // hamburger menu animation
    this.$hamburgerMenu.on('mouseover', this.animateInHoverBackdropNavigation.bind(this)).on('mouseout', this.animateOutHoverBackdropNavigation.bind(this));
    this.$hamburgerMenu.on('click', e => {
      const $hamburgerMenu = $(e.target);

      if (!this.$hamburgerMenu.hasClass('is-active')) {
        this.$hamburgerMenu.addClass('is-active');
        this.animateExtendBackdropNavigation();
      } else {
        this.$hamburgerMenu.removeClass('is-active');
        this.animateShringBackdropNavigation();
      }
    });
    $(window).on('resize', () => {
      this.hamburgermenuLayerAnimation.reverse();
      this.menuNavigationBackdropAnimation.reverse();
      this.$hamburgerMenu.removeClass('is-hover is-active');
      this.initAnimationHamburgerMenu();
      this.$navigationMenu.css('left', 'auto');
    });
  }

  isTouchEvent() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }

  animateInHoverBackdropNavigation() {
    if (this.isTouchEvent()) return;
    this.$hamburgerMenu.addClass('is-hover');
    if (!this.$hamburgerMenu.hasClass('is-active')) this.menuNavigationBackdropAnimation.tweenTo("middle");
  }

  animateOutHoverBackdropNavigation() {
    if (this.isTouchEvent()) return;
    this.$hamburgerMenu.removeClass('is-hover');
    if (!this.$hamburgerMenu.hasClass('is-active')) this.menuNavigationBackdropAnimation.reverse();
  }

  animateExtendBackdropNavigation() {
    this.hamburgermenuLayerAnimation.play();

    if (this.isTouchEvent()) {
      this.menuNavigationBackdropAnimation.play();
    } else {
      this.menuNavigationBackdropAnimation.tweenFromTo("middle", "end");
    }
  }

  animateShringBackdropNavigation() {
    this.hamburgermenuLayerAnimation.reverse();

    if (this.isTouchEvent()) {
      this.menuNavigationBackdropAnimation.reverse();
    } else {
      this.menuNavigationBackdropAnimation.tweenFromTo("end", "middle");
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HamburgerMenu);

/***/ }),

/***/ "./assets/js/modules/frontend/HeroImageSlider.js":
/*!*******************************************************!*\
  !*** ./assets/js/modules/frontend/HeroImageSlider.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class HeroImageSlider {
  constructor() {
    // init elements
    this.$heroImageSlider = $('#hero-image-slider');
    this.$items = this.$heroImageSlider.find('.item'); // local variables

    this.displayCntrols = 4;
    this.animationSpeed = 5;
    this.lastIndexActiveItem = 0;
    this.primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color'); // init image slider

    this.initHeroImageSlider(); // init slider animation

    this.initHeroImageSliderAnimation();
    this.events();
  }

  initHeroImageSlider() {
    this.$activeItems = this.$heroImageSlider.find('.item:lt(4)').addClass('is-display');
    this.addClassesActiveItem();
  }

  initHeroImageSliderAnimation() {
    this.heroImageSliderAnimation = gsap.timeline({
      onComplete: () => gsap.delayedCall(this.animationSpeed, () => this.heroImageSliderAnimation.reverse()),
      onReverseComplete: () => this.paginateItem()
    });
    this.heroImageSliderAnimation.to(this.$activeItems, {
      opacity: 1,
      scale: 1,
      ease: 'back',
      stagger: {
        amount: 2,
        ease: 'stepped'
      }
    });
  }

  events() {
    this.$heroImageSlider.on('mouseover', () => this.heroImageSliderAnimation.pause()).on('mouseout', () => this.heroImageSliderAnimation.play());
  }

  paginateItem() {
    this.$items.removeClass(`is-display
             first
             second
             third
             fourth
            `);
    this.heroImageSliderAnimation.reverse();
    this.lastIndexActiveItem = this.$activeItems.last().data('slide');
    const unDisplayItems = this.$heroImageSlider.find(`.item:gt(${this.lastIndexActiveItem}):lt(${this.lastIndexActiveItem + this.displayCntrols})`).get();

    if (this.displayCntrols > unDisplayItems.length) {
      const numberOfElements = this.displayCntrols - unDisplayItems.length;
      const addedUnDisplayItems = this.$heroImageSlider.find(`.item:lt(${numberOfElements})`).get();
      this.$activeItems = $(unDisplayItems.concat(addedUnDisplayItems));
    } else {
      this.$activeItems = $(unDisplayItems);
    }

    this.$activeItems.addClass('is-display');
    this.addClassesActiveItem();
    this.initHeroImageSliderAnimation();
  }

  addClassesActiveItem() {
    for (let i = 0; i < this.$activeItems.length; i++) {
      switch (i) {
        case 0:
          {
            this.$activeItems.eq(i).addClass('first');
          }
          break;

        case 1:
          {
            this.$activeItems.eq(i).addClass('second');
          }
          break;

        case 2:
          {
            this.$activeItems.eq(i).addClass('third');
          }
          break;

        case 3:
          {
            this.$activeItems.eq(i).addClass('fourth');
          }
          break;
      }
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HeroImageSlider);

/***/ }),

/***/ "./assets/js/modules/frontend/Loading.js":
/*!***********************************************!*\
  !*** ./assets/js/modules/frontend/Loading.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Loading = ($loadingContainer, duration = 30) => {
  class Loading {
    start() {
      if (!$loadingContainer) return;
      $loadingContainer.find('.loading#loading').remove();
      $loadingContainer.append(`
            <div class="loading" id="loading">
                <p>Loading</p>
                <div class="loading-bar"></div>
                <span></span>
                <span></span>
                <span></span>
            </div>`);
      this.isDisplayMessage = false;
      this.$loading = $loadingContainer.find('.loading#loading');
      this.initAnimation();
      return this;
    }

    initAnimation() {
      this.dotsAnimation = gsap.timeline({
        repeat: -1
      });
      this.dotsAnimation.to($loadingContainer.find('span'), {
        opacity: 1,
        stagger: {
          amount: 2
        }
      });
      this.loadingbarAnimation = gsap.timeline({
        onComplete: () => this.displayError()
      });
      this.loadingbarAnimation.to($loadingContainer.find('.loading-bar'), {
        width: 70,
        duration: duration
      }).add('end');
    }

    end() {
      this.$loading.remove();
    }

    displayError(message = 'Takes too long to respond, please try again.') {
      if (this.isDisplayMessage) return;
      this.isDisplayMessage = true;
      this.loadingbarAnimation.tweenFromTo('end');
      this.dotsAnimation.kill();
      this.$loading.append(`<p class="error-message">${message}</p>
            <button class="btn retry">Retry</button>`);
    }

    event() {}

  }

  return new Loading($loadingContainer);
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./assets/js/modules/frontend/Main.js":
/*!********************************************!*\
  !*** ./assets/js/modules/frontend/Main.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Main {
  constructor() {
    // initialize elements variables
    this.$heroSectionContainer = $(document).find('.hero-section > .container');
    this.$heroTitle = this.$heroSectionContainer.find('.row > .col > .headline');
    this.$heroSubTitle = this.$heroSectionContainer.find('.row > .col > p'); // init local variable
    // init gsap animation
    // initialize events function
    // init international country code input
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./assets/js/modules/frontend/Maps.js":
/*!********************************************!*\
  !*** ./assets/js/modules/frontend/Maps.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Maps = args => {
  class Maps {
    constructor() {
      var _args$zoom;

      if (!(args !== null && args !== void 0 && args.container)) return;
      this.markers = [];
      const {
        mapbox_public_key,
        mapbox_secret_key
      } = translation_array;
      this.mapboxtSecretToken = mapbox_secret_key;
      this.mapboxPublicToken = mapbox_public_key;
      this.initMap(args === null || args === void 0 ? void 0 : args.center, (_args$zoom = args.zoom) !== null && _args$zoom !== void 0 ? _args$zoom : 10);
    }

    initMap(center, zoom) {
      mapboxgl.accessToken = this.mapboxPublicToken;
      this.map = new mapboxgl.Map({
        container: args.container,
        style: 'mapbox://styles/andrewlopezit/cksbd685j2dud17pav0q5rf5w',
        center: args !== null && args !== void 0 && args.center ? args.center : [121.0, 14.583331],
        zoom: zoom
      });
      return this.map;
    }

    control() {
      this.map.addControl(new mapboxgl.NavigationControl());
      return this;
    }
    /**
     * 
     * @param {*} markers 
     * @returns 
     */


    addMarkers(markers) {
      let coordinates = [];
      markers.forEach(marker => {
        if (marker !== null && marker !== void 0 && marker.geolocation) {
          const template = `<div class="maps-marker places">
                    <div class="background"></div>
                    <img src="${marker.imgSrc}"/></div>`; // create the popup

          const popup = new mapboxgl.Popup().setHTML(`<div class="title">${marker === null || marker === void 0 ? void 0 : marker.title}</div>
                        <p><span>Location: </span>${marker !== null && marker !== void 0 && marker.location ? marker.location : ''}</p>
                        <p><span>Capacity: </span> ${marker !== null && marker !== void 0 && marker.capacity ? marker.capacity : ''}</p>
                        <p><span>Total rooms: </span>${marker !== null && marker !== void 0 && marker.totalRooms ? marker.totalRooms : ''}</p>
                        <p><span>Price range: </span> ${marker !== null && marker !== void 0 && marker.priceRange ? marker.priceRange : ''}</p>
                        `);
          const el = $.parseHTML(template);
          const loc = marker === null || marker === void 0 ? void 0 : marker.geolocation.map(loc => +loc);
          const placeMarker = new mapboxgl.Marker(el[0]).setLngLat(loc).setPopup(popup).addTo(this.map);
          this.markers.push(placeMarker);
        }
      });
      return this;
    }

    fitLocations(locations) {
      const bounds = locations.reduce((bounds, coord) => {
        return bounds.extend(coord);
      }, new mapboxgl.LngLatBounds(locations[0], locations[0]));
      this.map.fitBounds(bounds, {
        padding: 80
      });
      return this;
    }

    get() {
      return this.map;
    }

    getMarkers() {
      return this.markers;
    }

  }

  return new Maps(args);
};

/* harmony default export */ __webpack_exports__["default"] = (Maps);

/***/ }),

/***/ "./assets/js/modules/frontend/Modal.js":
/*!*********************************************!*\
  !*** ./assets/js/modules/frontend/Modal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Modal {
  constructor() {
    this.$modal = $('.modal');
    if (!this.$modal.length) return; // initialize elements variables
    // init local variable
    // init gsap animation
    // initialize events function

    this.events(); // init international country code input
  }

  events() {
    this.$modal.on('click', '.modal-dialog .modal-header button', () => {
      this.$modal.hide();
    });
    this.$modal.on('click', e => {
      const $el = $(e.target);
      if (!$el.hasClass('modal') && $el.attr('role') !== 'dialog') return;
      this.$modal.hide();
    });
    $(window).on('keyup', e => {
      if (!e.key) return;

      switch (e.key.toLowerCase()) {
        case 'escape':
          {
            this.$modal.hide();
            break;
          }
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./assets/js/modules/frontend/Page.js":
/*!********************************************!*\
  !*** ./assets/js/modules/frontend/Page.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Page {
  constructor() {
    this.$heroBackground = $('.image-hero-background'); // Blur background

    this.initHeroBlurBacgkround();
  }

  initHeroBlurBacgkround() {
    if (!this.$heroBackground.length && !this.$heroBackground.data('blur-position')) return;

    const blurHeaderHeroBackgroundByScrollPosition = positionY => {
      if (positionY <= $(window).height()) {
        this.$heroBackground.addClass('has-blur-background');
      } else {
        this.$heroBackground.removeClass('has-blur-background');
      }
    };

    const blurFooterHeroBackgroundByScrollPosition = positionY => {
      if (positionY >= document.documentElement.scrollHeight / 2) {
        this.$heroBackground.addClass('has-blur-background');
      } else {
        this.$heroBackground.removeClass('has-blur-background');
      }
    };

    if (this.$heroBackground.data('blur-position') && this.$heroBackground.data('blur-position') === 'header') blurHeaderHeroBackgroundByScrollPosition(window.scrollY);
    if (this.$heroBackground.data('blur-position') && this.$heroBackground.data('blur-position') === 'footer') blurFooterHeroBackgroundByScrollPosition(window.scrollY);
    $(document).on('scroll', () => {
      if (this.$heroBackground.data('blur-position').includes('header')) {
        blurHeaderHeroBackgroundByScrollPosition(window.scrollY);
      }

      if (this.$heroBackground.data('blur-position').includes('footer')) {
        blurFooterHeroBackgroundByScrollPosition(window.scrollY);
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./assets/js/modules/frontend/Posts.js":
/*!*********************************************!*\
  !*** ./assets/js/modules/frontend/Posts.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./assets/js/modules/frontend/index.js");


class Posts {
  constructor() {
    this.$post = $('.post-list#posts');
    if (!this.$post.length) return;
    this.$postFilterContainer = this.$post.find('.post-list.post-list--filters');
    this.$postContainer = this.$post.find('.inner-container.posts');
    this.$btnViewMore = this.$post.siblings('.action-container.post.view-more');
    this.postFilter; //local variable

    this.siteUrl = translation_array.site_url;
    this.initPostFilter();
    this.events();
  }

  initPostFilter() {
    const $el = this.$postFilterContainer.find('.is-active');
    const filter = {
      cat_name: $el.data('cat-name') === 'all' ? '' : $el.data('cat-name'),
      paged: 1
    };
    this.postFilter = filter;
  }

  events() {
    this.$postFilterContainer.on('click', 'a', e => {
      e.preventDefault();
      const $el = $(e.currentTarget);
      $el.siblings().removeClass('is-active');
      $el.addClass('is-active');
      this.setSiteUrl($el.attr('href'));
      this.postFilter = {
        cat_name: $el.data('cat-name') === 'all' ? '' : $el.data('cat-name'),
        paged: 1
      };
      this.$postContainer.children().remove();
      const load = Object(_index__WEBPACK_IMPORTED_MODULE_0__["loading"])(this.$postContainer).start();
      Object(_index__WEBPACK_IMPORTED_MODULE_0__["api"])(this.siteUrl).getPostsByFilter(this.postFilter).then(result => {
        const {
          data
        } = result;
        load.end();
        this.$postContainer.append(this.postsTemplate(data));
      }).catch(() => {
        load.end();
      });
    });
    this.$btnViewMore.on('click', e => {
      if (!this.$postFilterContainer.length) return;
      e.preventDefault();
      this.postFilter.paged++;
      const load = Object(_index__WEBPACK_IMPORTED_MODULE_0__["loading"])(this.$postContainer).start();
      Object(_index__WEBPACK_IMPORTED_MODULE_0__["api"])(this.siteUrl).getPostsByFilter(this.postFilter).then(result => {
        const {
          data
        } = result;
        load.end();

        if (data.length < 1) {
          this.$btnViewMore.hide();
          return;
        }

        this.$postContainer.append(this.postsTemplate(data));
      }).catch(() => {
        load.end();
      });
    });
  }

  setSiteUrl(params) {
    const url = window.location.href.split('?');
    window.history.pushState("", "", url[0] + params);
    return;
  }

  postsTemplate(data) {
    let template = '';

    if (!data || data.length < 1) {
      return `<p>No items match your criteria.</p>`;
    }

    data.forEach(val => {
      var _val$post_content_tri;

      template += `<div class="item post card border-top-left border--post">
                            <img class="card-img-top" src="${val === null || val === void 0 ? void 0 : val.featured_image}" alt="">
                            <div class="card-body">
                                <div class="author-container">
                                    <i class="fas fa-book-reader"></i>
                                    <div class="author-details">
                                        <span>
                                            <a href="http://localhost:8888/wordpress-development" title="Visit admin’s website" rel="author external">admin</a>                            </span>,
                                        <span>
                                            <small>September 09 2021</small>
                                        </span>
                                    </div>
                                </div>

                                <h5>
                                    <a href="${val === null || val === void 0 ? void 0 : val.permalink}">${val === null || val === void 0 ? void 0 : val.post_title}</a>
                                </h5>

                                <p>${(_val$post_content_tri = val === null || val === void 0 ? void 0 : val.post_content_trim) !== null && _val$post_content_tri !== void 0 ? _val$post_content_tri : val === null || val === void 0 ? void 0 : val.post_excerpt}</p>

                                <a class="btn text-center" href="${val === null || val === void 0 ? void 0 : val.permalink}">Read more</a>
                            </div>
                        </div>`;
    });
    return template;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Posts);

/***/ }),

/***/ "./assets/js/modules/frontend/RangeSlider.js":
/*!***************************************************!*\
  !*** ./assets/js/modules/frontend/RangeSlider.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const RangeSlider = args => {
  class RangeSlider {
    constructor(args) {
      if (!(args !== null && args !== void 0 && args.container)) return;
      this.$slider = $(args.container); // local variable

      this.width = this.$slider.width();
      this.handle;
      this.handleObj;
      let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 ' + this.width + ' 83');
      this.$slider.html(svg);
      this.$slider.append($('<div>').addClass('active').html(svg.cloneNode(true)));
      this.initSlider();
      this.createLine();
    }

    createLine() {
      this.svgPath = new Proxy({
        x: null,
        y: null,
        b: null,
        a: null
      }, {
        set: (target, key, value) => {
          target[key] = value;

          if (target.x !== null && target.y !== null && target.b !== null && target.a !== null) {
            this.$slider.find('svg').html(this.getPath([target.x, target.y], target.b, target.a, this.width));
          }

          return true;
        },
        get: (target, key) => {
          return target[key];
        }
      });
      this.svgPath.x = this.width / 2;
      this.svgPath.y = 42;
      this.svgPath.b = 0;
      this.svgPath.a = this.width;
    }

    initSlider() {
      var _this$$slider$data;

      this.$slider.slider({
        range: true,
        values: this.$slider.data('values').split(','),
        min: this.$slider.data('min'),
        step: (_this$$slider$data = this.$slider.data('step')) !== null && _this$$slider$data !== void 0 ? _this$$slider$data : 1,
        minRange: this.$slider.data('min-range'),
        max: this.$slider.data('max'),
        create: (event, ui) => {
          const $handle = this.$slider.find('.ui-slider-handle');
          this.$slider.find('.ui-slider-handle').append($('<div />'));
          $(this.$slider.data('value-0')).html(this.$slider.slider('values', 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;'));
          $(this.$slider.data('value-1')).html(this.$slider.slider('values', 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;'));
          $(this.$slider.data('range')).html((this.$slider.slider('values', 1) - this.$slider.slider('values', 0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;'));
          this.setCSSVars(this.$slider);
        },
        start: (event, ui) => {
          this.$slider.addClass('ui-slider-active');
          this.handle = $(ui.handle).data('index', ui.handleIndex);
          this.handlehandleObj = this.$slider.find('.ui-slider-handle');
        },
        change: (event, ui) => {
          this.setCSSVars(this.$slider);
        },
        slide: (event, ui) => {
          let min = this.$slider.slider('option', 'min'),
              minRange = this.$slider.slider('option', 'minRange'),
              max = this.$slider.slider('option', 'max');

          if (ui.handleIndex == 0) {
            if (ui.values[0] + minRange >= ui.values[1]) {
              this.$slider.slider('values', 1, ui.values[0] + minRange);
            }

            if (ui.values[0] > max - minRange) {
              return false;
            }
          } else if (ui.handleIndex == 1) {
            if (ui.values[1] - minRange <= ui.values[0]) {
              this.$slider.slider('values', 0, ui.values[1] - minRange);
            }

            if (ui.values[1] < min + minRange) {
              return false;
            }
          }

          $(this.$slider.data('value-0')).html(this.$slider.slider('values', 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;'));
          $(this.$slider.data('value-1')).html(this.$slider.slider('values', 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;'));
          $(this.$slider.data('range')).html((this.$slider.slider('values', 1) - this.$slider.slider('values', 0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;'));
          this.setCSSVars(this.$slider);
        }
      });
    }

    setCSSVars(slider) {
      let handle = slider.find('.ui-slider-handle');
      slider.css({
        '--l': handle.eq(0).position().left + handle.eq(0).outerWidth() / 2,
        '--r': slider.outerWidth() - (handle.eq(1).position().left + handle.eq(1).outerWidth() / 2)
      });
    }

    getPoint(point, i, a, smoothing) {
      let cp = (current, previous, next, reverse) => {
        let p = previous || current,
            n = next || current,
            o = {
          length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
          angle: Math.atan2(n[1] - p[1], n[0] - p[0])
        },
            angle = o.angle + (reverse ? Math.PI : 0),
            length = o.length * smoothing;
        return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
      },
          cps = cp(a[i - 1], a[i - 2], point, false),
          cpe = cp(point, a[i - 1], a[i + 1], true);

      return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
    }

    getPath(update, before, after, width) {
      let smoothing = .16,
          points = [[0, 42], [before <= 0 ? 0 : before, 42], update, [after >= width ? width : after, 42], [width, 42]],
          d = points.reduce((acc, point, i, a) => i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${this.getPoint(point, i, a, smoothing)}`, '');
      return `<path d="${d}" />`;
    }

  }

  return new RangeSlider(args);
};

/* harmony default export */ __webpack_exports__["default"] = (RangeSlider);

/***/ }),

/***/ "./assets/js/modules/frontend/RequestForm.js":
/*!***************************************************!*\
  !*** ./assets/js/modules/frontend/RequestForm.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var intl_tel_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! intl-tel-input */ "./node_modules/intl-tel-input/index.js");
/* harmony import */ var intl_tel_input__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(intl_tel_input__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _intl_tel_input_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intl-tel-input/utils.js */ "./assets/js/modules/frontend/intl-tel-input/utils.js");
/* harmony import */ var _intl_tel_input_utils_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_intl_tel_input_utils_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);




class RequestForm {
  constructor() {
    // initialize elements variables
    this.$requestForm = $('.request-form#request-form');
    if (!this.$requestForm.length) return;
    this.$formGroup = this.$requestForm.find('.form-group');
    this.$inputDatePicker = this.$formGroup.find('.date-picker');
    this.$formButton = this.$requestForm.find('.form-btn');
    this.$loadingBar = this.$requestForm.find('.loading-bar');
    this.$alertBox = this.$requestForm.find('.alert-box'); // init local variable

    this.assetsDir = translation_array.assets_dir;
    this.siteUrl = translation_array.site_url;
    this.primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
    this.requestForm; //init input datepicker

    this.initDatePicker(); // init gsap animation

    this.initAnimation(); // initialize events function

    this.events();
    this.initRequestForm(); // init international country code input

    this.initIntlTelCountryCodeInput();
  }

  initRequestForm() {
    this.requestForm = {
      isValid: false,
      inputs: this.$requestForm.find('input, textarea, select'),
      inputValidations: []
    };
    this.$formButton.attr('disabled', true);
  }

  initAnimation() {
    this.loadingBarAnimation = gsap.timeline({
      paused: true
    });
    this.alertBoxAnimation = gsap.timeline({
      paused: true,
      onComplete: () => gsap.delayedCall(20, () => {
        this.alertBoxAnimation.reverse();
        this.$alertBox.removeClass('alert-success alert-danger');
      })
    });
    this.loadingBarAnimation.to(this.$loadingBar, {
      width: '99%',
      duration: 2
    });
    this.alertBoxAnimation.to(this.$alertBox, {
      display: 'initial'
    }).to(this.$alertBox, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: 'back'
    });
  }

  events() {
    this.$formGroup.on('keyup change', 'input, select, textarea', e => {
      const $el = $(e.currentTarget);
      if ($el.hasClass('intl-tel-country-code')) return;

      const addClassIsFIllInInput = () => {
        if ($el.hasClass('is-fill')) return;
        $el.addClass('is-fill');
      };

      const removeClassIsFillInInput = () => {
        if (!$el.hasClass('is-fill')) return;
        $el.removeClass('is-fill');
      }; // change label position


      if ($el.val().length) {
        addClassIsFIllInInput();
      } else {
        removeClassIsFillInInput();
      } // validate form


      const isValid = this.isInputValid($el);
      this.checkRequestForm();

      if (!isValid) {
        $el.css('--border-color', '#dc3545');
        return;
      }

      $el.css('--border-color', this.primaryColor);
    });
    this.$formButton.on('click', e => {
      e.preventDefault();
      if (!this.requestForm.isValid) return;
      const requestFormData = this.getRequestFormData();
      this.$formButton.html('submitting');
      this.loadingBarAnimation.play();
      this.$formButton.attr('disabled', true);
      this.submitForm(requestFormData).then(result => {
        this.clearInputs();
        this.loadingBarAnimation.to(this.$loadingBar, {
          width: '100%'
        }).play();
        this.$alertBox.addClass('alert-success').html(`<strong>Well done!</strong> Successfully sent.`);
        this.$formButton.html('Send inquiry');
        this.alertBoxAnimation.play();
      }).catch(() => {
        this.$formButton.attr('disabled', false);
        this.$alertBox.addClass('alert-danger').html(`<strong>Well done!</strong> Oh snap! Change a few things up and try submitting again.`);
        this.alertBoxAnimation.play();
      });
    });
  }

  isInputValid($input) {
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if ($input.attr('required') && !$input.val().length || $input.attr('minlength') && $input.val().length < +$input.attr('minlength') || $input.attr('maxlength') && $input.val().length > +$input.attr('maxlength') || $input.attr('type') === 'email' && !emailPattern.test($input.val()) || $input.attr('type') === 'tel' && !$input.hasClass('is-valid')) {
      return false;
    }

    return true;
  }

  checkRequestForm() {
    this.requestForm.inputValidations = [];
    this.requestForm.inputs.each((i, el) => {
      this.requestForm.inputValidations.push(this.isInputValid($(el)));
    });
    const isFormValid = this.requestForm.inputValidations.every(input => input === true);
    this.requestForm.isValid = isFormValid;
    this.$formButton.attr('disabled', !isFormValid);
  }

  initDatePicker() {
    if (!this.$inputDatePicker.length) return;
    const dateToday = new Date();
    this.$inputDatePicker.datepicker({
      minDate: dateToday
    });
  }

  initIntlTelCountryCodeInput() {
    const $inputTel = $('.intl-tel-country-code');
    const input = $inputTel.get()[0];
    if (!$inputTel.length) return;
    const iti = intl_tel_input__WEBPACK_IMPORTED_MODULE_0___default()(input, {
      initialCountry: "auto",
      customPlaceholder: (selectedCountryPlaceholder, selectedCountryData) => {
        const $label = $(input).parent().siblings('label');
        if (!$label.hasClass('has-tel-label')) $label.addClass('has-tel-label');
        $label.html(`e.g. ${selectedCountryPlaceholder}`);
        return '';
      },
      geoIpLookup: function (callback) {
        $.get('https://ipinfo.io/?token=dd681f7a626544', function () {}, "jsonp").always(function (resp) {
          const countryCode = resp && resp.country ? resp.country : "us";
          callback(countryCode);
        });
      },
      utilsScript: _intl_tel_input_utils_js__WEBPACK_IMPORTED_MODULE_1___default.a
    }); //events

    input.addEventListener("countrychange", e => {
      const countryData = iti.getSelectedCountryData();
      iti.setCountry(countryData.iso2);
      validatedTelNumber(e.currentTarget);
      this.checkRequestForm();
    });
    $(input).on('keyup', e => {
      if (isNaN(e.currentTarget.value)) {
        $(input).val(e.currentTarget.value.replace(/[a-zA-Z]/g, ''));
      }

      const $label = $(input).parent().siblings('label');
      if ($(e.currentTarget).val().length && !$label.hasClass('is-active')) $label.addClass('is-active');
      if (!$(e.currentTarget).val().length) $label.removeClass('is-active');
      validatedTelNumber(e.currentTarget);
    });

    const validatedTelNumber = el => {
      if (!iti.isValidNumber()) {
        $(el).removeClass('is-valid');
      }

      if (iti.isValidNumber()) {
        $(el).addClass('is-valid');
      }
    };
  }

  clearInputs() {
    this.requestForm.inputs.each((i, el) => {
      $(el).val(undefined);
    });
    this.requestForm.inputValidations = [];
    this.requestForm.isValid = false;
    this.$formButton.attr('disabled', true);
  }

  getRequestFormData() {
    let obj = {};
    this.requestForm.inputs.each((i, el) => {
      obj[$(el).attr('name')] = $(el).val();
    });
    return obj;
  }

  submitForm(data) {
    if (!data) return;
    const url = `${this.siteUrl}/wp-json/wp/v2/inquiries`;
    return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(url, data);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RequestForm);

/***/ }),

/***/ "./assets/js/modules/frontend/TestimonialsSlider.js":
/*!**********************************************************!*\
  !*** ./assets/js/modules/frontend/TestimonialsSlider.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class TestimonialsSlider {
  constructor() {
    // init variables
    this.$testimonialSlider = $('#testimonials-slider');
    if (!this.$testimonialSlider.length) return;
    this.$controlsContainer = this.$testimonialSlider.find('.controls');
    this.$controls = this.$controlsContainer.find('span');
    this.$items = this.$testimonialSlider.find('.item'); // init local variable

    this.sliderDuration = 10; // by seconds;

    this.displayControls = 3;
    this.sliderCounter = 0;
    this.controlsHolder;
    this.lastIndexActiveControl = 0;
    this.isAlreadyInit = false; // init slider

    this.initActiveSlider(); //init slider

    this.initSliderAnimation();
  }

  initActiveSlider() {
    this.$testimonialSlider.find('.item').first().addClass('is-active'); // init slider controls

    this.$testimonialSlider.find(`.controls > span:lt(${this.displayControls})`).addClass('is-display');
    this.controlsHolder = this.$testimonialSlider.find(`.controls > span:lt(${this.displayControls})`).get();
    this.$testimonialSlider.find('.controls > span').first().addClass('is-active');
    this.$testimonialSlider.find('.controls > span').append('<div class="duration-progress"></div>'); // init active item

    this.$activeItem = this.$testimonialSlider.find('.item.is-active');
    this.$activeControl = this.$testimonialSlider.find('.controls > span.is-active');
    this.$durationProgress = this.$controls.find('.duration-progress'); // init events

    this.events();
  }

  events() {
    this.$controlsContainer.on('mouseover', () => {
      if (this.testimonialControlAnimation) this.testimonialControlAnimation.pause();
    }).on('mouseout', () => {
      if (this.testimonialControlAnimation) this.testimonialControlAnimation.play();
    });
    this.$controlsContainer.on('click', e => this.gotoItem(e));
  }

  initSliderAnimation() {
    // re-init active item
    this.isAlreadyInit = true;
    this.$userProfile = this.$activeItem.find('.user-profile');
    this.$content = this.$activeItem.find('.content');
    this.testimonialSliderAnimation = gsap.timeline({
      onReverseComplete: () => this.nextItem()
    });
    if (this.$content.find('p').length) this.testimonialSliderAnimation = this.testimonialSliderAnimation.to(this.$content.find('p'), {
      translateY: 0,
      opacity: 1,
      ease: 'back',
      duration: .8
    });
    if (this.$userProfile.length) this.testimonialSliderAnimation = this.testimonialSliderAnimation.to(this.$userProfile, {
      scale: 1,
      opacity: 1,
      ease: 'back',
      duration: .8
    });
    if (this.$content.find('.author-details').length) this.testimonialSliderAnimation = this.testimonialSliderAnimation.to(this.$content.find('.author-details'), {
      translateY: 0,
      opacity: 1,
      ease: 'back',
      duration: .8
    });
    this.testimonialControlAnimation = gsap.timeline({
      onComplete: () => this.testimonialSliderAnimation.reverse()
    });
    this.testimonialControlAnimation.to(this.$activeControl.find('.duration-progress'), {
      width: '100%',
      duration: this.sliderDuration
    });
  }

  paginateControls() {
    this.$controls.removeClass('is-display');
    this.$durationProgress.css('width', 0);
    this.sliderCounter = 0;
    this.controlsHolder = this.$testimonialSlider.find(`.controls > span:gt(${this.lastIndexActiveControl}):lt(${this.lastIndexActiveControl + this.displayControls})`).get();

    if (this.displayControls > this.controlsHolder.length) {
      const numberOfElements = this.displayControls - this.controlsHolder.length;
      const addedElements = this.$testimonialSlider.find(`.controls > span:lt(${numberOfElements})`).get();
      this.controlsHolder = this.controlsHolder.concat(addedElements);
    }

    $(this.controlsHolder).addClass('is-display');
  }

  nextItem() {
    let newControl;
    let newItem;
    newControl = this.getNewControl();
    newControl.addClass('is-active');
    newItem = this.getNewItem();
    newItem.addClass('is-active'); // // init new item

    this.$activeItem = newItem;
    this.$activeControl = newControl;
    this.lastIndexActiveControl = this.$testimonialSlider.find('.controls > span.is-active').data('slide');
    this.initSliderAnimation();
  }

  getNewControl() {
    this.$activeControl.removeClass('is-active');
    this.sliderCounter++;

    if (this.sliderCounter < this.displayControls) {
      return $(this.controlsHolder[this.sliderCounter]);
    } else {
      this.paginateControls();
      const index = this.lastIndexActiveControl + 1 === this.$controls.length ? 0 : this.lastIndexActiveControl + 1;
      return this.$controls.eq(index);
    }
  }

  getNewItem() {
    this.$activeItem.removeClass('is-active');
    const slideIndex = this.$controlsContainer.find('span.is-active').data('slide');
    return this.$items.eq(slideIndex);
  }

  gotoItem(e) {
    const $element = $(e.target);
    if (!$element.hasClass('is-display') || $element.hasClass('is-active') || !this.isAlreadyInit) return;
    this.isAlreadyInit = true;
    const targettedSlideIndex = $element.data('slide');
    this.sliderCounter = this.controlsHolder.findIndex(element => $(element).data('slide') === $element.data('slide') - 1);
    const filteredElements = this.controlsHolder.filter(element => $(element).data('slide') < targettedSlideIndex);
    $(filteredElements).removeClass('is-active');
    const unFilteredElements = this.controlsHolder.filter(element => $(element).data('slide') >= targettedSlideIndex);
    $(unFilteredElements).removeClass('is-active');
    this.stopControlAnimation();
    $(filteredElements).find('.duration-progress').css('width', '100%');
    $(unFilteredElements).find('.duration-progress').css('width', '0%');
    this.testimonialSliderAnimation.reverse();
  }

  stopControlAnimation() {
    if (!this.testimonialControlAnimation) return;
    this.testimonialControlAnimation.kill();
    this.testimonialControlAnimation = null;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TestimonialsSlider);

/***/ }),

/***/ "./assets/js/modules/frontend/index.js":
/*!*********************************************!*\
  !*** ./assets/js/modules/frontend/index.js ***!
  \*********************************************/
/*! exports provided: rangeSlider, api, loading, maps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeSlider", function() { return rangeSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loading", function() { return loading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maps", function() { return maps; });
/* harmony import */ var _RangeSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RangeSlider */ "./assets/js/modules/frontend/RangeSlider.js");
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Api */ "./assets/js/modules/frontend/Api.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loading */ "./assets/js/modules/frontend/Loading.js");
/* harmony import */ var _Maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Maps */ "./assets/js/modules/frontend/Maps.js");




const rangeSlider = _RangeSlider__WEBPACK_IMPORTED_MODULE_0__["default"];
const api = _Api__WEBPACK_IMPORTED_MODULE_1__["default"];
const loading = _Loading__WEBPACK_IMPORTED_MODULE_2__["default"];
const maps = _Maps__WEBPACK_IMPORTED_MODULE_3__["default"];

/***/ }),

/***/ "./assets/js/modules/frontend/intl-tel-input/utils.js":
/*!************************************************************!*\
  !*** ./assets/js/modules/frontend/intl-tel-input/utils.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var aa = this;

  function k(a) {
    return "string" == typeof a;
  }

  function m(a, b) {
    a = a.split(".");
    var c = aa;
    a[0] in c || !c.execScript || c.execScript("var " + a[0]);

    for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b;
  }

  function n(a, b) {
    function c() {}

    c.prototype = b.prototype;
    a.o = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;

    a.aa = function (a, c, f) {
      for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];

      return b.prototype[c].apply(a, d);
    };
  }

  ;
  var p = Array.prototype.indexOf ? function (a, b, c) {
    return Array.prototype.indexOf.call(a, b, c);
  } : function (a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (k(a)) return k(b) && 1 == b.length ? a.indexOf(b, c) : -1;

    for (; c < a.length; c++) if (c in a && a[c] === b) return c;

    return -1;
  };

  function q(a, b) {
    a.sort(b || ba);
  }

  function ba(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }

  ;

  function ca(a) {
    var b = [],
        c = 0,
        d;

    for (d in a) b[c++] = a[d];

    return b;
  }

  ;

  function da(a, b) {
    this.a = a;
    this.h = !!b.i;
    this.c = b.b;
    this.m = b.type;
    this.l = !1;

    switch (this.c) {
      case ea:
      case fa:
      case ha:
      case ia:
      case ja:
      case ka:
      case la:
        this.l = !0;
    }

    this.g = b.defaultValue;
  }

  var la = 1,
      ka = 2,
      ea = 3,
      fa = 4,
      ha = 6,
      ia = 16,
      ja = 18;

  function ma(a, b) {
    this.c = a;
    this.a = {};

    for (a = 0; a < b.length; a++) {
      var c = b[a];
      this.a[c.a] = c;
    }
  }

  function na(a) {
    a = ca(a.a);
    q(a, function (a, c) {
      return a.a - c.a;
    });
    return a;
  }

  ;

  function r() {
    this.a = {};
    this.g = this.f().a;
    this.c = this.h = null;
  }

  r.prototype.has = function (a) {
    return null != this.a[a.a];
  };

  r.prototype.get = function (a, b) {
    return t(this, a.a, b);
  };

  r.prototype.set = function (a, b) {
    u(this, a.a, b);
  };

  r.prototype.add = function (a, b) {
    v(this, a.a, b);
  };

  function oa(a, b) {
    for (var c = na(a.f()), d = 0; d < c.length; d++) {
      var e = c[d],
          f = e.a;

      if (null != b.a[f]) {
        a.c && delete a.c[e.a];
        var g = 11 == e.c || 10 == e.c;

        if (e.h) {
          e = w(b, f);

          for (var h = 0; h < e.length; h++) v(a, f, g ? e[h].clone() : e[h]);
        } else e = x(b, f), g ? (g = x(a, f)) ? oa(g, e) : u(a, f, e.clone()) : u(a, f, e);
      }
    }
  }

  r.prototype.clone = function () {
    var a = new this.constructor();
    a != this && (a.a = {}, a.c && (a.c = {}), oa(a, this));
    return a;
  };

  function x(a, b) {
    var c = a.a[b];
    if (null == c) return null;

    if (a.h) {
      if (!(b in a.c)) {
        var d = a.h,
            e = a.g[b];
        if (null != c) if (e.h) {
          for (var f = [], g = 0; g < c.length; g++) f[g] = d.c(e, c[g]);

          c = f;
        } else c = d.c(e, c);
        return a.c[b] = c;
      }

      return a.c[b];
    }

    return c;
  }

  function t(a, b, c) {
    var d = x(a, b);
    return a.g[b].h ? d[c || 0] : d;
  }

  function y(a, b) {
    if (null != a.a[b]) a = t(a, b, void 0);else a: {
      a = a.g[b];
      if (void 0 === a.g) if (b = a.m, b === Boolean) a.g = !1;else if (b === Number) a.g = 0;else if (b === String) a.g = a.l ? "0" : "";else {
        a = new b();
        break a;
      }
      a = a.g;
    }
    return a;
  }

  function w(a, b) {
    return x(a, b) || [];
  }

  function A(a, b) {
    return a.g[b].h ? null != a.a[b] ? a.a[b].length : 0 : null != a.a[b] ? 1 : 0;
  }

  function u(a, b, c) {
    a.a[b] = c;
    a.c && (a.c[b] = c);
  }

  function v(a, b, c) {
    a.a[b] || (a.a[b] = []);
    a.a[b].push(c);
    a.c && delete a.c[b];
  }

  function B(a, b) {
    var c = [],
        d;

    for (d in b) 0 != d && c.push(new da(d, b[d]));

    return new ma(a, c);
  }

  ;

  function C() {}

  C.prototype.a = function (a) {
    new a.c();
    throw Error("Unimplemented");
  };

  C.prototype.c = function (a, b) {
    if (11 == a.c || 10 == a.c) return b instanceof r ? b : this.a(a.m.prototype.f(), b);
    if (14 == a.c) return k(b) && pa.test(b) && (a = Number(b), 0 < a) ? a : b;
    if (!a.l) return b;
    a = a.m;

    if (a === String) {
      if ("number" == typeof b) return String(b);
    } else if (a === Number && k(b) && ("Infinity" === b || "-Infinity" === b || "NaN" === b || pa.test(b))) return Number(b);

    return b;
  };

  var pa = /^-?[0-9]+$/;

  function D() {}

  n(D, C);

  D.prototype.a = function (a, b) {
    a = new a.c();
    a.h = this;
    a.a = b;
    a.c = {};
    return a;
  };

  function E() {}

  n(E, D);

  E.prototype.c = function (a, b) {
    return 8 == a.c ? !!b : C.prototype.c.apply(this, arguments);
  };

  E.prototype.a = function (a, b) {
    return E.o.a.call(this, a, b);
  };

  function F(a, b) {
    null != a && this.a.apply(this, arguments);
  }

  F.prototype.c = "";

  F.prototype.set = function (a) {
    this.c = "" + a;
  };

  F.prototype.a = function (a, b, c) {
    this.c += String(a);
    if (null != b) for (var d = 1; d < arguments.length; d++) this.c += arguments[d];
    return this;
  };

  F.prototype.toString = function () {
    return this.c;
  };
  /*
  Protocol Buffer 2 Copyright 2008 Google Inc.
  All other code copyright its respective owners.
  Copyright (C) 2010 The Libphonenumber Authors
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */


  function G() {
    r.call(this);
  }

  n(G, r);
  var qa = null;

  function H() {
    r.call(this);
  }

  n(H, r);
  var ra = null;

  function I() {
    r.call(this);
  }

  n(I, r);
  var sa = null;

  G.prototype.f = function () {
    var a = qa;
    a || (qa = a = B(G, {
      0: {
        name: "NumberFormat",
        j: "i18n.phonenumbers.NumberFormat"
      },
      1: {
        name: "pattern",
        required: !0,
        b: 9,
        type: String
      },
      2: {
        name: "format",
        required: !0,
        b: 9,
        type: String
      },
      3: {
        name: "leading_digits_pattern",
        i: !0,
        b: 9,
        type: String
      },
      4: {
        name: "national_prefix_formatting_rule",
        b: 9,
        type: String
      },
      6: {
        name: "national_prefix_optional_when_formatting",
        b: 8,
        defaultValue: !1,
        type: Boolean
      },
      5: {
        name: "domestic_carrier_code_formatting_rule",
        b: 9,
        type: String
      }
    }));
    return a;
  };

  G.f = G.prototype.f;

  H.prototype.f = function () {
    var a = ra;
    a || (ra = a = B(H, {
      0: {
        name: "PhoneNumberDesc",
        j: "i18n.phonenumbers.PhoneNumberDesc"
      },
      2: {
        name: "national_number_pattern",
        b: 9,
        type: String
      },
      9: {
        name: "possible_length",
        i: !0,
        b: 5,
        type: Number
      },
      10: {
        name: "possible_length_local_only",
        i: !0,
        b: 5,
        type: Number
      },
      6: {
        name: "example_number",
        b: 9,
        type: String
      }
    }));
    return a;
  };

  H.f = H.prototype.f;

  I.prototype.f = function () {
    var a = sa;
    a || (sa = a = B(I, {
      0: {
        name: "PhoneMetadata",
        j: "i18n.phonenumbers.PhoneMetadata"
      },
      1: {
        name: "general_desc",
        b: 11,
        type: H
      },
      2: {
        name: "fixed_line",
        b: 11,
        type: H
      },
      3: {
        name: "mobile",
        b: 11,
        type: H
      },
      4: {
        name: "toll_free",
        b: 11,
        type: H
      },
      5: {
        name: "premium_rate",
        b: 11,
        type: H
      },
      6: {
        name: "shared_cost",
        b: 11,
        type: H
      },
      7: {
        name: "personal_number",
        b: 11,
        type: H
      },
      8: {
        name: "voip",
        b: 11,
        type: H
      },
      21: {
        name: "pager",
        b: 11,
        type: H
      },
      25: {
        name: "uan",
        b: 11,
        type: H
      },
      27: {
        name: "emergency",
        b: 11,
        type: H
      },
      28: {
        name: "voicemail",
        b: 11,
        type: H
      },
      29: {
        name: "short_code",
        b: 11,
        type: H
      },
      30: {
        name: "standard_rate",
        b: 11,
        type: H
      },
      31: {
        name: "carrier_specific",
        b: 11,
        type: H
      },
      33: {
        name: "sms_services",
        b: 11,
        type: H
      },
      24: {
        name: "no_international_dialling",
        b: 11,
        type: H
      },
      9: {
        name: "id",
        required: !0,
        b: 9,
        type: String
      },
      10: {
        name: "country_code",
        b: 5,
        type: Number
      },
      11: {
        name: "international_prefix",
        b: 9,
        type: String
      },
      17: {
        name: "preferred_international_prefix",
        b: 9,
        type: String
      },
      12: {
        name: "national_prefix",
        b: 9,
        type: String
      },
      13: {
        name: "preferred_extn_prefix",
        b: 9,
        type: String
      },
      15: {
        name: "national_prefix_for_parsing",
        b: 9,
        type: String
      },
      16: {
        name: "national_prefix_transform_rule",
        b: 9,
        type: String
      },
      18: {
        name: "same_mobile_and_fixed_line_pattern",
        b: 8,
        defaultValue: !1,
        type: Boolean
      },
      19: {
        name: "number_format",
        i: !0,
        b: 11,
        type: G
      },
      20: {
        name: "intl_number_format",
        i: !0,
        b: 11,
        type: G
      },
      22: {
        name: "main_country_for_code",
        b: 8,
        defaultValue: !1,
        type: Boolean
      },
      23: {
        name: "leading_digits",
        b: 9,
        type: String
      },
      26: {
        name: "leading_zero_possible",
        b: 8,
        defaultValue: !1,
        type: Boolean
      }
    }));
    return a;
  };

  I.f = I.prototype.f;

  function J() {
    r.call(this);
  }

  n(J, r);
  var ta = null,
      ua = {
    $: 0,
    w: 1,
    v: 5,
    u: 10,
    s: 20
  };

  J.prototype.f = function () {
    var a = ta;
    a || (ta = a = B(J, {
      0: {
        name: "PhoneNumber",
        j: "i18n.phonenumbers.PhoneNumber"
      },
      1: {
        name: "country_code",
        required: !0,
        b: 5,
        type: Number
      },
      2: {
        name: "national_number",
        required: !0,
        b: 4,
        type: Number
      },
      3: {
        name: "extension",
        b: 9,
        type: String
      },
      4: {
        name: "italian_leading_zero",
        b: 8,
        type: Boolean
      },
      8: {
        name: "number_of_leading_zeros",
        b: 5,
        defaultValue: 1,
        type: Number
      },
      5: {
        name: "raw_input",
        b: 9,
        type: String
      },
      6: {
        name: "country_code_source",
        b: 14,
        defaultValue: 0,
        type: ua
      },
      7: {
        name: "preferred_domestic_carrier_code",
        b: 9,
        type: String
      }
    }));
    return a;
  };

  J.ctor = J;
  J.ctor.f = J.prototype.f;
  /*
  Copyright (C) 2010 The Libphonenumber Authors
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */

  var K = {
    1: "US AG AI AS BB BM BS CA DM DO GD GU JM KN KY LC MP MS PR SX TC TT VC VG VI".split(" "),
    7: ["RU", "KZ"],
    20: ["EG"],
    27: ["ZA"],
    30: ["GR"],
    31: ["NL"],
    32: ["BE"],
    33: ["FR"],
    34: ["ES"],
    36: ["HU"],
    39: ["IT", "VA"],
    40: ["RO"],
    41: ["CH"],
    43: ["AT"],
    44: ["GB", "GG", "IM", "JE"],
    45: ["DK"],
    46: ["SE"],
    47: ["NO", "SJ"],
    48: ["PL"],
    49: ["DE"],
    51: ["PE"],
    52: ["MX"],
    53: ["CU"],
    54: ["AR"],
    55: ["BR"],
    56: ["CL"],
    57: ["CO"],
    58: ["VE"],
    60: ["MY"],
    61: ["AU", "CC", "CX"],
    62: ["ID"],
    63: ["PH"],
    64: ["NZ"],
    65: ["SG"],
    66: ["TH"],
    81: ["JP"],
    82: ["KR"],
    84: ["VN"],
    86: ["CN"],
    90: ["TR"],
    91: ["IN"],
    92: ["PK"],
    93: ["AF"],
    94: ["LK"],
    95: ["MM"],
    98: ["IR"],
    211: ["SS"],
    212: ["MA", "EH"],
    213: ["DZ"],
    216: ["TN"],
    218: ["LY"],
    220: ["GM"],
    221: ["SN"],
    222: ["MR"],
    223: ["ML"],
    224: ["GN"],
    225: ["CI"],
    226: ["BF"],
    227: ["NE"],
    228: ["TG"],
    229: ["BJ"],
    230: ["MU"],
    231: ["LR"],
    232: ["SL"],
    233: ["GH"],
    234: ["NG"],
    235: ["TD"],
    236: ["CF"],
    237: ["CM"],
    238: ["CV"],
    239: ["ST"],
    240: ["GQ"],
    241: ["GA"],
    242: ["CG"],
    243: ["CD"],
    244: ["AO"],
    245: ["GW"],
    246: ["IO"],
    247: ["AC"],
    248: ["SC"],
    249: ["SD"],
    250: ["RW"],
    251: ["ET"],
    252: ["SO"],
    253: ["DJ"],
    254: ["KE"],
    255: ["TZ"],
    256: ["UG"],
    257: ["BI"],
    258: ["MZ"],
    260: ["ZM"],
    261: ["MG"],
    262: ["RE", "YT"],
    263: ["ZW"],
    264: ["NA"],
    265: ["MW"],
    266: ["LS"],
    267: ["BW"],
    268: ["SZ"],
    269: ["KM"],
    290: ["SH", "TA"],
    291: ["ER"],
    297: ["AW"],
    298: ["FO"],
    299: ["GL"],
    350: ["GI"],
    351: ["PT"],
    352: ["LU"],
    353: ["IE"],
    354: ["IS"],
    355: ["AL"],
    356: ["MT"],
    357: ["CY"],
    358: ["FI", "AX"],
    359: ["BG"],
    370: ["LT"],
    371: ["LV"],
    372: ["EE"],
    373: ["MD"],
    374: ["AM"],
    375: ["BY"],
    376: ["AD"],
    377: ["MC"],
    378: ["SM"],
    380: ["UA"],
    381: ["RS"],
    382: ["ME"],
    383: ["XK"],
    385: ["HR"],
    386: ["SI"],
    387: ["BA"],
    389: ["MK"],
    420: ["CZ"],
    421: ["SK"],
    423: ["LI"],
    500: ["FK"],
    501: ["BZ"],
    502: ["GT"],
    503: ["SV"],
    504: ["HN"],
    505: ["NI"],
    506: ["CR"],
    507: ["PA"],
    508: ["PM"],
    509: ["HT"],
    590: ["GP", "BL", "MF"],
    591: ["BO"],
    592: ["GY"],
    593: ["EC"],
    594: ["GF"],
    595: ["PY"],
    596: ["MQ"],
    597: ["SR"],
    598: ["UY"],
    599: ["CW", "BQ"],
    670: ["TL"],
    672: ["NF"],
    673: ["BN"],
    674: ["NR"],
    675: ["PG"],
    676: ["TO"],
    677: ["SB"],
    678: ["VU"],
    679: ["FJ"],
    680: ["PW"],
    681: ["WF"],
    682: ["CK"],
    683: ["NU"],
    685: ["WS"],
    686: ["KI"],
    687: ["NC"],
    688: ["TV"],
    689: ["PF"],
    690: ["TK"],
    691: ["FM"],
    692: ["MH"],
    800: ["001"],
    808: ["001"],
    850: ["KP"],
    852: ["HK"],
    853: ["MO"],
    855: ["KH"],
    856: ["LA"],
    870: ["001"],
    878: ["001"],
    880: ["BD"],
    881: ["001"],
    882: ["001"],
    883: ["001"],
    886: ["TW"],
    888: ["001"],
    960: ["MV"],
    961: ["LB"],
    962: ["JO"],
    963: ["SY"],
    964: ["IQ"],
    965: ["KW"],
    966: ["SA"],
    967: ["YE"],
    968: ["OM"],
    970: ["PS"],
    971: ["AE"],
    972: ["IL"],
    973: ["BH"],
    974: ["QA"],
    975: ["BT"],
    976: ["MN"],
    977: ["NP"],
    979: ["001"],
    992: ["TJ"],
    993: ["TM"],
    994: ["AZ"],
    995: ["GE"],
    996: ["KG"],
    998: ["UZ"]
  },
      wa = {
    AC: [, [,, "(?:[01589]\\d|[46])\\d{4}",,,,,,, [5, 6]], [,, "6[2-467]\\d{3}",,,, "62889",,, [5]], [,, "4\\d{4}",,,, "40123",,, [5]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "AC", 247, "00",,,,,,,,,, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "(?:0[1-9]|[1589]\\d)\\d{4}",,,, "542011",,, [6]],,, [,,,,,,,,, [-1]]],
    AD: [, [,, "(?:1|6\\d)\\d{7}|[135-9]\\d{5}",,,,,,, [6, 8, 9]], [,, "[78]\\d{5}",,,, "712345",,, [6]], [,, "690\\d{6}|[356]\\d{5}",,,, "312345",,, [6, 9]], [,, "180[02]\\d{4}",,,, "18001234",,, [8]], [,, "[19]\\d{5}",,,, "912345",,, [6]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "AD", 376, "00",,,,,,,, [[, "(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["1"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]],, [,,,,,,,,, [-1]],,, [,, "1800\\d{4}",,,,,,, [8]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    AE: [, [,, "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",,,,,,, [5, 6, 7, 8, 9, 10, 11, 12]], [,, "[2-4679][2-8]\\d{6}",,,, "22345678",,, [8], [7]], [,, "5[024-68]\\d{7}",,,, "501234567",,, [9]], [,, "400\\d{6}|800\\d{2,9}",,,, "800123456"], [,, "900[02]\\d{5}",,,, "900234567",,, [9]], [,, "700[05]\\d{5}",,,, "700012345",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "AE", 971, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], [, "(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "600[25]\\d{5}",,,, "600212345",,, [9]],,, [,,,,,,,,, [-1]]],
    AF: [, [,, "[2-7]\\d{8}",,,,,,, [9], [7]], [,, "(?:[25][0-8]|[34][0-4]|6[0-5])[2-9]\\d{6}",,,, "234567890",,,, [7]], [,, "7\\d{8}",,,, "701234567",,,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "AF", 93, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[1-9]"]], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], [[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    AG: [, [,, "(?:268|[58]\\d\\d|900)\\d{7}",,,,,,, [10], [7]], [,, "268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}",,,, "2684601234",,,, [7]], [,, "268(?:464|7(?:1[3-9]|[28]\\d|3[0246]|64|7[0-689]))\\d{4}",,,, "2684641234",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,, "26848[01]\\d{4}",,,, "2684801234",,,, [7]], "AG", 1, "011", "1",,, "1|([457]\\d{6})$", "268$1",,,,, [,, "26840[69]\\d{4}",,,, "2684061234",,,, [7]],, "268", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    AI: [, [,, "(?:264|[58]\\d\\d|900)\\d{7}",,,,,,, [10], [7]], [,, "264(?:292|4(?:6[12]|9[78]))\\d{4}",,,, "2644612345",,,, [7]], [,, "264(?:235|4(?:69|76)|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}",,,, "2642351234",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "AI", 1, "011", "1",,, "1|([2457]\\d{6})$", "264$1",,,,, [,, "264724\\d{4}",,,, "2647241234",,,, [7]],, "264", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    AL: [, [,, "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",,,,,,, [6, 7, 8, 9], [5]], [,, "(?:[2358](?:[16-9]\\d[2-9]|[2-5][2-9]\\d)|4(?:[2-57-9][2-9]|6\\d)\\d)\\d{4}",,,, "22345678",,, [8], [5, 6, 7]], [,, "6(?:[78][2-9]|9\\d)\\d{6}",,,, "672123456",,, [9]], [,, "800\\d{4}",,,, "8001234",,, [7]], [,, "900[1-9]\\d\\d",,,, "900123",,, [6]], [,, "808[1-9]\\d\\d",,,, "808123",,, [6]], [,, "700[2-9]\\d{4}",,,, "70021234",,, [8]], [,,,,,,,,, [-1]], "AL", 355, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], [, "(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    AM: [, [,, "(?:[1-489]\\d|55|60|77)\\d{6}",,,,,,, [8], [5, 6]], [,, "(?:(?:1[0-25]|47)\\d|2(?:2[2-46]|3[1-8]|4[2-69]|5[2-7]|6[1-9]|8[1-7])|3[12]2)\\d{5}",,,, "10123456",,,, [5, 6]], [,, "(?:33|4[1349]|55|77|88|9[13-9])\\d{6}",,,, "77123456"], [,, "800\\d{5}",,,, "80012345"], [,, "90[016]\\d{5}",,,, "90012345"], [,, "80[1-4]\\d{5}",,,, "80112345"], [,,,,,,,,, [-1]], [,, "60(?:2[78]|3[5-9]|4[02-9]|5[0-46-9]|[6-8]\\d|90)\\d{4}",,,, "60271234"], "AM", 374, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], [, "(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], [, "(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], [, "(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    AO: [, [,, "[29]\\d{8}",,,,,,, [9]], [,, "2\\d(?:[0134][25-9]|[25-9]\\d)\\d{5}",,,, "222123456"], [,, "9[1-49]\\d{7}",,,, "923123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "AO", 244, "00",,,,,,,, [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    AR: [, [,, "11\\d{8}|(?:[2368]|9\\d)\\d{9}",,,,,,, [10, 11], [6, 7, 8]], [,, "(?:2954|3(?:777|865))[2-8]\\d{5}|3(?:7(?:1[15]|81)|8(?:21|4[16]|69|9[12]))[46]\\d{5}|(?:(?:11[1-8]|670)\\d|2(?:2(?:1[2-6]|3[3-6])|(?:3[06]|49)4|6(?:04|1[2-7]|4[4-6])|9(?:[17][4-6]|9[3-6]))|3(?:(?:36|64)4|4(?:1[2-7]|[235][4-6]|84)|5(?:1[2-8]|[38][4-6])|8(?:1[2-6]|[58][3-6]|7[24-6])))\\d{6}|(?:2(?:284|657|9(?:20|66))|3(?:4(?:8[27]|92)|755|878))[2-7]\\d{5}|(?:2(?:[28]0|37|6[36]|9[48])|3(?:62|7[069]|8[03]))[45]\\d{6}|(?:2(?:2(?:2[59]|44|52)|3(?:26|4[24])|473|9(?:[07]2|2[26]|34|46))|3327)[45]\\d{5}|(?:2(?:(?:26|62)2|3(?:02|2[03])|477|9(?:42|83))|3(?:4(?:[47]6|62|89)|5(?:41|64)|873))[2-6]\\d{5}|2(?:2(?:21|4[23]|6[145]|7[1-4]|8[356]|9[267])|3(?:16|3[13-8]|43|5[346-8]|9[3-5])|475|6(?:2[46]|4[78]|5[1568])|9(?:03|2[1457-9]|3[1356]|4[08]|[56][23]|82))4\\d{5}|(?:2(?:2(?:57|81)|3(?:24|46|92)|9(?:01|23|64))|3(?:329|4(?:42|71)|5(?:25|37|4[347]|71)|7(?:18|5[17])|888))[3-6]\\d{5}|(?:2(?:2(?:02|2[3467]|4[156]|5[45]|6[6-8]|91)|3(?:1[47]|[24]5|5[25]|96)|47[48]|625|932)|3(?:38[2578]|4(?:0[0-24-9]|3[78]|4[457]|58|6[03-9]|72|83|9[136-8])|5(?:2[124]|[368][23]|4[2689]|7[2-6])|7(?:16|2[15]|3[145]|4[13]|5[468]|7[2-5]|8[26])|8(?:2[5-7]|3[278]|4[3-5]|5[78]|6[1-378]|[78]7|94)))[4-6]\\d{5}",,,, "1123456789",,, [10], [6, 7, 8]], [,, "9(?:2954|3(?:777|865))[2-8]\\d{5}|93(?:7(?:1[15]|81)|8(?:21|4[16]|69|9[12]))[46]\\d{5}|(?:675\\d|9(?:11[1-8]\\d|2(?:2(?:1[2-6]|3[3-6])|(?:3[06]|49)4|6(?:04|1[2-7]|4[4-6])|9(?:[17][4-6]|9[3-6]))|3(?:(?:36|64)4|4(?:1[2-7]|[235][4-6]|84)|5(?:1[2-8]|[38][4-6])|8(?:1[2-6]|[58][3-6]|7[24-6]))))\\d{6}|9(?:2(?:284|657|9(?:20|66))|3(?:4(?:8[27]|92)|755|878))[2-7]\\d{5}|9(?:2(?:[28]0|37|6[36]|9[48])|3(?:62|7[069]|8[03]))[45]\\d{6}|9(?:2(?:2(?:2[59]|44|52)|3(?:26|4[24])|473|9(?:[07]2|2[26]|34|46))|3327)[45]\\d{5}|9(?:2(?:(?:26|62)2|3(?:02|2[03])|477|9(?:42|83))|3(?:4(?:[47]6|62|89)|5(?:41|64)|873))[2-6]\\d{5}|92(?:2(?:21|4[23]|6[145]|7[1-4]|8[356]|9[267])|3(?:16|3[13-8]|43|5[346-8]|9[3-5])|475|6(?:2[46]|4[78]|5[1568])|9(?:03|2[1457-9]|3[1356]|4[08]|[56][23]|82))4\\d{5}|9(?:2(?:2(?:57|81)|3(?:24|46|92)|9(?:01|23|64))|3(?:329|4(?:42|71)|5(?:25|37|4[347]|71)|7(?:18|5[17])|888))[3-6]\\d{5}|9(?:2(?:2(?:02|2[3467]|4[156]|5[45]|6[6-8]|91)|3(?:1[47]|[24]5|5[25]|96)|47[48]|625|932)|3(?:38[2578]|4(?:0[0-24-9]|3[78]|4[457]|58|6[03-9]|72|83|9[136-8])|5(?:2[124]|[368][23]|4[2689]|7[2-6])|7(?:16|2[15]|3[145]|4[13]|5[468]|7[2-5]|8[26])|8(?:2[5-7]|3[278]|4[3-5]|5[78]|6[1-378]|[78]7|94)))[4-6]\\d{5}",,,, "91123456789",,,, [6, 7, 8]], [,, "800\\d{7}",,,, "8001234567",,, [10]], [,, "60[04579]\\d{7}",,,, "6001234567",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "AR", 54, "00", "0",,, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1",,, [[, "(\\d{3})", "$1", ["[09]|1(?:0[0-35-7]|1[02-5]|2[15])"]], [, "(\\d{2})(\\d{4})", "$1-$2", ["[2-8]"]], [, "(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], [, "(\\d{4})(\\d{4})", "$1-$2", ["[1-8]"]], [, "(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1",, 1], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1",, 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1",, 1], [, "(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1"], [, "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1"], [, "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1"]], [[, "(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1",, 1], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1",, 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1",, 1], [, "(\\d)(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"]], [, "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3-$4", ["91"]], [, "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3-$4", ["9"]]], [,,,,,,,,, [-1]],,, [,, "810\\d{7}",,,,,,, [10]], [,, "810\\d{7}",,,, "8101234567",,, [10]],,, [,,,,,,,,, [-1]]],
    AS: [, [,, "(?:[58]\\d\\d|684|900)\\d{7}",,,,,,, [10], [7]], [,, "6846(?:22|33|44|55|77|88|9[19])\\d{4}",,,, "6846221234",,,, [7]], [,, "684(?:2(?:48|5[2468]|72)|7(?:3[13]|70|82))\\d{4}",,,, "6847331234",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "AS", 1, "011", "1",,, "1|([267]\\d{6})$", "684$1",,,,, [,,,,,,,,, [-1]],, "684", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    AT: [, [,, "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",,,,,,, [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [3]], [,, "1(?:11\\d|[2-9]\\d{3,11})|(?:316|463|(?:51|66|73)2)\\d{3,10}|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-578]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|4(?:2[1-8]|35|7[1368]|8[2457])|5(?:2[1-8]|3[357]|4[147]|5[12578]|6[37])|6(?:13|2[1-47]|4[135-8]|5[468])|7(?:2[1-8]|35|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\\d{4,10}",,,, "1234567890",,,, [3]], [,, "6(?:5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}",,,, "664123456",,, [7, 8, 9, 10, 11, 12, 13]], [,, "800\\d{6,10}",,,, "800123456",,, [9, 10, 11, 12, 13]], [,, "9(?:0[01]|3[019])\\d{6,10}",,,, "900123456",,, [9, 10, 11, 12, 13]], [,, "8(?:10|2[018])\\d{6,10}|828\\d{5}",,,, "810123456",,, [8, 9, 10, 11, 12, 13]], [,,,,,,,,, [-1]], [,, "5(?:0[1-9]|17|[79]\\d)\\d{2,10}|7[28]0\\d{6,10}",,,, "780123456",,, [5, 6, 7, 8, 9, 10, 11, 12, 13]], "AT", 43, "00", "0",,, "0",,,, [[, "(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], [, "(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], [, "(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], [, "(\\d{6})", "$1", ["1"]], [, "(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], [, "(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], [[, "(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], [, "(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], [, "(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], [, "(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], [, "(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    AU: [, [,, "1(?:[0-79]\\d{7,8}|8[0-24-9]\\d{7})|(?:[2-478]\\d\\d|550)\\d{6}|1\\d{4,7}",,,,,,, [5, 6, 7, 8, 9, 10]], [,, "(?:[237]\\d{5}|8(?:51(?:0(?:0[03-9]|[1247]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-6])|1(?:1[69]|[23]\\d|4[0-4]))|(?:[6-8]\\d{3}|9(?:[02-9]\\d\\d|1(?:[0-57-9]\\d|6[0135-9])))\\d))\\d{3}",,,, "212345678",,, [9], [8]], [,, "483[0-3]\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-2457-9]|9[0-27-9])\\d{6}",,,, "412345678",,, [9]], [,, "180(?:0\\d{3}|2)\\d{3}",,,, "1800123456",,, [7, 10]], [,, "190[0-26]\\d{6}",,,, "1900123456",,, [10]], [,, "13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}",,,, "1300123456",,, [6, 8, 10]], [,,,,,,,,, [-1]], [,, "(?:14(?:5(?:1[0458]|[23][458])|71\\d)|550\\d\\d)\\d{4}",,,, "550123456",,, [9]], "AU", 61, "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "0",,, "0|(183[12])",, "0011",, [[, "(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["13"]], [, "(\\d{3})(\\d{3})", "$1 $2", ["19"]], [, "(\\d{3})(\\d{4})", "$1 $2", ["180", "1802"]], [, "(\\d{4})(\\d{3,4})", "$1 $2", ["19"]], [, "(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)", "$CC ($1)"], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], [[, "(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)", "$CC ($1)"], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], [,, "16\\d{3,7}",,,, "1612345",,, [5, 6, 7, 8, 9]], 1,, [,, "1[38]00\\d{6}|1(?:345[0-4]|802)\\d{3}|13\\d{4}",,,,,,, [6, 7, 8, 10]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    AW: [, [,, "(?:[25-79]\\d\\d|800)\\d{4}",,,,,,, [7]], [,, "5(?:2\\d|8[1-9])\\d{4}",,,, "5212345"], [,, "(?:290|5[69]\\d|6(?:[03]0|22|4[0-2]|[69]\\d)|7(?:[34]\\d|7[07])|9(?:6[45]|9[4-8]))\\d{4}",,,, "5601234"], [,, "800\\d{4}",,,, "8001234"], [,, "900\\d{4}",,,, "9001234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "(?:28\\d|501)\\d{4}",,,, "5011234"], "AW", 297, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    AX: [, [,, "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}",,,,,,, [5, 6, 7, 8, 9, 10, 11, 12]], [,, "18[1-8]\\d{3,6}",,,, "181234567",,, [6, 7, 8, 9]], [,, "(?:4[0-8]|50)\\d{4,8}",,,, "412345678",,, [6, 7, 8, 9, 10]], [,, "800\\d{4,6}",,,, "800123456",,, [7, 8, 9]], [,, "[67]00\\d{5,6}",,,, "600123456",,, [8, 9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "AX", 358, "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "0",,, "0",, "00",,,, [,,,,,,,,, [-1]],, "18", [,,,,,,,,, [-1]], [,, "20\\d{4,8}|60[12]\\d{5,6}|7(?:099\\d{4,5}|5[03-9]\\d{3,7})|20[2-59]\\d\\d|(?:606|7(?:0[78]|1|3\\d))\\d{7}|(?:10|29|3[09]|70[1-5]\\d)\\d{4,8}",,,, "10112345"],,, [,,,,,,,,, [-1]]],
    AZ: [, [,, "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}",,,,,,, [9], [7]], [,, "(?:222[0-79]\\d|365(?:[0-46-9]\\d|5[0-35-9]))\\d{4}|(?:(?:1[28]|46)\\d|2(?:[045]2|1[24]|2[34]|33|6[23]))\\d{6}",,,, "123123456",,,, [7]], [,, "(?:36554|99[2-9]\\d\\d)\\d{4}|(?:[16]0|4[04]|5[015]|7[07])\\d{7}",,,, "401234567"], [,, "88\\d{7}",,,, "881234567"], [,, "900200\\d{3}",,,, "900200123"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "AZ", 994, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[1-9]"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365|46", "1[28]|2|365(?:[0-46-9]|5[0-35-9])|46"], "(0$1)"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365|46", "1[28]|2|365(?:[0-46-9]|5[0-35-9])|46"], "(0$1)"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    BA: [, [,, "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}",,,,,,, [8, 9], [6]], [,, "(?:3(?:[05-79][2-9]|1[4579]|[23][24-9]|4[2-4689]|8[2457-9])|49[2-579]|5(?:0[2-49]|[13][2-9]|[268][2-4679]|4[4689]|5[2-79]|7[2-69]|9[2-4689]))\\d{5}",,,, "30212345",,, [8], [6]], [,, "6040[0-4]\\d{4}|6(?:03|[1-356]|44|7\\d)\\d{6}",,,, "61123456"], [,, "8[08]\\d{6}",,,, "80123456",,, [8]], [,, "9[0246]\\d{6}",,,, "90123456",,, [8]], [,, "8[12]\\d{6}",,,, "82123456",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "BA", 387, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{3})", "$1-$2", ["[2-9]"]], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "70(?:3[0146]|[56]0)\\d{4}",,,, "70341234",,, [8]],,, [,,,,,,,,, [-1]]],
    BB: [, [,, "(?:246|[58]\\d\\d|900)\\d{7}",,,,,,, [10], [7]], [,, "246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7[35]7|9(?:1[89]|63))\\d{4}",,,, "2464123456",,,, [7]], [,, "246(?:2(?:[3568]\\d|4[0-57-9])|45\\d|69[5-7]|8(?:[2-5]\\d|83))\\d{4}",,,, "2462501234",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "(?:246976|900[2-9]\\d\\d)\\d{4}",,,, "9002123456",,,, [7]], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,, "24631\\d{5}",,,, "2463101234",,,, [7]], "BB", 1, "011", "1",,, "1|([2-9]\\d{6})$", "246$1",,,,, [,,,,,,,,, [-1]],, "246", [,,,,,,,,, [-1]], [,, "246(?:292|367|4(?:1[7-9]|3[01]|44|67)|7(?:36|53))\\d{4}",,,, "2464301234",,,, [7]],,, [,,,,,,,,, [-1]]],
    BD: [, [,, "1\\d{9}|2\\d{7,8}|88\\d{4,6}|(?:8[0-79]|9\\d)\\d{4,8}|(?:[346]\\d|[57])\\d{5,8}",,,,,,, [6, 7, 8, 9, 10]], [,, "(?:4(?:31\\d\\d|423)|5222)\\d{3}(?:\\d{2})?|8332[6-9]\\d\\d|(?:3(?:03[56]|224)|4(?:22[25]|653))\\d{3,4}|(?:3(?:42[47]|529|823)|4(?:027|525|65(?:28|8))|562|6257|7(?:1(?:5[3-5]|6[12]|7[156]|89)|22[589]56|32|42675|52(?:[25689](?:56|8)|[347]8)|71(?:6[1267]|75|89)|92374)|82(?:2[59]|32)56|9(?:03[23]56|23(?:256|373)|31|5(?:1|2[4589]56)))\\d{3}|(?:3(?:02[348]|22[35]|324|422)|4(?:22[67]|32[236-9]|6(?:2[46]|5[57])|953)|5526|6(?:024|6655)|81)\\d{4,5}|(?:2(?:7(?:1[0-267]|2[0-289]|3[0-29]|4[01]|5[1-3]|6[013]|7[0178]|91)|8(?:0[125]|1[1-6]|2[0157-9]|3[1-69]|41|6[1-35]|7[1-5]|8[1-8]|9[0-6])|9(?:0[0-2]|1[0-4]|2[568]|3[3-6]|5[5-7]|6[0136-9]|7[0-7]|8[014-9]))|3(?:0(?:2[025-79]|3[2-4])|181|22[12]|32[2356]|824)|4(?:02[09]|22[348]|32[045]|523|6(?:27|54))|666(?:22|53)|7(?:22[57-9]|42[56]|82[35])8|8(?:0[124-9]|2(?:181|2[02-4679]8)|4[12]|[5-7]2)|9(?:[04]2|2(?:2|328)|81))\\d{4}|(?:2[45]\\d\\d|3(?:1(?:2[5-7]|[5-7])|425|822)|4(?:033|1\\d|[257]1|332|4(?:2[246]|5[25])|6(?:2[35]|56|62)|8(?:23|54)|92[2-5])|5(?:02[03489]|22[457]|32[35-79]|42[46]|6(?:[18]|53)|724|826)|6(?:023|2(?:2[2-5]|5[3-5]|8)|32[3478]|42[34]|52[47]|6(?:[18]|6(?:2[34]|5[24]))|[78]2[2-5]|92[2-6])|7(?:02|21\\d|[3-589]1|6[12]|72[24])|8(?:217|3[12]|[5-7]1)|9[24]1)\\d{5}|(?:(?:3[2-8]|5[2-57-9]|6[03-589])1|4[4689][18])\\d{5}|[59]1\\d{5}",,,, "27111234"], [,, "(?:1[13-9]\\d|644)\\d{7}|(?:3[78]|44|66)[02-9]\\d{7}",,,, "1812345678",,, [10]], [,, "80[03]\\d{7}",,,, "8001234567",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "96(?:0[469]|1[0-47]|3[389]|6[69]|7[78])\\d{6}",,,, "9604123456",,, [10]], "BD", 880, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], [, "(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], [, "(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]"], "0$1"], [, "(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    BE: [, [,, "4\\d{8}|[1-9]\\d{7}",,,,,,, [8, 9]], [,, "80[2-8]\\d{5}|(?:1[0-69]|[23][2-8]|4[23]|5\\d|6[013-57-9]|71|8[1-79]|9[2-4])\\d{6}",,,, "12345678",,, [8]], [,, "4[5-9]\\d{7}",,,, "470123456",,, [9]], [,, "800[1-9]\\d{4}",,,, "80012345",,, [8]], [,, "(?:70(?:2[0-57]|3[0457]|44|69|7[0579])|90(?:0[0-35-8]|1[36]|2[0-3568]|3[0135689]|4[2-68]|5[1-68]|6[0-378]|7[23568]|9[34679]))\\d{4}",,,, "90012345",,, [8]], [,, "7879\\d{4}",,,, "78791234",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "BE", 32, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], [, "(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "78(?:0[57]|1[0458]|2[25]|3[15-8]|48|[56]0|7[078])\\d{4}",,,, "78102345",,, [8]],,, [,,,,,,,,, [-1]]],
    BF: [, [,, "[025-7]\\d{7}",,,,,,, [8]], [,, "2(?:0(?:49|5[23]|6[56]|9[016-9])|4(?:4[569]|5[4-6]|6[56]|7[0179])|5(?:[34]\\d|50|6[5-7]))\\d{4}",,,, "20491234"], [,, "(?:0[127]|5[1-8]|[67]\\d)\\d{6}",,,, "70123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "BF", 226, "00",,,,,,,, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    BG: [, [,, "[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",,,,,,, [6, 7, 8, 9], [4, 5]], [,, "2\\d{5,7}|(?:43[1-6]|70[1-9])\\d{4,5}|(?:[36]\\d|4[124-7]|[57][1-9]|8[1-6]|9[1-7])\\d{5,6}",,,, "2123456",,, [6, 7, 8], [4, 5]], [,, "43[07-9]\\d{5}|(?:48|8[7-9]\\d|9(?:8\\d|9[69]))\\d{6}",,,, "48123456",,, [8, 9]], [,, "800\\d{5}",,,, "80012345",,, [8]], [,, "90\\d{6}",,,, "90123456",,, [8]], [,, "700\\d{5}",,,, "70012345",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "BG", 359, "00", "0",,, "0",,,, [[, "(\\d{6})", "$1", ["1"]], [, "(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], [, "(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], [, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], [[, "(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], [, "(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], [, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    BH: [, [,, "[136-9]\\d{7}",,,,,,, [8]], [,, "(?:1(?:3[1356]|6[0156]|7\\d)\\d|6(?:1[16]\\d|500|6(?:0\\d|3[12]|44|7[7-9]|88)|9[69][69])|7(?:1(?:11|78)|7\\d\\d))\\d{4}",,,, "17001234"], [,, "(?:3(?:[1-79]\\d|8[0-47-9])\\d|6(?:3(?:00|33|6[16])|6(?:3[03-9]|[69]\\d|7[0-6])))\\d{4}",,,, "36001234"], [,, "80\\d{6}",,,, "80123456"], [,, "(?:87|9[014578])\\d{6}",,,, "90123456"], [,, "84\\d{6}",,,, "84123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "BH", 973, "00",,,,,,,, [[, "(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[047]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    BI: [, [,, "(?:[267]\\d|31)\\d{6}",,,,,,, [8]], [,, "22\\d{6}",,,, "22201234"], [,, "(?:29|31|6[1289]|7[125-9])\\d{6}",,,, "79561234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "BI", 257, "00",,,,,,,, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    BJ: [, [,, "(?:[2689]\\d|51)\\d{6}",,,,,,, [8]], [,, "2(?:02|1[037]|2[45]|3[68])\\d{5}",,,, "20211234"], [,, "(?:51|6\\d|9[013-9])\\d{6}",,,, "90011234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "857[58]\\d{4}",,,, "85751234"], "BJ", 229, "00",,,,,,,, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[25689]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "81\\d{6}",,,, "81123456"],,, [,,,,,,,,, [-1]]],
    BL: [, [,, "(?:590|69\\d|976)\\d{6}",,,,,,, [9]], [,, "590(?:2[7-9]|5[12]|87)\\d{4}",,,, "590271234"], [,, "69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}",,,, "690001234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "976[01]\\d{5}",,,, "976012345"], "BL", 590, "00", "0",,, "0",,,,,, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    BM: [, [,, "(?:441|[58]\\d\\d|900)\\d{7}",,,,,,, [10], [7]], [,, "441(?:[46]\\d\\d|5(?:4\\d|60|89))\\d{4}",,,, "4414123456",,,, [7]], [,, "441(?:[2378]\\d|5[0-39])\\d{5}",,,, "4413701234",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "BM", 1, "011", "1",,, "1|([2-8]\\d{6})$", "441$1",,,,, [,,,,,,,,, [-1]],, "441", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    BN: [, [,, "[2-578]\\d{6}",,,,,,, [7]], [,, "22[0-7]\\d{4}|(?:2[013-9]|[34]\\d|5[0-25-9])\\d{5}",,,, "2345678"], [,, "(?:22[89]|[78]\\d\\d)\\d{4}",,,, "7123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "5[34]\\d{5}",,,, "5345678"], "BN", 673, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    BO: [, [,, "(?:[2-467]\\d\\d|8001)\\d{5}",,,,,,, [8, 9], [7]], [,, "(?:2(?:2\\d\\d|5(?:11|[258]\\d|9[67])|6(?:12|2\\d|9[34])|8(?:2[34]|39|62))|3(?:3\\d\\d|4(?:6\\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:[27]\\d|3[2-4]|4[248]|5[24]|6[2-6]))|4(?:4\\d\\d|6(?:11|[24689]\\d|72)))\\d{4}",,,, "22123456",,, [8], [7]], [,, "[67]\\d{7}",,,, "71234567",,, [8]], [,, "8001[07]\\d{4}",,,, "800171234",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "BO", 591, "00(?:1\\d)?", "0",,, "0(1\\d)?",,,, [[, "(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"],, "0$CC $1"], [, "(\\d{8})", "$1", ["[67]"],, "0$CC $1"], [, "(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"],, "0$CC $1"]],, [,,,,,,,,, [-1]],,, [,, "8001[07]\\d{4}",,,,,,, [9]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    BQ: [, [,, "(?:[34]1|7\\d)\\d{5}",,,,,,, [7]], [,, "(?:318[023]|41(?:6[023]|70)|7(?:1[578]|2[05]|50)\\d)\\d{3}",,,, "7151234"], [,, "(?:31(?:8[14-8]|9[14578])|416[14-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}",,,, "3181234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "BQ", 599, "00",,,,,,,,,, [,,,,,,,,, [-1]],, "[347]", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    BR: [, [,, "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-24679]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}",,,,,,, [8, 9, 10, 11]], [,, "(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-5]\\d{7}",,,, "1123456789",,, [10], [8]], [,, "(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])(?:7|9\\d)\\d{7}",,,, "11961234567",,, [10, 11], [8, 9]], [,, "800\\d{6,7}",,,, "800123456",,, [9, 10]], [,, "300\\d{6}|[59]00\\d{6,7}",,,, "300123456",,, [9, 10]], [,, "300\\d{7}|[34]00\\d{5}|4(?:02|37)0\\d{4}",,,, "40041234",,, [8, 10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "BR", 55, "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "0",,, "0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2",,, [[, "(\\d{3,6})", "$1", ["1(?:1[25-8]|2[357-9]|3[02-68]|4[12568]|5|6[0-8]|8[015]|9[0-47-9])|321|610"]], [, "(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]], [, "(\\d{4})(\\d{4})", "$1-$2", ["[2-57]", "[2357]|4(?:[0-24-9]|3(?:[0-689]|7[1-9]))"]], [, "(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], [, "(\\d{5})(\\d{4})", "$1-$2", ["9"]], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)", "0 $CC ($1)"], [, "(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)", "0 $CC ($1)"]], [[, "(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]], [, "(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)", "0 $CC ($1)"], [, "(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)", "0 $CC ($1)"]], [,,,,,,,,, [-1]],,, [,, "4020\\d{4}|[34]00\\d{5}",,,,,,, [8]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    BS: [, [,, "(?:242|[58]\\d\\d|900)\\d{7}",,,,,,, [10], [7]], [,, "242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[347]|8[0-4]|9[2-467])|461|502|6(?:0[1-4]|12|2[013]|[45]0|7[67]|8[78]|9[89])|7(?:02|88))\\d{4}",,,, "2423456789",,,, [7]], [,, "242(?:3(?:5[79]|7[56]|95)|4(?:[23][1-9]|4[1-35-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-46-9]|65|77)|6[34]6|7(?:27|38)|8(?:0[1-9]|1[02-9]|2\\d|[89]9))\\d{4}",,,, "2423591234",,,, [7]], [,, "242300\\d{4}|8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456",,,, [7]], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "BS", 1, "011", "1",,, "1|([3-8]\\d{6})$", "242$1",,,,, [,,,,,,,,, [-1]],, "242", [,,,,,,,,, [-1]], [,, "242225\\d{4}",,,, "2422250123"],,, [,,,,,,,,, [-1]]],
    BT: [, [,, "[17]\\d{7}|[2-8]\\d{6}",,,,,,, [7, 8], [6]], [,, "(?:2[3-6]|[34][5-7]|5[236]|6[2-46]|7[246]|8[2-4])\\d{5}",,,, "2345678",,, [7], [6]], [,, "(?:1[67]|77)\\d{6}",,,, "17123456",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "BT", 975, "00",,,,,,,, [[, "(\\d{3})(\\d{3})", "$1 $2", ["[2-7]"]], [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]], [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    BW: [, [,, "90\\d{5}|(?:[2-6]|7\\d)\\d{6}",,,,,,, [7, 8]], [,, "(?:2(?:4[0-48]|6[0-24]|9[0578])|3(?:1[0-35-9]|55|[69]\\d|7[013])|4(?:6[03]|7[1267]|9[0-5])|5(?:3[0389]|4[0489]|7[1-47]|88|9[0-49])|6(?:2[1-35]|5[149]|8[067]))\\d{4}",,,, "2401234",,, [7]], [,, "77200\\d{3}|7(?:[1-6]\\d|7[013-9])\\d{5}",,,, "71123456",,, [8]], [,,,,,,,,, [-1]], [,, "90\\d{5}",,,, "9012345",,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "79(?:1(?:[01]\\d|20)|2[0-2]\\d)\\d{3}",,,, "79101234",,, [8]], "BW", 267, "00",,,,,,,, [[, "(\\d{2})(\\d{5})", "$1 $2", ["90"]], [, "(\\d{3})(\\d{4})", "$1 $2", ["[2-6]"]], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    BY: [, [,, "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",,,,,,, [6, 7, 8, 9, 10, 11], [5]], [,, "(?:1(?:5(?:1[1-5]|[24]\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d\\d)|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:[26]\\d|3[02-79]|4[024-7]|5[03-7])))\\d{5}",,,, "152450911",,, [9], [5, 6, 7]], [,, "(?:2(?:5[5-79]|9[1-9])|(?:33|44)\\d)\\d{6}",,,, "294911911",,, [9]], [,, "800\\d{3,7}|8(?:0[13]|20\\d)\\d{7}",,,, "8011234567"], [,, "(?:810|902)\\d{7}",,,, "9021234567",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "249\\d{6}",,,, "249123456",,, [9]], "BY", 375, "810", "8",,, "0|80?",, "8~10",, [[, "(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], [, "(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], [, "(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], [, "(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]],, [,,,,,,,,, [-1]],,, [,, "800\\d{3,7}|(?:8(?:0[13]|10|20\\d)|902)\\d{7}"], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    BZ: [, [,, "(?:0800\\d|[2-8])\\d{6}",,,,,,, [7, 11]], [,, "(?:236|732)\\d{4}|[2-578][02]\\d{5}",,,, "2221234",,, [7]], [,, "6[0-35-7]\\d{5}",,,, "6221234",,, [7]], [,, "0800\\d{7}",,,, "08001234123",,, [11]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "BZ", 501, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], [, "(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CA: [, [,, "(?:[2-8]\\d|90)\\d{8}",,,,,,, [10], [7]], [,, "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|6[57])|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47|72)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",,,, "5062345678",,,, [7]], [,, "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|6[57])|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47|72)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",,,, "5062345678",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|(?:5(?:00|2[12]|33|44|66|77|88)|622)[2-9]\\d{6}",,,, "5002345678"], [,, "600[2-9]\\d{6}",,,, "6002012345"], "CA", 1, "011", "1",,, "1",,, 1,,, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CC: [, [,, "1(?:[0-79]\\d|8[0-24-9])\\d{7}|(?:[148]\\d\\d|550)\\d{6}|1\\d{5,7}",,,,,,, [6, 7, 8, 9, 10]], [,, "8(?:51(?:0(?:02|31|60)|118)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}",,,, "891621234",,, [9], [8]], [,, "483[0-3]\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-2457-9]|9[0-27-9])\\d{6}",,,, "412345678",,, [9]], [,, "180(?:0\\d{3}|2)\\d{3}",,,, "1800123456",,, [7, 10]], [,, "190[0-26]\\d{6}",,,, "1900123456",,, [10]], [,, "13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}",,,, "1300123456",,, [6, 8, 10]], [,,,,,,,,, [-1]], [,, "(?:14(?:5(?:1[0458]|[23][458])|71\\d)|550\\d\\d)\\d{4}",,,, "550123456",,, [9]], "CC", 61, "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "0",,, "0|([59]\\d{7})$", "8$1", "0011",,,, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CD: [, [,, "[189]\\d{8}|[1-68]\\d{6}",,,,,,, [7, 9]], [,, "12\\d{7}|[1-6]\\d{6}",,,, "1234567"], [,, "88\\d{5}|(?:8[0-2459]|9[017-9])\\d{7}",,,, "991234567"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "CD", 243, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], [, "(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CF: [, [,, "(?:[27]\\d{3}|8776)\\d{4}",,,,,,, [8]], [,, "2[12]\\d{6}",,,, "21612345"], [,, "7[0257]\\d{6}",,,, "70012345"], [,,,,,,,,, [-1]], [,, "8776\\d{4}",,,, "87761234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "CF", 236, "00",,,,,,,, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CG: [, [,, "222\\d{6}|(?:0\\d|80)\\d{7}",,,,,,, [9]], [,, "222[1-589]\\d{5}",,,, "222123456"], [,, "0[14-6]\\d{7}",,,, "061234567"], [,,,,,,,,, [-1]], [,, "80(?:0\\d\\d|11[0-4])\\d{4}",,,, "800123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "CG", 242, "00",,,,,,,, [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["801"]], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CH: [, [,, "8\\d{11}|[2-9]\\d{8}",,,,,,, [9, 12]], [,, "(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}",,,, "212345678",,, [9]], [,, "7[35-9]\\d{7}",,,, "781234567",,, [9]], [,, "800\\d{6}",,,, "800123456",,, [9]], [,, "90[016]\\d{6}",,,, "900123456",,, [9]], [,, "84[0248]\\d{6}",,,, "840123456",,, [9]], [,, "878\\d{6}",,,, "878123456",,, [9]], [,,,,,,,,, [-1]], "CH", 41, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]],, [,, "74[0248]\\d{6}",,,, "740123456",,, [9]],,, [,,,,,,,,, [-1]], [,, "5[18]\\d{7}",,,, "581234567",,, [9]],,, [,, "860\\d{9}",,,, "860123456789",,, [12]]],
    CI: [, [,, "[02-9]\\d{7}",,,,,,, [8]], [,, "(?:2(?:0[023]|1[02357]|[23][045]|4[03-5])|3(?:0[06]|1[069]|[2-4][07]|5[09]|6[08]))\\d{5}",,,, "21234567"], [,, "(?:2[0-3]80|97[0-3]\\d)\\d{4}|(?:0[1-9]|[457]\\d|6[014-9]|8[4-9]|95)\\d{6}",,,, "01234567"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "CI", 225, "00",,,,,,,, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[02-9]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CK: [, [,, "[2-578]\\d{4}",,,,,,, [5]], [,, "(?:2\\d|3[13-7]|4[1-5])\\d{3}",,,, "21234"], [,, "[578]\\d{4}",,,, "71234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "CK", 682, "00",,,,,,,, [[, "(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CL: [, [,, "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}",,,,,,, [9, 10, 11]], [,, "2(?:1982[0-6]|3314[05-9])\\d{3}|(?:2(?:1(?:160|962)|3(?:2\\d\\d|3(?:0\\d|1[0-35-9]|2[1-9]|3[0-2]|40)))|80[1-9]\\d\\d|9(?:3(?:[0-57-9]\\d\\d|6(?:0[02-9]|[1-9]\\d))|6(?:[0-8]\\d\\d|9(?:[02-79]\\d|1[05-9]))|7[1-9]\\d\\d|9(?:[03-9]\\d\\d|1(?:[0235-9]\\d|4[0-24-9])|2(?:[0-79]\\d|8[0-46-9]))))\\d{4}|(?:22|3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8[1-9]|9[2458])\\d{7}",,,, "221234567",,, [9]], [,, "2(?:1982[0-6]|3314[05-9])\\d{3}|(?:2(?:1(?:160|962)|3(?:2\\d\\d|3(?:0\\d|1[0-35-9]|2[1-9]|3[0-2]|40)))|80[1-9]\\d\\d|9(?:3(?:[0-57-9]\\d\\d|6(?:0[02-9]|[1-9]\\d))|6(?:[0-8]\\d\\d|9(?:[02-79]\\d|1[05-9]))|7[1-9]\\d\\d|9(?:[03-9]\\d\\d|1(?:[0235-9]\\d|4[0-24-9])|2(?:[0-79]\\d|8[0-46-9]))))\\d{4}|(?:22|3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8[1-9]|9[2458])\\d{7}",,,, "221234567",,, [9]], [,, "(?:123|8)00\\d{6}",,,, "800123456",,, [9, 11]], [,,,,,,,,, [-1]], [,, "600\\d{7,8}",,,, "6001234567",,, [10, 11]], [,,,,,,,,, [-1]], [,, "44\\d{7}",,,, "441234567",,, [9]], "CL", 56, "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0",,,,,,, 1, [[, "(\\d{4})", "$1", ["1(?:[03-589]|21)|[29]0|78"]], [, "(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-3]"], "($1)"], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], [, "(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]], [[, "(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-3]"], "($1)"], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], [, "(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]], [,,,,,,,,, [-1]],,, [,, "600\\d{7,8}",,,,,,, [10, 11]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CM: [, [,, "(?:[26]\\d\\d|88)\\d{6}",,,,,,, [8, 9]], [,, "2(?:22|33)\\d{6}",,,, "222123456",,, [9]], [,, "(?:24[23]|6[5-9]\\d)\\d{6}",,,, "671234567",,, [9]], [,, "88\\d{6}",,,, "88012345",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "CM", 237, "00",,,,,,,, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], [, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CN: [, [,, "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}",,,,,,, [7, 8, 9, 10, 11, 12], [5, 6]], [,, "(?:10(?:[02-79]\\d\\d|[18](?:0[1-9]|[1-9]\\d))|21(?:[18](?:0[1-9]|[1-9]\\d)|[2-79]\\d\\d))\\d{5}|(?:43[35]|754)\\d{7,8}|8(?:078\\d{7}|51\\d{7,8})|(?:10|(?:2|85)1|43[35]|754)(?:100\\d\\d|95\\d{3,4})|(?:2[02-57-9]|3(?:11|7[179])|4(?:[15]1|3[12])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[57]|6[09])|8(?:71|98))(?:[02-8]\\d{7}|1(?:0(?:0\\d\\d(?:\\d{3})?|[1-9]\\d{5})|[1-9]\\d{6})|9(?:[0-46-9]\\d{6}|5\\d{3}(?:\\d(?:\\d{2})?)?))|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|3[46-9]|5[2-9]|6[47-9]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-3689]|6[2368]|9[02-9])|8(?:1[236-8]|2[5-7]|3\\d|5[2-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[02-8]\\d{6}|1(?:0(?:0\\d\\d(?:\\d{2})?|[1-9]\\d{4})|[1-9]\\d{5})|9(?:[0-46-9]\\d{5}|5\\d{3,5}))",,,, "1012345678",,, [7, 8, 9, 10, 11], [5, 6]], [,, "1740[0-5]\\d{6}|1(?:[38]\\d|4[57]|5[0-35-9]|6[25-7]|7[0-35-8]|9[0135-9])\\d{8}",,,, "13123456789",,, [11]], [,, "(?:(?:10|21)8|8)00\\d{7}",,,, "8001234567",,, [10, 12]], [,, "16[08]\\d{5}",,,, "16812345",,, [8]], [,, "400\\d{7}|950\\d{7,8}|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))96\\d{3,4}",,,, "4001234567",,, [7, 8, 9, 10, 11], [5, 6]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "CN", 86, "00|1(?:[12]\\d|79)\\d\\d00", "0",,, "0|(1(?:[12]\\d|79)\\d\\d)",, "00",, [[, "(\\d{5,6})", "$1", ["96"]], [, "(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "(?:10|2[0-57-9])(?:100|9[56])"], "0$1", "$CC $1"], [, "(\\d{3})(\\d{4})", "$1 $2", ["[1-9]", "1[1-9]|26|[3-9]|(?:10|2[0-57-9])(?:[0-8]|9[0-47-9])", "1[1-9]|26|[3-9]|(?:10|2[0-57-9])(?:[02-8]|1(?:0[1-9]|[1-9])|9[0-47-9])"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["16[08]"]], [, "(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1", "$CC $1"], [, "(\\d{4})(\\d{4})", "$1 $2", ["[1-9]", "1[1-9]|26|[3-9]|(?:10|2[0-57-9])(?:[0-8]|9[0-47-9])", "26|3(?:[0268]|9[079])|4(?:[049]|2[02-68]|[35]0|6[0-356]|8[014-9])|5(?:0|2[0-24-689]|4[0-2457-9]|6[057-9]|90)|6(?:[0-24578]|6[14-79]|9[03-9])|7(?:0[02-9]|2[0135-79]|3[23]|4[0-27-9]|6[1457]|8)|8(?:[046]|1[01459]|2[0-489]|50|8[0-2459]|9[09])|9(?:0[0457]|1[08]|[268]|4[024-9])|(?:34|85[23])[0-8]|(?:1|58)[1-9]|(?:63|95)[06-9]|(?:33|85[23]9)[0-46-9]|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[0-8]|9[0-47-9])", "26|3(?:[0268]|3[0-46-9]|4[0-8]|9[079])|4(?:[049]|2[02-68]|[35]0|6[0-356]|8[014-9])|5(?:0|2[0-24-689]|4[0-2457-9]|6[057-9]|90)|6(?:[0-24578]|3[06-9]|6[14-79]|9[03-9])|7(?:0[02-9]|2[0135-79]|3[23]|4[0-27-9]|6[1457]|8)|8(?:[046]|1[01459]|2[0-489]|5(?:0|[23](?:[02-8]|1[1-9]|9[0-46-9]))|8[0-2459]|9[09])|9(?:0[0457]|1[08]|[268]|4[024-9]|5[06-9])|(?:1|58|85[23]10)[1-9]|(?:10|2[0-57-9])(?:[0-8]|9[0-47-9])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[02-8]|1(?:0[1-9]|[1-9])|9[0-47-9])"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"],, "$CC $1"], [, "(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1",, 1]], [[, "(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "(?:10|2[0-57-9])(?:100|9[56])"], "0$1", "$CC $1"], [, "(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1", "$CC $1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"],, "$CC $1"], [, "(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1",, 1]], [,,,,,,,,, [-1]],,, [,, "(?:(?:10|21)8|[48])00\\d{7}|950\\d{7,8}",,,,,,, [10, 11, 12]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CO: [, [,, "(?:1\\d|3)\\d{9}|[124-8]\\d{7}",,,,,,, [8, 10, 11], [7]], [,, "[124-8][2-9]\\d{6}",,,, "12345678",,, [8], [7]], [,, "3333(?:0(?:0\\d|1[0-5])|[4-9]\\d\\d)\\d{3}|33(?:00|3[0-24-9])\\d{6}|3(?:0[0-5]|1\\d|2[0-3]|5[01]|70)\\d{7}",,,, "3211234567",,, [10]], [,, "1800\\d{7}",,,, "18001234567",,, [11]], [,, "19(?:0[01]|4[78])\\d{7}",,,, "19001234567",,, [11]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "CO", 57, "00(?:4(?:[14]4|56)|[579])", "0",,, "0([3579]|4(?:[14]4|56))?",,,, [[, "(\\d)(\\d{7})", "$1 $2", ["[14][2-9]|[25-8]"], "($1)", "0$CC $1"], [, "(\\d{3})(\\d{7})", "$1 $2", ["3"],, "0$CC $1"], [, "(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1"]], [[, "(\\d)(\\d{7})", "$1 $2", ["[14][2-9]|[25-8]"], "($1)", "0$CC $1"], [, "(\\d{3})(\\d{7})", "$1 $2", ["3"],, "0$CC $1"], [, "(\\d)(\\d{3})(\\d{7})", "$1 $2 $3", ["1"]]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CR: [, [,, "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}",,,,,,, [8, 10]], [,, "210[7-9]\\d{4}|2(?:[024-7]\\d|1[1-9])\\d{5}",,,, "22123456",,, [8]], [,, "(?:3005\\d|6500[01])\\d{3}|(?:5[07]|6[0-4]|7[0-3]|8[3-9])\\d{6}",,,, "83123456",,, [8]], [,, "800\\d{7}",,,, "8001234567",,, [10]], [,, "90[059]\\d{7}",,,, "9001234567",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "(?:210[0-6]|4\\d{3}|5100)\\d{4}",,,, "40001234",,, [8]], "CR", 506, "00",,,, "(19(?:0[0-2468]|1[09]|20|66|77|99))",,,, [[, "(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"],, "$CC $1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"],, "$CC $1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CU: [, [,, "[27]\\d{6,7}|[34]\\d{5,7}|(?:5|8\\d\\d)\\d{7}",,,,,,, [6, 7, 8, 10], [4, 5]], [,, "(?:3[23]|48)\\d{4,6}|(?:31|4[36]|8(?:0[25]|78)\\d)\\d{6}|(?:2[1-4]|4[1257]|7\\d)\\d{5,6}",,,, "71234567",,,, [4, 5]], [,, "5\\d{7}",,,, "51234567",,, [8]], [,, "800\\d{7}",,,, "8001234567",,, [10]], [,,,,,,,,, [-1]], [,, "807\\d{7}",,,, "8071234567",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "CU", 53, "119", "0",,, "0",,,, [[, "(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], [, "(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], [, "(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"], [, "(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CV: [, [,, "(?:[2-59]\\d\\d|800)\\d{4}",,,,,,, [7]], [,, "2(?:2[1-7]|3[0-8]|4[12]|5[1256]|6\\d|7[1-3]|8[1-5])\\d{4}",,,, "2211234"], [,, "(?:[34][36]|5[1-389]|9\\d)\\d{5}",,,, "9911234"], [,, "800\\d{4}",,,, "8001234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "CV", 238, "0",,,,,,,, [[, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CW: [, [,, "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",,,,,,, [7, 8]], [,, "9(?:4(?:3[0-5]|4[14]|6\\d)|50\\d|7(?:2[014]|3[02-9]|4[4-9]|6[357]|77|8[7-9])|8(?:3[39]|[46]\\d|7[01]|8[57-9]))\\d{4}",,,, "94351234"], [,, "953[01]\\d{4}|9(?:5[12467]|6[5-9])\\d{5}",,,, "95181234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "60[0-2]\\d{4}",,,, "6001234",,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "CW", 599, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]],, [,, "955\\d{5}",,,, "95581234",,, [8]], 1, "[69]", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CX: [, [,, "1(?:[0-79]\\d|8[0-24-9])\\d{7}|(?:[148]\\d\\d|550)\\d{6}|1\\d{5,7}",,,,,,, [6, 7, 8, 9, 10]], [,, "8(?:51(?:0(?:01|30|59)|117)|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}",,,, "891641234",,, [9], [8]], [,, "483[0-3]\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-2457-9]|9[0-27-9])\\d{6}",,,, "412345678",,, [9]], [,, "180(?:0\\d{3}|2)\\d{3}",,,, "1800123456",,, [7, 10]], [,, "190[0-26]\\d{6}",,,, "1900123456",,, [10]], [,, "13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}",,,, "1300123456",,, [6, 8, 10]], [,,,,,,,,, [-1]], [,, "(?:14(?:5(?:1[0458]|[23][458])|71\\d)|550\\d\\d)\\d{4}",,,, "550123456",,, [9]], "CX", 61, "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "0",,, "0|([59]\\d{7})$", "8$1", "0011",,,, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    CY: [, [,, "(?:[279]\\d|[58]0)\\d{6}",,,,,,, [8]], [,, "2[2-6]\\d{6}",,,, "22345678"], [,, "9[4-79]\\d{6}",,,, "96123456"], [,, "800\\d{5}",,,, "80001234"], [,, "90[09]\\d{5}",,,, "90012345"], [,, "80[1-9]\\d{5}",,,, "80112345"], [,, "700\\d{5}",,,, "70012345"], [,,,,,,,,, [-1]], "CY", 357, "00",,,,,,,, [[, "(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "(?:50|77)\\d{6}",,,, "77123456"],,, [,,,,,,,,, [-1]]],
    CZ: [, [,, "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}",,,,,,, [9, 10, 11, 12]], [,, "(?:2\\d|3[1257-9]|4[16-9]|5[13-9])\\d{7}",,,, "212345678",,, [9]], [,, "(?:60[1-8]|7(?:0[2-5]|[2379]\\d))\\d{6}",,,, "601123456",,, [9]], [,, "800\\d{6}",,,, "800123456",,, [9]], [,, "9(?:0[05689]|76)\\d{6}",,,, "900123456",,, [9]], [,, "8[134]\\d{7}",,,, "811234567",,, [9]], [,, "70[01]\\d{6}",,,, "700123456",,, [9]], [,, "9[17]0\\d{6}",,,, "910123456",,, [9]], "CZ", 420, "00",,,,,,,, [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], [, "(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], [, "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "9(?:5\\d|7[2-4])\\d{6}",,,, "972123456",,, [9]],,, [,, "9(?:3\\d{9}|6\\d{7,10})",,,, "93123456789"]],
    DE: [, [,, "[2579]\\d{5,14}|49(?:[05]\\d{10}|[46][1-8]\\d{4,9})|49(?:[0-25]\\d|3[1-689]|7[1-7])\\d{4,8}|49(?:[0-2579]\\d|[34][1-9]|6[0-8])\\d{3}|49\\d{3,4}|(?:1|[368]\\d|4[0-8])\\d{3,13}",,,,,,, [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [2, 3]], [,, "(?:32|49[4-6]\\d)\\d{9}|49[0-7]\\d{3,9}|(?:[34]0|[68]9)\\d{3,13}|(?:2(?:0[1-689]|[1-3569]\\d|4[0-8]|7[1-7]|8[0-7])|3(?:[3569]\\d|4[0-79]|7[1-7]|8[1-8])|4(?:1[02-9]|[2-48]\\d|5[0-6]|6[0-8]|7[0-79])|5(?:0[2-8]|[124-6]\\d|[38][0-8]|[79][0-7])|6(?:0[02-9]|[1-358]\\d|[47][0-8]|6[1-9])|7(?:0[2-8]|1[1-9]|[27][0-7]|3\\d|[4-6][0-8]|8[0-5]|9[013-7])|8(?:0[2-9]|1[0-79]|2\\d|3[0-46-9]|4[0-6]|5[013-9]|6[1-8]|7[0-8]|8[0-24-6])|9(?:0[6-9]|[1-4]\\d|[589][0-7]|6[0-8]|7[0-467]))\\d{3,12}",,,, "30123456",,, [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [2, 3, 4]], [,, "15[0-25-9]\\d{8}|1(?:6[023]|7\\d)\\d{7,8}",,,, "15123456789",,, [10, 11]], [,, "800\\d{7,12}",,,, "8001234567890",,, [10, 11, 12, 13, 14, 15]], [,, "(?:137[7-9]|900(?:[135]|9\\d))\\d{6}",,,, "9001234567",,, [10, 11]], [,, "180\\d{5,11}|13(?:7[1-6]\\d\\d|8)\\d{4}",,,, "18012345",,, [7, 8, 9, 10, 11, 12, 13, 14]], [,, "700\\d{8}",,,, "70012345678",,, [11]], [,,,,,,,,, [-1]], "DE", 49, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], [, "(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], [, "(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], [, "(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], [, "(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], [, "(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], [, "(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], [, "(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], [, "(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], [, "(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], [, "(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], [, "(\\d{5})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"], [, "(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], [, "(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], [, "(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]],, [,, "16(?:4\\d{1,10}|[89]\\d{1,11})",,,, "16412345",,, [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]],,, [,,,,,,,,, [-1]], [,, "18(?:1\\d{5,11}|[2-9]\\d{8})",,,, "18500123456",,, [8, 9, 10, 11, 12, 13, 14]],,, [,, "1(?:6(?:013|255|399)|7(?:(?:[015]1|[69]3)3|[2-4]55|[78]99))\\d{7,8}|15(?:(?:[03-68]00|113)\\d|2\\d55|7\\d99|9\\d33)\\d{7}",,,, "177991234567",,, [12, 13]]],
    DJ: [, [,, "(?:2\\d|77)\\d{6}",,,,,,, [8]], [,, "2(?:1[2-5]|7[45])\\d{5}",,,, "21360003"], [,, "77\\d{6}",,,, "77831001"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "DJ", 253, "00",,,,,,,, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    DK: [, [,, "[2-9]\\d{7}",,,,,,, [8]], [,, "(?:[2-7]\\d|8[126-9]|9[1-46-9])\\d{6}",,,, "32123456"], [,, "(?:[2-7]\\d|8[126-9]|9[1-46-9])\\d{6}",,,, "32123456"], [,, "80\\d{6}",,,, "80123456"], [,, "90\\d{6}",,,, "90123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "DK", 45, "00",,,,,,, 1, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    DM: [, [,, "(?:[58]\\d\\d|767|900)\\d{7}",,,,,,, [10], [7]], [,, "767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4])\\d{4}",,,, "7674201234",,,, [7]], [,, "767(?:2(?:[2-4689]5|7[5-7])|31[5-7]|61[1-7]|70[1-6])\\d{4}",,,, "7672251234",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "DM", 1, "011", "1",,, "1|([2-7]\\d{6})$", "767$1",,,,, [,,,,,,,,, [-1]],, "767", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    DO: [, [,, "(?:[58]\\d\\d|900)\\d{7}",,,,,,, [10], [7]], [,, "8(?:[04]9[2-9]\\d\\d|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d\\d|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9])))\\d{4}",,,, "8092345678",,,, [7]], [,, "8[024]9[2-9]\\d{6}",,,, "8092345678",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "DO", 1, "011", "1",,, "1",,,,,, [,,,,,,,,, [-1]],, "8[024]9", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    DZ: [, [,, "(?:[1-4]|[5-79]\\d|80)\\d{7}",,,,,,, [8, 9]], [,, "9619\\d{5}|(?:1\\d|2[013-79]|3[0-8]|4[0135689])\\d{6}",,,, "12345678"], [,, "(?:5(?:4[0-29]|5\\d|6[01])|6(?:[569]\\d|7[0-6])|7[7-9]\\d)\\d{6}",,,, "551234567",,, [9]], [,, "800\\d{6}",,,, "800123456",,, [9]], [,, "80[3-689]1\\d{5}",,,, "808123456",,, [9]], [,, "80[12]1\\d{5}",,,, "801123456",,, [9]], [,,,,,,,,, [-1]], [,, "98[23]\\d{6}",,,, "983123456",,, [9]], "DZ", 213, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    EC: [, [,, "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}",,,,,,, [8, 9, 10, 11], [7]], [,, "[2-7][2-7]\\d{6}",,,, "22123456",,, [8], [7]], [,, "964[0-2]\\d{5}|9(?:39|[57][89]|6[0-36-9]|[89]\\d)\\d{6}",,,, "991234567",,, [9]], [,, "1800\\d{7}|1[78]00\\d{6}",,,, "18001234567",,, [10, 11]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "[2-7]890\\d{4}",,,, "28901234",,, [8]], "EC", 593, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{4})", "$1-$2", ["[2-7]"]], [, "(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], [[, "(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-7]"]], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    EE: [, [,, "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}",,,,,,, [7, 8, 10]], [,, "(?:3[23589]|4[3-8]|6\\d|7[1-9]|88)\\d{5}",,,, "3212345",,, [7]], [,, "5(?:[0-35-9]\\d{6}|4(?:[0-57-9]\\d{5}|6(?:[0-24-9]\\d{4}|3(?:[0-35-9]\\d{3}|4000))))|8(?:1(?:0(?:000|[3-9]\\d\\d)|(?:1(?:0[236]|1\\d)|(?:23|[3-79]\\d)\\d)\\d)|2(?:0(?:000|(?:19|[24-7]\\d)\\d)|(?:(?:[124-6]\\d|3[5-9]|8[2-4])\\d|7(?:[679]\\d|8[13-9]))\\d)|[349]\\d{4})\\d\\d|5(?:(?:[02]\\d|5[0-478])\\d|1(?:[0-8]\\d|95)|6(?:4[0-4]|5[1-589]))\\d{3}",,,, "51234567",,, [7, 8]], [,, "800(?:(?:0\\d\\d|1)\\d|[2-9])\\d{3}",,,, "80012345"], [,, "(?:40\\d\\d|900)\\d{4}",,,, "9001234",,, [7, 8]], [,,,,,,,,, [-1]], [,, "70[0-2]\\d{5}",,,, "70012345",,, [8]], [,,,,,,,,, [-1]], "EE", 372, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], [, "(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], [, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]],, [,,,,,,,,, [-1]],,, [,, "800[2-9]\\d{3}",,,,,,, [7]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    EG: [, [,, "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}",,,,,,, [8, 9, 10], [6, 7]], [,, "13[23]\\d{6}|(?:15|57)\\d{6,7}|(?:2[2-4]|3|4[05-8]|5[05]|6[24-689]|8[2468]|9[235-7])\\d{7}",,,, "234567890",,, [8, 9], [6, 7]], [,, "1[0-25]\\d{8}",,,, "1001234567",,, [10]], [,, "800\\d{7}",,,, "8001234567",,, [10]], [,, "900\\d{7}",,,, "9001234567",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "EG", 20, "00", "0",,, "0",,,, [[, "(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], [, "(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[189]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    EH: [, [,, "[5-8]\\d{8}",,,,,,, [9]], [,, "528[89]\\d{5}",,,, "528812345"], [,, "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[016-8]|6[1267]|7[0-27]))\\d{6}",,,, "650123456"], [,, "80\\d{7}",,,, "801234567"], [,, "89\\d{7}",,,, "891234567"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "592(?:4[0-2]|93)\\d{4}",,,, "592401234"], "EH", 212, "00", "0",,, "0",,,,,, [,,,,,,,,, [-1]],, "528[89]", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    ER: [, [,, "[178]\\d{6}",,,,,,, [7], [6]], [,, "(?:1(?:1[12568]|[24]0|55|6[146])|8\\d\\d)\\d{4}",,,, "8370362",,,, [6]], [,, "(?:17[1-3]|7\\d\\d)\\d{4}",,,, "7123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "ER", 291, "00", "0",,, "0",,,, [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    ES: [, [,, "(?:51|[6-9]\\d)\\d{7}",,,,,,, [9]], [,, "96906(?:0[0-8]|1[1-9]|[2-9]\\d)\\d\\d|9(?:69(?:0[0-57-9]|[1-9]\\d)|73(?:[0-8]\\d|9[1-9]))\\d{4}|(?:8(?:[1356]\\d|[28][0-8]|[47][1-9])|9(?:[135]\\d|[268][0-8]|4[1-9]|7[124-9]))\\d{6}",,,, "810123456"], [,, "9(?:6906(?:09|10)|7390\\d\\d)\\d\\d|(?:6\\d|7[1-48])\\d{7}",,,, "612345678"], [,, "[89]00\\d{6}",,,, "800123456"], [,, "80[367]\\d{6}",,,, "803123456"], [,, "90[12]\\d{6}",,,, "901123456"], [,, "70\\d{7}",,,, "701234567"], [,,,,,,,,, [-1]], "ES", 34, "00",,,,,,,, [[, "(\\d{4})", "$1", ["905"]], [, "(\\d{6})", "$1", ["[79]9"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]], [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "51\\d{7}",,,, "511234567"],,, [,,,,,,,,, [-1]]],
    ET: [, [,, "(?:11|[2-59]\\d)\\d{7}",,,,,,, [9], [7]], [,, "116671\\d{3}|(?:11(?:1(?:1[124]|2[2-57]|3[1-5]|5[5-8]|8[6-8])|2(?:13|3[6-8]|5[89]|7[05-9]|8[2-6])|3(?:2[01]|3[0-289]|4[1289]|7[1-4]|87)|4(?:1[69]|3[2-49]|4[0-3]|6[5-8])|5(?:1[578]|44|5[0-4])|6(?:1[78]|2[69]|39|4[5-7]|5[1-5]|6[0-59]|8[015-8]))|2(?:2(?:11[1-9]|22[0-7]|33\\d|44[1467]|66[1-68])|5(?:11[124-6]|33[2-8]|44[1467]|55[14]|66[1-3679]|77[124-79]|880))|3(?:3(?:11[0-46-8]|(?:22|55)[0-6]|33[0134689]|44[04]|66[01467])|4(?:44[0-8]|55[0-69]|66[0-3]|77[1-5]))|4(?:6(?:119|22[0-24-7]|33[1-5]|44[13-69]|55[14-689]|660|88[1-4])|7(?:(?:11|22)[1-9]|33[13-7]|44[13-6]|55[1-689]))|5(?:7(?:227|55[05]|(?:66|77)[14-8])|8(?:11[149]|22[013-79]|33[0-68]|44[013-8]|550|66[1-5]|77\\d)))\\d{4}",,,, "111112345",,,, [7]], [,, "9\\d{8}",,,, "911234567"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "ET", 251, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-59]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    FI: [, [,, "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}",,,,,,, [5, 6, 7, 8, 9, 10, 11, 12]], [,, "(?:1[3-79][1-8]|[235689][1-8]\\d)\\d{2,6}",,,, "131234567",,, [5, 6, 7, 8, 9]], [,, "(?:4[0-8]|50)\\d{4,8}",,,, "412345678",,, [6, 7, 8, 9, 10]], [,, "800\\d{4,6}",,,, "800123456",,, [7, 8, 9]], [,, "[67]00\\d{5,6}",,,, "600123456",,, [8, 9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "FI", 358, "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "0",,, "0",, "00",, [[, "(\\d{5})", "$1", ["75[12]"], "0$1"], [, "(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"], [, "(\\d{6})", "$1", ["11"]], [, "(\\d{3})(\\d{3,7})", "$1 $2", ["[12]00|[368]|70[07-9]"], "0$1"], [, "(\\d{2})(\\d{4,8})", "$1 $2", ["[1245]|7[135]"], "0$1"], [, "(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"]], [[, "(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"], [, "(\\d{3})(\\d{3,7})", "$1 $2", ["[12]00|[368]|70[07-9]"], "0$1"], [, "(\\d{2})(\\d{4,8})", "$1 $2", ["[1245]|7[135]"], "0$1"], [, "(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"]], [,,,,,,,,, [-1]], 1, "1[03-79]|[2-9]", [,, "20(?:2[023]|9[89])\\d{1,6}|(?:60[12]\\d|7099)\\d{4,5}|(?:606|7(?:0[78]|1|3\\d))\\d{7}|(?:[1-3]00|7(?:0[1-5]\\d\\d|5[03-9]))\\d{3,7}"], [,, "20\\d{4,8}|60[12]\\d{5,6}|7(?:099\\d{4,5}|5[03-9]\\d{3,7})|20[2-59]\\d\\d|(?:606|7(?:0[78]|1|3\\d))\\d{7}|(?:10|29|3[09]|70[1-5]\\d)\\d{4,8}",,,, "10112345"],,, [,,,,,,,,, [-1]]],
    FJ: [, [,, "45\\d{5}|(?:0800\\d|[235-9])\\d{6}",,,,,,, [7, 11]], [,, "603\\d{4}|(?:3[0-5]|6[25-7]|8[58])\\d{5}",,,, "3212345",,, [7]], [,, "(?:[279]\\d|45|5[01568]|8[034679])\\d{5}",,,, "7012345",,, [7]], [,, "0800\\d{7}",,,, "08001234567",,, [11]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "FJ", 679, "0(?:0|52)",,,,,, "00",, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    FK: [, [,, "[2-7]\\d{4}",,,,,,, [5]], [,, "[2-47]\\d{4}",,,, "31234"], [,, "[56]\\d{4}",,,, "51234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "FK", 500, "00",,,,,,,,,, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    FM: [, [,, "(?:[39]\\d\\d|820)\\d{4}",,,,,,, [7]], [,, "31(?:00[67]|208|309)\\d\\d|(?:3(?:[2357]0[1-9]|602|804|905)|(?:820|9[2-6]\\d)\\d)\\d{3}",,,, "3201234"], [,, "31(?:00[67]|208|309)\\d\\d|(?:3(?:[2357]0[1-9]|602|804|905)|(?:820|9[2-7]\\d)\\d)\\d{3}",,,, "3501234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "FM", 691, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    FO: [, [,, "(?:[2-8]\\d|90)\\d{4}",,,,,,, [6]], [,, "(?:20|[34]\\d|8[19])\\d{4}",,,, "201234"], [,, "(?:[27][1-9]|5\\d)\\d{4}",,,, "211234"], [,, "80[257-9]\\d{3}",,,, "802123"], [,, "90(?:[13-5][15-7]|2[125-7]|9\\d)\\d\\d",,,, "901123"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "(?:6[0-36]|88)\\d{4}",,,, "601234"], "FO", 298, "00",,,, "(10(?:01|[12]0|88))",,,, [[, "(\\d{6})", "$1", ["[2-9]"],, "$CC $1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    FR: [, [,, "[1-9]\\d{8}",,,,,,, [9]], [,, "(?:[1-35]\\d|4[1-9])\\d{7}",,,, "123456789"], [,, "700\\d{6}|(?:6\\d|7[3-9])\\d{7}",,,, "612345678"], [,, "80[0-5]\\d{6}",,,, "801234567"], [,, "836(?:0[0-36-9]|[1-9]\\d)\\d{4}|8(?:1[2-9]|2[2-47-9]|3[0-57-9]|[569]\\d|8[0-35-9])\\d{6}",,,, "891123456"], [,, "8(?:1[01]|2[0156]|84)\\d{6}",,,, "884012345"], [,,,,,,,,, [-1]], [,, "9\\d{8}",,,, "912345678"], "FR", 33, "00", "0",,, "0",,,, [[, "(\\d{4})", "$1", ["10"]], [, "(\\d{3})(\\d{3})", "$1 $2", ["1"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], [, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], [, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "80[6-9]\\d{6}",,,, "806123456"],,, [,,,,,,,,, [-1]]],
    GA: [, [,, "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}",,,,,,, [7, 8]], [,, "[01]1\\d{6}",,,, "01441234",,, [8]], [,, "(?:0[2-7]|6[256]|7[47])\\d{6}|[2-7]\\d{6}",,,, "06031234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "GA", 241, "00",,,, "0(11\\d{6}|6[256]\\d{6}|7[47]\\d{6})", "$1",,, [[, "(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    GB: [, [,, "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",,,,,,, [7, 9, 10], [4, 5, 6, 8]], [,, "(?:1(?:1(?:3(?:[0-58]\\d\\d|73[03])|(?:4[0-5]|5[0-26-9]|6[0-4]|[78][0-49])\\d\\d)|2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d\\d|1(?:[0-7]\\d\\d|8(?:0\\d|20)))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}",,,, "1212345678",,, [9, 10], [4, 5, 6, 7, 8]], [,, "7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}",,,, "7400123456",,, [10]], [,, "80[08]\\d{7}|800\\d{6}|8001111",,,, "8001234567"], [,, "(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d",,,, "9012345678",,, [7, 10]], [,,,,,,,,, [-1]], [,, "70\\d{8}",,,, "7012345678",,, [10]], [,, "56\\d{8}",,,, "5612345678",,, [10]], "GB", 44, "00", "0", " x",, "0",,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], [, "(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], [, "(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], [, "(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], [, "(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]],, [,, "76(?:0[0-2]|2[356]|34|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}",,,, "7640123456",,, [10]], 1,, [,,,,,,,,, [-1]], [,, "(?:3[0347]|55)\\d{8}",,,, "5512345678",,, [10]],,, [,,,,,,,,, [-1]]],
    GD: [, [,, "(?:473|[58]\\d\\d|900)\\d{7}",,,,,,, [10], [7]], [,, "473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-49]|5[5-79]|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}",,,, "4732691234",,,, [7]], [,, "473(?:4(?:0[2-79]|1[04-9]|2[0-5]|58)|5(?:2[01]|3[3-8])|901)\\d{4}",,,, "4734031234",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "GD", 1, "011", "1",,, "1|([2-9]\\d{6})$", "473$1",,,,, [,,,,,,,,, [-1]],, "473", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    GE: [, [,, "(?:[3-57]\\d\\d|800)\\d{6}",,,,,,, [9], [6, 7]], [,, "(?:3(?:[256]\\d|4[124-9]|7[0-4])|4(?:1\\d|2[2-7]|3[1-79]|4[2-8]|7[239]|9[1-7]))\\d{6}",,,, "322123456",,,, [6, 7]], [,, "5(?:0555[5-9]|757(?:7[7-9]|8[01]))\\d{3}|5(?:000\\d|(?:52|75)00|8(?:58[89]|888))\\d{4}|5(?:0050|1111|2222|3333)[0-4]\\d{3}|(?:5(?:[14]4|5[0157-9]|68|7[0147-9]|9[1-35-9])|790)\\d{6}",,,, "555123456"], [,, "800\\d{6}",,,, "800123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "706\\d{6}",,,, "706123456"], "GE", 995, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,, "706\\d{6}"], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    GF: [, [,, "(?:[56]94|976)\\d{6}",,,,,,, [9]], [,, "594(?:[023]\\d|1[01]|4[03-9]|5[6-9]|6[0-3]|80|9[014])\\d{4}",,,, "594101234"], [,, "694(?:[0-249]\\d|3[0-48])\\d{4}",,,, "694201234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "976\\d{6}",,,, "976012345"], "GF", 594, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    GG: [, [,, "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",,,,,,, [7, 9, 10], [6]], [,, "1481[25-9]\\d{5}",,,, "1481256789",,, [10], [6]], [,, "7(?:(?:781|839)\\d|911[17])\\d{5}",,,, "7781123456",,, [10]], [,, "80[08]\\d{7}|800\\d{6}|8001111",,,, "8001234567"], [,, "(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d",,,, "9012345678",,, [7, 10]], [,,,,,,,,, [-1]], [,, "70\\d{8}",,,, "7012345678",,, [10]], [,, "56\\d{8}",,,, "5612345678",,, [10]], "GG", 44, "00", "0",,, "0|([25-9]\\d{5})$", "1481$1",,,,, [,, "76(?:0[0-2]|2[356]|34|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}",,,, "7640123456",,, [10]],,, [,,,,,,,,, [-1]], [,, "(?:3[0347]|55)\\d{8}",,,, "5512345678",,, [10]],,, [,,,,,,,,, [-1]]],
    GH: [, [,, "(?:[235]\\d{3}|800)\\d{5}",,,,,,, [8, 9], [7]], [,, "3(?:[167]2[0-6]|22[0-5]|32[0-3]|4(?:2[013-9]|3[01])|52[0-7]|82[0-2])\\d{5}|3(?:[0-8]8|9[28])0\\d{5}|3(?:0[237]|[1-9]7)\\d{6}",,,, "302345678",,, [9], [7]], [,, "(?:2[0346-8]\\d|5(?:[0457]\\d|6[01]|9[1-6]))\\d{6}",,,, "231234567",,, [9]], [,, "800\\d{5}",,,, "80012345",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "GH", 233, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[237]|80"]], [, "(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], [[, "(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], [,,,,,,,,, [-1]],,, [,, "800\\d{5}",,,,,,, [8]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    GI: [, [,, "[256]\\d{7}",,,,,,, [8]], [,, "21(?:6[24-7]\\d|90[0-2])\\d{3}|2(?:00|2[25])\\d{5}",,,, "20012345"], [,, "(?:5[146-8]\\d|6(?:06|29))\\d{5}",,,, "57123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "GI", 350, "00",,,,,,,, [[, "(\\d{3})(\\d{5})", "$1 $2", ["2"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    GL: [, [,, "(?:19|[2-689]\\d)\\d{4}",,,,,,, [6]], [,, "(?:19|3[1-7]|6[14689]|8[14-79]|9\\d)\\d{4}",,,, "321000"], [,, "[245]\\d{5}",,,, "221234"], [,, "80\\d{4}",,,, "801234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "3[89]\\d{4}",,,, "381234"], "GL", 299, "00",,,,,,,, [[, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-689]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    GM: [, [,, "[2-9]\\d{6}",,,,,,, [7]], [,, "(?:4(?:[23]\\d\\d|4(?:1[024679]|[6-9]\\d))|5(?:5(?:3\\d|4[0-7])|6[67]\\d|7(?:1[04]|2[035]|3[58]|48))|8\\d{3})\\d{3}",,,, "5661234"], [,, "(?:[23679]\\d|5[0-389])\\d{5}",,,, "3012345"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "GM", 220, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    GN: [, [,, "722\\d{6}|(?:3|6\\d)\\d{7}",,,,,,, [8, 9]], [,, "3(?:0(?:24|3[12]|4[1-35-7]|5[13]|6[189]|[78]1|9[1478])|1\\d\\d)\\d{4}",,,, "30241234",,, [8]], [,, "6[02356]\\d{7}",,,, "601123456",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "722\\d{6}",,,, "722123456",,, [9]], "GN", 224, "00",,,,,,,, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    GP: [, [,, "(?:590|69\\d|976)\\d{6}",,,,,,, [9]], [,, "590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}",,,, "590201234"], [,, "69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}",,,, "690001234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "976[01]\\d{5}",,,, "976012345"], "GP", 590, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"]],, [,,,,,,,,, [-1]], 1,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    GQ: [, [,, "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}",,,,,,, [9]], [,, "33[0-24-9]\\d[46]\\d{4}|3(?:33|5\\d)\\d[7-9]\\d{4}",,,, "333091234"], [,, "(?:222|55[015])\\d{6}",,,, "222123456"], [,, "80\\d[1-9]\\d{5}",,,, "800123456"], [,, "90\\d[1-9]\\d{5}",,,, "900123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "GQ", 240, "00",,,,,,,, [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], [, "(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    GR: [, [,, "5005000\\d{3}|(?:[2689]\\d|70)\\d{8}",,,,,,, [10]], [,, "2(?:1\\d\\d|2(?:2[1-46-9]|[36][1-8]|4[1-7]|5[1-4]|7[1-5]|[89][1-9])|3(?:1\\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\\d|[269][1-6]|3[1245]|4[1-7]|5[13-9]|7[14]|8[1-5])|7(?:1\\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\\d|2[1-5]|[34][1-4]|9[1-57]))\\d{6}",,,, "2123456789"], [,, "68[57-9]\\d{7}|(?:69|94)\\d{8}",,,, "6912345678"], [,, "800\\d{7}",,,, "8001234567"], [,, "90[19]\\d{7}",,,, "9091234567"], [,, "8(?:0[16]|12|25)\\d{7}",,,, "8011234567"], [,, "70\\d{8}",,,, "7012345678"], [,,,,,,,,, [-1]], "GR", 30, "00",,,,,,,, [[, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], [, "(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "5005000\\d{3}",,,, "5005000123"],,, [,,,,,,,,, [-1]]],
    GT: [, [,, "(?:1\\d{3}|[2-7])\\d{7}",,,,,,, [8, 11]], [,, "[267][2-9]\\d{6}",,,, "22456789",,, [8]], [,, "[3-5]\\d{7}",,,, "51234567",,, [8]], [,, "18[01]\\d{8}",,,, "18001112222",,, [11]], [,, "19\\d{9}",,,, "19001112222",,, [11]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "GT", 502, "00",,,,,,,, [[, "(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    GU: [, [,, "(?:[58]\\d\\d|671|900)\\d{7}",,,,,,, [10], [7]], [,, "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}",,,, "6713001234",,,, [7]], [,, "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}",,,, "6713001234",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "GU", 1, "011", "1",,, "1|([3-9]\\d{6})$", "671$1",, 1,,, [,,,,,,,,, [-1]],, "671", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    GW: [, [,, "[49]\\d{8}|4\\d{6}",,,,,,, [7, 9]], [,, "443\\d{6}",,,, "443201234",,, [9]], [,, "9(?:5\\d|6[569]|77)\\d{6}",,,, "955012345",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "40\\d{5}",,,, "4012345",,, [7]], "GW", 245, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["40"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    GY: [, [,, "(?:862\\d|9008)\\d{3}|(?:[2-46]\\d|77)\\d{5}",,,,,,, [7]], [,, "(?:2(?:1[6-9]|2[0-35-9]|3[1-4]|5[3-9]|6\\d|7[0-24-79])|3(?:2[25-9]|3\\d)|4(?:4[0-24]|5[56])|77[1-57])\\d{4}",,,, "2201234"], [,, "6\\d{6}",,,, "6091234"], [,, "(?:289|862)\\d{4}",,,, "2891234"], [,, "9008\\d{3}",,,, "9008123"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "GY", 592, "001",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-46-9]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    HK: [, [,, "8[0-46-9]\\d{6,7}|9\\d{4}(?:\\d(?:\\d(?:\\d{4})?)?)?|(?:[235-79]\\d|46)\\d{6}",,,,,,, [5, 6, 7, 8, 9, 11]], [,, "(?:384[0-5]|58(?:0[1-8]|1[2-9]))\\d{4}|(?:2(?:[13-9]\\d|2[013-9])|3(?:[1569][0-24-9]|4[0-246-9]|7[0-24-69]|89))\\d{5}",,,, "21234567",,, [8]], [,, "(?:46(?:[01][0-6]|4[0-57-9])|5730|(?:626|848)[01]|707[1-5]|929[03-9])\\d{4}|(?:5(?:[1-59][0-46-9]|6[0-4689]|7[0-2469])|6(?:0[1-9]|[13-59]\\d|[268][0-57-9]|7[0-79])|9(?:0[1-9]|1[02-9]|[2358][0-8]|[467]\\d))\\d{5}",,,, "51234567",,, [8]], [,, "800\\d{6}",,,, "800123456",,, [9]], [,, "900(?:[0-24-9]\\d{7}|3\\d{1,4})",,,, "90012345678",,, [5, 6, 7, 8, 11]], [,,,,,,,,, [-1]], [,, "8(?:1[0-4679]\\d|2(?:[0-36]\\d|7[0-4])|3(?:[034]\\d|2[09]|70))\\d{4}",,,, "81123456",,, [8]], [,,,,,,,,, [-1]], "HK", 852, "00(?:30|5[09]|[126-9]?)",,,,,, "00",, [[, "(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], [, "(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]],, [,, "7(?:1(?:0[0-38]|1[0-3679]|3[013]|69|9[0136])|2(?:[02389]\\d|1[18]|7[27-9])|3(?:[0-38]\\d|7[0-369]|9[2357-9])|47\\d|5(?:[178]\\d|5[0-5])|6(?:0[0-7]|2[236-9]|[35]\\d)|7(?:[27]\\d|8[7-9])|8(?:[23689]\\d|7[1-9])|9(?:[025]\\d|6[0-246-8]|7[0-36-9]|8[238]))\\d{4}",,,, "71123456",,, [8]],,, [,,,,,,,,, [-1]], [,, "30(?:0[1-9]|[15-7]\\d|2[047]|89)\\d{4}",,,, "30161234",,, [8]],,, [,,,,,,,,, [-1]]],
    HN: [, [,, "8\\d{10}|[237-9]\\d{7}",,,,,,, [8, 11]], [,, "2(?:2(?:0[0139]|1[1-36]|[23]\\d|4[04-6]|5[57]|6[24]|7[0135689]|8[01346-9]|9[0-2])|4(?:07|2[3-59]|3[13-689]|4[0-68]|5[1-35])|5(?:0[78]|16|4[03-5]|5\\d|6[014-6]|74|80)|6(?:[056]\\d|17|2[07]|3[04]|4[0-378]|[78][0-8]|9[01])|7(?:6[46-9]|7[02-9]|8[034]|91)|8(?:79|8[0-357-9]|9[1-57-9]))\\d{4}",,,, "22123456",,, [8]], [,, "[37-9]\\d{7}",,,, "91234567",,, [8]], [,, "8002\\d{7}",,,, "80021234567",,, [11]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "HN", 504, "00",,,,,,,, [[, "(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]]], [[, "(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]], [,,,,,,,,, [-1]],,, [,, "8002\\d{7}",,,,,,, [11]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    HR: [, [,, "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}",,,,,,, [6, 7, 8, 9]], [,, "1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6,7}",,,, "12345678",,, [8, 9], [6, 7]], [,, "9(?:751\\d{5}|8\\d{6,7})|9(?:0[1-9]|[1259]\\d|7[0679])\\d{6}",,,, "921234567",,, [8, 9]], [,, "80[01]\\d{4,6}",,,, "800123456",,, [7, 8, 9]], [,, "6[01459]\\d{6}|6[01]\\d{4,5}",,,, "611234",,, [6, 7, 8]], [,,,,,,,,, [-1]], [,, "7[45]\\d{6}",,,, "74123456",,, [8]], [,,,,,,,,, [-1]], "HR", 385, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], [, "(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "62\\d{6,7}|72\\d{6}",,,, "62123456",,, [8, 9]],,, [,,,,,,,,, [-1]]],
    HT: [, [,, "[2-489]\\d{7}",,,,,,, [8]], [,, "2(?:2\\d|5[1-5]|81|9[149])\\d{5}",,,, "22453300"], [,, "[34]\\d{7}",,,, "34101234"], [,, "8\\d{7}",,,, "80012345"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "9(?:[67][0-4]|8[0-3589]|9\\d)\\d{5}",,,, "98901234"], "HT", 509, "00",,,,,,,, [[, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-489]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    HU: [, [,, "[2357]\\d{8}|[1-9]\\d{7}",,,,,,, [8, 9], [6, 7]], [,, "(?:1\\d|[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6[23689]|8[2-57-9]|9[2-69])\\d{6}",,,, "12345678",,, [8], [6, 7]], [,, "(?:[257]0|3[01])\\d{7}",,,, "201234567",,, [9]], [,, "[48]0\\d{6}",,,, "80123456",,, [8]], [,, "9[01]\\d{6}",,,, "90123456",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "21\\d{7}",,,, "211234567",,, [9]], "HU", 36, "00", "06",,, "06",,,, [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57-9]"], "06 $1"]],, [,,,,,,,,, [-1]],,, [,, "[48]0\\d{6}",,,,,,, [8]], [,, "38\\d{7}",,,, "381234567",,, [9]],,, [,,,,,,,,, [-1]]],
    ID: [, [,, "(?:(?:007803|8\\d{4})\\d|[1-36])\\d{6}|[1-9]\\d{8,10}|[2-9]\\d{7}",,,,,,, [7, 8, 9, 10, 11, 12, 13], [5, 6]], [,, "2[124]\\d{7,8}|619\\d{8}|2(?:1(?:14|500)|2\\d{3})\\d{3}|61\\d{5,8}|(?:2(?:[35][1-4]|6[0-8]|7[1-6]|8\\d|9[1-8])|3(?:1|[25][1-8]|3[1-68]|4[1-3]|6[1-3568]|7[0-469]|8\\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|43|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[124-9]|4[1-3589]|5[1-46]|6[1-8])|6(?:[25]\\d|3[1-69]|4[1-6])|7(?:02|[125][1-9]|[36]\\d|4[1-8]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\\d{5,8}",,,, "218350123",,, [7, 8, 9, 10, 11], [5, 6]], [,, "8[1-35-9]\\d{7,10}",,,, "812345678",,, [9, 10, 11, 12]], [,, "007803\\d{7}|(?:177\\d|800)\\d{5,7}",,,, "8001234567",,, [8, 9, 10, 11, 13]], [,, "809\\d{7}",,,, "8091234567",,, [10]], [,, "804\\d{7}",,,, "8041234567",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "ID", 62, "00[189]", "0",,, "0",,,, [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], [, "(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], [, "(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], [, "(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], [, "(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], [, "(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], [, "(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], [, "(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["0"]]], [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], [, "(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], [, "(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], [, "(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], [, "(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], [, "(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], [, "(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], [, "(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], [,,,,,,,,, [-1]],,, [,, "(?:007803\\d|8071)\\d{6}",,,,,,, [10, 13]], [,, "(?:1500|8071\\d{3})\\d{3}",,,, "8071123456",,, [7, 10]],,, [,,,,,,,,, [-1]]],
    IE: [, [,, "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}",,,,,,, [7, 8, 9, 10], [5, 6]], [,, "(?:1\\d|21)\\d{6,7}|(?:2[24-9]|4(?:0[24]|5\\d|7)|5(?:0[45]|1\\d|8)|6(?:1\\d|[237-9])|9(?:1\\d|[35-9]))\\d{5}|(?:23|4(?:[1-469]|8\\d)|5[23679]|6[4-6]|7[14]|9[04])\\d{7}",,,, "2212345",,,, [5, 6]], [,, "8(?:22|[35-9]\\d)\\d{6}",,,, "850123456",,, [9]], [,, "1800\\d{6}",,,, "1800123456",,, [10]], [,, "15(?:1[2-8]|[2-8]0|9[089])\\d{6}",,,, "1520123456",,, [10]], [,, "18[59]0\\d{6}",,,, "1850123456",,, [10]], [,, "700\\d{6}",,,, "700123456",,, [9]], [,, "76\\d{7}",,,, "761234567",,, [9]], "IE", 353, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], [, "(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], [, "(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], [, "(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]],, [,,,,,,,,, [-1]],,, [,, "18[59]0\\d{6}",,,,,,, [10]], [,, "818\\d{6}",,,, "818123456",,, [9]],,, [,, "88210[1-9]\\d{4}|8(?:[35-79]5\\d\\d|8(?:[013-9]\\d\\d|2(?:[01][1-9]|[2-9]\\d)))\\d{5}",,,, "8551234567",,, [10]]],
    IL: [, [,, "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}",,,,,,, [7, 8, 9, 10, 11, 12]], [,, "153\\d{8,9}|29[1-9]\\d{5}|(?:2[0-8]|[3489]\\d)\\d{6}",,,, "21234567",,, [8, 11, 12], [7]], [,, "5(?:(?:[02368]\\d|[19][2-9]|4[1-9])\\d|5(?:01|1[79]|2[2-8]|3[23]|44|5[05689]|6[6-8]|7[0-267]|8[7-9]|9[1-9]))\\d{5}",,,, "502345678",,, [9]], [,, "1(?:255|80[019]\\d{3})\\d{3}",,,, "1800123456",,, [7, 10]], [,, "1212\\d{4}|1(?:200|9(?:0[01]|19))\\d{6}",,,, "1919123456",,, [8, 10]], [,, "1700\\d{6}",,,, "1700123456",,, [10]], [,,,,,,,,, [-1]], [,, "78(?:33|55|77|81)\\d{5}|7(?:18|2[23]|3[237]|47|6[58]|7\\d|82|9[235-9])\\d{6}",,,, "771234567",,, [9]], "IL", 972, "0(?:0|1[2-9])", "0",,, "0",,,, [[, "(\\d{4})(\\d{3})", "$1-$2", ["125"]], [, "(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], [, "(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], [, "(\\d{4})(\\d{6})", "$1-$2", ["159"]], [, "(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], [, "(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]],, [,,,,,,,,, [-1]],,, [,, "1700\\d{6}",,,,,,, [10]], [,, "1599\\d{6}",,,, "1599123456",,, [10]],,, [,, "151\\d{8,9}",,,, "15112340000",,, [11, 12]]],
    IM: [, [,, "1624\\d{6}|(?:[3578]\\d|90)\\d{8}",,,,,,, [10], [6]], [,, "1624[5-8]\\d{5}",,,, "1624756789",,,, [6]], [,, "76245[06]\\d{4}|7(?:4576|[59]24\\d|624[0-4689])\\d{5}",,,, "7924123456"], [,, "808162\\d{4}",,,, "8081624567"], [,, "8(?:440[49]06|72299\\d)\\d{3}|(?:8(?:45|70)|90[0167])624\\d{4}",,,, "9016247890"], [,,,,,,,,, [-1]], [,, "70\\d{8}",,,, "7012345678"], [,, "56\\d{8}",,,, "5612345678"], "IM", 44, "00", "0",,, "0|([5-8]\\d{5})$", "1624$1",,,,, [,,,,,,,,, [-1]],, "74576|(?:16|7[56])24", [,,,,,,,,, [-1]], [,, "3440[49]06\\d{3}|(?:3(?:08162|3\\d{4}|45624|7(?:0624|2299))|55\\d{4})\\d{4}",,,, "5512345678"],,, [,,,,,,,,, [-1]]],
    IN: [, [,, "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}",,,,,,, [8, 9, 10, 11, 12, 13], [6, 7]], [,, "2717(?:[2-7]\\d|95)\\d{4}|(?:271[0-689]|782[0-6])[2-7]\\d{5}|(?:170[24]|2(?:(?:[02][2-79]|90)\\d|80[13468])|(?:3(?:23|80)|683|79[1-7])\\d|4(?:20[24]|72[2-8])|552[1-7])\\d{6}|(?:11|33|4[04]|80)[2-7]\\d{7}|(?:342|674|788)(?:[0189][2-7]|[2-7]\\d)\\d{5}|(?:1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6[014]|7[1257]|8[01346])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[13]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[014-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91))[2-7]\\d{6}|(?:1(?:2[35-8]|3[346-9]|4[236-9]|[59][0235-9]|6[235-9]|7[34689]|8[257-9])|2(?:1[134689]|3[24-8]|4[2-8]|5[25689]|6[2-4679]|7[3-79]|8[2-479]|9[235-9])|3(?:01|1[79]|2[1245]|4[5-8]|5[125689]|6[235-7]|7[157-9]|8[2-46-8])|4(?:1[14578]|2[5689]|3[2-467]|5[4-7]|6[35]|73|8[2689]|9[2389])|5(?:[16][146-9]|2[14-8]|3[1346]|4[14-69]|5[46]|7[2-4]|8[2-8]|9[246])|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])|7(?:1[013-9]|2[0235-9]|3[2679]|4[1-35689]|5[2-46-9]|[67][02-9]|8[013-7]|9[089])|8(?:1[1357-9]|2[235-8]|3[03-57-9]|4[0-24-9]|5\\d|6[2457-9]|7[1-6]|8[1256]|9[2-4]))\\d[2-7]\\d{5}",,,, "7410410123",,, [10], [6, 7, 8]], [,, "(?:61279|7(?:887[02-9]|9(?:313|79[07-9]))|8(?:079[04-9]|(?:84|91)7[02-8]))\\d{5}|(?:6(?:12|[2-47]1|5[17]|6[13]|80)[0189]|7(?:1(?:2[0189]|9[0-5])|2(?:[14][017-9]|8[0-59])|3(?:2[5-8]|[34][017-9]|9[016-9])|4(?:1[015-9]|[29][89]|39|8[389])|5(?:[15][017-9]|2[04-9]|9[7-9])|6(?:0[0-47]|1[0-257-9]|2[0-4]|3[19]|5[4589])|70[0289]|88[089]|97[02-8])|8(?:0(?:6[67]|7[02-8])|70[017-9]|84[01489]|91[0-289]))\\d{6}|(?:7(?:31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[0189]\\d|7[02-8])\\d{5}|(?:6(?:[09]\\d|1[04679]|2[03689]|3[05-9]|4[0489]|50|6[069]|7[07]|8[7-9])|7(?:0\\d|2[0235-79]|3[05-8]|40|5[0346-8]|6[6-9]|7[1-9]|8[0-79]|9[089])|8(?:0[01589]|1[0-57-9]|2[235-9]|3[03-57-9]|[45]\\d|6[02457-9]|7[1-69]|8[0-25-9]|9[02-9])|9\\d\\d)\\d{7}|(?:6(?:(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|8[124-6])\\d|7(?:[235689]\\d|4[0189]))|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-5])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]|881))[0189]\\d{5}",,,, "8123456789",,, [10]], [,, "000800\\d{7}|1(?:600\\d{6}|80(?:0\\d{4,9}|3\\d{9}))",,,, "1800123456"], [,, "186[12]\\d{9}",,,, "1861123456789",,, [13]], [,, "1860\\d{7}",,,, "18603451234",,, [11]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "IN", 91, "00", "0",,, "0",,,, [[, "(\\d{7})", "$1", ["575"]], [, "(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"],,, 1], [, "(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"],,, 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"],,, 1], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1",, 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1",, 1], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1",, 1], [, "(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1",, 1], [, "(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"],,, 1], [, "(\\d{3})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["0"]], [, "(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"],,, 1]], [[, "(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"],,, 1], [, "(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"],,, 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"],,, 1], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1",, 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1",, 1], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1",, 1], [, "(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1",, 1], [, "(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"],,, 1], [, "(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"],,, 1]], [,,,,,,,,, [-1]],,, [,, "1(?:600\\d{6}|800\\d{4,9})|(?:000800|18(?:03\\d\\d|6(?:0|[12]\\d\\d)))\\d{7}"], [,, "140\\d{7}",,,, "1409305260",,, [10]],,, [,,,,,,,,, [-1]]],
    IO: [, [,, "3\\d{6}",,,,,,, [7]], [,, "37\\d{5}",,,, "3709100"], [,, "38\\d{5}",,,, "3801234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "IO", 246, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["3"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    IQ: [, [,, "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",,,,,,, [8, 9, 10], [6, 7]], [,, "1\\d{7}|(?:2[13-5]|3[02367]|4[023]|5[03]|6[026])\\d{6,7}",,,, "12345678",,, [8, 9], [6, 7]], [,, "7[3-9]\\d{8}",,,, "7912345678",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "IQ", 964, "00", "0",,, "0",,,, [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    IR: [, [,, "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",,,,,,, [4, 5, 6, 7, 10], [8]], [,, "(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])(?:[03-57]\\d{7}|[16]\\d{3}(?:\\d{4})?|[289]\\d{3}(?:\\d(?:\\d{3})?)?)|94(?:000[09]|2(?:121|[2689]0\\d)|30[0-2]\\d|4(?:111|40\\d))\\d{4}",,,, "2123456789",,, [6, 7, 10], [4, 5, 8]], [,, "9(?:(?:0(?:[1-35]\\d|44)|(?:[13]\\d|2[0-2])\\d)\\d|9(?:(?:[0-2]\\d|4[45])\\d|5[15]0|8(?:1\\d|88)|9(?:0[013]|1[0134]|21|77|9[6-9])))\\d{5}",,,, "9123456789",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "993\\d{7}",,,, "9932123456",,, [10]], "IR", 98, "00", "0",,, "0",,,, [[, "(\\d{4,5})", "$1", ["96"], "0$1"], [, "(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,, "9(?:4440\\d{5}|6(?:0[12]|2[16-8]|3(?:08|[14]5|[23]|66)|4(?:0|80)|5[01]|6[89]|86|9[19]))",,,,,,, [4, 5, 10]], [,, "96(?:0[12]|2[16-8]|3(?:08|[14]5|[23]|66)|4(?:0|80)|5[01]|6[89]|86|9[19])",,,, "9601",,, [4, 5]],,, [,,,,,,,,, [-1]]],
    IS: [, [,, "(?:38\\d|[4-9])\\d{6}",,,,,,, [7, 9]], [,, "(?:4(?:1[0-24-69]|2[0-7]|[37][0-8]|4[0-245]|5[0-68]|6\\d|8[0-36-8])|5(?:05|[156]\\d|2[02578]|3[0-579]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|872)\\d{4}",,,, "4101234",,, [7]], [,, "(?:38[589]\\d\\d|6(?:1[1-8]|2[0-6]|3[027-9]|4[014679]|5[0159]|6[0-69]|70|8[06-8]|9\\d)|7(?:5[057]|[6-9]\\d)|8(?:2[0-59]|[3-69]\\d|8[28]))\\d{4}",,,, "6111234"], [,, "80[08]\\d{4}",,,, "8001234",,, [7]], [,, "90(?:0\\d|1[5-79]|2[015-79]|3[135-79]|4[125-7]|5[25-79]|7[1-37]|8[0-35-7])\\d{3}",,,, "9001234",,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "49[0-24-79]\\d{4}",,,, "4921234",,, [7]], "IS", 354, "00|1(?:0(?:01|[12]0)|100)",,,,,, "00",, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "809\\d{4}",,,, "8091234",,, [7]],,, [,, "(?:689|8(?:7[18]|80)|95[48])\\d{4}",,,, "6891234",,, [7]]],
    IT: [, [,, "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",,,,,,, [6, 7, 8, 9, 10, 11, 12]], [,, "0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}",,,, "0212345678",,, [6, 7, 8, 9, 10, 11]], [,, "3[1-9]\\d{8}|3[2-9]\\d{7}",,,, "3123456789",,, [9, 10]], [,, "80(?:0\\d{3}|3)\\d{3}",,,, "800123456",,, [6, 9]], [,, "(?:0878\\d\\d|89(?:2|4[5-9]\\d))\\d{3}|89[45][0-4]\\d\\d|(?:1(?:44|6[346])|89(?:5[5-9]|9))\\d{6}",,,, "899123456",,, [6, 8, 9, 10]], [,, "84(?:[08]\\d{3}|[17])\\d{3}",,,, "848123456",,, [6, 9]], [,, "1(?:78\\d|99)\\d{6}",,,, "1781234567",,, [9, 10]], [,, "55\\d{8}",,,, "5512345678",,, [10]], "IT", 39, "00",,,,,,,, [[, "(\\d{4,5})", "$1", ["1(?:0|9[246])", "1(?:0|9(?:2[2-9]|[46]))"]], [, "(\\d{6})", "$1", ["1(?:1|92)"]], [, "(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], [, "(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]], [, "(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["894"]], [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1[4679]|[38]"]], [, "(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]], [, "(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], [, "(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]], [[, "(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], [, "(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]], [, "(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["894"]], [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1[4679]|[38]"]], [, "(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]], [, "(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], [, "(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]], [,,,,,,,,, [-1]], 1,, [,, "848\\d{6}",,,,,,, [9]], [,,,,,,,,, [-1]],,, [,, "3[2-8]\\d{9,10}",,,, "33101234501",,, [11, 12]]],
    JE: [, [,, "1534\\d{6}|(?:[3578]\\d|90)\\d{8}",,,,,,, [10], [6]], [,, "1534[0-24-8]\\d{5}",,,, "1534456789",,,, [6]], [,, "7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}",,,, "7797712345"], [,, "80(?:07(?:35|81)|8901)\\d{4}",,,, "8007354567"], [,, "(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}",,,, "9018105678"], [,,,,,,,,, [-1]], [,, "701511\\d{4}",,,, "7015115678"], [,, "56\\d{8}",,,, "5612345678"], "JE", 44, "00", "0",,, "0|([0-24-8]\\d{5})$", "1534$1",,,,, [,, "76(?:0[0-2]|2[356]|34|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}",,,, "7640123456"],,, [,,,,,,,,, [-1]], [,, "(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}",,,, "5512345678"],,, [,,,,,,,,, [-1]]],
    JM: [, [,, "(?:[58]\\d\\d|658|900)\\d{7}",,,,,,, [10], [7]], [,, "(?:658(?:2(?:[0-8]\\d|9[0-46-9])|[3-9]\\d\\d)|876(?:5(?:02|1[0-468]|2[35]|63)|6(?:0[1-3579]|1[0237-9]|[23]\\d|40|5[06]|6[2-589]|7[05]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468])))\\d{4}",,,, "8765230123",,,, [7]], [,, "(?:658295|876(?:(?:2[14-9]|[348]\\d)\\d|5(?:0[13-9]|1[579]|[2-57-9]\\d|6[0-24-9])|6(?:4[89]|6[67])|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579])))\\d{4}",,,, "8762101234",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "JM", 1, "011", "1",,, "1",,,,,, [,,,,,,,,, [-1]],, "658|876", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    JO: [, [,, "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}",,,,,,, [8, 9]], [,, "87(?:000|90[01])\\d{3}|(?:2(?:6(?:2[0-35-9]|3[0-578]|4[24-7]|5[0-24-8]|[6-8][023]|9[0-3])|7(?:0[1-79]|10|2[014-7]|3[0-689]|4[019]|5[0-3578]))|32(?:0[1-69]|1[1-35-7]|2[024-7]|3\\d|4[0-3]|[5-7][023])|53(?:0[0-3]|[13][023]|2[0-59]|49|5[0-35-9]|6[15]|7[45]|8[1-6]|9[0-36-9])|6(?:2(?:[05]0|22)|3(?:00|33)|4(?:0[0-25]|1[2-467]|2[0569]|[38][07-9]|4[025689]|6[0-589]|7\\d|9[0-2])|5(?:[01][056]|2[034]|3[0-57-9]|4[178]|5[0-69]|6[0-35-9]|7[1-379]|8[0-68]|9[0239]))|87(?:20|7[078]|99))\\d{4}",,,, "62001234",,, [8]], [,, "7(?:[78][0-25-9]|9\\d)\\d{6}",,,, "790123456",,, [9]], [,, "80\\d{6}",,,, "80012345",,, [8]], [,, "9\\d{7}",,,, "90012345",,, [8]], [,, "85\\d{6}",,,, "85012345",,, [8]], [,, "70\\d{7}",,,, "700123456",,, [9]], [,,,,,,,,, [-1]], "JO", 962, "00", "0",,, "0",,,, [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], [, "(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], [, "(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]],, [,, "74(?:66|77)\\d{5}",,,, "746612345",,, [9]],,, [,,,,,,,,, [-1]], [,, "8(?:10|8\\d)\\d{5}",,,, "88101234",,, [8]],,, [,,,,,,,,, [-1]]],
    JP: [, [,, "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",,,,,,, [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]], [,, "(?:1(?:1[235-8]|2[3-6]|3[3-9]|4[2-6]|[58][2-8]|6[2-7]|7[2-9]|9[1-9])|(?:2[2-9]|[36][1-9])\\d|4(?:[2-578]\\d|6[02-8]|9[2-59])|5(?:[2-589]\\d|6[1-9]|7[2-8])|7(?:[25-9]\\d|3[4-9]|4[02-9])|8(?:[2679]\\d|3[2-9]|4[5-9]|5[1-9]|8[03-9])|9(?:[2-58]\\d|[679][1-9]))\\d{6}",,,, "312345678",,, [9]], [,, "[7-9]0[1-9]\\d{7}",,,, "9012345678",,, [10]], [,, "00(?:(?:37|66)\\d{6,13}|(?:777(?:[01]|(?:5|8\\d)\\d)|882[1245]\\d\\d)\\d\\d)|(?:120|800\\d)\\d{6}",,,, "120123456"], [,, "990\\d{6}",,,, "990123456",,, [9]], [,,,,,,,,, [-1]], [,, "60\\d{7}",,,, "601234567",,, [9]], [,, "50[1-9]\\d{7}",,,, "5012345678",,, [10]], "JP", 81, "010", "0",,, "0",,,, [[, "(\\d{4})(\\d{4})", "$1-$2", ["007", "0077", "00777", "00777[01]"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], [, "(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], [, "(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[279]|49|6[0-24-9]|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|6(?:[0-24]|5[0-3589]|72|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3[3-8]|5[2-9])", "[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3(?:[3-6][2-9]|7|8[2-5])|5[2-9])"], "0$1"], [, "(\\d{4})(\\d{2})(\\d{3,4})", "$1-$2-$3", ["007"]], [, "(\\d{4})(\\d{2})(\\d{4})", "$1-$2-$3", ["008"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]|80"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3,4})", "$1-$2-$3", ["0"]], [, "(\\d{4})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["0"]], [, "(\\d{4})(\\d{5})(\\d{5,6})", "$1-$2-$3", ["0"]], [, "(\\d{4})(\\d{6})(\\d{6,7})", "$1-$2-$3", ["0"]]], [[, "(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], [, "(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], [, "(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[279]|49|6[0-24-9]|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|6(?:[0-24]|5[0-3589]|72|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3[3-8]|5[2-9])", "[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3(?:[3-6][2-9]|7|8[2-5])|5[2-9])"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]|80"], "0$1"]], [,, "20\\d{8}",,,, "2012345678",,, [10]],,, [,, "00(?:777(?:[01]|(?:5|8\\d)\\d)|882[1245]\\d\\d)\\d\\d|00(?:37|66)\\d{6,13}"], [,, "570\\d{6}",,,, "570123456",,, [9]],,, [,,,,,,,,, [-1]]],
    KE: [, [,, "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}",,,,,,, [7, 8, 9, 10]], [,, "(?:4[245]|5[1-79]|6[01457-9])\\d{5,7}|(?:4[136]|5[08]|62)\\d{7}|(?:[24]0|66)\\d{6,7}",,,, "202012345",,, [7, 8, 9]], [,, "(?:1(?:0[0-2]|1[01])|7\\d\\d)\\d{6}",,,, "712123456",,, [9]], [,, "800[24-8]\\d{5,6}",,,, "800223456",,, [9, 10]], [,, "900[02-9]\\d{5}",,,, "900223456",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "KE", 254, "000", "0",,, "0",,,, [[, "(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], [, "(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    KG: [, [,, "8\\d{9}|(?:[235-8]\\d|99)\\d{7}",,,,,,, [9, 10], [5, 6]], [,, "312(?:5[0-79]\\d|9(?:[0-689]\\d|7[0-24-9]))\\d{3}|(?:3(?:1(?:2[0-46-8]|3[1-9]|47|[56]\\d)|2(?:22|3[0-479]|6[0-7])|4(?:22|5[6-9]|6\\d)|5(?:22|3[4-7]|59|6\\d)|6(?:22|5[35-7]|6\\d)|7(?:22|3[468]|4[1-9]|59|[67]\\d)|9(?:22|4[1-8]|6\\d))|6(?:09|12|2[2-4])\\d)\\d{5}",,,, "312123456",,, [9], [5, 6]], [,, "(?:312(?:58\\d|973)|8801\\d\\d)\\d{3}|(?:2(?:0[0-35]|2\\d)|5[0-24-7]\\d|7(?:[07]\\d|55)|99[05-9])\\d{6}",,,, "700123456",,, [9]], [,, "800\\d{6,7}",,,, "800123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "KG", 996, "00", "0",,, "0",,,, [[, "(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], [, "(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    KH: [, [,, "1\\d{9}|[1-9]\\d{7,8}",,,,,,, [8, 9, 10], [6, 7]], [,, "23(?:4(?:[2-4]|[56]\\d)|[568]\\d\\d)\\d{4}|23[236-9]\\d{5}|(?:2[4-6]|3[2-6]|4[2-4]|[5-7][2-5])(?:(?:[237-9]|4[56]|5\\d)\\d{5}|6\\d{5,6})",,,, "23756789",,, [8, 9], [6, 7]], [,, "(?:(?:1[28]|3[18]|9[67])\\d|6[016-9]|7(?:[07-9]|[16]\\d)|8(?:[013-79]|8\\d))\\d{6}|(?:1\\d|9[0-57-9])\\d{6}|(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])48\\d{5}",,,, "91234567",,, [8, 9]], [,, "1800(?:1\\d|2[019])\\d{4}",,,, "1800123456",,, [10]], [,, "1900(?:1\\d|2[09])\\d{4}",,,, "1900123456",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "KH", 855, "00[14-9]", "0",,, "0",,,, [[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    KI: [, [,, "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",,,,,,, [5, 8]], [,, "(?:[24]\\d|3[1-9]|50|65(?:02[12]|12[56]|22[89]|[3-5]00)|7(?:27\\d\\d|3100|5(?:02[12]|12[56]|22[89]|[34](?:00|81)|500))|8[0-5])\\d{3}",,,, "31234"], [,, "(?:63\\d{3}|73(?:0[0-5]\\d|140))\\d{3}|[67]200[01]\\d{3}",,,, "72001234",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "30(?:0[01]\\d\\d|12(?:11|20))\\d\\d",,,, "30010000",,, [8]], "KI", 686, "00", "0",,, "0",,,,,, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    KM: [, [,, "[3478]\\d{6}",,,,,,, [7], [4]], [,, "7[4-7]\\d{5}",,,, "7712345",,,, [4]], [,, "[34]\\d{6}",,,, "3212345"], [,,,,,,,,, [-1]], [,, "8\\d{6}",,,, "8001234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "KM", 269, "00",,,,,,,, [[, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    KN: [, [,, "(?:[58]\\d\\d|900)\\d{7}",,,,,,, [10], [7]], [,, "869(?:2(?:29|36)|302|4(?:6[015-9]|70))\\d{4}",,,, "8692361234",,,, [7]], [,, "869(?:48[89]|5(?:5[6-8]|6[5-7])|66\\d|76[02-7])\\d{4}",,,, "8697652917",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "KN", 1, "011", "1",,, "1|([2-7]\\d{6})$", "869$1",,,,, [,,,,,,,,, [-1]],, "869", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    KP: [, [,, "85\\d{6}|(?:19\\d|[2-7])\\d{7}",,,,,,, [8, 10], [6, 7]], [,, "(?:(?:195|2)\\d|3[19]|4[159]|5[37]|6[17]|7[39]|85)\\d{6}",,,, "21234567",,,, [6, 7]], [,, "19[1-3]\\d{7}",,,, "1921234567",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "KP", 850, "00|99", "0",,, "0",,,, [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]],, [,,,,,,,,, [-1]],,, [,, "238[02-9]\\d{4}|2(?:[0-24-9]\\d|3[0-79])\\d{5}",,,,,,, [8]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    KR: [, [,, "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}",,,,,,, [5, 6, 8, 9, 10, 11, 12, 13, 14], [3, 4, 7]], [,, "(?:2|3[1-3]|[46][1-4]|5[1-5])[1-9]\\d{6,7}|(?:3[1-3]|[46][1-4]|5[1-5])1\\d{2,3}",,,, "22123456",,, [5, 6, 8, 9, 10], [3, 4, 7]], [,, "1(?:05(?:[0-8]\\d|9[0-5])|22[13]\\d)\\d{4,5}|1(?:0[1-46-9]|[16-9]\\d|2[013-9])\\d{6,7}",,,, "1020000000",,, [9, 10]], [,, "00(?:308\\d{6,7}|798\\d{7,9})|(?:00368|80)\\d{7}",,,, "801234567",,, [9, 11, 12, 13, 14]], [,, "60[2-9]\\d{6}",,,, "602345678",,, [9]], [,,,,,,,,, [-1]], [,, "50\\d{8,9}",,,, "5012345678",,, [10, 11]], [,, "70\\d{8}",,,, "7012345678",,, [10]], "KR", 82, "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "0",,, "0(8(?:[1-46-8]|5\\d\\d))?",,,, [[, "(\\d{5})", "$1", ["1[016-9]1", "1[016-9]11", "1[016-9]114"], "0$1"], [, "(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1", "0$CC-$1"], [, "(\\d{4})(\\d{4})", "$1-$2", ["1"]], [, "(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1", "0$CC-$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1", "0$CC-$1"], [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1", "0$CC-$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1", "0$CC-$1"], [, "(\\d{5})(\\d{3})(\\d{3})", "$1 $2 $3", ["003", "0030"]], [, "(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1", "0$CC-$1"], [, "(\\d{5})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0"]], [, "(\\d{5})(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["0"]]], [[, "(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1", "0$CC-$1"], [, "(\\d{4})(\\d{4})", "$1-$2", ["1"]], [, "(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1", "0$CC-$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1", "0$CC-$1"], [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1", "0$CC-$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1", "0$CC-$1"], [, "(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1", "0$CC-$1"]], [,, "15\\d{7,8}",,,, "1523456789",,, [9, 10]],,, [,, "00(?:3(?:08\\d{6,7}|68\\d{7})|798\\d{7,9})",,,,,,, [11, 12, 13, 14]], [,, "1(?:5(?:22|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))\\d{4}",,,, "15441234",,, [8]],,, [,,,,,,,,, [-1]]],
    KW: [, [,, "(?:18|[2569]\\d\\d)\\d{5}",,,,,,, [7, 8]], [,, "2(?:[23]\\d\\d|4(?:[1-35-9]\\d|44)|5(?:0[034]|[2-46]\\d|5[1-3]|7[1-7]))\\d{4}",,,, "22345678",,, [8]], [,, "(?:5(?:2(?:22|5[25])|88[58])|6(?:222|444|70[013-9]|888|93[039])|9(?:11[01]|333|500))\\d{4}|(?:5(?:[05]\\d|1[0-7]|6[56])|6(?:0[034679]|5[015-9]|6\\d|7[67]|9[069])|9(?:0[09]|22|[4679]\\d|55|8[057-9]))\\d{5}",,,, "50012345",,, [8]], [,, "18\\d{5}",,,, "1801234",,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "KW", 965, "00",,,,,,,, [[, "(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], [, "(\\d{3})(\\d{5})", "$1 $2", ["[25]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    KY: [, [,, "(?:345|[58]\\d\\d|900)\\d{7}",,,,,,, [10], [7]], [,, "345(?:2(?:22|3[23]|44|66)|333|444|6(?:23|38|40)|7(?:30|4[35-79]|6[6-9]|77)|8(?:00|1[45]|25|[48]8)|9(?:14|4[035-9]))\\d{4}",,,, "3452221234",,,, [7]], [,, "345(?:32[1-9]|42[0-4]|5(?:1[67]|2[5-79]|4[6-9]|50|76)|649|9(?:1[679]|2[2-9]|3[06-9]|90))\\d{4}",,,, "3453231234",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002345678"], [,, "(?:345976|900[2-9]\\d\\d)\\d{4}",,,, "9002345678"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "KY", 1, "011", "1",,, "1|([2-9]\\d{6})$", "345$1",,,,, [,, "345849\\d{4}",,,, "3458491234"],, "345", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    KZ: [, [,, "33622\\d{5}|(?:7\\d|80)\\d{8}",,,,,,, [10], [5, 6, 7]], [,, "(?:33622|7(?:1(?:0(?:[23]\\d|4[0-3]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\d|3[013-9]|5[1-9])|5(?:2\\d|3[1-9]|4[0-7]|59)|6(?:[2-4]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[2-4]\\d|5[139])|4(?:2\\d|3[1-35-9]|59)|5(?:[23]\\d|4[0-246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59))))\\d{5}",,,, "7123456789",,,, [5, 6, 7]], [,, "7(?:0[0-25-8]|47|6[02-4]|7[15-8]|85)\\d{7}",,,, "7710009998"], [,, "800\\d{7}",,,, "8001234567"], [,, "809\\d{7}",,,, "8091234567"], [,,,,,,,,, [-1]], [,, "808\\d{7}",,,, "8081234567"], [,, "751\\d{7}",,,, "7511234567"], "KZ", 7, "810", "8",,, "8",, "8~10",,,, [,,,,,,,,, [-1]],, "33|7", [,, "751\\d{7}"], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    LA: [, [,, "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}",,,,,,, [8, 9, 10], [6]], [,, "(?:2[13]|[35-7][14]|41|8[1468])\\d{6}",,,, "21212862",,, [8], [6]], [,, "(?:20(?:[239]\\d|5[24-689]|7[6-8])|302\\d)\\d{6}",,,, "2023123456",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "LA", 856, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[013-9]"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "30[013-9]\\d{6}",,,, "301234567",,, [9]],,, [,,,,,,,,, [-1]]],
    LB: [, [,, "[7-9]\\d{7}|[13-9]\\d{6}",,,,,,, [7, 8]], [,, "(?:(?:[14-69]\\d|8[02-9])\\d|7(?:[2-57]\\d|62|8[0-7]|9[04-9]))\\d{4}",,,, "1123456",,, [7]], [,, "793(?:[01]\\d|2[0-4])\\d{3}|(?:(?:3|81)\\d|7(?:[01]\\d|6[013-9]|8[89]|9[12]))\\d{5}",,,, "71123456"], [,,,,,,,,, [-1]], [,, "9[01]\\d{6}",,,, "90123456",,, [8]], [,, "80\\d{6}",,,, "80123456",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "LB", 961, "00", "0",,, "0",,,, [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    LC: [, [,, "(?:[58]\\d\\d|758|900)\\d{7}",,,,,,, [10], [7]], [,, "758(?:234|4(?:30|5\\d|6[2-9]|8[0-2])|57[0-2]|(?:63|75)8)\\d{4}",,,, "7584305678",,,, [7]], [,, "758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2\\d|3[0-3])|812)\\d{4}",,,, "7582845678",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "LC", 1, "011", "1",,, "1|([2-8]\\d{6})$", "758$1",,,,, [,,,,,,,,, [-1]],, "758", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    LI: [, [,, "90\\d{5}|(?:[2378]|6\\d\\d)\\d{6}",,,,,,, [7, 9]], [,, "(?:2(?:01|1[27]|22|3\\d|6[02-578]|96)|3(?:33|40|7[0135-7]|8[048]|9[0269]))\\d{4}",,,, "2345678",,, [7]], [,, "(?:6(?:4(?:89|9\\d)|5[0-3]\\d|6(?:0[0-7]|10|2[06-9]|39))\\d|7(?:[37-9]\\d|42|56))\\d{4}",,,, "660234567"], [,, "80(?:02[28]|9\\d\\d)\\d\\d",,,, "8002222",,, [7]], [,, "90(?:02[258]|1(?:23|3[14])|66[136])\\d\\d",,,, "9002222",,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "LI", 423, "00", "0",,, "0|(1001)",,,, [[, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[237-9]"],, "$CC $1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"],, "$CC $1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"],, "$CC $1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "870(?:28|87)\\d\\d",,,, "8702812",,, [7]],,, [,, "697(?:42|56|[78]\\d)\\d{4}",,,, "697861234",,, [9]]],
    LK: [, [,, "[1-9]\\d{8}",,,,,,, [9], [7]], [,, "(?:12[2-9]|602|8[12]\\d|9(?:1\\d|22|9[245]))\\d{6}|(?:11|2[13-7]|3[1-8]|4[157]|5[12457]|6[35-7])[2-57]\\d{6}",,,, "112345678",,,, [7]], [,, "7[0-25-8]\\d{7}",,,, "712345678"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "LK", 94, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "1973\\d{5}",,,, "197312345"],,, [,,,,,,,,, [-1]]],
    LR: [, [,, "(?:2|33|5\\d|77|88)\\d{7}|[4-6]\\d{6}",,,,,,, [7, 8, 9]], [,, "(?:2\\d{3}|33333)\\d{4}",,,, "21234567",,, [8, 9]], [,, "(?:(?:330|555|(?:77|88)\\d)\\d|4[67])\\d{5}|[56]\\d{6}",,,, "770123456",,, [7, 9]], [,,,,,,,,, [-1]], [,, "332(?:02|[34]\\d)\\d{4}",,,, "332021234",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "LR", 231, "00", "0",,, "0",,,, [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[4-6]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3578]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    LS: [, [,, "(?:[256]\\d\\d|800)\\d{5}",,,,,,, [8]], [,, "2\\d{7}",,,, "22123456"], [,, "[56]\\d{7}",,,, "50123456"], [,, "800[256]\\d{4}",,,, "80021234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "LS", 266, "00",,,,,,,, [[, "(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    LT: [, [,, "(?:[3469]\\d|52|[78]0)\\d{6}",,,,,,, [8]], [,, "(?:3[1478]|4[124-6]|52)\\d{6}",,,, "31234567"], [,, "6\\d{7}",,,, "61234567"], [,, "80[02]\\d{5}",,,, "80012345"], [,, "9(?:0[0239]|10)\\d{5}",,,, "90012345"], [,, "808\\d{5}",,,, "80812345"], [,, "70[05]\\d{5}",,,, "70012345"], [,, "[89]01\\d{5}",,,, "80123456"], "LT", 370, "00", "8",,, "[08]",,,, [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(8-$1)",, 1], [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1",, 1], [, "(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)",, 1], [, "(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)",, 1]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "70[67]\\d{5}",,,, "70712345"],,, [,,,,,,,,, [-1]]],
    LU: [, [,, "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}",,,,,,, [4, 5, 6, 7, 8, 9, 10, 11]], [,, "(?:35[013-9]|80[2-9]|90[89])\\d{1,8}|(?:2[2-9]|3[0-46-9]|[457]\\d|8[13-9]|9[2-579])\\d{2,9}",,,, "27123456"], [,, "6(?:[269][18]|5[158]|7[189]|81)\\d{6}",,,, "628123456",,, [9]], [,, "800\\d{5}",,,, "80012345",,, [8]], [,, "90[015]\\d{5}",,,, "90012345",,, [8]], [,, "801\\d{5}",,,, "80112345",,, [8]], [,,,,,,,,, [-1]], [,, "20(?:1\\d{5}|[2-689]\\d{1,7})",,,, "20201234",,, [4, 5, 6, 7, 8, 9, 10]], "LU", 352, "00",,,, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)",,,, [[, "(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"],, "$CC $1"], [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"],, "$CC $1"], [, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"],, "$CC $1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"],, "$CC $1"], [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"],, "$CC $1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"],, "$CC $1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"],, "$CC $1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"],, "$CC $1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"],, "$CC $1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    LV: [, [,, "(?:[268]\\d|90)\\d{6}",,,,,,, [8]], [,, "6\\d{7}",,,, "63123456"], [,, "2\\d{7}",,,, "21234567"], [,, "80\\d{6}",,,, "80123456"], [,, "90\\d{6}",,,, "90123456"], [,, "81\\d{6}",,,, "81123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "LV", 371, "00",,,,,,,, [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    LY: [, [,, "[2-9]\\d{8}",,,,,,, [9], [7]], [,, "(?:2(?:0[56]|[1-6]\\d|7[124579]|8[124])|3(?:1\\d|2[2356])|4(?:[17]\\d|2[1-357]|5[2-4]|8[124])|5(?:[1347]\\d|2[1-469]|5[13-5]|8[1-4])|6(?:[1-479]\\d|5[2-57]|8[1-5])|7(?:[13]\\d|2[13-79])|8(?:[124]\\d|5[124]|84))\\d{6}",,,, "212345678",,,, [7]], [,, "9[1-6]\\d{7}",,,, "912345678"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "LY", 218, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MA: [, [,, "[5-8]\\d{8}",,,,,,, [9]], [,, "5(?:29(?:[189][05]|2[29]|3[01])|38[89][05])\\d{4}|5(?:2(?:[015-7]\\d|2[02-9]|3[0-578]|4[02-46-8]|8[0235-7]|90)|3(?:[0-47]\\d|5[02-9]|6[02-8]|80|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}",,,, "520123456"], [,, "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[016-8]|6[1267]|7[0-27]))\\d{6}",,,, "650123456"], [,, "80\\d{7}",,,, "801234567"], [,, "89\\d{7}",,,, "891234567"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "592(?:4[0-2]|93)\\d{4}",,,, "592401234"], "MA", 212, "00", "0",,, "0",,,, [[, "(\\d{5})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29|38)[89]", "5(?:29|38)[89]0"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], [, "(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|892", "5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892"], "0$1"], [, "(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], [, "(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]],, [,,,,,,,,, [-1]], 1,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MC: [, [,, "870\\d{5}|(?:[349]|6\\d)\\d{7}",,,,,,, [8, 9]], [,, "(?:870|9[2-47-9]\\d)\\d{5}",,,, "99123456",,, [8]], [,, "4(?:[46]\\d|5[1-9])\\d{5}|(?:3|6\\d)\\d{7}",,,, "612345678"], [,, "90\\d{6}",,,, "90123456",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "MC", 377, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["8"]], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[39]"]], [, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[39]"]], [, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], [,,,,,,,,, [-1]],,, [,, "870\\d{5}",,,,,,, [8]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MD: [, [,, "(?:[235-7]\\d|[89]0)\\d{6}",,,,,,, [8]], [,, "(?:(?:2[1-9]|3[1-79])\\d|5(?:33|5[257]))\\d{5}",,,, "22212345"], [,, "562\\d{5}|(?:6\\d|7[16-9])\\d{6}",,,, "62112345"], [,, "800\\d{5}",,,, "80012345"], [,, "90[056]\\d{5}",,,, "90012345"], [,, "808\\d{5}",,,, "80812345"], [,,,,,,,,, [-1]], [,, "3[08]\\d{6}",,,, "30123456"], "MD", 373, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "803\\d{5}",,,, "80312345"],,, [,,,,,,,,, [-1]]],
    ME: [, [,, "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}",,,,,,, [8, 9], [6]], [,, "(?:20[2-8]|3(?:[0-2][2-7]|3[24-7])|4(?:0[2-467]|1[2467])|5(?:0[2467]|1[24-7]|2[2-467]))\\d{5}",,,, "30234567",,, [8], [6]], [,, "6(?:[07-9]\\d|3[024]|6[0-25])\\d{5}",,,, "67622901",,, [8]], [,, "80(?:[0-2578]|9\\d)\\d{5}",,,, "80080002"], [,, "9(?:4[1568]|5[178])\\d{5}",,,, "94515151",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "78[1-49]\\d{5}",,,, "78108780",,, [8]], "ME", 382, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "77[1-9]\\d{5}",,,, "77273012",,, [8]],,, [,,,,,,,,, [-1]]],
    MF: [, [,, "(?:590|69\\d|976)\\d{6}",,,,,,, [9]], [,, "590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}",,,, "590271234"], [,, "69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}",,,, "690001234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "976[01]\\d{5}",,,, "976012345"], "MF", 590, "00", "0",,, "0",,,,,, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MG: [, [,, "[23]\\d{8}",,,,,,, [9], [7]], [,, "2072[29]\\d{4}|20(?:2\\d|4[47]|5[3467]|6[279]|7[35]|8[268]|9[245])\\d{5}",,,, "202123456",,,, [7]], [,, "3[2-49]\\d{7}",,,, "321234567"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "22\\d{7}",,,, "221234567"], "MG", 261, "00", "0",,, "0|([24-9]\\d{6})$", "20$1",,, [[, "(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MH: [, [,, "329\\d{4}|(?:[256]\\d|45)\\d{5}",,,,,,, [7]], [,, "(?:247|528|625)\\d{4}",,,, "2471234"], [,, "(?:(?:23|54)5|329|45[56])\\d{4}",,,, "2351234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "635\\d{4}",,,, "6351234"], "MH", 692, "011", "1",,, "1",,,, [[, "(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MK: [, [,, "[2-578]\\d{7}",,,,,,, [8], [6, 7]], [,, "(?:2(?:[23]\\d|5[0-24578]|6[01]|82)|3(?:1[3-68]|[23][2-68]|4[23568])|4(?:[23][2-68]|4[3-68]|5[2568]|6[25-8]|7[24-68]|8[4-68]))\\d{5}",,,, "22012345",,,, [6, 7]], [,, "7(?:4(?:60\\d|747)|94(?:[01]\\d|2[0-4]))\\d{3}|7(?:[0-25-8]\\d|3[2-4]|42|9[23])\\d{5}",,,, "72345678"], [,, "800\\d{5}",,,, "80012345"], [,, "5[02-9]\\d{6}",,,, "50012345"], [,, "8(?:0[1-9]|[1-9]\\d)\\d{5}",,,, "80123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "MK", 389, "00", "0",,, "0",,,, [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], [, "(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    ML: [, [,, "[24-9]\\d{7}",,,,,,, [8]], [,, "2(?:07[0-8]|12[67])\\d{4}|(?:2(?:02|1[4-689])|4(?:0[0-4]|4[1-39]))\\d{5}",,,, "20212345"], [,, "2(?:0(?:01|79)|17\\d)\\d{4}|(?:5[01]|[679]\\d|8[239])\\d{6}",,,, "65012345"], [,, "80\\d{6}",,,, "80012345"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "ML", 223, "00",,,,,,,, [[, "(\\d{4})", "$1", ["67[057-9]|74[045]", "67(?:0[09]|[59]9|77|8[89])|74(?:0[02]|44|55)"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]], [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]], [,,,,,,,,, [-1]],,, [,, "80\\d{6}"], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MM: [, [,, "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}",,,,,,, [6, 7, 8, 9, 10], [5]], [,, "(?:1(?:(?:2\\d|3[56]|[89][0-6])\\d|4(?:2[2-469]|39|46|6[25]|7[0-3]|83)|6)|2(?:2(?:00|8[34])|4(?:0\\d|2[246]|39|46|62|7[0-3]|83)|51\\d\\d)|4(?:2(?:2\\d\\d|48[0-3])|3(?:20\\d|4(?:70|83)|56)|420\\d|5470)|6(?:0(?:[23]|88\\d)|(?:124|[56]2\\d)\\d|247[23]|3(?:20\\d|470)|4(?:2[04]\\d|47[23])|7(?:(?:3\\d|8[01459])\\d|4(?:39|60|7[013]))))\\d{4}|5(?:2(?:2\\d{5,6}|47[023]\\d{4})|(?:347[23]|4(?:2(?:1|86)|470)|522\\d|6(?:20\\d|483)|7(?:20\\d|48[0-2])|8(?:20\\d|47[02])|9(?:20\\d|47[01]))\\d{4})|7(?:(?:0470|4(?:25\\d|470)|5(?:202|470|96\\d))\\d{4}|1(?:20\\d{4,5}|4(?:70|83)\\d{4}))|8(?:1(?:2\\d{5,6}|4(?:10|7[01]\\d)\\d{3})|2(?:2\\d{5,6}|(?:320|490\\d)\\d{3})|(?:3(?:2\\d\\d|470)|4[24-7]|5(?:2\\d|4[1-9]|51)\\d|6[23])\\d{4})|(?:1[2-6]\\d|4(?:2[24-8]|3[2-7]|[46][2-6]|5[3-5])|5(?:[27][2-8]|3[2-68]|4[24-8]|5[23]|6[2-4]|8[24-7]|9[2-7])|6(?:[19]20|42[03-6]|(?:52|7[45])\\d)|7(?:[04][24-8]|[15][2-7]|22|3[2-4])|8(?:1[2-689]|2[2-8]|[35]2\\d))\\d{4}|25\\d{5,6}|(?:2[2-9]|6(?:1[2356]|[24][2-6]|3[24-6]|5[2-4]|6[2-8]|7[235-7]|8[245]|9[24])|8(?:3[24]|5[245]))\\d{4}",,,, "1234567",,, [6, 7, 8, 9], [5]], [,, "(?:17[01]|9(?:2(?:[0-4]|[56]\\d\\d)|(?:3(?:[0-36]|4\\d)|(?:6[6-9]|8[89]|9[5-8])\\d|7(?:3|[5-9]\\d))\\d|4(?:(?:[0245]\\d|[1379])\\d|88)|5[0-6])\\d)\\d{4}|9[69]1\\d{6}|9(?:[68]\\d|9[089])\\d{5}",,,, "92123456",,, [7, 8, 9, 10]], [,, "80080(?:[01][1-9]|2\\d)\\d{3}",,,, "8008001234",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "1333\\d{4}|[12]468\\d{4}",,,, "13331234",,, [8]], "MM", 95, "00", "0",,, "0",,,, [[, "(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"], [, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], [, "(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], [, "(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], [, "(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MN: [, [,, "[12]\\d{7,9}|[57-9]\\d{7}",,,,,,, [8, 9, 10], [4, 5, 6]], [,, "[12]2[1-3]\\d{5,6}|7(?:0[0-5]\\d|128)\\d{4}|(?:[12](?:1|27)|5[368])\\d{6}|[12](?:3[2-8]|4[2-68]|5[1-4689])\\d{6,7}",,,, "53123456",,,, [4, 5, 6]], [,, "(?:83[01]|920)\\d{5}|(?:5[05]|8[05689]|9[013-9])\\d{6}",,,, "88123456",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "712[0-79]\\d{4}|7(?:1[013-9]|[5-8]\\d)\\d{5}",,,, "75123456",,, [8]], "MN", 976, "001", "0",,, "0",,,, [[, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], [, "(\\d{4})(\\d{4})", "$1 $2", ["[57-9]"]], [, "(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], [, "(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], [, "(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MO: [, [,, "(?:28|[68]\\d)\\d{6}",,,,,,, [8]], [,, "(?:28[2-9]|8(?:11|[2-57-9]\\d))\\d{5}",,,, "28212345"], [,, "6(?:[235]\\d\\d|6(?:0[0-5]|[1-9]\\d)|8(?:[02][5-9]|[146-8]\\d|[35][0-4]))\\d{4}",,,, "66123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "MO", 853, "00",,,,,,,, [[, "(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MP: [, [,, "[58]\\d{9}|(?:67|90)0\\d{7}",,,,,,, [10], [7]], [,, "670(?:2(?:3[3-7]|56|8[4-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}",,,, "6702345678",,,, [7]], [,, "670(?:2(?:3[3-7]|56|8[4-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}",,,, "6702345678",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "MP", 1, "011", "1",,, "1|([2-9]\\d{6})$", "670$1",, 1,,, [,,,,,,,,, [-1]],, "670", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MQ: [, [,, "69\\d{7}|(?:59|97)6\\d{6}",,,,,,, [9]], [,, "596(?:0[0-7]|10|2[7-9]|3[05-9]|4[0-46-8]|[5-7]\\d|8[09]|9[4-8])\\d{4}",,,, "596301234"], [,, "69(?:6(?:[0-47-9]\\d|5[0-6]|6[0-4])|727)\\d{4}",,,, "696201234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "976(?:6[1-9]|7[0-367])\\d{4}",,,, "976612345"], "MQ", 596, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MR: [, [,, "(?:[2-4]\\d\\d|800)\\d{5}",,,,,,, [8]], [,, "(?:25[08]|35\\d|45[1-7])\\d{5}",,,, "35123456"], [,, "[2-4][0-46-9]\\d{6}",,,, "22123456"], [,, "800\\d{5}",,,, "80012345"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "MR", 222, "00",,,,,,,, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MS: [, [,, "(?:[58]\\d\\d|664|900)\\d{7}",,,,,,, [10], [7]], [,, "6644(?:1[0-3]|91)\\d{4}",,,, "6644912345",,,, [7]], [,, "664(?:3(?:49|9[1-6])|49[2-6])\\d{4}",,,, "6644923456",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "MS", 1, "011", "1",,, "1|([34]\\d{6})$", "664$1",,,,, [,,,,,,,,, [-1]],, "664", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MT: [, [,, "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}",,,,,,, [8]], [,, "2(?:0(?:[19]\\d|3[1-4]|6[059])|[1-357]\\d\\d)\\d{4}",,,, "21001234"], [,, "(?:7(?:210|[79]\\d\\d)|9(?:[29]\\d\\d|69[67]|8(?:1[1-3]|89|97)))\\d{4}",,,, "96961234"], [,, "800[3467]\\d{4}",,,, "80071234"], [,, "5(?:0(?:0(?:37|43)|(?:6\\d|70|9[0168])\\d)|[12]\\d0[1-5])\\d{3}",,,, "50037123"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "3550\\d{4}",,,, "35501234"], "MT", 356, "00",,,,,,,, [[, "(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]],, [,, "7117\\d{4}",,,, "71171234"],,, [,,,,,,,,, [-1]], [,, "501\\d{5}",,,, "50112345"],,, [,,,,,,,,, [-1]]],
    MU: [, [,, "(?:[2-468]|5\\d)\\d{6}",,,,,,, [7, 8]], [,, "(?:2(?:[0346-8]\\d|1[0-7])|4(?:[013568]\\d|2[4-7])|54(?:[34]\\d|71)|6\\d\\d|8(?:14|3[129]))\\d{4}",,,, "54480123"], [,, "5(?:4(?:2[1-389]|7[1-9])|87[15-8])\\d{4}|5(?:2[589]|4[3489]|7\\d|8[0-689]|9[0-8])\\d{5}",,,, "52512345",,, [8]], [,, "80[0-2]\\d{4}",,,, "8001234",,, [7]], [,, "30\\d{5}",,,, "3012345",,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "3(?:20|9\\d)\\d{4}",,,, "3201234",,, [7]], "MU", 230, "0(?:0|[24-7]0|3[03])",,,,,, "020",, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["5"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MV: [, [,, "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",,,,,,, [7, 10]], [,, "(?:3(?:0[0-3]|3[0-59])|6(?:[57][02468]|6[024-68]|8[024689]))\\d{4}",,,, "6701234",,, [7]], [,, "46[46]\\d{4}|(?:7\\d|9[13-9])\\d{5}",,,, "7712345",,, [7]], [,, "800\\d{7}",,,, "8001234567",,, [10]], [,, "900\\d{7}",,,, "9001234567",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "MV", 960, "0(?:0|19)",,,,,, "00",, [[, "(\\d{3})(\\d{4})", "$1-$2", ["[3467]|9[13-9]"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "4[05]0\\d{4}",,,, "4001234",,, [7]],,, [,,,,,,,,, [-1]]],
    MW: [, [,, "1\\d{6}(?:\\d{2})?|(?:[23]1|77|88|99)\\d{7}",,,,,,, [7, 9]], [,, "(?:1[2-9]|21\\d\\d)\\d{5}",,,, "1234567"], [,, "111\\d{6}|(?:31|77|88|99)\\d{7}",,,, "991234567",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "MW", 265, "00", "0",,, "0",,,, [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MX: [, [,, "(?:1(?:[01467]\\d|[2359][1-9]|8[1-79])|[2-9]\\d)\\d{8}",,,,,,, [10, 11], [7, 8]], [,, "(?:2(?:0[01]|2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}",,,, "2001234567",,, [10], [7, 8]], [,, "(?:1(?:2(?:2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))|2(?:2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}",,,, "12221234567",,,, [7, 8]], [,, "8(?:00|88)\\d{7}",,,, "8001234567",,, [10]], [,, "900\\d{7}",,,, "9001234567",,, [10]], [,, "300\\d{7}",,,, "3001234567",,, [10]], [,, "500\\d{7}",,,, "5001234567",,, [10]], [,,,,,,,,, [-1]], "MX", 52, "0[09]", "01",,, "0(?:[12]|4[45])|1",, "00",, [[, "(\\d{5})", "$1", ["53"]], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"],,, 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"],,, 1], [, "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"],,, 1], [, "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"],,, 1]], [[, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"],,, 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"],,, 1], [, "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"],,, 1], [, "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"],,, 1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MY: [, [,, "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}",,,,,,, [8, 9, 10], [6, 7]], [,, "(?:3(?:2[0-36-9]|3[0-368]|4[0-278]|5[0-24-8]|6[0-467]|7[1246-9]|8\\d|9[0-57])\\d|4(?:2[0-689]|[3-79]\\d|8[1-35689])|5(?:2[0-589]|[3468]\\d|5[0-489]|7[1-9]|9[23])|6(?:2[2-9]|3[1357-9]|[46]\\d|5[0-6]|7[0-35-9]|85|9[015-8])|7(?:[2579]\\d|3[03-68]|4[0-8]|6[5-9]|8[0-35-9])|8(?:[24][2-8]|3[2-5]|5[2-7]|6[2-589]|7[2-578]|[89][2-9])|9(?:0[57]|13|[25-7]\\d|[3489][0-8]))\\d{5}",,,, "323856789",,, [8, 9], [6, 7]], [,, "1(?:4400|8(?:47|8[27])[0-4])\\d{4}|1(?:0(?:[23568]\\d|4[0-6]|7[016-9]|9[0-8])|1(?:[1-5]\\d\\d|6(?:0[5-9]|[1-9]\\d)|7(?:0\\d|1[01]))|(?:(?:[269]|59)\\d|[37][1-9]|4[235-9])\\d|8(?:1[23]|[236]\\d|4[06]|5[7-9]|7[016-9]|8[01]|9[0-8]))\\d{5}",,,, "123456789",,, [9, 10]], [,, "1[378]00\\d{6}",,,, "1300123456",,, [10]], [,, "1600\\d{6}",,,, "1600123456",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "15(?:4(?:6[0-4]\\d|8(?:0[125]|[17]\\d|21|3[01]|4[01589]|5[014]|6[02]))|6(?:32[0-6]|78\\d))\\d{4}",,,, "1546012345",,, [10]], "MY", 60, "00", "0",,, "0",,,, [[, "(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9])|8"], "0$1"], [, "(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], [, "(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1[36-8]"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    MZ: [, [,, "(?:2|8\\d)\\d{7}",,,,,,, [8, 9]], [,, "2(?:[1346]\\d|5[0-2]|[78][12]|93)\\d{5}",,,, "21123456",,, [8]], [,, "8[2-79]\\d{7}",,,, "821234567",,, [9]], [,, "800\\d{6}",,,, "800123456",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "MZ", 258, "00",,,,,,,, [[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    NA: [, [,, "[68]\\d{7,8}",,,,,,, [8, 9]], [,, "6(?:1(?:[02-4]\\d\\d|17)|2(?:17|54\\d|69|70)|3(?:17|2[0237]\\d|34|6[289]|7[01]|81)|4(?:17|(?:27|41|5[25])\\d|69|7[01])|5(?:17|2[236-8]\\d|69|7[01])|6(?:17|26\\d|38|42|69|7[01])|7(?:17|(?:2[2-4]|30)\\d|6[89]|7[01]))\\d{4}|6(?:1(?:2[2-7]|3[01378]|4[0-4]|69|7[014])|25[0-46-8]|32\\d|4(?:2[0-27]|4[016]|5[0-357])|52[02-9]|62[56]|7(?:2[2-69]|3[013]))\\d{4}",,,, "61221234"], [,, "(?:60|8[1245])\\d{7}",,,, "811234567",,, [9]], [,, "80\\d{7}",,,, "800123456",,, [9]], [,, "8701\\d{5}",,,, "870123456",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "8(?:3\\d\\d|86)\\d{5}",,,, "88612345"], "NA", 264, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    NC: [, [,, "[2-57-9]\\d{5}",,,,,,, [6]], [,, "(?:2[03-9]|3[0-5]|4[1-7]|88)\\d{4}",,,, "201234"], [,, "(?:5[0-4]|[79]\\d|8[0-79])\\d{4}",,,, "751234"], [,,,,,,,,, [-1]], [,, "36\\d{4}",,,, "366711"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "NC", 687, "00",,,,,,,, [[, "(\\d{3})", "$1", ["5[6-8]"]], [, "(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[2-57-9]"]]], [[, "(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[2-57-9]"]]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    NE: [, [,, "[0289]\\d{7}",,,,,,, [8]], [,, "2(?:0(?:20|3[1-8]|4[13-5]|5[14]|6[14578]|7[1-578])|1(?:4[145]|5[14]|6[14-68]|7[169]|88))\\d{4}",,,, "20201234"], [,, "(?:23|8[014589]|9\\d)\\d{6}",,,, "93123456"], [,, "08\\d{6}",,,, "08123456"], [,, "09\\d{6}",,,, "09123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "NE", 227, "00",,,,,,,, [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    NF: [, [,, "[13]\\d{5}",,,,,,, [6], [5]], [,, "(?:1(?:06|17|28|39)|3[0-2]\\d)\\d{3}",,,, "106609",,,, [5]], [,, "(?:14|3[58])\\d{4}",,,, "381234",,,, [5]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "NF", 672, "00",,,, "([0-258]\\d{4})$", "3$1",,, [[, "(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], [, "(\\d)(\\d{5})", "$1 $2", ["[13]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    NG: [, [,, "(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}",,,,,,, [7, 8, 10, 11, 12, 13, 14], [5, 6]], [,, "(?:(?:[1-356]\\d|4[02-8]|8[2-9])\\d|9(?:0[3-9]|[1-9]\\d))\\d{5}|7(?:0(?:[013-689]\\d|2[0-24-9])\\d{3,4}|[1-79]\\d{6})|(?:[12]\\d|4[147]|5[14579]|6[1578]|7[1-3578])\\d{5}",,,, "18040123",,, [7, 8], [5, 6]], [,, "(?:702[0-24-9]|8(?:01|19)[01])\\d{6}|(?:70[13-689]|8(?:0[2-9]|1[0-8])|90[1-9])\\d{7}",,,, "8021234567",,, [10]], [,, "800\\d{7,11}",,,, "80017591759",,, [10, 11, 12, 13, 14]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "NG", 234, "009", "0",,, "0",,,, [[, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"], [, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], [, "(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], [, "(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "700\\d{7,11}",,,, "7001234567",,, [10, 11, 12, 13, 14]],,, [,,,,,,,,, [-1]]],
    NI: [, [,, "(?:1800|[25-8]\\d{3})\\d{4}",,,,,,, [8]], [,, "2\\d{7}",,,, "21234567"], [,, "(?:5(?:5[0-7]|[78]\\d)|6(?:20|3[035]|4[045]|5[05]|77|8[1-9]|9[059])|(?:7[5-8]|8\\d)\\d)\\d{5}",,,, "81234567"], [,, "1800\\d{4}",,,, "18001234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "NI", 505, "00",,,,,,,, [[, "(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    NL: [, [,, "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|[89]\\d{6,9}|1\\d{4,5}",,,,,,, [5, 6, 7, 8, 9, 10]], [,, "(?:1(?:[035]\\d|1[13-578]|6[124-8]|7[24]|8[0-467])|2(?:[0346]\\d|2[2-46-9]|5[125]|9[479])|3(?:[03568]\\d|1[3-8]|2[01]|4[1-8])|4(?:[0356]\\d|1[1-368]|7[58]|8[15-8]|9[23579])|5(?:[0358]\\d|[19][1-9]|2[1-57-9]|4[13-8]|6[126]|7[0-3578])|7\\d\\d)\\d{6}",,,, "101234567",,, [9]], [,, "6[1-58]\\d{7}",,,, "612345678",,, [9]], [,, "800\\d{4,7}",,,, "8001234",,, [7, 8, 9, 10]], [,, "90[069]\\d{4,7}",,,, "9061234",,, [7, 8, 9, 10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "(?:85|91)\\d{7}",,,, "851234567",,, [9]], "NL", 31, "00", "0",,, "0",,,, [[, "(\\d{4})", "$1", ["1[238]|[34]"]], [, "(\\d{2})(\\d{3,4})", "$1 $2", ["14"]], [, "(\\d{6})", "$1", ["1"]], [, "(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], [, "(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], [, "(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-57-9]"], "0$1"]], [[, "(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], [, "(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], [, "(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-57-9]"], "0$1"]], [,, "66\\d{7}",,,, "662345678",,, [9]],,, [,, "140(?:1[035]|2[0346]|3[03568]|4[0356]|5[0358]|8[458])|140(?:1[16-8]|2[259]|3[124]|4[17-9]|5[124679]|7)\\d",,,,,,, [5, 6]], [,, "140(?:1[035]|2[0346]|3[03568]|4[0356]|5[0358]|8[458])|(?:140(?:1[16-8]|2[259]|3[124]|4[17-9]|5[124679]|7)|8[478]\\d{6})\\d",,,, "14020",,, [5, 6, 9]],,, [,,,,,,,,, [-1]]],
    NO: [, [,, "(?:0|[2-9]\\d{3})\\d{4}",,,,,,, [5, 8]], [,, "(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}",,,, "21234567",,, [8]], [,, "(?:4[015-8]|5[89]|9\\d)\\d{6}",,,, "40612345",,, [8]], [,, "80[01]\\d{5}",,,, "80012345",,, [8]], [,, "82[09]\\d{5}",,,, "82012345",,, [8]], [,, "810(?:0[0-6]|[2-8]\\d)\\d{3}",,,, "81021234",,, [8]], [,, "880\\d{5}",,,, "88012345",,, [8]], [,, "85[0-5]\\d{5}",,,, "85012345",,, [8]], "NO", 47, "00",,,,,,,, [[, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]|5[89]"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]],, [,,,,,,,,, [-1]], 1, "[02-689]|7[0-8]", [,,,,,,,,, [-1]], [,, "(?:0[2-9]|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}",,,, "02000"],,, [,, "81[23]\\d{5}",,,, "81212345",,, [8]]],
    NP: [, [,, "9\\d{9}|[1-9]\\d{7}",,,,,,, [8, 10], [6, 7]], [,, "(?:1[0-6]\\d|99[02-6])\\d{5}|(?:2[13-79]|3[135-8]|4[146-9]|5[135-7]|6[13-9]|7[15-9]|8[1-46-9]|9[1-7])[2-6]\\d{5}",,,, "14567890",,, [8], [6, 7]], [,, "9(?:6[0-3]|7[245]|8[0-24-68])\\d{7}",,,, "9841234567",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "NP", 977, "00", "0",,, "0",,,, [[, "(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], [, "(\\d{2})(\\d{6})", "$1-$2", ["[1-8]|9(?:[1-579]|6[2-6])"], "0$1"], [, "(\\d{3})(\\d{7})", "$1-$2", ["9"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    NR: [, [,, "(?:444|(?:55|8\\d)\\d|666)\\d{4}",,,,,,, [7]], [,, "444\\d{4}",,,, "4441234"], [,, "(?:55[3-9]|666|8\\d\\d)\\d{4}",,,, "5551234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "NR", 674, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    NU: [, [,, "(?:[47]|888\\d)\\d{3}",,,,,,, [4, 7]], [,, "[47]\\d{3}",,,, "7012",,, [4]], [,, "888[4-9]\\d{3}",,,, "8884012",,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "NU", 683, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["8"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    NZ: [, [,, "2\\d{7,9}|(?:[34]\\d|6[0-35-9])\\d{6}|(?:508|[79]\\d)\\d{6,7}|8\\d{4,9}",,,,,,, [5, 6, 7, 8, 9, 10]], [,, "24099\\d{3}|(?:3[2-79]|[49][2-9]|6[235-9]|7[2-57-9])\\d{6}",,,, "32345678",,, [8], [7]], [,, "2[0-27-9]\\d{7,8}|21\\d{6}",,,, "211234567",,, [8, 9, 10]], [,, "508\\d{6,7}|80\\d{6,8}",,,, "800123456",,, [8, 9, 10]], [,, "90\\d{6,7}",,,, "900123456",,, [8, 9]], [,,,,,,,,, [-1]], [,, "70\\d{7}",,,, "701234567",,, [9]], [,,,,,,,,, [-1]], "NZ", 64, "0(?:0|161)", "0",,, "0",, "00",, [[, "(\\d{2})(\\d{3,8})", "$1 $2", ["83"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0$1"], [, "(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[59]|80"], "0$1"], [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["2[028]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7|86"], "0$1"]],, [,, "[28]6\\d{6,7}",,,, "26123456",,, [8, 9]],,, [,,,,,,,,, [-1]], [,, "83\\d{3,8}",,,, "83012378"],,, [,,,,,,,,, [-1]]],
    OM: [, [,, "(?:1505|[279]\\d{3}|500)\\d{4}|8007\\d{4,5}",,,,,,, [7, 8, 9]], [,, "2[2-6]\\d{6}",,,, "23123456",,, [8]], [,, "(?:1505|90[1-9]\\d)\\d{4}|(?:7[1289]|9[1-9])\\d{6}",,,, "92123456",,, [8]], [,, "500\\d{4}|8007\\d{4,5}",,,, "80071234"], [,, "900\\d{5}",,,, "90012345",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "OM", 968, "00",,,,,,,, [[, "(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], [, "(\\d{2})(\\d{6})", "$1 $2", ["2"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    PA: [, [,, "(?:[1-57-9]|6\\d)\\d{6}",,,,,,, [7, 8]], [,, "(?:1(?:0\\d|1[479]|2[37]|3[0137]|4[17]|5[05]|6[58]|7[0167]|8[258]|9[139])|2(?:[0235-79]\\d|1[0-7]|4[013-9]|8[026-9])|3(?:[089]\\d|1[014-7]|2[0-5]|33|4[0-79]|55|6[068]|7[03-8])|4(?:00|3[0-579]|4\\d|7[0-57-9])|5(?:[01]\\d|2[0-7]|[56]0|79)|7(?:0[09]|2[0-26-8]|3[03]|4[04]|5[05-9]|6[056]|7[0-24-9]|8[6-9]|90)|8(?:09|2[89]|3\\d|4[0-24-689]|5[014]|8[02])|9(?:0[5-9]|1[0135-8]|2[036-9]|3[35-79]|40|5[0457-9]|6[05-9]|7[04-9]|8[35-8]|9\\d))\\d{4}",,,, "2001234",,, [7]], [,, "(?:1[16]1|21[89]|6(?:[02-9]\\d|1[0-6])\\d|8(?:1[01]|7[23]))\\d{4}",,,, "61234567"], [,, "800\\d{4}",,,, "8001234",,, [7]], [,, "(?:8(?:22|55|60|7[78]|86)|9(?:00|81))\\d{4}",,,, "8601234",,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "PA", 507, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], [, "(\\d{4})(\\d{4})", "$1-$2", ["6"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    PE: [, [,, "(?:[14-8]|9\\d)\\d{7}",,,,,,, [8, 9], [6, 7]], [,, "(?:(?:4[34]|5[14])[0-8]\\d|7(?:173|3[0-8]\\d)|8(?:10[05689]|6(?:0[06-9]|1[6-9]|29)|7(?:0[569]|[56]0)))\\d{4}|(?:1[0-8]|4[12]|5[236]|6[1-7]|7[246]|8[2-4])\\d{6}",,,, "11234567",,, [8], [6, 7]], [,, "9\\d{8}",,,, "912345678",,, [9]], [,, "800\\d{5}",,,, "80012345",,, [8]], [,, "805\\d{5}",,,, "80512345",,, [8]], [,, "801\\d{5}",,,, "80112345",,, [8]], [,, "80[24]\\d{5}",,,, "80212345",,, [8]], [,,,,,,,,, [-1]], "PE", 51, "19(?:1[124]|77|90)00", "0", " Anexo ",, "0",,,, [[, "(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], [, "(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], [, "(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    PF: [, [,, "[48]\\d{7}|4\\d{5}",,,,,,, [6, 8]], [,, "4(?:0[4-689]|9[4-68])\\d{5}",,,, "40412345",,, [8]], [,, "8[7-9]\\d{6}",,,, "87123456",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "499\\d{5}",,,, "49901234",,, [8]], "PF", 689, "00",,,,,,,, [[, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[48]"]]],, [,,,,,,,,, [-1]],,, [,, "44\\d{4}",,,,,,, [6]], [,, "44\\d{4}",,,, "440123",,, [6]],,, [,,,,,,,,, [-1]]],
    PG: [, [,, "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",,,,,,, [7, 8]], [,, "(?:64[1-9]|7730|85[02-46-9])\\d{4}|(?:3[0-2]|4[257]|5[34]|77[0-24]|9[78])\\d{5}",,,, "3123456"], [,, "77(?:3[1-9]|[5-9]\\d)\\d{4}|(?:7[0-689]|81)\\d{6}",,,, "70123456",,, [8]], [,, "180\\d{4}",,,, "1801234",,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "2(?:0[0-47]|7[568])\\d{4}",,,, "2751234",,, [7]], "PG", 675, "00|140[1-3]",,,,,, "00",, [[, "(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]],, [,, "27[01]\\d{4}",,,, "2700123",,, [7]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    PH: [, [,, "1800\\d{7,9}|(?:2|[89]\\d{4})\\d{5}|[2-8]\\d{8}|[28]\\d{7}",,,,,,, [6, 8, 9, 10, 11, 12, 13], [4, 5, 7]], [,, "(?:(?:2[3-8]|3[2-68]|4[2-9]|5[2-6]|6[2-58]|7[24578])\\d{3}|88(?:22\\d\\d|42))\\d{4}|2\\d{5}(?:\\d{2})?|8[2-8]\\d{7}",,,, "21234567",,, [6, 8, 9, 10], [4, 5, 7]], [,, "(?:81[37]|9(?:0[5-9]|1[0-24-9]|2[0-35-9]|[35]\\d|4[235-9]|6[0-25-8]|7[1-9]|8[189]|9[4-9]))\\d{7}",,,, "9051234567",,, [10]], [,, "1800\\d{7,9}",,,, "180012345678",,, [11, 12, 13]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "PH", 63, "00", "0",,, "0",,,, [[, "(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], [, "(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], [, "(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], [, "(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    PK: [, [,, "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",,,,,,, [8, 9, 10, 11, 12], [5, 6, 7]], [,, "(?:(?:21|42)[2-9]|58[126])\\d{7}|(?:2[25]|4[0146-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]\\d{6,7}|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8]))[2-9]\\d{5,6}",,,, "2123456789",,, [9, 10], [5, 6, 7, 8]], [,, "3(?:[014]\\d|2[0-5]|3[0-7]|55|64)\\d{7}",,,, "3012345678",,, [10]], [,, "800\\d{5}",,,, "80012345",,, [8]], [,, "900\\d{5}",,,, "90012345",,, [8]], [,,,,,,,,, [-1]], [,, "122\\d{6}",,,, "122044444",,, [9]], [,,,,,,,,, [-1]], "PK", 92, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["[89]0"], "0$1"], [, "(\\d{4})(\\d{5})", "$1 $2", ["1"]], [, "(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], [, "(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], [, "(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], [, "(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], [, "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "(?:2(?:[125]|3[2358]|4[2-4]|9[2-8])|4(?:[0-246-9]|5[3479])|5(?:[1-35-7]|4[2-467])|6(?:0[468]|[1-8])|7(?:[14]|2[236])|8(?:[16]|2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|22|3[27-9]|4[2-6]|6[3569]|9[2-7]))111\\d{6}",,,, "21111825888",,, [11, 12]],,, [,,,,,,,,, [-1]]],
    PL: [, [,, "[1-57-9]\\d{6}(?:\\d{2})?|6\\d{5,8}",,,,,,, [6, 7, 8, 9]], [,, "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])(?:[02-9]\\d{6}|1(?:[0-8]\\d{5}|9\\d{3}(?:\\d{2})?))",,,, "123456789",,, [7, 9]], [,, "(?:45|5[0137]|6[069]|7[2389]|88)\\d{7}",,,, "512345678",,, [9]], [,, "800\\d{6}",,,, "800123456",,, [9]], [,, "70[01346-8]\\d{6}",,,, "701234567",,, [9]], [,, "801\\d{6}",,,, "801234567",,, [9]], [,,,,,,,,, [-1]], [,, "39\\d{7}",,,, "391234567",,, [9]], "PL", 48, "00",,,,,,,, [[, "(\\d{5})", "$1", ["19"]], [, "(\\d{3})(\\d{3})", "$1 $2", ["11|64"]], [, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], [, "(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["39|45|5[0137]|6[0469]|7[02389]|8[08]"]], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-8]|9[145]"]]],, [,, "64\\d{4,7}",,,, "641234567"],,, [,,,,,,,,, [-1]], [,, "804\\d{6}",,,, "804123456",,, [9]],,, [,,,,,,,,, [-1]]],
    PM: [, [,, "[45]\\d{5}",,,,,,, [6]], [,, "(?:4[1-3]|50)\\d{4}",,,, "430123"], [,, "(?:4[02-4]|5[05])\\d{4}",,,, "551234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "PM", 508, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    PR: [, [,, "(?:[589]\\d\\d|787)\\d{7}",,,,,,, [10], [7]], [,, "(?:787|939)[2-9]\\d{6}",,,, "7872345678",,,, [7]], [,, "(?:787|939)[2-9]\\d{6}",,,, "7872345678",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002345678"], [,, "900[2-9]\\d{6}",,,, "9002345678"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "PR", 1, "011", "1",,, "1",,, 1,,, [,,,,,,,,, [-1]],, "787|939", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    PS: [, [,, "[2489]2\\d{6}|(?:1\\d|5)\\d{8}",,,,,,, [8, 9, 10], [7]], [,, "(?:22[2-47-9]|42[45]|82[014-68]|92[3569])\\d{5}",,,, "22234567",,, [8], [7]], [,, "5[69]\\d{7}",,,, "599123456",,, [9]], [,, "1800\\d{6}",,,, "1800123456",,, [10]], [,,,,,,,,, [-1]], [,, "1700\\d{6}",,,, "1700123456",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "PS", 970, "00", "0",,, "0",,,, [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    PT: [, [,, "(?:[26-9]\\d|30)\\d{7}",,,,,,, [9]], [,, "2(?:[12]\\d|[35][1-689]|4[1-59]|6[1-35689]|7[1-9]|8[1-69]|9[1256])\\d{6}",,,, "212345678"], [,, "6[356]9230\\d{3}|(?:6[036]93|9(?:[1-36]\\d\\d|480))\\d{5}",,,, "912345678"], [,, "80[02]\\d{6}",,,, "800123456"], [,, "(?:6(?:0[178]|4[68])\\d|76(?:0[1-57]|1[2-47]|2[237]))\\d{5}",,,, "760123456"], [,, "80(?:8\\d|9[1579])\\d{5}",,,, "808123456"], [,, "884[0-4689]\\d{5}",,,, "884123456"], [,, "30\\d{7}",,,, "301234567"], "PT", 351, "00",,,,,,,, [[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "70(?:7\\d|8[17])\\d{5}",,,, "707123456"],,, [,, "600\\d{6}",,,, "600110000"]],
    PW: [, [,, "(?:[24-8]\\d\\d|345|900)\\d{4}",,,,,,, [7]], [,, "(?:2(?:55|77)|345|488|5(?:35|44|87)|6(?:22|54|79)|7(?:33|47)|8(?:24|55|76)|900)\\d{4}",,,, "2771234"], [,, "(?:45[0-5]|6[2-4689]0|(?:77|88)\\d)\\d{4}",,,, "6201234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "PW", 680, "01[12]",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    PY: [, [,, "59\\d{4,6}|(?:[2-46-9]\\d|5[0-8])\\d{4,7}",,,,,,, [6, 7, 8, 9], [5]], [,, "(?:[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36])\\d{5,7}|(?:2(?:2[4-68]|[4-68]\\d|7[15]|9[1-5])|3(?:18|3[167]|4[2357]|51|[67]\\d)|4(?:3[12]|5[13]|9[1-47])|5(?:[1-4]\\d|5[02-4])|6(?:3[1-3]|44|7[1-8])|7(?:4[0-4]|5\\d|6[1-578]|75|8[0-8])|858)\\d{5,6}",,,, "212345678",,, [7, 8, 9], [5, 6]], [,, "9(?:51|6[129]|[78][1-6]|9[1-5])\\d{6}",,,, "961456789",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "8700[0-4]\\d{4}",,,, "870012345",,, [9]], "PY", 595, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], [, "(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], [, "(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], [, "(\\d{3})(\\d{6})", "$1 $2", ["9"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "[2-9]0\\d{4,7}",,,, "201234567"],,, [,,,,,,,,, [-1]]],
    QA: [, [,, "[2-7]\\d{7}|(?:2\\d\\d|800)\\d{4}",,,,,,, [7, 8]], [,, "4[04]\\d{6}",,,, "44123456",,, [8]], [,, "(?:28|[35-7]\\d)\\d{6}",,,, "33123456",,, [8]], [,, "800\\d{4}",,,, "8001234",,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "QA", 974, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["2[126]|8"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]]],, [,, "2(?:[12]\\d|61)\\d{4}",,,, "2123456",,, [7]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    RE: [, [,, "9769\\d{5}|(?:26|[68]\\d)\\d{7}",,,,,,, [9]], [,, "26(?:2\\d\\d|30[01])\\d{4}",,,, "262161234"], [,, "(?:69(?:2\\d\\d|3(?:0[0-46]|1[013]|2[0-2]|3[0-39]|4\\d|5[05]|6[0-26]|7[0-27]|8[0-8]|9[0-479]))|9769\\d)\\d{4}",,,, "692123456"], [,, "80\\d{7}",,,, "801234567"], [,, "89[1-37-9]\\d{6}",,,, "891123456"], [,, "8(?:1[019]|2[0156]|84|90)\\d{6}",,,, "810123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "RE", 262, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"], "0$1"]],, [,,,,,,,,, [-1]], 1, "26[23]|69|[89]", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    RO: [, [,, "(?:[237]\\d|[89]0)\\d{7}|[23]\\d{5}",,,,,,, [6, 9]], [,, "[23][13-6]\\d{7}|(?:2(?:19\\d|[3-6]\\d9)|31\\d\\d)\\d\\d",,,, "211234567"], [,, "7[01]20\\d{5}|7(?:0[013-9]|1[01]|[2-7]\\d|8[03-8]|9[09])\\d{6}",,,, "712034567",,, [9]], [,, "800\\d{6}",,,, "800123456",,, [9]], [,, "90[0136]\\d{6}",,,, "900123456",,, [9]], [,, "801\\d{6}",,,, "801123456",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "RO", 40, "00", "0", " int ",, "0",,,, [[, "(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], [, "(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[237-9]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "(?:37\\d|80[578])\\d{6}",,,, "372123456",,, [9]],,, [,,,,,,,,, [-1]]],
    RS: [, [,, "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}",,,,,,, [6, 7, 8, 9, 10, 11, 12], [4, 5]], [,, "(?:11[1-9]\\d|(?:2[389]|39)(?:0[2-9]|[2-9]\\d))\\d{3,8}|(?:1[02-9]|2[0-24-7]|3[0-8])[2-9]\\d{4,9}",,,, "10234567",,, [7, 8, 9, 10, 11, 12], [4, 5, 6]], [,, "6(?:[0-689]|7\\d)\\d{6,7}",,,, "601234567",,, [8, 9, 10]], [,, "800\\d{3,9}",,,, "80012345"], [,, "(?:78\\d|90[0169])\\d{3,7}",,,, "90012345",,, [6, 7, 8, 9, 10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "RS", 381, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], [, "(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "7[06]\\d{4,10}",,,, "700123456"],,, [,,,,,,,,, [-1]]],
    RU: [, [,, "[347-9]\\d{9}",,,,,,, [10], [7]], [,, "(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}",,,, "3011234567",,,, [7]], [,, "9\\d{9}",,,, "9123456789"], [,, "80[04]\\d{7}",,,, "8001234567"], [,, "80[39]\\d{7}",,,, "8091234567"], [,,,,,,,,, [-1]], [,, "808\\d{7}",,,, "8081234567"], [,,,,,,,,, [-1]], "RU", 7, "810", "8",,, "8",, "8~10",, [[, "(\\d{3})(\\d{2})(\\d{2})", "$1-$2-$3", ["[0-79]"]], [, "(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)",, 1], [, "(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)",, 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)",, 1], [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[3489]"], "8 ($1)",, 1]], [[, "(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)",, 1], [, "(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)",, 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)",, 1], [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[3489]"], "8 ($1)",, 1]], [,,,,,,,,, [-1]], 1, "3[04-689]|[489]", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    RW: [, [,, "(?:06|[27]\\d\\d|[89]00)\\d{6}",,,,,,, [8, 9]], [,, "(?:06|2[23568]\\d)\\d{6}",,,, "250123456"], [,, "7[238]\\d{7}",,,, "720123456",,, [9]], [,, "800\\d{6}",,,, "800123456",,, [9]], [,, "900\\d{6}",,,, "900123456",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "RW", 250, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    SA: [, [,, "92\\d{7}|(?:[15]|8\\d)\\d{8}",,,,,,, [9, 10], [7]], [,, "1(?:1\\d|2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\\d{6}",,,, "112345678",,, [9], [7]], [,, "5(?:[013-689]\\d|7[0-36-8])\\d{6}",,,, "512345678",,, [9]], [,, "800\\d{7}",,,, "8001234567",,, [10]], [,, "925\\d{6}",,,, "925012345",,, [9]], [,, "920\\d{6}",,,, "920012345",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "SA", 966, "00", "0",,, "0",,,, [[, "(\\d{4})(\\d{5})", "$1 $2", ["9"]], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "811\\d{7}",,,, "8110123456",,, [10]],,, [,,,,,,,,, [-1]]],
    SB: [, [,, "(?:[1-6]|[7-9]\\d\\d)\\d{4}",,,,,,, [5, 7]], [,, "(?:1[4-79]|[23]\\d|4[0-2]|5[03]|6[0-37])\\d{3}",,,, "40123",,, [5]], [,, "48\\d{3}|(?:(?:7[1-9]|8[4-9])\\d|9(?:1[2-9]|2[013-9]|3[0-2]|[46]\\d|5[0-46-9]|7[0-689]|8[0-79]|9[0-8]))\\d{4}",,,, "7421234"], [,, "1[38]\\d{3}",,,, "18123",,, [5]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "5[12]\\d{3}",,,, "51123",,, [5]], "SB", 677, "0[01]",,,,,,,, [[, "(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    SC: [, [,, "8000\\d{3}|(?:[249]\\d|64)\\d{5}",,,,,,, [7]], [,, "4[2-46]\\d{5}",,,, "4217123"], [,, "2[5-8]\\d{5}",,,, "2510123"], [,, "8000\\d{3}",,,, "8000000"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "971\\d{4}|(?:64|95)\\d{5}",,,, "6412345"], "SC", 248, "010|0[0-2]",,,,,, "00",, [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    SD: [, [,, "[19]\\d{8}",,,,,,, [9]], [,, "1(?:5\\d|8[35-7])\\d{6}",,,, "153123456"], [,, "(?:1[0-2]|9[0-3569])\\d{7}",,,, "911231234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "SD", 249, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    SE: [, [,, "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",,,,,,, [6, 7, 8, 9, 10, 12]], [,, "(?:(?:[12][136]|3[356]|4[0246]|6[03]|8\\d)\\d|90[1-9])\\d{4,6}|(?:1(?:2[0-35]|4[0-4]|5[0-25-9]|7[13-6]|[89]\\d)|2(?:2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])|3(?:0[0-4]|1\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])|4(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01])|6(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])|9(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8]))\\d{5,6}",,,, "8123456",,, [7, 8, 9]], [,, "7[02369]\\d{7}",,,, "701234567",,, [9]], [,, "20\\d{4,7}",,,, "20123456",,, [6, 7, 8, 9]], [,, "649\\d{6}|9(?:00|39|44)[1-8]\\d{3,6}",,,, "9001234567",,, [7, 8, 9, 10]], [,, "77[0-7]\\d{6}",,,, "771234567",,, [9]], [,, "75[1-8]\\d{6}",,,, "751234567",,, [9]], [,,,,,,,,, [-1]], "SE", 46, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1"], [, "(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44)"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1"], [, "(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1"], [, "(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1"], [, "(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1"], [, "(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1"], [, "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1"]], [[, "(\\d{2})(\\d{2,3})(\\d{2})", "$1 $2 $3", ["20"]], [, "(\\d{3})(\\d{4})", "$1 $2", ["9(?:00|39|44)"]], [, "(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"]], [, "(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], [, "(\\d{3})(\\d{2,3})(\\d{2})", "$1 $2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"]], [, "(\\d{3})(\\d{2,3})(\\d{3})", "$1 $2 $3", ["9(?:00|39|44)"]], [, "(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"]], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["10|7"]], [, "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["8"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["9"]], [, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]"]]], [,, "74[02-9]\\d{6}",,,, "740123456",,, [9]],,, [,,,,,,,,, [-1]], [,, "10[1-8]\\d{6}",,,, "102345678",,, [9]],,, [,, "(?:25[245]|67[3-68])\\d{9}",,,, "254123456789",,, [12]]],
    SG: [, [,, "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}",,,,,,, [8, 10, 11]], [,, "662[0-24-9]\\d{4}|6(?:[1-578]\\d|6[013-57-9]|9[0-35-9])\\d{5}",,,, "61234567",,, [8]], [,, "(?:8(?:[1-8]\\d\\d|9(?:[014]\\d|2[1-9]|3[0-489]))|9[0-8]\\d\\d)\\d{4}",,,, "81234567",,, [8]], [,, "(?:18|8)00\\d{7}",,,, "18001234567",,, [10, 11]], [,, "1900\\d{7}",,,, "19001234567",,, [11]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "(?:3[12]\\d|666)\\d{5}",,,, "31234567",,, [8]], "SG", 65, "0[0-3]\\d",,,,,,,, [[, "(\\d{4,5})", "$1", ["1[013-9]|77", "1(?:[013-8]|9(?:0[1-9]|[1-9]))|77"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["[369]|8[1-9]"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], [, "(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]], [[, "(\\d{4})(\\d{4})", "$1 $2", ["[369]|8[1-9]"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], [, "(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "7000\\d{7}",,,, "70001234567",,, [11]],,, [,,,,,,,,, [-1]]],
    SH: [, [,, "(?:[256]\\d|8)\\d{3}",,,,,,, [4, 5]], [,, "2(?:[0-57-9]\\d|6[4-9])\\d\\d",,,, "22158"], [,, "[56]\\d{4}",,,, "51234",,, [5]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "262\\d\\d",,,, "26212",,, [5]], "SH", 290, "00",,,,,,,,,, [,,,,,,,,, [-1]], 1, "[256]", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    SI: [, [,, "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}",,,,,,, [5, 6, 7, 8]], [,, "(?:[1-357][2-8]|4[24-8])\\d{6}",,,, "12345678",,, [8], [7]], [,, "65(?:1\\d|55|[67]0)\\d{4}|(?:[37][01]|4[0139]|51|6[489])\\d{6}",,,, "31234567",,, [8]], [,, "80\\d{4,6}",,,, "80123456",,, [6, 7, 8]], [,, "89[1-3]\\d{2,5}|90\\d{4,6}",,,, "90123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "(?:59\\d\\d|8(?:1(?:[67]\\d|8[01389])|2(?:0\\d|2[0378]|8[0-2489])|3[389]\\d))\\d{4}",,,, "59012345",,, [8]], "SI", 386, "00|10(?:22|66|88|99)", "0",,, "0",, "00",, [[, "(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], [, "(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], [, "(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    SJ: [, [,, "0\\d{4}|(?:[4589]\\d|79)\\d{6}",,,,,,, [5, 8]], [,, "79\\d{6}",,,, "79123456",,, [8]], [,, "(?:4[015-8]|5[89]|9\\d)\\d{6}",,,, "41234567",,, [8]], [,, "80[01]\\d{5}",,,, "80012345",,, [8]], [,, "82[09]\\d{5}",,,, "82012345",,, [8]], [,, "810(?:0[0-6]|[2-8]\\d)\\d{3}",,,, "81021234",,, [8]], [,, "880\\d{5}",,,, "88012345",,, [8]], [,, "85[0-5]\\d{5}",,,, "85012345",,, [8]], "SJ", 47, "00",,,,,,,,,, [,,,,,,,,, [-1]],, "79", [,,,,,,,,, [-1]], [,, "(?:0[2-9]|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}",,,, "02000"],,, [,, "81[23]\\d{5}",,,, "81212345",,, [8]]],
    SK: [, [,, "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",,,,,,, [6, 7, 9]], [,, "(?:2(?:16|[2-9]\\d{3})|(?:(?:[3-5][1-8]\\d|819)\\d|601[1-5])\\d)\\d{4}|(?:2|[3-5][1-8])1[67]\\d{3}|[3-5][1-8]16\\d\\d",,,, "221234567"], [,, "909[1-9]\\d{5}|9(?:0[1-8]|1[0-24-9]|4[03-57-9]|5\\d)\\d{6}",,,, "912123456",,, [9]], [,, "800\\d{6}",,,, "800123456",,, [9]], [,, "9(?:00|[78]\\d)\\d{6}",,,, "900123456",,, [9]], [,, "8[5-9]\\d{7}",,,, "850123456",,, [9]], [,,,,,,,,, [-1]], [,, "6(?:02|5[0-4]|9[0-6])\\d{6}",,,, "690123456",,, [9]], "SK", 421, "00", "0",,, "0",,,, [[, "(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], [, "(\\d{4})(\\d{3})", "$1 $2", ["909", "9090"], "0$1"], [, "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], [[, "(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], [, "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], [,, "9090\\d{3}",,,, "9090123",,, [7]],,, [,, "9090\\d{3}|(?:602|8(?:00|[5-9]\\d)|9(?:00|[78]\\d))\\d{6}",,,,,,, [7, 9]], [,, "96\\d{7}",,,, "961234567",,, [9]],,, [,,,,,,,,, [-1]]],
    SL: [, [,, "(?:[2378]\\d|66|99)\\d{6}",,,,,,, [8], [6]], [,, "22[2-4][2-9]\\d{4}",,,, "22221234",,,, [6]], [,, "(?:25|3[013-5]|66|7[5-9]|8[08]|99)\\d{6}",,,, "25123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "SL", 232, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    SM: [, [,, "(?:0549|[5-7]\\d)\\d{6}",,,,,,, [8, 10], [6]], [,, "0549(?:8[0157-9]|9\\d)\\d{4}",,,, "0549886377",,, [10], [6]], [,, "6[16]\\d{6}",,,, "66661212",,, [8]], [,,,,,,,,, [-1]], [,, "7[178]\\d{6}",,,, "71123456",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "5[158]\\d{6}",,,, "58001110",,, [8]], "SM", 378, "00",,,, "([89]\\d{5})$", "0549$1",,, [[, "(\\d{6})", "$1", ["[89]"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], [, "(\\d{4})(\\d{6})", "$1 $2", ["0"]]], [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], [, "(\\d{4})(\\d{6})", "$1 $2", ["0"]]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    SN: [, [,, "(?:[378]\\d{4}|93330)\\d{4}",,,,,,, [9]], [,, "3(?:0(?:1[0-2]|80)|282|3(?:8[1-9]|9[3-9])|611)\\d{5}",,,, "301012345"], [,, "7(?:[06-8]\\d|21|90)\\d{6}",,,, "701234567"], [,, "800\\d{6}",,,, "800123456"], [,, "88[4689]\\d{6}",,,, "884123456"], [,, "81[02468]\\d{6}",,,, "810123456"], [,,,,,,,,, [-1]], [,, "93330\\d{4}|3(?:392|9[01]\\d)\\d{5}",,,, "933301234"], "SN", 221, "00",,,,,,,, [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    SO: [, [,, "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}",,,,,,, [6, 7, 8, 9]], [,, "(?:1\\d|2[0-79]|3[0-46-8]|4[0-7]|5[57-9])\\d{5}|(?:[134]\\d|8[125])\\d{4}",,,, "4012345",,, [6, 7]], [,, "28\\d{5}|(?:6[1-9]|79)\\d{6,7}|(?:15|24|(?:3[59]|4[89]|8[08])\\d|60|7[1-8]|9(?:0\\d|[2-9]))\\d{6}",,,, "71123456",,, [7, 8, 9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "SO", 252, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], [, "(\\d{6})", "$1", ["[134]"]], [, "(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], [, "(\\d)(\\d{7})", "$1 $2", ["24|[67]"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3478]|64|90"]], [, "(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[1-35-9]|9[2-9]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    SR: [, [,, "(?:[2-5]|68|[78]\\d)\\d{5}",,,,,,, [6, 7]], [,, "(?:2[1-3]|3[0-7]|(?:4|68)\\d|5[2-58])\\d{4}",,,, "211234"], [,, "(?:7[124-7]|8[125-9])\\d{5}",,,, "7412345",,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "56\\d{4}",,,, "561234",,, [6]], "SR", 597, "00",,,,,,,, [[, "(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], [, "(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], [, "(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    SS: [, [,, "[19]\\d{8}",,,,,,, [9]], [,, "1[89]\\d{7}",,,, "181234567"], [,, "(?:12|9[12579])\\d{7}",,,, "977123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "SS", 211, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    ST: [, [,, "(?:22|9\\d)\\d{5}",,,,,,, [7]], [,, "22\\d{5}",,,, "2221234"], [,, "900[5-9]\\d{3}|9(?:0[1-9]|[89]\\d)\\d{4}",,,, "9812345"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "ST", 239, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    SV: [, [,, "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?",,,,,,, [7, 8, 11]], [,, "2(?:[1-6]\\d{3}|[79]90[034]|890[0245])\\d{3}",,,, "21234567",,, [8]], [,, "66(?:[02-9]\\d\\d|1(?:[02-9]\\d|16))\\d{3}|(?:6[0-57-9]|7\\d)\\d{6}",,,, "70123456",,, [8]], [,, "800\\d{4}(?:\\d{4})?",,,, "8001234",,, [7, 11]], [,, "900\\d{4}(?:\\d{4})?",,,, "9001234",,, [7, 11]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "SV", 503, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    SX: [, [,, "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}",,,,,,, [10], [7]], [,, "7215(?:4[2-8]|8[239]|9[056])\\d{4}",,,, "7215425678",,,, [7]], [,, "7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}",,,, "7215205678",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002123456"], [,, "900[2-9]\\d{6}",,,, "9002123456"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "SX", 1, "011", "1",,, "1|(5\\d{6})$", "721$1",,,,, [,,,,,,,,, [-1]],, "721", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    SY: [, [,, "[1-39]\\d{8}|[1-5]\\d{7}",,,,,,, [8, 9], [6, 7]], [,, "21\\d{6,7}|(?:1(?:[14]\\d|[2356])|2[235]|3(?:[13]\\d|4)|4[134]|5[1-3])\\d{6}",,,, "112345678",,,, [6, 7]], [,, "9(?:22|[3-589]\\d|6[02-9])\\d{6}",,,, "944567890",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "SY", 963, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1",, 1], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1",, 1]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    SZ: [, [,, "0800\\d{4}|(?:[237]\\d|900)\\d{6}",,,,,,, [8, 9]], [,, "[23][2-5]\\d{6}",,,, "22171234",,, [8]], [,, "7[6-9]\\d{6}",,,, "76123456",,, [8]], [,, "0800\\d{4}",,,, "08001234",,, [8]], [,, "900\\d{6}",,,, "900012345",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "70\\d{6}",,,, "70012345",,, [8]], "SZ", 268, "00",,,,,,,, [[, "(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], [, "(\\d{5})(\\d{4})", "$1 $2", ["9"]]],, [,,,,,,,,, [-1]],,, [,, "0800\\d{4}",,,,,,, [8]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    TA: [, [,, "8\\d{3}",,,,,,, [4]], [,, "8\\d{3}",,,, "8999"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "TA", 290, "00",,,,,,,,,, [,,,,,,,,, [-1]],, "8", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    TC: [, [,, "(?:[58]\\d\\d|649|900)\\d{7}",,,,,,, [10], [7]], [,, "649(?:266|712|9(?:4\\d|50))\\d{4}",,,, "6497121234",,,, [7]], [,, "649(?:2(?:3[129]|4[1-79])|3\\d\\d|4[34][1-3])\\d{4}",,,, "6492311234",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002345678"], [,, "900[2-9]\\d{6}",,,, "9002345678"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,, "649(?:71[01]|966)\\d{4}",,,, "6497101234",,,, [7]], "TC", 1, "011", "1",,, "1|([2-479]\\d{6})$", "649$1",,,,, [,,,,,,,,, [-1]],, "649", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    TD: [, [,, "(?:22|[69]\\d|77)\\d{6}",,,,,,, [8]], [,, "22(?:[37-9]0|5[0-5]|6[89])\\d{4}",,,, "22501234"], [,, "(?:6[023568]|77|9\\d)\\d{6}",,,, "63012345"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "TD", 235, "00|16",,,,,, "00",, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    TG: [, [,, "[279]\\d{7}",,,,,,, [8]], [,, "2(?:2[2-7]|3[23]|4[45]|55|6[67]|77)\\d{5}",,,, "22212345"], [,, "(?:7[09]|9[0-36-9])\\d{6}",,,, "90112345"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "TG", 228, "00",,,,,,,, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    TH: [, [,, "1\\d{8,9}|(?:[2-57]|[689]\\d)\\d{7}",,,,,,, [8, 9, 10]], [,, "(?:2\\d|3[2-9]|4[2-5]|5[2-6]|7[3-7])\\d{6}",,,, "21234567",,, [8]], [,, "(?:14|6[1-6]|[89]\\d)\\d{7}",,,, "812345678",,, [9]], [,, "1800\\d{6}",,,, "1800123456",,, [10]], [,, "1900\\d{6}",,,, "1900123456",,, [10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "6[08]\\d{7}",,,, "601234567",,, [9]], "TH", 66, "00[1-9]", "0",,, "0",,,, [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["14|[3-9]"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    TJ: [, [,, "(?:00|11|[3-579]\\d|88)\\d{7}",,,,,,, [9], [3, 5, 6, 7]], [,, "(?:3(?:1[3-5]|2[245]|3[12]|4[24-7]|5[25]|72)|4(?:46|74|87))\\d{6}",,,, "372123456",,,, [3, 5, 6, 7]], [,, "41[18]\\d{6}|(?:00|11|5[05]|7[07]|88|9\\d)\\d{7}",,,, "917123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "TJ", 992, "810", "8",,, "8",, "8~10",, [[, "(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"],,, 1], [, "(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"],,, 1], [, "(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3"],,, 1], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0457-9]|11"],,, 1]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    TK: [, [,, "[2-47]\\d{3,6}",,,,,,, [4, 5, 6, 7]], [,, "(?:2[2-4]|[34]\\d)\\d{2,5}",,,, "3101"], [,, "7[2-4]\\d{2,5}",,,, "7290"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "TK", 690, "00",,,,,,,,,, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    TL: [, [,, "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}",,,,,,, [7, 8]], [,, "(?:2[1-5]|3[1-9]|4[1-4])\\d{5}",,,, "2112345",,, [7]], [,, "7[2-8]\\d{6}",,,, "77212345",,, [8]], [,, "80\\d{5}",,,, "8012345",,, [7]], [,, "90\\d{5}",,,, "9012345",,, [7]], [,,,,,,,,, [-1]], [,, "70\\d{5}",,,, "7012345",,, [7]], [,,,,,,,,, [-1]], "TL", 670, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["7"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    TM: [, [,, "[1-6]\\d{7}",,,,,,, [8]], [,, "(?:1(?:2\\d|3[1-9])|2(?:22|4[0-35-8])|3(?:22|4[03-9])|4(?:22|3[128]|4\\d|6[15])|5(?:22|5[7-9]|6[014-689]))\\d{5}",,,, "12345678"], [,, "6\\d{7}",,,, "66123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "TM", 993, "810", "8",,, "8",, "8~10",, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], [, "(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], [, "(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    TN: [, [,, "[2-57-9]\\d{7}",,,,,,, [8]], [,, "81200\\d{3}|(?:3[0-2]|7\\d)\\d{6}",,,, "30010123"], [,, "3(?:001|[12]40)\\d{4}|(?:(?:[259]\\d|4[0-6])\\d|3(?:1[1-35]|6[0-4]|91))\\d{5}",,,, "20123456"], [,, "8010\\d{4}",,,, "80101234"], [,, "88\\d{6}",,,, "88123456"], [,, "8[12]10\\d{4}",,,, "81101234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "TN", 216, "00",,,,,,,, [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    TO: [, [,, "(?:0800|[5-8]\\d{3})\\d{3}|[2-8]\\d{4}",,,,,,, [5, 7]], [,, "(?:2\\d|3[0-8]|4[0-4]|50|6[09]|7[0-24-69]|8[05])\\d{3}",,,, "20123",,, [5]], [,, "6(?:3[02]|8[5-9])\\d{4}|(?:6[09]|7\\d|8[46-9])\\d{5}",,,, "7715123",,, [7]], [,, "0800\\d{3}",,,, "0800222",,, [7]], [,, "55[04]\\d{4}",,,, "5501234",,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "TO", 676, "00",,,,,,,, [[, "(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], [, "(\\d{4})(\\d{3})", "$1 $2", ["0"]], [, "(\\d{3})(\\d{4})", "$1 $2", ["[5-8]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    TR: [, [,, "(?:4|8\\d{5})\\d{6}|(?:[2-58]\\d\\d|900)\\d{7}",,,,,,, [7, 10, 12]], [,, "(?:2(?:[13][26]|[28][2468]|[45][268]|[67][246])|3(?:[13][28]|[24-6][2468]|[78][02468]|92)|4(?:[16][246]|[23578][2468]|4[26]))\\d{7}",,,, "2123456789",,, [10]], [,, "56161\\d{5}|5(?:0[15-7]|1[06]|24|[34]\\d|5[1-59]|9[46])\\d{7}",,,, "5012345678",,, [10]], [,, "800\\d{7}(?:\\d{2})?",,,, "8001234567",,, [10, 12]], [,, "(?:8[89]8|900)\\d{7}",,,, "9001234567",,, [10]], [,,,,,,,,, [-1]], [,, "592(?:21[12]|461)\\d{4}",,,, "5922121234",,, [10]], [,,,,,,,,, [-1]], "TR", 90, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d)(\\d{3})", "$1 $2 $3", ["444"],,, 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[0589]|90"], "0$1",, 1], [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|616)", "5(?:[0-59]|6161)"], "0$1",, 1], [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)",, 1], [, "(\\d{3})(\\d{3})(\\d{6})", "$1 $2 $3", ["80"], "0$1",, 1]], [[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[0589]|90"], "0$1",, 1], [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|616)", "5(?:[0-59]|6161)"], "0$1",, 1], [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)",, 1], [, "(\\d{3})(\\d{3})(\\d{6})", "$1 $2 $3", ["80"], "0$1",, 1]], [,, "512\\d{7}",,,, "5123456789",,, [10]],,, [,, "444\\d{4}",,,,,,, [7]], [,, "(?:444|850\\d{3})\\d{4}",,,, "4441444",,, [7, 10]],,, [,,,,,,,,, [-1]]],
    TT: [, [,, "(?:[58]\\d\\d|900)\\d{7}",,,,,,, [10], [7]], [,, "868(?:2(?:0[13]|1[89]|[23]\\d|4[0-2])|6(?:0[7-9]|1[02-8]|2[1-9]|[3-69]\\d|7[0-79])|82[124])\\d{4}",,,, "8682211234",,,, [7]], [,, "868(?:2(?:6[3-9]|[7-9]\\d)|(?:3\\d|4[6-9])\\d|6(?:20|78|8\\d)|7(?:0[1-9]|1[02-9]|[2-9]\\d))\\d{4}",,,, "8682911234",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002345678"], [,, "900[2-9]\\d{6}",,,, "9002345678"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "TT", 1, "011", "1",,, "1|([2-46-8]\\d{6})$", "868$1",,,,, [,,,,,,,,, [-1]],, "868", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,, "868619\\d{4}",,,, "8686191234",,,, [7]]],
    TV: [, [,, "(?:2|7\\d\\d|90)\\d{4}",,,,,,, [5, 6, 7]], [,, "2[02-9]\\d{3}",,,, "20123",,, [5]], [,, "(?:7[01]\\d|90)\\d{4}",,,, "901234",,, [6, 7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "TV", 688, "00",,,,,,,, [[, "(\\d{2})(\\d{3})", "$1 $2", ["2"]], [, "(\\d{2})(\\d{4})", "$1 $2", ["90"]], [, "(\\d{2})(\\d{5})", "$1 $2", ["7"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    TW: [, [,, "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}",,,,,,, [7, 8, 9, 10, 11]], [,, "(?:2[2-8]\\d|370|55[01]|7[1-9])\\d{6}|4(?:(?:0(?:0[1-9]|[2-48]\\d)|1[023]\\d)\\d{4,5}|(?:[239]\\d\\d|4(?:0[56]|12|49))\\d{5})|6(?:[01]\\d{7}|4(?:0[56]|12|24|4[09])\\d{4,5})|8(?:(?:2(?:3\\d|4[0-269]|[578]0|66)|36[24-9]|90\\d\\d)\\d{4}|4(?:0[56]|12|24|4[09])\\d{4,5})|(?:2(?:2(?:0\\d\\d|4(?:0[68]|[249]0|3[0-467]|5[0-25-9]|6[0235689]))|(?:3(?:[09]\\d|1[0-4])|(?:4\\d|5[0-49]|6[0-29]|7[0-5])\\d)\\d)|(?:(?:3[2-9]|5[2-8]|6[0-35-79]|8[7-9])\\d\\d|4(?:2(?:[089]\\d|7[1-9])|(?:3[0-4]|[78]\\d|9[01])\\d))\\d)\\d{3}",,,, "221234567",,, [8, 9]], [,, "(?:40001[0-2]|9[0-8]\\d{4})\\d{3}",,,, "912345678",,, [9]], [,, "80[0-79]\\d{6}|800\\d{5}",,,, "800123456",,, [8, 9]], [,, "20(?:[013-9]\\d\\d|2)\\d{4}",,,, "203123456",,, [7, 9]], [,,,,,,,,, [-1]], [,, "99\\d{7}",,,, "990123456",,, [9]], [,, "7010(?:[0-2679]\\d|3[0-7]|8[0-5])\\d{5}|70\\d{8}",,,, "7012345678",,, [10, 11]], "TW", 886, "0(?:0[25-79]|19)", "0", "#",, "0",,,, [[, "(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], [, "(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "50[0-46-9]\\d{6}",,,, "500123456",,, [9]],,, [,,,,,,,,, [-1]]],
    TZ: [, [,, "(?:[26-8]\\d|41|90)\\d{7}",,,,,,, [9]], [,, "2[2-8]\\d{7}",,,, "222345678"], [,, "77[2-9]\\d{6}|(?:6[2-9]|7[13-689])\\d{7}",,,, "621234567"], [,, "80[08]\\d{6}",,,, "800123456"], [,, "90\\d{7}",,,, "900123456"], [,, "8(?:40|6[01])\\d{6}",,,, "840123456"], [,,,,,,,,, [-1]], [,, "41\\d{7}",,,, "412345678"], "TZ", 255, "00[056]", "0",,, "0",,,, [[, "(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,, "(?:8(?:[04]0|6[01])|90\\d)\\d{6}"], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    UA: [, [,, "[89]\\d{9}|[3-9]\\d{8}",,,,,,, [9, 10], [5, 6, 7]], [,, "(?:3[1-8]|4[13-8]|5[1-7]|6[12459])\\d{7}",,,, "311234567",,, [9], [5, 6, 7]], [,, "(?:50|6[36-8]|7[1-3]|9[1-9])\\d{7}",,,, "501234567",,, [9]], [,, "800[1-8]\\d{5,6}",,,, "800123456"], [,, "900[239]\\d{5,6}",,,, "900212345"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "89[1-579]\\d{6}",,,, "891234567",,, [9]], "UA", 380, "00", "0",,, "0",, "0~0",, [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["4[45][0-5]|5(?:0|6[37])|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]", "4[45][0-5]|5(?:0|6(?:3[14-7]|7))|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]"], "0$1"], [, "(\\d{4})(\\d{5})", "$1 $2", ["[3-6]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    UG: [, [,, "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}",,,,,,, [9], [5, 6, 7]], [,, "20(?:(?:(?:24|81)0|30[67])\\d|6(?:00[0-2]|30[0-4]))\\d{3}|(?:20(?:[0147]\\d|2[5-9]|32|5[0-4]|6[15-9])|[34]\\d{3})\\d{5}",,,, "312345678",,,, [5, 6, 7]], [,, "7260\\d{5}|7(?:[0157-9]\\d|20|36|4[0-4])\\d{6}",,,, "712345678"], [,, "800[1-3]\\d{5}",,,, "800123456"], [,, "90[1-3]\\d{6}",,,, "901123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "UG", 256, "00[057]", "0",,, "0",,,, [[, "(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], [, "(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], [, "(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    US: [, [,, "[2-9]\\d{9}",,,,,,, [10], [7]], [,, "(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[167]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[0179]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}",,,, "2015550123",,,, [7]], [,, "(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[167]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[0179]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}",,,, "2015550123",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002345678"], [,, "900[2-9]\\d{6}",,,, "9002345678"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "US", 1, "011", "1",,, "1",,, 1, [[, "(\\d{3})(\\d{4})", "$1-$2", ["[2-9]"]], [, "(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"],,, 1]], [[, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-9]"]]], [,,,,,,,,, [-1]], 1,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    UY: [, [,, "(?:[249]\\d\\d|80)\\d{5}|9\\d{6}",,,,,,, [7, 8]], [,, "(?:2\\d|4[2-7])\\d{6}",,,, "21231234",,, [8], [7]], [,, "9[1-9]\\d{6}",,,, "94231234",,, [8]], [,, "80[05]\\d{4}",,,, "8001234",,, [7]], [,, "90[0-8]\\d{4}",,,, "9001234",,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "UY", 598, "0(?:0|1[3-9]\\d)", "0", " int. ",, "0",, "00",, [[, "(\\d{3})(\\d{4})", "$1 $2", ["8|90"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], [, "(\\d{4})(\\d{4})", "$1 $2", ["[24]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    UZ: [, [,, "(?:[679]\\d|88)\\d{7}",,,,,,, [9]], [,, "(?:6(?:1(?:22|3[124]|4[1-4]|5[1-3578]|64)|2(?:22|3[0-57-9]|41)|5(?:22|3[3-7]|5[024-8])|6\\d\\d|7(?:[23]\\d|7[69])|9(?:22|4[1-8]|6[135]))|7(?:0(?:5[4-9]|6[0146]|7[124-6]|9[135-8])|(?:1[12]|8\\d)\\d|2(?:22|3[13-57-9]|4[1-3579]|5[14])|3(?:2\\d|3[1578]|4[1-35-7]|5[1-57]|61)|4(?:2\\d|3[1-579]|7[1-79])|5(?:22|5[1-9]|6[1457])|6(?:22|3[12457]|4[13-8])|9(?:22|5[1-9])))\\d{5}",,,, "669050123"], [,, "(?:6(?:1(?:2(?:2[01]|98)|35[0-4]|50\\d|61[23]|7(?:[01][017]|4\\d|55|9[5-9]))|2(?:(?:11|7\\d)\\d|2(?:[12]1|9[01379])|5(?:[126]\\d|3[0-4]))|5(?:19[01]|2(?:27|9[26])|(?:30|59|7\\d)\\d)|6(?:2(?:1[5-9]|2[0367]|38|41|52|60)|(?:3[79]|9[0-3])\\d|4(?:56|83)|7(?:[07]\\d|1[017]|3[07]|4[047]|5[057]|67|8[0178]|9[79]))|7(?:2(?:24|3[237]|4[5-9]|7[15-8])|5(?:7[12]|8[0589])|7(?:0\\d|[39][07])|9(?:0\\d|7[079]))|9(?:2(?:1[1267]|3[01]|5\\d|7[0-4])|(?:5[67]|7\\d)\\d|6(?:2[0-26]|8\\d)))|7(?:[07]\\d{3}|1(?:13[01]|6(?:0[47]|1[67]|66)|71[3-69]|98\\d)|2(?:2(?:2[79]|95)|3(?:2[5-9]|6[0-6])|57\\d|7(?:0\\d|1[17]|2[27]|3[37]|44|5[057]|66|88))|3(?:2(?:1[0-6]|21|3[469]|7[159])|(?:33|9[4-6])\\d|5(?:0[0-4]|5[579]|9\\d)|7(?:[0-3579]\\d|4[0467]|6[67]|8[078]))|4(?:2(?:29|5[0257]|6[0-7]|7[1-57])|5(?:1[0-4]|8\\d|9[5-9])|7(?:0\\d|1[024589]|2[0-27]|3[0137]|[46][07]|5[01]|7[5-9]|9[079])|9(?:7[015-9]|[89]\\d))|5(?:112|2(?:0\\d|2[29]|[49]4)|3[1568]\\d|52[6-9]|7(?:0[01578]|1[017]|[23]7|4[047]|[5-7]\\d|8[78]|9[079]))|6(?:2(?:2[1245]|4[2-4])|39\\d|41[179]|5(?:[349]\\d|5[0-2])|7(?:0[017]|[13]\\d|22|44|55|67|88))|9(?:22[128]|3(?:2[0-4]|7\\d)|57[02569]|7(?:2[05-9]|3[37]|4\\d|60|7[2579]|87|9[07])))|(?:88|9[0-57-9])\\d{3})\\d{4}",,,, "912345678"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "UZ", 998, "810", "8",,, "8",, "8~10",, [[, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[6-9]"], "8 $1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    VA: [, [,, "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",,,,,,, [6, 7, 8, 9, 10, 11, 12]], [,, "06698\\d{1,6}",,,, "0669812345",,, [6, 7, 8, 9, 10, 11]], [,, "3[1-9]\\d{8}|3[2-9]\\d{7}",,,, "3123456789",,, [9, 10]], [,, "80(?:0\\d{3}|3)\\d{3}",,,, "800123456",,, [6, 9]], [,, "(?:0878\\d\\d|89(?:2|4[5-9]\\d))\\d{3}|89[45][0-4]\\d\\d|(?:1(?:44|6[346])|89(?:5[5-9]|9))\\d{6}",,,, "899123456",,, [6, 8, 9, 10]], [,, "84(?:[08]\\d{3}|[17])\\d{3}",,,, "848123456",,, [6, 9]], [,, "1(?:78\\d|99)\\d{6}",,,, "1781234567",,, [9, 10]], [,, "55\\d{8}",,,, "5512345678",,, [10]], "VA", 39, "00",,,,,,,,,, [,,,,,,,,, [-1]],, "06698", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,, "3[2-8]\\d{9,10}",,,, "33101234501",,, [11, 12]]],
    VC: [, [,, "(?:[58]\\d\\d|784|900)\\d{7}",,,,,,, [10], [7]], [,, "784(?:266|3(?:6[6-9]|7\\d|8[0-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}",,,, "7842661234",,,, [7]], [,, "784(?:4(?:3[0-5]|5[45]|89|9[0-8])|5(?:2[6-9]|3[0-4])|720)\\d{4}",,,, "7844301234",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002345678"], [,, "900[2-9]\\d{6}",,,, "9002345678"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "VC", 1, "011", "1",,, "1|([2-7]\\d{6})$", "784$1",,,,, [,,,,,,,,, [-1]],, "784", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    VE: [, [,, "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}",,,,,,, [10], [7]], [,, "(?:2(?:12|3[457-9]|[467]\\d|[58][1-9]|9[1-6])|[4-6]00)\\d{7}",,,, "2121234567",,,, [7]], [,, "4(?:1[24-8]|2[46])\\d{7}",,,, "4121234567"], [,, "800\\d{7}",,,, "8001234567"], [,, "90[01]\\d{7}",,,, "9001234567"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "VE", 58, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1", "$CC $1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "501\\d{7}",,,, "5010123456",,,, [7]],,, [,,,,,,,,, [-1]]],
    VG: [, [,, "(?:284|[58]\\d\\d|900)\\d{7}",,,,,,, [10], [7]], [,, "284496[0-5]\\d{3}|284(?:229|4(?:22|9[45])|774|8(?:52|6[459]))\\d{4}",,,, "2842291234",,,, [7]], [,, "284496[6-9]\\d{3}|284(?:245|3(?:0[0-3]|4[0-7]|68|9[34])|4(?:4[0-6]|68|99)|5(?:4[0-7]|68|9[69]))\\d{4}",,,, "2843001234",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002345678"], [,, "900[2-9]\\d{6}",,,, "9002345678"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "VG", 1, "011", "1",,, "1|([2-578]\\d{6})$", "284$1",,,,, [,,,,,,,,, [-1]],, "284", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    VI: [, [,, "[58]\\d{9}|(?:34|90)0\\d{7}",,,,,,, [10], [7]], [,, "340(?:2(?:0[12]|2[06-8]|4[49]|77)|3(?:32|44)|4(?:2[23]|44|7[34]|89)|5(?:1[34]|55)|6(?:2[56]|4[23]|77|9[023])|7(?:1[2-57-9]|2[57]|7\\d)|884|998)\\d{4}",,,, "3406421234",,,, [7]], [,, "340(?:2(?:0[12]|2[06-8]|4[49]|77)|3(?:32|44)|4(?:2[23]|44|7[34]|89)|5(?:1[34]|55)|6(?:2[56]|4[23]|77|9[023])|7(?:1[2-57-9]|2[57]|7\\d)|884|998)\\d{4}",,,, "3406421234",,,, [7]], [,, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,, "8002345678"], [,, "900[2-9]\\d{6}",,,, "9002345678"], [,,,,,,,,, [-1]], [,, "52(?:35(?:[02-46-9]\\d|1[02-9]|5[0-46-9])|45(?:[034]\\d|1[02-9]|2[024-9]|5[0-46-9]))\\d{4}|52(?:3[2-46-9]|4[2-4])(?:[02-9]\\d|1[02-9])\\d{4}|5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,, "5002345678"], [,,,,,,,,, [-1]], "VI", 1, "011", "1",,, "1|([2-9]\\d{6})$", "340$1",, 1,,, [,,,,,,,,, [-1]],, "340", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    VN: [, [,, "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}",,,,,,, [7, 8, 9, 10]], [,, "2(?:0[3-9]|1[0-689]|2[0-25-9]|3[2-9]|4[2-8]|5[124-9]|6[0-39]|7[0-7]|8[2-79]|9[0-4679])\\d{7}",,,, "2101234567",,, [10]], [,, "(?:52[238]|89[689]|99[013-9])\\d{6}|(?:3\\d|5[689]|7[06-9]|8[1-8]|9[0-8])\\d{7}",,,, "912345678",,, [9]], [,, "1800\\d{4,6}|12(?:03|28)\\d{4}",,,, "1800123456",,, [8, 9, 10]], [,, "1900\\d{4,6}",,,, "1900123456",,, [8, 9, 10]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "672\\d{6}",,,, "672012345",,, [9]], "VN", 84, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[17]99"], "0$1",, 1], [, "(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1",, 1], [, "(\\d{3})(\\d{4,5})", "$1 $2", ["69"], "0$1",, 1], [, "(\\d{4})(\\d{4,6})", "$1 $2", ["1"],,, 1], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[69]"], "0$1",, 1], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3578]"], "0$1",, 1], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1",, 1], [, "(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1",, 1]], [[, "(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1",, 1], [, "(\\d{4})(\\d{4,6})", "$1 $2", ["1"],,, 1], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[69]"], "0$1",, 1], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3578]"], "0$1",, 1], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1",, 1], [, "(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1",, 1]], [,,,,,,,,, [-1]],,, [,, "[17]99\\d{4}|69\\d{5,6}",,,,,,, [7, 8]], [,, "(?:[17]99|80\\d)\\d{4}|69\\d{5,6}",,,, "1992000",,, [7, 8]],,, [,,,,,,,,, [-1]]],
    VU: [, [,, "(?:[23]\\d|[48]8)\\d{3}|(?:[57]\\d|90)\\d{5}",,,,,,, [5, 7]], [,, "(?:38[0-8]|48[4-9])\\d\\d|(?:2[02-9]|3[4-7]|88)\\d{3}",,,, "22123",,, [5]], [,, "(?:5\\d|7[013-7])\\d{5}",,,, "5912345",,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "90[1-9]\\d{4}",,,, "9010123",,, [7]], "VU", 678, "00",,,,,,,, [[, "(\\d{3})(\\d{4})", "$1 $2", ["[579]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "(?:3[03]|900\\d)\\d{3}",,,, "30123"],,, [,,,,,,,,, [-1]]],
    WF: [, [,, "(?:[45]0|68|72|8\\d)\\d{4}",,,,,,, [6]], [,, "(?:50|68|72)\\d{4}",,,, "501234"], [,, "(?:50|68|72|8[23])\\d{4}",,,, "501234"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "WF", 681, "00",,,,,,,, [[, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[4-8]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,, "[48]0\\d{4}",,,, "401234"]],
    WS: [, [,, "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}",,,,,,, [5, 6, 7, 10]], [,, "6[1-9]\\d{3}|(?:[2-5]|60)\\d{4}",,,, "22123",,, [5, 6]], [,, "(?:7[235-7]|8(?:[3-7]|9\\d{3}))\\d{5}",,,, "7212345",,, [7, 10]], [,, "800\\d{3}",,,, "800123",,, [6]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "WS", 685, "0",,,,,,,, [[, "(\\d{5})", "$1", ["[2-5]|6[1-9]"]], [, "(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], [, "(\\d{2})(\\d{5})", "$1 $2", ["7"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    XK: [, [,, "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}",,,,,,, [8, 9]], [,, "(?:2[89]|39)0\\d{6}|[23][89]\\d{6}",,,, "28012345"], [,, "4[3-9]\\d{6}",,,, "43201234",,, [8]], [,, "800\\d{5}",,,, "80001234",,, [8]], [,, "900\\d{5}",,,, "90001234",,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "XK", 383, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    YE: [, [,, "(?:1|7\\d)\\d{7}|[1-7]\\d{6}",,,,,,, [7, 8, 9], [6]], [,, "78[0-7]\\d{4}|17\\d{6}|(?:[12][2-68]|3[2358]|4[2-58]|5[2-6]|6[3-58]|7[24-6])\\d{5}",,,, "1234567",,, [7, 8], [6]], [,, "7[0137]\\d{7}",,,, "712345678",,, [9]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "YE", 967, "00", "0",,, "0",,,, [[, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7[24-68]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    YT: [, [,, "80\\d{7}|(?:26|63)9\\d{6}",,,,,,, [9]], [,, "269(?:0[67]|5[0-2]|6\\d|[78]0)\\d{4}",,,, "269601234"], [,, "639(?:0[0-79]|1[019]|[267]\\d|3[09]|[45]0|9[04-79])\\d{4}",,,, "639012345"], [,, "80\\d{7}",,,, "801234567"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "YT", 262, "00", "0",,, "0",,,,,, [,,,,,,,,, [-1]],, "269|63", [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    ZA: [, [,, "[1-9]\\d{8}|8\\d{4,7}",,,,,,, [5, 6, 7, 8, 9]], [,, "(?:1[0-8]|2[1-378]|3[1-69]|4\\d|5[1346-8])\\d{7}",,,, "101234567",,, [9]], [,, "(?:1(?:3492[0-25]|4495[0235]|549(?:20|5[01]))|4[34]492[01])\\d{3}|8[1-4]\\d{3,7}|(?:2[27]|47|54)4950\\d{3}|(?:1(?:049[2-4]|9[12]\\d\\d)|(?:6\\d|7[0-46-9])\\d{3}|8(?:5\\d{3}|7(?:08[67]|158|28[5-9]|310)))\\d{4}|(?:1[6-8]|28|3[2-69]|4[025689]|5[36-8])4920\\d{3}|(?:12|[2-5]1)492\\d{4}",,,, "711234567"], [,, "80\\d{7}",,,, "801234567",,, [9]], [,, "(?:86[2-9]|9[0-2]\\d)\\d{6}",,,, "862345678",,, [9]], [,, "860\\d{6}",,,, "860123456",,, [9]], [,,,,,,,,, [-1]], [,, "87(?:08[0-589]|15[0-79]|28[0-4]|31[1-9])\\d{4}|87(?:[02][0-79]|1[0-46-9]|3[02-9]|[4-9]\\d)\\d{5}",,,, "871234567",,, [9]], "ZA", 27, "00", "0",,, "0",,,, [[, "(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "861\\d{6}",,,, "861123456",,, [9]],,, [,,,,,,,,, [-1]]],
    ZM: [, [,, "(?:63|80)0\\d{6}|(?:21|[79]\\d)\\d{7}",,,,,,, [9], [6]], [,, "21[1-8]\\d{6}",,,, "211234567",,,, [6]], [,, "(?:7[679]|9[5-8])\\d{7}",,,, "955123456"], [,, "800\\d{6}",,,, "800123456"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "630\\d{6}",,,, "630012345"], "ZM", 260, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{3})", "$1 $2", ["[1-9]"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], [, "(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]], [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], [, "(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    ZW: [, [,, "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}",,,,,,, [5, 6, 7, 8, 9, 10], [3, 4]], [,, "(?:1(?:(?:3\\d|9)\\d|[4-8])|2(?:(?:(?:0(?:2[014]|5)|(?:2[0157]|31|84|9)\\d\\d|[56](?:[14]\\d\\d|20)|7(?:[089]|2[03]|[35]\\d\\d))\\d|4(?:2\\d\\d|8))\\d|1(?:2|[39]\\d{4}))|3(?:(?:123|(?:29\\d|92)\\d)\\d\\d|7(?:[19]|[56]\\d))|5(?:0|1[2-478]|26|[37]2|4(?:2\\d{3}|83)|5(?:25\\d\\d|[78])|[689]\\d)|6(?:(?:[16-8]21|28|52[013])\\d\\d|[39])|8(?:[1349]28|523)\\d\\d)\\d{3}|(?:4\\d\\d|9[2-9])\\d{4,5}|(?:(?:2(?:(?:(?:0|8[146])\\d|7[1-7])\\d|2(?:[278]\\d|92)|58(?:2\\d|3))|3(?:[26]|9\\d{3})|5(?:4\\d|5)\\d\\d)\\d|6(?:(?:(?:[0-246]|[78]\\d)\\d|37)\\d|5[2-8]))\\d\\d|(?:2(?:[569]\\d|8[2-57-9])|3(?:[013-59]\\d|8[37])|6[89]8)\\d{3}",,,, "1312345",,,, [3, 4]], [,, "7(?:[17]\\d|[38][1-9])\\d{6}",,,, "712345678",,, [9]], [,, "80(?:[01]\\d|20|8[0-8])\\d{3}",,,, "8001234",,, [7]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "86(?:1[12]|22|30|44|55|77|8[368])\\d{6}",,,, "8686123456",,, [10]], "ZW", 263, "00", "0",,, "0",,,, [[, "(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], [, "(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], [, "(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], [, "(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], [, "(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], [, "(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], [, "(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    800: [, [,, "[1-9]\\d{7}",,,,,,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "[1-9]\\d{7}",,,, "12345678"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "001", 800,,,,,,,, 1, [[, "(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    808: [, [,, "[1-9]\\d{7}",,,,,,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "[1-9]\\d{7}",,,, "12345678"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "001", 808,,,,,,,, 1, [[, "(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    870: [, [,, "[35-7]\\d{8}",,,,,,, [9]], [,,,,,,,,, [-1]], [,, "(?:[356]\\d|7[6-8])\\d{7}",,,, "301234567"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "001", 870,,,,,,,,, [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    878: [, [,, "10\\d{10}",,,,,,, [12]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "10\\d{10}",,,, "101234567890"], "001", 878,,,,,,,, 1, [[, "(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    881: [, [,, "[0-36-9]\\d{8}",,,,,,, [9]], [,,,,,,,,, [-1]], [,, "[0-36-9]\\d{8}",,,, "612345678"], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "001", 881,,,,,,,,, [[, "(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-36-9]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    882: [, [,, "[13]\\d{6}(?:\\d{2,5})?|285\\d{9}|[19]\\d{7}",,,,,,, [7, 8, 9, 10, 11, 12]], [,,,,,,,,, [-1]], [,, "3(?:37\\d\\d|42)\\d{4}|3(?:2|47|7\\d{3})\\d{7}",,,, "3421234",,, [7, 9, 10, 12]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:(?:285\\d\\d|3(?:45|[69]\\d{3}))\\d|9[89])\\d{6}",,,, "390123456789"], "001", 882,,,,,,,,, [[, "(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], [, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[19]"]], [, "(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"]], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["34[57]"]], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], [, "(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-3]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,, "348[57]\\d{7}",,,, "34851234567",,, [11]]],
    883: [, [,, "51\\d{7}(?:\\d{3})?",,,,,,, [9, 12]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "51[013]0\\d{8}|5100\\d{5}",,,, "510012345"], "001", 883,,,,,,,, 1, [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], [, "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["510"]], [, "(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["5"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]],
    888: [, [,, "\\d{11}",,,,,,, [11]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "001", 888,,,,,,,, 1, [[, "(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,, "\\d{11}",,,, "12345678901"],,, [,,,,,,,,, [-1]]],
    979: [, [,, "[1359]\\d{8}",,,,,,, [9], [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,, "[1359]\\d{8}",,,, "123456789",,,, [8]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], [,,,,,,,,, [-1]], "001", 979,,,,,,,, 1, [[, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]],, [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]], [,,,,,,,,, [-1]],,, [,,,,,,,,, [-1]]]
  };
  /*
  Copyright (C) 2010 The Libphonenumber Authors.
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */

  function M() {
    this.a = {};
  }

  M.c = void 0;

  M.a = function () {
    return M.c ? M.c : M.c = new M();
  };

  var xa = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    "\uff10": "0",
    "\uff11": "1",
    "\uff12": "2",
    "\uff13": "3",
    "\uff14": "4",
    "\uff15": "5",
    "\uff16": "6",
    "\uff17": "7",
    "\uff18": "8",
    "\uff19": "9",
    "\u0660": "0",
    "\u0661": "1",
    "\u0662": "2",
    "\u0663": "3",
    "\u0664": "4",
    "\u0665": "5",
    "\u0666": "6",
    "\u0667": "7",
    "\u0668": "8",
    "\u0669": "9",
    "\u06f0": "0",
    "\u06f1": "1",
    "\u06f2": "2",
    "\u06f3": "3",
    "\u06f4": "4",
    "\u06f5": "5",
    "\u06f6": "6",
    "\u06f7": "7",
    "\u06f8": "8",
    "\u06f9": "9"
  },
      ya = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    "\uff10": "0",
    "\uff11": "1",
    "\uff12": "2",
    "\uff13": "3",
    "\uff14": "4",
    "\uff15": "5",
    "\uff16": "6",
    "\uff17": "7",
    "\uff18": "8",
    "\uff19": "9",
    "\u0660": "0",
    "\u0661": "1",
    "\u0662": "2",
    "\u0663": "3",
    "\u0664": "4",
    "\u0665": "5",
    "\u0666": "6",
    "\u0667": "7",
    "\u0668": "8",
    "\u0669": "9",
    "\u06f0": "0",
    "\u06f1": "1",
    "\u06f2": "2",
    "\u06f3": "3",
    "\u06f4": "4",
    "\u06f5": "5",
    "\u06f6": "6",
    "\u06f7": "7",
    "\u06f8": "8",
    "\u06f9": "9",
    A: "2",
    B: "2",
    C: "2",
    D: "3",
    E: "3",
    F: "3",
    G: "4",
    H: "4",
    I: "4",
    J: "5",
    K: "5",
    L: "5",
    M: "6",
    N: "6",
    O: "6",
    P: "7",
    Q: "7",
    R: "7",
    S: "7",
    T: "8",
    U: "8",
    V: "8",
    W: "9",
    X: "9",
    Y: "9",
    Z: "9"
  },
      N = /^[+\uff0b]+/,
      za = /([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])/,
      Aa = /[+\uff0b0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]/,
      Ba = /[\\\/] *x/,
      Ca = /[^0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9A-Za-z#]+$/,
      Da = /(?:.*?[A-Za-z]){3}.*/,
      Ea = /(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|\u0434\u043e\u0431|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\.\uff0e]?[ \u00a0\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)$/i,
      Fa = /^[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{2}$|^[+\uff0b]*(?:[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e*]*[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]){3,}[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e*A-Za-z0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]*(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|\u0434\u043e\u0431|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\.\uff0e]?[ \u00a0\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)?$/i,
      Ga = /(\$\d)/;

  function Ha(a) {
    var b = a.search(Aa);
    0 <= b ? (a = a.substring(b), a = a.replace(Ca, ""), b = a.search(Ba), 0 <= b && (a = a.substring(0, b))) : a = "";
    return a;
  }

  function Ia(a) {
    return 2 > a.length ? !1 : O(Fa, a);
  }

  function Ja(a) {
    return O(Da, a) ? P(a, ya) : P(a, xa);
  }

  function Ka(a) {
    var b = Ja(a.toString());
    a.c = "";
    a.a(b);
  }

  function La(a) {
    return null != a && (1 != A(a, 9) || -1 != w(a, 9)[0]);
  }

  function P(a, b) {
    for (var c = new F(), d, e = a.length, f = 0; f < e; ++f) d = a.charAt(f), d = b[d.toUpperCase()], null != d && c.a(d);

    return c.toString();
  }

  function Q(a) {
    return null != a && isNaN(a) && a.toUpperCase() in wa;
  }

  function Ma(a, b, c) {
    if (0 == t(b, 2) && null != b.a[5]) {
      var d = y(b, 5);
      if (0 < d.length) return d;
    }

    d = y(b, 1);
    var e = R(b);
    if (0 == c) return Na(d, 0, e, "");
    if (!(d in K)) return e;
    a = S(a, d, T(d));
    b = null != b.a[3] && 0 != t(b, 3).length ? 3 == c ? ";ext=" + t(b, 3) : null != a.a[13] ? t(a, 13) + y(b, 3) : " ext. " + y(b, 3) : "";

    a: {
      a = 0 == w(a, 20).length || 2 == c ? w(a, 19) : w(a, 20);

      for (var f, g = a.length, h = 0; h < g; ++h) {
        f = a[h];
        var l = A(f, 3);
        if (0 == l || 0 == e.search(t(f, 3, l - 1))) if (l = new RegExp(t(f, 1)), O(l, e)) {
          a = f;
          break a;
        }
      }

      a = null;
    }

    null != a && (g = a, a = y(g, 2), f = new RegExp(t(g, 1)), y(g, 5), g = y(g, 4), e = 2 == c && null != g && 0 < g.length ? e.replace(f, a.replace(Ga, g)) : e.replace(f, a), 3 == c && (e = e.replace(/^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e]+/, ""), e = e.replace(/[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e]+/g, "-")));
    return Na(d, c, e, b);
  }

  function S(a, b, c) {
    return "001" == c ? U(a, "" + b) : U(a, c);
  }

  function R(a) {
    if (null == a.a[2]) return "";
    var b = "" + t(a, 2);
    return null != a.a[4] && t(a, 4) && 0 < y(a, 8) ? Array(y(a, 8) + 1).join("0") + b : b;
  }

  function Na(a, b, c, d) {
    switch (b) {
      case 0:
        return "+" + a + c + d;

      case 1:
        return "+" + a + " " + c + d;

      case 3:
        return "tel:+" + a + "-" + c + d;

      default:
        return c + d;
    }
  }

  function V(a, b) {
    switch (b) {
      case 4:
        return t(a, 5);

      case 3:
        return t(a, 4);

      case 1:
        return t(a, 3);

      case 0:
      case 2:
        return t(a, 2);

      case 5:
        return t(a, 6);

      case 6:
        return t(a, 8);

      case 7:
        return t(a, 7);

      case 8:
        return t(a, 21);

      case 9:
        return t(a, 25);

      case 10:
        return t(a, 28);

      default:
        return t(a, 1);
    }
  }

  function W(a, b) {
    return X(a, t(b, 1)) ? X(a, t(b, 5)) ? 4 : X(a, t(b, 4)) ? 3 : X(a, t(b, 6)) ? 5 : X(a, t(b, 8)) ? 6 : X(a, t(b, 7)) ? 7 : X(a, t(b, 21)) ? 8 : X(a, t(b, 25)) ? 9 : X(a, t(b, 28)) ? 10 : X(a, t(b, 2)) ? t(b, 18) || X(a, t(b, 3)) ? 2 : 0 : !t(b, 18) && X(a, t(b, 3)) ? 1 : -1 : -1;
  }

  function U(a, b) {
    if (null == b) return null;
    b = b.toUpperCase();
    var c = a.a[b];

    if (null == c) {
      c = wa[b];
      if (null == c) return null;
      c = new E().a(I.f(), c);
      a.a[b] = c;
    }

    return c;
  }

  function X(a, b) {
    var c = a.length;
    return 0 < A(b, 9) && -1 == p(w(b, 9), c) ? !1 : O(y(b, 2), a);
  }

  function Oa(a, b) {
    if (null == b) return null;
    var c = y(b, 1);
    c = K[c];
    if (null == c) a = null;else if (1 == c.length) a = c[0];else a: {
      b = R(b);

      for (var d, e = c.length, f = 0; f < e; f++) {
        d = c[f];
        var g = U(a, d);

        if (null != g.a[23]) {
          if (0 == b.search(t(g, 23))) {
            a = d;
            break a;
          }
        } else if (-1 != W(b, g)) {
          a = d;
          break a;
        }
      }

      a = null;
    }
    return a;
  }

  function T(a) {
    a = K[a];
    return null == a ? "ZZ" : a[0];
  }

  function Y(a, b, c, d) {
    var e = V(c, d),
        f = 0 == A(e, 9) ? w(t(c, 1), 9) : w(e, 9);
    e = w(e, 10);
    if (2 == d) if (La(V(c, 0))) a = V(c, 1), La(a) && (f = f.concat(0 == A(a, 9) ? w(t(c, 1), 9) : w(a, 9)), q(f), 0 == e.length ? e = w(a, 10) : (e = e.concat(w(a, 10)), q(e)));else return Y(a, b, c, 1);
    if (-1 == f[0]) return 5;
    b = b.length;
    if (-1 < p(e, b)) return 4;
    c = f[0];
    return c == b ? 0 : c > b ? 2 : f[f.length - 1] < b ? 3 : -1 < p(f, b, 1) ? 0 : 5;
  }

  function Pa(a, b) {
    var c = R(b);
    b = y(b, 1);
    if (!(b in K)) return 1;
    b = S(a, b, T(b));
    return Y(a, c, b, -1);
  }

  function Qa(a, b, c, d, e, f) {
    if (0 == b.length) return 0;
    b = new F(b);
    var g;
    null != c && (g = t(c, 11));
    null == g && (g = "NonMatch");
    var h = b.toString();
    if (0 == h.length) g = 20;else if (N.test(h)) h = h.replace(N, ""), b.c = "", b.a(Ja(h)), g = 1;else {
      h = new RegExp(g);
      Ka(b);
      g = b.toString();

      if (0 == g.search(h)) {
        h = g.match(h)[0].length;
        var l = g.substring(h).match(za);
        l && null != l[1] && 0 < l[1].length && "0" == P(l[1], xa) ? g = !1 : (b.c = "", b.a(g.substring(h)), g = !0);
      } else g = !1;

      g = g ? 5 : 20;
    }
    e && u(f, 6, g);

    if (20 != g) {
      if (2 >= b.c.length) throw Error("Phone number too short after IDD");

      a: {
        a = b.toString();
        if (0 != a.length && "0" != a.charAt(0)) for (e = a.length, b = 1; 3 >= b && b <= e; ++b) if (c = parseInt(a.substring(0, b), 10), c in K) {
          d.a(a.substring(b));
          d = c;
          break a;
        }
        d = 0;
      }

      if (0 != d) return u(f, 1, d), d;
      throw Error("Invalid country calling code");
    }

    if (null != c && (g = y(c, 10), h = "" + g, l = b.toString(), 0 == l.lastIndexOf(h, 0) && (h = new F(l.substring(h.length)), l = t(c, 1), l = new RegExp(y(l, 2)), Ra(h, c, null), h = h.toString(), !O(l, b.toString()) && O(l, h) || 3 == Y(a, b.toString(), c, -1)))) return d.a(h), e && u(f, 6, 10), u(f, 1, g), g;
    u(f, 1, 0);
    return 0;
  }

  function Ra(a, b, c) {
    var d = a.toString(),
        e = d.length,
        f = t(b, 15);

    if (0 != e && null != f && 0 != f.length) {
      var g = new RegExp("^(?:" + f + ")");

      if (e = g.exec(d)) {
        f = new RegExp(y(t(b, 1), 2));
        var h = O(f, d),
            l = e.length - 1;
        b = t(b, 16);

        if (null == b || 0 == b.length || null == e[l] || 0 == e[l].length) {
          if (!h || O(f, d.substring(e[0].length))) null != c && 0 < l && null != e[l] && c.a(e[1]), a.set(d.substring(e[0].length));
        } else if (d = d.replace(g, b), !h || O(f, d)) null != c && 0 < l && c.a(e[1]), a.set(d);
      }
    }
  }

  function Z(a, b, c) {
    if (!Q(c) && 0 < b.length && "+" != b.charAt(0)) throw Error("Invalid country calling code");
    return Sa(a, b, c, !0);
  }

  function Sa(a, b, c, d) {
    if (null == b) throw Error("The string supplied did not seem to be a phone number");
    if (250 < b.length) throw Error("The string supplied is too long to be a phone number");
    var e = new F(),
        f = b.indexOf(";phone-context=");

    if (0 <= f) {
      var g = f + 15;

      if ("+" == b.charAt(g)) {
        var h = b.indexOf(";", g);
        0 < h ? e.a(b.substring(g, h)) : e.a(b.substring(g));
      }

      g = b.indexOf("tel:");
      e.a(b.substring(0 <= g ? g + 4 : 0, f));
    } else e.a(Ha(b));

    f = e.toString();
    g = f.indexOf(";isub=");
    0 < g && (e.c = "", e.a(f.substring(0, g)));
    if (!Ia(e.toString())) throw Error("The string supplied did not seem to be a phone number");
    f = e.toString();
    if (!(Q(c) || null != f && 0 < f.length && N.test(f))) throw Error("Invalid country calling code");
    f = new J();
    d && u(f, 5, b);

    a: {
      b = e.toString();
      g = b.search(Ea);

      if (0 <= g && Ia(b.substring(0, g))) {
        h = b.match(Ea);

        for (var l = h.length, z = 1; z < l; ++z) if (null != h[z] && 0 < h[z].length) {
          e.c = "";
          e.a(b.substring(0, g));
          b = h[z];
          break a;
        }
      }

      b = "";
    }

    0 < b.length && u(f, 3, b);
    g = U(a, c);
    b = new F();
    h = 0;
    l = e.toString();

    try {
      h = Qa(a, l, g, b, d, f);
    } catch (L) {
      if ("Invalid country calling code" == L.message && N.test(l)) {
        if (l = l.replace(N, ""), h = Qa(a, l, g, b, d, f), 0 == h) throw L;
      } else throw L;
    }

    0 != h ? (e = T(h), e != c && (g = S(a, h, e))) : (Ka(e), b.a(e.toString()), null != c ? (h = y(g, 10), u(f, 1, h)) : d && (delete f.a[6], f.c && delete f.c[6]));
    if (2 > b.c.length) throw Error("The string supplied is too short to be a phone number");
    null != g && (c = new F(), e = new F(b.toString()), Ra(e, g, c), a = Y(a, e.toString(), g, -1), 2 != a && 4 != a && 5 != a && (b = e, d && 0 < c.toString().length && u(f, 7, c.toString())));
    d = b.toString();
    a = d.length;
    if (2 > a) throw Error("The string supplied is too short to be a phone number");
    if (17 < a) throw Error("The string supplied is too long to be a phone number");

    if (1 < d.length && "0" == d.charAt(0)) {
      u(f, 4, !0);

      for (a = 1; a < d.length - 1 && "0" == d.charAt(a);) a++;

      1 != a && u(f, 8, a);
    }

    u(f, 2, parseInt(d, 10));
    return f;
  }

  function O(a, b) {
    return (a = "string" == typeof a ? b.match("^(?:" + a + ")$") : b.match(a)) && a[0].length == b.length ? !0 : !1;
  }

  ;
  m("intlTelInputUtils", {});
  m("intlTelInputUtils.formatNumber", function (a, b, c) {
    try {
      var d = M.a(),
          e = Z(d, a, b),
          f = Pa(d, e);
      return 0 == f || 4 == f ? Ma(d, e, "undefined" == typeof c ? 0 : c) : a;
    } catch (g) {
      return a;
    }
  });
  m("intlTelInputUtils.getExampleNumber", function (a, b, c) {
    try {
      var d = M.a();

      a: {
        if (Q(a)) {
          var e = V(U(d, a), c);

          try {
            if (null != e.a[6]) {
              var f = t(e, 6);
              var g = Sa(d, f, a, !1);
              break a;
            }
          } catch (h) {}
        }

        g = null;
      }

      return Ma(d, g, b ? 2 : 1);
    } catch (h) {
      return "";
    }
  });
  m("intlTelInputUtils.getExtension", function (a, b) {
    try {
      return t(Z(M.a(), a, b), 3);
    } catch (c) {
      return "";
    }
  });
  m("intlTelInputUtils.getNumberType", function (a, b) {
    try {
      var c = M.a();
      var d = Z(c, a, b),
          e = Oa(c, d),
          f = S(c, y(d, 1), e);
      if (null == f) var g = -1;else {
        var h = R(d);
        g = W(h, f);
      }
      return g;
    } catch (l) {
      return -99;
    }
  });
  m("intlTelInputUtils.getValidationError", function (a, b) {
    try {
      var c = M.a(),
          d = Z(c, a, b);
      return Pa(c, d);
    } catch (e) {
      return "Invalid country calling code" == e.message ? 1 : "Phone number too short after IDD" == e.message || "The string supplied is too short to be a phone number" == e ? 2 : "The string supplied is too long to be a phone number" == e.message ? 3 : -99;
    }
  });
  m("intlTelInputUtils.isValidNumber", function (a, b) {
    try {
      var c = M.a(),
          d = Z(c, a, b);
      var e = Oa(c, d),
          f = y(d, 1),
          g = S(c, f, e),
          h;

      if (!(h = null == g)) {
        var l;

        if (l = "001" != e) {
          var z = U(c, e);
          if (null == z) throw Error("Invalid region code: " + e);
          var L = y(z, 10);
          l = f != L;
        }

        h = l;
      }

      if (h) var va = !1;else {
        var Ta = R(d);
        va = -1 != W(Ta, g);
      }
      return va;
    } catch (Ua) {
      return !1;
    }
  });
  m("intlTelInputUtils.numberFormat", {
    E164: 0,
    INTERNATIONAL: 1,
    NATIONAL: 2,
    RFC3966: 3
  });
  m("intlTelInputUtils.numberType", {
    FIXED_LINE: 0,
    MOBILE: 1,
    FIXED_LINE_OR_MOBILE: 2,
    TOLL_FREE: 3,
    PREMIUM_RATE: 4,
    SHARED_COST: 5,
    VOIP: 6,
    PERSONAL_NUMBER: 7,
    PAGER: 8,
    UAN: 9,
    VOICEMAIL: 10,
    UNKNOWN: -1
  });
  m("intlTelInputUtils.validationError", {
    IS_POSSIBLE: 0,
    INVALID_COUNTRY_CODE: 1,
    TOO_SHORT: 2,
    TOO_LONG: 3,
    IS_POSSIBLE_LOCAL_ONLY: 4,
    INVALID_LENGTH: 5
  });
})();

/***/ }),

/***/ "./assets/scss/stylesheet.scss":
/*!*************************************!*\
  !*** ./assets/scss/stylesheet.scss ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./inc/custommapsmeta/js/modules/front-end/CustomMapsMeta.js":
/*!*******************************************************************!*\
  !*** ./inc/custommapsmeta/js/modules/front-end/CustomMapsMeta.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_js_modules_frontend_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../assets/js/modules/frontend/index */ "./assets/js/modules/frontend/index.js");


class WorkingspacesMaps {
  constructor() {
    this.$workspaceContainer = $('#workspaces-map');
    if (!this.$workspaceContainer.length) return;
    this.$contentContainer = this.$workspaceContainer.find('.content-container');
    this.$labelFilterContainer = this.$contentContainer.find('.action-container > .label');
    this.$filterContainer = this.$contentContainer.find('.filter-container');
    this.$mapContainer = this.$contentContainer.find('.map-container');
    this.$mapSpacer = this.$mapContainer.find('.map-spacer');
    this.$map = this.$mapContainer.find('.map#map');
    this.$itemContainer = this.$contentContainer.find('.item-container');
    this.$filterCategoriesContainer = this.$filterContainer.find('.filter.categories');
    this.$filterCapacityContainer = this.$filterContainer.find('.filter.capacity');
    this.$filterLocationContainer = this.$filterContainer.find('.filter.location');
    this.$filterPriceRangeContainer = this.$filterContainer.find('.filter.price-range');
    this.$priceRange = this.$filterContainer.find('.filter > .action-container > .slider#price-range');
    this.$btnFilter = this.$workspaceContainer.find('.action-container > .action.filter');
    this.$btnSetFilter = this.$filterContainer.find('.btn.filter');
    this.$btnFitLocations = this.$mapContainer.find('.btn.fit-workingspaces');
    this.$btnMapView = this.$contentContainer.find('.action-container#mobile-maps');
    this.$btnLoadMore = this.$itemContainer.find('.btn.load-more');
    this.$btnFindAllposts = this.$itemContainer.find('.find-all.posts'); //local variable

    this.siteUrl = translation_array.site_url;
    this.mapZoom = 15;
    this.isMapLoaded = false;
    this.btnFilterPositionTop = this.$btnFilter.offset().top + 500;
    this.filterItem = 1; //init slider

    Object(_assets_js_modules_frontend_index__WEBPACK_IMPORTED_MODULE_0__["rangeSlider"])({
      container: this.$priceRange.get()[0]
    });
    this.initAnimation(); // init events

    this.events(); // init map

    this.initMap();
  }

  initMap() {
    var _this$$map$data$split, _this$$map, _this$$map$data;

    this.map = Object(_assets_js_modules_frontend_index__WEBPACK_IMPORTED_MODULE_0__["maps"])({
      container: this.$map.get()[0],
      center: (_this$$map$data$split = (_this$$map = this.$map) === null || _this$$map === void 0 ? void 0 : (_this$$map$data = _this$$map.data('geolocation')) === null || _this$$map$data === void 0 ? void 0 : _this$$map$data.split(',')) !== null && _this$$map$data$split !== void 0 ? _this$$map$data$split : null,
      zoom: this.mapZoom
    }).control();
    this.workingspaces = this.getWorkingspacesInHtml();
    const locations = this.workingspaces.map(workingspace => {
      if (workingspace !== null && workingspace !== void 0 && workingspace.geolocation) return workingspace.geolocation;
    });
    this.setMapMarkers(locations); //

    this.mapEvents();
  }

  setMapMarkers(locations) {
    if (this.markers) this.markers.forEach(marker => marker.remove());
    if (locations.length < 1) return;

    if (locations.length > 1) {
      this.markers = this.map.fitLocations(locations).addMarkers(this.workingspaces).getMarkers();
    } else {
      this.markers = this.map.addMarkers(this.workingspaces).getMarkers();
      this.map.get().flyTo({
        center: locations[0],
        essential: true,
        zoom: this.mapZoom
      });
    }
  }

  mapEvents() {
    this.$map.hide();
    const load = Object(_assets_js_modules_frontend_index__WEBPACK_IMPORTED_MODULE_0__["loading"])(this.$mapContainer, 60).start();
    this.map.get().on('load', () => {
      this.$btnMapView.html(`<button class="btn maps"><i class="far fa-map"></i></button>`);
      this.$map.show();
      this.isMapLoaded = true;
      load.end();
      this.map.get().resize();
    });
  }

  initAnimation() {
    if (!this.$filterContainer) return;
    this.filterAnimation = gsap.timeline({
      paused: true
    });
    this.$filterContainer.css({
      'display': 'none',
      'opacity': 0
    });
    this.filterAnimation.to(this.$filterContainer, {
      opacity: 1,
      display: 'flex',
      flexDirection: 'column',
      translateY: 0,
      duration: .3
    });
    this.mapMobileAnimation = gsap.timeline({
      paused: true,
      onComplete: () => {
        if (this.isMapLoaded) {
          this.$mapContainer.css('width', $(document).width() - 44);
          this.map.get().resize();
        }
      },
      onReverseComplete: () => this.$mapContainer.css('width', 0)
    });
    this.mapMobileAnimation.to(this.$mapContainer, {
      opacity: 1,
      width: $(document).width() - 44
    });
  }

  initBtnMobileMapAnimation() {
    this.$btnMapView.addClass('is-active');
    this.btnMapviewAnimation = gsap.timeline({
      onComplete: () => this.$btnMapView.find('.btn.maps > i').attr('class', 'fas fa-times'),
      onReverseComplete: () => {
        this.$btnMapView.find('.btn.maps > i').attr('class', 'far fa-map');
        this.$btnMapView.css({
          left: 'auto',
          right: 0
        });
      }
    });
    this.btnMapviewAnimation.to(this.$btnMapView, {
      top: 20,
      left: -10,
      padding: 5,
      right: 'auto'
    }).to(this.$btnMapView.find('.btn.maps'), {
      width: 35,
      height: 35,
      marginRight: 0
    }, '<').to(this.$btnMapView.find('.btn.maps > i'), {
      fontSize: 18
    }, '<');
  }

  events() {
    this.$btnFilter.on('click', () => {
      this.$btnFilter.toggleClass('is-active');

      if (this.$btnFilter.hasClass('is-active')) {
        this.filterAnimation.play();
        return;
      } else {
        this.filterAnimation.reverse();
        return;
      }
    });
    this.$filterLocationContainer.on('click', '.action-container > button', e => {
      const $el = $(e.currentTarget);
      $el.siblings().removeClass('is-active');
      $el.addClass('is-active');
    });
    this.$filterCategoriesContainer.on('click', '.action-container > button', e => {
      const $el = $(e.currentTarget);
      $el.toggleClass('is-active');
    });
    this.$filterCapacityContainer.on('click', '.action-container > button', e => {
      const $el = $(e.currentTarget);
      $el.toggleClass('is-active');
    });
    this.$btnSetFilter.on('click', () => {
      this.filterAnimation.reverse();
      this.$btnFilter.removeClass('is-active');
      this.filterItem = 1;
      this.dislplayFilteredWorkingspaces();
    });
    this.$itemContainer.on('click', '.loading#loading > .btn.retry', () => {
      this.dislplayFilteredWorkingspaces();
    });
    this.$btnFitLocations.on('click', () => {
      const locations = this.workingspaces.map(workingspace => {
        if (workingspace !== null && workingspace !== void 0 && workingspace.geolocation) return workingspace.geolocation;
      });
      this.map.fitLocations(locations);
    });
    this.$mapContainer.on('click', '.loading#loading > .btn.retry', () => {
      this.initMap();
    });
    this.$itemContainer.on('click', '.item', e => {
      const $el = $(e.currentTarget);

      if ($el) {
        const geolocation = $el.data('geolocation').split(',');
        this.map.get().flyTo({
          center: geolocation,
          essential: true,
          zoom: this.mapZoom
        });
      }
    });
    $(document).on('scroll', e => {
      this.changePostionMobileBtnMap();

      if (this.$workspaceContainer.data('type') !== 'normal') {
        this.changeFiltersPosition();
        this.changeMapPosition();
      }

      if (this.$btnMapView.hasClass('is-active')) {
        this.btnMapviewAnimation.reverse();
        this.mapMobileAnimation.reverse();
        this.$btnMapView.removeClass('is-active');
      }
    });
    $(window).on('resize orientationchange', e => {
      if (this.isMapLoaded) this.map.get().resize();

      if (this.$btnMapView.hasClass('is-active')) {
        this.btnMapviewAnimation.reverse();
        this.mapMobileAnimation.reverse();
        this.$btnMapView.removeClass('is-active');
      }
    });
    this.$btnMapView.on('click', () => {
      if (!this.isMapLoaded) return;

      if (!this.$btnMapView.hasClass('is-active')) {
        this.initBtnMobileMapAnimation();
        this.mapMobileAnimation.play();
      } else {
        this.btnMapviewAnimation.reverse();
        this.mapMobileAnimation.reverse();
        this.$btnMapView.removeClass('is-active');
      }
    });
    this.$btnLoadMore.on('click', () => {
      this.filterItem++;
      const load = Object(_assets_js_modules_frontend_index__WEBPACK_IMPORTED_MODULE_0__["loading"])(this.$itemContainer).start();
      const filter = this.getWorkingspaceFilter;
      filter.offset = this.workingspaces.length;
      this.$btnLoadMore.hide();
      Object(_assets_js_modules_frontend_index__WEBPACK_IMPORTED_MODULE_0__["api"])(this.siteUrl).getWorkingspacesByFilter(filter).then(res => {
        this.$btnLoadMore.show();
        load.end();
        const {
          data: {
            posts,
            pagination
          }
        } = res;

        if (!posts) {
          this.$btnLoadMore.attr('disabled', true);
          return;
        }

        const template = this.workingspacesTemplate(posts);
        $(template).insertBefore(this.$btnLoadMore.parent());
        this.setWorkingspaces(posts, true);
        const locations = this.workingspaces.map(workingspace => {
          return workingspace === null || workingspace === void 0 ? void 0 : workingspace.geolocation;
        });
        this.setMapMarkers(locations);
      }).catch(e => {
        load.displayError();
      });
    });
  }

  changePostionMobileBtnMap() {
    const btnPostionTop = parseInt(getComputedStyle(this.$btnMapView.get()[0]).getPropertyValue('--position-top'));

    if (window.scrollY <= btnPostionTop) {
      this.$btnMapView.css('top', btnPostionTop + 20 - window.scrollY);
    } else {
      this.$btnMapView.css('top', 20);
    }
  }

  changeFiltersPosition() {
    if (window.scrollY >= this.btnFilterPositionTop) {
      if (this.$btnFilter.hasClass('is-fixed')) return;
      this.$btnFilter.addClass('is-fixed shadow');
      this.$filterContainer.addClass('is-fixed shadow');
    } else {
      if (!this.$btnFilter.hasClass('is-fixed')) return;
      this.$btnFilter.removeClass('is-fixed shadow');
      this.filterAnimation.reverse();
      this.$filterContainer.removeClass('is-fixed shadow');
    }
  }

  changeMapPosition() {
    if ($(document).width() <= 575.98) return;

    if (window.scrollY >= this.btnFilterPositionTop) {
      if (this.$mapContainer.hasClass('is-fixed')) return;
      this.$mapContainer.addClass('is-fixed shadow');
      this.$mapSpacer.hide();
      this.map.get().resize();
    } else {
      if (!this.$mapContainer.hasClass('is-fixed')) return;
      this.$mapContainer.removeClass('is-fixed shadow');
      this.$mapSpacer.show();
      this.map.get().resize();
    }
  }

  workingspacesTemplate(data) {
    let template = '';

    if (!data || data.length < 1) {
      return `<p>No items match your criteria.</p>`;
    }

    const locationTemplate = location => {
      return `
                <div class="detail-icontainer location">
                    <i class="fas fa-map-marker-alt text-muted"></i>
                    <a href="#">${location}</a>
                </div>`;
    };

    const priceRangeTemplate = priceRange => {
      return `<div class="detail-icontainer price-range">
                        <span>Price range: </span>
                        <span class="price">$${priceRange.length > 1 ? priceRange.join(' - $') : priceRange[0]}/month</span>
                    </div>`;
    };

    const capacityTemplate = capacityRange => {
      return `<div class="detail-icontainer capacity">
                        <i class="fas fa-user text-muted"></i>
                        <p class="text-muted">Capacity: <span>${capacityRange[0]} - ${capacityRange[1]}</span></p>
                    </div>`;
    };

    data.forEach(val => {
      var _val$location, _val$location2, _val$total_rooms;

      const minimumCapacity = val.capacity_list ? Math.min.apply(Math, val.capacity_list) : null;
      const maximumCapacity = val.capacity_list ? Math.max.apply(Math, val.capacity_list) : null;
      template += `<div class="item workspace card border-top-left border--post border--hover" data-geolocation="${val === null || val === void 0 ? void 0 : (_val$location = val.location) === null || _val$location === void 0 ? void 0 : _val$location.location}">
                            <img class="card-img-top" src="${val.featured_image}" alt="">
                            <div class="card-body">
                                <div class="action-container">
                                    <div class="action-like shadow-sm">
                                        <i class="far fa-heart"></i>
                                    </div>
                                </div>

                                <h5><a href="${val === null || val === void 0 ? void 0 : val.permalink}">${val === null || val === void 0 ? void 0 : val.post_title}</a></h5>
                                
                                ${val !== null && val !== void 0 && (_val$location2 = val.location) !== null && _val$location2 !== void 0 && _val$location2.place_name ? locationTemplate(val.location.place_name) : ''}
                                ${minimumCapacity || maximumCapacity ? capacityTemplate([minimumCapacity, maximumCapacity]) : ''} 
                                <div class="detail-icontainer total-rooms">
                                    <i class="fas fa-chair text-muted"></i>
                                    <p class="text-muted">No. of rooms: <span>${(_val$total_rooms = val === null || val === void 0 ? void 0 : val.total_rooms) !== null && _val$total_rooms !== void 0 ? _val$total_rooms : 0}</span></p>
                                </div>
                                ${val !== null && val !== void 0 && val.price_range ? priceRangeTemplate(val.price_range) : ''}
                            </div>
                        </div>`;
    });
    return template;
  }

  dislplayFilteredWorkingspaces() {
    const filter = this.getWorkingspaceFilter;
    const $activeLocation = this.$filterLocationContainer.find('.action-container > .btn.is-active');

    if (filter.priceRange) {
      const priceRange = filter.price_range.split(',');
      this.$labelFilterContainer.html(`Location: ${$activeLocation.html()}, Price range: $${priceRange.join(' - $')}`);
    }

    this.$itemContainer.find('.item,p').remove();
    const load = Object(_assets_js_modules_frontend_index__WEBPACK_IMPORTED_MODULE_0__["loading"])(this.$itemContainer).start();
    this.$btnLoadMore.hide();
    Object(_assets_js_modules_frontend_index__WEBPACK_IMPORTED_MODULE_0__["api"])(this.siteUrl).getWorkingspacesByFilter(filter).then(res => {
      this.$btnLoadMore.show();
      const {
        data: {
          posts
        }
      } = res;

      if (this.$btnFindAllposts.length > 0) {
        const template = this.workingspacesTemplate(posts);
        $(template).insertBefore(this.$btnFindAllposts);
      } else if (this.$btnLoadMore.length > 0) {
        const template = this.workingspacesTemplate(posts);
        $(template).insertBefore(this.$btnLoadMore.parent());
      } else {
        this.$itemContainer.append(this.workingspacesTemplate(posts));
      }

      this.setWorkingspaces(posts);
      const locations = this.workingspaces.map(workingspace => {
        return workingspace === null || workingspace === void 0 ? void 0 : workingspace.geolocation;
      });
      this.setMapMarkers(locations);
      load.end();
    }).catch(e => {
      console.log(e);
      load.displayError();
    });
  }

  getWorkingspacesInHtml() {
    let workingspaces = [];
    this.$itemContainer.find('.item').each((i, el) => {
      var _$$data$split;

      const property = {
        title: $(el).find('.card-body > h5 > a').html(),
        location: $(el).find('.card-body > .location > a').html(),
        capacity: $(el).find('.card-body > .capacity > p > .capacity').html(),
        totalRooms: $(el).find('.card-body > .total-rooms > p > .total-rooms').html(),
        priceRange: $(el).find('.card-body > .price-range > .price').html(),
        imgSrc: $(el).find('img').attr('src'),
        geolocation: (_$$data$split = $(el).data('geolocation').split(',')) !== null && _$$data$split !== void 0 ? _$$data$split : null
      };
      workingspaces.push(property);
    });
    return workingspaces;
  }

  get getWorkingspaceFilter() {
    const $activeLocation = this.$filterLocationContainer.find('.action-container > .btn.is-active');
    const $activeCategories = this.$filterCategoriesContainer.find('.action-container > .btn.is-active');
    const $activeCapacity = this.$filterCapacityContainer.find('.action-container > .btn.is-active');
    const $priceRangeMin = this.$filterPriceRangeContainer.find('.minmax-values > div > #minimum');
    const $priceRangeMax = this.$filterPriceRangeContainer.find('.minmax-values > div > #maximum');
    const locationID = $activeLocation.map((i, el) => $(el).data('id'))[0];
    const categoryIds = $activeCategories.map((i, el) => $(el).data('id')).get();
    const capacities = $activeCapacity.map((i, el) => $(el).data('capacity')).get();
    const minimumPriceRange = +$priceRangeMin.html();
    const maximumPriceRange = +$priceRangeMax.html();
    const filter = {
      country: locationID,
      room_categories: categoryIds,
      capacities: capacities.length > 0 ? capacities : '1up',
      price_range: minimumPriceRange && maximumPriceRange ? `${minimumPriceRange},${maximumPriceRange}` : null,
      paged: this.filterItem
    };
    return filter;
  }

  setWorkingspaces(workingspaces, isConcat = false) {
    let newWorkingspaces = [];

    if (!workingspaces) {
      this.workingspaces = [];
      return;
    }

    workingspaces.forEach(workingspace => {
      var _workingspace$locatio, _workingspace$locatio2, _workingspace$price_r;

      const minimumCapacity = Math.min.apply(Math, workingspace.capacity_list);
      const maximumCapacity = Math.max.apply(Math, workingspace.capacity_list);
      const property = {
        title: workingspace === null || workingspace === void 0 ? void 0 : workingspace.post_title,
        location: workingspace === null || workingspace === void 0 ? void 0 : (_workingspace$locatio = workingspace.location) === null || _workingspace$locatio === void 0 ? void 0 : _workingspace$locatio.place_name,
        capacity: `${minimumCapacity} - ${maximumCapacity}`,
        totalRooms: workingspace === null || workingspace === void 0 ? void 0 : workingspace.total_rooms,
        imgSrc: workingspace === null || workingspace === void 0 ? void 0 : workingspace.featured_image,
        geolocation: workingspace === null || workingspace === void 0 ? void 0 : (_workingspace$locatio2 = workingspace.location) === null || _workingspace$locatio2 === void 0 ? void 0 : _workingspace$locatio2.location.split(',')
      };
      if (workingspace !== null && workingspace !== void 0 && workingspace.priceRange) property.priceRange = `${(workingspace === null || workingspace === void 0 ? void 0 : (_workingspace$price_r = workingspace.price_range) === null || _workingspace$price_r === void 0 ? void 0 : _workingspace$price_r.length) > 1 ? workingspace.price_range.join(' - $') : workingspace === null || workingspace === void 0 ? void 0 : workingspace.price_range[0]}/month`;
      newWorkingspaces.push(property);
    });
    this.workingspaces = isConcat ? this.workingspaces.concat(newWorkingspaces) : newWorkingspaces;
  }

  isTouchEvent() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (WorkingspacesMaps);

/***/ }),

/***/ "./inc/customroomsmeta/js/modules/Api.js":
/*!***********************************************!*\
  !*** ./inc/customroomsmeta/js/modules/Api.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const api = url => {
  class Api {
    constructor(url) {
      this.endpoint = url;
    }

    getPostsByName(name) {
      const url = `${this.endpoint}?search=${name}`;
      return axios__WEBPACK_IMPORTED_MODULE_0___default()(url);
    }

    getPostsByIds(ids) {
      const url = `${this.endpoint}?ids=${ids}`;
      return axios__WEBPACK_IMPORTED_MODULE_0___default()(url);
    }

    getPostById(id) {
      const url = `${this.endpoint}/${id}`;
      return axios__WEBPACK_IMPORTED_MODULE_0___default()(url);
    }

  }

  return new Api(url);
};

/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./inc/customroomsmeta/js/modules/front-end/CustomRoomsMeta.js":
/*!*********************************************************************!*\
  !*** ./inc/customroomsmeta/js/modules/front-end/CustomRoomsMeta.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api */ "./inc/customroomsmeta/js/modules/Api.js");
/* harmony import */ var _assets_js_modules_frontend_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../assets/js/modules/frontend/index */ "./assets/js/modules/frontend/index.js");



class CustomRoomsMeta {
  constructor() {
    this.$floorplanContainer = $('.floorplan-container#custom-rooms--floorplan');
    if (!this.$floorplanContainer.length) return;
    this.$contentContainer = this.$floorplanContainer.find('.content');
    this.$progressbar = this.$contentContainer.find('.floorplan-progressbar');
    this.$requestFormModal = $('#request-form');
    this.$activeShapes;
    this.$activeItem; // local variable

    this.translationArray = translation_array;
    this.baseEndpointUrl = `${this.translationArray.site_url}/wp-json/wp/v2/workingspaces/${this.$floorplanContainer.data('id')}/rooms`;
    this.floorplanShapes;
    this.floorplanAnimation;
    this.floorplanAnimationDuration = 15;
    this.indexActiveShape = 0;
    this.activeId;
    this.primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
    this.secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
    this.init();
    this.events();
  }

  init() {
    this.floorplanShapes = this.getFloorPlanShapes();
    let ids = [];
    this.floorplanShapes.forEach(el => {
      $(el).addClass('is-active');
      ids.push($(el).data('id'));
    });
    const load = Object(_assets_js_modules_frontend_index__WEBPACK_IMPORTED_MODULE_1__["loading"])(this.$contentContainer).start();
    Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])(this.baseEndpointUrl).getPostsByIds(ids).then(result => {
      const {
        data
      } = result;
      load.end();
      this.$contentContainer.append(this.roomTemplate(data));
      this.displayItemElement();
      this.initAnimation();
    }).catch(() => {
      load.displayError();
    });
  }

  initAnimation() {
    this.$activeShapes = $(this.floorplanShapes[this.indexActiveShape]); // animate shape

    this.activeShapeAnimation = gsap.timeline({
      repeat: -1
    });
    this.activeShapeAnimation.to(this.$activeShapes, {
      fill: this.primaryColor
    }); // animate progressbar

    this.$progressbar.css('height', 0);
    this.progressbarAnimation = gsap.timeline({
      onComplete: () => this.nextItem(),
      paused: true,
      delay: 1
    });
    this.progressbarAnimation.to(this.$progressbar, {
      height: '280px',
      duration: this.floorplanAnimationDuration
    });

    if (this.$activeItem) {
      this.activeItemAnimation = gsap.timeline({});

      if (this.$activeItem.find('a > img').length) {
        if (this.isTouchEvent()) {
          this.activeItemAnimation.from(this.$activeItem.find('a > img'), {
            opacity: 0
          });
        } else {
          this.activeItemAnimation.from(this.$activeItem.find('a > img'), {
            translateX: 100,
            opacity: 0
          });
        }
      }

      if (this.$activeItem.find('.detail').children().length) this.activeItemAnimation.from(this.$activeItem.find('.detail').children(), {
        opacity: 0,
        translateY: 20,
        ease: 'back',
        stagger: {
          amount: 1,
          ease: 'stepped'
        }
      });
      if (this.$activeItem.find('a.btn.visit-request').length) this.activeItemAnimation.from(this.$activeItem.find('a.btn.visit-request'), {
        opacity: 0
      });

      if (!this.isTouchEvent()) {
        this.progressbarAnimation.play();
      }
    }
  }

  events() {
    this.$contentContainer.on('mouseover', '.item.is-display', () => {
      if (!this.isTouchEvent()) this.progressbarAnimation.pause();
    });
    this.$contentContainer.on('mouseout', '.item.is-display', () => {
      if (!this.isTouchEvent()) this.progressbarAnimation.play();
    });
    this.$floorplanContainer.on('mouseover', 'svg > .is-active', () => {
      if (!this.isTouchEvent()) this.progressbarAnimation.pause();
    });
    this.$floorplanContainer.on('mouseout', 'svg > .is-active', () => {
      if (!this.isTouchEvent()) this.progressbarAnimation.play();
    });
    $(this.floorplanShapes).on('click', el => {
      const id = $(el.target).data('id');
      if (id === this.activeId) return;
      this.activeId = id;
      const activeId = this.floorplanShapes.findIndex(el => $(el).data('id') === id);
      this.gotoItem(activeId);
    });
    this.$contentContainer.on('click', '.item > a', e => {
      e.preventDefault();
      const $el = $(e.currentTarget);
      const target = $el.data('toggle');
      this.$requestFormModal.show();
    });
    this.$requestFormModal.find('.request-form#request-form .form-control.date-picker.hasDatepicker').on('click', e => {
      const $el = $(e.currentTarget);
      if (!$el.length) return;
      const positionTop = $el.parent().position().top;
      $('#ui-datepicker-div').css({
        zIndex: 9999999,
        top: positionTop - 40
      });
    });
  }

  getFloorPlanShapes() {
    const shapes = ['rect', 'polygon', 'polyline'];
    let floorplanShapes = [];
    this.$floorplanContainer.find('svg').children().each(function () {
      if ($(this).data('id') > 0) {
        floorplanShapes.push(this);
      }
    });
    return floorplanShapes;
  }

  nextItem() {
    if (this.isTouchEvent()) return;
    this.activeShapeAnimation.kill();
    $(this.floorplanShapes[this.indexActiveShape]).css('fill', this.secondaryColor);
    this.indexActiveShape = this.indexActiveShape < this.floorplanShapes.length - 1 ? ++this.indexActiveShape : 0;
    this.displayItemElement();
    this.initAnimation();
  }

  gotoItem(num) {
    this.activeShapeAnimation.kill();
    this.progressbarAnimation.kill();
    $(this.floorplanShapes[this.indexActiveShape]).css('fill', this.secondaryColor);
    this.$progressbar.css('height', 0);
    this.indexActiveShape = num;
    this.displayItemElement();
    this.initAnimation();
  }

  displayItemElement() {
    this.$contentContainer.find('.item').removeClass('is-display');
    this.$contentContainer.find('.item').each((i, el) => {
      if ($(this.floorplanShapes[this.indexActiveShape]).data('id') === $(el).data('id')) {
        this.$activeItem = $(el).addClass('is-display');
        return;
      }
    });
  }

  roomTemplate(data) {
    let template = '';

    const imageTemplate = src => {
      return `<img src="${src}"/>`;
    };

    data.forEach(value => {
      var _value$capacity, _value$categories;

      template += `<div class="item" data-id="${value.ID}">
                            <a href="#">
                                ${value !== null && value !== void 0 && value.featured_image ? imageTemplate(value.featured_image) : ''}
                            </a>
                            <div class="detail">
                                <h2 class="name"><a href="#">${value === null || value === void 0 ? void 0 : value.post_title}</a></h2>
                                <div class="price">Price: <span>$${value === null || value === void 0 ? void 0 : value.room_rate}/month</span></div>
                                <div class="capacity">Capacity: <span>${(_value$capacity = value === null || value === void 0 ? void 0 : value.capacity) !== null && _value$capacity !== void 0 ? _value$capacity : 0}</span></div>
                                ${(value === null || value === void 0 ? void 0 : (_value$categories = value.categories) === null || _value$categories === void 0 ? void 0 : _value$categories.length) > 0 ? this.categoriesTemplate(value.categories) : ''}
                                <p>${value !== null && value !== void 0 && value.post_excerpt ? value === null || value === void 0 ? void 0 : value.post_excerpt : value !== null && value !== void 0 && value.post_content ? value === null || value === void 0 ? void 0 : value.post_content_trim : ''}</p>
                            </div>
                            <a class="btn visit-request" href="" data-toggle="request-form" data-target="#request-form">Request a visit</a>
                        </div>`;
    });
    return template;
  }

  categoriesTemplate(categories) {
    let categoriesTemplate = '<small>Category: ';
    categories.forEach((category, index) => {
      if (index + 1 !== categories.length) {
        categoriesTemplate += `<a href="#">${category.name}, </a>`;
      } else {
        categoriesTemplate += `<a href="#">${category.name}</a>`;
      }
    });
    return categoriesTemplate + '</small>';
  }

  isTouchEvent() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CustomRoomsMeta);

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./node_modules/axios/lib/helpers/isAxiosError.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "./node_modules/intl-tel-input/build/css/intlTelInput.css":
/*!****************************************************************!*\
  !*** ./node_modules/intl-tel-input/build/css/intlTelInput.css ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/intl-tel-input/build/js/intlTelInput.js":
/*!**************************************************************!*\
  !*** ./node_modules/intl-tel-input/build/js/intlTelInput.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * International Telephone Input v17.0.13
 * https://github.com/jackocnr/intl-tel-input.git
 * Licensed under the MIT license
 */

// wrap in UMD
(function(factory) {
    if ( true && module.exports) module.exports = factory(); else window.intlTelInput = factory();
})(function(undefined) {
    "use strict";
    return function() {
        // Array of country objects for the flag dropdown.
        // Here is the criteria for the plugin to support a given country/territory
        // - It has an iso2 code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
        // - It has it's own country calling code (it is not a sub-region of another country): https://en.wikipedia.org/wiki/List_of_country_calling_codes
        // - It has a flag in the region-flags project: https://github.com/behdad/region-flags/tree/gh-pages/png
        // - It is supported by libphonenumber (it must be listed on this page): https://github.com/googlei18n/libphonenumber/blob/master/resources/ShortNumberMetadata.xml
        // Each country array has the following information:
        // [
        //    Country name,
        //    iso2 code,
        //    International dial code,
        //    Order (if >1 country with same dial code),
        //    Area codes
        // ]
        var allCountries = [ [ "Afghanistan (‫افغانستان‬‎)", "af", "93" ], [ "Albania (Shqipëri)", "al", "355" ], [ "Algeria (‫الجزائر‬‎)", "dz", "213" ], [ "American Samoa", "as", "1", 5, [ "684" ] ], [ "Andorra", "ad", "376" ], [ "Angola", "ao", "244" ], [ "Anguilla", "ai", "1", 6, [ "264" ] ], [ "Antigua and Barbuda", "ag", "1", 7, [ "268" ] ], [ "Argentina", "ar", "54" ], [ "Armenia (Հայաստան)", "am", "374" ], [ "Aruba", "aw", "297" ], [ "Ascension Island", "ac", "247" ], [ "Australia", "au", "61", 0 ], [ "Austria (Österreich)", "at", "43" ], [ "Azerbaijan (Azərbaycan)", "az", "994" ], [ "Bahamas", "bs", "1", 8, [ "242" ] ], [ "Bahrain (‫البحرين‬‎)", "bh", "973" ], [ "Bangladesh (বাংলাদেশ)", "bd", "880" ], [ "Barbados", "bb", "1", 9, [ "246" ] ], [ "Belarus (Беларусь)", "by", "375" ], [ "Belgium (België)", "be", "32" ], [ "Belize", "bz", "501" ], [ "Benin (Bénin)", "bj", "229" ], [ "Bermuda", "bm", "1", 10, [ "441" ] ], [ "Bhutan (འབྲུག)", "bt", "975" ], [ "Bolivia", "bo", "591" ], [ "Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387" ], [ "Botswana", "bw", "267" ], [ "Brazil (Brasil)", "br", "55" ], [ "British Indian Ocean Territory", "io", "246" ], [ "British Virgin Islands", "vg", "1", 11, [ "284" ] ], [ "Brunei", "bn", "673" ], [ "Bulgaria (България)", "bg", "359" ], [ "Burkina Faso", "bf", "226" ], [ "Burundi (Uburundi)", "bi", "257" ], [ "Cambodia (កម្ពុជា)", "kh", "855" ], [ "Cameroon (Cameroun)", "cm", "237" ], [ "Canada", "ca", "1", 1, [ "204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905" ] ], [ "Cape Verde (Kabu Verdi)", "cv", "238" ], [ "Caribbean Netherlands", "bq", "599", 1, [ "3", "4", "7" ] ], [ "Cayman Islands", "ky", "1", 12, [ "345" ] ], [ "Central African Republic (République centrafricaine)", "cf", "236" ], [ "Chad (Tchad)", "td", "235" ], [ "Chile", "cl", "56" ], [ "China (中国)", "cn", "86" ], [ "Christmas Island", "cx", "61", 2, [ "89164" ] ], [ "Cocos (Keeling) Islands", "cc", "61", 1, [ "89162" ] ], [ "Colombia", "co", "57" ], [ "Comoros (‫جزر القمر‬‎)", "km", "269" ], [ "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243" ], [ "Congo (Republic) (Congo-Brazzaville)", "cg", "242" ], [ "Cook Islands", "ck", "682" ], [ "Costa Rica", "cr", "506" ], [ "Côte d’Ivoire", "ci", "225" ], [ "Croatia (Hrvatska)", "hr", "385" ], [ "Cuba", "cu", "53" ], [ "Curaçao", "cw", "599", 0 ], [ "Cyprus (Κύπρος)", "cy", "357" ], [ "Czech Republic (Česká republika)", "cz", "420" ], [ "Denmark (Danmark)", "dk", "45" ], [ "Djibouti", "dj", "253" ], [ "Dominica", "dm", "1", 13, [ "767" ] ], [ "Dominican Republic (República Dominicana)", "do", "1", 2, [ "809", "829", "849" ] ], [ "Ecuador", "ec", "593" ], [ "Egypt (‫مصر‬‎)", "eg", "20" ], [ "El Salvador", "sv", "503" ], [ "Equatorial Guinea (Guinea Ecuatorial)", "gq", "240" ], [ "Eritrea", "er", "291" ], [ "Estonia (Eesti)", "ee", "372" ], [ "Eswatini", "sz", "268" ], [ "Ethiopia", "et", "251" ], [ "Falkland Islands (Islas Malvinas)", "fk", "500" ], [ "Faroe Islands (Føroyar)", "fo", "298" ], [ "Fiji", "fj", "679" ], [ "Finland (Suomi)", "fi", "358", 0 ], [ "France", "fr", "33" ], [ "French Guiana (Guyane française)", "gf", "594" ], [ "French Polynesia (Polynésie française)", "pf", "689" ], [ "Gabon", "ga", "241" ], [ "Gambia", "gm", "220" ], [ "Georgia (საქართველო)", "ge", "995" ], [ "Germany (Deutschland)", "de", "49" ], [ "Ghana (Gaana)", "gh", "233" ], [ "Gibraltar", "gi", "350" ], [ "Greece (Ελλάδα)", "gr", "30" ], [ "Greenland (Kalaallit Nunaat)", "gl", "299" ], [ "Grenada", "gd", "1", 14, [ "473" ] ], [ "Guadeloupe", "gp", "590", 0 ], [ "Guam", "gu", "1", 15, [ "671" ] ], [ "Guatemala", "gt", "502" ], [ "Guernsey", "gg", "44", 1, [ "1481", "7781", "7839", "7911" ] ], [ "Guinea (Guinée)", "gn", "224" ], [ "Guinea-Bissau (Guiné Bissau)", "gw", "245" ], [ "Guyana", "gy", "592" ], [ "Haiti", "ht", "509" ], [ "Honduras", "hn", "504" ], [ "Hong Kong (香港)", "hk", "852" ], [ "Hungary (Magyarország)", "hu", "36" ], [ "Iceland (Ísland)", "is", "354" ], [ "India (भारत)", "in", "91" ], [ "Indonesia", "id", "62" ], [ "Iran (‫ایران‬‎)", "ir", "98" ], [ "Iraq (‫العراق‬‎)", "iq", "964" ], [ "Ireland", "ie", "353" ], [ "Isle of Man", "im", "44", 2, [ "1624", "74576", "7524", "7924", "7624" ] ], [ "Israel (‫ישראל‬‎)", "il", "972" ], [ "Italy (Italia)", "it", "39", 0 ], [ "Jamaica", "jm", "1", 4, [ "876", "658" ] ], [ "Japan (日本)", "jp", "81" ], [ "Jersey", "je", "44", 3, [ "1534", "7509", "7700", "7797", "7829", "7937" ] ], [ "Jordan (‫الأردن‬‎)", "jo", "962" ], [ "Kazakhstan (Казахстан)", "kz", "7", 1, [ "33", "7" ] ], [ "Kenya", "ke", "254" ], [ "Kiribati", "ki", "686" ], [ "Kosovo", "xk", "383" ], [ "Kuwait (‫الكويت‬‎)", "kw", "965" ], [ "Kyrgyzstan (Кыргызстан)", "kg", "996" ], [ "Laos (ລາວ)", "la", "856" ], [ "Latvia (Latvija)", "lv", "371" ], [ "Lebanon (‫لبنان‬‎)", "lb", "961" ], [ "Lesotho", "ls", "266" ], [ "Liberia", "lr", "231" ], [ "Libya (‫ليبيا‬‎)", "ly", "218" ], [ "Liechtenstein", "li", "423" ], [ "Lithuania (Lietuva)", "lt", "370" ], [ "Luxembourg", "lu", "352" ], [ "Macau (澳門)", "mo", "853" ], [ "Macedonia (FYROM) (Македонија)", "mk", "389" ], [ "Madagascar (Madagasikara)", "mg", "261" ], [ "Malawi", "mw", "265" ], [ "Malaysia", "my", "60" ], [ "Maldives", "mv", "960" ], [ "Mali", "ml", "223" ], [ "Malta", "mt", "356" ], [ "Marshall Islands", "mh", "692" ], [ "Martinique", "mq", "596" ], [ "Mauritania (‫موريتانيا‬‎)", "mr", "222" ], [ "Mauritius (Moris)", "mu", "230" ], [ "Mayotte", "yt", "262", 1, [ "269", "639" ] ], [ "Mexico (México)", "mx", "52" ], [ "Micronesia", "fm", "691" ], [ "Moldova (Republica Moldova)", "md", "373" ], [ "Monaco", "mc", "377" ], [ "Mongolia (Монгол)", "mn", "976" ], [ "Montenegro (Crna Gora)", "me", "382" ], [ "Montserrat", "ms", "1", 16, [ "664" ] ], [ "Morocco (‫المغرب‬‎)", "ma", "212", 0 ], [ "Mozambique (Moçambique)", "mz", "258" ], [ "Myanmar (Burma) (မြန်မာ)", "mm", "95" ], [ "Namibia (Namibië)", "na", "264" ], [ "Nauru", "nr", "674" ], [ "Nepal (नेपाल)", "np", "977" ], [ "Netherlands (Nederland)", "nl", "31" ], [ "New Caledonia (Nouvelle-Calédonie)", "nc", "687" ], [ "New Zealand", "nz", "64" ], [ "Nicaragua", "ni", "505" ], [ "Niger (Nijar)", "ne", "227" ], [ "Nigeria", "ng", "234" ], [ "Niue", "nu", "683" ], [ "Norfolk Island", "nf", "672" ], [ "North Korea (조선 민주주의 인민 공화국)", "kp", "850" ], [ "Northern Mariana Islands", "mp", "1", 17, [ "670" ] ], [ "Norway (Norge)", "no", "47", 0 ], [ "Oman (‫عُمان‬‎)", "om", "968" ], [ "Pakistan (‫پاکستان‬‎)", "pk", "92" ], [ "Palau", "pw", "680" ], [ "Palestine (‫فلسطين‬‎)", "ps", "970" ], [ "Panama (Panamá)", "pa", "507" ], [ "Papua New Guinea", "pg", "675" ], [ "Paraguay", "py", "595" ], [ "Peru (Perú)", "pe", "51" ], [ "Philippines", "ph", "63" ], [ "Poland (Polska)", "pl", "48" ], [ "Portugal", "pt", "351" ], [ "Puerto Rico", "pr", "1", 3, [ "787", "939" ] ], [ "Qatar (‫قطر‬‎)", "qa", "974" ], [ "Réunion (La Réunion)", "re", "262", 0 ], [ "Romania (România)", "ro", "40" ], [ "Russia (Россия)", "ru", "7", 0 ], [ "Rwanda", "rw", "250" ], [ "Saint Barthélemy", "bl", "590", 1 ], [ "Saint Helena", "sh", "290" ], [ "Saint Kitts and Nevis", "kn", "1", 18, [ "869" ] ], [ "Saint Lucia", "lc", "1", 19, [ "758" ] ], [ "Saint Martin (Saint-Martin (partie française))", "mf", "590", 2 ], [ "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508" ], [ "Saint Vincent and the Grenadines", "vc", "1", 20, [ "784" ] ], [ "Samoa", "ws", "685" ], [ "San Marino", "sm", "378" ], [ "São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239" ], [ "Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966" ], [ "Senegal (Sénégal)", "sn", "221" ], [ "Serbia (Србија)", "rs", "381" ], [ "Seychelles", "sc", "248" ], [ "Sierra Leone", "sl", "232" ], [ "Singapore", "sg", "65" ], [ "Sint Maarten", "sx", "1", 21, [ "721" ] ], [ "Slovakia (Slovensko)", "sk", "421" ], [ "Slovenia (Slovenija)", "si", "386" ], [ "Solomon Islands", "sb", "677" ], [ "Somalia (Soomaaliya)", "so", "252" ], [ "South Africa", "za", "27" ], [ "South Korea (대한민국)", "kr", "82" ], [ "South Sudan (‫جنوب السودان‬‎)", "ss", "211" ], [ "Spain (España)", "es", "34" ], [ "Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94" ], [ "Sudan (‫السودان‬‎)", "sd", "249" ], [ "Suriname", "sr", "597" ], [ "Svalbard and Jan Mayen", "sj", "47", 1, [ "79" ] ], [ "Sweden (Sverige)", "se", "46" ], [ "Switzerland (Schweiz)", "ch", "41" ], [ "Syria (‫سوريا‬‎)", "sy", "963" ], [ "Taiwan (台灣)", "tw", "886" ], [ "Tajikistan", "tj", "992" ], [ "Tanzania", "tz", "255" ], [ "Thailand (ไทย)", "th", "66" ], [ "Timor-Leste", "tl", "670" ], [ "Togo", "tg", "228" ], [ "Tokelau", "tk", "690" ], [ "Tonga", "to", "676" ], [ "Trinidad and Tobago", "tt", "1", 22, [ "868" ] ], [ "Tunisia (‫تونس‬‎)", "tn", "216" ], [ "Turkey (Türkiye)", "tr", "90" ], [ "Turkmenistan", "tm", "993" ], [ "Turks and Caicos Islands", "tc", "1", 23, [ "649" ] ], [ "Tuvalu", "tv", "688" ], [ "U.S. Virgin Islands", "vi", "1", 24, [ "340" ] ], [ "Uganda", "ug", "256" ], [ "Ukraine (Україна)", "ua", "380" ], [ "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971" ], [ "United Kingdom", "gb", "44", 0 ], [ "United States", "us", "1", 0 ], [ "Uruguay", "uy", "598" ], [ "Uzbekistan (Oʻzbekiston)", "uz", "998" ], [ "Vanuatu", "vu", "678" ], [ "Vatican City (Città del Vaticano)", "va", "39", 1, [ "06698" ] ], [ "Venezuela", "ve", "58" ], [ "Vietnam (Việt Nam)", "vn", "84" ], [ "Wallis and Futuna (Wallis-et-Futuna)", "wf", "681" ], [ "Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1, [ "5288", "5289" ] ], [ "Yemen (‫اليمن‬‎)", "ye", "967" ], [ "Zambia", "zm", "260" ], [ "Zimbabwe", "zw", "263" ], [ "Åland Islands", "ax", "358", 1, [ "18" ] ] ];
        // loop over all of the countries above, restructuring the data to be objects with named keys
        for (var i = 0; i < allCountries.length; i++) {
            var c = allCountries[i];
            allCountries[i] = {
                name: c[0],
                iso2: c[1],
                dialCode: c[2],
                priority: c[3] || 0,
                areaCodes: c[4] || null
            };
        }
        "use strict";
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
        }
        var intlTelInputGlobals = {
            getInstance: function getInstance(input) {
                var id = input.getAttribute("data-intl-tel-input-id");
                return window.intlTelInputGlobals.instances[id];
            },
            instances: {},
            // using a global like this allows us to mock it in the tests
            documentReady: function documentReady() {
                return document.readyState === "complete";
            }
        };
        if (typeof window === "object") window.intlTelInputGlobals = intlTelInputGlobals;
        // these vars persist through all instances of the plugin
        var id = 0;
        var defaults = {
            // whether or not to allow the dropdown
            allowDropdown: true,
            // if there is just a dial code in the input: remove it on blur
            autoHideDialCode: true,
            // add a placeholder in the input with an example number for the selected country
            autoPlaceholder: "polite",
            // modify the parentClass
            customContainer: "",
            // modify the auto placeholder
            customPlaceholder: null,
            // append menu to specified element
            dropdownContainer: null,
            // don't display these countries
            excludeCountries: [],
            // format the input value during initialisation and on setNumber
            formatOnDisplay: true,
            // geoIp lookup function
            geoIpLookup: null,
            // inject a hidden input with this name, and on submit, populate it with the result of getNumber
            hiddenInput: "",
            // initial country
            initialCountry: "",
            // localized country names e.g. { 'de': 'Deutschland' }
            localizedCountries: null,
            // don't insert international dial codes
            nationalMode: true,
            // display only these countries
            onlyCountries: [],
            // number type to use for placeholders
            placeholderNumberType: "MOBILE",
            // the countries at the top of the list. defaults to united states and united kingdom
            preferredCountries: [ "us", "gb" ],
            // display the country dial code next to the selected flag so it's not part of the typed number
            separateDialCode: false,
            // specify the path to the libphonenumber script to enable validation/formatting
            utilsScript: ""
        };
        // https://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes#Non-geographic_area_codes
        var regionlessNanpNumbers = [ "800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889" ];
        // utility function to iterate over an object. can't use Object.entries or native forEach because
        // of IE11
        var forEachProp = function forEachProp(obj, callback) {
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length; i++) {
                callback(keys[i], obj[keys[i]]);
            }
        };
        // run a method on each instance of the plugin
        var forEachInstance = function forEachInstance(method) {
            forEachProp(window.intlTelInputGlobals.instances, function(key) {
                window.intlTelInputGlobals.instances[key][method]();
            });
        };
        // this is our plugin class that we will create an instance of
        // eslint-disable-next-line no-unused-vars
        var Iti = /*#__PURE__*/
        function() {
            function Iti(input, options) {
                var _this = this;
                _classCallCheck(this, Iti);
                this.id = id++;
                this.telInput = input;
                this.activeItem = null;
                this.highlightedItem = null;
                // process specified options / defaults
                // alternative to Object.assign, which isn't supported by IE11
                var customOptions = options || {};
                this.options = {};
                forEachProp(defaults, function(key, value) {
                    _this.options[key] = customOptions.hasOwnProperty(key) ? customOptions[key] : value;
                });
                this.hadInitialPlaceholder = Boolean(input.getAttribute("placeholder"));
            }
            _createClass(Iti, [ {
                key: "_init",
                value: function _init() {
                    var _this2 = this;
                    // if in nationalMode, disable options relating to dial codes
                    if (this.options.nationalMode) this.options.autoHideDialCode = false;
                    // if separateDialCode then doesn't make sense to A) insert dial code into input
                    // (autoHideDialCode), and B) display national numbers (because we're displaying the country
                    // dial code next to them)
                    if (this.options.separateDialCode) {
                        this.options.autoHideDialCode = this.options.nationalMode = false;
                    }
                    // we cannot just test screen size as some smartphones/website meta tags will report desktop
                    // resolutions
                    // Note: for some reason jasmine breaks if you put this in the main Plugin function with the
                    // rest of these declarations
                    // Note: to target Android Mobiles (and not Tablets), we must find 'Android' and 'Mobile'
                    this.isMobile = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                    if (this.isMobile) {
                        // trigger the mobile dropdown css
                        document.body.classList.add("iti-mobile");
                        // on mobile, we want a full screen dropdown, so we must append it to the body
                        if (!this.options.dropdownContainer) this.options.dropdownContainer = document.body;
                    }
                    // these promises get resolved when their individual requests complete
                    // this way the dev can do something like iti.promise.then(...) to know when all requests are
                    // complete
                    if (typeof Promise !== "undefined") {
                        var autoCountryPromise = new Promise(function(resolve, reject) {
                            _this2.resolveAutoCountryPromise = resolve;
                            _this2.rejectAutoCountryPromise = reject;
                        });
                        var utilsScriptPromise = new Promise(function(resolve, reject) {
                            _this2.resolveUtilsScriptPromise = resolve;
                            _this2.rejectUtilsScriptPromise = reject;
                        });
                        this.promise = Promise.all([ autoCountryPromise, utilsScriptPromise ]);
                    } else {
                        // prevent errors when Promise doesn't exist
                        this.resolveAutoCountryPromise = this.rejectAutoCountryPromise = function() {};
                        this.resolveUtilsScriptPromise = this.rejectUtilsScriptPromise = function() {};
                    }
                    // in various situations there could be no country selected initially, but we need to be able
                    // to assume this variable exists
                    this.selectedCountryData = {};
                    // process all the data: onlyCountries, excludeCountries, preferredCountries etc
                    this._processCountryData();
                    // generate the markup
                    this._generateMarkup();
                    // set the initial state of the input value and the selected flag
                    this._setInitialState();
                    // start all of the event listeners: autoHideDialCode, input keydown, selectedFlag click
                    this._initListeners();
                    // utils script, and auto country
                    this._initRequests();
                }
            }, {
                key: "_processCountryData",
                value: function _processCountryData() {
                    // process onlyCountries or excludeCountries array if present
                    this._processAllCountries();
                    // process the countryCodes map
                    this._processCountryCodes();
                    // process the preferredCountries
                    this._processPreferredCountries();
                    // translate countries according to localizedCountries option
                    if (this.options.localizedCountries) this._translateCountriesByLocale();
                    // sort countries by name
                    if (this.options.onlyCountries.length || this.options.localizedCountries) {
                        this.countries.sort(this._countryNameSort);
                    }
                }
            }, {
                key: "_addCountryCode",
                value: function _addCountryCode(iso2, countryCode, priority) {
                    if (countryCode.length > this.countryCodeMaxLen) {
                        this.countryCodeMaxLen = countryCode.length;
                    }
                    if (!this.countryCodes.hasOwnProperty(countryCode)) {
                        this.countryCodes[countryCode] = [];
                    }
                    // bail if we already have this country for this countryCode
                    for (var i = 0; i < this.countryCodes[countryCode].length; i++) {
                        if (this.countryCodes[countryCode][i] === iso2) return;
                    }
                    // check for undefined as 0 is falsy
                    var index = priority !== undefined ? priority : this.countryCodes[countryCode].length;
                    this.countryCodes[countryCode][index] = iso2;
                }
            }, {
                key: "_processAllCountries",
                value: function _processAllCountries() {
                    if (this.options.onlyCountries.length) {
                        var lowerCaseOnlyCountries = this.options.onlyCountries.map(function(country) {
                            return country.toLowerCase();
                        });
                        this.countries = allCountries.filter(function(country) {
                            return lowerCaseOnlyCountries.indexOf(country.iso2) > -1;
                        });
                    } else if (this.options.excludeCountries.length) {
                        var lowerCaseExcludeCountries = this.options.excludeCountries.map(function(country) {
                            return country.toLowerCase();
                        });
                        this.countries = allCountries.filter(function(country) {
                            return lowerCaseExcludeCountries.indexOf(country.iso2) === -1;
                        });
                    } else {
                        this.countries = allCountries;
                    }
                }
            }, {
                key: "_translateCountriesByLocale",
                value: function _translateCountriesByLocale() {
                    for (var i = 0; i < this.countries.length; i++) {
                        var iso = this.countries[i].iso2.toLowerCase();
                        if (this.options.localizedCountries.hasOwnProperty(iso)) {
                            this.countries[i].name = this.options.localizedCountries[iso];
                        }
                    }
                }
            }, {
                key: "_countryNameSort",
                value: function _countryNameSort(a, b) {
                    return a.name.localeCompare(b.name);
                }
            }, {
                key: "_processCountryCodes",
                value: function _processCountryCodes() {
                    this.countryCodeMaxLen = 0;
                    // here we store just dial codes
                    this.dialCodes = {};
                    // here we store "country codes" (both dial codes and their area codes)
                    this.countryCodes = {};
                    // first: add dial codes
                    for (var i = 0; i < this.countries.length; i++) {
                        var c = this.countries[i];
                        if (!this.dialCodes[c.dialCode]) this.dialCodes[c.dialCode] = true;
                        this._addCountryCode(c.iso2, c.dialCode, c.priority);
                    }
                    // next: add area codes
                    // this is a second loop over countries, to make sure we have all of the "root" countries
                    // already in the map, so that we can access them, as each time we add an area code substring
                    // to the map, we also need to include the "root" country's code, as that also matches
                    for (var _i = 0; _i < this.countries.length; _i++) {
                        var _c = this.countries[_i];
                        // area codes
                        if (_c.areaCodes) {
                            var rootCountryCode = this.countryCodes[_c.dialCode][0];
                            // for each area code
                            for (var j = 0; j < _c.areaCodes.length; j++) {
                                var areaCode = _c.areaCodes[j];
                                // for each digit in the area code to add all partial matches as well
                                for (var k = 1; k < areaCode.length; k++) {
                                    var partialDialCode = _c.dialCode + areaCode.substr(0, k);
                                    // start with the root country, as that also matches this dial code
                                    this._addCountryCode(rootCountryCode, partialDialCode);
                                    this._addCountryCode(_c.iso2, partialDialCode);
                                }
                                // add the full area code
                                this._addCountryCode(_c.iso2, _c.dialCode + areaCode);
                            }
                        }
                    }
                }
            }, {
                key: "_processPreferredCountries",
                value: function _processPreferredCountries() {
                    this.preferredCountries = [];
                    for (var i = 0; i < this.options.preferredCountries.length; i++) {
                        var countryCode = this.options.preferredCountries[i].toLowerCase();
                        var countryData = this._getCountryData(countryCode, false, true);
                        if (countryData) this.preferredCountries.push(countryData);
                    }
                }
            }, {
                key: "_createEl",
                value: function _createEl(name, attrs, container) {
                    var el = document.createElement(name);
                    if (attrs) forEachProp(attrs, function(key, value) {
                        return el.setAttribute(key, value);
                    });
                    if (container) container.appendChild(el);
                    return el;
                }
            }, {
                key: "_generateMarkup",
                value: function _generateMarkup() {
                    // if autocomplete does not exist on the element and its form, then
                    // prevent autocomplete as there's no safe, cross-browser event we can react to, so it can
                    // easily put the plugin in an inconsistent state e.g. the wrong flag selected for the
                    // autocompleted number, which on submit could mean wrong number is saved (esp in nationalMode)
                    if (!this.telInput.hasAttribute("autocomplete") && !(this.telInput.form && this.telInput.form.hasAttribute("autocomplete"))) {
                        this.telInput.setAttribute("autocomplete", "off");
                    }
                    // containers (mostly for positioning)
                    var parentClass = "iti";
                    if (this.options.allowDropdown) parentClass += " iti--allow-dropdown";
                    if (this.options.separateDialCode) parentClass += " iti--separate-dial-code";
                    if (this.options.customContainer) {
                        parentClass += " ";
                        parentClass += this.options.customContainer;
                    }
                    var wrapper = this._createEl("div", {
                        "class": parentClass
                    });
                    this.telInput.parentNode.insertBefore(wrapper, this.telInput);
                    this.flagsContainer = this._createEl("div", {
                        "class": "iti__flag-container"
                    }, wrapper);
                    wrapper.appendChild(this.telInput);
                    // selected flag (displayed to left of input)
                    this.selectedFlag = this._createEl("div", {
                        "class": "iti__selected-flag",
                        role: "combobox",
                        "aria-controls": "iti-".concat(this.id, "__country-listbox"),
                        "aria-owns": "iti-".concat(this.id, "__country-listbox"),
                        "aria-expanded": "false"
                    }, this.flagsContainer);
                    this.selectedFlagInner = this._createEl("div", {
                        "class": "iti__flag"
                    }, this.selectedFlag);
                    if (this.options.separateDialCode) {
                        this.selectedDialCode = this._createEl("div", {
                            "class": "iti__selected-dial-code"
                        }, this.selectedFlag);
                    }
                    if (this.options.allowDropdown) {
                        // make element focusable and tab navigable
                        this.selectedFlag.setAttribute("tabindex", "0");
                        this.dropdownArrow = this._createEl("div", {
                            "class": "iti__arrow"
                        }, this.selectedFlag);
                        // country dropdown: preferred countries, then divider, then all countries
                        this.countryList = this._createEl("ul", {
                            "class": "iti__country-list iti__hide",
                            id: "iti-".concat(this.id, "__country-listbox"),
                            role: "listbox",
                            "aria-label": "List of countries"
                        });
                        if (this.preferredCountries.length) {
                            this._appendListItems(this.preferredCountries, "iti__preferred", true);
                            this._createEl("li", {
                                "class": "iti__divider",
                                role: "separator",
                                "aria-disabled": "true"
                            }, this.countryList);
                        }
                        this._appendListItems(this.countries, "iti__standard");
                        // create dropdownContainer markup
                        if (this.options.dropdownContainer) {
                            this.dropdown = this._createEl("div", {
                                "class": "iti iti--container"
                            });
                            this.dropdown.appendChild(this.countryList);
                        } else {
                            this.flagsContainer.appendChild(this.countryList);
                        }
                    }
                    if (this.options.hiddenInput) {
                        var hiddenInputName = this.options.hiddenInput;
                        var name = this.telInput.getAttribute("name");
                        if (name) {
                            var i = name.lastIndexOf("[");
                            // if input name contains square brackets, then give the hidden input the same name,
                            // replacing the contents of the last set of brackets with the given hiddenInput name
                            if (i !== -1) hiddenInputName = "".concat(name.substr(0, i), "[").concat(hiddenInputName, "]");
                        }
                        this.hiddenInput = this._createEl("input", {
                            type: "hidden",
                            name: hiddenInputName
                        });
                        wrapper.appendChild(this.hiddenInput);
                    }
                }
            }, {
                key: "_appendListItems",
                value: function _appendListItems(countries, className, preferred) {
                    // we create so many DOM elements, it is faster to build a temp string
                    // and then add everything to the DOM in one go at the end
                    var tmp = "";
                    // for each country
                    for (var i = 0; i < countries.length; i++) {
                        var c = countries[i];
                        var idSuffix = preferred ? "-preferred" : "";
                        // open the list item
                        tmp += "<li class='iti__country ".concat(className, "' tabIndex='-1' id='iti-").concat(this.id, "__item-").concat(c.iso2).concat(idSuffix, "' role='option' data-dial-code='").concat(c.dialCode, "' data-country-code='").concat(c.iso2, "' aria-selected='false'>");
                        // add the flag
                        tmp += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(c.iso2, "'></div></div>");
                        // and the country name and dial code
                        tmp += "<span class='iti__country-name'>".concat(c.name, "</span>");
                        tmp += "<span class='iti__dial-code'>+".concat(c.dialCode, "</span>");
                        // close the list item
                        tmp += "</li>";
                    }
                    this.countryList.insertAdjacentHTML("beforeend", tmp);
                }
            }, {
                key: "_setInitialState",
                value: function _setInitialState() {
                    // fix firefox bug: when first load page (with input with value set to number with intl dial
                    // code) and initialising plugin removes the dial code from the input, then refresh page,
                    // and we try to init plugin again but this time on number without dial code so get grey flag
                    var attributeValue = this.telInput.getAttribute("value");
                    var inputValue = this.telInput.value;
                    var useAttribute = attributeValue && attributeValue.charAt(0) === "+" && (!inputValue || inputValue.charAt(0) !== "+");
                    var val = useAttribute ? attributeValue : inputValue;
                    var dialCode = this._getDialCode(val);
                    var isRegionlessNanp = this._isRegionlessNanp(val);
                    var _this$options = this.options, initialCountry = _this$options.initialCountry, nationalMode = _this$options.nationalMode, autoHideDialCode = _this$options.autoHideDialCode, separateDialCode = _this$options.separateDialCode;
                    // if we already have a dial code, and it's not a regionlessNanp, we can go ahead and set the
                    // flag, else fall back to the default country
                    if (dialCode && !isRegionlessNanp) {
                        this._updateFlagFromNumber(val);
                    } else if (initialCountry !== "auto") {
                        // see if we should select a flag
                        if (initialCountry) {
                            this._setFlag(initialCountry.toLowerCase());
                        } else {
                            if (dialCode && isRegionlessNanp) {
                                // has intl dial code, is regionless nanp, and no initialCountry, so default to US
                                this._setFlag("us");
                            } else {
                                // no dial code and no initialCountry, so default to first in list
                                this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2;
                                if (!val) {
                                    this._setFlag(this.defaultCountry);
                                }
                            }
                        }
                        // if empty and no nationalMode and no autoHideDialCode then insert the default dial code
                        if (!val && !nationalMode && !autoHideDialCode && !separateDialCode) {
                            this.telInput.value = "+".concat(this.selectedCountryData.dialCode);
                        }
                    }
                    // NOTE: if initialCountry is set to auto, that will be handled separately
                    // format - note this wont be run after _updateDialCode as that's only called if no val
                    if (val) this._updateValFromNumber(val);
                }
            }, {
                key: "_initListeners",
                value: function _initListeners() {
                    this._initKeyListeners();
                    if (this.options.autoHideDialCode) this._initBlurListeners();
                    if (this.options.allowDropdown) this._initDropdownListeners();
                    if (this.hiddenInput) this._initHiddenInputListener();
                }
            }, {
                key: "_initHiddenInputListener",
                value: function _initHiddenInputListener() {
                    var _this3 = this;
                    this._handleHiddenInputSubmit = function() {
                        _this3.hiddenInput.value = _this3.getNumber();
                    };
                    if (this.telInput.form) this.telInput.form.addEventListener("submit", this._handleHiddenInputSubmit);
                }
            }, {
                key: "_getClosestLabel",
                value: function _getClosestLabel() {
                    var el = this.telInput;
                    while (el && el.tagName !== "LABEL") {
                        el = el.parentNode;
                    }
                    return el;
                }
            }, {
                key: "_initDropdownListeners",
                value: function _initDropdownListeners() {
                    var _this4 = this;
                    // hack for input nested inside label (which is valid markup): clicking the selected-flag to
                    // open the dropdown would then automatically trigger a 2nd click on the input which would
                    // close it again
                    this._handleLabelClick = function(e) {
                        // if the dropdown is closed, then focus the input, else ignore the click
                        if (_this4.countryList.classList.contains("iti__hide")) _this4.telInput.focus(); else e.preventDefault();
                    };
                    var label = this._getClosestLabel();
                    if (label) label.addEventListener("click", this._handleLabelClick);
                    // toggle country dropdown on click
                    this._handleClickSelectedFlag = function() {
                        // only intercept this event if we're opening the dropdown
                        // else let it bubble up to the top ("click-off-to-close" listener)
                        // we cannot just stopPropagation as it may be needed to close another instance
                        if (_this4.countryList.classList.contains("iti__hide") && !_this4.telInput.disabled && !_this4.telInput.readOnly) {
                            _this4._showDropdown();
                        }
                    };
                    this.selectedFlag.addEventListener("click", this._handleClickSelectedFlag);
                    // open dropdown list if currently focused
                    this._handleFlagsContainerKeydown = function(e) {
                        var isDropdownHidden = _this4.countryList.classList.contains("iti__hide");
                        if (isDropdownHidden && [ "ArrowUp", "Up", "ArrowDown", "Down", " ", "Enter" ].indexOf(e.key) !== -1) {
                            // prevent form from being submitted if "ENTER" was pressed
                            e.preventDefault();
                            // prevent event from being handled again by document
                            e.stopPropagation();
                            _this4._showDropdown();
                        }
                        // allow navigation from dropdown to input on TAB
                        if (e.key === "Tab") _this4._closeDropdown();
                    };
                    this.flagsContainer.addEventListener("keydown", this._handleFlagsContainerKeydown);
                }
            }, {
                key: "_initRequests",
                value: function _initRequests() {
                    var _this5 = this;
                    // if the user has specified the path to the utils script, fetch it on window.load, else resolve
                    if (this.options.utilsScript && !window.intlTelInputUtils) {
                        // if the plugin is being initialised after the window.load event has already been fired
                        if (window.intlTelInputGlobals.documentReady()) {
                            window.intlTelInputGlobals.loadUtils(this.options.utilsScript);
                        } else {
                            // wait until the load event so we don't block any other requests e.g. the flags image
                            window.addEventListener("load", function() {
                                window.intlTelInputGlobals.loadUtils(_this5.options.utilsScript);
                            });
                        }
                    } else this.resolveUtilsScriptPromise();
                    if (this.options.initialCountry === "auto") this._loadAutoCountry(); else this.resolveAutoCountryPromise();
                }
            }, {
                key: "_loadAutoCountry",
                value: function _loadAutoCountry() {
                    // 3 options:
                    // 1) already loaded (we're done)
                    // 2) not already started loading (start)
                    // 3) already started loading (do nothing - just wait for loading callback to fire)
                    if (window.intlTelInputGlobals.autoCountry) {
                        this.handleAutoCountry();
                    } else if (!window.intlTelInputGlobals.startedLoadingAutoCountry) {
                        // don't do this twice!
                        window.intlTelInputGlobals.startedLoadingAutoCountry = true;
                        if (typeof this.options.geoIpLookup === "function") {
                            this.options.geoIpLookup(function(countryCode) {
                                window.intlTelInputGlobals.autoCountry = countryCode.toLowerCase();
                                // tell all instances the auto country is ready
                                // TODO: this should just be the current instances
                                // UPDATE: use setTimeout in case their geoIpLookup function calls this callback straight
                                // away (e.g. if they have already done the geo ip lookup somewhere else). Using
                                // setTimeout means that the current thread of execution will finish before executing
                                // this, which allows the plugin to finish initialising.
                                setTimeout(function() {
                                    return forEachInstance("handleAutoCountry");
                                });
                            }, function() {
                                return forEachInstance("rejectAutoCountryPromise");
                            });
                        }
                    }
                }
            }, {
                key: "_initKeyListeners",
                value: function _initKeyListeners() {
                    var _this6 = this;
                    // update flag on keyup
                    this._handleKeyupEvent = function() {
                        if (_this6._updateFlagFromNumber(_this6.telInput.value)) {
                            _this6._triggerCountryChange();
                        }
                    };
                    this.telInput.addEventListener("keyup", this._handleKeyupEvent);
                    // update flag on cut/paste events (now supported in all major browsers)
                    this._handleClipboardEvent = function() {
                        // hack because "paste" event is fired before input is updated
                        setTimeout(_this6._handleKeyupEvent);
                    };
                    this.telInput.addEventListener("cut", this._handleClipboardEvent);
                    this.telInput.addEventListener("paste", this._handleClipboardEvent);
                }
            }, {
                key: "_cap",
                value: function _cap(number) {
                    var max = this.telInput.getAttribute("maxlength");
                    return max && number.length > max ? number.substr(0, max) : number;
                }
            }, {
                key: "_initBlurListeners",
                value: function _initBlurListeners() {
                    var _this7 = this;
                    // on blur or form submit: if just a dial code then remove it
                    this._handleSubmitOrBlurEvent = function() {
                        _this7._removeEmptyDialCode();
                    };
                    if (this.telInput.form) this.telInput.form.addEventListener("submit", this._handleSubmitOrBlurEvent);
                    this.telInput.addEventListener("blur", this._handleSubmitOrBlurEvent);
                }
            }, {
                key: "_removeEmptyDialCode",
                value: function _removeEmptyDialCode() {
                    if (this.telInput.value.charAt(0) === "+") {
                        var numeric = this._getNumeric(this.telInput.value);
                        // if just a plus, or if just a dial code
                        if (!numeric || this.selectedCountryData.dialCode === numeric) {
                            this.telInput.value = "";
                        }
                    }
                }
            }, {
                key: "_getNumeric",
                value: function _getNumeric(s) {
                    return s.replace(/\D/g, "");
                }
            }, {
                key: "_trigger",
                value: function _trigger(name) {
                    // have to use old school document.createEvent as IE11 doesn't support `new Event()` syntax
                    var e = document.createEvent("Event");
                    e.initEvent(name, true, true);
                    // can bubble, and is cancellable
                    this.telInput.dispatchEvent(e);
                }
            }, {
                key: "_showDropdown",
                value: function _showDropdown() {
                    this.countryList.classList.remove("iti__hide");
                    this.selectedFlag.setAttribute("aria-expanded", "true");
                    this._setDropdownPosition();
                    // update highlighting and scroll to active list item
                    if (this.activeItem) {
                        this._highlightListItem(this.activeItem, false);
                        this._scrollTo(this.activeItem, true);
                    }
                    // bind all the dropdown-related listeners: mouseover, click, click-off, keydown
                    this._bindDropdownListeners();
                    // update the arrow
                    this.dropdownArrow.classList.add("iti__arrow--up");
                    this._trigger("open:countrydropdown");
                }
            }, {
                key: "_toggleClass",
                value: function _toggleClass(el, className, shouldHaveClass) {
                    if (shouldHaveClass && !el.classList.contains(className)) el.classList.add(className); else if (!shouldHaveClass && el.classList.contains(className)) el.classList.remove(className);
                }
            }, {
                key: "_setDropdownPosition",
                value: function _setDropdownPosition() {
                    var _this8 = this;
                    if (this.options.dropdownContainer) {
                        this.options.dropdownContainer.appendChild(this.dropdown);
                    }
                    if (!this.isMobile) {
                        var pos = this.telInput.getBoundingClientRect();
                        // windowTop from https://stackoverflow.com/a/14384091/217866
                        var windowTop = window.pageYOffset || document.documentElement.scrollTop;
                        var inputTop = pos.top + windowTop;
                        var dropdownHeight = this.countryList.offsetHeight;
                        // dropdownFitsBelow = (dropdownBottom < windowBottom)
                        var dropdownFitsBelow = inputTop + this.telInput.offsetHeight + dropdownHeight < windowTop + window.innerHeight;
                        var dropdownFitsAbove = inputTop - dropdownHeight > windowTop;
                        // by default, the dropdown will be below the input. If we want to position it above the
                        // input, we add the dropup class.
                        this._toggleClass(this.countryList, "iti__country-list--dropup", !dropdownFitsBelow && dropdownFitsAbove);
                        // if dropdownContainer is enabled, calculate postion
                        if (this.options.dropdownContainer) {
                            // by default the dropdown will be directly over the input because it's not in the flow.
                            // If we want to position it below, we need to add some extra top value.
                            var extraTop = !dropdownFitsBelow && dropdownFitsAbove ? 0 : this.telInput.offsetHeight;
                            // calculate placement
                            this.dropdown.style.top = "".concat(inputTop + extraTop, "px");
                            this.dropdown.style.left = "".concat(pos.left + document.body.scrollLeft, "px");
                            // close menu on window scroll
                            this._handleWindowScroll = function() {
                                return _this8._closeDropdown();
                            };
                            window.addEventListener("scroll", this._handleWindowScroll);
                        }
                    }
                }
            }, {
                key: "_getClosestListItem",
                value: function _getClosestListItem(target) {
                    var el = target;
                    while (el && el !== this.countryList && !el.classList.contains("iti__country")) {
                        el = el.parentNode;
                    }
                    // if we reached the countryList element, then return null
                    return el === this.countryList ? null : el;
                }
            }, {
                key: "_bindDropdownListeners",
                value: function _bindDropdownListeners() {
                    var _this9 = this;
                    // when mouse over a list item, just highlight that one
                    // we add the class "highlight", so if they hit "enter" we know which one to select
                    this._handleMouseoverCountryList = function(e) {
                        // handle event delegation, as we're listening for this event on the countryList
                        var listItem = _this9._getClosestListItem(e.target);
                        if (listItem) _this9._highlightListItem(listItem, false);
                    };
                    this.countryList.addEventListener("mouseover", this._handleMouseoverCountryList);
                    // listen for country selection
                    this._handleClickCountryList = function(e) {
                        var listItem = _this9._getClosestListItem(e.target);
                        if (listItem) _this9._selectListItem(listItem);
                    };
                    this.countryList.addEventListener("click", this._handleClickCountryList);
                    // click off to close
                    // (except when this initial opening click is bubbling up)
                    // we cannot just stopPropagation as it may be needed to close another instance
                    var isOpening = true;
                    this._handleClickOffToClose = function() {
                        if (!isOpening) _this9._closeDropdown();
                        isOpening = false;
                    };
                    document.documentElement.addEventListener("click", this._handleClickOffToClose);
                    // listen for up/down scrolling, enter to select, or letters to jump to country name.
                    // use keydown as keypress doesn't fire for non-char keys and we want to catch if they
                    // just hit down and hold it to scroll down (no keyup event).
                    // listen on the document because that's where key events are triggered if no input has focus
                    var query = "";
                    var queryTimer = null;
                    this._handleKeydownOnDropdown = function(e) {
                        // prevent down key from scrolling the whole page,
                        // and enter key from submitting a form etc
                        e.preventDefault();
                        // up and down to navigate
                        if (e.key === "ArrowUp" || e.key === "Up" || e.key === "ArrowDown" || e.key === "Down") _this9._handleUpDownKey(e.key); else if (e.key === "Enter") _this9._handleEnterKey(); else if (e.key === "Escape") _this9._closeDropdown(); else if (/^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(e.key)) {
                            // jump to countries that start with the query string
                            if (queryTimer) clearTimeout(queryTimer);
                            query += e.key.toLowerCase();
                            _this9._searchForCountry(query);
                            // if the timer hits 1 second, reset the query
                            queryTimer = setTimeout(function() {
                                query = "";
                            }, 1e3);
                        }
                    };
                    document.addEventListener("keydown", this._handleKeydownOnDropdown);
                }
            }, {
                key: "_handleUpDownKey",
                value: function _handleUpDownKey(key) {
                    var next = key === "ArrowUp" || key === "Up" ? this.highlightedItem.previousElementSibling : this.highlightedItem.nextElementSibling;
                    if (next) {
                        // skip the divider
                        if (next.classList.contains("iti__divider")) {
                            next = key === "ArrowUp" || key === "Up" ? next.previousElementSibling : next.nextElementSibling;
                        }
                        this._highlightListItem(next, true);
                    }
                }
            }, {
                key: "_handleEnterKey",
                value: function _handleEnterKey() {
                    if (this.highlightedItem) this._selectListItem(this.highlightedItem);
                }
            }, {
                key: "_searchForCountry",
                value: function _searchForCountry(query) {
                    for (var i = 0; i < this.countries.length; i++) {
                        if (this._startsWith(this.countries[i].name, query)) {
                            var listItem = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(this.countries[i].iso2));
                            // update highlighting and scroll
                            this._highlightListItem(listItem, false);
                            this._scrollTo(listItem, true);
                            break;
                        }
                    }
                }
            }, {
                key: "_startsWith",
                value: function _startsWith(a, b) {
                    return a.substr(0, b.length).toLowerCase() === b;
                }
            }, {
                key: "_updateValFromNumber",
                value: function _updateValFromNumber(originalNumber) {
                    var number = originalNumber;
                    if (this.options.formatOnDisplay && window.intlTelInputUtils && this.selectedCountryData) {
                        var useNational = !this.options.separateDialCode && (this.options.nationalMode || number.charAt(0) !== "+");
                        var _intlTelInputUtils$nu = intlTelInputUtils.numberFormat, NATIONAL = _intlTelInputUtils$nu.NATIONAL, INTERNATIONAL = _intlTelInputUtils$nu.INTERNATIONAL;
                        var format = useNational ? NATIONAL : INTERNATIONAL;
                        number = intlTelInputUtils.formatNumber(number, this.selectedCountryData.iso2, format);
                    }
                    number = this._beforeSetNumber(number);
                    this.telInput.value = number;
                }
            }, {
                key: "_updateFlagFromNumber",
                value: function _updateFlagFromNumber(originalNumber) {
                    // if we're in nationalMode and we already have US/Canada selected, make sure the number starts
                    // with a +1 so _getDialCode will be able to extract the area code
                    // update: if we dont yet have selectedCountryData, but we're here (trying to update the flag
                    // from the number), that means we're initialising the plugin with a number that already has a
                    // dial code, so fine to ignore this bit
                    var number = originalNumber;
                    var selectedDialCode = this.selectedCountryData.dialCode;
                    var isNanp = selectedDialCode === "1";
                    if (number && this.options.nationalMode && isNanp && number.charAt(0) !== "+") {
                        if (number.charAt(0) !== "1") number = "1".concat(number);
                        number = "+".concat(number);
                    }
                    // update flag if user types area code for another country
                    if (this.options.separateDialCode && selectedDialCode && number.charAt(0) !== "+") {
                        number = "+".concat(selectedDialCode).concat(number);
                    }
                    // try and extract valid dial code from input
                    var dialCode = this._getDialCode(number, true);
                    var numeric = this._getNumeric(number);
                    var countryCode = null;
                    if (dialCode) {
                        var countryCodes = this.countryCodes[this._getNumeric(dialCode)];
                        // check if the right country is already selected. this should be false if the number is
                        // longer than the matched dial code because in this case we need to make sure that if
                        // there are multiple country matches, that the first one is selected (note: we could
                        // just check that here, but it requires the same loop that we already have later)
                        var alreadySelected = countryCodes.indexOf(this.selectedCountryData.iso2) !== -1 && numeric.length <= dialCode.length - 1;
                        var isRegionlessNanpNumber = selectedDialCode === "1" && this._isRegionlessNanp(numeric);
                        // only update the flag if:
                        // A) NOT (we currently have a NANP flag selected, and the number is a regionlessNanp)
                        // AND
                        // B) the right country is not already selected
                        if (!isRegionlessNanpNumber && !alreadySelected) {
                            // if using onlyCountries option, countryCodes[0] may be empty, so we must find the first
                            // non-empty index
                            for (var j = 0; j < countryCodes.length; j++) {
                                if (countryCodes[j]) {
                                    countryCode = countryCodes[j];
                                    break;
                                }
                            }
                        }
                    } else if (number.charAt(0) === "+" && numeric.length) {
                        // invalid dial code, so empty
                        // Note: use getNumeric here because the number has not been formatted yet, so could contain
                        // bad chars
                        countryCode = "";
                    } else if (!number || number === "+") {
                        // empty, or just a plus, so default
                        countryCode = this.defaultCountry;
                    }
                    if (countryCode !== null) {
                        return this._setFlag(countryCode);
                    }
                    return false;
                }
            }, {
                key: "_isRegionlessNanp",
                value: function _isRegionlessNanp(number) {
                    var numeric = this._getNumeric(number);
                    if (numeric.charAt(0) === "1") {
                        var areaCode = numeric.substr(1, 3);
                        return regionlessNanpNumbers.indexOf(areaCode) !== -1;
                    }
                    return false;
                }
            }, {
                key: "_highlightListItem",
                value: function _highlightListItem(listItem, shouldFocus) {
                    var prevItem = this.highlightedItem;
                    if (prevItem) prevItem.classList.remove("iti__highlight");
                    this.highlightedItem = listItem;
                    this.highlightedItem.classList.add("iti__highlight");
                    if (shouldFocus) this.highlightedItem.focus();
                }
            }, {
                key: "_getCountryData",
                value: function _getCountryData(countryCode, ignoreOnlyCountriesOption, allowFail) {
                    var countryList = ignoreOnlyCountriesOption ? allCountries : this.countries;
                    for (var i = 0; i < countryList.length; i++) {
                        if (countryList[i].iso2 === countryCode) {
                            return countryList[i];
                        }
                    }
                    if (allowFail) {
                        return null;
                    }
                    throw new Error("No country data for '".concat(countryCode, "'"));
                }
            }, {
                key: "_setFlag",
                value: function _setFlag(countryCode) {
                    var prevCountry = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
                    // do this first as it will throw an error and stop if countryCode is invalid
                    this.selectedCountryData = countryCode ? this._getCountryData(countryCode, false, false) : {};
                    // update the defaultCountry - we only need the iso2 from now on, so just store that
                    if (this.selectedCountryData.iso2) {
                        this.defaultCountry = this.selectedCountryData.iso2;
                    }
                    this.selectedFlagInner.setAttribute("class", "iti__flag iti__".concat(countryCode));
                    // update the selected country's title attribute
                    var title = countryCode ? "".concat(this.selectedCountryData.name, ": +").concat(this.selectedCountryData.dialCode) : "Unknown";
                    this.selectedFlag.setAttribute("title", title);
                    if (this.options.separateDialCode) {
                        var dialCode = this.selectedCountryData.dialCode ? "+".concat(this.selectedCountryData.dialCode) : "";
                        this.selectedDialCode.innerHTML = dialCode;
                        // offsetWidth is zero if input is in a hidden container during initialisation
                        var selectedFlagWidth = this.selectedFlag.offsetWidth || this._getHiddenSelectedFlagWidth();
                        // add 6px of padding after the grey selected-dial-code box, as this is what we use in the css
                        this.telInput.style.paddingLeft = "".concat(selectedFlagWidth + 6, "px");
                    }
                    // and the input's placeholder
                    this._updatePlaceholder();
                    // update the active list item
                    if (this.options.allowDropdown) {
                        var prevItem = this.activeItem;
                        if (prevItem) {
                            prevItem.classList.remove("iti__active");
                            prevItem.setAttribute("aria-selected", "false");
                        }
                        if (countryCode) {
                            // check if there is a preferred item first, else fall back to standard
                            var nextItem = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(countryCode, "-preferred")) || this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(countryCode));
                            nextItem.setAttribute("aria-selected", "true");
                            nextItem.classList.add("iti__active");
                            this.activeItem = nextItem;
                            this.selectedFlag.setAttribute("aria-activedescendant", nextItem.getAttribute("id"));
                        }
                    }
                    // return if the flag has changed or not
                    return prevCountry.iso2 !== countryCode;
                }
            }, {
                key: "_getHiddenSelectedFlagWidth",
                value: function _getHiddenSelectedFlagWidth() {
                    // to get the right styling to apply, all we need is a shallow clone of the container,
                    // and then to inject a deep clone of the selectedFlag element
                    var containerClone = this.telInput.parentNode.cloneNode();
                    containerClone.style.visibility = "hidden";
                    document.body.appendChild(containerClone);
                    var flagsContainerClone = this.flagsContainer.cloneNode();
                    containerClone.appendChild(flagsContainerClone);
                    var selectedFlagClone = this.selectedFlag.cloneNode(true);
                    flagsContainerClone.appendChild(selectedFlagClone);
                    var width = selectedFlagClone.offsetWidth;
                    containerClone.parentNode.removeChild(containerClone);
                    return width;
                }
            }, {
                key: "_updatePlaceholder",
                value: function _updatePlaceholder() {
                    var shouldSetPlaceholder = this.options.autoPlaceholder === "aggressive" || !this.hadInitialPlaceholder && this.options.autoPlaceholder === "polite";
                    if (window.intlTelInputUtils && shouldSetPlaceholder) {
                        var numberType = intlTelInputUtils.numberType[this.options.placeholderNumberType];
                        var placeholder = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, numberType) : "";
                        placeholder = this._beforeSetNumber(placeholder);
                        if (typeof this.options.customPlaceholder === "function") {
                            placeholder = this.options.customPlaceholder(placeholder, this.selectedCountryData);
                        }
                        this.telInput.setAttribute("placeholder", placeholder);
                    }
                }
            }, {
                key: "_selectListItem",
                value: function _selectListItem(listItem) {
                    // update selected flag and active list item
                    var flagChanged = this._setFlag(listItem.getAttribute("data-country-code"));
                    this._closeDropdown();
                    this._updateDialCode(listItem.getAttribute("data-dial-code"), true);
                    // focus the input
                    this.telInput.focus();
                    // put cursor at end - this fix is required for FF and IE11 (with nationalMode=false i.e. auto
                    // inserting dial code), who try to put the cursor at the beginning the first time
                    var len = this.telInput.value.length;
                    this.telInput.setSelectionRange(len, len);
                    if (flagChanged) {
                        this._triggerCountryChange();
                    }
                }
            }, {
                key: "_closeDropdown",
                value: function _closeDropdown() {
                    this.countryList.classList.add("iti__hide");
                    this.selectedFlag.setAttribute("aria-expanded", "false");
                    // update the arrow
                    this.dropdownArrow.classList.remove("iti__arrow--up");
                    // unbind key events
                    document.removeEventListener("keydown", this._handleKeydownOnDropdown);
                    document.documentElement.removeEventListener("click", this._handleClickOffToClose);
                    this.countryList.removeEventListener("mouseover", this._handleMouseoverCountryList);
                    this.countryList.removeEventListener("click", this._handleClickCountryList);
                    // remove menu from container
                    if (this.options.dropdownContainer) {
                        if (!this.isMobile) window.removeEventListener("scroll", this._handleWindowScroll);
                        if (this.dropdown.parentNode) this.dropdown.parentNode.removeChild(this.dropdown);
                    }
                    this._trigger("close:countrydropdown");
                }
            }, {
                key: "_scrollTo",
                value: function _scrollTo(element, middle) {
                    var container = this.countryList;
                    // windowTop from https://stackoverflow.com/a/14384091/217866
                    var windowTop = window.pageYOffset || document.documentElement.scrollTop;
                    var containerHeight = container.offsetHeight;
                    var containerTop = container.getBoundingClientRect().top + windowTop;
                    var containerBottom = containerTop + containerHeight;
                    var elementHeight = element.offsetHeight;
                    var elementTop = element.getBoundingClientRect().top + windowTop;
                    var elementBottom = elementTop + elementHeight;
                    var newScrollTop = elementTop - containerTop + container.scrollTop;
                    var middleOffset = containerHeight / 2 - elementHeight / 2;
                    if (elementTop < containerTop) {
                        // scroll up
                        if (middle) newScrollTop -= middleOffset;
                        container.scrollTop = newScrollTop;
                    } else if (elementBottom > containerBottom) {
                        // scroll down
                        if (middle) newScrollTop += middleOffset;
                        var heightDifference = containerHeight - elementHeight;
                        container.scrollTop = newScrollTop - heightDifference;
                    }
                }
            }, {
                key: "_updateDialCode",
                value: function _updateDialCode(newDialCodeBare, hasSelectedListItem) {
                    var inputVal = this.telInput.value;
                    // save having to pass this every time
                    var newDialCode = "+".concat(newDialCodeBare);
                    var newNumber;
                    if (inputVal.charAt(0) === "+") {
                        // there's a plus so we're dealing with a replacement (doesn't matter if nationalMode or not)
                        var prevDialCode = this._getDialCode(inputVal);
                        if (prevDialCode) {
                            // current number contains a valid dial code, so replace it
                            newNumber = inputVal.replace(prevDialCode, newDialCode);
                        } else {
                            // current number contains an invalid dial code, so ditch it
                            // (no way to determine where the invalid dial code ends and the rest of the number begins)
                            newNumber = newDialCode;
                        }
                    } else if (this.options.nationalMode || this.options.separateDialCode) {
                        // don't do anything
                        return;
                    } else {
                        // nationalMode is disabled
                        if (inputVal) {
                            // there is an existing value with no dial code: prefix the new dial code
                            newNumber = newDialCode + inputVal;
                        } else if (hasSelectedListItem || !this.options.autoHideDialCode) {
                            // no existing value and either they've just selected a list item, or autoHideDialCode is
                            // disabled: insert new dial code
                            newNumber = newDialCode;
                        } else {
                            return;
                        }
                    }
                    this.telInput.value = newNumber;
                }
            }, {
                key: "_getDialCode",
                value: function _getDialCode(number, includeAreaCode) {
                    var dialCode = "";
                    // only interested in international numbers (starting with a plus)
                    if (number.charAt(0) === "+") {
                        var numericChars = "";
                        // iterate over chars
                        for (var i = 0; i < number.length; i++) {
                            var c = number.charAt(i);
                            // if char is number (https://stackoverflow.com/a/8935649/217866)
                            if (!isNaN(parseInt(c, 10))) {
                                numericChars += c;
                                // if current numericChars make a valid dial code
                                if (includeAreaCode) {
                                    if (this.countryCodes[numericChars]) {
                                        // store the actual raw string (useful for matching later)
                                        dialCode = number.substr(0, i + 1);
                                    }
                                } else {
                                    if (this.dialCodes[numericChars]) {
                                        dialCode = number.substr(0, i + 1);
                                        // if we're just looking for a dial code, we can break as soon as we find one
                                        break;
                                    }
                                }
                                // stop searching as soon as we can - in this case when we hit max len
                                if (numericChars.length === this.countryCodeMaxLen) {
                                    break;
                                }
                            }
                        }
                    }
                    return dialCode;
                }
            }, {
                key: "_getFullNumber",
                value: function _getFullNumber() {
                    var val = this.telInput.value.trim();
                    var dialCode = this.selectedCountryData.dialCode;
                    var prefix;
                    var numericVal = this._getNumeric(val);
                    if (this.options.separateDialCode && val.charAt(0) !== "+" && dialCode && numericVal) {
                        // when using separateDialCode, it is visible so is effectively part of the typed number
                        prefix = "+".concat(dialCode);
                    } else {
                        prefix = "";
                    }
                    return prefix + val;
                }
            }, {
                key: "_beforeSetNumber",
                value: function _beforeSetNumber(originalNumber) {
                    var number = originalNumber;
                    if (this.options.separateDialCode) {
                        var dialCode = this._getDialCode(number);
                        // if there is a valid dial code
                        if (dialCode) {
                            // in case _getDialCode returned an area code as well
                            dialCode = "+".concat(this.selectedCountryData.dialCode);
                            // a lot of numbers will have a space separating the dial code and the main number, and
                            // some NANP numbers will have a hyphen e.g. +1 684-733-1234 - in both cases we want to get
                            // rid of it
                            // NOTE: don't just trim all non-numerics as may want to preserve an open parenthesis etc
                            var start = number[dialCode.length] === " " || number[dialCode.length] === "-" ? dialCode.length + 1 : dialCode.length;
                            number = number.substr(start);
                        }
                    }
                    return this._cap(number);
                }
            }, {
                key: "_triggerCountryChange",
                value: function _triggerCountryChange() {
                    this._trigger("countrychange");
                }
            }, {
                key: "handleAutoCountry",
                value: function handleAutoCountry() {
                    if (this.options.initialCountry === "auto") {
                        // we must set this even if there is an initial val in the input: in case the initial val is
                        // invalid and they delete it - they should see their auto country
                        this.defaultCountry = window.intlTelInputGlobals.autoCountry;
                        // if there's no initial value in the input, then update the flag
                        if (!this.telInput.value) {
                            this.setCountry(this.defaultCountry);
                        }
                        this.resolveAutoCountryPromise();
                    }
                }
            }, {
                key: "handleUtils",
                value: function handleUtils() {
                    // if the request was successful
                    if (window.intlTelInputUtils) {
                        // if there's an initial value in the input, then format it
                        if (this.telInput.value) {
                            this._updateValFromNumber(this.telInput.value);
                        }
                        this._updatePlaceholder();
                    }
                    this.resolveUtilsScriptPromise();
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    var form = this.telInput.form;
                    if (this.options.allowDropdown) {
                        // make sure the dropdown is closed (and unbind listeners)
                        this._closeDropdown();
                        this.selectedFlag.removeEventListener("click", this._handleClickSelectedFlag);
                        this.flagsContainer.removeEventListener("keydown", this._handleFlagsContainerKeydown);
                        // label click hack
                        var label = this._getClosestLabel();
                        if (label) label.removeEventListener("click", this._handleLabelClick);
                    }
                    // unbind hiddenInput listeners
                    if (this.hiddenInput && form) form.removeEventListener("submit", this._handleHiddenInputSubmit);
                    // unbind autoHideDialCode listeners
                    if (this.options.autoHideDialCode) {
                        if (form) form.removeEventListener("submit", this._handleSubmitOrBlurEvent);
                        this.telInput.removeEventListener("blur", this._handleSubmitOrBlurEvent);
                    }
                    // unbind key events, and cut/paste events
                    this.telInput.removeEventListener("keyup", this._handleKeyupEvent);
                    this.telInput.removeEventListener("cut", this._handleClipboardEvent);
                    this.telInput.removeEventListener("paste", this._handleClipboardEvent);
                    // remove attribute of id instance: data-intl-tel-input-id
                    this.telInput.removeAttribute("data-intl-tel-input-id");
                    // remove markup (but leave the original input)
                    var wrapper = this.telInput.parentNode;
                    wrapper.parentNode.insertBefore(this.telInput, wrapper);
                    wrapper.parentNode.removeChild(wrapper);
                    delete window.intlTelInputGlobals.instances[this.id];
                }
            }, {
                key: "getExtension",
                value: function getExtension() {
                    if (window.intlTelInputUtils) {
                        return intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2);
                    }
                    return "";
                }
            }, {
                key: "getNumber",
                value: function getNumber(format) {
                    if (window.intlTelInputUtils) {
                        var iso2 = this.selectedCountryData.iso2;
                        return intlTelInputUtils.formatNumber(this._getFullNumber(), iso2, format);
                    }
                    return "";
                }
            }, {
                key: "getNumberType",
                value: function getNumberType() {
                    if (window.intlTelInputUtils) {
                        return intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2);
                    }
                    return -99;
                }
            }, {
                key: "getSelectedCountryData",
                value: function getSelectedCountryData() {
                    return this.selectedCountryData;
                }
            }, {
                key: "getValidationError",
                value: function getValidationError() {
                    if (window.intlTelInputUtils) {
                        var iso2 = this.selectedCountryData.iso2;
                        return intlTelInputUtils.getValidationError(this._getFullNumber(), iso2);
                    }
                    return -99;
                }
            }, {
                key: "isValidNumber",
                value: function isValidNumber() {
                    var val = this._getFullNumber().trim();
                    var countryCode = this.options.nationalMode ? this.selectedCountryData.iso2 : "";
                    return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(val, countryCode) : null;
                }
            }, {
                key: "setCountry",
                value: function setCountry(originalCountryCode) {
                    var countryCode = originalCountryCode.toLowerCase();
                    // check if already selected
                    if (!this.selectedFlagInner.classList.contains("iti__".concat(countryCode))) {
                        this._setFlag(countryCode);
                        this._updateDialCode(this.selectedCountryData.dialCode, false);
                        this._triggerCountryChange();
                    }
                }
            }, {
                key: "setNumber",
                value: function setNumber(number) {
                    // we must update the flag first, which updates this.selectedCountryData, which is used for
                    // formatting the number before displaying it
                    var flagChanged = this._updateFlagFromNumber(number);
                    this._updateValFromNumber(number);
                    if (flagChanged) {
                        this._triggerCountryChange();
                    }
                }
            }, {
                key: "setPlaceholderNumberType",
                value: function setPlaceholderNumberType(type) {
                    this.options.placeholderNumberType = type;
                    this._updatePlaceholder();
                }
            } ]);
            return Iti;
        }();
        /********************
 *  STATIC METHODS
 ********************/
        // get the country data object
        intlTelInputGlobals.getCountryData = function() {
            return allCountries;
        };
        // inject a <script> element to load utils.js
        var injectScript = function injectScript(path, handleSuccess, handleFailure) {
            // inject a new script element into the page
            var script = document.createElement("script");
            script.onload = function() {
                forEachInstance("handleUtils");
                if (handleSuccess) handleSuccess();
            };
            script.onerror = function() {
                forEachInstance("rejectUtilsScriptPromise");
                if (handleFailure) handleFailure();
            };
            script.className = "iti-load-utils";
            script.async = true;
            script.src = path;
            document.body.appendChild(script);
        };
        // load the utils script
        intlTelInputGlobals.loadUtils = function(path) {
            // 2 options:
            // 1) not already started loading (start)
            // 2) already started loading (do nothing - just wait for the onload callback to fire, which will
            // trigger handleUtils on all instances, invoking their resolveUtilsScriptPromise functions)
            if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) {
                // only do this once
                window.intlTelInputGlobals.startedLoadingUtilsScript = true;
                // if we have promises, then return a promise
                if (typeof Promise !== "undefined") {
                    return new Promise(function(resolve, reject) {
                        return injectScript(path, resolve, reject);
                    });
                }
                injectScript(path);
            }
            return null;
        };
        // default options
        intlTelInputGlobals.defaults = defaults;
        // version
        intlTelInputGlobals.version = "17.0.13";
        // convenience wrapper
        return function(input, options) {
            var iti = new Iti(input, options);
            iti._init();
            input.setAttribute("data-intl-tel-input-id", iti.id);
            window.intlTelInputGlobals.instances[iti.id] = iti;
            return iti;
        };
    }();
});

/***/ }),

/***/ "./node_modules/intl-tel-input/index.js":
/*!**********************************************!*\
  !*** ./node_modules/intl-tel-input/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Exposing intl-tel-input as a component
 */
module.exports = __webpack_require__(/*! ./build/js/intlTelInput */ "./node_modules/intl-tel-input/build/js/intlTelInput.js");


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })

/******/ });
//# sourceMappingURL=index.js.map