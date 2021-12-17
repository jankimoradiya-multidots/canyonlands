(this["webpackJsonpcanyonlands"] = this["webpackJsonpcanyonlands"] || []).push([["main"],{

/***/ "./src/client-config.js":
/*!******************************!*\
  !*** ./src/client-config.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Config File.
 *
 * @package Canyonlands
 */
const config = {
  siteURL: 'http://mdhackathon.local/',
  headerMenuLocation: 'canyonlands-menu-header',
  footerMenuLocation: 'canyonlands-hcms-menu-footer',
  siteTitle: 'Canyonlands React Theme',
  // Will be used if we don't set site title from WordPress customizer.
  siteDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // Will be used if we don't set site description from WordPress customizer.
  copyrightText: '© 2021 Canyonlands.',
  footerMenuTitle: 'About the site',
  homePagePostType: 'post',
  // Will be used to display 3 latest post on home page of given post type
  homePageTaxonomy: 'category',
  // // Will be used to display 3 taxonomies on home page of given post type,
  heroSection: {
    heroTitle: 'Amazing world.',
    heroDescription: 'Discover more than just common Landscapes. Try to live inside of the wild nature. Create your own story. Unforgettable and nonrepeating by nobody.',
    heroImgURL: '/images/mountain-illustration.png',
    heroBtnTxt: 'Explore My World'
  },
  searchSection: {
    searchBackURL: '/images/search-background.png',
    searchPlaceholderTxt: '',
    images: [{
      src: '/images/bag.png',
      name: 'Solo'
    }, {
      src: '/images/airplane.png',
      name: 'Flight'
    }, {
      src: '/images/group.png',
      name: 'Group'
    }]
  },
  featuredPostsSection: {
    featuredPostHeading: 'Featured Posts'
  },
  latestPostsSection: {
    latestPostHeading: 'Latest Posts'
  },
  defaultPostImage: '/images/default.jpg' // Used for default post or pages.

};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _templates_pages_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/pages/home */ "./src/templates/pages/home.js");
/* harmony import */ var _templates_notfound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templates/notfound */ "./src/templates/notfound.js");
/* harmony import */ var _templates_pages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/pages/page */ "./src/templates/pages/page.js");
var _jsxFileName = "/Users/jankimoradiya/Desktop/Projects/mdhackathon/app/public/wp-content/themes/canyonlands/react-src/src/index.js";

/**
 * Index file.
 *
 * @package Canyonlands
 */

/**
 * Internal Dependencies.
 */




 //import Archive from './templates/Archive';
//import Single from './templates/Single';

 //import Layout from './components/layout';

 //import Category from './components/pages/category';
//import Post from './components/pages/post';

const routes = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Routes"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  exact: true,
  path: "/",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_templates_pages_home__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 44
    }
  }),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 13
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  exact: true,
  path: "/:pageSlug",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_templates_pages_page__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 53
    }
  }),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 13
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  path: "*",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_templates_notfound__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 38
    }
  }),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 13
  }
})));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(routes, document.getElementById('root'));

/***/ }),

/***/ "./src/partials/footer.js":
/*!********************************!*\
  !*** ./src/partials/footer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jankimoradiya/Desktop/Projects/mdhackathon/app/public/wp-content/themes/canyonlands/react-src/src/partials/footer.js";

function footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 12
    }
  }, "footer");
}

/***/ }),

/***/ "./src/partials/header/header.js":
/*!***************************************!*\
  !*** ./src/partials/header/header.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./src/partials/header/nav.js");
/* harmony import */ var _client_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client-config */ "./src/client-config.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
var _jsxFileName = "/Users/jankimoradiya/Desktop/Projects/mdhackathon/app/public/wp-content/themes/canyonlands/react-src/src/partials/header/header.js";

/**
 * Header Component.
 *
 * @package Canyonlands
 */

 //import SearchForm from './searchform';



 //  

/**
  * Header
  *
  * @param {Object} props Props
  */

class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let siteLogoUrl;
    let siteTitle;
    let siteDescription;
    let favicon;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "header wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "hero",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__["Helmet"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }
    }, siteTitle ? siteTitle : _client_config__WEBPACK_IMPORTED_MODULE_2__["default"].siteTitle, "-", siteDescription ? siteDescription : _client_config__WEBPACK_IMPORTED_MODULE_2__["default"].siteDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
      rel: "icon",
      type: "image/png",
      href: favicon,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 21
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "logo-section",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 8
      }
    }, siteLogoUrl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "site-logo",
      width: "50",
      height: "50",
      src: siteLogoUrl,
      alt: "Site Logo URL",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 7
      }
    })) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "site-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 5
      }
    }, siteTitle ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "site-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 7
      }
    }, siteTitle) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "site-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 7
      }
    }, _client_config__WEBPACK_IMPORTED_MODULE_2__["default"].siteTitle), siteDescription ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "site-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 7
      }
    }, siteDescription) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "site-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 7
      }
    }, _client_config__WEBPACK_IMPORTED_MODULE_2__["default"].siteDescription))));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/partials/header/nav.js":
/*!************************************!*\
  !*** ./src/partials/header/nav.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
var _jsxFileName = "/Users/jankimoradiya/Desktop/Projects/mdhackathon/app/public/wp-content/themes/canyonlands/react-src/src/partials/header/nav.js";



class Nav extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      headerMenu: []
    };
  }

  componentDidMount() {
    fetch(`./wp-json/wp/v2/menu`).then(response => response.json()).then(data => {
      if (0 < data.length) {
        this.setState({
          headerMenu: data
        });
        console.log(data);
      }
    });
  }

  render() {
    const {
      headerMenu
    } = this.state;
    console.log("headerMenu");
    console.log(headerMenu);

    const getLocation = href => {
      var l = document.createElement("a");
      l.href = href;
      return l;
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "navigation-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      className: `header-nav`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }, 0 < Object.keys(headerMenu).length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "header-nav__wrap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 6
      }
    }, headerMenu.map(menu => {
      const l = getLocation(menu.url);
      const path = l.pathname;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: menu.ID,
        className: `header-nav__menu-item ${'0' !== menu.menu_item_parent ? 'menu-has-children' : ''} `,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        className: "header-nav__menu-link",
        to: path,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 37
        }
      }, menu.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "header-nav__toggle-menu-btn" // onClick={ ( event ) =>
        // 	handleSubMenuOpen( event, menu.ID )
        // }
        ,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 37
        }
      }));
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./src/templates/notfound.js":
/*!***********************************!*\
  !*** ./src/templates/notfound.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _partials_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../partials/footer */ "./src/partials/footer.js");
/* harmony import */ var _partials_header_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/header/nav */ "./src/partials/header/nav.js");
var _jsxFileName = "/Users/jankimoradiya/Desktop/Projects/mdhackathon/app/public/wp-content/themes/canyonlands/react-src/src/templates/notfound.js";
 //import Head from '../partials/header/nav';




class NotFound extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "notfound",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_header_nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content-area",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      class: "not-found-img",
      src: "https://i.imgur.com/qIufhof.png",
      alt: "404 page",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }
    }, "This page could not be found")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./src/templates/pages/home.js":
/*!*************************************!*\
  !*** ./src/templates/pages/home.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _partials_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/header/header */ "./src/partials/header/header.js");
/* harmony import */ var _partials_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../partials/footer */ "./src/partials/footer.js");
var _jsxFileName = "/Users/jankimoradiya/Desktop/Projects/mdhackathon/app/public/wp-content/themes/canyonlands/react-src/src/templates/pages/home.js";



function home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_header_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }), "hello world", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  })));
}

/***/ }),

/***/ "./src/templates/pages/page.js":
/*!*************************************!*\
  !*** ./src/templates/pages/page.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client-config */ "./src/client-config.js");
var _jsxFileName = "/Users/jankimoradiya/Desktop/Projects/mdhackathon/app/public/wp-content/themes/canyonlands/react-src/src/templates/pages/page.js";
 //import { useEffect, useState, useRef } from 'react';
//import axios from 'axios';

 //import '../../images/default/default.jpg';

class Page extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const slug = 'sample-page';
    console.log("this.props");
    console.log(this.props);
    fetch(`${_client_config__WEBPACK_IMPORTED_MODULE_1__["default"].siteURL}wp-json/wp/v2/pages?_embed&slug=${slug}`).then(response => response.json()).then(data => {
      if (0 < data.length) {
        this.setState({
          data: data[0]
        });
        console.log(data);
      }
    });
  }

  render() {
    const {
      data
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: `page-content`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }
    }, data.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      dangerouslySetInnerHTML: {
        __html: data.title.rendered
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 8
      }
    }), data.content && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: data.content.rendered
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 8
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("aside", {
      className: "aside",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 6
      }
    }));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jankimoradiya/Desktop/Projects/mdhackathon/app/public/wp-content/themes/canyonlands/react-src/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map