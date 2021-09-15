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
  }, iconListProp.map(prop => {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "icon-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_icon__WEBPACK_IMPORTED_MODULE_1__["default"], prop));
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
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
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_icon__WEBPACK_IMPORTED_MODULE_1__["default"], props === null || props === void 0 ? void 0 : props.attributes)];
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


const Icon = props => {
  function getIcon() {
    switch (props.slug) {
      case 'mission':
        {
          var _props$size, _props$size2, _props$color;

          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            className: `workingspace gutenberg--icon ${props === null || props === void 0 ? void 0 : props.align}`,
            width: (_props$size = props === null || props === void 0 ? void 0 : props.size) !== null && _props$size !== void 0 ? _props$size : 50,
            height: (_props$size2 = props === null || props === void 0 ? void 0 : props.size) !== null && _props$size2 !== void 0 ? _props$size2 : 50
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
            id: "Out_line",
            "data-name": "Out line"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
            fill: (_props$color = props === null || props === void 0 ? void 0 : props.color) !== null && _props$color !== void 0 ? _props$color : '#000',
            d: "M296,195.31445l30.34277,30.34278a25.0004,25.0004,0,0,0,35.31446,0l84-84a8.00122,8.00122,0,0,0,0-11.31446l-112-112a8.003,8.003,0,0,0-11.31446,0L264,76.68555,233.65723,46.34277a25.00276,25.00276,0,0,0-35.31446,0L120,124.68555l-18.34277-18.34278a8.003,8.003,0,0,0-11.31446,0l-24,24a8.00122,8.00122,0,0,0,0,11.31446L220.68555,296l-10.34278,10.34277A8.00235,8.00235,0,0,0,208,312v44.68652l-7.99976,7.99927-2.343-2.343a8.003,8.003,0,0,0-11.31446,0l-120,120,11.31446,11.31446L192,379.31348,268.68652,456l-26.34375,26.34277,11.31446,11.31446,32-32a8.00122,8.00122,0,0,0,0-11.31446L275.31445,440,320,395.31445l74.34277,74.34278a8.00181,8.00181,0,0,0,11.31446,0l24-24a8.00122,8.00122,0,0,0,0-11.31446L355.31445,360l10.34278-10.34277a8.00122,8.00122,0,0,0,0-11.31446l-64-64a8.003,8.003,0,0,0-11.31446,0l-.70117.70118a41.62174,41.62174,0,0,0-11.98437-24.70118,8.003,8.003,0,0,0-11.31446,0L256,260.68555,243.31445,248Zm38.34277-12.97168-8,8a24.835,24.835,0,0,0-5.15942,7.52613L307.31445,184l14.34278-14.34277a8.97,8.97,0,0,1,12.68554,12.68554ZM328,35.31348,428.68652,136l-78.34375,78.34277a8.97,8.97,0,0,1-12.68554-12.68554l8-8a24.97439,24.97439,0,0,0,0-35.31446L275.31445,88ZM209.65723,57.65723a8.979,8.979,0,0,1,12.68554,0l95.52149,95.5205a24.86107,24.86107,0,0,0-7.52149,5.165L208,260.68555,107.314,160.00049ZM96,123.31348,108.68555,136l-12.686,12.686L83.31348,136ZM412.68652,440,400,452.68652,331.31445,384,344,371.31445ZM296,291.31348,348.68652,344,320,372.68652,267.31348,320l10.34326-10.34326.00049.00049.01953-.02051Zm-24.88477-23.11524a25.981,25.981,0,0,1-4.77246,30.14453l-16,16a8.00122,8.00122,0,0,0,0,11.31446,37.29483,37.29483,0,0,1,0,52.68554l11.31446,11.31446a53.07235,53.07235,0,0,0,15.56006-37.12549L308.68555,384,264,428.68555,211.31445,376l10.34278-10.34277A8.00235,8.00235,0,0,0,224,360V315.31348ZM244.68555,272,232,284.68555,219.31445,272,232,259.31445Z"
          })));
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

        let style = '';

        if (attributes !== null && attributes !== void 0 && (_attributes$margin3 = attributes.margin) !== null && _attributes$margin3 !== void 0 && (_attributes$margin3$s = _attributes$margin3.size) !== null && _attributes$margin3$s !== void 0 && _attributes$margin3$s.top) {
          var _attributes$margin$un, _attributes$margin4;

          style += `margin-top: ${attributes.margin.size.top}${(_attributes$margin$un = attributes === null || attributes === void 0 ? void 0 : (_attributes$margin4 = attributes.margin) === null || _attributes$margin4 === void 0 ? void 0 : _attributes$margin4.units) !== null && _attributes$margin$un !== void 0 ? _attributes$margin$un : 'px'}; `;
        }

        if (attributes !== null && attributes !== void 0 && (_attributes$margin5 = attributes.margin) !== null && _attributes$margin5 !== void 0 && (_attributes$margin5$s = _attributes$margin5.size) !== null && _attributes$margin5$s !== void 0 && _attributes$margin5$s.right) {
          var _attributes$margin$un2, _attributes$margin6;

          style += `margin-right: ${attributes.margin.size.right}${(_attributes$margin$un2 = attributes === null || attributes === void 0 ? void 0 : (_attributes$margin6 = attributes.margin) === null || _attributes$margin6 === void 0 ? void 0 : _attributes$margin6.units) !== null && _attributes$margin$un2 !== void 0 ? _attributes$margin$un2 : 'px'}; `;
        }

        if (attributes !== null && attributes !== void 0 && (_attributes$margin7 = attributes.margin) !== null && _attributes$margin7 !== void 0 && (_attributes$margin7$s = _attributes$margin7.size) !== null && _attributes$margin7$s !== void 0 && _attributes$margin7$s.bottom) {
          var _attributes$margin$un3, _attributes$margin8;

          style += `margin-bottom: ${attributes.margin.size.bottom}${(_attributes$margin$un3 = attributes === null || attributes === void 0 ? void 0 : (_attributes$margin8 = attributes.margin) === null || _attributes$margin8 === void 0 ? void 0 : _attributes$margin8.units) !== null && _attributes$margin$un3 !== void 0 ? _attributes$margin$un3 : 'px'}; `;
        }

        if (attributes !== null && attributes !== void 0 && (_attributes$margin9 = attributes.margin) !== null && _attributes$margin9 !== void 0 && (_attributes$margin9$s = _attributes$margin9.size) !== null && _attributes$margin9$s !== void 0 && _attributes$margin9$s.left) {
          var _attributes$margin$un4, _attributes$margin10;

          style += `margin-left: ${attributes.margin.size.left}${(_attributes$margin$un4 = attributes === null || attributes === void 0 ? void 0 : (_attributes$margin10 = attributes.margin) === null || _attributes$margin10 === void 0 ? void 0 : _attributes$margin10.units) !== null && _attributes$margin$un4 !== void 0 ? _attributes$margin$un4 : 'px'}; `;
        }

        props.style = style;
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