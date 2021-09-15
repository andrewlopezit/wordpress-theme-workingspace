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

/***/ "./inc/gutenberg/js/backend/components.js":
/*!************************************************!*\
  !*** ./inc/gutenberg/js/backend/components.js ***!
  \************************************************/
/*! exports provided: MarginControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarginControl", function() { return MarginControl; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const MarginControl = ({
  value,
  onChange
}) => {
  const [margin, setMargin] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(value !== null && value !== void 0 ? value : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    onChange(margin);
  }, [margin]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "workingspace gutenberg-components--margin-control"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "margin-container top"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "label"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["__experimentalNumberControl"], {
    isShiftStepEnabled: true,
    onChange: value => setMargin({ ...margin,
      top: +value
    }),
    shiftStep: 1,
    value: margin === null || margin === void 0 ? void 0 : margin.top
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "margin-container right"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "label"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["__experimentalNumberControl"], {
    isShiftStepEnabled: true,
    onChange: value => setMargin({ ...margin,
      right: +value
    }),
    shiftStep: 1,
    value: margin === null || margin === void 0 ? void 0 : margin.right
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "margin-container bottom"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "label"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["__experimentalNumberControl"], {
    isShiftStepEnabled: true,
    onChange: value => setMargin({ ...margin,
      bottom: +value
    }),
    shiftStep: 1,
    value: margin === null || margin === void 0 ? void 0 : margin.bottom
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "margin-container left"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "label"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["__experimentalNumberControl"], {
    isShiftStepEnabled: true,
    onChange: value => setMargin({ ...margin,
      left: +value
    }),
    shiftStep: 1,
    value: margin === null || margin === void 0 ? void 0 : margin.left
  }))));
};



/***/ }),

/***/ "./inc/gutenberg/js/backend/featured-posts-block.js":
/*!**********************************************************!*\
  !*** ./inc/gutenberg/js/backend/featured-posts-block.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);








Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["registerBlockType"])("workingspaces/featured-posts", {
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

  const [featuredPosts, setFeaturedPosts] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('');
  const [postCollection, setPostCollection] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('');
  const [searchPostName, setSearchPostName] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('');
  const [isDisplaySearchPost, setIsDisplaySearchPost] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('');
  const [isLoadingSearchPost, setIsLoadingSearchPost] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('');
  const [selectedReplaceIndex, setSelectedReplaceIndex] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(undefined);
  let debounceSearchTimter;
  const searchPostTitle = ['Workingspaces', 'Rooms', 'Posts']; // init posts display

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
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

    const postsClone = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(props.attributes.featuredPosts);

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

    const postsClone = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(props.attributes.featuredPosts);

    const currentPosts = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.filter(postsClone, postClone => postClone.ID !== +id);

    props.setAttributes({
      featuredPosts: currentPosts
    });
  } // display posts on search name


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
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

      const lookup = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.keyBy(props.attributes.featuredPosts, post => {
        return post.ID;
      });

      results.forEach(result => {
        const filteredPosts = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.filter(result, result => lookup[result.ID] === undefined);

        collectionPost.push(filteredPosts);
      });
      setPostCollection(collectionPost);
      setIsLoadingSearchPost(false);
      setIsDisplaySearchPost(true);
    }

    getCollectionPostsByName();
  }, [searchPostName]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
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
            onClick: e => {
              addFeaturedPost(postCollection[i][postIndex]);
              e.currentTarget.remove();
            }
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
  return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
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
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      className: "components-button is-secondary",
      onClick: e => {
        setIsDisplaySearchPost(true);
        setSelectedReplaceIndex(i);
      }
    }, "Replace"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
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
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h6", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])(post === null || post === void 0 ? void 0 : post.post_title)))));
  }))];
}

/***/ }),

/***/ "./inc/gutenberg/js/backend/icon-block.js":
/*!************************************************!*\
  !*** ./inc/gutenberg/js/backend/icon-block.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./inc/gutenberg/js/backend/icon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);






/**
 * This blocks intendted for svg file tpye only
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__["registerBlockType"])("workingspaces/icons", {
  // built-in attributes
  title: "Icons",
  description: "",
  icon: "format-image",
  category: "workingspace-blocks",
  // custom attributes
  attributes: {
    slug: {
      type: 'string'
    },
    size: {
      type: 'number'
    },
    color: {
      type: 'string'
    },
    align: {
      type: 'string'
    }
  },
  edit: editComponent,
  save: () => {
    return null;
  }
});

function editComponent(props) {
  var _props$attributes, _props$attributes3, _props$attributes4, _props$attributes5, _props$attributes6;

  const [icon, setIcon] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])((_props$attributes = props === null || props === void 0 ? void 0 : props.attributes) !== null && _props$attributes !== void 0 ? _props$attributes : '');
  const iconListProp = [{
    slug: 'mission'
  }, {
    slug: 'group'
  }, {
    slug: 'work-station'
  }, {
    slug: 'pin'
  }, {
    slug: 'flag'
  }, {
    slug: 'support'
  }, {
    slug: 'medal'
  }];
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    var _props$attributes2;

    if (props !== null && props !== void 0 && (_props$attributes2 = props.attributes) !== null && _props$attributes2 !== void 0 && _props$attributes2.slug) return;
    setIcon({
      slug: 'mission',
      color: '#000',
      size: 50,
      align: 'left'
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    props.setAttributes(icon);
  }, [icon]);
  if (!(props !== null && props !== void 0 && (_props$attributes3 = props.attributes) !== null && _props$attributes3 !== void 0 && _props$attributes3.slug)) return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Loading...");
  return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["AlignmentToolbar"], {
    value: props === null || props === void 0 ? void 0 : (_props$attributes4 = props.attributes) === null || _props$attributes4 === void 0 ? void 0 : _props$attributes4.align,
    onChange: value => setIcon({ ...(props === null || props === void 0 ? void 0 : props.attributes),
      align: value
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: "Icons",
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], {
    className: "workingspace gutenberg--inspector-controls icons-list"
  }, iconListProp.map(prop => {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "icon-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onClick: value => setIcon({ ...(props === null || props === void 0 ? void 0 : props.attributes),
        slug: value
      }),
      data: prop
    }));
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: "Color",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
    label: "Icon color"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
    value: props === null || props === void 0 ? void 0 : (_props$attributes5 = props.attributes) === null || _props$attributes5 === void 0 ? void 0 : _props$attributes5.color,
    onChange: value => setIcon({ ...(props === null || props === void 0 ? void 0 : props.attributes),
      color: value
    })
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: "Size",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: "Icon size in pixels",
    value: props === null || props === void 0 ? void 0 : (_props$attributes6 = props.attributes) === null || _props$attributes6 === void 0 ? void 0 : _props$attributes6.size,
    onChange: value => setIcon({ ...(props === null || props === void 0 ? void 0 : props.attributes),
      size: value
    }),
    min: 50,
    max: 300
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: props === null || props === void 0 ? void 0 : props.attributes
  })];
}

/***/ }),

/***/ "./inc/gutenberg/js/backend/icon.js":
/*!******************************************!*\
  !*** ./inc/gutenberg/js/backend/icon.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const Icon = ({
  onClick = null,
  data
}) => {
  function handleOnClick(value) {
    if (!onClick) return;
    onClick(value);
  }

  function getIcon() {
    switch (data.slug) {
      case 'mission':
        {
          var _data$size, _data$size2, _data$color;

          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            className: `workingspace gutenberg--icon ${data === null || data === void 0 ? void 0 : data.align}`,
            width: (_data$size = data === null || data === void 0 ? void 0 : data.size) !== null && _data$size !== void 0 ? _data$size : 50,
            height: (_data$size2 = data === null || data === void 0 ? void 0 : data.size) !== null && _data$size2 !== void 0 ? _data$size2 : 50,
            onClick: () => handleOnClick('mission')
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
            id: "Out_line",
            "data-name": "Out line"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
            fill: (_data$color = data === null || data === void 0 ? void 0 : data.color) !== null && _data$color !== void 0 ? _data$color : '#000',
            d: "M296,195.31445l30.34277,30.34278a25.0004,25.0004,0,0,0,35.31446,0l84-84a8.00122,8.00122,0,0,0,0-11.31446l-112-112a8.003,8.003,0,0,0-11.31446,0L264,76.68555,233.65723,46.34277a25.00276,25.00276,0,0,0-35.31446,0L120,124.68555l-18.34277-18.34278a8.003,8.003,0,0,0-11.31446,0l-24,24a8.00122,8.00122,0,0,0,0,11.31446L220.68555,296l-10.34278,10.34277A8.00235,8.00235,0,0,0,208,312v44.68652l-7.99976,7.99927-2.343-2.343a8.003,8.003,0,0,0-11.31446,0l-120,120,11.31446,11.31446L192,379.31348,268.68652,456l-26.34375,26.34277,11.31446,11.31446,32-32a8.00122,8.00122,0,0,0,0-11.31446L275.31445,440,320,395.31445l74.34277,74.34278a8.00181,8.00181,0,0,0,11.31446,0l24-24a8.00122,8.00122,0,0,0,0-11.31446L355.31445,360l10.34278-10.34277a8.00122,8.00122,0,0,0,0-11.31446l-64-64a8.003,8.003,0,0,0-11.31446,0l-.70117.70118a41.62174,41.62174,0,0,0-11.98437-24.70118,8.003,8.003,0,0,0-11.31446,0L256,260.68555,243.31445,248Zm38.34277-12.97168-8,8a24.835,24.835,0,0,0-5.15942,7.52613L307.31445,184l14.34278-14.34277a8.97,8.97,0,0,1,12.68554,12.68554ZM328,35.31348,428.68652,136l-78.34375,78.34277a8.97,8.97,0,0,1-12.68554-12.68554l8-8a24.97439,24.97439,0,0,0,0-35.31446L275.31445,88ZM209.65723,57.65723a8.979,8.979,0,0,1,12.68554,0l95.52149,95.5205a24.86107,24.86107,0,0,0-7.52149,5.165L208,260.68555,107.314,160.00049ZM96,123.31348,108.68555,136l-12.686,12.686L83.31348,136ZM412.68652,440,400,452.68652,331.31445,384,344,371.31445ZM296,291.31348,348.68652,344,320,372.68652,267.31348,320l10.34326-10.34326.00049.00049.01953-.02051Zm-24.88477-23.11524a25.981,25.981,0,0,1-4.77246,30.14453l-16,16a8.00122,8.00122,0,0,0,0,11.31446,37.29483,37.29483,0,0,1,0,52.68554l11.31446,11.31446a53.07235,53.07235,0,0,0,15.56006-37.12549L308.68555,384,264,428.68555,211.31445,376l10.34278-10.34277A8.00235,8.00235,0,0,0,224,360V315.31348ZM244.68555,272,232,284.68555,219.31445,272,232,259.31445Z"
          })));
        }

      case 'group':
        {
          var _data$size3, _data$size4, _data$color2;

          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            className: `workingspace gutenberg--icon ${data === null || data === void 0 ? void 0 : data.align}`,
            width: (_data$size3 = data === null || data === void 0 ? void 0 : data.size) !== null && _data$size3 !== void 0 ? _data$size3 : 50,
            height: (_data$size4 = data === null || data === void 0 ? void 0 : data.size) !== null && _data$size4 !== void 0 ? _data$size4 : 50,
            onClick: () => handleOnClick('group')
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
            fill: (_data$color2 = data === null || data === void 0 ? void 0 : data.color) !== null && _data$color2 !== void 0 ? _data$color2 : '#000',
            d: "M437.1,233.45c14.8-10.4,24.6-27.7,24.6-47.2c0-31.9-25.8-57.7-57.7-57.7c-31.9,0-57.7,25.8-57.7,57.7 c0,19.5,9.7,36.8,24.6,47.2c-12.7,4.4-24.3,11.2-34.1,20c-13.5-11.5-29.4-20.3-46.8-25.5c21.1-12.8,35.3-36.1,35.3-62.6 c0-40.4-32.7-73.1-73.1-73.1c-40.4,0-73.1,32.8-73.1,73.1c0,26.5,14.1,49.8,35.3,62.6c-17.2,5.2-32.9,13.9-46.3,25.2 c-9.8-8.6-21.2-15.3-33.7-19.6c14.8-10.4,24.6-27.7,24.6-47.2c0-31.9-25.8-57.7-57.7-57.7s-57.7,25.8-57.7,57.7 c0,19.5,9.7,36.8,24.6,47.2C28.5,247.25,0,284.95,0,329.25v6.6c0,0.2,0.2,0.4,0.4,0.4h122.3c-0.7,5.5-1.1,11.2-1.1,16.9v6.8 c0,29.4,23.8,53.2,53.2,53.2h155c29.4,0,53.2-23.8,53.2-53.2v-6.8c0-5.7-0.4-11.4-1.1-16.9H505c0.2,0,0.4-0.2,0.4-0.4v-6.6 C505.2,284.85,476.8,247.15,437.1,233.45z M362.3,186.15c0-23,18.7-41.7,41.7-41.7s41.7,18.7,41.7,41.7 c0,22.7-18.3,41.2-40.9,41.7c-0.3,0-0.5,0-0.8,0s-0.5,0-0.8,0C380.5,227.45,362.3,208.95,362.3,186.15z M194.9,165.35 c0-31.5,25.6-57.1,57.1-57.1s57.1,25.6,57.1,57.1c0,30.4-23.9,55.3-53.8,57c-1.1,0-2.2,0-3.3,0c-1.1,0-2.2,0-3.3,0 C218.8,220.65,194.9,195.75,194.9,165.35z M59.3,186.15c0-23,18.7-41.7,41.7-41.7s41.7,18.7,41.7,41.7c0,22.7-18.3,41.2-40.9,41.7 c-0.3,0-0.5,0-0.8,0s-0.5,0-0.8,0C77.6,227.45,59.3,208.95,59.3,186.15z M125.5,320.15H16.2c4.5-42.6,40.5-76,84.2-76.3 c0.2,0,0.4,0,0.6,0s0.4,0,0.6,0c20.8,0.1,39.8,7.8,54.5,20.3C141.7,279.75,131,298.95,125.5,320.15z M366.8,359.95 c0,20.5-16.7,37.2-37.2,37.2h-155c-20.5,0-37.2-16.7-37.2-37.2v-6.8c0-62.1,49.6-112.9,111.3-114.7c1.1,0.1,2.3,0.1,3.4,0.1 s2.3,0,3.4-0.1c61.7,1.8,111.3,52.6,111.3,114.7V359.95z M378.7,320.15c-5.5-21.1-16-40-30.3-55.6c14.8-12.8,34-20.5,55-20.7 c0.2,0,0.4,0,0.6,0s0.4,0,0.6,0c43.7,0.3,79.7,33.7,84.2,76.3H378.7z"
          })));
        }

      case 'work-station':
        {
          var _data$size5, _data$size6, _data$color3, _data$color4, _data$color5;

          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
            id: "Layer_2",
            viewBox: "0 0 512 512",
            xmlns: "http://www.w3.org/2000/svg",
            "data-name": "Layer 2",
            className: `workingspace gutenberg--icon ${data === null || data === void 0 ? void 0 : data.align}`,
            width: (_data$size5 = data === null || data === void 0 ? void 0 : data.size) !== null && _data$size5 !== void 0 ? _data$size5 : 50,
            height: (_data$size6 = data === null || data === void 0 ? void 0 : data.size) !== null && _data$size6 !== void 0 ? _data$size6 : 50,
            onClick: () => handleOnClick('work-station')
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
            fill: (_data$color3 = data === null || data === void 0 ? void 0 : data.color) !== null && _data$color3 !== void 0 ? _data$color3 : '#000',
            d: "m504 272h-96v-32h56a8 8 0 0 0 8-8v-128a8 8 0 0 0 -8-8h-160a8 8 0 0 0 -8 8v128a8 8 0 0 0 8 8h56v32h-80v-40a24.027 24.027 0 0 0 -24-24h-96a24.027 24.027 0 0 0 -24 24v40h-16v-64a8 8 0 0 0 -8-8h-80a8 8 0 0 0 -8 8v64h-16a8 8 0 0 0 -8 8v40a8 8 0 0 0 8 8h61.645l-45.386 173.98 15.482 4.039 39.552-151.614 32.89 151.295 15.635-3.4-37.892-174.3h46.074v16a24.027 24.027 0 0 0 24 24h40v8h-56a8 8 0 0 0 -8 8v24a8 8 0 0 0 8 8h56v56h-48a8 8 0 0 0 -8 8v32h16v-24h96v24h16v-32a8 8 0 0 0 -8-8h-48v-56h56a8 8 0 0 0 8-8v-24a8 8 0 0 0 -8-8h-56v-8h40a24.027 24.027 0 0 0 24-24v-16h124.645l-45.386 173.98 15.482 4.039 39.552-151.614 32.89 151.295 15.635-3.4-37.892-174.3h79.074a8 8 0 0 0 8-8v-40a8 8 0 0 0 -8-8zm-240 128h-112v-8h112zm192-288v80h-144v-80zm-144 96h144v16h-144zm64 32h16v32h-16zm-272-24v16h-64v-16zm-64 32h64v24h-64zm-24 64v-24h120v24zm248 32a8.009 8.009 0 0 1 -8 8h-96a8.009 8.009 0 0 1 -8-8v-112a8.009 8.009 0 0 1 8-8h96a8.009 8.009 0 0 1 8 8zm232-32h-216v-24h216z"
          }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
            fill: (_data$color4 = data === null || data === void 0 ? void 0 : data.color) !== null && _data$color4 !== void 0 ? _data$color4 : '#000',
            d: "m108 168a84 84 0 1 0 -84-84 84.1 84.1 0 0 0 84 84zm0-152a68 68 0 1 1 -68 68 68.077 68.077 0 0 1 68-68z"
          }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
            fill: (_data$color5 = data === null || data === void 0 ? void 0 : data.color) !== null && _data$color5 !== void 0 ? _data$color5 : '#000',
            d: "m108 92h44v-16h-40.687l-25.656-25.657-11.314 11.314 28 28a8 8 0 0 0 5.657 2.343z"
          }));
        }

      case 'pin':
        {
          var _data$size7, _data$size8, _data$color6, _data$color7;

          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
            id: "Layer_2",
            viewBox: "0 0 512 512",
            xmlns: "http://www.w3.org/2000/svg",
            "data-name": "Layer 2",
            className: `workingspace gutenberg--icon ${data === null || data === void 0 ? void 0 : data.align}`,
            width: (_data$size7 = data === null || data === void 0 ? void 0 : data.size) !== null && _data$size7 !== void 0 ? _data$size7 : 50,
            height: (_data$size8 = data === null || data === void 0 ? void 0 : data.size) !== null && _data$size8 !== void 0 ? _data$size8 : 50,
            onClick: () => handleOnClick('pin')
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
            fill: (_data$color6 = data === null || data === void 0 ? void 0 : data.color) !== null && _data$color6 !== void 0 ? _data$color6 : '#000',
            d: "M184.08,0c-74.992,0-136,61.008-136,136c0,24.688,11.072,51.24,11.536,52.36c3.576,8.488,10.632,21.672,15.72,29.4 l93.248,141.288c3.816,5.792,9.464,9.112,15.496,9.112s11.68-3.32,15.496-9.104l93.256-141.296 c5.096-7.728,12.144-20.912,15.72-29.4c0.464-1.112,11.528-27.664,11.528-52.36C320.08,61.008,259.072,0,184.08,0z M293.8,182.152c-3.192,7.608-9.76,19.872-14.328,26.8l-93.256,141.296c-1.84,2.792-2.424,2.792-4.264,0L88.696,208.952 c-4.568-6.928-11.136-19.2-14.328-26.808C74.232,181.816,64.08,157.376,64.08,136c0-66.168,53.832-120,120-120 c66.168,0,120,53.832,120,120C304.08,157.408,293.904,181.912,293.8,182.152z"
          }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
            fill: (_data$color7 = data === null || data === void 0 ? void 0 : data.color) !== null && _data$color7 !== void 0 ? _data$color7 : '#000',
            d: "M184.08,64.008c-39.704,0-72,32.304-72,72c0,39.696,32.296,72,72,72c39.704,0,72-32.304,72-72 C256.08,96.312,223.784,64.008,184.08,64.008z M184.08,192.008c-30.872,0-56-25.12-56-56s25.128-56,56-56s56,25.12,56,56 S214.952,192.008,184.08,192.008z"
          }))));
        }

      case 'flag':
        {
          var _data$size9, _data$size10, _data$color8;

          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
            id: "Layer_1",
            "enable-background": "new 0 0 512 512",
            viewBox: "0 0 512 512",
            xmlns: "http://www.w3.org/2000/svg",
            className: `workingspace gutenberg--icon ${data === null || data === void 0 ? void 0 : data.align}`,
            width: (_data$size9 = data === null || data === void 0 ? void 0 : data.size) !== null && _data$size9 !== void 0 ? _data$size9 : 50,
            height: (_data$size10 = data === null || data === void 0 ? void 0 : data.size) !== null && _data$size10 !== void 0 ? _data$size10 : 50,
            onClick: () => handleOnClick('flag')
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
            fill: (_data$color8 = data === null || data === void 0 ? void 0 : data.color) !== null && _data$color8 !== void 0 ? _data$color8 : '#000',
            d: "m478.91 315.969-51.297-87.938c-1.45-2.486-1.45-5.574 0-8.061l51.297-87.938c.984-1.688 1.279-3.585.975-5.372 1.24-12.291-8.468-22.66-20.479-22.66h-123.406v-40c0-13.233-10.767-24-24-24h-216v-8c0-17.645-14.355-32-32-32s-32 14.355-32 32v472c0 4.418 3.582 8 8 8s8-3.582 8-8v-472c0-8.822 7.178-16 16-16s16 7.178 16 16v472c0 4.418 3.582 8 8 8s8-3.582 8-8v-224h128v40c0 13.233 10.767 24 24 24h211.405c12.021 0 21.718-10.381 20.479-22.66.306-1.786.011-3.684-.974-5.371zm-382.91-259.969h216c4.411 0 8 3.589 8 8v200h-224zm144 224h62.621c-64.69 45.283-60.267 41.793-61.54 43.998-1.52-2.621-1.081-1.07-1.081-43.998zm219.406 48h-197.456l70.638-49.446c1.639-1.148 2.871-2.955 3.269-5.068.223-1.177.143 8.745.143-153.486h123.405c3.53 0 5.754 3.847 3.969 6.91l-49.581 84.997c-4.352 7.459-4.352 16.727 0 24.186 53.653 91.977 50.207 85.415 50.207 87.312 0 2.533-2.061 4.595-4.594 4.595z"
          })));
        }

      case 'support':
        {
          var _data$size11, _data$size12, _data$color9, _data$color10, _data$color11;

          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
            id: "Layer_1",
            "enable-background": "new 0 0 512 512",
            viewBox: "0 0 512 512",
            xmlns: "http://www.w3.org/2000/svg",
            className: `workingspace gutenberg--icon ${data === null || data === void 0 ? void 0 : data.align}`,
            width: (_data$size11 = data === null || data === void 0 ? void 0 : data.size) !== null && _data$size11 !== void 0 ? _data$size11 : 50,
            height: (_data$size12 = data === null || data === void 0 ? void 0 : data.size) !== null && _data$size12 !== void 0 ? _data$size12 : 50,
            onClick: () => handleOnClick('support')
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
            fill: (_data$color9 = data === null || data === void 0 ? void 0 : data.color) !== null && _data$color9 !== void 0 ? _data$color9 : '#000',
            d: "M366,396c-5.52,0-10,4.48-10,10c0,5.52,4.48,10,10,10c5.52,0,10-4.48,10-10C376,400.48,371.52,396,366,396z"
          })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
            fill: (_data$color10 = data === null || data === void 0 ? void 0 : data.color) !== null && _data$color10 !== void 0 ? _data$color10 : '#000',
            d: "M390.622,363.663l-47.53-15.84l-17.063-34.127c15.372-15.646,26.045-36.348,29.644-57.941L357.801,243H376 c16.542,0,30-13.458,30-30v-63C406,67.29,338.71,0,256,0c-82.922,0-150,67.097-150,150v63c0,13.036,8.361,24.152,20,28.28V253 c0,16.542,13.458,30,30,30h8.782c4.335,9.417,9.946,18.139,16.774,25.974c1.416,1.628,2.893,3.206,4.406,4.741l-17.054,34.108 l-47.531,15.841C66.112,382.092,26,440.271,26,502c0,5.523,4.477,10,10,10h440c5.522,0,10-4.477,10-10 C486,440.271,445.889,382.092,390.622,363.663z M386,213c0,5.514-4.486,10-10,10h-15.262c2.542-19.69,4.236-40.643,4.917-61.28 c0.02-0.582,0.036-1.148,0.054-1.72H386V213z M136,223c-5.514,0-10-4.486-10-10v-53h20.298c0.033,1.043,0.068,2.091,0.107,3.146 c0.001,0.036,0.003,0.071,0.004,0.107c0,0.003,0,0.006,0,0.009c0.7,20.072,2.372,40.481,4.856,59.737H136V223z M156,263 c-5.514,0-10-4.486-10-10v-10h8.198l2.128,12.759c0.406,2.425,0.905,4.841,1.482,7.241H156z M146.017,140H126.38 C131.445,72.979,187.377,20,256,20c68.318,0,124.496,52.972,129.619,120h-19.635c-0.72-55.227-45.693-100-101.033-100h-17.9 C191.712,40,146.736,84.773,146.017,140z M247.05,60h17.9c44.809,0,81.076,36.651,81.05,81.41c0,3.147-0.025,5.887-0.078,8.38 c0,0.032-0.001,0.065-0.001,0.098l-12.508-1.787c-33.98-4.852-66.064-20.894-90.342-45.172C241.195,101.054,238.652,100,236,100 c-26.856,0-52.564,12.236-69.558,32.908C170.63,92.189,205.053,60,247.05,60z M178.54,263c-5.006-16.653-10.734-65.653-12-97.053 l13.459-17.946c12.361-16.476,31.592-26.713,52.049-27.888c26.917,25.616,61.739,42.532,98.537,47.786l14.722,2.104 c-0.984,20.885-2.995,41.843-5.876,61.118c-0.001,0.006-0.002,0.013-0.003,0.02c-0.916,6.197-1.638,10.185-3.482,21.324 c-5.296,31.765-28.998,60.49-60.287,68.313c-12.877,3.215-26.443,3.214-39.313,0c-19.537-4.884-37.451-18.402-49.012-37.778 h20.386c4.128,11.639,15.243,20,28.28,20h20c16.575,0,30-13.424,30-30c0-16.542-13.458-30-30-30h-20 c-13.327,0-24.278,8.608-28.297,20H178.54z M235.159,341.016c6.859,1.445,13.852,2.184,20.841,2.184 c5.471,0,10.943-0.458,16.353-1.346l-17.67,18.687L235.159,341.016z M240.935,375.079l-31.718,33.542 c-8.732-16.714-16.235-34.109-22.389-51.917l11.911-23.822L240.935,375.079z M311.566,329.494l13.604,27.209 c-6.164,17.838-13.669,35.239-22.392,51.933l-33.948-33.948L311.566,329.494z M226,273c0-5.521,4.478-10,10-10h20 c5.514,0,10,4.486,10,10c0,5.522-4.479,10-10,10h-20C230.486,283,226,278.514,226,273z M46.4,492 c3.963-49.539,36.932-94.567,81.302-109.363l42.094-14.028c7.712,21.325,17.266,42.052,28.463,61.74 c0.019,0.034,0.037,0.068,0.056,0.101c0,0.001,0.001,0.001,0.001,0.002c8.181,14.389,17.389,28.45,27.372,41.799L237.99,492H46.4z M256,483.086l-13.562-21.773c-0.152-0.244-0.314-0.481-0.486-0.711c-8.098-10.802-15.652-22.099-22.532-33.662l35.663-37.714 l37.578,37.578c-6.926,11.647-14.506,22.991-22.611,33.796C269.56,461.253,270.255,460.224,256,483.086z M274.01,492 l12.301-19.748c10.027-13.4,19.301-27.574,27.564-42.132c0.05-0.088,0.097-0.178,0.147-0.266c0.006-0.011,0.012-0.021,0.018-0.032 c11.055-19.5,20.509-40.047,28.164-61.213l42.093,14.028c44.371,14.796,77.34,59.824,81.303,109.363H274.01z"
          })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
            fill: (_data$color11 = data === null || data === void 0 ? void 0 : data.color) !== null && _data$color11 !== void 0 ? _data$color11 : '#000',
            d: "M435.546,451.531c-6.683-13.377-16.472-25.261-28.309-34.367c-4.378-3.369-10.656-2.55-14.023,1.828 c-3.368,4.378-2.549,10.656,1.828,14.024c9.454,7.273,17.272,16.766,22.611,27.453c2.473,4.949,8.483,6.941,13.415,4.477 C436.008,462.478,438.013,456.472,435.546,451.531z"
          })));
        }

      case 'medal':
        {
          var _data$size13, _data$size14, _data$color12, _data$color13, _data$color14, _data$color15, _data$color16;

          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            id: "Icons",
            viewBox: "0 0 74 74",
            className: `workingspace gutenberg--icon ${data === null || data === void 0 ? void 0 : data.align}`,
            width: (_data$size13 = data === null || data === void 0 ? void 0 : data.size) !== null && _data$size13 !== void 0 ? _data$size13 : 50,
            height: (_data$size14 = data === null || data === void 0 ? void 0 : data.size) !== null && _data$size14 !== void 0 ? _data$size14 : 50,
            onClick: () => handleOnClick('medal')
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
            fill: (_data$color12 = data === null || data === void 0 ? void 0 : data.color) !== null && _data$color12 !== void 0 ? _data$color12 : '#000',
            d: "M27.1,72h-.014a1,1,0,0,1-.912-.622l-3.221-7.89-7.742,3.533a1,1,0,0,1-1.33-1.314L22.31,46.636a1,1,0,0,1,1.83.809L16.776,64.109l6.3-2.873a1,1,0,0,1,1.341.532l2.725,6.673,7.9-17.915a1,1,0,0,1,1.83.807L28.018,71.4A1,1,0,0,1,27.1,72Z"
          }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
            fill: (_data$color13 = data === null || data === void 0 ? void 0 : data.color) !== null && _data$color13 !== void 0 ? _data$color13 : '#000',
            d: "M31.1,53.436a3.654,3.654,0,0,1-.957-.123c-1.493-.4-2.491-1.7-3.372-2.85a7.381,7.381,0,0,0-1.8-1.9,7.511,7.511,0,0,0-2.6-.634c-1.49-.2-3.031-.406-4.1-1.477s-1.279-2.614-1.478-4.105a7.556,7.556,0,0,0-.634-2.595,7.431,7.431,0,0,0-1.9-1.8c-1.15-.881-2.452-1.879-2.851-3.371-.383-1.433.2-2.855.768-4.229a7.657,7.657,0,0,0,.764-2.629,7.658,7.658,0,0,0-.764-2.628c-.566-1.374-1.151-2.8-.768-4.229.4-1.492,1.7-2.49,2.851-3.371a7.416,7.416,0,0,0,1.9-1.806,7.522,7.522,0,0,0,.633-2.594c.2-1.491.4-3.032,1.478-4.1s2.613-1.278,4.1-1.478a7.511,7.511,0,0,0,2.6-.634,7.408,7.408,0,0,0,1.8-1.9c.88-1.15,1.879-2.452,3.371-2.851,1.433-.387,2.855.2,4.229.768A7.659,7.659,0,0,0,37,3.653a7.659,7.659,0,0,0,2.629-.763c1.374-.566,2.8-1.152,4.228-.769,1.493.4,2.491,1.7,3.372,2.851a7.4,7.4,0,0,0,1.8,1.9,7.489,7.489,0,0,0,2.595.633c1.49.2,3.031.406,4.1,1.478s1.279,2.614,1.478,4.1a7.55,7.55,0,0,0,.634,2.6,7.4,7.4,0,0,0,1.9,1.8c1.15.881,2.452,1.88,2.851,3.371.383,1.434-.2,2.855-.768,4.23a7.658,7.658,0,0,0-.764,2.628,7.646,7.646,0,0,0,.764,2.628c.566,1.375,1.151,2.8.768,4.23-.4,1.491-1.7,2.49-2.851,3.371a7.4,7.4,0,0,0-1.9,1.8,7.534,7.534,0,0,0-.633,2.594c-.2,1.491-.405,3.033-1.478,4.105s-2.613,1.278-4.1,1.477a7.509,7.509,0,0,0-2.595.635,7.408,7.408,0,0,0-1.8,1.9c-.88,1.149-1.879,2.452-3.371,2.851-1.435.385-2.855-.2-4.229-.768A7.637,7.637,0,0,0,37,51.782a7.637,7.637,0,0,0-2.629.763A8.88,8.88,0,0,1,31.1,53.436ZM31.1,4a1.708,1.708,0,0,0-.441.054c-.835.223-1.547,1.152-2.3,2.135A8.85,8.85,0,0,1,25.968,8.6a8.969,8.969,0,0,1-3.332.885,5.413,5.413,0,0,0-2.955.91,5.4,5.4,0,0,0-.91,2.955,8.977,8.977,0,0,1-.884,3.331,8.858,8.858,0,0,1-2.416,2.391c-.983.754-1.911,1.466-2.135,2.3a5.366,5.366,0,0,0,.685,2.951,9.111,9.111,0,0,1,.915,3.39,9.1,9.1,0,0,1-.915,3.39,5.362,5.362,0,0,0-.685,2.952c.224.835,1.152,1.546,2.135,2.3a8.858,8.858,0,0,1,2.416,2.391,8.958,8.958,0,0,1,.884,3.331,5.419,5.419,0,0,0,.911,2.956,5.41,5.41,0,0,0,2.955.909,8.964,8.964,0,0,1,3.331.885,8.812,8.812,0,0,1,2.39,2.416c.754.982,1.466,1.911,2.3,2.134a5.386,5.386,0,0,0,2.95-.685A9.115,9.115,0,0,1,37,49.782a9.115,9.115,0,0,1,3.391.914,5.345,5.345,0,0,0,2.951.685c.835-.223,1.547-1.152,2.3-2.135a8.836,8.836,0,0,1,2.39-2.415,8.97,8.97,0,0,1,3.332-.886,5.4,5.4,0,0,0,2.955-.909,5.407,5.407,0,0,0,.91-2.955,8.972,8.972,0,0,1,.884-3.331,8.847,8.847,0,0,1,2.416-2.392c.983-.754,1.911-1.465,2.135-2.3a5.366,5.366,0,0,0-.685-2.951,9.1,9.1,0,0,1-.915-3.39,9.111,9.111,0,0,1,.915-3.39,5.357,5.357,0,0,0,.685-2.951c-.224-.835-1.152-1.546-2.135-2.3a8.858,8.858,0,0,1-2.416-2.391,8.963,8.963,0,0,1-.884-3.331,5.416,5.416,0,0,0-.911-2.956,5.4,5.4,0,0,0-2.955-.909A8.983,8.983,0,0,1,48.032,8.6a8.84,8.84,0,0,1-2.39-2.416c-.754-.983-1.466-1.911-2.3-2.135a5.369,5.369,0,0,0-2.95.686A9.134,9.134,0,0,1,37,5.653a9.134,9.134,0,0,1-3.391-.914A7.471,7.471,0,0,0,31.1,4Z"
          }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
            fill: (_data$color14 = data === null || data === void 0 ? void 0 : data.color) !== null && _data$color14 !== void 0 ? _data$color14 : '#000',
            d: "M37,44.784A17.067,17.067,0,1,1,54.066,27.717,17.086,17.086,0,0,1,37,44.784Zm0-32.133A15.067,15.067,0,1,0,52.066,27.717,15.083,15.083,0,0,0,37,12.651Z"
          }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
            fill: (_data$color15 = data === null || data === void 0 ? void 0 : data.color) !== null && _data$color15 !== void 0 ? _data$color15 : '#000',
            d: "M46.9,72a1,1,0,0,1-.915-.6L37.129,51.333a1,1,0,0,1,1.83-.807l7.9,17.915,2.725-6.673a1,1,0,0,1,1.341-.532l6.3,2.873L49.86,47.445a1,1,0,0,1,1.83-.809l8.426,19.071a1,1,0,0,1-1.33,1.314l-7.742-3.533-3.221,7.89a1,1,0,0,1-.912.622Z"
          }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
            fill: (_data$color16 = data === null || data === void 0 ? void 0 : data.color) !== null && _data$color16 !== void 0 ? _data$color16 : '#000',
            d: "M42.47,36.625a.994.994,0,0,1-.465-.115L37,33.879,32,36.51a1,1,0,0,1-1.45-1.054l.956-5.572-4.049-3.947a1,1,0,0,1,.555-1.706l5.595-.812,2.5-5.07a1.041,1.041,0,0,1,1.792,0l2.5,5.07,5.595.812a1,1,0,0,1,.555,1.706L42.5,29.884l.956,5.572a1,1,0,0,1-.985,1.169ZM37,31.75a1,1,0,0,1,.465.114L41.142,33.8l-.7-4.093a1,1,0,0,1,.288-.885l2.973-2.9-4.109-.6a1,1,0,0,1-.753-.548L37,21.051l-1.838,3.724a1,1,0,0,1-.753.548l-4.109.6,2.973,2.9a1,1,0,0,1,.288.885l-.7,4.093,3.677-1.933A1,1,0,0,1,37,31.75Z"
          }));
        }
    }
  }

  return getIcon();
};

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./inc/gutenberg/js/backend/latest-posts-block.js":
/*!********************************************************!*\
  !*** ./inc/gutenberg/js/backend/latest-posts-block.js ***!
  \********************************************************/
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
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);







Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["registerBlockType"])("workingspaces/latest-posts", {
  // built-in attributes
  title: "Latest posts",
  description: "Display latest posts",
  icon: "format-aside",
  category: "workingspace-blocks",
  // custom attributes
  attributes: {
    header: {
      type: 'object'
    },
    latestPosts: {
      type: 'array'
    }
  },
  edit: editComponent,
  save: () => {
    return null;
  }
});

function editComponent(props) {
  var _props$attributes$hea, _props$attributes, _props$attributes$hea2, _props$attributes4, _props$attributes5, _props$attributes5$he, _props$attributes6, _props$attributes6$he, _props$attributes7, _props$attributes7$he, _props$attributes9, _props$attributes9$he, _props$attributes11;

  const title = (_props$attributes$hea = props === null || props === void 0 ? void 0 : (_props$attributes = props.attributes) === null || _props$attributes === void 0 ? void 0 : (_props$attributes$hea2 = _props$attributes.header) === null || _props$attributes$hea2 === void 0 ? void 0 : _props$attributes$hea2.title) !== null && _props$attributes$hea !== void 0 ? _props$attributes$hea : 'Recent Posts: ';
  const [postTitle, setPostTitle] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(title);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    var _props$attributes2;

    if ((props === null || props === void 0 ? void 0 : (_props$attributes2 = props.attributes) === null || _props$attributes2 === void 0 ? void 0 : _props$attributes2.latestPosts) !== undefined) return;

    async function getLatestPosts() {
      const results = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
        path: 'wp/v2/posts?per_page=4',
        method: 'GET'
      });
      props.setAttributes({
        latestPosts: results
      });
    }

    getLatestPosts();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    var _props$attributes3;

    props === null || props === void 0 ? void 0 : props.setAttributes({
      header: { ...(props === null || props === void 0 ? void 0 : (_props$attributes3 = props.attributes) === null || _props$attributes3 === void 0 ? void 0 : _props$attributes3.header),
        title: postTitle
      }
    });
  }, [postTitle]);
  if (!(props !== null && props !== void 0 && (_props$attributes4 = props.attributes) !== null && _props$attributes4 !== void 0 && _props$attributes4.latestPosts)) return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Loading...");
  const titleStyle = {
    color: props === null || props === void 0 ? void 0 : (_props$attributes5 = props.attributes) === null || _props$attributes5 === void 0 ? void 0 : (_props$attributes5$he = _props$attributes5.header) === null || _props$attributes5$he === void 0 ? void 0 : _props$attributes5$he.color,
    backgroundColor: props === null || props === void 0 ? void 0 : (_props$attributes6 = props.attributes) === null || _props$attributes6 === void 0 ? void 0 : (_props$attributes6$he = _props$attributes6.header) === null || _props$attributes6$he === void 0 ? void 0 : _props$attributes6$he.backgroundColor
  };
  return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Panel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
    title: "Header"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["BaseControl"], {
    id: "header-color",
    label: "Text Color"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    id: "header-color",
    label: "Color",
    value: props === null || props === void 0 ? void 0 : (_props$attributes7 = props.attributes) === null || _props$attributes7 === void 0 ? void 0 : (_props$attributes7$he = _props$attributes7.header) === null || _props$attributes7$he === void 0 ? void 0 : _props$attributes7$he.color,
    onChange: color => {
      var _props$attributes8;

      return props === null || props === void 0 ? void 0 : props.setAttributes({
        header: { ...(props === null || props === void 0 ? void 0 : (_props$attributes8 = props.attributes) === null || _props$attributes8 === void 0 ? void 0 : _props$attributes8.header),
          color: color
        }
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["BaseControl"], {
    id: "header-background-color",
    label: "Background Color"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    id: "header-background-color",
    value: props === null || props === void 0 ? void 0 : (_props$attributes9 = props.attributes) === null || _props$attributes9 === void 0 ? void 0 : (_props$attributes9$he = _props$attributes9.header) === null || _props$attributes9$he === void 0 ? void 0 : _props$attributes9$he.backgroundColor,
    onChange: color => {
      var _props$attributes10;

      return props === null || props === void 0 ? void 0 : props.setAttributes({
        header: { ...(props === null || props === void 0 ? void 0 : (_props$attributes10 = props.attributes) === null || _props$attributes10 === void 0 ? void 0 : _props$attributes10.header),
          backgroundColor: color
        }
      });
    }
  })))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "workingspace gutenberg--latest-posts"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["TextControl"], {
    className: "title",
    value: postTitle,
    style: titleStyle,
    onChange: nextValue => {
      setPostTitle(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])(nextValue));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "post-container"
  }, props === null || props === void 0 ? void 0 : (_props$attributes11 = props.attributes) === null || _props$attributes11 === void 0 ? void 0 : _props$attributes11.latestPosts.map(post => {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "post"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: post === null || post === void 0 ? void 0 : post.featured_image
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, post === null || post === void 0 ? void 0 : post.post_title));
  })))];
}

/***/ }),

/***/ "./inc/gutenberg/js/filter-wordpress-blocks.js":
/*!*****************************************************!*\
  !*** ./inc/gutenberg/js/filter-wordpress-blocks.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _backend_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backend/components */ "./inc/gutenberg/js/backend/components.js");


const {
  InspectorControls,
  InspectorAdvancedControls
} = wp.blockEditor;
const {
  PanelBody,
  PanelRow,
  BaseControl,
  TextHighlight,
  ToggleControl,
  SelectControl,
  Flex,
  FlexItem
} = wp.components;
const {
  useState,
  useEffect
} = React;
const {
  Fragment
} = wp.element;
const BORDER_BOTTOM_TEXT_ALLOWED_BLOCKS = ['core/heading'];
wp.domReady(() => {
  /**
   * ATTRIBUTES
   * 
   * TEXT BORDER
   */
  wp.hooks.addFilter("blocks.registerBlockType", "workingspace/textBorderAttribute", settings => {
    if (BORDER_BOTTOM_TEXT_ALLOWED_BLOCKS.includes(settings.name)) {
      settings.attributes = { ...settings.attributes,
        highlightedText: {
          type: "string"
        }
      };
    }

    return settings;
  }); // COLUMNS

  wp.hooks.addFilter("blocks.registerBlockType", "workingspace/columnsContainerAttributes", settings => {
    if (settings.name === 'core/columns') {
      settings.attributes = { ...settings.attributes,
        isFullWidth: {
          type: "boolean",
          default: false
        },
        margin: {
          default: null
        }
      };
    }

    return settings;
  });
  /**
   * BLOCKS
   * 
   * TEXT BORDER
   */

  wp.hooks.addFilter("editor.BlockEdit", "workingspace/textBorderBlocks", wp.compose.createHigherOrderComponent(BlockEdit => props => {
    if (BORDER_BOTTOM_TEXT_ALLOWED_BLOCKS.includes(props.name)) {
      var _props$attributes, _props$attributes2, _props$attributes4, _props$attributes5;

      const [highlightedText, setHighlightedText] = useState(props === null || props === void 0 ? void 0 : (_props$attributes = props.attributes) === null || _props$attributes === void 0 ? void 0 : _props$attributes.highlightedText);
      const [headingContent, setHeadingContent] = useState(props === null || props === void 0 ? void 0 : (_props$attributes2 = props.attributes) === null || _props$attributes2 === void 0 ? void 0 : _props$attributes2.content.replace(/<\/?[^>]+(>|$)/g, ""));
      useEffect(() => {
        const content = headingContent.replace(highlightedText, `<mark>${highlightedText}</mark>`);
        props.setAttributes({ ...props,
          content: content,
          highlightedText: highlightedText
        });
      }, [highlightedText]);
      useEffect(() => {
        var _props$attributes3;

        setHeadingContent(props === null || props === void 0 ? void 0 : (_props$attributes3 = props.attributes) === null || _props$attributes3 === void 0 ? void 0 : _props$attributes3.content.replace(/<\/?[^>]+(>|$)/g, ""));
      }, [(_props$attributes4 = props.attributes) === null || _props$attributes4 === void 0 ? void 0 : _props$attributes4.content]);
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
        title: "Border",
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, {
        className: "workingspace gutenberg--inspector-controls wordpress-heading-border"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
        label: "Text Border Bottom",
        help: "highlight the text to add border"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "container"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
        onMouseUp: () => {
          if (window.getSelection) {
            const text = window.getSelection().toString();
            setHighlightedText(text);
          } else if (document.selection) {
            const text = document.selection.createRange().text;
            setHighlightedText(text);
          }
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextHighlight, {
        text: headingContent,
        highlight: props === null || props === void 0 ? void 0 : (_props$attributes5 = props.attributes) === null || _props$attributes5 === void 0 ? void 0 : _props$attributes5.highlightedText
      }))))))));
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props);
  }, "workingspaceHeadingBodrderBlocks")); // COLUMNS CONTAINER

  wp.hooks.addFilter("editor.BlockEdit", "workingspace/columnsContainer", wp.compose.createHigherOrderComponent(BlockEdit => props => {
    if (props.name === 'core/columns') {
      var _props$attributes6, _props$attributes7, _props$attributes7$ma, _props$attributes$mar, _props$attributes9, _props$attributes9$ma, _props$attributes11, _props$attributes11$m;

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorAdvancedControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
        label: "Full width",
        checked: props === null || props === void 0 ? void 0 : (_props$attributes6 = props.attributes) === null || _props$attributes6 === void 0 ? void 0 : _props$attributes6.isFullWidth,
        onChange: () => {
          props.setAttributes({ ...props.attributes,
            isFullWidth: !props.attributes.isFullWidth
          });
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
        title: "Margin",
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, {
        className: "workingspace gutenberg--inspector-controls wordpress-column-container"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_backend_components__WEBPACK_IMPORTED_MODULE_1__["MarginControl"], {
        value: props === null || props === void 0 ? void 0 : (_props$attributes7 = props.attributes) === null || _props$attributes7 === void 0 ? void 0 : (_props$attributes7$ma = _props$attributes7.margin) === null || _props$attributes7$ma === void 0 ? void 0 : _props$attributes7$ma.size,
        onChange: value => {
          var _props$attributes8;

          return props.setAttributes({ ...props.attributes,
            margin: { ...(props === null || props === void 0 ? void 0 : (_props$attributes8 = props.attributes) === null || _props$attributes8 === void 0 ? void 0 : _props$attributes8.margin),
              size: value
            }
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Flex, {
        justify: true
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FlexItem, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
        value: (_props$attributes$mar = props === null || props === void 0 ? void 0 : (_props$attributes9 = props.attributes) === null || _props$attributes9 === void 0 ? void 0 : (_props$attributes9$ma = _props$attributes9.margin) === null || _props$attributes9$ma === void 0 ? void 0 : _props$attributes9$ma.units) !== null && _props$attributes$mar !== void 0 ? _props$attributes$mar : 'px',
        label: "Units",
        options: [{
          label: 'px',
          value: 'px'
        }, {
          label: 'em',
          value: 'em'
        }, {
          label: 'rem',
          value: 'rem'
        }, {
          label: 'vw',
          value: 'vw'
        }, {
          label: 'vh',
          value: 'vh'
        }],
        onChange: units => {
          var _props$attributes10;

          return props.setAttributes({ ...props.attributes,
            margin: { ...(props === null || props === void 0 ? void 0 : (_props$attributes10 = props.attributes) === null || _props$attributes10 === void 0 ? void 0 : _props$attributes10.margin),
              units: units
            }
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FlexItem, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
        className: "workingspace gutenberg--inspector-controls wordpress-column-container toggle-settings",
        label: "Attach inline margin",
        checked: props === null || props === void 0 ? void 0 : (_props$attributes11 = props.attributes) === null || _props$attributes11 === void 0 ? void 0 : (_props$attributes11$m = _props$attributes11.margin) === null || _props$attributes11$m === void 0 ? void 0 : _props$attributes11$m.isAttachInlineStyle,
        onChange: () => {
          var _props$attributes12, _props$attributes13, _props$attributes13$m;

          return props.setAttributes({ ...props.attributes,
            margin: { ...(props === null || props === void 0 ? void 0 : (_props$attributes12 = props.attributes) === null || _props$attributes12 === void 0 ? void 0 : _props$attributes12.margin),
              isAttachInlineStyle: !(props !== null && props !== void 0 && (_props$attributes13 = props.attributes) !== null && _props$attributes13 !== void 0 && (_props$attributes13$m = _props$attributes13.margin) !== null && _props$attributes13$m !== void 0 && _props$attributes13$m.isAttachInlineStyle)
            }
          });
        }
      }))))));
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props);
  }, "workingspacecClumnsContainer"));
  /**
   * FRONT END BLOCKS
   * 
   * FILTER BLOCKS CLASSNAME
   */

  wp.hooks.addFilter("blocks.getSaveContent.extraProps", "workingspace/columnsContainerSave", (props, block, attributes) => {
    if (block.name === 'core/columns') {
      var _attributes$margin, _attributes$margin2;

      if (attributes.isFullWidth) {
        props.className = props.className + ' full-width';
      }

      if (attributes !== null && attributes !== void 0 && (_attributes$margin = attributes.margin) !== null && _attributes$margin !== void 0 && _attributes$margin.isAttachInlineStyle && attributes !== null && attributes !== void 0 && (_attributes$margin2 = attributes.margin) !== null && _attributes$margin2 !== void 0 && _attributes$margin2.size) {
        var _attributes$margin3, _attributes$margin3$s, _attributes$margin5, _attributes$margin5$s, _attributes$margin7, _attributes$margin7$s, _attributes$margin9, _attributes$margin9$s;

        if (attributes !== null && attributes !== void 0 && (_attributes$margin3 = attributes.margin) !== null && _attributes$margin3 !== void 0 && (_attributes$margin3$s = _attributes$margin3.size) !== null && _attributes$margin3$s !== void 0 && _attributes$margin3$s.top) {
          var _attributes$margin$un, _attributes$margin4;

          props.style = { ...(props === null || props === void 0 ? void 0 : props.style),
            marginTop: `${attributes.margin.size.top}${(_attributes$margin$un = attributes === null || attributes === void 0 ? void 0 : (_attributes$margin4 = attributes.margin) === null || _attributes$margin4 === void 0 ? void 0 : _attributes$margin4.units) !== null && _attributes$margin$un !== void 0 ? _attributes$margin$un : 'px'}`
          };
        }

        if (attributes !== null && attributes !== void 0 && (_attributes$margin5 = attributes.margin) !== null && _attributes$margin5 !== void 0 && (_attributes$margin5$s = _attributes$margin5.size) !== null && _attributes$margin5$s !== void 0 && _attributes$margin5$s.right) {
          var _attributes$margin$un2, _attributes$margin6;

          props.style = { ...(props === null || props === void 0 ? void 0 : props.style),
            marginRight: `${attributes.margin.size.right}${(_attributes$margin$un2 = attributes === null || attributes === void 0 ? void 0 : (_attributes$margin6 = attributes.margin) === null || _attributes$margin6 === void 0 ? void 0 : _attributes$margin6.units) !== null && _attributes$margin$un2 !== void 0 ? _attributes$margin$un2 : 'px'}`
          };
        }

        if (attributes !== null && attributes !== void 0 && (_attributes$margin7 = attributes.margin) !== null && _attributes$margin7 !== void 0 && (_attributes$margin7$s = _attributes$margin7.size) !== null && _attributes$margin7$s !== void 0 && _attributes$margin7$s.bottom) {
          var _attributes$margin$un3, _attributes$margin8;

          props.style = { ...(props === null || props === void 0 ? void 0 : props.style),
            marginBottom: `${attributes.margin.size.bottom}${(_attributes$margin$un3 = attributes === null || attributes === void 0 ? void 0 : (_attributes$margin8 = attributes.margin) === null || _attributes$margin8 === void 0 ? void 0 : _attributes$margin8.units) !== null && _attributes$margin$un3 !== void 0 ? _attributes$margin$un3 : 'px'}`
          };
        }

        if (attributes !== null && attributes !== void 0 && (_attributes$margin9 = attributes.margin) !== null && _attributes$margin9 !== void 0 && (_attributes$margin9$s = _attributes$margin9.size) !== null && _attributes$margin9$s !== void 0 && _attributes$margin9$s.left) {
          var _attributes$margin$un4, _attributes$margin10;

          props.style = { ...(props === null || props === void 0 ? void 0 : props.style),
            marginLeft: `${attributes.margin.size.left}${(_attributes$margin$un4 = attributes === null || attributes === void 0 ? void 0 : (_attributes$margin10 = attributes.margin) === null || _attributes$margin10 === void 0 ? void 0 : _attributes$margin10.units) !== null && _attributes$margin$un4 !== void 0 ? _attributes$margin$un4 : 'px'}`
          };
        }
      }
    }

    return props;
  });
});

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
/* harmony import */ var _filter_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-wordpress-blocks */ "./inc/gutenberg/js/filter-wordpress-blocks.js");
/* harmony import */ var _backend_featured_posts_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backend/featured-posts-block */ "./inc/gutenberg/js/backend/featured-posts-block.js");
/* harmony import */ var _backend_latest_posts_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backend/latest-posts-block */ "./inc/gutenberg/js/backend/latest-posts-block.js");
/* harmony import */ var _backend_icon_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./backend/icon-block */ "./inc/gutenberg/js/backend/icon-block.js");






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

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

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