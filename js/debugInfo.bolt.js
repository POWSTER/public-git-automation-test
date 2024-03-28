"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkthundr"] = (typeof self !== 'undefined' ? self : this)["webpackChunkthundr"] || []).push([["debugInfo"],{

/***/ "./static/src/components/bolt/debugInfo/debugInfo.js":
/*!***********************************************************!*\
  !*** ./static/src/components/bolt/debugInfo/debugInfo.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DebugInfo)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var components_bolt_debugInfo_debugInfo_sss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/bolt/debugInfo/debugInfo.sss */ "./static/src/components/bolt/debugInfo/debugInfo.sss");
/* harmony import */ var utils_formatDateTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/formatDateTime */ "./static/src/utils/formatDateTime.js");


// import { accessNested } from 'utils/utils';

// import DeviceDetector from 'device-detector-js';

const importers = ['flicks', 'cinepolis', 'cinemex', 'ingresso', 'velox', 'yandex', 'kinohod', 'rambler', 'cinergy', 'outnow', 'ntlive', 'byexp', 'pathe', 'faf', 'vue', 'webedia', 'cpass', 'mx', 'pow', 'amc', 'atom'];
class DebugInfo extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.updateInfo = this.updateInfo.bind(this);
  }
  componentDidMount() {
    // this.deviceDetector = new DeviceDetector();
    this.updateInfo();
    window.addEventListener('resize', this.updateInfo);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateInfo);
  }
  updateInfo() {
    const userAgent = window.navigator.userAgent;
    // const device = this.deviceDetector.parse(userAgent);

    const cleanBrowserName = {
      Edg: 'Edge',
      OPR: 'Opera'
    };
    let uaIndicators = [...userAgent.matchAll(/([^ ]+)\/([\d.]+)/g)].map(_ref => {
      let [, name, version] = _ref;
      return {
        name: cleanBrowserName[name] || name,
        version
      };
    });
    const uaSubsets = {
      Safari: ['Chrome'],
      Chrome: ['SamsungBrowser']
    };
    let browser = uaIndicators.pop();
    while (browser?.name in uaSubsets) {
      let next = uaIndicators.pop();
      if (!uaSubsets[browser.name].includes(next.name)) {
        break;
      }
      browser = next;
    }
    const osMatch = userAgent.match(/\([^;]*;\s*([^;)]+)\s*(?:;[^)]*)?\)/);
    const os = osMatch?.[1] || 'unknown OS';

    // const deviceModel = device.device.brand + ' ' + device.device.model;
    // const os = device.os.name + ' ' + device.os.version;
    // const browser = device.client.name + ' ' + device.client.version;

    let zoom = window.visualViewport?.scale;
    if (zoom === 1) {
      // Can be wrong on some high-density pixel screens but whatev
      // Can also use window.outerWidth / window.innerWidth in some cases but not universal either
      // test page (tap text to refresh): https://cdpn.io/pen/debug/MWVmMpj/e46de905095437e04945ad64a7530aa5
      zoom = window.devicePixelRatio;
    }
    this.setState({
      // userAgentInfo: deviceModel + ' - ' + os + ' - ' + browser,
      userAgentInfo: `${browser.name} ${browser.version} (${os})`,
      userAgentSource: userAgent,
      browserWindowSize: window.innerWidth + 'x' + window.innerHeight,
      screenResolution: window.screen.width + 'x' + window.screen.height,
      availScreenSpace: window.screen.availWidth + 'x' + window.screen.availHeight,
      browserZoomPercentage: (zoom * 100).toFixed(2) + '%',
      browserLanguage: navigator.language
    });
  }
  render(_ref2, state) {
    let {
      appData,
      appState
    } = _ref2;
    const {
      userAgentInfo,
      userAgentSource,
      browserWindowSize,
      screenResolution,
      availScreenSpace,
      browserZoomPercentage,
      browserLanguage
    } = state;
    let activePage = appState.activePage;
    let showtimesPage = 'boltShowtimes';
    if (appData?.pages?.[activePage]?.type === 'showtimes') {
      showtimesPage = activePage;
    }
    let showtimesData = appData?.pages?.[showtimesPage]?.data;
    const appId = appData?.meta?.id;
    const movieId = showtimesData?.movieId || '-';
    const city = appState?.client?.geo?.city;
    const country = appState?.client?.geo?.countryName;
    let buildDate = 'unknown';
    if (typeof window !== 'undefined') {
      buildDate = (0,utils_formatDateTime__WEBPACK_IMPORTED_MODULE_2__["default"])(window.__BUILD_DATE__, 'yyyy-MM-dd hh:mm');
    }
    const deeplinkProviders = showtimesData?.providers?.deeplink?.split(',')?.map(provider => {
      let index = importers.indexOf(provider.trim()) + 1;
      return index || 'unknown';
    }) || ['-'];
    const showtimesProviders = showtimesData?.providers?.showtimes?.split(',')?.map(provider => {
      let index = importers.indexOf(provider.trim()) + 1;
      return index || 'unknown';
    }) || ['-'];
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_debugInfo_debugInfo_sss__WEBPACK_IMPORTED_MODULE_1__["default"].wrapper
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_debugInfo_debugInfo_sss__WEBPACK_IMPORTED_MODULE_1__["default"].line
    }, "App ID: ", (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, appId)), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_debugInfo_debugInfo_sss__WEBPACK_IMPORTED_MODULE_1__["default"].line
    }, "Region: ", (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, "us".toUpperCase())), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_debugInfo_debugInfo_sss__WEBPACK_IMPORTED_MODULE_1__["default"].line
    }, "Last Published: ", (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, buildDate)), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_debugInfo_debugInfo_sss__WEBPACK_IMPORTED_MODULE_1__["default"].line
    }, "Movie ID: ", (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, movieId)), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_debugInfo_debugInfo_sss__WEBPACK_IMPORTED_MODULE_1__["default"].line
    }, "Screenings Providers: ", (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, showtimesProviders.join(', '))), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_debugInfo_debugInfo_sss__WEBPACK_IMPORTED_MODULE_1__["default"].line
    }, "Deeplink Providers: ", (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, deeplinkProviders.join(', '))), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_debugInfo_debugInfo_sss__WEBPACK_IMPORTED_MODULE_1__["default"].line
    }, "Browser Language: ", (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, browserLanguage)), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_debugInfo_debugInfo_sss__WEBPACK_IMPORTED_MODULE_1__["default"].line
    }, "Approx Location: ", (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, city + ', ' + country)), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_debugInfo_debugInfo_sss__WEBPACK_IMPORTED_MODULE_1__["default"].line
    }, "User-Agent: ", (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
      title: userAgentSource
    }, userAgentInfo)), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_debugInfo_debugInfo_sss__WEBPACK_IMPORTED_MODULE_1__["default"].line
    }, "Browser Window Size: ", (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, browserWindowSize)), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_debugInfo_debugInfo_sss__WEBPACK_IMPORTED_MODULE_1__["default"].line
    }, "Screen Res: ", (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, screenResolution)), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_debugInfo_debugInfo_sss__WEBPACK_IMPORTED_MODULE_1__["default"].line
    }, "Avail Screen Space: ", (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, availScreenSpace)), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_debugInfo_debugInfo_sss__WEBPACK_IMPORTED_MODULE_1__["default"].line
    }, "Browser Zoom Level: ", (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, browserZoomPercentage)));
  }
}

/***/ }),

/***/ "./static/src/components/bolt/debugInfo/debugInfo.sss":
/*!************************************************************!*\
  !*** ./static/src/components/bolt/debugInfo/debugInfo.sss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"wrapper":"debugInfo__wrapper__R9SgL"});

/***/ })

}]);
//# sourceMappingURL=debugInfo.bolt.js.map?v=36740e71b2ec9e2a03d3