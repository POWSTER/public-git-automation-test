"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkthundr"] = (typeof self !== 'undefined' ? self : this)["webpackChunkthundr"] || []).push([["trailerOverlay"],{

/***/ "./static/src/components/bolt/trailerOverlay/trailerOverlay.js":
/*!*********************************************************************!*\
  !*** ./static/src/components/bolt/trailerOverlay/trailerOverlay.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TrailerOverlay)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var components_bolt_trailerOverlay_trailerOverlay_sss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/bolt/trailerOverlay/trailerOverlay.sss */ "./static/src/components/bolt/trailerOverlay/trailerOverlay.sss");
/* harmony import */ var components_bolt_burgerMenu_burgerMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/bolt/burgerMenu/burgerMenu */ "./static/src/components/bolt/burgerMenu/burgerMenu.js");
/* harmony import */ var store_bolt_trailerOverlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/bolt/trailerOverlay */ "./static/src/store/bolt/trailerOverlay.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var utils_parseQueryString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/parseQueryString */ "./static/src/utils/parseQueryString.js");
/* harmony import */ var components_bolt_videos_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/bolt/videos/player */ "./static/src/components/bolt/videos/player.js");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var components_core_html_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/core/html/html */ "./static/src/components/core/html/html.js");









class TrailerOverlay extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      closed: false,
      videoLoaded: false
    };
    this.handleLoaded = this.handleLoaded.bind(this);
    this.toggleOverlayOpen = this.toggleOverlayOpen.bind(this);
    this.checkIfOverlayShouldShow = this.checkIfOverlayShouldShow.bind(this);
    this.disabled = (0,utils_parseQueryString__WEBPACK_IMPORTED_MODULE_5__["default"])()['no-overlay'];
  }
  componentDidMount() {
    this.checkIfOverlayShouldShow(null, true);
    store_store__WEBPACK_IMPORTED_MODULE_7__["default"].on('SET_ACTIVE_PAGE', this.checkIfOverlayShouldShow);
  }
  componentWillUnmount() {
    window.clearTimeout(this.timeout);
    store_store__WEBPACK_IMPORTED_MODULE_7__["default"].off('SET_ACTIVE_PAGE', this.checkIfOverlayShouldShow);
    this.toggleOverlayOpen(false);
  }
  checkIfOverlayShouldShow(activePage) {
    if (this.props.manual) {
      return;
    }
    window.clearTimeout(this.timeout);
    const overlayTriggered = (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.accessNested)(this.props, 'store.trailerOverlay.overlayTriggered', false);
    const disableForGoogleBot = (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.accessNested)(this.props, 'data.disableForGoogleBot', false);
    const isGoogleBot = /Googlebot/i.test(navigator.userAgent);
    if (overlayTriggered || disableForGoogleBot && isGoogleBot) return;
    if (!activePage) activePage = (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.accessNested)(this.props, 'store.activePage');
    //let inclusions = accessNested(this.props, 'data.inclusions', '');
    let inclusions = (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.accessNested)(this.props, 'store.appData.options.videoOverlay.inclusions', '');
    if (inclusions) {
      inclusions = inclusions.split(',').map(page => page.trim());
    }
    if ((inclusions.length === 0 || inclusions.indexOf(activePage) > -1) && !this.disabled) {
      const delay = (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.accessNested)(this.props, 'store.appData.options.videoOverlay.delay', 0);
      this.timeout = window.setTimeout(() => {
        this.toggleOverlayOpen(true);
      }, delay * 1000);
    }
  }
  toggleOverlayOpen(open, e) {
    if (!open && e?.target?.id === 'youtubeCookieSettings') {
      return;
    }
    if (open) {
      this.overlayOpenAt = Date.now();
    } else {
      let now = Date.now();
      let openAt = this.overlayOpenAt || now;
      let duration = Math.floor((now - openAt) / 10) * 10;
      if (duration > 100) {
        duration = '100+';
      }
      store_store__WEBPACK_IMPORTED_MODULE_7__["default"].emit('POWSTER_GA_EVENT_TRACK', 'trailer-bounce', 'trailer', duration);
    }
    if (e?.target && !e.target.className?.includes('burgerMenu') && !e.target.className.includes(components_bolt_trailerOverlay_trailerOverlay_sss__WEBPACK_IMPORTED_MODULE_1__["default"].wrapper)) {
      return;
    }
    store_store__WEBPACK_IMPORTED_MODULE_7__["default"].emit('TOGGLE_TRAILER_OVERLAY', open);
  }
  handleLoaded() {
    this.setState({
      videoLoaded: true
    });
  }
  render() {
    const {
      videoLoaded
    } = this.state;
    const {
      store
    } = this.props;
    let {
      overlayOpen,
      data
    } = store?.trailerOverlay || {};
    if (this.disabled) {
      overlayOpen = false;
    }
    const fontVariables = (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.accessNested)(store, 'appData.styling.fontVariables.galleryAnnotations', {});
    const {
      video,
      annotation
    } = data || {};
    let videoSubObject = video && Object.values(video).find(value => value && typeof value === 'object');
    // If the video object is not nested, consider it to be the video data itself, otherwise take the first subobject
    let activeVideo = videoSubObject || video;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.joinClasses)(components_bolt_trailerOverlay_trailerOverlay_sss__WEBPACK_IMPORTED_MODULE_1__["default"].wrapper, videoLoaded && overlayOpen && components_bolt_trailerOverlay_trailerOverlay_sss__WEBPACK_IMPORTED_MODULE_1__["default"].visible),
      onClick: e => this.toggleOverlayOpen(false, e)
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_burgerMenu_burgerMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: overlayOpen ? 'close' : 'burger',
      trailerOverlay: true,
      extraClass: components_bolt_trailerOverlay_trailerOverlay_sss__WEBPACK_IMPORTED_MODULE_1__["default"].closeButton
    }), overlayOpen && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_videos_player__WEBPACK_IMPORTED_MODULE_6__["default"], {
      ref: ref => this.player = ref,
      extraClass: components_bolt_trailerOverlay_trailerOverlay_sss__WEBPACK_IMPORTED_MODULE_1__["default"].player,
      activeVideo: activeVideo,
      onEnded: () => this.toggleOverlayOpen(false),
      onLoaded: this.handleLoaded,
      hiddenPlaylist: true,
      overrideStyles: true,
      isTrailerOverlay: true
    }), annotation && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      style: fontVariables.galleryAnnotations,
      class: components_bolt_trailerOverlay_trailerOverlay_sss__WEBPACK_IMPORTED_MODULE_1__["default"].annotation
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_8__["default"], {
      markdown: true,
      content: annotation
    })));
  }
}

/***/ }),

/***/ "./static/src/components/bolt/trailerOverlay/trailerOverlay.sss":
/*!**********************************************************************!*\
  !*** ./static/src/components/bolt/trailerOverlay/trailerOverlay.sss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"wrapper":"trailerOverlay__wrapper__Zyq6X","visible":"trailerOverlay__visible__rtQYQ","closeButton":"trailerOverlay__closeButton__EjUap","player":"trailerOverlay__player__tDaXY","annotation":"trailerOverlay__annotation__TnTkr"});

/***/ })

}]);
//# sourceMappingURL=trailerOverlay.bolt.js.map?v=1bb1dbca063b24401f6e