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
/******/ 	return __webpack_require__(__webpack_require__.s = "./inc/gutenberg/js/gutenberg.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./inc/gutenberg/js/backend/featured-posts.js":
/*!****************************************************!*\
  !*** ./inc/gutenberg/js/backend/featured-posts.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




const {
  registerBlockType
} = wp.blocks;
const __ = wp.i18n.__;
const {
  PanelBody,
  Button
} = wp.components;
const {
  InspectorControls
} = wp.blockEditor;
registerBlockType("workingspaces/featured-posts", {
  // built-in attributes
  title: "Featured Posts",
  description: "Display  posts",
  icon: "format-image",
  category: "workingspace-blocks",
  // custom attributes
  attributes: {
    searchPostName: {
      type: 'string'
    },
    postIds: {
      type: 'array'
    }
  },
  edit: editComponent,
  save: () => {
    return null;
  }
});

function editComponent(props) {
  const [posts, setPosts] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const [postCollection, setPostCollection] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const {
    attributes: {
      searchPostName,
      postIds
    }
  } = props;
  let debounceSearchTimter;
  const searchPostTitle = ['Workingspaces', 'Rooms', 'Posts'];

  function setAttributesPostName(name) {
    clearInterval(debounceSearchTimter);
    debounceSearchTimter = setTimeout(() => {
      props.setAttributes({
        searchPostName: name
      });
    }, 800);
  } // init posts display


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    async function getPosts() {
      const results = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
        path: 'wp/v2/workingspaces?per_page=4',
        method: 'GET'
      });
      const postIds = results.map(map => {
        return map.ID;
      });
      props.setAttributes({
        postIds: postIds
      });
      setPosts(results);
    }

    getPosts();
  }, []); // display posts on search name

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (!searchPostName) return;
    setPostCollection(null);

    async function getCollectionPostsByName() {
      const collections = await Promise.all([_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
        path: `wp/v2/workingspaces?search=${searchPostName}`,
        method: 'GET'
      }), _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
        path: `wp/v2/rooms?search=${searchPostName}`,
        method: 'GET'
      }), _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
        path: `wp/v2/posts?search=${searchPostName}`,
        method: 'GET'
      })]);
      setPostCollection(collections);
    }

    getCollectionPostsByName();
  }, [searchPostName]); // display post by id

  function displaySearchPostCollection() {
    if (!postCollection) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "search-posts-container"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Loading..."));
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "search-posts-container"
    }, postCollection.map((posts, i) => {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "post-container"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "title"
      }, searchPostTitle[i]), posts.map(post => {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
          className: "post"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
          src: post === null || post === void 0 ? void 0 : post.featured_image
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, post === null || post === void 0 ? void 0 : post.post_title));
      }));
    }));
  }

  if (!posts) return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Loading...");
  return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Posts Setting"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "workingspace gutenberg--inspector-controls featured-posts"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "components-base-control__field css-11vcxb9-StyledField e1puf3u1"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    class: "components-text-control__input",
    placeholder: "posts, rooms, and workingspaces",
    onChange: e => setAttributesPostName(e.target.value)
  })), searchPostName ? displaySearchPostCollection() : '', Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "post-container"
  }, posts.map(post => {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "posts"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: post.featured_image
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "action-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      id: post === null || post === void 0 ? void 0 : post.ID,
      className: "components-button is-secondary"
    }, "Replace"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      id: post === null || post === void 0 ? void 0 : post.ID,
      className: "components-button is-link is-destructive",
      onClick: e => {
        lodash__WEBPACK_IMPORTED_MODULE_3___default.a.remove(prop.attributes.postIds, postId => {
          postId === e.target.id;
        });
      }
    }, "Remove")));
  }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "workingspace gutenberg--featured-posts"
  }, posts.map(post => {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "item featured"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: post === null || post === void 0 ? void 0 : post.featured_image
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "overlay"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "detail-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h6", null, __(post === null || post === void 0 ? void 0 : post.post_title)))));
  }))];
}

/***/ }),

/***/ "./inc/gutenberg/js/gutenberg.js":
/*!***************************************!*\
  !*** ./inc/gutenberg/js/gutenberg.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_gutenberg_backend_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/gutenberg-backend.scss */ "./inc/gutenberg/scss/gutenberg-backend.scss");
/* harmony import */ var _backend_featured_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backend/featured-posts */ "./inc/gutenberg/js/backend/featured-posts.js");



/***/ }),

/***/ "./inc/gutenberg/scss/gutenberg-backend.scss":
/*!***************************************************!*\
  !*** ./inc/gutenberg/scss/gutenberg-backend.scss ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=gutenberg.js.map