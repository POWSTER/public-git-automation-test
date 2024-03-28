"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkthundr"] = (typeof self !== 'undefined' ? self : this)["webpackChunkthundr"] || []).push([["externalLinkModal"],{

/***/ "./static/src/components/bolt/externalLinkModal/externalLinkModal.js":
/*!***************************************************************************!*\
  !*** ./static/src/components/bolt/externalLinkModal/externalLinkModal.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExternalLinkModal)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var store_bolt_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/bolt/cookies */ "./static/src/store/bolt/cookies.js");
/* harmony import */ var store_bolt_externalLinkModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/bolt/externalLinkModal */ "./static/src/store/bolt/externalLinkModal.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var components_bolt_button_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/bolt/button/button */ "./static/src/components/bolt/button/button.js");
/* harmony import */ var components_bolt_link_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/bolt/link/link */ "./static/src/components/bolt/link/link.js");
/* harmony import */ var components_core_html_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/core/html/html */ "./static/src/components/core/html/html.js");
/* harmony import */ var components_bolt_icons_exitPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/bolt/icons/exitPage */ "./static/src/components/bolt/icons/exitPage.js");
/* harmony import */ var components_bolt_externalLinkModal_externalLinkModal_sss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/bolt/externalLinkModal/externalLinkModal.sss */ "./static/src/components/bolt/externalLinkModal/externalLinkModal.sss");
/* harmony import */ var components_bolt_button_button_sss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/bolt/button/button.sss */ "./static/src/components/bolt/button/button.sss");











class ExternalLinkModal extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.clickInterceptor = this.clickInterceptor.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount() {
    document.addEventListener('click', this.clickInterceptor, true);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.clickInterceptor, true);
  }
  clickInterceptor(e) {
    if (!e?.target || this.props.externalLinkModal?.open) {
      return;
    }
    let link = e.target.closest('a') || e.target.closest('area');
    let linkHref = link?.href;
    if (linkHref?.endsWith('/')) {
      linkHref = linkHref.slice(0, -1);
    }
    if (!linkHref || link.origin === location.origin) {
      return;
    }
    let settings = this.props.appData?.options?.externalLinkModal;
    let urlsWanted = settings?.onlyForUrls?.split('\n').map(str => {
      let url = str.trim();
      if (url.endsWith('/')) {
        url = url.substring(0, url.length - 1);
      }
      return url;
    });
    if (urlsWanted && !urlsWanted.includes(linkHref)) {
      return;
    }
    store_store__WEBPACK_IMPORTED_MODULE_4__["default"].emit('DISPLAY_EXTERNAL_LINK_MODAL', {
      originalEvent: e,
      onClick: link.onClick,
      target: link.target,
      href: link.href
    });
    e.stopPropagation();
    e.preventDefault();
  }
  onClick(evt) {
    let {
      onClick,
      originalEvent
    } = this.props.externalLinkModal || {};
    this.closeModal();
    if (onClick && typeof onClick === 'function') {
      return onClick(originalEvent || evt);
    }
  }
  closeModal() {
    store_store__WEBPACK_IMPORTED_MODULE_4__["default"].emit('HIDE_EXTERNAL_LINK_MODAL');
  }
  render(props) {
    const externalLinkModal = props.externalLinkModal;
    if (!externalLinkModal?.open) {
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", null);
    }
    let {
      $EXTERNAL_LINK_MODAL_BODY = 'You are leaving this website',
      $EXTERNAL_LINK_MODAL_OK = 'OK',
      $EXTERNAL_LINK_MODAL_CANCEL = 'Cancel'
    } = props.copy.baseCopy;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_externalLinkModal_externalLinkModal_sss__WEBPACK_IMPORTED_MODULE_9__["default"].overlay,
      onClick: this.closeModal
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_externalLinkModal_externalLinkModal_sss__WEBPACK_IMPORTED_MODULE_9__["default"].container,
      onClick: e => e.stopPropagation()
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_exitPage__WEBPACK_IMPORTED_MODULE_8__["default"], {
      class: components_bolt_externalLinkModal_externalLinkModal_sss__WEBPACK_IMPORTED_MODULE_9__["default"].icon
    }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_7__["default"], {
      class: components_bolt_externalLinkModal_externalLinkModal_sss__WEBPACK_IMPORTED_MODULE_9__["default"].content,
      content: $EXTERNAL_LINK_MODAL_BODY,
      markdown: true
    }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_externalLinkModal_externalLinkModal_sss__WEBPACK_IMPORTED_MODULE_9__["default"].buttons
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_button_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      class: components_bolt_externalLinkModal_externalLinkModal_sss__WEBPACK_IMPORTED_MODULE_9__["default"].button,
      type: "outlined",
      trigger: this.closeModal
    }, $EXTERNAL_LINK_MODAL_CANCEL), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_link_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)(components_bolt_button_button_sss__WEBPACK_IMPORTED_MODULE_10__["default"].container, components_bolt_button_button_sss__WEBPACK_IMPORTED_MODULE_10__["default"].primary, components_bolt_externalLinkModal_externalLinkModal_sss__WEBPACK_IMPORTED_MODULE_9__["default"].button),
      href: externalLinkModal.href,
      ignoreExternalLinkModal: true,
      target: externalLinkModal.target,
      onClick: this.onClick
    }, $EXTERNAL_LINK_MODAL_OK))));
  }
}

/***/ }),

/***/ "./static/src/components/bolt/icons/exitPage.js":
/*!******************************************************!*\
  !*** ./static/src/components/bolt/icons/exitPage.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");


const ExitPage = props => {
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M21.8902 34H8.00024C7.3372 34 6.70132 33.7366 6.23248 33.2678C5.76364 32.7989 5.50024 32.163 5.50024 31.5V15.5H35.5002V20.39C36.4389 20.9378 37.2831 21.6334 38.0002 22.45V9C38.0002 7.67392 37.4735 6.40215 36.5358 5.46447C35.5981 4.52678 34.3263 4 33.0002 4H8.00024C6.67416 4 5.40239 4.52678 4.46471 5.46447C3.52703 6.40215 3.00024 7.67392 3.00024 9L3.00024 31.5C3.00024 32.8261 3.52703 34.0979 4.46471 35.0355C5.40239 35.9732 6.67416 36.5 8.00024 36.5H24.0002C23.1659 35.7867 22.4532 34.9424 21.8902 34ZM13.0002 6.5H33.0002C33.6633 6.5 34.2992 6.76339 34.768 7.23223C35.2369 7.70107 35.5002 8.33696 35.5002 9V13H5.50024V9C5.50024 8.33696 5.76364 7.70107 6.23248 7.23223C6.70132 6.76339 7.3372 6.5 8.00024 6.5H13.0002Z",
    fill: "black",
    "fill-opacity": "0.3"
  }), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M33.7905 29.4996H25.0005C24.8679 29.4996 24.7407 29.4469 24.6469 29.3531C24.5532 29.2593 24.5005 29.1322 24.5005 28.9996C24.5005 28.867 24.5532 28.7398 24.6469 28.646C24.7407 28.5522 24.8679 28.4996 25.0005 28.4996H33.7905L32.1505 26.8496C32.1027 26.8047 32.0645 26.7505 32.0385 26.6903C32.0124 26.6301 31.999 26.5652 31.999 26.4996C31.999 26.434 32.0124 26.3691 32.0385 26.3089C32.0645 26.2487 32.1027 26.1945 32.1505 26.1496C32.1954 26.1017 32.2496 26.0636 32.3098 26.0376C32.37 26.0115 32.4349 25.998 32.5005 25.998C32.5661 25.998 32.631 26.0115 32.6912 26.0376C32.7514 26.0636 32.8056 26.1017 32.8505 26.1496L35.3505 28.6496C35.3983 28.6945 35.4364 28.7487 35.4625 28.8089C35.4886 28.8691 35.502 28.934 35.502 28.9996C35.502 29.0652 35.4886 29.1301 35.4625 29.1903C35.4364 29.2505 35.3983 29.3047 35.3505 29.3496L32.8505 31.8496C32.8045 31.8955 32.75 31.932 32.6899 31.9569C32.6299 31.9817 32.5655 31.9945 32.5005 31.9945C32.4355 31.9945 32.3711 31.9817 32.3111 31.9569C32.251 31.932 32.1964 31.8955 32.1505 31.8496C32.1045 31.8036 32.0681 31.749 32.0432 31.689C32.0183 31.6289 32.0055 31.5646 32.0055 31.4996C32.0055 31.4346 32.0183 31.3702 32.0432 31.3101C32.0681 31.2501 32.1045 31.1955 32.1505 31.1496L33.7905 29.4996Z",
    fill: "black",
    stroke: "black",
    "stroke-width": "1.5"
  }), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M8.54012 11.1701C9.32436 11.1701 9.96012 10.5343 9.96012 9.75008C9.96012 8.96583 9.32436 8.33008 8.54012 8.33008C7.75587 8.33008 7.12012 8.96583 7.12012 9.75008C7.12012 10.5343 7.75587 11.1701 8.54012 11.1701Z",
    fill: "black",
    "fill-opacity": "0.3"
  }), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M12.5501 11.1701C13.3344 11.1701 13.9701 10.5343 13.9701 9.75008C13.9701 8.96583 13.3344 8.33008 12.5501 8.33008C11.7659 8.33008 11.1301 8.96583 11.1301 9.75008C11.1301 10.5343 11.7659 11.1701 12.5501 11.1701Z",
    fill: "black",
    "fill-opacity": "0.3"
  }), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M16.5601 11.1701C17.3444 11.1701 17.9801 10.5343 17.9801 9.75008C17.9801 8.96583 17.3444 8.33008 16.5601 8.33008C15.7759 8.33008 15.1401 8.96583 15.1401 9.75008C15.1401 10.5343 15.7759 11.1701 16.5601 11.1701Z",
    fill: "black",
    "fill-opacity": "0.3"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExitPage);

/***/ }),

/***/ "./static/src/store/bolt/externalLinkModal.js":
/*!****************************************************!*\
  !*** ./static/src/store/bolt/externalLinkModal.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");

store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('DISPLAY_EXTERNAL_LINK_MODAL', _ref => {
  let {
    href,
    onClick,
    originalEvent,
    target
  } = _ref;
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().externalLinkModal.set({
    open: true,
    href,
    target,
    originalEvent,
    onClick
  });
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('HIDE_EXTERNAL_LINK_MODAL', () => {
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().externalLinkModal.set({
    open: false
  });
});

/***/ }),

/***/ "./static/src/components/bolt/externalLinkModal/externalLinkModal.sss":
/*!****************************************************************************!*\
  !*** ./static/src/components/bolt/externalLinkModal/externalLinkModal.sss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"overlay":"externalLinkModal__overlay__qTCnf","container":"externalLinkModal__container__F9WoR","content":"externalLinkModal__content__QIgxt","icon":"externalLinkModal__icon__OzfhH","buttons":"externalLinkModal__buttons__WiqgM","button":"externalLinkModal__button__BpzQ5"});

/***/ })

}]);
//# sourceMappingURL=externalLinkModal.bolt.js.map?v=18a3a1a3944d21a7a08e