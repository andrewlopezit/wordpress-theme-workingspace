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
    featuredPosts: {
      type: 'array'
    }
  },
  edit: editComponent,
  save: () => {
    return null;
  }
});

function editComponent(props) {
  var _props$attributes2, _props$attributes3, _props$attributes4, _props$attributes5;

  const [featuredPosts, setFeaturedPosts] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const [postCollection, setPostCollection] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const [searchPostName, setSearchPostName] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const [isDisplaySearchPost, setIsDisplaySearchPost] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const [isLoadingSearchPost, setIsLoadingSearchPost] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const [selectedReplaceIndex, setSelectedReplaceIndex] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(undefined);
  let debounceSearchTimter;
  const searchPostTitle = ['Workingspaces', 'Rooms', 'Posts']; // init posts display

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    var _props$attributes;

    if ((props === null || props === void 0 ? void 0 : (_props$attributes = props.attributes) === null || _props$attributes === void 0 ? void 0 : _props$attributes.featuredPosts) !== undefined) return;

    async function getPosts() {
      const results = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
        path: 'wp/v2/workingspaces?per_page=4',
        method: 'GET'
      });
      props.setAttributes({
        featuredPosts: results
      });
    }

    getPosts();
  }, []);

  function setAttributePostName(name) {
    clearInterval(debounceSearchTimter);
    setIsLoadingSearchPost(true);
    setIsDisplaySearchPost(false);
    debounceSearchTimter = setTimeout(() => {
      setSearchPostName(name);
    }, 800);
  }

  function addFeaturedPost(post) {
    setIsDisplaySearchPost(false);
    if (props.attributes.featuredPosts.length >= 4 && selectedReplaceIndex === undefined) return;

    const postsClone = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.cloneDeep(props.attributes.featuredPosts);

    if (selectedReplaceIndex !== undefined) {
      postsClone[selectedReplaceIndex] = post;
    } else {
      postsClone.push(post);
    }

    props.setAttributes({
      featuredPosts: postsClone
    });
    props.setAttributes({
      searchPostName: null
    });
    setSelectedReplaceIndex(undefined);
  }

  function removeFeaturedPost(id) {
    if (props.attributes.featuredPosts.length <= 1) return;

    const postsClone = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.cloneDeep(props.attributes.featuredPosts);

    const currentPosts = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.filter(postsClone, postClone => postClone.ID !== +id);

    props.setAttributes({
      featuredPosts: currentPosts
    });
  } // display posts on search name


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (!searchPostName) {
      setIsLoadingSearchPost(false);
      setIsDisplaySearchPost(false);
      return;
    }

    async function getCollectionPostsByName() {
      const results = await Promise.all([_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
        path: `wp/v2/workingspaces?search=${searchPostName}`,
        method: 'GET'
      }), _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
        path: `wp/v2/rooms?search=${searchPostName}`,
        method: 'GET'
      }), _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
        path: `wp/v2/posts?search=${searchPostName}`,
        method: 'GET'
      })]);
      const collectionPost = [];

      const lookup = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.keyBy(props.attributes.featuredPosts, post => {
        return post.ID;
      });

      results.forEach(result => {
        const filteredPosts = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.filter(result, result => lookup[result.ID] === undefined);

        collectionPost.push(filteredPosts);
      });
      setPostCollection(collectionPost);
      setIsLoadingSearchPost(false);
      setIsDisplaySearchPost(true);
    }

    getCollectionPostsByName();
  }, [searchPostName]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setFeaturedPosts(props.attributes.featuredPosts);
  }, [props.attributes.featuredPosts]);

  function displaySearchPostCollection() {
    if (isLoadingSearchPost) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "search-posts-container "
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Loading..."));
    }

    if (isDisplaySearchPost && postCollection) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "search-posts-container"
      }, postCollection.map((posts, i) => {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
          className: "post-container"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
          className: "title"
        }, searchPostTitle[i]), posts.map((post, postIndex) => {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
            "data-index": i,
            "data-id": post.ID,
            className: "post",
            onClick: () => addFeaturedPost(postCollection[i][postIndex])
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
            src: post === null || post === void 0 ? void 0 : post.featured_image
          }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, post === null || post === void 0 ? void 0 : post.post_title));
        }));
      }));
    }

    if (isDisplaySearchPost && !postCollection) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "search-posts-container"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "No posts to load"));
    }
  }

  if (!(props !== null && props !== void 0 && (_props$attributes2 = props.attributes) !== null && _props$attributes2 !== void 0 && _props$attributes2.featuredPosts) || (props === null || props === void 0 ? void 0 : (_props$attributes3 = props.attributes) === null || _props$attributes3 === void 0 ? void 0 : _props$attributes3.featuredPosts.length) < 1) return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Loading...");
  return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Posts Setting"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "workingspace gutenberg--inspector-controls featured-posts"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "components-base-control__field css-11vcxb9-StyledField e1puf3u1"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    class: "components-text-control__input",
    placeholder: "posts, rooms, and workingspaces",
    onChange: e => setAttributePostName(e.target.value)
  })), isLoadingSearchPost || isDisplaySearchPost ? displaySearchPostCollection() : '', Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "post-container"
  }, props === null || props === void 0 ? void 0 : (_props$attributes4 = props.attributes) === null || _props$attributes4 === void 0 ? void 0 : _props$attributes4.featuredPosts.map((post, i) => {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "posts"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: post.featured_image
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "action-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      className: "components-button is-secondary",
      onClick: e => {
        setIsDisplaySearchPost(true);
        setSelectedReplaceIndex(i);
      }
    }, "Replace"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      "data-id": post === null || post === void 0 ? void 0 : post.ID,
      className: "components-button is-link is-destructive",
      onClick: e => {
        removeFeaturedPost(e.target.getAttribute('data-id'));
      }
    }, "Remove")));
  }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "workingspace gutenberg--featured-posts"
  }, props === null || props === void 0 ? void 0 : (_props$attributes5 = props.attributes) === null || _props$attributes5 === void 0 ? void 0 : _props$attributes5.featuredPosts.map(post => {
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
/* harmony import */ var _scss_back_end_gutenberg_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/back-end/gutenberg.scss */ "./inc/gutenberg/scss/back-end/gutenberg.scss");
/* harmony import */ var _backend_featured_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backend/featured-posts */ "./inc/gutenberg/js/backend/featured-posts.js");



/***/ }),

/***/ "./inc/gutenberg/scss/back-end/gutenberg.scss":
/*!****************************************************!*\
  !*** ./inc/gutenberg/scss/back-end/gutenberg.scss ***!
  \****************************************************/
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