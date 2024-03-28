"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkthundr"] = (typeof self !== 'undefined' ? self : this)["webpackChunkthundr"] || []).push([["pressKitGalleryOverlay"],{

/***/ "./static/src/components/bolt/pressKit/pressKitGalleryOverlay.js":
/*!***********************************************************************!*\
  !*** ./static/src/components/bolt/pressKit/pressKitGalleryOverlay.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PressKitGalleryOverlay)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var components_bolt_icons_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/bolt/icons/close */ "./static/src/components/bolt/icons/close.js");
/* harmony import */ var components_bolt_icons_share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/bolt/icons/share */ "./static/src/components/bolt/icons/share.js");
/* harmony import */ var components_bolt_icons_download__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/bolt/icons/download */ "./static/src/components/bolt/icons/download.js");
/* harmony import */ var components_bolt_icons_arrowDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/bolt/icons/arrowDown */ "./static/src/components/bolt/icons/arrowDown.js");
/* harmony import */ var components_core_html_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/core/html/html */ "./static/src/components/core/html/html.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var utils_bolt_swipeDetect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/bolt/swipeDetect */ "./static/src/utils/bolt/swipeDetect.js");
/* harmony import */ var utils_bolt_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/bolt/index */ "./static/src/utils/bolt/index.js");
/* harmony import */ var components_bolt_pressKit_pressKitGalleryOverlay_sss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/bolt/pressKit/pressKitGalleryOverlay.sss */ "./static/src/components/bolt/pressKit/pressKitGalleryOverlay.sss");











class PressKitGalleryOverlay extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeOut: false
    };
    this.onSwipe = this.onSwipe.bind(this);
    this.downloadImage = this.downloadImage.bind(this);
    this.shareImage = this.shareImage.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
    this.pageData = {};
  }
  componentDidMount() {
    const activePage = this.props.store?.activePage;
    this.pageData = this.props.store?.appData?.pages[activePage].data;
  }
  componentDidUpdate(prevProps) {
    const activeSlide = this.props.store?.pressKit?.overlayOpen;
    const oldActiveSlide = prevProps.store?.pressKit?.overlayOpen;
    const isDesktop = this.props.store?.client?.dimensions?.width >= 1024;
    const activePage = this.props.store?.activePage;
    const oldActivePage = prevProps.store?.activePage;
    if (activeSlide && !oldActiveSlide && !isDesktop) {
      if (this.image) {
        this.swipeDetect = (0,utils_bolt_swipeDetect__WEBPACK_IMPORTED_MODULE_8__.swipeDetect)(this.image, this.onSwipe, () => {}, 'horizontal');
      }
    } else if (oldActiveSlide && !activeSlide && !isDesktop) {
      this.swipeDetect && this.swipeDetect.remove();
    }
    if (oldActivePage !== activePage) {
      this.pageData = this.props.store?.appData?.pages[activePage].data;
    }
  }
  onSwipe(direction) {
    if (direction === 'none') return;
    const assets = (0,utils_utils__WEBPACK_IMPORTED_MODULE_7__.sortObjectByOrder)(this.pageData?.assets || {}, (val, key) => ({
      ...val,
      key
    }));
    const activeAsset = assets.findIndex(asset => asset.key === store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get().pressKit?.overlayOpen);
    let newIndex = activeAsset + (direction === 'left' ? 1 : -1);
    if (newIndex < 0) {
      newIndex = assets.length - 1;
    } else if (newIndex >= assets.length) {
      newIndex = 0;
    }
    const newAsset = assets[newIndex];
    this.setState({
      direction
    });
    this.updateActiveSlide(newAsset.key);
  }
  async closeOverlay() {
    this.setState({
      fadeOut: true
    });
    await new Promise(resolve => setTimeout(resolve, 300));
    store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit('TOGGLE_PRESSKIT_OVERLAY', null);
    this.setState({
      fadeOut: false
    });
  }
  updateActiveSlide(key) {
    store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit('TOGGLE_PRESSKIT_OVERLAY', key);
  }
  downloadImage() {
    const assets = this.pageData?.assets || {};
    const activeAsset = assets[store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get().pressKit?.overlayOpen] || {};
    if (activeAsset.assetLink) {
      return (0,utils_bolt_index__WEBPACK_IMPORTED_MODULE_9__.linkOut)(activeAsset.assetLink);
    }
    store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit('DOWNLOAD_PRESSKIT_IMAGE', activeAsset);
  }
  async shareImage() {
    const assets = this.pageData?.assets || {};
    const activeAsset = assets[store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get().pressKit?.overlayOpen];
    store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit('SHARE_PRESSKIT_IMAGE', activeAsset);
  }
  renderGallery() {
    const assets = this.pageData?.assets || {};
    const activeAsset = assets[store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get().pressKit?.overlayOpen] || {};
    const {
      preview,
      thumbnail,
      alt
    } = activeAsset;
    const hideArrowsMobile = this.pageData?.hideArrowsMobile;
    const isDesktop = this.props.store?.client?.isDesktopSize;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_pressKit_pressKitGalleryOverlay_sss__WEBPACK_IMPORTED_MODULE_10__["default"].gallery,
      ref: ref => this.image = ref
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("img", {
      class: components_bolt_pressKit_pressKitGalleryOverlay_sss__WEBPACK_IMPORTED_MODULE_10__["default"].preview,
      src: preview || thumbnail,
      alt: alt
    }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_7__.joinClasses)(components_bolt_pressKit_pressKitGalleryOverlay_sss__WEBPACK_IMPORTED_MODULE_10__["default"].arrows, hideArrowsMobile && !isDesktop && components_bolt_pressKit_pressKitGalleryOverlay_sss__WEBPACK_IMPORTED_MODULE_10__["default"].hide)
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_arrowDown__WEBPACK_IMPORTED_MODULE_5__["default"], {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_7__.joinClasses)(components_bolt_pressKit_pressKitGalleryOverlay_sss__WEBPACK_IMPORTED_MODULE_10__["default"].arrow, components_bolt_pressKit_pressKitGalleryOverlay_sss__WEBPACK_IMPORTED_MODULE_10__["default"].left),
      onClick: () => this.onSwipe('right')
    }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_arrowDown__WEBPACK_IMPORTED_MODULE_5__["default"], {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_7__.joinClasses)(components_bolt_pressKit_pressKitGalleryOverlay_sss__WEBPACK_IMPORTED_MODULE_10__["default"].arrow, components_bolt_pressKit_pressKitGalleryOverlay_sss__WEBPACK_IMPORTED_MODULE_10__["default"].right),
      onClick: () => this.onSwipe('left')
    })));
  }
  renderBreadcrumbs() {
    const assets = (0,utils_utils__WEBPACK_IMPORTED_MODULE_7__.sortObjectByOrder)(this.pageData?.assets || {}, (val, key) => ({
      ...val,
      key
    }));
    const activeAsset = store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get().pressKit?.overlayOpen;
    const {
      direction
    } = this.state;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_pressKit_pressKitGalleryOverlay_sss__WEBPACK_IMPORTED_MODULE_10__["default"].breadcrumbs
    }, assets.map((asset, index) => (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_7__.joinClasses)(components_bolt_pressKit_pressKitGalleryOverlay_sss__WEBPACK_IMPORTED_MODULE_10__["default"].dot, asset.key === activeAsset && components_bolt_pressKit_pressKitGalleryOverlay_sss__WEBPACK_IMPORTED_MODULE_10__["default"].active, direction === 'right' ? components_bolt_pressKit_pressKitGalleryOverlay_sss__WEBPACK_IMPORTED_MODULE_10__["default"].goingLeft : components_bolt_pressKit_pressKitGalleryOverlay_sss__WEBPACK_IMPORTED_MODULE_10__["default"].goingRight, index === 0 && components_bolt_pressKit_pressKitGalleryOverlay_sss__WEBPACK_IMPORTED_MODULE_10__["default"].isFirst, index === assets.length - 1 && components_bolt_pressKit_pressKitGalleryOverlay_sss__WEBPACK_IMPORTED_MODULE_10__["default"].isLast),
      onClick: () => this.updateActiveSlide(asset.key)
    })));
  }
  renderInfo() {
    const {
      assets = {},
      categories = {}
    } = this.pageData;
    const activeAsset = assets[store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get().pressKit?.overlayOpen] || {};
    const {
      category,
      label
    } = activeAsset;
    const categoryName = categories[category];
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_7__.joinClasses)(components_bolt_pressKit_pressKitGalleryOverlay_sss__WEBPACK_IMPORTED_MODULE_10__["default"].info, 'small')
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_6__["default"], {
      markdown: true,
      tag: "strong",
      class: components_bolt_pressKit_pressKitGalleryOverlay_sss__WEBPACK_IMPORTED_MODULE_10__["default"].categoryName
    }, categoryName), ":"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_6__["default"], {
      tag: "span",
      markdown: true
    }, label));
  }
  renderIcons() {
    const canShare = this.props.store?.pressKit?.canShareFile;
    const isDesktop = this.props.store?.client?.device === 'desktop';
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_pressKit_pressKitGalleryOverlay_sss__WEBPACK_IMPORTED_MODULE_10__["default"].icons
    }, canShare && !isDesktop && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_share__WEBPACK_IMPORTED_MODULE_3__["default"], {
      class: components_bolt_pressKit_pressKitGalleryOverlay_sss__WEBPACK_IMPORTED_MODULE_10__["default"].icon,
      onClick: this.shareImage
    }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_download__WEBPACK_IMPORTED_MODULE_4__["default"], {
      class: components_bolt_pressKit_pressKitGalleryOverlay_sss__WEBPACK_IMPORTED_MODULE_10__["default"].icon,
      onClick: this.downloadImage
    }));
  }
  render() {
    const store = store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get();
    const activeAsset = store.pressKit?.overlayOpen;
    const {
      fadeOut
    } = this.state;
    const assets = this.pageData?.assets || {};
    if (!activeAsset || !assets[activeAsset]) {
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", null);
    }
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_7__.joinClasses)(components_bolt_pressKit_pressKitGalleryOverlay_sss__WEBPACK_IMPORTED_MODULE_10__["default"].wrapper, fadeOut && components_bolt_pressKit_pressKitGalleryOverlay_sss__WEBPACK_IMPORTED_MODULE_10__["default"].fadeOut)
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_pressKit_pressKitGalleryOverlay_sss__WEBPACK_IMPORTED_MODULE_10__["default"].container
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_close__WEBPACK_IMPORTED_MODULE_2__["default"], {
      class: components_bolt_pressKit_pressKitGalleryOverlay_sss__WEBPACK_IMPORTED_MODULE_10__["default"].close,
      onClick: this.closeOverlay
    }), this.renderGallery(), this.renderBreadcrumbs(), this.renderIcons(), this.renderInfo()));
  }
}

/***/ }),

/***/ "./static/src/utils/bolt/swipeDetect.js":
/*!**********************************************!*\
  !*** ./static/src/utils/bolt/swipeDetect.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   swipeDetect: () => (/* binding */ swipeDetect)
/* harmony export */ });
const swipeDetect = function (el, callback) {
  let touchMoveCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : () => {};
  let direction = arguments.length > 3 ? arguments[3] : undefined;
  let touchsurface = el;
  let swipedir;
  let startX;
  let startY;
  let distX;
  let distY;
  let threshold = 100;
  let restraint = 500;
  let allowedTime = 600;
  let wheelThreshold = 50;
  let elapsedTime;
  let startTime;
  let handleSwipe = callback || function () {};
  const handleTouchStart = e => {
    let touchobj = e.changedTouches[0];
    swipedir = 'none';
    startX = touchobj.pageX;
    startY = touchobj.pageY;
    startTime = new Date().getTime();
  };
  const handleTouchMove = e => {
    let touchobj = e.changedTouches[0];
    distX = touchobj.pageX - startX;
    distY = touchobj.pageY - startY;
    touchMoveCallback(distX, distY);
  };
  const handleTouchEnd = e => {
    let touchobj = e.changedTouches[0];
    distX = touchobj.pageX - startX;
    distY = touchobj.pageY - startY;
    elapsedTime = new Date().getTime() - startTime;
    if (elapsedTime <= allowedTime) {
      if (direction === 'horizontal') {
        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
          swipedir = distX < 0 ? 'left' : 'right';
        }
      } else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
        swipedir = distY < 0 ? 'up' : 'down';
      }
    }
    if (swipedir) {
      handleSwipe(swipedir);
    }
  };
  const handleWheel = e => {
    if (e.deltaY > wheelThreshold) {
      swipedir = direction === 'horizontal' ? 'left' : 'up';
      handleSwipe(swipedir);
    } else if (e.deltaY < -wheelThreshold) {
      swipedir = direction === 'horizontal' ? 'right' : 'down';
      handleSwipe(swipedir);
    }
  };
  const handleKeyDown = e => {
    if (e.key === 'ArrowDown') {
      handleSwipe('up');
    } else if (e.key === 'ArrowUp') {
      handleSwipe('down');
    }
  };
  touchsurface.addEventListener('touchstart', handleTouchStart, false);
  touchsurface.addEventListener('touchmove', handleTouchMove, false);
  touchsurface.addEventListener('touchend', handleTouchEnd, false);
  touchsurface.addEventListener('wheel', handleWheel, false);
  document.addEventListener('keydown', handleKeyDown, false);
  const remove = () => {
    touchsurface.removeEventListener('wheel', handleWheel, false);
    touchsurface.removeEventListener('touchstart', handleTouchStart, false);
    touchsurface.removeEventListener('touchmove', handleTouchMove, false);
    touchsurface.removeEventListener('touchend', handleTouchEnd, false);
    document.removeEventListener('keydown', handleKeyDown, false);
  };
  return {
    remove
  };
};

/***/ }),

/***/ "./static/src/components/bolt/pressKit/pressKitGalleryOverlay.sss":
/*!************************************************************************!*\
  !*** ./static/src/components/bolt/pressKit/pressKitGalleryOverlay.sss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"wrapper":"pressKitGalleryOverlay__wrapper__IbrwN","fadeIn":"pressKitGalleryOverlay__fadeIn__Smti2","fadeOut":"pressKitGalleryOverlay__fadeOut__g2fAj","container":"pressKitGalleryOverlay__container__M4QcG","gallery":"pressKitGalleryOverlay__gallery__W8ScP","preview":"pressKitGalleryOverlay__preview__sTtrW","close":"pressKitGalleryOverlay__close__jk_r0","info":"pressKitGalleryOverlay__info__xrAPe","breadcrumbs":"pressKitGalleryOverlay__breadcrumbs__aILJa","dot":"pressKitGalleryOverlay__dot__AHzjw","popBack":"pressKitGalleryOverlay__popBack__TiKot","fade":"pressKitGalleryOverlay__fade__TKwoj","pop":"pressKitGalleryOverlay__pop__q8ESR","active":"pressKitGalleryOverlay__active__v9riW","goingLeft":"pressKitGalleryOverlay__goingLeft__moTOk","isLast":"pressKitGalleryOverlay__isLast__q3UDr","goingRight":"pressKitGalleryOverlay__goingRight__UhszM","isFirst":"pressKitGalleryOverlay__isFirst__xjt77","icons":"pressKitGalleryOverlay__icons__vHFyz","icon":"pressKitGalleryOverlay__icon__wZOXu","arrows":"pressKitGalleryOverlay__arrows__PZ3PP","arrow":"pressKitGalleryOverlay__arrow__chFao","left":"pressKitGalleryOverlay__left__e9nIg","right":"pressKitGalleryOverlay__right__j5JL7","hide":"pressKitGalleryOverlay__hide__S6slk"});

/***/ })

}]);
//# sourceMappingURL=pressKitGalleryOverlay.bolt.js.map?v=b13f90b4ee1b37f03a96