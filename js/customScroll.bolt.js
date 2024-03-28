"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkthundr"] = (typeof self !== 'undefined' ? self : this)["webpackChunkthundr"] || []).push([["customScroll"],{

/***/ "./static/src/components/bolt/customScroll/customScroll.js":
/*!*****************************************************************!*\
  !*** ./static/src/components/bolt/customScroll/customScroll.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomScroll)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var components_bolt_sectionLoader_sectionLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/bolt/sectionLoader/sectionLoader */ "./static/src/components/bolt/sectionLoader/sectionLoader.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var pages_bolt_pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pages/bolt_pages */ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/pages/bolt_pages.js");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var utils_smoothScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/smoothScroll */ "./static/src/utils/smoothScroll.js");
/* harmony import */ var utils_bolt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/bolt */ "./static/src/utils/bolt/index.js");
/* harmony import */ var components_bolt_customScroll_customScroll_sss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/bolt/customScroll/customScroll.sss */ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/customScroll/customScroll.sss");









class CustomScroll extends preact__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.autoUpdateUrl = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(props.store, `appData.pages.${props.id}.data.autoUpdateUrl`, null);
    this.preloadAllSections = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(props.store, `appData.pages.${props.id}.data.preloadAllSections`, false);
    this.onResize = this.onResize.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.goToHash = this.goToHash.bind(this);
    this.checkHash = this.checkHash.bind(this);
    this.recalculateElementsPositions = this.recalculateElementsPositions.bind(this);
    this.isScrolling = 0;
  }
  async componentDidMount() {
    store_store__WEBPACK_IMPORTED_MODULE_5__["default"].emit('UPDATE_HUB_ACTIVE_PERCENTAGE');
    window.addEventListener('hashchange', this.checkHash);
    const scrollContainer = document.getElementById('mainScroll');
    if (this.autoUpdateUrl) {
      window.addEventListener('resize', this.onResize);
      scrollContainer?.addEventListener('scroll', this.onScroll);
      this.recalculateElementsPositions();
    }
    await this.dataLoadingPromise;
    this.dataLoadingPromise = null;
    this.checkHash();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
    const scrollContainer = document.getElementById('mainScroll');
    scrollContainer?.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('hashchange', this.checkHash);
  }
  checkHash() {
    this.goToHash(location.hash.slice(1));
  }
  scrollToTheElem(scrollToElem) {
    let headerHeight = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(this.props, 'store.client.headerHeight', (0,utils_bolt__WEBPACK_IMPORTED_MODULE_7__.getHeaderHeight)());
    let scrollContainer = document.getElementById('mainScroll');
    this.isScrolling++;
    (0,utils_smoothScroll__WEBPACK_IMPORTED_MODULE_6__.smoothScrollTo)(scrollContainer, scrollToElem, 600, {
      callback: () => this.isScrolling--,
      offset: headerHeight
    });
  }
  goToHash(hash) {
    if (!hash) {
      return;
    }
    const scrollContainer = document.getElementById('mainScroll');
    let scrollToElem = document.querySelector(`[data-hash-wrapper="${hash}"]`) || document.getElementById(hash);
    if (scrollToElem !== null) {
      this.setState({
        hash: hash
      });
      this.scrollToTheElem(scrollToElem, scrollContainer);
    }
  }
  onResize() {
    if (this.dataLoadingPromise) {
      return;
    }
    this.recalculateElementsPositions();
    this.checkActiveElement();
  }
  onScroll() {
    if (this.dataLoadingPromise || this.isScrolling > 0) {
      return;
    }
    this.checkActiveElement();
  }
  recalculateElementsPositions() {
    if (!this.base || !this.autoUpdateUrl) {
      return;
    }
    this.parentTop = this.base.offsetTop;
    // let children = this.$customScroll?.children || [];
    let children = this.$customScroll?.querySelectorAll('[data-hash-wrapper]') || [];
    this.elements = [...children].map(e => {
      const hash = e.getAttribute('data-hash-wrapper');
      return {
        url: ['bottom', 'top', 'hero'].some(attr => hash?.toLowerCase()?.includes(attr)) ? '.' + location.search : location.search + '#' + hash,
        position: e.offsetTop + e.offsetHeight * .3 + this.parentTop
      };
    });
  }
  checkActiveElement() {
    if (!this.elements || !this.autoUpdateUrl) {
      return;
    }
    this.recalculateElementsPositions();
    const scrollContainer = document.getElementById('mainScroll');
    let currentPosition = this.parentTop + scrollContainer.scrollTop + (window.innerHeight - this.parentTop) * .2;
    let withDistance = this.elements.map(e => ({
      ...e,
      dist: Math.abs(e.position - currentPosition)
    }));
    let closest = withDistance.sort((a, b) => a.dist - b.dist)[0];
    let url = closest?.url;
    if (!url || this.currentPath && this.currentPath === url) {
      return;
    }
    this.currentPath = url;
    let fullURL = new URL(url, location.href);
    const activePage = store_store__WEBPACK_IMPORTED_MODULE_5__["default"].get().activePage;
    if (location.href !== fullURL && this.props.id === activePage) {
      history.replaceState(null, '', url);
    }
  }
  render(props) {
    const {
      store
    } = props;
    const activePageSections = pages_bolt_pages__WEBPACK_IMPORTED_MODULE_4__.sectionsWithParent.filter(page => page.parent === store.activePage);
    const sectionFullPage = activePageSections.length === 1;
    let headerHeight = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(store, 'client.headerHeight', 64);
    return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      style: {
        paddingTop: headerHeight
      },
      "data-section": props.id,
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)(sectionFullPage && components_bolt_customScroll_customScroll_sss__WEBPACK_IMPORTED_MODULE_8__["default"].fullPage, components_bolt_customScroll_customScroll_sss__WEBPACK_IMPORTED_MODULE_8__["default"].innerContainer),
      ref: e => this.$customScroll = e,
      key: "sections"
    }, activePageSections.map(section => {
      const sectionData = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(this.props, `store.appData.pages.${section.id}`, {});
      const hash = sectionData?.data?.disableMainHash ? null : sectionData?.data?.hash || sectionData?.id;
      const sectionProps = {
        store,
        appData: store.appData,
        client: store.client,
        id: section.id,
        getter: section.getter,
        [section.id]: store[section.id],
        isSection: true,
        isLoneSection: activePageSections.length === 1,
        sectionFullPage,
        isPreloaded: this.preloadAllSections || section.isPreloaded,
        parentIsScrolling: this.isScrolling,
        checkHash: this.checkHash
      };
      return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        "data-hash-wrapper": hash,
        key: section.id
      }, !section.isPreloaded ? (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(components_bolt_sectionLoader_sectionLoader__WEBPACK_IMPORTED_MODULE_2__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionProps, {
        key: section.id
      })) : (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(section.component, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionProps, {
        key: section.id
      })));
    }), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      "data-hash-wrapper": "bottom",
      key: "bottom"
    }));
  }
}

/***/ }),

/***/ "./static/src/components/bolt/sectionLoader/sectionLoader.js":
/*!*******************************************************************!*\
  !*** ./static/src/components/bolt/sectionLoader/sectionLoader.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SectionLoader)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var components_bolt_sectionLoader_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/bolt/sectionLoader/spinner */ "./static/src/components/bolt/sectionLoader/spinner.js");
/* harmony import */ var components_bolt_sectionLoader_sectionLoader_sss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/bolt/sectionLoader/sectionLoader.sss */ "./static/src/components/bolt/sectionLoader/sectionLoader.sss");







// const isServer = typeof window === 'undefined';

class SectionLoader extends preact__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.load = this.load.bind(this);
    this.determineLoad = this.determineLoad.bind(this);
    this.loadSectionEvent = this.loadSectionEvent.bind(this);

    // if (!isServer && window.location.hash) {
    // 	const landingId = window.location.hash.replace('#', '');
    // 	const noSlug = accessNested(Store.get(), `appData.pages.${landingId}`, false);
    // 	if (!noSlug) {
    // 		const pages = accessNested(props, 'appData.pages', null);
    // 		const parentSection = pages && Object.keys(pages).filter(page => pages[page].slug === landingId)[0];
    // 		if (props.id === parentSection) {
    // 			this.load();
    // 		}
    // 	}
    // 	if (props.id === landingId) {
    // 		this.load();
    // 	}
    // }
  }
  componentDidMount() {
    let requested = store_store__WEBPACK_IMPORTED_MODULE_2__["default"].emit('GET_REQUESTED_SECTIONS') || [];
    if (requested.includes(this.props.id)) {
      return this.load();
    }
    store_store__WEBPACK_IMPORTED_MODULE_2__["default"].on('LOAD_SECTION', this.loadSectionEvent);
    window.addEventListener('scroll', this.determineLoad, true);
    this.determineLoad();
  }
  componentWillUnmount() {
    store_store__WEBPACK_IMPORTED_MODULE_2__["default"].off('LOAD_SECTION', this.loadSectionEvent);
    window.removeEventListener('scroll', this.determineLoad, true);
  }
  componentDidUpdate() {
    if (!this.emitted && this.$component) {
      this.emitted = true;
      store_store__WEBPACK_IMPORTED_MODULE_2__["default"].emit('SECTION_LOADED', this.props.id, this.$component.base || this.$component);
    }
  }
  loadSectionEvent(id) {
    if (id !== this.props.id) {
      return;
    }
    this.load();
    store_store__WEBPACK_IMPORTED_MODULE_2__["default"].off('LOAD_SECTION', this.loadSectionEvent);
  }
  determineLoad() {
    const rect = this.base.getBoundingClientRect();
    if (rect.top <= window.innerHeight + 100) {
      window.removeEventListener('scroll', this.determineLoad, true);
      this.load();
    }
  }
  async load() {
    if (this.loadStarted) {
      return;
    }
    this.loadStarted = true;
    const {
      getter
    } = this.props;
    this.component = await (typeof getter === 'function' ? getter() : getter);
    this.setState({
      showComponent: true
    });
  }
  render(props) {
    if (!this.state.showComponent) {
      return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: components_bolt_sectionLoader_sectionLoader_sss__WEBPACK_IMPORTED_MODULE_5__["default"].loading
      }, (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(components_bolt_sectionLoader_spinner__WEBPACK_IMPORTED_MODULE_4__["default"], {
        appData: props.appData
      }));
    }
    const Comp = this.component.default;
    const {
      getter,
      singlePage,
      ...compProps
    } = props;
    return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(Comp, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, compProps, {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)({
        fullPage: singlePage
      }),
      ref: e => this.$component = e
    }));
  }
}

/***/ }),

/***/ "./static/src/components/bolt/sectionLoader/spinner.js":
/*!*************************************************************!*\
  !*** ./static/src/components/bolt/sectionLoader/spinner.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Spinner)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var utils_bolt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/bolt */ "./static/src/utils/bolt/index.js");
/* harmony import */ var utils_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/assets */ "./static/src/utils/assets.js");
/* harmony import */ var utils_bolt_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/bolt/webp */ "./static/src/utils/bolt/webp.js");
/* harmony import */ var components_bolt_sectionLoader_spinner_sss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/bolt/sectionLoader/spinner.sss */ "./static/src/components/bolt/sectionLoader/spinner.sss");






class Spinner extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  render(props, _ref) {
    let {
      ttLoaded
    } = _ref;
    const {
      appData,
      onlySpinner,
      class: extraClass
    } = props;
    const copy = appData ? appData.copy : {};
    const accessibilityCopy = copy.accessibilityCopy || {};
    const tt = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(this.props, 'appData.header.powsterHeader.tt', null);
    const fallbackFormat = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(this.props, appData.header.alternativeImageFormat || 'png');
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(extraClass, components_bolt_sectionLoader_spinner_sss__WEBPACK_IMPORTED_MODULE_5__["default"].container, onlySpinner && components_bolt_sectionLoader_spinner_sss__WEBPACK_IMPORTED_MODULE_5__["default"].centered)
    }, !onlySpinner && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(utils_bolt_webp__WEBPACK_IMPORTED_MODULE_4__.Picture, {
      style: {
        display: ttLoaded ? 'block' : 'none'
      },
      class: components_bolt_sectionLoader_spinner_sss__WEBPACK_IMPORTED_MODULE_5__["default"].tt,
      key: "tt",
      alt: accessibilityCopy,
      src: tt && (0,utils_assets__WEBPACK_IMPORTED_MODULE_3__.useDynamicAssetFolder)((0,utils_bolt__WEBPACK_IMPORTED_MODULE_2__.getValueForClientSize)(tt)),
      fallbackFormat: fallbackFormat,
      onLoad: () => this.setState({
        ttLoaded: true
      })
    }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_sectionLoader_spinner_sss__WEBPACK_IMPORTED_MODULE_5__["default"].ring,
      key: "spinner"
    }));
  }
}

/***/ }),

/***/ "./static/src/components/bolt/sectionLoader/sectionLoader.sss":
/*!********************************************************************!*\
  !*** ./static/src/components/bolt/sectionLoader/sectionLoader.sss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"loading":"sectionLoader__loading__qojkE"});

/***/ }),

/***/ "./static/src/components/bolt/sectionLoader/spinner.sss":
/*!**************************************************************!*\
  !*** ./static/src/components/bolt/sectionLoader/spinner.sss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ring":"spinner__ring__uDHs4","spin":"spinner__spin__vCJfU","tt":"spinner__tt__eXsWy"});

/***/ }),

/***/ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/customScroll/customScroll.sss":
/*!**********************************************************************************************************************************!*\
  !*** ./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/customScroll/customScroll.sss ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"wrapper":"customScroll__wrapper__cepgU","innerContainer":"customScroll__innerContainer__dEYh0","fullPage":"customScroll__fullPage__MGpjK"});

/***/ })

}]);
//# sourceMappingURL=customScroll.bolt.js.map?v=f5620ac6dab89c7541c0