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
/* harmony import */ var _scss_stylesheet_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/stylesheet.scss */ "./assets/scss/stylesheet.scss");
/* harmony import */ var _modules_frontend_HeroImageSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/frontend/HeroImageSlider */ "./assets/js/modules/frontend/HeroImageSlider.js");
/* harmony import */ var _modules_frontend_HamburgerMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/frontend/HamburgerMenu */ "./assets/js/modules/frontend/HamburgerMenu.js");
/* harmony import */ var _modules_frontend_TestimonialsSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/frontend/TestimonialsSlider */ "./assets/js/modules/frontend/TestimonialsSlider.js");
/* harmony import */ var _modules_frontend_Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/frontend/Main */ "./assets/js/modules/frontend/Main.js");
/* harmony import */ var _inc_customroomsmeta_js_modules_front_end_CustomRoomsMeta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../inc/customroomsmeta/js/modules/front-end/CustomRoomsMeta */ "./inc/customroomsmeta/js/modules/front-end/CustomRoomsMeta.js");
/* harmony import */ var _modules_frontend_WorkingspacesMaps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/frontend/WorkingspacesMaps */ "./assets/js/modules/frontend/WorkingspacesMaps.js");
 // import modules






 // instantiate module classes

let heroImageSlider;
let hamburgerMenu;
let testimonialsSlider;
let main;
let customRoomsMeta;
let workingspacesMaps;
const hompage = document.querySelector(".home");

if (hompage) {
  heroImageSlider = new _modules_frontend_HeroImageSlider__WEBPACK_IMPORTED_MODULE_1__["default"]();
  testimonialsSlider = new _modules_frontend_TestimonialsSlider__WEBPACK_IMPORTED_MODULE_3__["default"]();
}

hamburgerMenu = new _modules_frontend_HamburgerMenu__WEBPACK_IMPORTED_MODULE_2__["default"]();
main = new _modules_frontend_Main__WEBPACK_IMPORTED_MODULE_4__["default"](); // include front-end init

customRoomsMeta = new _inc_customroomsmeta_js_modules_front_end_CustomRoomsMeta__WEBPACK_IMPORTED_MODULE_5__["default"]();
workingspacesMaps = new _modules_frontend_WorkingspacesMaps__WEBPACK_IMPORTED_MODULE_6__["default"]();

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
      const {
        country,
        roomCategories,
        capacities,
        priceRange
      } = filter;
      let url = `${this.endpoint}/wp-json/wp/v2/workingspaces?`;
      if (roomCategories.length > 0) url += `room_categories=${roomCategories.toString()}`;
      if (country) url += `&country=${country}`;
      if (capacities.length >= 1) url += `&capacities=${capacities}`;
      if (capacities.length < 1) url += `&capacities=1up`;
      if (priceRange) url += `&price_range=${priceRange.toString()}`;
      return axios__WEBPACK_IMPORTED_MODULE_0___default()(url);
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
    this.workingspacesContainer = $('#workingspaces');
    this.workspaceCardPosts = $('.card-border--hover'); // init elements
    // init gsap animation
    // initialize events function
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
      this.initMap(args.center, (_args$zoom = args.zoom) !== null && _args$zoom !== void 0 ? _args$zoom : 10);
    }

    initMap(center, zoom) {
      if (!center) return;
      mapboxgl.accessToken = this.mapboxPublicToken;
      this.map = new mapboxgl.Map({
        container: args.container,
        style: 'mapbox://styles/andrewlopezit/cksbd685j2dud17pav0q5rf5w',
        center: center,
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
    if (this.$content.find('.autho-details').length) this.testimonialSliderAnimation = this.testimonialSliderAnimation.to(this.$content.find('.author-details'), {
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

/***/ "./assets/js/modules/frontend/WorkingspacesMaps.js":
/*!*********************************************************!*\
  !*** ./assets/js/modules/frontend/WorkingspacesMaps.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./assets/js/modules/frontend/index.js");


class WorkingspacesMaps {
  constructor() {
    this.$workspaceContainer = $('#workspaces-map');
    if (!this.$workspaceContainer.length) return;
    this.$contentContainer = this.$workspaceContainer.find('.content-container');
    this.$labelFilterContainer = this.$contentContainer.find('.action-container > .label');
    this.$filterContainer = this.$contentContainer.find('.filter-container');
    this.$mapContainer = this.$contentContainer.find('.map-container');
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
    this.$btnMapView = this.$contentContainer.find('.action-container#mobile-maps'); //local variable

    this.siteUrl = translation_array.site_url;
    this.mapZoom = 15;
    this.isMapLoaded = false; //init slider

    Object(_index__WEBPACK_IMPORTED_MODULE_0__["rangeSlider"])({
      container: this.$priceRange.get()[0]
    });
    this.initAnimation(); // init events

    this.events(); // init map

    this.initMap();
  }

  initMap() {
    var _this$$map$data$split;

    this.map = Object(_index__WEBPACK_IMPORTED_MODULE_0__["maps"])({
      container: this.$map.get()[0],
      center: (_this$$map$data$split = this.$map.data('geolocation').split(',')) !== null && _this$$map$data$split !== void 0 ? _this$$map$data$split : null,
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
    const load = Object(_index__WEBPACK_IMPORTED_MODULE_0__["loading"])(this.$mapContainer, 60).start();
    this.map.get().on('load', () => {
      this.$btnMapView.html(`<button class="btn maps"><i class="far fa-map"></i></button>`);
      this.isMapLoaded = true;
      this.$map.show();
      load.end();
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
      onReverseComplete: () => this.$mapContainer.css('width', 0)
    });
    this.mapMobileAnimation.to(this.$mapContainer, {
      opacity: 1,
      width: $(document).width() - 45
    });
  }

  initBtnMobileMapAnimation() {
    this.$btnMapView.addClass('is-active');
    this.btnMapviewAnimation = gsap.timeline({
      onComplete: () => this.$btnMapView.find('.btn.maps > i').attr('class', 'fas fa-times'),
      onReverseComplete: () => this.$btnMapView.find('.btn.maps > i').attr('class', 'far fa-map')
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
      this.changePostionBtnMapOnScoll();

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
  }

  changePostionBtnMapOnScoll() {
    const btnPostionTop = parseInt(getComputedStyle(this.$btnMapView.get()[0]).getPropertyValue('--position-top'));

    if (window.scrollY <= btnPostionTop) {
      this.$btnMapView.css('top', btnPostionTop + 20 - window.scrollY);
    } else {
      this.$btnMapView.css('top', 20);
    }
  }

  workingspacesTemplate(data) {
    let template = '';

    if (data.length < 1) {
      return `<p>No items match your criteria.</p>`;
    }

    data.forEach(val => {
      var _val$location;

      const minimumCapacity = Math.min.apply(Math, val.capacity_list);
      const maximumCapacity = Math.max.apply(Math, val.capacity_list);

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

      template += `<div class="item workspace card border-top-left border--post border--hover">
                            <img class="card-img-top" src="${val.featured_image}" alt="">
                            <div class="card-body">
                                <div class="action-container">
                                    <div class="action-like shadow-sm">
                                        <i class="far fa-heart"></i>
                                    </div>
                                </div>

                                <h5><a href="${val === null || val === void 0 ? void 0 : val.permalink}">${val === null || val === void 0 ? void 0 : val.post_title}</a></h5>
                                
                                ${val !== null && val !== void 0 && (_val$location = val.location) !== null && _val$location !== void 0 && _val$location.place_name ? locationTemplate(val.location.place_name) : ''}
                                <div class="detail-icontainer capacity">
                                    <i class="fas fa-user text-muted"></i>
                                    <p class="text-muted">Capacity: <span>${minimumCapacity} - ${maximumCapacity}</span></p>
                                </div>
                                <div class="detail-icontainer total-rooms">
                                    <i class="fas fa-chair text-muted"></i>
                                    <p class="text-muted">No. of rooms: <span>${val === null || val === void 0 ? void 0 : val.total_rooms}</span></p>
                                </div>
                                ${val !== null && val !== void 0 && val.price_range ? priceRangeTemplate(val.price_range) : ''}
                            </div>
                        </div>`;
    });
    return template;
  }

  dislplayFilteredWorkingspaces() {
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
      roomCategories: categoryIds,
      capacities: capacities,
      priceRange: [minimumPriceRange, maximumPriceRange]
    };
    this.$labelFilterContainer.html(`Location: ${$activeLocation.html()}, Price range: $${filter.priceRange.join(' - $')}`);
    this.$itemContainer.find('.item,p').remove();
    const load = Object(_index__WEBPACK_IMPORTED_MODULE_0__["loading"])(this.$itemContainer).start();
    Object(_index__WEBPACK_IMPORTED_MODULE_0__["api"])(this.siteUrl).getWorkingspacesByFilter(filter).then(res => {
      const {
        data: {
          posts
        }
      } = res;
      this.$itemContainer.append(this.workingspacesTemplate(posts));
      this.setWorkingspaces(posts);
      const locations = this.workingspaces.map(workingspace => {
        if (workingspace !== null && workingspace !== void 0 && workingspace.geolocation) return workingspace.geolocation;
      });
      this.setMapMarkers(locations);
      load.end();
    }).catch(() => {
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

  setWorkingspaces(workingspaces) {
    let newWorkingspaces = [];
    workingspaces.forEach(workingspace => {
      var _workingspace$locatio, _workingspace$locatio2;

      const minimumCapacity = Math.min.apply(Math, workingspace.capacity_list);
      const maximumCapacity = Math.max.apply(Math, workingspace.capacity_list);
      const property = {
        title: workingspace === null || workingspace === void 0 ? void 0 : workingspace.post_title,
        location: workingspace === null || workingspace === void 0 ? void 0 : (_workingspace$locatio = workingspace.location) === null || _workingspace$locatio === void 0 ? void 0 : _workingspace$locatio.place_name,
        capacity: `${minimumCapacity} - ${maximumCapacity}`,
        totalRooms: workingspace === null || workingspace === void 0 ? void 0 : workingspace.total_rooms,
        priceRange: `${workingspace.price_range.length > 1 ? workingspace.price_range.join(' - $') : workingspace.price_range[0]}/month`,
        imgSrc: workingspace === null || workingspace === void 0 ? void 0 : workingspace.featured_image,
        geolocation: workingspace === null || workingspace === void 0 ? void 0 : (_workingspace$locatio2 = workingspace.location) === null || _workingspace$locatio2 === void 0 ? void 0 : _workingspace$locatio2.location.split(',')
      };
      newWorkingspaces.push(property);
    });
    this.workingspaces = newWorkingspaces;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (WorkingspacesMaps);

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
/* harmony import */ var _assets_js_modules_frontend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../assets/js/modules/frontend */ "./assets/js/modules/frontend/index.js");



class CustomRoomsMeta {
  constructor() {
    this.$floorplanContainer = $('.floorplan-container#custom-rooms--floorplan');
    if (this.$floorplanContainer.length < 1) return;
    this.$contentContainer = this.$floorplanContainer.find('.content');
    this.$progressbar = this.$contentContainer.find('.floorplan-progressbar');
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
    const load = Object(_assets_js_modules_frontend__WEBPACK_IMPORTED_MODULE_1__["loading"])(this.$contentContainer).start();
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
    data.forEach(value => {
      var _value$capacity, _value$categories;

      template += `<div class="item" data-id="${value.ID}">
                            <a href="#">
                                ${value.featured_image}
                            </a>
                            <div class="detail">
                                <h2 class="name"><a href="#">${value === null || value === void 0 ? void 0 : value.post_title}</a></h2>
                                <div class="price">Price: <span>$${value === null || value === void 0 ? void 0 : value.room_rate}/month</span></div>
                                <div class="capacity">Capacity: <span>${(_value$capacity = value === null || value === void 0 ? void 0 : value.capacity) !== null && _value$capacity !== void 0 ? _value$capacity : 0}</span></div>
                                ${(value === null || value === void 0 ? void 0 : (_value$categories = value.categories) === null || _value$categories === void 0 ? void 0 : _value$categories.length) > 0 ? this.categoriesTemplate(value.categories) : ''}
                                <p>${value !== null && value !== void 0 && value.post_excerpt ? value === null || value === void 0 ? void 0 : value.post_excerpt : value !== null && value !== void 0 && value.post_content ? value === null || value === void 0 ? void 0 : value.post_content_trim : ''}</p>
                            </div>
                            <a class="btn visit-request" href="">Request a visit</a>
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