(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})((typeof self !== 'undefined' ? self : this), () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./static/src/base/bolt/boltApp.js":
/*!*****************************************!*\
  !*** ./static/src/base/bolt/boltApp.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BoltApp)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toArray */ "./node_modules/@babel/runtime/helpers/esm/toArray.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var store_bolt_trackingV2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/bolt/trackingV2 */ "./static/src/store/bolt/trackingV2.js");
/* harmony import */ var store_bolt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/bolt */ "./static/src/store/bolt/index.js");
/* harmony import */ var store_bolt_calendarRemind__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! store/bolt/calendarRemind */ "./static/src/store/bolt/calendarRemind.js");
/* harmony import */ var store_bolt_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! store/bolt/cookies */ "./static/src/store/bolt/cookies.js");
/* harmony import */ var store_bolt_ageGate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! store/bolt/ageGate */ "./static/src/store/bolt/ageGate.js");
/* harmony import */ var store_bolt_pixels__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! store/bolt/pixels */ "./static/src/store/bolt/pixels.js");
/* harmony import */ var store_bolt_externalCookieBanner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! store/bolt/externalCookieBanner */ "./static/src/store/bolt/externalCookieBanner.js");
/* harmony import */ var store_bolt_subscriberPopup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! store/bolt/subscriberPopup */ "./static/src/store/bolt/subscriberPopup.js");
/* harmony import */ var store_bolt_trailerOverlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! store/bolt/trailerOverlay */ "./static/src/store/bolt/trailerOverlay.js");
/* harmony import */ var utils_pure__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! utils/pure */ "./static/src/utils/pure.js");
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.min.js");
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(body_scroll_lock__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var utils_tryToPlayVideo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! utils/tryToPlayVideo */ "./static/src/utils/tryToPlayVideo.js");
/* harmony import */ var utils_tabbingDetection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! utils/tabbingDetection */ "./static/src/utils/tabbingDetection.js");
/* harmony import */ var utils_hoverDetection__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! utils/hoverDetection */ "./static/src/utils/hoverDetection.js");
/* harmony import */ var utils_parseQueryString__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! utils/parseQueryString */ "./static/src/utils/parseQueryString.js");
/* harmony import */ var utils_bolt__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! utils/bolt */ "./static/src/utils/bolt/index.js");
/* harmony import */ var utils_assets__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! utils/assets */ "./static/src/utils/assets.js");
/* harmony import */ var utils_visibilityChecks__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! utils/visibilityChecks */ "./static/src/utils/visibilityChecks.js");
/* harmony import */ var utils_bolt_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! utils/bolt/client */ "./static/src/utils/bolt/client.js");
/* harmony import */ var utils_cookies__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! utils/cookies */ "./static/src/utils/cookies.js");
/* harmony import */ var utils_copy__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! utils/copy */ "./static/src/utils/copy.js");
/* harmony import */ var components_bolt_header_header__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! components/bolt/header/header */ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/header/header.js");
/* harmony import */ var components_bolt_footer_footer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! components/bolt/footer/footer */ "./static/src/components/bolt/footer/footer.js");
/* harmony import */ var components_bolt_landscapeOverlay_landscapeOverlay__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! components/bolt/landscapeOverlay/landscapeOverlay */ "./static/src/components/bolt/landscapeOverlay/landscapeOverlay.js");
/* harmony import */ var components_shared_dynamicPageLoader_dynamicPageLoader__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! components/shared/dynamicPageLoader/dynamicPageLoader */ "./static/src/components/shared/dynamicPageLoader/dynamicPageLoader.js");
/* harmony import */ var pages_bolt_pages__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! pages/bolt_pages */ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/pages/bolt_pages.js");
/* harmony import */ var pages_bolt_features__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! pages/bolt_features */ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/pages/bolt_features.js");
/* harmony import */ var utils_bolt_webp__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! utils/bolt/webp */ "./static/src/utils/bolt/webp.js");
/* harmony import */ var utils_isWebPSupported__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! utils/isWebPSupported */ "./static/src/utils/isWebPSupported.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.esm.js");
/* harmony import */ var base_bolt_boltApp_sss__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! base/bolt/boltApp.sss */ "./static/src_overrides/studios/netflix/regions/us/base/bolt/boltApp.sss");

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }
function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return (0,_babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0__["default"])(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }
function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }
function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }
function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }
function _hasDecorators(element) { return element.decorators && element.decorators.length; }
function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }
function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




























// import SignUpForm from 'components/bolt/signUpForm/signUpForm';

// import TrailerOverlay from 'components/bolt/trailerOverlay/trailerOverlay';





if (typeof window !== 'undefined') {
  window.navigateInternally = utils_bolt__WEBPACK_IMPORTED_MODULE_19__.navigateInternally;
}

const markedRenderer = new marked__WEBPACK_IMPORTED_MODULE_33__.marked.Renderer();
const replaceCopyVariables = text => {
  return text.replace(/(\\)?(\$[0-9A-Z_]+)/g, (match, backslash, name) => {
    if (backslash) return name;
    return (0,utils_copy__WEBPACK_IMPORTED_MODULE_24__.getCopy)(name) || name;
  });
};
markedRenderer.html = html => {
  return replaceCopyVariables(html);
};
markedRenderer.text = text => {
  return replaceCopyVariables(text);
};
markedRenderer.link = (href, title, text) => {
  let attributes = {};
  if (title) attributes.title = title;
  if (href && href[0] === '+') {
    href = href.slice(1);
    attributes.target = '_blank';
  }
  try {
    href = encodeURI(href).replace(/%25/g, '%');
  } catch (e) {
    return text;
  }
  if (href && !/^((https?:)|mailto|(#\$))/.test(href)) {
    const [, page, qs, hash] = href.match(/^(.*?)(\?.+?)?(#.+)?$/) || [];
    href = (0,utils_bolt__WEBPACK_IMPORTED_MODULE_19__.getRelativePageUrl)(page, qs, hash) || '#';
    attributes.onclick = `event.preventDefault();navigateInternally('${page}'${qs ? `,{queryString:'${qs}'}` : ''});`;
    attributes.role = 'button';
  }
  attributes.href = href;
  let attrString = Object.keys(attributes).map(key => key + '="' + attributes[key] + '"').join(' ');
  return '<a ' + attrString + '>' + text + '</a>';
};
marked__WEBPACK_IMPORTED_MODULE_33__.marked.setOptions({
  renderer: markedRenderer,
  // breaks: true,
  smartLists: true
});
const videosWithError = {};

const isServer = typeof window === 'undefined';
let BoltApp = _decorate([utils_pure__WEBPACK_IMPORTED_MODULE_12__["default"]], function (_initialize, _Component) {
  class BoltApp extends _Component {
    constructor(props) {
      super(props);
      _initialize(this);
      this.state.appState = props.initialStore;
      this.state.orientation = props.initialStore?.client?.orientation || 'portrait';
      this.state.bgImageLoaded = false;
      this.state.backgroundStyle = {};
      this.state.fallbackBackgroundStyle = {};
      this.state.posterVisible = true;
      this.state.audioMuted = true;
      // Make isComponentLoaded "not loaded" only if the initial page is actually a page
      this.state.isComponentLoaded = !pages_bolt_pages__WEBPACK_IMPORTED_MODULE_29__.pages[this.state.appState.activePage];
      store_store__WEBPACK_IMPORTED_MODULE_2__["default"].set(props.initialStore);

      // Store.on('afterAll', (...data) => console.info('STORE EVENT:', ...data));
      store_store__WEBPACK_IMPORTED_MODULE_2__["default"].on('update', () => {
        const store = store_store__WEBPACK_IMPORTED_MODULE_2__["default"].get();
        this.setState({
          appState: store
        });
      });
      if (!isServer) {
        store_bolt_trackingV2__WEBPACK_IMPORTED_MODULE_3__.init(props.initialStore.appData?.tracking);
        this.handleResize();
        // NOTE: should we delay this until componentDidMount? or setTimeout(, 0)?
        store_store__WEBPACK_IMPORTED_MODULE_2__["default"].emit('LANDING', {
          page: (0,utils_bolt__WEBPACK_IMPORTED_MODULE_19__.getPageIdFromURL)(props.initialStore.appData?.pages) || window.__START_PAGE_ID__
        });
      }
      this.scrolling = this.scrolling.bind(this);
      this.handleResize = this.handleResize.bind(this);
      this.handlePopState = this.handlePopState.bind(this);
      this.handleOrientationChange = this.handleOrientationChange.bind(this);
      this.updateVisibilityPercentages = this.updateVisibilityPercentages.bind(this);
      this.updateBgStyle = this.updateBgStyle.bind(this);
      this.hidePoster = this.hidePoster.bind(this);
      this.removeBgVideo = this.removeBgVideo.bind(this);
      this.playVideo = this.playVideo.bind(this);
      this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
      this.onPageContentLoad = this.onPageContentLoad.bind(this);
      this.toggleAudio = this.toggleAudio.bind(this);
      let appData = props.initialStore?.appData;
      let features = appData?.options;
      this.getBgData();
      this.ageGateEnabled = features?.ageGate;
      this.externalLinkModalEnabled = features?.externalLinkModal === true || features?.externalLinkModal?.enabled;
      this.userFeedbackModalEnabled = !!features?.userFeedbackModal;
      this.powsterCookiesEnabled = features?.cookiesModal?.enableModal;
      this.tealiumCookiesEnabled = features?.enableTealiumCookieConsent;
      this.evidonCookiesEnabled = features?.requireUserConsent;
      this.ensightenCookiesEnabled = features?.enableEnsighten;
      this.oneTrustCookiesEnabled = features?.oneTrustCookieConsent;
      this.didomiCookiesEnabled = features?.didomiCookieConsent;
      this.SMECookiesEnabled = features?.SMECookieConsent;
      this.cookiesEnabled = this.powsterCookiesEnabled || this.tealiumCookiesEnabled || this.ensightenCookiesEnabled || this.evidonCookiesEnabled || this.oneTrustCookiesEnabled || this.didomiCookiesEnabled || this.SMECookiesEnabled;
    }
  }
  return {
    F: BoltApp,
    d: [{
      kind: "method",
      key: "componentDidMount",
      value: function componentDidMount() {
        this.isCalendarRemindMode = !(0,utils_bolt__WEBPACK_IMPORTED_MODULE_19__.shouldShowShowtimes)();
        const calendarNeeded = this.calendarNeeded();
        (0,utils_tabbingDetection__WEBPACK_IMPORTED_MODULE_16__["default"])();
        (0,utils_hoverDetection__WEBPACK_IMPORTED_MODULE_17__["default"])();
        window.addEventListener('orientationchange', this.handleOrientationChange);
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('scroll', this.scrolling, true);
        window.addEventListener('popstate', this.handlePopState);
        document.addEventListener('visibilitychange', this.handleVisibilityChange);
        this.handleOrientationChange();
        document.body.classList.add('js-loaded');
        store_store__WEBPACK_IMPORTED_MODULE_2__["default"].get().client.set({
          headerHeight: (0,utils_bolt__WEBPACK_IMPORTED_MODULE_19__.getHeaderHeight)()
        });
        let query = (0,utils_parseQueryString__WEBPACK_IMPORTED_MODULE_18__["default"])();
        store_store__WEBPACK_IMPORTED_MODULE_2__["default"].emit('LANDING_QUERY', query);
        if (this.cookiesEnabled) {
          store_store__WEBPACK_IMPORTED_MODULE_2__["default"].emit('CHECK_COOKIES', pages_bolt_features__WEBPACK_IMPORTED_MODULE_30__.pixelsCategories);
          __webpack_require__.e(/*! import() | cookies */ "cookies").then(__webpack_require__.bind(__webpack_require__, /*! components/bolt/cookies/cookies */ "./static/src/components/bolt/cookies/cookies.js")).then(component => {
            this.Cookies = component.default;
            this.forceUpdate();
          });
          __webpack_require__.e(/*! import() | cookiesPreference */ "cookiesPreference").then(__webpack_require__.bind(__webpack_require__, /*! components/bolt/cookiesPreference/cookiesPreference */ "./static/src/components/bolt/cookiesPreference/cookiesPreference.js")).then(component => {
            this.CookiesPreference = component.default;
          });
        } else {
          store_store__WEBPACK_IMPORTED_MODULE_2__["default"].emit('ACCEPT_ALL_COOKIES', {
            doNotSetCookie: true
          });
        }
        if (this.ageGateEnabled) {
          const cookieName = this.state.appState?.appData?.options?.ageGate?.cookieName || 'pow-agegate';
          const lockOut = this.state.appState?.appData?.options?.ageGate?.lockOut;
          const ofAge = query.ag === 'adult' ? true : (0,utils_cookies__WEBPACK_IMPORTED_MODULE_23__.getCookie)(cookieName);
          if (ofAge !== null) {
            store_store__WEBPACK_IMPORTED_MODULE_2__["default"].emit('AGEGATE_CONSENT', +ofAge);
            // this.ageGateEnabled = false;
            if (!lockOut || ofAge > 0) {
              store_store__WEBPACK_IMPORTED_MODULE_2__["default"].emit('AGEGATE_CLOSE');
            }
          }
          Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! components/bolt/ageGate/ageGate */ "./static/src/components/bolt/ageGate/ageGate.js")).then(component => {
            this.AgeGate = component.default;
            this.forceUpdate();
          });
        }
        if (this.externalLinkModalEnabled) {
          __webpack_require__.e(/*! import() | externalLinkModal */ "externalLinkModal").then(__webpack_require__.bind(__webpack_require__, /*! components/bolt/externalLinkModal/externalLinkModal */ "./static/src/components/bolt/externalLinkModal/externalLinkModal.js")).then(component => {
            this.ExternalLinkModal = component.default;
          });
        }
        if (this.userFeedbackModalEnabled) {
          __webpack_require__.e(/*! import() | userFeedbackModal */ "userFeedbackModal").then(__webpack_require__.bind(__webpack_require__, /*! components/bolt/userFeedbackModal/userFeedbackModal */ "./static/src/components/bolt/userFeedbackModal/userFeedbackModal.js")).then(component => {
            this.UserFeedbackModal = component.default;
          });
        }
        if (this.state.appState?.appData?.options?.videoOverlay) {
          __webpack_require__.e(/*! import() | trailerOverlay */ "trailerOverlay").then(__webpack_require__.bind(__webpack_require__, /*! components/bolt/trailerOverlay/trailerOverlay */ "./static/src/components/bolt/trailerOverlay/trailerOverlay.js")).then(component => {
            this.TrailerOverlay = component.default;
          });
        }
        if (Object.values(this.state.appState?.appData?.pages).find(page => page.type === 'pressKit')) {
          __webpack_require__.e(/*! import() | pressKitGalleryOverlay */ "pressKitGalleryOverlay").then(__webpack_require__.bind(__webpack_require__, /*! components/bolt/pressKit/pressKitGalleryOverlay */ "./static/src/components/bolt/pressKit/pressKitGalleryOverlay.js")).then(component => {
            this.PressKitGalleryOverlay = component.default;
          });
        }
        if (this.state.appState?.appData?.options?.landingAudio) {
          __webpack_require__.e(/*! import() | landingAudio */ "landingAudio").then(__webpack_require__.bind(__webpack_require__, /*! components/bolt/landingAudio/landingAudio */ "./static/src/components/bolt/landingAudio/landingAudio.js")).then(component => {
            this.LandingAudio = component.default;
            this.forceUpdate();
          });
        }
        const signUpBanner = this.state.appState?.appData?.options?.formEmbeds?.signUp;
        if (Object.values(signUpBanner || {}).filter(e => e).length) {
          __webpack_require__.e(/*! import() | signUpForm */ "signUpForm").then(__webpack_require__.bind(__webpack_require__, /*! components/bolt/signUpForm/signUpForm */ "./static/src/components/bolt/signUpForm/signUpForm.js")).then(component => {
            this.SignUpForm = component.default;
          });
        }
        if ((this.isCalendarRemindMode || calendarNeeded) && !this.state.calRemindLoaded && !this.calRemindLoadStarted) {
          this.calRemindLoadStarted = true;
          __webpack_require__.e(/*! import() | calendarRemind */ "calendarRemind").then(__webpack_require__.bind(__webpack_require__, /*! components/bolt/calendarRemind/calendarRemind */ "./static/src/components/bolt/calendarRemind/calendarRemind.js")).then(component => {
            this.CalRemind = component.default;
          });
        }
        this.updateBgStyle();
        this.updateVisibilityPercentages();
        // Refresh things (active section, percentages) when things are loaded
        store_store__WEBPACK_IMPORTED_MODULE_2__["default"].on('SECTION_LOADED', this.scrolling);
        const visibleScrollbar = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(this.state.appState, 'appData.options.paramountFeatures.visibleScrollbar', {});
        const colorVariables = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(this.state.appState, 'appData.styling.variables', {});
        if (visibleScrollbar?.color) {
          let color = visibleScrollbar.color.replace('$', '');
          (0,utils_bolt__WEBPACK_IMPORTED_MODULE_19__.addCSSRuleset)('#mainScroll::-webkit-scrollbar-thumb', {
            background: colorVariables[color] || color
          });
        }
        if (visibleScrollbar?.backgroundColor) {
          let color = visibleScrollbar.backgroundColor.replace('$', '');
          (0,utils_bolt__WEBPACK_IMPORTED_MODULE_19__.addCSSRuleset)('#mainScroll::-webkit-scrollbar-track', {
            background: colorVariables[visibleScrollbar.color] || color
          });
        }
        const mailchimpData = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(this.state.appState, 'appData.options.formEmbeds.popup', {});
        const {
          id,
          baseUrl,
          uuid,
          lid,
          landingDelay
        } = mailchimpData;
        !id && baseUrl && uuid && lid && landingDelay && store_store__WEBPACK_IMPORTED_MODULE_2__["default"].emit('SUBSCRIBER_POPUP', mailchimpData, true);

        // Fix google translate causing node duplication
        const ib = Element.prototype.insertBefore;
        Element.prototype.insertBefore = function (child, ref) {
          if (ref && ref.localName === 'font') {
            child.innerText = ref.innerText;
            return;
          }
          return ib.apply(this, arguments);
        };
      }
    }, {
      kind: "method",
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener('orientationchange', this.handleOrientationChange);
        window.removeEventListener('scroll', this.scrolling, true);
        window.removeEventListener('popstate', this.handlePopState);
        document.removeEventListener('visibilitychange', this.handleVisibilityChange);
        store_store__WEBPACK_IMPORTED_MODULE_2__["default"].off('SECTION_LOADED', this.scrolling);
        (0,body_scroll_lock__WEBPACK_IMPORTED_MODULE_13__.clearAllBodyScrollLocks)();
        window.clearTimeout(this.videoTimeout);
      }
    }, {
      kind: "method",
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        const appState = this.state.appState;

        // This is being called constantly
        // this.handleOrientationChange();
        if (prevState.appState.activePage !== appState.activePage) {
          this.updateVisibilityPercentages();
          this.getBgData();
          this.updateBgStyle();
        }
        const showTrailerOverlay = appState.trailerOverlay?.overlayOpen && appState.trailerOverlay?.data?.video;
        if (showTrailerOverlay && !this.TrailerOverlay) {
          __webpack_require__.e(/*! import() | trailerOverlay */ "trailerOverlay").then(__webpack_require__.bind(__webpack_require__, /*! components/bolt/trailerOverlay/trailerOverlay */ "./static/src/components/bolt/trailerOverlay/trailerOverlay.js")).then(component => {
            this.TrailerOverlay = component.default;
            this.forceUpdate();
          });
        }
        if (!this.cookieHeight && !isServer) {
          const cookieContainer = document.querySelector('[data-section=cookies]');
          this.cookieHeight = cookieContainer && window.getComputedStyle(cookieContainer).height;
        }
        const isDesktopSize = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(this.state, 'appState.client.isDesktopSize');
        const prevIsDesktopSize = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(prevState, 'appState.client.isDesktopSize');
        const isDesktopWidth = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(this.state, 'appState.client.isDesktopWidth');
        const prevIsDesktopWidth = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(prevState, 'appState.client.isDesktopWidth');
        if (isDesktopSize !== prevIsDesktopSize || isDesktopWidth !== prevIsDesktopWidth) {
          store_store__WEBPACK_IMPORTED_MODULE_2__["default"].get().client.set({
            headerHeight: (0,utils_bolt__WEBPACK_IMPORTED_MODULE_19__.getHeaderHeight)()
          });
        }
        const {
          homeActivePercentage
        } = this.state.appState;
        const homePercentagePausePoint = isDesktopSize ? 0.6 : 0.4;
        if (this.$bgVideo) {
          const loopDisabled = this.getBgValue('disableLoop');
          const videoEnded = this.$bgVideo.currentTime >= this.$bgVideo.duration;
          if (homeActivePercentage >= homePercentagePausePoint && this.$bgVideo.paused && !(loopDisabled && videoEnded)) {
            this.$bgVideo.play();
          } else if (homeActivePercentage < homePercentagePausePoint) {
            this.$bgVideo.pause();
          }
        }
        if (this.state.appState.debugMode && !this.loadingDebugInfo) {
          this.loadingDebugInfo = true;
          __webpack_require__.e(/*! import() | debugInfo */ "debugInfo").then(__webpack_require__.bind(__webpack_require__, /*! components/bolt/debugInfo/debugInfo */ "./static/src/components/bolt/debugInfo/debugInfo.js")).then(component => {
            this.DebugInfo = component.default;
            this.forceUpdate();
          });
        }
        let bgSources = [...(this.$bgVideo?.children || [])].map(s => s.src).join(',');
        if (this.previousBgSources && bgSources !== this.previousBgSources) {
          this.$bgVideo?.load();
        }
        this.previousBgSources = bgSources;
      }
    }, {
      kind: "method",
      key: "getBgData",
      value: function getBgData() {
        const pagesData = this.props.initialStore?.appData?.pages || {};
        const activePage = this.state.appState.activePage || '';
        const activePageType = pagesData[activePage]?.type;
        const activePageBgData = activePageType !== 'showtimes' ? pagesData[activePage]?.data?.bg : null;
        const pageWithBgData = Object.values(pagesData).find(page => page?.type !== 'showtimes' && page?.data?.bg);
        this.backgroundData = activePageBgData || pageWithBgData?.data?.bg;
      }
    }, {
      kind: "method",
      key: "handleVisibilityChange",
      value: function handleVisibilityChange() {
        if (typeof document === 'undefined' || document.hidden || !this.$bgVideo) {
          return;
        }
        let stopped = this.$bgVideo.paused || this.$bgVideo.currentTime === 0 || this.$bgVideo.ended;
        if (stopped && this.$bgVideo.readyState >= 2) {
          // For some reason if you play it too soon on IOS, it freezes even though the video meets all the conditions above
          this.videoTimeout = window.setTimeout(() => {
            // Make sure the video still exists after the timeout
            if (this.$bgVideo) {
              this.$bgVideo.play();
            }
          }, 100);
        }
      }
    }, {
      kind: "method",
      key: "updateBgStyle",
      value: function updateBgStyle() {
        if (this.backgroundData) {
          if (this.backgroundData.useSolidBgColor) {
            return;
          }
          this.setState({
            backgroundStyle: {
              backgroundImage: this.getBgImage(),
              backgroundPosition: this.getBgValue('bgPosition')
            },
            fallbackBackgroundStyle: {
              objectPosition: this.getBgValue('bgPosition')
            }
          });
        }
      }
    }, {
      kind: "method",
      key: "removeBgVideo",
      value: function removeBgVideo() {
        videosWithError[this.state.bgVideo] = true;
        this.setState({
          bgVideo: false
        });
      }
    }, {
      kind: "method",
      key: "scrolling",
      value: function scrolling() {
        const headerOpen = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(this.state, 'appState.header.open');
        const ignoreScroll = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(this.state, 'appState.ignoreScroll');
        if (headerOpen || ignoreScroll) {
          return;
        }
        this.updateVisibilityPercentages();
      }
    }, {
      kind: "method",
      key: "updateVisibilityPercentages",
      value: function updateVisibilityPercentages() {
        store_store__WEBPACK_IMPORTED_MODULE_2__["default"].emit('UPDATE_VISIBILITY_PERCENTAGES');
      }
    }, {
      kind: "method",
      key: "calendarNeeded",
      value: function calendarNeeded() {
        const noShowtimesButtonPath = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(this.props, 'initialStore.appData.pages.boltShowtimes.data.noShowtimes.buttons.extraButton.path', null);
        const homeButton1Path = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(this.props, 'initialStore.appData.pages.boltHome.data.button1.path', null);
        const homeButton2Path = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(this.props, 'initialStore.appData.pages.boltHome.data.button2.path', null);
        const persistentPath = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(this.props, 'initialStore.appData.header.powsterHeader.persistentButton.path', null);
        return [noShowtimesButtonPath, homeButton1Path, homeButton2Path, persistentPath].includes('@calendarreminder');
      }
    }, {
      kind: "method",
      key: "getBgValue",
      value: function getBgValue(field) {
        if (!this.backgroundData || !this.backgroundData.desktop && !this.backgroundData.tablet && !this.backgroundData.mobile) {
          return undefined;
        }
        let bgValue = {};
        Object.entries(this.backgroundData).map(_ref => {
          let [device, data] = _ref;
          bgValue[device] = data[field];
        });
        return (0,utils_assets__WEBPACK_IMPORTED_MODULE_20__.useDynamicAssetFolder)((0,utils_bolt__WEBPACK_IMPORTED_MODULE_19__.getValueForClientSize)(bgValue));
      }
    }, {
      kind: "method",
      key: "getFallbackFormat",
      value: function getFallbackFormat() {
        const store = store_store__WEBPACK_IMPORTED_MODULE_2__["default"].get();

        // TODO: more flexibility, why are we hardocding boltHome?
        let page = store.activePage === 'boltSplashHub' ? 'boltSplashHub' : 'boltHome';
        // let page = store.activePage;

        const defaultFormat = this.getBgValue('asset')?.split('.')?.pop() || 'jpg';
        return (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(store, `appData.pages.${page}.data.bg.alternativeImageFormat`, defaultFormat);
      }
    }, {
      kind: "method",
      key: "getBgImage",
      value: function getBgImage() {
        let asset = this.getBgValue('asset');
        const fallbackFormat = this.getFallbackFormat();
        let videoExtensions = ['mp4', 'webm', 'mov'];

        // If asset is a video, bg image will be the fallback image instead
        if (videoExtensions.includes(asset?.split?.('.').pop())) {
          this.setState({
            bgVideo: videosWithError[asset] ? false : asset
          });
          asset = this.getBgValue('fallbackImg');
        }

        // Makes sure the background image is fully loaded before showing it
        if (!this.state.bgImageLoaded) {
          if (asset) {
            if (!this.occluderTimeout) {
              const image = new Image();
              image.onload = () => this.setState({
                bgImageLoaded: true
              });
              image.onerror = image.onload;
              image.src = utils_bolt_webp__WEBPACK_IMPORTED_MODULE_31__.getAssetUrl(asset, fallbackFormat);
              // If the image takes too long to load, better to show the content
              this.occluderTimeout = setTimeout(() => {
                if (!this.state.bgImageLoaded) {
                  this.setState({
                    bgImageLoaded: true
                  });
                }
              }, 5000);
            }
          } else {
            this.setState({
              bgImageLoaded: true
            });
          }
        }
        return utils_bolt_webp__WEBPACK_IMPORTED_MODULE_31__.css(asset, fallbackFormat);
      }
    }, {
      kind: "method",
      key: "getH1",
      value: function getH1(appData, page, activePageDetails, activePage) {
        let fullPageName = [appData?.meta?.title?.locale, appData?.copy?.baseCopy[page?.name] || appData?.copy?.baseCopy[activePageDetails?.name] || page?.name || activePageDetails?.name || activePage?.replace(/^bolt/, '')].filter(e => e).join(' | ');
        if (activePageDetails?.h1) {
          fullPageName = activePageDetails.h1;
        }
        return fullPageName;
      }
    }, {
      kind: "method",
      key: "closeAllOverlays",
      value: function closeAllOverlays() {
        store_store__WEBPACK_IMPORTED_MODULE_2__["default"].emit('CLOSE_ALL_OVERLAYS');
      }
    }, {
      kind: "method",
      key: "handleOrientationChange",
      value: function handleOrientationChange() {
        this.handleResize();
        let orientation = 'portrait';
        switch (window.orientation) {
          case 0:
          case 180:
            // Portrait
            orientation = 'portrait';
            break;
          case -90:
          case 90:
            orientation = 'landscape';
            break;
        }
        this.setState({
          orientation
        });
      }
    }, {
      kind: "method",
      key: "handleResize",
      value: function handleResize() {
        store_store__WEBPACK_IMPORTED_MODULE_2__["default"].emit('UPDATE_CLIENT');
        let vh = window.innerHeight;
        document.documentElement.style.setProperty('--vh', vh * 0.01 + 'px');
        document.documentElement.style.setProperty('--windowHeight', vh + 'px');
        let isDesktopSize = (0,utils_bolt_client__WEBPACK_IMPORTED_MODULE_22__.getIsDesktopSize)();
        let client = this.state.appState.client;
        if (client && isDesktopSize !== client.isDesktopSize) {
          store_store__WEBPACK_IMPORTED_MODULE_2__["default"].get().client.set({
            isDesktopSize
          });
        }
        this.updateBgStyle();
      }
    }, {
      kind: "method",
      key: "hidePoster",
      value: function hidePoster() {
        this.setState({
          posterVisible: false
        });
      }
    }, {
      kind: "method",
      key: "handlePopState",
      value: function handlePopState(e) {
        let newPage = e.state?.activePage;
        // TODO: also check if newPage is not a valid page (e.g. state stored for a previous version was a page that doesn't exist anymore)
        if (!newPage) {
          // Page id not in popped state, try to detect from URL
          newPage = (0,utils_bolt__WEBPACK_IMPORTED_MODULE_19__.getPageIdFromURL)();
        }
        store_store__WEBPACK_IMPORTED_MODULE_2__["default"].emit('POP_STATE', newPage || window.__START_PAGE_ID__);
      }
    }, {
      kind: "method",
      key: "onPageContentLoad",
      value: function onPageContentLoad() {
        if (this.state.isComponentLoaded !== true) {
          this.setState({
            isComponentLoaded: true
          });
        }
      }
    }, {
      kind: "method",
      key: "getExtra",
      value: function getExtra() {}
    }, {
      kind: "method",
      key: "playVideo",
      value: function playVideo(e) {
        (0,utils_tryToPlayVideo__WEBPACK_IMPORTED_MODULE_15__["default"])(e.target).then(this.hidePoster).catch(this.removeBgVideo);
      }
    }, {
      kind: "method",
      key: "toggleAudio",
      value: function toggleAudio() {
        if (!this.$bgVideo) {
          return;
        }
        this.setState({
          audioMuted: !this.$bgVideo.muted
        });
        this.$bgVideo.muted = !this.$bgVideo.muted;
      }
    }, {
      kind: "method",
      key: "checkIfLoaded",
      value: function checkIfLoaded() {
        return this.state.isComponentLoaded && (this.state.bgImageLoaded || !this.backgroundData || this.backgroundData.useSolidBgColor);
      }
    }, {
      kind: "method",
      key: "renderLoadingOccluder",
      value: function renderLoadingOccluder() {
        return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
          class: base_bolt_boltApp_sss__WEBPACK_IMPORTED_MODULE_34__["default"].loadingOccluder,
          key: "occluder"
        });
      }
    }, {
      kind: "method",
      key: "renderBgVideo",
      value: function renderBgVideo(homeActivePercentage, backgroundStyle, fallbackBackgroundStyle) {
        const {
          bgVideo,
          appState,
          posterVisible
        } = this.state;
        const {
          activePage
        } = appState;
        const isPageDedicatedPage = activePage !== 'boltHome' && !appState.appData.pages[activePage]?.section;
        const preLoadImg = this.getBgValue('preLoadImg');
        const fallbackFormat = this.getFallbackFormat();
        const showtimesShowing = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(appState, 'showtimes.show', false);
        const hideBackground = !homeActivePercentage || showtimesShowing || isPageDedicatedPage;
        const accessibilityCopy = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(appState, 'appData.copy.accessibilityCopy', {});
        return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
          class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.joinClasses)({
            s: base_bolt_boltApp_sss__WEBPACK_IMPORTED_MODULE_34__["default"],
            bgVideo: true,
            hideBackground
          }),
          key: "bgVideo"
        }, (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("video", {
          style: backgroundStyle,
          muted: this.state.audioMuted,
          autoPlay: true,
          playsInline: true,
          loop: !this.getBgValue('disableLoop'),
          poster: utils_isWebPSupported__WEBPACK_IMPORTED_MODULE_32__.isWebPSupported ? preLoadImg : preLoadImg.replace(/\.[^.]*$/, fallbackFormat),
          onCanPlay: this.playVideo,
          onError: this.removeBgVideo,
          ref: $ref => this.$bgVideo = $ref,
          ariaLabel: accessibilityCopy.$BACKGROUND_VIDEO_ARIA
        }, bgVideo.endsWith('.webm') && (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("source", {
          src: bgVideo,
          type: "video/webm"
        }), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("source", {
          src: bgVideo.replace(/\.[^./]+$/, '.mp4'),
          type: "video/mp4"
        })), posterVisible && (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(utils_bolt_webp__WEBPACK_IMPORTED_MODULE_31__.Picture, {
          src: preLoadImg,
          alt: "",
          fallbackFormat: fallbackFormat,
          style: fallbackBackgroundStyle
        }));
      }
    }, {
      kind: "method",
      key: "renderMain",
      value: function renderMain(props, state) {
        const {
          appState,
          backgroundStyle,
          fallbackBackgroundStyle,
          audioMuted,
          bgVideo
        } = state;
        const {
          activePage,
          appData,
          client,
          videos,
          header,
          showtimes,
          homeEnt,
          scrollerTallerThanWindow,
          widgetFullyExpanded
        } = appState;
        let mainPage = activePage;
        let activePageDetails = appData?.pages?.[activePage];
        if (activePageDetails?.section) {
          // TODO: ability to attach sections to different pages
          mainPage = Object.values(pages_bolt_pages__WEBPACK_IMPORTED_MODULE_29__.pages).find(page => page.page === 'home')?.id || 'boltHome';
        }
        // For overlays (e.g. boltShowtimes), activePage changes but it is not in pages
        //   when that's the case, keep using the previous one
        let page = pages_bolt_pages__WEBPACK_IMPORTED_MODULE_29__.pages[mainPage] || this.currentPage;
        if (activePageDetails?.customPageComponent && pages_bolt_pages__WEBPACK_IMPORTED_MODULE_29__.pages[activePageDetails.customPageComponent]) {
          page = {
            ...pages_bolt_pages__WEBPACK_IMPORTED_MODULE_29__.pages[activePageDetails.customPageComponent],
            id: activePageDetails.id
          };
        }
        if (props.renderedPage) {
          page = props.renderedPage;
        }
        this.currentPage = page;
        const orientation = state.orientation;
        const isMobile = client && !client.isDesktopSize;
        const isMobileLandscape = client?.deviceSize === 'mobile' && orientation === 'landscape';
        const isTabletLandscape = client?.device !== 'desktop' && !isMobileLandscape && orientation === 'landscape';
        const videoOverlayOpen = videos && videos.overlayOpen;
        const showtimesOverlayOpen = showtimes && showtimes.show;
        const showtimesAnimation = showtimes && showtimes.animate;
        const homeEntOverlayOpen = homeEnt && homeEnt.show;
        const homeEntAnimation = homeEnt && homeEnt.animate;
        const sidePanelOpen = showtimesOverlayOpen || homeEntOverlayOpen;
        const sidePanelAnimation = showtimesAnimation || homeEntAnimation;
        // const headerOpen = accessNested(this.state, 'appState.header.open', false);
        const homeActivePercentage = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(appState, 'homeActivePercentage', 1);
        const hubActivePercentage = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(appState, 'hubActivePercentage', 1);
        // Hides the background to prevent it being visible on iOS overscroll
        const hideBackground = !homeActivePercentage && isMobile;
        const hasStickyFooter = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(appData, 'footer.sticky', false);
        const externalCookieBannerOpen = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(this.state, 'appState.externalCookieBanner.bannerOpen', false);
        const cookieMode = externalCookieBannerOpen || (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(this.state, 'appState.cookies.pushDown', false) && (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(this.state, 'appState.cookies.cookieBannerOpen', false);
        const oneContinuousScroll = externalCookieBannerOpen && isMobile || (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(appData, 'options.oneContinuousScroll'); // Makes the whole main page one big scrolling section to cater for the giant Evidon banner (or for other reasons).
        const sonyHeaderEnabled = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(appData, 'options.sonyFeatures.sonyHeader', false) && !(0,utils_bolt_client__WEBPACK_IMPORTED_MODULE_22__.getIsSinglePageIframed)();
        const sonyFooterEnabled = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(appData, 'footer.sonyFooter', false);
        const accessibilityCopy = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(appData, 'copy.accessibilityCopy', {});
        const disableMobileLandscape = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(appData, 'options.disableLandscape');
        const disableTabletLandscape = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(appData, 'options.disableTabletLandscape');
        const landingAudio = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(appData, 'options.landingAudio', null);
        const visibleScrollbar = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(appData, 'options.paramountFeatures.visibleScrollbar', false);
        const iframeLandscapeEnabled = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(appData, 'pages.boltIframe.data.disableOrientationLock', false) && activePage === 'boltIframe';
        const showLandscapeOverlay = (isMobileLandscape && disableMobileLandscape || isTabletLandscape && disableTabletLandscape) && !iframeLandscapeEnabled;
        const hasMiniGallery = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(appData, 'options.paramountFeatures.toutCarousel.contentCarousel', false);
        const videoHasAudio = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(appData, 'pages.boltHome.data.bg.videoHasAudio', false);
        const iconPosition = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(appData, 'pages.boltHome.data.bg.iconPosition', 'top-left');
        const mainScrollStyle = {};
        if (visibleScrollbar) {
          mainScrollStyle.scrollbarColor = `${visibleScrollbar.color} ${visibleScrollbar.backgroundColor}`;
        }
        let headerOffset = 0;
        const bgCookieStyle = {};
        if (sonyHeaderEnabled) {
          headerOffset = 34;
        }
        if (cookieMode && typeof window !== 'undefined') {
          bgCookieStyle.position = oneContinuousScroll ? 'absolute' : 'fixed';
          const cookieHeight = (externalCookieBannerOpen ? (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(appState, 'externalCookieBanner.height') : (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(appState, 'cookies.height')) || 0;
          headerOffset += cookieHeight;
          bgCookieStyle.top = `${oneContinuousScroll ? '0' : headerOffset}px`;
          bgCookieStyle.height = (oneContinuousScroll ? window.innerHeight : window.innerHeight - headerOffset) + 'px';
        }

        // TODO: detect if ANY overlay is open in a generic way
        const headerHeight = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(store_store__WEBPACK_IMPORTED_MODULE_2__["default"].get(), 'client.headerHeight', 0);
        const desktopSolidHeader = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(appData, 'header.powsterHeader.desktopSolidHeader', null);
        const hub = (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(appData, 'pages.boltHubPage') && !(0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.accessNested)(appData, 'pages.boltHome');
        const previewPanelReplacingHomePage = appData?.pages.boltPreviewPanel && !appData?.pages.boltHome;
        const dedicatedPage = pages_bolt_pages__WEBPACK_IMPORTED_MODULE_29__.pages[activePage] && activePage !== 'boltHome' && !activePageDetails?.section;
        const homeInactive = homeActivePercentage <= (0,utils_visibilityChecks__WEBPACK_IMPORTED_MODULE_21__.getPercentageThreshold)(headerOffset) || dedicatedPage;
        const hubInactive = hubActivePercentage <= (0,utils_visibilityChecks__WEBPACK_IMPORTED_MODULE_21__.getPercentageThreshold)(headerHeight);
        const pageInactive = hub ? hubInactive : homeInactive;
        // TODO: ability to control header background via appData
        let headerSolidBackground = pageInactive && !sidePanelOpen && !videoOverlayOpen;
        if (previewPanelReplacingHomePage || !scrollerTallerThanWindow || widgetFullyExpanded) {
          headerSolidBackground = false;
        }
        // Potentially wait for other initial things to load
        const loaded = this.checkIfLoaded();
        let hasShowtimes = Object.values(appData.pages).some(p => p?.type === 'showtimes');
        let hasHomeEnt = Object.values(appData.pages).some(p => p?.type === 'homeEnt');
        let hasPressKit = Object.values(appData.pages).some(p => p?.type === 'pressKit');
        let bgRender = this.state.bgVideo ? this.renderBgVideo(homeActivePercentage, bgCookieStyle, fallbackBackgroundStyle) : (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
          class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.joinClasses)({
            s: base_bolt_boltApp_sss__WEBPACK_IMPORTED_MODULE_34__["default"],
            background: true,
            sidePanelOpen,
            hasStickyFooter,
            cookieMode,
            hideBackground,
            sidePanelAnimation,
            hasMiniGallery
          }),
          style: {
            ...backgroundStyle,
            ...bgCookieStyle
          },
          key: "background",
          role: "img",
          ariaLabel: accessibilityCopy.$BACKGROUND_IMAGE_ARIA
        });
        let pageProps = {};
        if (page) {
          pageProps = {
            store: appState,
            client: appState.client,
            appData,
            id: page.id,
            data: appData.pages[page.id]?.data,
            bgRender: oneContinuousScroll && bgRender
          };
          if (page.page) {
            pageProps[page.page] = appState[page.page];
          }
        }
        return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
          class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.joinClasses)(base_bolt_boltApp_sss__WEBPACK_IMPORTED_MODULE_34__["default"].mainScroll, loaded && 'contentLoaded', (!visibleScrollbar || isMobile) && base_bolt_boltApp_sss__WEBPACK_IMPORTED_MODULE_34__["default"].hideScrollbar, dedicatedPage && base_bolt_boltApp_sss__WEBPACK_IMPORTED_MODULE_34__["default"].dedicatedPage),
          id: "mainScroll",
          style: mainScrollStyle
        }, (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(components_bolt_header_header__WEBPACK_IMPORTED_MODULE_25__["default"], {
          closeAllOverlays: this.closeAllOverlays,
          client: client,
          appData: appData,
          activePage: activePage,
          solidBackground: headerSolidBackground,
          headerData: header,
          offsetTop: headerOffset,
          isCalendarRemindMode: this.isCalendarRemindMode,
          calRemindOpen: appState.calRemindOpen,
          desktopSolidHeader: desktopSolidHeader,
          footerData: appState.footer,
          key: "header"
        }), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("h1", {
          class: base_bolt_boltApp_sss__WEBPACK_IMPORTED_MODULE_34__["default"].pageName
        }, this.getH1(appData, page, activePageDetails, activePage)), bgRender, this.CalRemind && (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(this.CalRemind, {
          appData: appData,
          open: appState.calRemindOpen,
          offsetTop: headerOffset,
          key: "calendarRemind"
        }), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(components_shared_dynamicPageLoader_dynamicPageLoader__WEBPACK_IMPORTED_MODULE_28__["default"], {
          class: base_bolt_boltApp_sss__WEBPACK_IMPORTED_MODULE_34__["default"].pageContainer,
          containerClass: (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.joinClasses)(base_bolt_boltApp_sss__WEBPACK_IMPORTED_MODULE_34__["default"].pageWrapper, 'pageWrapper'),
          page: page,
          props: pageProps,
          onLoad: this.onPageContentLoad,
          key: "dynamicPageLoader"
        }), (!sidePanelOpen || sonyFooterEnabled) && (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(components_bolt_footer_footer__WEBPACK_IMPORTED_MODULE_26__["default"], {
          data: appData.footer,
          store: appState,
          key: "footer"
        }), pages_bolt_pages__WEBPACK_IMPORTED_MODULE_29__.VideoOverlayLoader && (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(pages_bolt_pages__WEBPACK_IMPORTED_MODULE_29__.VideoOverlayLoader, {
          store: appState,
          key: "videoLoader"
        }), hasShowtimes && (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(pages_bolt_pages__WEBPACK_IMPORTED_MODULE_29__.SidePanelLoader, {
          store: appState,
          key: "showtimesLoader"
        }), hasHomeEnt && (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(pages_bolt_pages__WEBPACK_IMPORTED_MODULE_29__.SidePanelLoader, {
          store: appState,
          key: "homeEntLoader"
        }), hasPressKit && (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(pages_bolt_pages__WEBPACK_IMPORTED_MODULE_29__.SidePanelLoader, {
          store: appState,
          key: "pressKitLoader"
        }), this.TrailerOverlay && (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(this.TrailerOverlay, {
          store: appState
        }), this.PressKitGalleryOverlay && (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(this.PressKitGalleryOverlay, {
          store: appState
        }), this.LandingAudio && (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(this.LandingAudio, {
          data: landingAudio,
          offsetTop: headerOffset,
          store: appState
        }), videoHasAudio && bgVideo && (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
          onClick: this.toggleAudio,
          class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.joinClasses)(base_bolt_boltApp_sss__WEBPACK_IMPORTED_MODULE_34__["default"].sound, audioMuted && base_bolt_boltApp_sss__WEBPACK_IMPORTED_MODULE_34__["default"].muted, base_bolt_boltApp_sss__WEBPACK_IMPORTED_MODULE_34__["default"][iconPosition])
        }, (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
          class: base_bolt_boltApp_sss__WEBPACK_IMPORTED_MODULE_34__["default"].icon
        })), !videoOverlayOpen && showLandscapeOverlay && (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(components_bolt_landscapeOverlay_landscapeOverlay__WEBPACK_IMPORTED_MODULE_27__["default"], {
          key: "landscape-overlay"
        }), this.renderLoadingOccluder(), this.getExtra());
      }
    }, {
      kind: "method",
      key: "render",
      value: function render(props, state) {
        const {
          appData,
          client,
          cookies,
          externalCookieBanner,
          debugMode,
          footer,
          header
        } = state.appState;
        const cookiePrefsOpen = cookies.cookiePreferencesOpen;
        const cookieBannerOpen = cookies.cookieBannerOpen;
        let ageGateOpen = state.appState.ageGateOpen !== false;
        const ageGateOnlyOnPages = appData?.options?.ageGate?.onlyOnPages;
        if (ageGateOpen && ageGateOnlyOnPages) {
          const activePageIsSection = appData.pages[state.appState.activePage].section;
          ageGateOpen = ageGateOnlyOnPages.split(',').map(e => e.trim()).includes(state.appState.activePage) && !activePageIsSection;
        }
        const headerType = Object.keys(appData.header).find(name => name.endsWith('Header') && name !== 'powsterHeader');
        const footerType = ['sonyFooter'].find(e => appData.footer[e]) || 'defaultFooter';
        const navOpen = header.open;
        let DebugInfo = debugMode && this.DebugInfo;
        let {
          Cookies,
          CookiesPreference,
          AgeGate,
          ExternalLinkModal,
          UserFeedbackModal,
          SignUpForm
        } = this;
        const isRTL = appData?.styling?.fontVariables?.textDirection === 'rtl';
        const style = `--footer-covered-screen-size: ${footer?.coveredScreenSize || 0}px;`;
        return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
          class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_14__.joinClasses)(base_bolt_boltApp_sss__WEBPACK_IMPORTED_MODULE_34__["default"].container, client.device, client.orientation, client.isIOS && 'iOS', headerType, footerType, 'page-' + state.appState.activePage, isRTL && 'isRTL'),
          id: "bolt",
          style: style
        }, Cookies && (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(Cookies, {
          appData: appData,
          categories: pages_bolt_features__WEBPACK_IMPORTED_MODULE_30__.pixelsCategories,
          hidden: !cookieBannerOpen,
          key: "cookieBanner"
        }), CookiesPreference && (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(CookiesPreference, {
          appData: appData,
          copy: appData.copy.baseCopy,
          categories: pages_bolt_features__WEBPACK_IMPORTED_MODULE_30__.pixelsCategories,
          key: "cookiesPref",
          cookiePrefsOpen: cookiePrefsOpen
        }), AgeGate && ageGateOpen && (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(AgeGate, {
          appData: appData,
          copy: appData.copy,
          key: "ageGate"
        }), ExternalLinkModal && (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(ExternalLinkModal, {
          appData: appData,
          externalLinkModal: state.appState.externalLinkModal,
          copy: appData.copy,
          key: "externalLink"
        }), UserFeedbackModal && (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(UserFeedbackModal, {
          appData: appData,
          data: state.appState.userFeedbackModal,
          copy: appData.copy,
          key: "userFeedback"
        }), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
          class: base_bolt_boltApp_sss__WEBPACK_IMPORTED_MODULE_34__["default"].mainScrollWrapper,
          key: "mainScrollWrapper"
        }, this.renderMain(props, state)), SignUpForm && (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(SignUpForm, {
          data: appData?.options?.formEmbeds?.signUp,
          activePage: state.appState.activePage,
          clientData: client,
          cookies: cookies,
          externalCookieBanner: externalCookieBanner,
          showtimesProviderInterstitialOpen: state.appState.showtimes?.providerInterstitialOpen,
          navOpen: navOpen,
          key: "signUp"
        }), !!DebugInfo && (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(DebugInfo, {
          appData: appData,
          appState: state.appState,
          key: "debug"
        }));
      }
    }]
  };
}, preact__WEBPACK_IMPORTED_MODULE_1__.Component);


/***/ }),

/***/ "./static/src/base/bolt/setRelativeRoot.js":
/*!*************************************************!*\
  !*** ./static/src/base/bolt/setRelativeRoot.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

try {
  let sourceWindow = location.protocol === 'about:' ? window.parent : window;
  let url = sourceWindow.location.origin + sourceWindow.location.pathname.replace(/\/[^/]*$/, '/');

  // eslint-disable-next-line no-undef
  __webpack_require__.p = url + (window.__RELATIVE_ROOT__ || '');
} catch (e) {}

/***/ }),

/***/ "./static/src/components/bolt/ageGate/ageGate.js":
/*!*******************************************************!*\
  !*** ./static/src/components/bolt/ageGate/ageGate.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AgeGate)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var store_bolt_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/bolt/cookies */ "./static/src/store/bolt/cookies.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var utils_bolt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/bolt */ "./static/src/utils/bolt/index.js");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var components_bolt_button_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/bolt/button/button */ "./static/src/components/bolt/button/button.js");
/* harmony import */ var components_bolt_icons_chevron__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/bolt/icons/chevron */ "./static/src/components/bolt/icons/chevron.js");
/* harmony import */ var components_core_html_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/core/html/html */ "./static/src/components/core/html/html.js");
/* harmony import */ var components_bolt_ageGate_ageGate_sss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/bolt/ageGate/ageGate.sss */ "./static/src/components/bolt/ageGate/ageGate.sss");
/* harmony import */ var utils_assets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/assets */ "./static/src/utils/assets.js");










const pad2 = n => ('0' + n).slice(-2);
function parse(str) {
  if (str.length) {
    return +str;
  }
  return null;
}
class AgeGate extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.checkAge = this.checkAge.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleMouseDown, false);
    if (this.props.appData?.options.ageGate?.lockOut && store_store__WEBPACK_IMPORTED_MODULE_4__["default"].get().client.ofAge === false) {
      this.setState({
        lockedOut: true
      });
    }
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleMouseDown, false);
  }
  handleMouseDown(e) {
    e.stopPropagation();
    e.interactivity = true;
  }
  renderYearOptions() {
    const currentYear = new Date().getFullYear();
    return [...Array(120)].map((e, i) => {
      let year = currentYear - i;
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("option", {
        value: year,
        key: year
      }, year);
    });
  }
  checkAge(event) {
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
    }
    let {
      day,
      month,
      year
    } = this.state;
    if (!day || !(month || month === 0) || !year) {
      return;
    }
    const minAge = +(0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.accessNested)(this.props, 'appData.options.ageGate.consentAge', 18);
    let now = new Date();
    let allowedFrom = new Date(+year + minAge, +month, +day);
    let permitted = now >= allowedFrom;
    store_store__WEBPACK_IMPORTED_MODULE_4__["default"].emit('AGEGATE_CONSENT', permitted);
    const lockOut = this.props.appData?.options.ageGate.lockOut;
    if (!lockOut || permitted) {
      store_store__WEBPACK_IMPORTED_MODULE_4__["default"].emit('AGEGATE_CLOSE');
    } else {
      this.setState({
        lockedOut: true
      });
    }
  }
  render() {
    const {
      copy,
      isSectionAgeGate,
      appData
    } = this.props;
    const {
      lockedOut
    } = this.state;
    const minAge = appData.options.ageGate?.consentAge || 18;
    let {
      $AGE_GATE_DESCRIPTION = 'To make sure we offer you best experience we must know if you are of legal age.',
      $AGE_GATE_INSTRUCTION = 'Please enter your birth date to continue',
      $AGE_GATE_CONFIRM = 'Confirm',
      $PRIVACY = 'Privacy Policy',
      $AGE_GATE_ACCESS_DENIED = 'Apologies, this content is for users over %MIN_AGE% only.'
    } = copy.baseCopy;
    $AGE_GATE_ACCESS_DENIED = $AGE_GATE_ACCESS_DENIED.replace('%MIN_AGE%', minAge);
    $AGE_GATE_DESCRIPTION = $AGE_GATE_DESCRIPTION.replace(/%PRIVACY%/g, $PRIVACY);
    const fontStyles = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.accessNested)(this.props, 'appData.styling.fontVariables');
    const useShort = this.props.labels === 'short';
    let monthLabels = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.accessNested)(copy, '$DATETIME_LOCALE.$MONTHS_FULL');
    if (useShort || !monthLabels) {
      monthLabels = [...Array(12)].map((e, i) => pad2(i + 1));
    }
    const tt = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.accessNested)(this.props, 'appData.pages.boltHome.data.tt', {});
    const ttOverride = appData.options?.ageGate?.image;
    let ttSrc = null;
    if (tt.desktop || tt.tablet || tt.mobile) {
      ttSrc = ttOverride || (0,utils_bolt__WEBPACK_IMPORTED_MODULE_3__.getValueForClientSize)(tt, null, {
        nullIfDisabled: true
      });
    }
    let labelDay = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.accessNested)(copy, 'baseCopy.$DATETIME_LOCALE.$LABEL_DAY') || 'Day';
    const labelShortDay = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.accessNested)(copy, 'baseCopy.$DATETIME_LOCALE.$LABEL_SHORT_DAY') || 'DD';
    let labelMonth = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.accessNested)(copy, 'baseCopy.$DATETIME_LOCALE.$LABEL_MONTH') || 'Month';
    const labelShortMonth = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.accessNested)(copy, 'baseCopy.$DATETIME_LOCALE.$LABEL_SHORT_MONTH') || 'MM';
    let labelYear = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.accessNested)(copy, 'baseCopy.$DATETIME_LOCALE.$LABEL_YEAR') || 'Year';
    const labelShortYear = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.accessNested)(copy, 'baseCopy.$DATETIME_LOCALE.$LABEL_SHORT_YEAR') || 'YYYY';
    labelDay = labelDay.charAt(0).toUpperCase() + labelDay.slice(1);
    labelMonth = labelMonth.charAt(0).toUpperCase() + labelMonth.slice(1);
    labelYear = labelYear.charAt(0).toUpperCase() + labelYear.slice(1);
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: isSectionAgeGate && components_bolt_ageGate_ageGate_sss__WEBPACK_IMPORTED_MODULE_8__["default"].sectionAgeGate
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_ageGate_ageGate_sss__WEBPACK_IMPORTED_MODULE_8__["default"].screenCover
    }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_ageGate_ageGate_sss__WEBPACK_IMPORTED_MODULE_8__["default"].screenContainer
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_ageGate_ageGate_sss__WEBPACK_IMPORTED_MODULE_8__["default"].container
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_ageGate_ageGate_sss__WEBPACK_IMPORTED_MODULE_8__["default"].top
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("img", {
      src: (0,utils_assets__WEBPACK_IMPORTED_MODULE_9__.useDynamicAssetFolder)(ttSrc),
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.joinClasses)(components_bolt_ageGate_ageGate_sss__WEBPACK_IMPORTED_MODULE_8__["default"].tt),
      alt: copy.accessibilityCopy[tt.alt] || tt.alt
    }), !lockedOut && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_7__["default"], {
      markdown: true,
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.joinClasses)(components_bolt_ageGate_ageGate_sss__WEBPACK_IMPORTED_MODULE_8__["default"].description, fontStyles.prefCentreDescription)
    }, $AGE_GATE_DESCRIPTION)), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.joinClasses)(components_bolt_ageGate_ageGate_sss__WEBPACK_IMPORTED_MODULE_8__["default"].middle, lockedOut && components_bolt_ageGate_ageGate_sss__WEBPACK_IMPORTED_MODULE_8__["default"].lockedOut)
    }, !lockedOut && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("form", {
      class: components_bolt_ageGate_ageGate_sss__WEBPACK_IMPORTED_MODULE_8__["default"].wrapper,
      onSubmit: this.checkAge
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("fieldset", null, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_7__["default"], {
      markdown: true,
      class: components_bolt_ageGate_ageGate_sss__WEBPACK_IMPORTED_MODULE_8__["default"].instruction
    }, $AGE_GATE_INSTRUCTION), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_ageGate_ageGate_sss__WEBPACK_IMPORTED_MODULE_8__["default"].inputs
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_ageGate_ageGate_sss__WEBPACK_IMPORTED_MODULE_8__["default"].selectWrapper
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("select", {
      onChange: e => this.setState({
        day: parse(e.target.value)
      }),
      class: components_bolt_ageGate_ageGate_sss__WEBPACK_IMPORTED_MODULE_8__["default"].input,
      ref: e => this.$day = e,
      required: true
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("option", {
      value: ""
    }, useShort ? labelShortDay : labelDay), [...Array(31)].map((e, i) => (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("option", {
      value: i + 1,
      key: i + 1
    }, pad2(i + 1)))), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_chevron__WEBPACK_IMPORTED_MODULE_6__["default"], {
      class: components_bolt_ageGate_ageGate_sss__WEBPACK_IMPORTED_MODULE_8__["default"].chevron
    })), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_ageGate_ageGate_sss__WEBPACK_IMPORTED_MODULE_8__["default"].selectWrapper
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("select", {
      onChange: e => this.setState({
        month: parse(e.target.value)
      }),
      class: components_bolt_ageGate_ageGate_sss__WEBPACK_IMPORTED_MODULE_8__["default"].input,
      ref: e => this.$month = e,
      required: true
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("option", {
      value: ""
    }, useShort ? labelShortMonth : labelMonth), [...Array(12)].map((e, i) => (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("option", {
      value: i,
      key: i
    }, monthLabels[i]))), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_chevron__WEBPACK_IMPORTED_MODULE_6__["default"], {
      class: components_bolt_ageGate_ageGate_sss__WEBPACK_IMPORTED_MODULE_8__["default"].chevron
    })), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_ageGate_ageGate_sss__WEBPACK_IMPORTED_MODULE_8__["default"].selectWrapper
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("select", {
      onChange: e => this.setState({
        year: parse(e.target.value)
      }),
      class: components_bolt_ageGate_ageGate_sss__WEBPACK_IMPORTED_MODULE_8__["default"].input,
      ref: e => this.$year = e,
      required: true
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("option", {
      value: ""
    }, useShort ? labelShortYear : labelYear), this.renderYearOptions(useShort)), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_chevron__WEBPACK_IMPORTED_MODULE_6__["default"], {
      class: components_bolt_ageGate_ageGate_sss__WEBPACK_IMPORTED_MODULE_8__["default"].chevron
    }))))), lockedOut && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_ageGate_ageGate_sss__WEBPACK_IMPORTED_MODULE_8__["default"].error
    }, $AGE_GATE_ACCESS_DENIED)), !lockedOut && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_ageGate_ageGate_sss__WEBPACK_IMPORTED_MODULE_8__["default"].bottom
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_button_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      disabled: !(this.state.day && (this.state.month || this.state.month === 0) && this.state.year),
      type: "primary",
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.joinClasses)(components_bolt_ageGate_ageGate_sss__WEBPACK_IMPORTED_MODULE_8__["default"].save, fontStyles.prefCentreSaveBtn),
      trigger: this.checkAge
    }, $AGE_GATE_CONFIRM)))));
  }
}

/***/ }),

/***/ "./static/src/components/bolt/burgerMenu/burgerMenu.js":
/*!*************************************************************!*\
  !*** ./static/src/components/bolt/burgerMenu/burgerMenu.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BurgerMenu)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var components_core_html_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/core/html/html */ "./static/src/components/core/html/html.js");
/* harmony import */ var components_bolt_burgerMenu_burgerMenu_sss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/bolt/burgerMenu/burgerMenu.sss */ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/burgerMenu/burgerMenu.sss");




class BurgerMenu extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  render(props) {
    const {
      type,
      style,
      lineStyle,
      dark,
      hidden,
      showtimesOverlayOpen,
      homeEntOverlayOpen,
      pressKitOverlayOpen,
      widgetFullyExpanded,
      navOpen,
      homeScrolled,
      isSinglePageIframed,
      showtimesSearchOverlay,
      videoOverlayOpen,
      oneSheetOverlay,
      oneSheetOverlayOpen,
      trailerOverlayOpen,
      trailerOverlay,
      calendarRemind,
      calendarRemindOpen,
      extraClass,
      customBurgerMenu
    } = props;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(components_bolt_burgerMenu_burgerMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].container, components_bolt_burgerMenu_burgerMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"][type], dark && components_bolt_burgerMenu_burgerMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].dark, (showtimesOverlayOpen || widgetFullyExpanded) && components_bolt_burgerMenu_burgerMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].showtimes, homeEntOverlayOpen && components_bolt_burgerMenu_burgerMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].homeEnt, pressKitOverlayOpen && components_bolt_burgerMenu_burgerMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].pressKit, navOpen && components_bolt_burgerMenu_burgerMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].navOpen, homeScrolled && components_bolt_burgerMenu_burgerMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].homeScrolled, (isSinglePageIframed || hidden) && components_bolt_burgerMenu_burgerMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].hidden, showtimesSearchOverlay && components_bolt_burgerMenu_burgerMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].searching, videoOverlayOpen && components_bolt_burgerMenu_burgerMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].video, oneSheetOverlay && components_bolt_burgerMenu_burgerMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].oneSheetOverlay, oneSheetOverlayOpen && components_bolt_burgerMenu_burgerMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].oneSheetOverlayOpen, trailerOverlayOpen && components_bolt_burgerMenu_burgerMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].trailerOverlayOpen, trailerOverlay && components_bolt_burgerMenu_burgerMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].trailerOverlay, calendarRemindOpen && components_bolt_burgerMenu_burgerMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].calendarRemindOpen, calendarRemind && components_bolt_burgerMenu_burgerMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].calendarRemind, customBurgerMenu && components_bolt_burgerMenu_burgerMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].customBurgerMenu, extraClass),
      style: style
    }, !customBurgerMenu?.icon ? (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      style: lineStyle,
      class: components_bolt_burgerMenu_burgerMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].line
    }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      style: lineStyle,
      class: components_bolt_burgerMenu_burgerMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].line
    }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      style: lineStyle,
      class: components_bolt_burgerMenu_burgerMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].line
    })) : (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_2__["default"], {
      tag: "div",
      markdown: true
    }, customBurgerMenu?.icon));
  }
}

/***/ }),

/***/ "./static/src/components/bolt/button/button.js":
/*!*****************************************************!*\
  !*** ./static/src/components/bolt/button/button.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var components_bolt_button_button_sss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/bolt/button/button.sss */ "./static/src/components/bolt/button/button.sss");




class Button extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.supportedTypes = ['primary', 'outlined', 'text', 'time', 'tag', 'floating', 'icon'];
  }
  render(props) {
    const {
      type,
      htmlType,
      active,
      class: className,
      activeClass,
      style,
      appData,
      trigger,
      useCapture,
      onMouseEnter,
      onMouseLeave,
      onMouseOut,
      onMouseDown,
      onKeyDown,
      onFocus,
      tabIndex,
      disabled,
      children,
      ariaLabel
    } = props;
    if (type && !this.supportedTypes.includes(type)) {
      console.error(`Bolt.Button does not support a type of ${type}. Supported types are: ${this.supportedTypes.join(', ')}`);
      return;
    }
    const backgroundColor = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(style, 'backgroundColor');
    const allButtonStyling = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(store_store__WEBPACK_IMPORTED_MODULE_2__["default"].get(), 'appData.styling.enableDisableAllButtonStyling.showtimes');
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(components_bolt_button_button_sss__WEBPACK_IMPORTED_MODULE_3__["default"].container, active && components_bolt_button_button_sss__WEBPACK_IMPORTED_MODULE_3__["default"].active, allButtonStyling && components_bolt_button_button_sss__WEBPACK_IMPORTED_MODULE_3__["default"].allStyling, backgroundColor && components_bolt_button_button_sss__WEBPACK_IMPORTED_MODULE_3__["default"].noHover, components_bolt_button_button_sss__WEBPACK_IMPORTED_MODULE_3__["default"][type], className, active && activeClass),
      style: style,
      [useCapture ? 'onClickCapture' : 'onClick']: trigger,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onMouseDown: onMouseDown,
      onMouseOut: onMouseOut,
      onKeyDown: onKeyDown,
      onFocus: onFocus,
      disabled: disabled,
      tabIndex: tabIndex,
      ariaLabel: ariaLabel,
      type: htmlType
    }, children);
  }
}

/***/ }),

/***/ "./static/src/components/bolt/countdown/countdown.js":
/*!***********************************************************!*\
  !*** ./static/src/components/bolt/countdown/countdown.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Countdown)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var components_bolt_countdown_countdown_sss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/bolt/countdown/countdown.sss */ "./static/src/components/bolt/countdown/countdown.sss");
/* harmony import */ var components_core_html_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/core/html/html */ "./static/src/components/core/html/html.js");
/* harmony import */ var utils_bolt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/bolt */ "./static/src/utils/bolt/index.js");





const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
function isDate(date) {
  return date instanceof Date && !isNaN(date);
}
function parseOffset(value) {
  if (value == undefined) {
    return null;
  }
  if (!Number.isNaN(+value) && Math.abs(value) < 15) {
    // Decimal format: -3.5
    return 60 * value;
  }
  if (typeof value === 'string') {
    // Regular format: -3:30 or 0800
    let match = value.trim().match(/^([+-]?)(\d\d??)(?::?(\d\d))?$/);
    if (!match) {
      return null;
    }
    let sign = match[1] === '-' ? -1 : +1;
    let hours = +match[2];
    let minutes = +match[3] || 0;
    return sign * (60 * hours + minutes);
  }
  return null;
}
class Countdown extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      remaining: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      },
      counting: false
    };
    this.target = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.parseDate)(props.datetime);
    let valid = isDate(this.target);
    if (valid) {
      let offsetAmount = parseOffset(props.timeOffset);
      if (offsetAmount !== null) {
        this.target.setMinutes(this.target.getMinutes() - this.target.getTimezoneOffset() - offsetAmount);
      }
    } else {
      console.error('Invalid Date! The "Target Date and Time" item isn\'t formatted correctly in Thundr: ' + props.datetime);
      this.target = null;
    }
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount() {
    this.startTimer();
  }
  startTimer() {
    clearInterval(this.timer);
    this.counting = true;
    this.updateTime();
    this.timer = setInterval(this.updateTime, 1000);
    this.setState({
      counting: true
    });
  }
  stopTimer() {
    clearInterval(this.timer);
    this.counting = false;
    this.setState({
      counting: false
    });
  }
  updateTime() {
    if (!this.target) {
      return this.stopTimer();
    }
    let diff = Math.max(this.target - Date.now(), 0);
    const seconds = Math.floor(diff / SECOND % 60);
    const minutes = Math.floor(diff / MINUTE % 60);
    const hours = Math.floor(diff / HOUR % 24);
    const days = Math.floor(diff / DAY);
    if (!diff) {
      this.stopTimer();
    }
    this.setState({
      remaining: {
        days,
        hours,
        minutes,
        seconds
      }
    });
  }
  onClick(e) {
    let internalLink = e.target.closest('a[href^="#$"]');
    if (internalLink) {
      e.preventDefault();
      let page = internalLink.getAttribute('href').slice(2).trim();
      let navOptions = {};
      if (page.includes('/?')) {
        let [pageId, qs] = page.split('/?');
        page = pageId;
        navOptions.queryString = '?' + qs;
      }
      (0,utils_bolt__WEBPACK_IMPORTED_MODULE_4__.navigateInternally)(page, navOptions);
    }
  }
  renderValue(value, copy, defaultLabel) {
    const label = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(this.props, ['appData', 'copy', 'baseCopy', '$DATETIME_LOCALE', copy], defaultLabel);
    if (defaultLabel !== 'Days' || value <= 99) {
      value = ('0' + value).slice(-2);
    }
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(components_bolt_countdown_countdown_sss__WEBPACK_IMPORTED_MODULE_2__["default"].denomination, typeof value === 'number' && components_bolt_countdown_countdown_sss__WEBPACK_IMPORTED_MODULE_2__["default"].wide)
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(components_bolt_countdown_countdown_sss__WEBPACK_IMPORTED_MODULE_2__["default"].value, 'h1')
    }, value), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_countdown_countdown_sss__WEBPACK_IMPORTED_MODULE_2__["default"].label
    }, label));
  }
  render(_ref, _ref2) {
    let {
      heading,
      annotation,
      hidden,
      visible,
      position,
      headerHeight
    } = _ref;
    let {
      remaining,
      counting
    } = _ref2;
    const {
      days,
      hours,
      minutes,
      seconds
    } = remaining;
    const containerStyle = {
      paddingTop: position === 'top' && `${headerHeight + 24}px`
    };
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      style: containerStyle,
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(components_bolt_countdown_countdown_sss__WEBPACK_IMPORTED_MODULE_2__["default"].wrapper, !counting && components_bolt_countdown_countdown_sss__WEBPACK_IMPORTED_MODULE_2__["default"].remove, hidden && components_bolt_countdown_countdown_sss__WEBPACK_IMPORTED_MODULE_2__["default"].hide, visible && components_bolt_countdown_countdown_sss__WEBPACK_IMPORTED_MODULE_2__["default"].visible)
    }, heading && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_3__["default"], {
      class: components_bolt_countdown_countdown_sss__WEBPACK_IMPORTED_MODULE_2__["default"].heading,
      onClickCapture: this.onClick,
      content: heading,
      markdown: true
    }), annotation && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(components_bolt_countdown_countdown_sss__WEBPACK_IMPORTED_MODULE_2__["default"].annotation, 'mediumB')
    }, annotation), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_countdown_countdown_sss__WEBPACK_IMPORTED_MODULE_2__["default"].countdown
    }, this.renderValue(days, '$LABEL_DAYS', 'Days'), this.renderValue(hours, '$LABEL_HOURS', 'Hours'), this.renderValue(minutes, '$LABEL_MINUTES', 'Minutes'), this.renderValue(seconds, '$LABEL_SECONDS', 'Seconds')));
  }
}

/***/ }),

/***/ "./static/src/components/bolt/footer/footer.js":
/*!*****************************************************!*\
  !*** ./static/src/components/bolt/footer/footer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var pages_bolt_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pages/bolt_pages */ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/pages/bolt_pages.js");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var store_bolt_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/bolt/footer */ "./static/src/store/bolt/footer.js");
/* harmony import */ var utils_copy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/copy */ "./static/src/utils/copy.js");
/* harmony import */ var utils_smoothScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/smoothScroll */ "./static/src/utils/smoothScroll.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var utils_bolt_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/bolt/client */ "./static/src/utils/bolt/client.js");
/* harmony import */ var utils_bolt_geo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/bolt/geo */ "./static/src/utils/bolt/geo.js");
/* harmony import */ var components_bolt_link_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/bolt/link/link */ "./static/src/components/bolt/link/link.js");
/* harmony import */ var components_bolt_button_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/bolt/button/button */ "./static/src/components/bolt/button/button.js");
/* harmony import */ var components_bolt_icons_close__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/bolt/icons/close */ "./static/src/components/bolt/icons/close.js");
/* harmony import */ var components_bolt_icons_arrowDown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/bolt/icons/arrowDown */ "./static/src/components/bolt/icons/arrowDown.js");
/* harmony import */ var pages_bolt_features__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! pages/bolt_features */ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/pages/bolt_features.js");
/* harmony import */ var components_core_html_html_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/core/html/html.js */ "./static/src/components/core/html/html.js");
/* harmony import */ var utils_bolt_webp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! utils/bolt/webp */ "./static/src/utils/bolt/webp.js");
/* harmony import */ var components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/bolt/footer/footer.sss */ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/footer/footer.sss");

















const dom = el => el?.base || el;
let userRegion;
const getUserRegion = (() => {
  let promise;
  return onCreate => {
    if (!promise) {
      promise = (0,utils_bolt_geo__WEBPACK_IMPORTED_MODULE_8__.geoFromIP)();
      promise.then(onCreate);
    }
    return promise;
  };
})();
class Footer extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.renderOpenFooter = this.renderOpenFooter.bind(this);
    this.toggleFooter = this.toggleFooter.bind(this);
    this.closeFooter = this.toggleFooter.bind(this, false);
    this.openFooter = this.toggleFooter.bind(this, true);
    this.getFallbackFormat = this.getFallbackFormat.bind(this);
    this.startAutoExpandTimer = this.startAutoExpandTimer.bind(this);
    this.stopAutoExpandTimer = this.stopAutoExpandTimer.bind(this);
    this.cancelAutoExpanding = this.cancelAutoExpanding.bind(this);
    this.onLinkClick = this.onLinkClick.bind(this);
    this.footerData = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(props, 'data.defaultFooter', {});
    this.updateSticky(props);
    this.autoExpand = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(props, 'data.defaultFooter.autoExpand', false);
    this.autoExpandDuration = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(props, 'data.defaultFooter.autoExpandDuration', 3);
    let region = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(props, 'store.appData.meta.region.slug');
    this.tealiumCookiesEnabled = region !== 'au' && (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(props, 'store.appData.options.enableTealium', false);
    this.ensightenTrackingEnabled = props.store?.appData?.options?.enableEnsighten;
    this.allowAutoExpand = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(props, 'store.footer.allowAutoExpand', true);
    this.fontStyles = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(props, 'store.appData.styling.fontVariables', {});
    this.showtimesFooter = props.parent === 'showtimes';
    this.pressKitFooter = props.parent === 'pressKit';
    this.hasTextPage = Object.values((0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(props, 'store.appData.pages', {})).find(e => e.component === 'text' || e.page === 'text');
    this.state = {
      open: false,
      autoExpanding: false,
      backgroundColor: null
    };
  }
  componentDidMount() {
    if (this.autoExpand && this.allowAutoExpand) {
      this.startAutoExpandTimer();
    }
    this.updateCoveredScreenSize();
  }
  componentWillReceiveProps(nextProps) {
    this.updateSticky(nextProps);
  }
  componentDidUpdate() {
    if (!this.props.parent) {
      const activePage = this.props.store.activePage;
      let lowestSection = activePage;
      if (activePage === 'boltHome' && pages_bolt_pages__WEBPACK_IMPORTED_MODULE_1__.sections) {
        lowestSection = pages_bolt_pages__WEBPACK_IMPORTED_MODULE_1__.sections[pages_bolt_pages__WEBPACK_IMPORTED_MODULE_1__.sections.length - 1]?.id;
      }
      try {
        let elem = lowestSection && document.querySelector(`[data-section="${lowestSection}"]`);
        let backgroundColor = elem && window.getComputedStyle(elem).backgroundColor;
        if (backgroundColor && this.state.backgroundColor !== backgroundColor) {
          this.setState({
            backgroundColor
          });
        }
      } catch (e) {}
    } else if (!this.state.backgroundColor && this.props.fallBackColor) {
      this.setState({
        backgroundColor: this.props.fallBackColor
      });
    }
    this.updateCoveredScreenSize();
  }
  updateSticky() {
    let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
    const activePage = props.store?.activePage;
    const activePageData = props.store?.appData?.pages?.[activePage]?.data;
    const position = activePageData?.footer?.position || props.data?.defaultFooter?.position || 'fixed';
    this.sticky = position === 'fixed';
  }
  updateCoveredScreenSize() {
    if (!this.$cta) {
      return;
    }
    let isMobile = this.props.store?.client?.deviceSize === 'mobile';
    let coveredScreenSize = isMobile && this.sticky ? dom(this.$cta).offsetHeight : 0;
    if (coveredScreenSize !== this.props.store.footer.coveredScreenSize) {
      store_store__WEBPACK_IMPORTED_MODULE_2__["default"].get().footer.set({
        coveredScreenSize
      });
    }
  }
  startAutoExpandTimer() {
    this.setState({
      open: true,
      autoExpanding: true
    });
    const duration = this.autoExpandDuration * 1000;
    this.collapseTimer = window.setTimeout(() => {
      this.cancelAutoExpanding();
    }, duration);
  }
  stopAutoExpandTimer() {
    window.clearTimeout(this.collapseTimer);
  }
  cancelAutoExpanding() {
    this.setState({
      open: false,
      autoExpanding: false
    });
    this.stopAutoExpandTimer();
    store_store__WEBPACK_IMPORTED_MODULE_2__["default"].emit('FOOTER_AUTO_EXPANDED');
  }
  openEvidon() {
    window.evidon?.notice?.showPreferencesDialog();
  }
  onLinkClick() {}
  isLoneVideoDefaultFooter() {
    const defaultFooter = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'data.defaultFooter');
    if (!defaultFooter) {
      return false;
    }
    const pages = Object.keys((0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'store.appData.pages', {}));
    const pageExceptions = ['boltVideos', 'bolt-toolkit', 'boltBanner', 'browser-not-supported', 'boltIframe'];
    const otherPages = pages.filter(id => !pageExceptions.includes(id));
    return otherPages.length === 0;
  }
  toggleFooter(state) {
    const open = typeof state === 'boolean' ? state : !this.state.open;
    this.setState({
      open
    });
    if (open && this.showtimesFooter) {
      const showtimesScroller = document.querySelector(`[data-section=scroller]`);
      const bottom = this.base.offsetTop + this.base.offsetHeight;
      (0,utils_smoothScroll__WEBPACK_IMPORTED_MODULE_5__.smoothScrollTo)(showtimesScroller, bottom, 300);
    }
  }
  renderOpenFooter() {
    const {
      logos,
      links,
      copyright
    } = this.footerData;
    const footerBgStyling = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(store_store__WEBPACK_IMPORTED_MODULE_2__["default"].get(), 'appData.styling.variables.footerBgColor', this.state.backgroundColor);
    const accessibilityCopy = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(store_store__WEBPACK_IMPORTED_MODULE_2__["default"].get(), 'appData.copy.accessibilityCopy', {});
    const autoExpanding = this.state.autoExpanding;
    const footerStyle = {
      background: !this.pressKitFooter && footerBgStyling
    };
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"].openWrapper, autoExpanding && components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"].autoExpanding),
      style: footerStyle,
      role: "contentinfo"
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_button_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
      class: components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"].closeBtn,
      trigger: autoExpanding ? this.cancelAutoExpanding : this.toggleFooter,
      ariaLabel: accessibilityCopy.$COLLAPSE_FOOTER_ARIA
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_close__WEBPACK_IMPORTED_MODULE_11__["default"], null)), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"].studioDetails)
    }, this.getLogos(logos), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"].line
    }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("ul", {
      class: components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"].links
    }, this.renderLinks(links, 'link'))), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("ul", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"].copyright, this.fontStyles.footerCopyright)
    }, this.renderLinks(copyright, 'copyright')));
  }
  getLogos(logos) {
    if (!logos) {
      return;
    }
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("ul", {
      class: components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"].logos
    }, this.renderLinks(logos, 'logo'));
  }
  tealiumAction() {
    if (window.DisneyGDPR && window.DisneyGDPR.Core && typeof window.DisneyGDPR.Core.openPreferencesDialog === 'function') {
      window.DisneyGDPR.Core.openPreferencesDialog();
    }
  }
  ensightenAction(e) {
    if (typeof window.__dataLayer?.OneTrustDialog === 'function') {
      window.__dataLayer?.OneTrustDialog(e);
    }
  }
  getFallbackFormat() {
    return (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'appData.footer.alternativeImageFormat', 'png');
  }
  renderLinks(items, type) {
    const ageGateEnabled = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(store_store__WEBPACK_IMPORTED_MODULE_2__["default"].get(), 'appData.options.ageGate', false);
    const isOfAge = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(store_store__WEBPACK_IMPORTED_MODULE_2__["default"].get(), 'client.ofAge', null);
    items = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.sortObjectByOrder)(items, (item, key) => ({
      key,
      ...item
    })).filter(item => {
      const ageGateShowOnly = +item.ageGateShowOnly || 0;
      if (ageGateShowOnly) {
        // ageGateShowOnly = 1 : age over the limit only
        if (ageGateShowOnly === 1 && ageGateEnabled && !isOfAge) {
          return false;
        }
        // ageGateShowOnly = 2 : age under the limit only
        if (ageGateShowOnly === 2 && isOfAge) {
          return false;
        }
      }
      if (item.excludeFromShowtimes && this.showtimesFooter || item.showtimesOnly && !this.showtimesFooter) {
        return false;
      }
      if (item.userRegion) {
        // If we don't have the region yet, start getting it and then rerender once we have it
        getUserRegion(geo => {
          userRegion = geo?.countryCode;
          this.forceUpdate();
        });
        const valid = item.userRegion.split(',').map(r => r.trim().toLowerCase()).includes(userRegion);
        if (!valid) {
          return false;
        }
      }
      return true;
    });
    let links = [];
    const isAuRegion =  false || "us" === 'nz';
    if (type === 'link' && (this.tealiumCookiesEnabled || this.ensightenTrackingEnabled && !isAuRegion)) {
      links.push((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("li", {
        class: components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"][`${type}Wrapper`],
        key: "tealium"
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_button_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
        class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"][`${type}Link`], this.fontStyles.footerLegalLinks),
        trigger: this.ensightenTrackingEnabled ? this.ensightenAction : this.tealiumAction
      }, (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'store.appData.copy.baseCopy.$COOKIE_SETTINGS') || 'Cookie Settings')));
    }
    return links.concat(items.map((item, key) => {
      let content;
      if (type === 'logo') {
        const fileImg = item.src;
        const fallbackFormat = this.getFallbackFormat();
        content = (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(utils_bolt_webp__WEBPACK_IMPORTED_MODULE_15__.Picture, {
          class: components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"].logo,
          src: fileImg,
          alt: (0,utils_copy__WEBPACK_IMPORTED_MODULE_4__.getCopy)(item.alt, {}, '', null, 'accessibilityCopy') || item.alt,
          fallbackFormat: fallbackFormat
        });
      } else {
        content = (0,utils_copy__WEBPACK_IMPORTED_MODULE_4__.getCopy)(item.$copy, {}, '', null, 'baseCopy') || item.$copy;
      }
      if (type === 'link') {
        const markdownContent = (0,utils_copy__WEBPACK_IMPORTED_MODULE_4__.getCopy)(item.$copy, {}, '', null, 'baseCopy') || item.$copy;
        content = (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_core_html_html_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
          content: markdownContent,
          markdown: true
        });
      }
      if (type === 'copyright') {
        content = (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_core_html_html_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
          content: content,
          markdown: true
        });
      }
      if (item.url && item.url.startsWith('@')) {
        return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("li", {
          class: components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"][`${type}Wrapper`],
          key: key
        }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_button_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
          class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"][`${type}Link`], this.fontStyles[type === 'copyright' ? 'footerCopyright' : 'footerLegalLinks']),
          trigger: () => store_store__WEBPACK_IMPORTED_MODULE_2__["default"].emit('OPEN_RESERVED_VARIABLE_LINK', item.url)
        }, content));
      }
      if (item.url in (store_store__WEBPACK_IMPORTED_MODULE_2__["default"].get().appData?.pages || {})) {
        return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("li", {
          class: components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"][`${type}Wrapper`],
          key: key
        }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_button_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
          class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"][`${type}Link`], this.fontStyles[type === 'copyright' ? 'footerCopyright' : 'footerLegalLinks']),
          trigger: () => store_store__WEBPACK_IMPORTED_MODULE_2__["default"].emit('CLOSE_AND_NAVIGATE', item.url, '', {
            instant: false
          })
        }, content));
      }
      let Element = item.url ? components_bolt_link_link__WEBPACK_IMPORTED_MODULE_9__["default"] : 'div';
      if (!item.url && item.openCookieConsentTool) {
        Element = 'button';
      }
      let attributes = {
        class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"][`${type}Link`], this.fontStyles[type === 'copyright' ? 'footerCopyright' : 'footerLegalLinks']),
        ariaLabel: item.ariaLabel,
        title: item.title,
        onClick: item.openCookieConsentTool ? this.openEvidon : () => this.onLinkClick(item)
      };
      if (item.url) {
        const disableNoOpNoRef = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'data.defaultFooter.disableNoOpenerNoReferrer', false);
        attributes.href = item.url;
        attributes.target = item.target || (/^(https?:)?\/\//.test(item.url) ? '_blank' : '_self');
        attributes.rel = !disableNoOpNoRef && 'noopener noreferrer';
      }
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("li", {
        class: components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"][`${type}Wrapper`],
        key: key
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(Element, attributes, content));
    }));
  }
  renderExtra() {}
  render(props, state) {
    const {
      data,
      scrollElem,
      store,
      isHomeEntFooter
    } = props;
    const accessibilityCopy = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(store, 'appData.copy.accessibilityCopy', {});
    // const isDesktop = accessNested(store, 'client.isDesktopSize');

    const copyright = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(data, 'defaultFooter.copyright');
    const videosFooter = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(store, 'header.videoOverlayOpen', false);
    const loneVideoDefaultFooter = videosFooter && this.isLoneVideoDefaultFooter();
    const stickyState = this.sticky || videosFooter;
    const staticAutoExpand = !this.sticky && (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(data, 'defaultFooter.autoExpand', false);
    const inlineFooter = !stickyState && (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(data, 'defaultFooter.inline', false);
    const signUpFormFooterLinks = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(store, 'appData.options.formEmbeds.signUp.displayFooterLinks', false);
    const {
      ctaOpenCopy = 'FOOTER_CTA',
      ctaCloseCopy = 'FOOTER_CLOSE'
    } = data.defaultFooter || {};
    const toggleButtonText = state.open ? (0,utils_copy__WEBPACK_IMPORTED_MODULE_4__.getCopy)(ctaCloseCopy, {}, '', null, 'baseCopy') : (0,utils_copy__WEBPACK_IMPORTED_MODULE_4__.getCopy)(ctaOpenCopy, {}, '', null, 'baseCopy');
    const toggleButtonAria = state.open ? accessibilityCopy.$COLLAPSE_FOOTER_ARIA : accessibilityCopy.$EXPAND_FOOTER_ARIA;
    const isSinglePageIframed = (0,utils_bolt_client__WEBPACK_IMPORTED_MODULE_7__.getIsSinglePageIframed)();
    const hidden = (0,utils_bolt_client__WEBPACK_IMPORTED_MODULE_7__.hideFooter)();
    const style = {};
    if (!this.showtimesFooter && !this.hasTextPage && !this.pressKitFooter) {
      style.backgroundColor = state.backgroundColor;
    }
    const signUpOpen = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(store, 'signupBanner.open', false);
    const signUpFormHeight = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(store_store__WEBPACK_IMPORTED_MODULE_2__["default"].get(), 'client.signUpFormHeight', null);
    if (signUpOpen) {
      style.paddingBottom = signUpFormHeight;
    }
    const activePage = store.activePage;
    const dedicatedIframePage = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(store, ['appData', 'pages', activePage, 'page']) === 'iframe';
    const lastSectionId = pages_bolt_pages__WEBPACK_IMPORTED_MODULE_1__.sections[pages_bolt_pages__WEBPACK_IMPORTED_MODULE_1__.sections.length - 1]?.id;
    const hasWatchMoreShadow = lastSectionId === 'boltWatchMore' && !store.watchMore?.hide;
    const synopsisFooterShadow = store?.synopsis?.addShadowToFooter;
    const tiledItemsFooterShadow = store?.tiledItems?.addShadowToFooter;
    let needsShadow = (synopsisFooterShadow || tiledItemsFooterShadow || hasWatchMoreShadow) && !this.showtimesFooter;
    if (activePage === 'filmPage') {
      needsShadow = false;
    }
    const sonyFooter = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(data, 'sonyFooter', false);
    const copy = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(props, 'store.appData.copy', {});
    if (sonyFooter) {
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("footer", {
        "data-section": "boltFooter",
        style: style,
        class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)({
          s: components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"],
          wrapper: true,
          sticky: stickyState,
          open: state.open,
          showtimes: this.showtimesFooter,
          homeEnt: isHomeEntFooter,
          sidePanelOpen: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(store, 'showtimes.show', false) || (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(store, 'homeEnt.show', false)
        }),
        role: "contentinfo"
      }, needsShadow && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
        class: components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"].shadow
      }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(pages_bolt_features__WEBPACK_IMPORTED_MODULE_13__.SonyFooter, {
        data: data.sonyFooter,
        showtimes: this.showtimesFooter,
        copy: copy
      }));
    }
    if (activePage === 'boltHome') {
      const noSynopsisOrGallerySections = !pages_bolt_pages__WEBPACK_IMPORTED_MODULE_1__.sections.find(section => ['boltSynopsis', 'boltGallery'].includes(section.id));
      if (noSynopsisOrGallerySections) {
        style.backgroundColor = '';
      }
    }
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("footer", {
      "data-section": "boltFooter",
      style: style,
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)({
        s: components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"],
        wrapper: true,
        sticky: stickyState,
        open: state.open,
        showtimes: this.showtimesFooter,
        pressKit: this.pressKitFooter,
        homeEnt: isHomeEntFooter,
        sidePanelOpen: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(store, 'showtimes.show', false) || (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(store, 'homeEnt.show', false),
        loneVideoDefaultFooter: loneVideoDefaultFooter,
        staticAutoExpand,
        inlineFooter,
        dedicatedIframePage,
        hidden,
        signUpFormFooterLinks
      }),
      role: "contentinfo"
    }, needsShadow && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"].shadow
    }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"].outer, isSinglePageIframed && components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"].noLegalBtn)
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_button_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
      class: components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"].scrollTop,
      trigger: () => (0,utils_smoothScroll__WEBPACK_IMPORTED_MODULE_5__.smoothScrollTo)(scrollElem || document.getElementById('mainScroll'), 0, 300),
      ariaLabel: accessibilityCopy.$SCROLL_UP_ARIA
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_arrowDown__WEBPACK_IMPORTED_MODULE_12__["default"], {
      class: components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"].arrow
    })), copyright && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("ul", {
      class: components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"].copyright,
      key: "copyright"
    }, this.renderLinks(copyright, 'copyright')), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"].sizer
    }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_button_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"].cta, this.fontStyles.footerLegalButton, isSinglePageIframed && components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"].hidden),
      trigger: this.toggleFooter,
      key: "toggle",
      ariaLabel: toggleButtonAria,
      ref: e => this.$cta = e
    }, toggleButtonText)), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"].openCropper
    }, this.renderOpenFooter(), inlineFooter && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_button_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
      class: components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"].scrollTop,
      trigger: () => (0,utils_smoothScroll__WEBPACK_IMPORTED_MODULE_5__.smoothScrollTo)(scrollElem || document.getElementById('mainScroll'), 0, 300),
      ariaLabel: accessibilityCopy.$SCROLL_UP_ARIA
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_arrowDown__WEBPACK_IMPORTED_MODULE_12__["default"], {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"].arrow, components_bolt_footer_footer_sss__WEBPACK_IMPORTED_MODULE_16__["default"].arrowTop)
    }))), this.renderExtra());
  }
}

/***/ }),

/***/ "./static/src/components/bolt/gallery/gallery.js":
/*!*******************************************************!*\
  !*** ./static/src/components/bolt/gallery/gallery.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gallery)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var components_bolt_section_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/bolt/section/section */ "./static/src/components/bolt/section/section.js");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var store_bolt_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! store/bolt/gallery */ "./static/src/store/bolt/gallery.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var utils_bolt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/bolt */ "./static/src/utils/bolt/index.js");
/* harmony import */ var utils_assets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/assets */ "./static/src/utils/assets.js");
/* harmony import */ var services_boltYoutube__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! services/boltYoutube */ "./static/src/services/boltYoutube.js");
/* harmony import */ var components_bolt_button_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/bolt/button/button */ "./static/src/components/bolt/button/button.js");
/* harmony import */ var components_bolt_icons_download__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/bolt/icons/download */ "./static/src/components/bolt/icons/download.js");
/* harmony import */ var components_bolt_icons_arrowDown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/bolt/icons/arrowDown */ "./static/src/components/bolt/icons/arrowDown.js");
/* harmony import */ var components_core_html_html__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/core/html/html */ "./static/src/components/core/html/html.js");
/* harmony import */ var components_bolt_link_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/bolt/link/link */ "./static/src/components/bolt/link/link.js");
/* harmony import */ var components_bolt_videos_player__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/bolt/videos/player */ "./static/src/components/bolt/videos/player.js");
/* harmony import */ var components_bolt_header_sharePopout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/bolt/header/sharePopout */ "./static/src/components/bolt/header/sharePopout.js");
/* harmony import */ var components_bolt_icons_share__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/bolt/icons/share */ "./static/src/components/bolt/icons/share.js");
/* harmony import */ var components_core_transition_transition__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/core/transition/transition */ "./static/src/components/core/transition/transition.js");
/* harmony import */ var components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! components/bolt/gallery/gallery.sss */ "./static/src/components/bolt/gallery/gallery.sss");
/* harmony import */ var pages_bolt_pages__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! pages/bolt_pages */ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/pages/bolt_pages.js");
/* harmony import */ var utils_bolt_webp__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! utils/bolt/webp */ "./static/src/utils/bolt/webp.js");
/* harmony import */ var utils_slugify__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! utils/slugify */ "./static/src/utils/slugify.js");

























const TOUCH_SLOP = 8;
const TRANSITION_DURATION = 1000;
class Gallery extends components_bolt_section_section__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(props) {
    super(props);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "unpackYoutubePlaylists", array => {
      const foundYoutubePlaylists = array.find(obj => obj.youtubePlaylistId);
      if (foundYoutubePlaylists !== undefined) {
        this.replacePlaylistWithVideos(array);
      }
    });
    /**
    * Returns the gallery data array without playlist objects.
    *
    * @param {Array.<object>} array
    * @returns {Array.<object>} array of objects
    **/
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "removeYoutubePlaylists", array => {
      return array.filter(item => !item.youtubePlaylistId && item);
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "onLoadedHandler", () => {
      this.setState({
        loading: false
      });
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "onEndedHandler", activeVideo => {
      const nextMediaContent = this.getNextVideo(activeVideo, this.state.images);
      if (nextMediaContent) {
        this.changeImageRelative(1);
      } else {
        store_store__WEBPACK_IMPORTED_MODULE_4__["default"].emit('VIDEO_ENDED', activeVideo);
      }
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "getNextVideo", (activeVideo, videos) => {
      if (!activeVideo || !videos.length) {
        return;
      }
      const activeVidIndex = videos.findIndex(vid => vid.key === activeVideo.key);
      if (this.autoRotate && activeVidIndex + 1 === videos.length) return videos[0];
      return videos[activeVidIndex + 1];
    });
    const hasMultipleGalleries = this.hasMultipleGalleries();
    const pageData = this.props.pageData || props.appData.pages[this.props.id]?.data;
    let galleryData = pageData?.contentCarousel;
    if (this.props.isMiniGallery) {
      galleryData = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'appData.options.paramountFeatures.toutCarousel.contentCarousel', {});
    } else if (this.props.isEmbeded) {
      galleryData = pageData?.gallery?.contentCarousel;
    }
    this.autoRotate = pageData?.autoRotate || false;
    if (props.isMiniGallery) {
      this.autoRotate = props?.appData?.options?.paramountFeatures?.toutCarousel?.autoRotate || false;
    }
    const galleryHash = pageData?.hash;
    const galleryDataArray = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.sortObjectByOrder)(galleryData, (value, key) => ({
      ...value,
      fileName: value?.pdfSrc?.split('/')?.pop(),
      key: (0,utils_slugify__WEBPACK_IMPORTED_MODULE_22__["default"])(props.id + '-' + key),
      altKey: galleryHash && (0,utils_slugify__WEBPACK_IMPORTED_MODULE_22__["default"])(galleryHash + '-' + key)
    }));
    this.unpackYoutubePlaylists(galleryDataArray);
    this.loadedSrcs = [];
    this.state = {
      images: galleryDataArray || [],
      hasMultipleGalleries
    };
    this.observerCallback = this.observerCallback.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onImageClick = this.onImageClick.bind(this);
    this.imageLoaded = this.imageLoaded.bind(this);
    this.renderImageLoader = this.renderImageLoader.bind(this);
    this.downloadAll = this.downloadAll.bind(this);
    this.downloadAllAsSingleFile = this.downloadAllAsSingleFile.bind(this);
    this.getFallbackFormat = this.getFallbackFormat.bind(this);
    this.togglePlaying = this.togglePlaying.bind(this);
    this.videoClickHandler = this.videoClickHandler.bind(this);
    this.onImageShare = this.onImageShare.bind(this);
    this.getImageForHash = this.getImageForHash.bind(this);
    this.useDownloadAttribute = typeof window === 'undefined' || 'download' in document.createElement('a');
  }
  componentDidMount() {
    let images = this.state.images || [];
    const activeImage = this.getActiveImage();
    this.activeImageUrl = this.getSrc(activeImage);
    let activeImageIndex = images.findIndex(img => img.key === activeImage.key);
    if (images.length) {
      store_store__WEBPACK_IMPORTED_MODULE_4__["default"].emit('GALLERY_VIEW_IMAGE', images[activeImageIndex].key);
    }
    const isVideo = activeImage.videoSrc || activeImage.vimeoId || activeImage.youtubeId || activeImage.youtubeId || activeImage.disneySrc || activeImage.youtubePlaylistId;
    if (!isVideo) {
      this.observer = new IntersectionObserver(this.observerCallback, {
        threshold: [1]
      });
      this.observer.observe(this.contentWrapper);
    }
  }
  componentWillUnmount() {
    window.clearTimeout(this.nextRotationTimer);
    window.clearTimeout(this.changeImageTimeout);
    if (this.observer) {
      this.observer.unobserve(this.contentWrapper);
      this.observer.disconnect();
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      const pageData = this.props.pageData || this.props.appData.pages[this.props.id]?.data;
      let galleryData = pageData?.contentCarousel;
      if (this.props.isMiniGallery) {
        galleryData = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'appData.options.paramountFeatures.toutCarousel.contentCarousel', {});
      } else if (this.props.isEmbeded) {
        galleryData = pageData?.gallery?.contentCarousel;
      }
      const galleryDataArray = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.sortObjectByOrder)(galleryData, (value, key) => ({
        ...value,
        key: (0,utils_slugify__WEBPACK_IMPORTED_MODULE_22__["default"])(key)
      }));
      this.unpackYoutubePlaylists(galleryDataArray);
      store_store__WEBPACK_IMPORTED_MODULE_4__["default"].emit('CHANGE_ACTIVE_IMAGE', {
        image: galleryDataArray[0],
        pageId: this.props.combinedId || this.props.id
      });
      this.setState({
        images: galleryDataArray
      });
    }
  }
  observerCallback(_ref) {
    let [e] = _ref;
    if (e.isIntersecting && e.intersectionRatio === 1 && !this.firstAutoRotationTriggered) {
      this.firstAutoRotationTriggered = true;
      const activeImage = this.getActiveImage();
      const src = this.getSrc(activeImage);
      this.setAutoRotateTimer(src);
    }
  }
  replacePlaylistWithVideos(videoDataArray) {
    Promise.all(videoDataArray.map(vid => {
      if (vid && vid.youtubePlaylistId) {
        // return Promise.reject();
        return this.getVideosFromPlaylist(vid);
      }
      return vid;
    })).then(data => {
      const concatArray = [].concat(...data);
      this.setState({
        images: (0,utils_bolt__WEBPACK_IMPORTED_MODULE_7__.arrayWithUniqueKeys)(concatArray)
      });
    }).catch(() => {
      this.setState({
        images: this.removeYoutubePlaylists(videoDataArray)
      });
    });
  }
  sortPlaylist(a, b, order) {
    if (!order) {
      return 0;
    }
    const playlistOrder = order.replace(/\s/g, '').split(',').reverse();
    return playlistOrder.indexOf(b.snippet.resourceId.videoId) - playlistOrder.indexOf(a.snippet.resourceId.videoId);
  }
  getVideosFromPlaylist(vid) {
    const playlistId = vid.youtubePlaylistId;
    const noCookies = vid.noCookies === 'No Cookie Mode';
    return (0,services_boltYoutube__WEBPACK_IMPORTED_MODULE_9__.getPlaylistData)(playlistId).then(data => {
      return data.items.filter(item => item.snippet.thumbnails.medium).sort((a, b) => this.sortPlaylist(a, b, vid.playlistOrder)).map(item => ({
        name: item.snippet.title,
        thumbSrc: item.snippet.thumbnails.medium.url,
        youtubeId: item.snippet.resourceId.videoId,
        key: item.id,
        noCookies
      }));
    });
  }
  hasMultipleGalleries() {
    const pages = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.sortObjectByOrder)((0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'appData.pages', {}));
    const galleryComps = pages.filter(page => page.component === 'gallery' || page.page === 'gallery' || page.data?.gallery?.contentCarousel /*embeded gallery*/ || page.type === 'filmPage');
    const hasMiniGallery = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'appData.options.paramountFeatures.toutCarousel.contentCarousel', false);
    let totalGalleries = galleryComps.length;
    if (hasMiniGallery) {
      totalGalleries += 1;
    }
    return totalGalleries > 1;
  }
  getFallbackFormat() {
    return (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'appData.pages.boltGallery.data.alternativeImageFormat', 'jpg');
  }
  getActiveImage() {
    const {
      images,
      hasMultipleGalleries
    } = this.state;
    const {
      isMiniGallery
    } = this.props;
    const store = store_store__WEBPACK_IMPORTED_MODULE_4__["default"].get();
    const id = isMiniGallery ? 'miniGallery' : this.props.combinedId || this.props.id;
    const activeImageFromStore = hasMultipleGalleries ? (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(store, ['gallery', id, 'activeImage']) : (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(store, 'gallery.activeImage');
    const activeImage = activeImageFromStore || images[0] || {};
    const foundInGallery = this.getImageForHash();
    if (foundInGallery) {
      return foundInGallery;
    }
    return activeImage;
  }
  getImageForHash() {
    const hash = typeof window !== 'undefined' && location.hash.slice(1);
    if (!hash) return;
    const {
      images
    } = this.state;
    return images.find(item => {
      const selectVideoSrc = item.vimeoId || item.youtubeId;
      const isSelectVideo = !!selectVideoSrc;
      if (isSelectVideo) {
        return selectVideoSrc === hash || item.key === hash;
      }
      return item.key === hash || item.altKey === hash;
    });
  }
  changeActiveImage(image) {
    const {
      hasMultipleGalleries
    } = this.state;
    const {
      isMiniGallery
    } = this.props;
    const pageId = hasMultipleGalleries && (isMiniGallery ? 'miniGallery' : this.props.id);
    const isVideo = image.videoSrc || image.vimeoId || image.youtubeId || image.youtubeId || image.disneySrc || image.youtubePlaylistId;
    store_store__WEBPACK_IMPORTED_MODULE_4__["default"].emit('CHANGE_ACTIVE_IMAGE', {
      image,
      pageId: hasMultipleGalleries && (this.props.combinedId || pageId)
    });
    const newSrc = this.getSrc(image);
    if (this.autoRotate) {
      window.clearTimeout(this.nextRotationTimer);
      !isVideo && this.setAutoRotateTimer(newSrc);
    }
    if (isMiniGallery) {
      return;
    }
    const foundInGallery = this.getImageForHash();
    if (foundInGallery) {
      window.history.replaceState({}, document.title, '.' + location.search);
    }
    const srcHasNotChanged = newSrc === this.activeImageUrl && !isVideo;
    if (!srcHasNotChanged && !this.loadedSrcs.includes(newSrc)) {
      this.setState({
        loading: true
      });
    }
    if (newSrc && !isVideo) {
      this.activeImageUrl = this.getSrc(image);
    }
  }
  getSrc(activeImage) {
    let src;
    if (!activeImage.mobileSrc && !activeImage.tabletSrc) {
      src = activeImage.desktopSrc;
    } else {
      src = {
        desktop: activeImage.desktopSrc,
        mobile: activeImage.mobileSrc,
        tablet: activeImage.tabletSrc
      };
    }
    return (0,utils_assets__WEBPACK_IMPORTED_MODULE_8__.useDynamicAssetFolder)((0,utils_bolt__WEBPACK_IMPORTED_MODULE_7__.getValueForClientSize)(src));
  }
  onDragStart(e) {
    const isDesktop = this.props.client?.isDesktopSize;
    const {
      isMiniGallery
    } = this.props;
    if (this.grabbed || e.button !== undefined && e.button !== 0 || isDesktop || isMiniGallery) {
      return;
    }
    if (!e.touches || !e.touches.length) {
      e.preventDefault();
    }
    const target = this.contentWrapper;
    target.style.transition = 'none';
    let eventSource = e.touches && e.touches[0] || e;
    let pos = eventSource.pageX || 0;
    this.grabbed = {
      x: pos,
      y: eventSource.pageY || 0,
      previous: pos,
      lastEvent: Date.now()
    };
  }
  onDrag(e) {
    const isDesktop = this.props.client?.isDesktopSize;
    const {
      isMiniGallery
    } = this.props;
    if (!this.grabbed || isDesktop || isMiniGallery) {
      return;
    }
    const target = this.contentWrapper;
    let eventSource = e.touches && e.touches[0] || e;
    let x = eventSource.pageX || 0;
    let y = eventSource.pageY || 0;
    let deltaX = Math.abs(x - this.grabbed.x);
    let deltaY = Math.abs(y - this.grabbed.y);
    target.style.transform = `translate(${x - this.grabbed.x}px, -50%)`;
    if (!this.grabbed.active && deltaX < TOUCH_SLOP) {
      if (deltaY >= TOUCH_SLOP) {
        // Vertical swipe
        this.grabbed = false;
      }
      return;
    }
    if (!this.grabbed.active) {
      this.grabbed.x = x;
      this.grabbed.active = true;
    }
    if (e.cancelable) {
      e.preventDefault();
    }
    this.grabbed.lastEvent = Date.now();
    this.grabbed.speed = this.grabbed.previous - x;
    this.grabbed.previous = x;
  }
  onDragEnd(e) {
    const isDesktop = this.props.client?.isDesktopSize;
    const {
      isMiniGallery
    } = this.props;
    let grabbed = this.grabbed;
    this.grabbed = false;
    if (grabbed) {
      if (!grabbed.active || isDesktop || isMiniGallery) {
        this.onImageClick(e);
        return;
      }
      const target = this.contentWrapper;
      let speed = grabbed.speed * Math.max(0, 1 - (Date.now() - grabbed.lastEvent) / 200);
      if (Math.abs(speed) > 3) {
        this.setState({
          swipeToChange: true
        });
        this.changeImageRelative(speed > 0 ? 1 : -1);
        target.style.transform = `translate(${speed > 0 ? 100 : -100}%, -50%)`;
      }
      this.changeImageTimeout = window.setTimeout(() => {
        target.style.transition = `.3s transform`;
        target.style.transform = `translate(0, -50%)`;
        this.setState({
          swipeToChange: false
        });
      }, 10);
    } else {
      this.contentWrapper.style.transition = `.3s transform`;
      this.contentWrapper.style.transform = `translate(0, -50%)`;
      this.setState({
        swipeToChange: false
      });
    }
  }
  onImageClick(e) {
    // this.changeImageRelative(e.offsetX >= e.target.width * .5 ? 1 : -1);
  }
  changeImageRelative(offset, opts) {
    const hash = typeof window !== 'undefined' && location.hash.slice(1);
    let images = this.state.images || [];
    if (images.length === 1) return;
    const activeImage = this.getActiveImage();
    let activeImageIndex = images.findIndex(img => img.key === activeImage.key);
    if (activeImageIndex === -1) {
      activeImageIndex = 0;
    }
    activeImageIndex += offset;
    while (activeImageIndex < 0) {
      activeImageIndex += images.length;
    }
    while (activeImageIndex >= images.length) {
      activeImageIndex -= images.length;
    }
    this.setState({
      direction: offset
    });
    this.changeActiveImage(images[activeImageIndex], opts);
    store_store__WEBPACK_IMPORTED_MODULE_4__["default"].emit('GALLERY_VIEW_IMAGE', images[activeImageIndex].key);
  }
  download(image, link) {
    const isEdge = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'client.isEdge', false);
    const isIOS = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'client.isIOS', false);
    link.target = '_blank';
    if (isIOS) {
      link.target = '_blank';
    } else if (!isEdge) {
      const c = document.createElement('canvas');
      const context = c.getContext('2d');
      c.width = image.naturalWidth;
      c.height = image.naturalHeight;
      context.drawImage(image, 0, 0);
      link.href = c.toDataURL('image/jpeg');
      link.style.display = 'none';
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  downloadImage(image, index) {
    let galleryImage = this.$galleryImage;
    const movieSlug = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'appData.meta.title.localeSlug', 'image');
    const isIOS = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'client.isIOS', false);
    const src = image.pdfSrc || this.getSrc(image);
    let link = document.createElement('a');
    const isGIF = src.endsWith('gif');
    if ((isGIF || image.pdfSrc) && !isIOS) {
      return this.downloadGifOrPdf(isGIF ? src : image.pdfSrc, image.fileName ? image.fileName : `${movieSlug}.${isGIF ? 'gif' : 'pdf'}`);
    }
    link.download = index ? `${movieSlug}-${index}.jpg` : `${movieSlug}.jpg`;
    link.href = src;
    if (!galleryImage) {
      return;
    }
    if (index !== undefined) {
      galleryImage = document.createElement('IMG');
      galleryImage.crossOrigin = 'anonymous';
      galleryImage.src = src + (src.includes('?') ? '&' : '?') + '_cors=1';
      galleryImage.onload = () => {
        this.download(galleryImage, link);
      };
      return;
    }
    this.download(galleryImage, link);
  }
  async downloadGifOrPdf(src, url) {
    const result = await fetch(src);
    const blob = await result.blob();
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = url;
    link.dataset.downloadurl = ['application/octet-stream', link.download, link.href].join(':');
    link.click();
  }
  downloadAll() {
    this.state.images.forEach((img, key) => this.downloadImage(img, key));
    store_store__WEBPACK_IMPORTED_MODULE_4__["default"].emit('GALLERY_DOWNLOAD_ALL', this.props.id);
  }
  async downloadAllAsSingleFile(_ref2) {
    let {
      path,
      fileName
    } = _ref2;
    const isGIF = path.endsWith('.gif');
    const isPDF = path.endsWith('.pdf');
    if (!(isGIF || isPDF)) {
      return;
    }
    store_store__WEBPACK_IMPORTED_MODULE_4__["default"].emit('GALLERY_DOWNLOAD_ALL', this.props.id);
    this.setState({
      downloadAllInProgress: true
    });
    await this.downloadGifOrPdf(path, fileName);
    this.setState({
      downloadAllInProgress: false
    });
  }
  togglePlaying(boolean) {
    this.setState({
      playing: boolean
    });
  }
  triggerImageClick(path) {
    if (this.props.isMiniGallery) {
      store_store__WEBPACK_IMPORTED_MODULE_4__["default"].emit('TOUT_CLICK', 'carousel', 'tout', path);
    }
    if (path.startsWith('http')) {
      return;
    }
    // Use navigateInternally from utils/bolt ?
    if (path.startsWith('@')) {
      return store_store__WEBPACK_IMPORTED_MODULE_4__["default"].emit('OPEN_RESERVED_VARIABLE_LINK', path);
    }
    if ((0,utils_bolt__WEBPACK_IMPORTED_MODULE_7__.isVideosPage)(path)) {
      return store_store__WEBPACK_IMPORTED_MODULE_4__["default"].emit('OPEN_VIDEO_OVERLAY', path);
    }
    if (path === 'boltShowtimes') {
      return store_store__WEBPACK_IMPORTED_MODULE_4__["default"].emit('SHOWTIMES_SHOW', true);
    }
    if (path === 'boltHomeEnt') {
      return store_store__WEBPACK_IMPORTED_MODULE_4__["default"].emit('HOMEENT_SHOW', true);
    }
    return store_store__WEBPACK_IMPORTED_MODULE_4__["default"].emit('CHANGE_ACTIVE_SECTION', path);
  }
  onImageShare(shareMetaOverrides) {
    const activeImage = this.getActiveImage();
    const imageUrl = this.getSrc(activeImage);
    const siteUrl = window.location.href;
    store_store__WEBPACK_IMPORTED_MODULE_4__["default"].emit('GALLERY_SHARE_IMAGE', {
      imageUrl,
      siteUrl,
      metaOverrides: shareMetaOverrides
    });
  }
  toggleShare() {
    store_store__WEBPACK_IMPORTED_MODULE_4__["default"].emit('CLOSE_GALLERY_SHARE');
  }
  setAutoRotateTimer(currentAssetSrc) {
    if (!this.autoRotate || this.autoRotate <= 0) {
      return;
    }
    if (this.loadedSrcs.includes(currentAssetSrc)) {
      this.nextRotationTimer = window.setTimeout(() => {
        this.changeImageRelative(1);
      }, this.autoRotate * 1000);
      return;
    }
    this.autoRotateWaitingForLoad = currentAssetSrc;
  }
  videoClickHandler() {
    if (!this.videoPlayer) {
      return;
    }
    if (!this.state.videoPlaying) {
      this.videoPlayer.play();
    }
  }
  renderArrow(direction, offset) {
    const rightArrowAria = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'appData.copy.accessibilityCopy.$RIGHT_ARROW_ARIA');
    const leftArrowAria = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'appData.copy.accessibilityCopy.$LEFT_ARROW_ARIA');
    return (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)(components_bolt_button_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].arrowBtn, this.state.loading && components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].disabled),
      disabled: this.state.loading,
      trigger: () => this.changeImageRelative(offset),
      ariaLabel: direction === 'rightArrow' ? rightArrowAria : leftArrowAria
    }, (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)(components_bolt_icons_arrowDown__WEBPACK_IMPORTED_MODULE_12__["default"], {
      class: components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"][direction]
    }));
  }
  renderNavDots(images, activeKey) {
    // const navDotsAria = accessNested(this.props, 'appData.copy.accessibilityCopy.$NAV_DOTS_ARIA');

    return (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
      class: components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].navDots
    }, images.map((img, index) => {
      const activeDot = activeKey == img.key;
      const isFirst = index === 0;
      const isLast = index === images.length - 1;
      let {
        direction = 1
      } = this.state;
      if (images.length === 2 && activeKey == 0) {
        direction = -1;
      }
      return (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
        class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].dotBtn, components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].pointer),
        onClick: () => this.changeActiveImage(img)
        // key={img.key}
        // ariaLabel={navDotsAria.replace('<number>', img.order)}
      }, (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
        class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)({
          s: components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"],
          dot: true,
          activeDot,
          isFirst,
          isLast,
          goingLeft: direction === -1,
          goingRight: direction === 1
        })
      }));
    }));
  }
  renderDownloadButtons(activeImage, canDownloadAll, canDownloadSingle, customDownloadAll) {
    let fontStyles = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    let isVideo = arguments.length > 5 ? arguments[5] : undefined;
    const copy = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'appData.copy', {});
    if (!canDownloadAll && !canDownloadSingle) {
      return;
    }
    // const isIOS = accessNested(this.props, 'client.isIOS', false);
    // const isSafari = accessNested(this.props, 'client.isSafari', false);
    const isPDF = activeImage.pdfSrc;
    let downloadAllButton;
    if (canDownloadAll) {
      const useCustom = customDownloadAll?.path && customDownloadAll.fileName;
      const isIOS = this.props.client?.isIOS;
      const useDownloadAttribute = useCustom && isIOS;
      const downloadContent = [(0,preact__WEBPACK_IMPORTED_MODULE_2__.h)("span", null, copy.baseCopy.$ALL || 'All'), (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)(components_bolt_icons_download__WEBPACK_IMPORTED_MODULE_11__["default"], {
        class: components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].downloadIcon
      })];
      const inProgress = this.state.downloadAllInProgress;
      const downloadAttrs = {
        class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].downloadButton, components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].downloadAll, isVideo && components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].lowerOpacity, inProgress && components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].downloadInProgress),
        disabled: isVideo || inProgress,
        key: 'all',
        ariaLabel: copy.accessibilityCopy.$DOWNLOAD_ALL_ARIA
      };
      if (useDownloadAttribute) {
        downloadAllButton = (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)("a", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, downloadAttrs, {
          target: "_blank",
          href: customDownloadAll.path,
          download: customDownloadAll.fileName
        }), downloadContent);
      } else {
        const trigger = useCustom ? () => this.downloadAllAsSingleFile(customDownloadAll) : this.downloadAll;
        downloadAllButton = (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)(components_bolt_button_button__WEBPACK_IMPORTED_MODULE_10__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, downloadAttrs, {
          trigger: trigger
        }), downloadContent);
      }
    }
    return (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].downloadBtnContainer, fontStyles.galleryDownloadButtons),
      key: "download-buttons"
    }, canDownloadSingle && (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)(components_bolt_button_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].downloadButton, components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].downloadSingle, isVideo && components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].lowerOpacity),
      disabled: isVideo,
      trigger: () => {
        this.downloadImage(activeImage, activeImage.key);
        store_store__WEBPACK_IMPORTED_MODULE_4__["default"].emit('GALLERY_DOWNLOAD_IMAGE', activeImage.key);
      },
      key: "single",
      ariaLabel: copy.accessibilityCopy.$DOWNLOAD_IMAGE_ARIA
    }, (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)("span", null, isPDF ? copy.baseCopy.$PDF || 'PDF' : copy.baseCopy.$IMAGE || 'Image'), (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)(components_bolt_icons_download__WEBPACK_IMPORTED_MODULE_11__["default"], {
      class: components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].downloadIcon
    })), downloadAllButton);
  }
  renderImageLoader() {
    return (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
      class: components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].spinner,
      key: "loader"
    });
  }
  imageLoaded(src) {
    if (!this.loadedSrcs.includes(src)) {
      this.loadedSrcs.push(src);
    }
    this.setState({
      loading: false
    });
    if (this.autoRotateWaitingForLoad === src) {
      this.autoRotateWaitingForLoad = null;
      this.setAutoRotateTimer(src);
    }
  }
  onMarkdownClickCapture() {}
  renderImage() {
    const {
      loading,
      swipeToChange
    } = this.state;
    const activeImage = this.getActiveImage();
    const image = this.getSrc(activeImage);
    const fallbackFormat = this.getFallbackFormat();
    const transitionDuration = swipeToChange ? 0 : TRANSITION_DURATION;
    let elem = (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)(components_core_transition_transition__WEBPACK_IMPORTED_MODULE_18__["default"], {
      duration: transitionDuration,
      class: components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].imageTransitionContainer,
      visibleClass: components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].imageTransitionVisible,
      leavingClass: components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].imageTransitionLeaving
    }, (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)(utils_bolt_webp__WEBPACK_IMPORTED_MODULE_21__.Picture, {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].activeImage, loading && components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].loading, activeImage.path && components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].clickable),
      src: image,
      fallbackFormat: fallbackFormat,
      alt: activeImage.alt,
      ariaLabel: activeImage.alt,
      onLoad: () => this.imageLoaded(image),
      ref: $ref => this.$galleryImage = $ref,
      key: `image-${image}`,
      onMouseDown: this.onDragStart,
      onTouchStart: this.onDragStart,
      onMouseMove: this.onDrag,
      onTouchMove: this.onDrag,
      onMouseUp: this.onDragEnd,
      onTouchEnd: this.onDragEnd,
      onClick: !!activeImage.path && (() => this.triggerImageClick(activeImage.path, activeImage.sameWindow))
    }));
    if (activeImage.path?.startsWith('http')) {
      return (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)(components_bolt_link_link__WEBPACK_IMPORTED_MODULE_14__["default"], {
        href: activeImage.path,
        target: activeImage.sameWindow ? '_self' : '_blank'
      }, elem);
    }
    return elem;
  }
  renderVideo() {
    const {
      loading,
      playing
    } = this.state;
    const video = this.getActiveImage();
    const isYoutube = video.youtubeId;
    const pageId = this.props?.id;
    const pageData = this.props?.appData?.pages[pageId]?.data || {};
    return (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].videoContainer, loading && components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].loading),
      ref: ref => this.videoContainer = ref,
      onMouseDown: !isYoutube && this.onDragStart,
      onTouchStart: !isYoutube && this.onDragStart,
      onMouseMove: !isYoutube && this.onDrag,
      onTouchMove: !isYoutube && this.onDrag,
      onMouseUp: !isYoutube && this.onDragEnd,
      onTouchEnd: !isYoutube && this.onDragEnd
    }, (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)(components_bolt_videos_player__WEBPACK_IMPORTED_MODULE_15__["default"], {
      ref: ref => this.videoPlayer = ref,
      activeVideo: video,
      onPlay: () => this.togglePlaying(true),
      onPause: () => this.togglePlaying(false),
      noAutoplay: video.noAutoplay,
      onLoaded: this.onLoadedHandler,
      onEnded: () => this.onEndedHandler(video),
      overrideStyles: true,
      muted: pageData.autoMuteVideos
    }), isYoutube && (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
      onMouseDown: this.onDragStart,
      onTouchStart: this.onDragStart,
      onMouseMove: this.onDrag,
      onTouchMove: this.onDrag,
      onMouseUp: this.onDragEnd,
      onTouchEnd: this.onDragEnd,
      onClick: this.videoClickHandler,
      class: components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].touchOverlay,
      style: {
        pointerEvents: playing ? 'none' : 'all'
      }
    }));
  }
  renderPDF() {
    const pdf = this.getActiveImage();
    const hasThumbnail = pdf.desktopSrc || pdf.mobileSrc || pdf.tabletSrc;
    if (hasThumbnail) {
      return this.renderImage();
    }
    let embed = (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)("embed", {
      type: "application/pdf",
      onClick: pdf.path && (() => this.triggerImageClick(pdf.path, pdf.sameWindow)),
      src: pdf.pdfSrc,
      width: "100%",
      height: "100%",
      onLoad: () => this.imageLoaded(pdf.pdfSrc),
      ariaLabel: pdf.ariaLabel,
      onMouseDown: this.onDragStart,
      onTouchStart: this.onDragStart,
      onMouseMove: this.onDrag,
      onTouchMove: this.onDrag,
      onMouseUp: this.onDragEnd,
      onTouchEnd: this.onDragEnd
    });
    if (pdf.path?.startsWith('http')) {
      return (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)(components_bolt_link_link__WEBPACK_IMPORTED_MODULE_14__["default"], {
        class: components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].activeImage,
        href: pdf.path,
        target: pdf.sameWindow ? '_self' : '_blank'
      }, embed);
    }
    return (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
      class: components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].activeImage
    }, "embed");
  }
  renderContent(activeImage, isVideo) {
    let type = isVideo ? 'video' : activeImage.pdfSrc ? 'pdf' : 'image';
    switch (type) {
      case 'video':
        return this.renderVideo();
      case 'pdf':
        return this.renderPDF();
      case 'image':
        return this.renderImage();
    }
  }
  renderShare(isVideo, shareMetaOverrides) {
    const activeImage = this.getActiveImage();
    const imageUrl = this.getSrc(activeImage);
    const baseCopy = this.props?.appData?.copy?.baseCopy || {};
    const accessibilityCopy = this.props?.appData?.copy?.accessibilityCopy || {};
    const shareCopy = baseCopy.$GALLERY_SHARE || baseCopy.$SHARE || 'Share';
    return (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
      class: components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].share
    }, (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)(components_bolt_button_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
      class: isVideo && components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].lowerOpacity,
      trigger: () => this.onImageShare(shareMetaOverrides),
      key: "image-share",
      ariaLabel: accessibilityCopy.$GALLERY_SHARE_ARIA,
      disabled: isVideo
    }, shareCopy, (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)(components_bolt_icons_share__WEBPACK_IMPORTED_MODULE_17__["default"], {
      class: components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].downloadIcon,
      "aria-hidden": true
    })), (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)(components_bolt_header_sharePopout__WEBPACK_IMPORTED_MODULE_16__["default"], {
      extraClass: components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].sharePopout,
      appData: this.props.appData,
      shareOpen: this.props.store?.gallery?.imageShareLink,
      toggleSharePop: this.toggleShare,
      shareUrl: this.props.store?.gallery?.imageShareLink,
      shareImage: imageUrl,
      key: "gallery-share"
    }));
  }
  onClick(e) {
    let internalLink = e.target.closest('a[href^="#$"]');
    if (internalLink) {
      e.preventDefault();
      let page = internalLink.getAttribute('href').slice(2).trim();
      let navOptions = {};
      if (page.includes('/?')) {
        let [pageId, qs] = page.split('/?');
        page = pageId;
        navOptions.queryString = '?' + qs;
      }
      (0,utils_bolt__WEBPACK_IMPORTED_MODULE_7__.navigateInternally)(page, navOptions);
    }
  }
  render(props) {
    let path = `appData.pages.${props.id}.data`;
    if (props.isEmbeded) {
      path = `${path}.gallery`;
    }
    const data = props.pageData || (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(props, path) || {};
    const {
      images,
      loading,
      swipeToChange
    } = this.state;
    const isDesktopSize = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(props, 'client.dimensions.width', 0) >= 1024;
    const activeImage = this.getActiveImage();
    const isVideo = activeImage.videoSrc || activeImage.vimeoId || activeImage.youtubeId || activeImage.youtubeId || activeImage.disneySrc || activeImage.youtubePlaylistId;
    const galleryTitle = data.title;
    const canDownloadAll = data.downloadAll;
    const customDownloadAll = data.customDownloadAll || {};
    const canDownloadSingle = data.downloadSingle;
    const canShare = data.share;
    const galleryDescription = data.description;
    const hideArrowsMobile = data.hideArrowsMobile || props.isMiniGallery;
    const hideArrowsDesktop = data.hideArrowsDesktop || props.isMiniGallery;
    const isMobile = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(props, 'client.deviceSize', 'mobile') === 'mobile';
    const shareMetaOverrides = data.shareMetaOverrides;
    const shouldShowControls = images.length > 1;
    const showMobileArrows = shouldShowControls && !isDesktopSize;
    const active = props.store?.header?.activeSection === props.id;
    const fontStyles = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(props, 'appData.styling.fontVariables', {});
    const hasGif = this.state.images.map(image => this.getSrc(image)).find(src => src && src.endsWith('gif'));
    const isIOS = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(props, 'client.isIOS', false);
    const isSafari = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(props, 'client.isSafari', false);
    const iosChromeGif = isIOS && !isSafari && hasGif;
    const isSection = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, ['store', 'appData', 'pages', props.id, 'section']);
    const dedicatedPage = pages_bolt_pages__WEBPACK_IMPORTED_MODULE_20__.pages[props.id] && !isSection;
    const hasDownloads = (canDownloadAll || canDownloadSingle) && !iosChromeGif;
    const hasExtraActions = hasDownloads || canShare;
    const transitionDuration = swipeToChange ? 0 : TRANSITION_DURATION;
    return (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)({
        s: components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"],
        container: true,
        active: active,
        hasDownloads: hasDownloads,
        canShare: canShare,
        includeTopArrows: !isDesktopSize && !hideArrowsMobile,
        isEmbeded: props.isEmbeded,
        dedicatedPage,
        miniGallery: props.isMiniGallery
      }),
      "data-section": props.id,
      ref: $ref => this.$container = $ref
    }, this.renderBgContent(), (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
      class: components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].inner
    }, galleryTitle && (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_13__["default"], {
      tag: "h1",
      onClickCapture: this.onClick,
      markdown: true,
      content: galleryTitle,
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].galleryTitle, 'h3')
    }), galleryDescription && (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_13__["default"], {
      tag: "h2",
      onClickCapture: this.onMarkdownClickCapture,
      markdown: true,
      content: galleryDescription,
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].galleryDescription, 'xlarge', isMobile && !hideArrowsMobile && components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].withMobileArrows)
    }), (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
      class: components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].imageWrapper,
      key: "imageWrapper",
      id: `${props.id}GalleryImageWrapper`
    }, shouldShowControls && (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].arrows, showMobileArrows && components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].mobileArrows, !hasDownloads && components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].noDownloads, hideArrowsMobile && components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].hideArrowsMobile, hideArrowsDesktop && components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].hideArrowsDesktop),
      key: "arrows"
    }, this.renderArrow('leftArrow', -1), this.renderArrow('rightArrow', 1)), (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
      class: components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].contentWrapper,
      ref: ref => this.contentWrapper = ref
    }, this.renderContent(activeImage, isVideo)), loading && this.renderImageLoader()), (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
      class: components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].bottomWrapper,
      key: "bottomWrapper"
    }, (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
      class: components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].bottom,
      key: "bottom"
    }, shouldShowControls && this.renderNavDots(images, activeImage.key), activeImage.annotation && (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)(components_core_transition_transition__WEBPACK_IMPORTED_MODULE_18__["default"], {
      duration: transitionDuration,
      class: components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].annotationTransitionContainer,
      leavingClass: components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].annotationTransitionLeaving
    }, (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_13__["default"], {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].annotation, fontStyles.galleryAnnotations),
      content: activeImage.annotation,
      markdown: true,
      key: activeImage.annotation
    })), hasExtraActions && (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
      class: components_bolt_gallery_gallery_sss__WEBPACK_IMPORTED_MODULE_19__["default"].extraActions
    }, canShare && this.renderShare(isVideo, shareMetaOverrides), !iosChromeGif && this.renderDownloadButtons(activeImage, canDownloadAll, canDownloadSingle, customDownloadAll, fontStyles, isVideo))))), this.renderOverlayedContent());
  }
}

/***/ }),

/***/ "./static/src/components/bolt/header/header.js":
/*!*****************************************************!*\
  !*** ./static/src/components/bolt/header/header.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var store_bolt_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/bolt/header */ "./static/src/store/bolt/header.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var utils_visibilityChecks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/visibilityChecks */ "./static/src/utils/visibilityChecks.js");
/* harmony import */ var utils_bolt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/bolt */ "./static/src/utils/bolt/index.js");
/* harmony import */ var utils_bolt_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/bolt/client */ "./static/src/utils/bolt/client.js");
/* harmony import */ var utils_bolt_appRegions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/bolt/appRegions */ "./static/src/utils/bolt/appRegions.js");
/* harmony import */ var utils_smoothScroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/smoothScroll */ "./static/src/utils/smoothScroll.js");
/* harmony import */ var utils_getCopyWithParams__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/getCopyWithParams */ "./static/src/utils/getCopyWithParams.js");
/* harmony import */ var components_core_html_html__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/core/html/html */ "./static/src/components/core/html/html.js");
/* harmony import */ var components_bolt_button_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/bolt/button/button */ "./static/src/components/bolt/button/button.js");
/* harmony import */ var components_bolt_link_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/bolt/link/link */ "./static/src/components/bolt/link/link.js");
/* harmony import */ var components_bolt_burgerMenu_burgerMenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/bolt/burgerMenu/burgerMenu */ "./static/src/components/bolt/burgerMenu/burgerMenu.js");
/* harmony import */ var components_bolt_icons_share__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/bolt/icons/share */ "./static/src/components/bolt/icons/share.js");
/* harmony import */ var components_bolt_icons_close__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/bolt/icons/close */ "./static/src/components/bolt/icons/close.js");
/* harmony import */ var components_bolt_icons_arrowDown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/bolt/icons/arrowDown */ "./static/src/components/bolt/icons/arrowDown.js");
/* harmony import */ var components_bolt_header_headerExpanded__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/bolt/header/headerExpanded */ "./static/src/components/bolt/header/headerExpanded.js");
/* harmony import */ var components_bolt_header_sharePopout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/bolt/header/sharePopout */ "./static/src/components/bolt/header/sharePopout.js");
/* harmony import */ var components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! components/bolt/header/header.sss */ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/header/header.sss");





















class Header extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.toggleShare = this.toggleShare.bind(this);
    this.openNavMenu = this.openNavMenu.bind(this);
    this.showShowtimes = this.showShowtimes.bind(this);
    this.showHomeEnt = this.showHomeEnt.bind(this);
    this.showCalendarRemind = this.showCalendarRemind.bind(this);
    this.triggerBurgerBtn = this.triggerBurgerBtn.bind(this);
    this.triggerActionButton = this.triggerActionButton.bind(this);
    this.renderExtraActions = this.renderExtraActions.bind(this);
    this.toggleRegionSelector = this.toggleRegionSelector.bind(this);
    this.getRegionList = this.getRegionList.bind(this);
  }
  componentDidMount() {
    const store = store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get();
    if (store.limitExceeded) {
      store_store__WEBPACK_IMPORTED_MODULE_1__["default"].on('UPDATE_API_KEY', this.getRegionList);
      return;
    }
    this.getRegionList();
    const dualViewEnabled = (0,utils_bolt__WEBPACK_IMPORTED_MODULE_5__.isDualViewEnabled)();
    const hasDynamicButton = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(store, 'appData.header.powsterHeader.persistentBtn.path', '') === '@dynamicPriority';
    if (dualViewEnabled && hasDynamicButton) {
      store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit('FILTERS_REFRESH', {
        forceShowtimesRefresh: true
      });
    }
  }
  componentWillUnmount() {
    store_store__WEBPACK_IMPORTED_MODULE_1__["default"].off('UPDATE_API_KEY', this.getRegionList);
  }
  async getRegionList() {
    let regions = await (0,utils_bolt_appRegions__WEBPACK_IMPORTED_MODULE_7__["default"])();
    if (regions) {
      // Prevent modifications of the original regions list when adding label etc.
      regions = JSON.parse(JSON.stringify(regions));
    } else {
      regions = {};
    }
    const data = this.props.appData?.header?.powsterHeader?.regionSelector;
    const extraRegions = data?.extraRegions || {};
    const specificRegions = data?.disabledRegions?.toLowerCase()?.split(',')?.map(e => e.trim())?.filter(e => e) || [];
    const includeToggle = !!data?.includeRegionsToggle;
    Object.entries(extraRegions).forEach(_ref => {
      let [countryCode, data] = _ref;
      regions[countryCode.toLowerCase()] = JSON.parse(JSON.stringify(data));
    });
    Object.entries(regions).forEach(_ref2 => {
      let [key] = _ref2;
      if (includeToggle !== specificRegions.includes(key)) {
        delete regions[key];
      }
    });
    const useLanguage = data?.useLanguage;
    let lang = this.props?.appData?.meta?.region?.languageFull || this.props?.appData?.meta?.region?.language;
    if (useLanguage && lang && regions["us"] && !regions["us"].label) {
      regions["us"].label = lang;
    }
    this.setState({
      regions
    });
  }
  openNavMenu() {
    if (!this.state.regions && !store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get().limitExceeded) {
      this.getRegionList();
    }
    store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit('OPEN_NAV_MENU');
  }
  showShowtimes() {
    store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit('SHOWTIMES_SHOW', true);
  }
  showHomeEnt() {
    store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit('HOMEENT_SHOW', true);
  }
  showCalendarRemind() {
    store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit('SHOW_CAL_REMIND');
  }
  toggleRegionSelector() {
    this.setState({
      regionSelectorShowing: !this.state.regionSelectorShowing
    });
  }
  getCurrentHeaderAction() {
    let actions = this.props.headerData.actions;
    let customBurgerMenu;
    if (typeof document !== 'undefined') {
      customBurgerMenu = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(this.props.appData, 'header.powsterHeader.customBurgerMenu', null);
    }
    const customPath = customBurgerMenu?.path;
    if (customPath?.startsWith('http')) {
      return {
        action: () => window.open(customPath, '_blank')
      };
    }
    return actions[actions.length - 1] || {
      icon: 'burger',
      action: this.openNavMenu
    };
  }
  getCurrentActionBtnAction(homeEntOpen) {
    let hidden = false;
    try {
      const {
        appData
      } = this.props;
      const previewPanelReplacingHomePage = appData?.pages.boltPreviewPanel && !appData?.pages.boltHome;
      hidden = !Object.values(appData.pages).find(page => {
        return page && !page.type && !page.section && page.page === 'home';
      }) && !previewPanelReplacingHomePage;
    } catch (e) {}
    if (homeEntOpen) {
      return {
        icon: 'close',
        action: () => store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit('HOMEENT_HIDE', true),
        hidden
      };
    }
    const store = store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get();
    if (store.widgetFullyExpanded) {
      return {
        icon: 'close',
        action: () => store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit('EXIT_WIDGET', true),
        hidden: false
      };
    }
    if (store.pressKit?.show) {
      return {
        icon: 'close',
        action: () => store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit('PRESSKIT_HIDE', true),
        hidden: false
      };
    }
    const actions = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(store, 'showtimes.actions', []);
    let lastAction = actions[actions.length - 1];
    if (lastAction) {
      return lastAction;
    }
    // Default action
    return {
      icon: 'close',
      action: () => {
        store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit('SHOWTIMES_HIDE', true);
        if ((0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get(), 'appData.pages.boltShowtimes.data.groupBookings.isEnabled', false)) {
          history?.replaceState(null, '', location?.pathname);
        }
      },
      hidden
    };
  }
  shouldHideActionBtn(actionData, showtimes, homeEnt, pressKit) {
    const interstitialOpen = this.props.headerData?.interstitialOpen;
    if (actionData.hidden || interstitialOpen) return true;
    if (actionData.icon === 'back') return false;
    const isSinglePageIframed = (0,utils_bolt_client__WEBPACK_IMPORTED_MODULE_6__.getIsSinglePageIframed)();
    if ((homeEnt || showtimes || pressKit) && isSinglePageIframed) return true;
  }
  isPersistentBtnExcluded(btn) {
    if (!btn.pageExclusions) return false;
    const exclusions = btn.pageExclusions.split(',').map(id => id.trim());
    const activePage = store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get().activePage;
    return exclusions.includes(activePage);
  }
  getSectionSpecificStyle() {
    const activeSection = this.props.headerData?.sectionUnderHeader || this.props.headerData?.activeSection;
    const customHeaderColorsPerSection = this.props.appData.styling.variables?.customHeaderColorsPerSection;
    if (!customHeaderColorsPerSection || !customHeaderColorsPerSection[activeSection]) {
      return null;
    }
    return customHeaderColorsPerSection[activeSection];
  }
  async triggerBurgerBtn() {
    let actionData = this.getCurrentHeaderAction();
    store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit('POP_HEADER_ACTION');
    try {
      if (typeof actionData.action === 'function') {
        await actionData.action();
      } else if (typeof actionData.action === 'string') {
        store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit(actionData.action);
      }
    } catch (err) {}
  }
  async triggerActionButton(homeEntVisible) {
    let actionData = this.getCurrentActionBtnAction(homeEntVisible);
    store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit('POP_SHOWTIMES_BTN_ACTION');
    try {
      if (typeof actionData.action === 'function') {
        await actionData.action();
      } else if (typeof actionData.action === 'string') {
        store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit(actionData.action);
      }
    } catch (err) {}
  }
  trackPersistentButtonClick(path, label) {
    store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit('HEADER_PERSISTENT_BUTTON_CLICK', 'header-button-click', 'header', label, {}, path);
  }
  async triggerPersistentButton(path, label) {
    this.trackPersistentButtonClick(path, label);
    if (!path) {
      return;
    }
    if (path === 'scrollTop') {
      return (0,utils_smoothScroll__WEBPACK_IMPORTED_MODULE_8__.smoothScrollTo)(document.getElementById('mainScroll'), 0, 300);
    }
    (0,utils_bolt__WEBPACK_IMPORTED_MODULE_5__.navigateInternally)(path);

    // Keeping this bits of the old code temporarily (replaced with navigateInternally, but some details seem slightly different)
    //   Feel free to remove if nothing broken by 2023-09-19

    // if (path === 'boltShowtimes') {
    // 	const hasShowtimesWidget = Object.values(this.props.appData?.pages).find(page => page.type === 'stickAndScaleWidget' && page.data.type === 'showtimes');
    // 	if (hasShowtimesWidget) {
    // 		return Store.emit('CLOSE_AND_NAVIGATE', hasShowtimesWidget.id, '', { instant: false });
    // 	} else {
    // 		return Store.emit('SHOWTIMES_SHOW', true);
    // 	}
    // } else {
    // 	const mainScroll = document.getElementById('mainScroll');
    // 	const logo = label.toLowerCase() === 'logo';
    // 	let pageData = this.props.appData?.pages?.[this.props.activePage];
    // 	const hasHubPage = this.props.appData.pages['boltHubPage'];
    // 	const isRootPath = pageData?.path === '/';
    // 	const isSection = pageData?.section;
    // 	if (isRootPath && logo) {
    // 		return smoothScrollTo(document.getElementById('mainScroll'), 0, 300);
    // 	}
    // 	if (!isSection) {
    // 		if (hasHubPage) {
    // 			await animation(mainScroll, logo ? 'right' : 'left', 400);
    // 		}
    // 	}
    // 	return Store.emit('CLOSE_AND_NAVIGATE', path, '', { instant: false });
    // }
  }
  async toggleShare() {
    const sharePopoutOpen = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(this.props, 'headerData.shareOpen', false);
    const shareData = this.props.appData?.header?.powsterHeader?.share || {};
    const webShareEnabled = shareData.webShare;
    const device = this.props?.client?.device || '';
    const isMobile = device !== 'desktop' && device !== 'tablet';
    if (!sharePopoutOpen && webShareEnabled && isMobile && navigator.share) {
      store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit('CLICKED_MOBILE_NATIVE_SHARE');
      const title = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(this.props, 'appData.copy.baseCopy.$META_TITLE', '');
      const url = window.location.href;
      const text = (0,utils_getCopyWithParams__WEBPACK_IMPORTED_MODULE_9__["default"])(this.props.appData?.copy?.baseCopy, shareData.socialCopy || '$SOCIAL_COPY');
      try {
        await navigator.share({
          text,
          title,
          url
        });
      } catch (err) {
        console.log('Share failed:', err.message);
      }
      return;
    }
    store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit('TOGGLE_SHARE_OPEN');
    if (!sharePopoutOpen) {
      store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit('ENABLE_SCROLLING_LOCK');
      return;
    }
    store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit('DISABLE_SCROLLING_LOCK');
  }
  renderExtraActions() {
    const showtimesVisible = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(this.props, 'headerData.showtimesOverlay', false);
    const homeEntVisible = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(this.props, 'headerData.homeEntOverlay', false);
    const pressKitVisible = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(this.props, 'headerData.pressKitOverlay', false);
    const homeEntMerchantOpen = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(this.props, 'headerData.homeEntMerchantOpen', false);
    let actionData = this.getCurrentActionBtnAction(homeEntVisible);
    const pages = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(this.props, 'appData.pages');
    const onlyShowtimesAndVideo = Object.keys(pages).every(p => p === 'boltShowtimes' || p === 'boltVideos');
    const store = store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get();
    const lastAction = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(store, 'showtimes.actions', []).length > 0;
    const isDesktopSize = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(this.props, 'client.isDesktopSize');
    const accessibilityCopy = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(this.props, 'appData.copy.accessibilityCopy', {});
    const providerInterstitialOpen = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(store, 'showtimes.providerInterstitialOpen', false) || (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(store, 'previewPanel.providerInterstitialOpen', false);
    if (!isDesktopSize || !showtimesVisible && !providerInterstitialOpen && !store.widgetFullyExpanded && !pressKitVisible && !homeEntVisible || !lastAction && onlyShowtimesAndVideo) {
      return;
    }
    let actionBtnColor = actionData.color || '';
    const iconComponent = {
      close: (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_close__WEBPACK_IMPORTED_MODULE_15__["default"], null),
      back: (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_arrowDown__WEBPACK_IMPORTED_MODULE_16__["default"], null)
    };
    const btnAriaLabel = actionData.icon === 'close' ? accessibilityCopy.$CLOSE_SHOWTIMES_ARIA : actionData.icon === 'back' ? accessibilityCopy.$BACK_BTN_SHOWTIMES_ARIA : '';
    const hideActionBtn = this.shouldHideActionBtn(actionData, showtimesVisible, homeEntVisible, pressKitVisible);
    const isShowtimesOnlyIframed = (0,utils_bolt_client__WEBPACK_IMPORTED_MODULE_6__.getIsShowtimesOnlyIframed)();
    const sonyHeaderEnabled = !isShowtimesOnlyIframed && (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(this.props, 'appData.options.sonyFeatures.sonyHeader', false);
    const externalBannerOpen = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(store, 'externalCookieBanner.bannerOpen');
    const bannerPushDown = externalBannerOpen || (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(store, 'cookies.pushDown', false) && (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(store, 'cookies.cookieBannerOpen', false);
    let buttonStyle = {};
    if (isDesktopSize && bannerPushDown) {
      let cookieHeight = externalBannerOpen ? (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(store, 'externalCookieBanner.height') : (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(store, 'cookies.height');
      buttonStyle.left = (window.innerHeight - cookieHeight - (sonyHeaderEnabled ? 35 : 0)) / 900 * 609 - 20 + 'px';
    }
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].outerActionButton,
      key: "action-button",
      style: buttonStyle
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_button_button__WEBPACK_IMPORTED_MODULE_11__["default"], {
      type: "primary",
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)(components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].actionButton, components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"][actionData.icon], hideActionBtn && components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].hidden, homeEntMerchantOpen && components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].homeEntMerchantOpen, homeEntVisible && components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].homeEntBtn, pressKitVisible && components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].pressKitBtn, providerInterstitialOpen && components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].providerInterstitial),
      trigger: () => this.triggerActionButton(homeEntVisible),
      style: {
        backgroundColor: actionBtnColor
      },
      ariaLabel: btnAriaLabel
    }, iconComponent[actionData.icon]));
  }
  renderRegionSelector() {
    let regions = this.state.regions;
    if (!regions) {
      return;
    }
    const appData = this.props?.appData || {};
    const useLanguage = appData?.header?.powsterHeader?.regionSelector?.useLanguage;
    let regionSelectorCta = appData?.copy?.baseCopy?.$REGION_SELECTOR_COPY || 'Choose an available region';
    if (useLanguage) {
      regionSelectorCta = appData?.copy?.baseCopy?.$REGION_SELECTOR_LANG_COPY || 'Choose your language';
    }
    const fontStyles = appData?.styling?.fontVariables || {};
    const accessibilityCopy = appData?.copy?.accessibilityCopy || {};
    let allRegions = Object.keys(regions).filter(region => regions[region] && regions[region].url).sort();
    if (!allRegions.length || allRegions.length === 1 && allRegions[0] === "us") {
      return;
    }
    let regionSelectorStyle = {};
    const footerHeight = this.props?.footerData?.coveredScreenSize;
    if (footerHeight) {
      regionSelectorStyle = {
        bottom: `${footerHeight}px`
      };
    }
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)(components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].regionSelectorOverlay, this.state.regionSelectorShowing && components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].showing),
      key: "regionSelectorOverlay"
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].backdrop,
      onClick: this.toggleRegionSelector
    }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].regionSelector,
      style: regionSelectorStyle
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)(components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].cta, fontStyles.regionSelectTitle)
    }, regionSelectorCta), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_button_button__WEBPACK_IMPORTED_MODULE_11__["default"], {
      class: components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].closeRegionSelector,
      trigger: this.toggleRegionSelector,
      ariaLabel: accessibilityCopy.$REGION_SELECTOR_CLOSE_BTN_ARIA
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_close__WEBPACK_IMPORTED_MODULE_15__["default"], null)), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].regions
    }, allRegions.map(region => {
      let data = regions[region];
      let defaultRegionName = region.replace(/_(.+)$/, ' ($1)').toUpperCase();
      let defaultLangName = data.languageFull || data.language;
      let name = useLanguage ? data.label || defaultLangName || defaultRegionName : data.label || defaultRegionName;
      if (region === "us") {
        return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_button_button__WEBPACK_IMPORTED_MODULE_11__["default"], {
          class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)(components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].region, components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].active),
          type: "tag",
          active: true,
          trigger: this.toggleRegionSelector,
          ariaLabel: accessibilityCopy.$REGION_BTN_CURRENT_REGION_ARIA.replace('<country>', region.toUpperCase())
        }, name);
      }
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_link_link__WEBPACK_IMPORTED_MODULE_12__["default"], {
        class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)(components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].region, fontStyles.regionSelectCountryCodes),
        href: data.url,
        onClick: () => store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit('REGION_SELECTOR_CLICKED', region, name),
        ariaLabel: accessibilityCopy.$REGION_BTN_ARIA.replace('<country>', region.toUpperCase())
      }, name);
    }))));
  }
  onClick(e) {
    let internalLink = e.target.closest('a[href^="#$"]');
    if (internalLink) {
      e.preventDefault();
      let page = internalLink.getAttribute('href').slice(2).trim();
      let navOptions = {};
      if (page.includes('/?')) {
        let [pageId, qs] = page.split('/?');
        page = pageId;
        navOptions.queryString = '?' + qs;
      }
      (0,utils_bolt__WEBPACK_IMPORTED_MODULE_5__.navigateInternally)(page, navOptions);
    }
  }
  renderPersistentButton() {
    const {
      isCalendarRemindMode,
      appData,
      calRemindOpen,
      headerData
    } = this.props;
    const {
      showtimesOverlay,
      homeEntOverlay,
      pressKitOverlay
    } = headerData;
    const {
      copy
    } = appData;
    const store = store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get();
    const fontStyles = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(appData, 'styling.fontVariables');
    const allButtonStyling = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(appData, 'styling.enableDisableAllButtonStyling.persistentButton');
    const showtimes = appData.pages?.boltShowtimes;
    const persistentButtonOverride = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(appData, 'header.powsterHeader.persistentButton') || {};
    const excludeFromSection = this.isPersistentBtnExcluded(persistentButtonOverride);
    const previewProviderInterstitialOpen = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(store, 'previewPanel.providerInterstitialOpen', false);
    const widgetFullyExpanded = store.widgetFullyExpanded;
    let buttonData = persistentButtonOverride;
    // Do not use default empty object
    if (!buttonData?.path && !buttonData?.label) {
      buttonData = null;
    }
    const calendars = appData.header?.powsterHeader?.calendars;
    if (!buttonData && isCalendarRemindMode && calendars) {
      const copyVariable = calendars.btnCopy;
      buttonData = {
        path: '@calendarreminder',
        label: copyVariable,
        defaultLabel: 'Save to Calendar',
        aria: copy.accessibilityCopy?.$CALENDAR_REMINDER_BTN_ARIA
      };
    }
    if (!buttonData && showtimes && (!showtimes.ageRestricted || this.props.client?.ofAge !== false)) {
      buttonData = {
        path: 'boltShowtimes',
        label: '$FIND_CINEMAS',
        defaultLabel: 'Find Cinemas',
        aria: copy.accessibilityCopy?.$FIND_CINEMAS_BTN_ARIA
      };
    }
    if (!buttonData) {
      return;
    }
    let additionalStyles = '';
    if (allButtonStyling) {
      additionalStyles = components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].allStyling;
    }
    const className = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)(fontStyles.headerCta, {
      s: components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"],
      persistentBtn: true,
      hide: showtimesOverlay || homeEntOverlay || excludeFromSection || previewProviderInterstitialOpen || widgetFullyExpanded || pressKitOverlay || calRemindOpen
    }, additionalStyles);
    let style = '';
    const sectionSpecificStyle = this.getSectionSpecificStyle();
    if (sectionSpecificStyle) {
      const {
        persistentCTAHeaderButtonBg,
        persistentCTAHeaderButtonBgHover,
        persistentCTAHeaderButtonTxtColor
      } = sectionSpecificStyle;
      // Have to pass the style as a string to set custom properties until we update to preact 10+
      style += [persistentCTAHeaderButtonTxtColor && `--color: ${persistentCTAHeaderButtonTxtColor};`, persistentCTAHeaderButtonBg && `--background: ${persistentCTAHeaderButtonBg};`, persistentCTAHeaderButtonBgHover && `--hover-background: ${persistentCTAHeaderButtonBgHover};`].filter(e => e).join('');
    }
    const {
      path,
      label,
      defaultLabel,
      aria,
      sameWindow
    } = buttonData;
    let display = copy?.baseCopy?.[label] || label;
    if (!display || display?.startsWith('$')) {
      display = defaultLabel;
    }
    const content = (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_10__["default"], {
      class: components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].persistentBtnLabel,
      content: display,
      markdown: true,
      onClickCapture: this.onClick
    });
    if (/^(https?:\/\/|mailto:)/i.test(path)) {
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("a", {
        class: className,
        style: style,
        href: path,
        target: sameWindow ? '_self' : '_blank',
        rel: "noopener noreferrer",
        onClick: () => this.trackPersistentButtonClick(path, display),
        key: "persistentButtonLink"
      }, content);
    }
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_button_button__WEBPACK_IMPORTED_MODULE_11__["default"], {
      class: className,
      style: style,
      trigger: () => this.triggerPersistentButton(path, display),
      type: "floating",
      ariaLabel: aria,
      key: "persistentButton"
    }, content);
  }
  renderShare() {
    if (!(0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(this.props, 'appData.header.powsterHeader.share')) {
      return;
    }
    const copy = this.props.appData.copy;
    const isDesktopSize = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(this.props, 'client.isDesktopSize');
    const headerData = this.props.headerData || {};
    const store = store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get();
    const appData = store.appData || {};
    const fontStyles = appData.styling?.fontVariables;
    const providerInterstitialOpen = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(store, 'showtimes.providerInterstitialOpen');
    const isMobile = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(this.props, 'client.device', '') !== 'desktop';
    const homeActive = isMobile ? store.activePage === 'boltHome' : (store.homeActivePercentage || 0) > (0,utils_visibilityChecks__WEBPACK_IMPORTED_MODULE_4__.getPercentageThreshold)(this.props.offsetTop);
    const dualViewEnabled = (0,utils_bolt__WEBPACK_IMPORTED_MODULE_5__.isDualViewEnabled)();
    const dualView = dualViewEnabled && (store.showtimes?.show || store.homeEnt?.show);
    const sectionSpecificStyle = this.getSectionSpecificStyle();
    const shareStyle = {};
    if (sectionSpecificStyle && !headerData.open) {
      const {
        headerShareMovie,
        headerShareMovieMob
      } = sectionSpecificStyle;
      shareStyle.color = headerShareMovieMob && !isDesktopSize ? headerShareMovieMob : headerShareMovie;
    }
    const hideShare = (0,utils_bolt_client__WEBPACK_IMPORTED_MODULE_6__.getIsSinglePageIframed)() || headerData.showtimesSearchOverlay || headerData.homeEntMerchantOpen && isDesktopSize || headerData.interstitialOpen;
    return [(0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_button_button__WEBPACK_IMPORTED_MODULE_11__["default"], {
      style: shareStyle,
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)({
        s: components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"],
        shareBtn: true,
        showtimesShare: headerData.showtimesOverlay && !headerData.open,
        navOpen: headerData.open,
        homeScrolled: !homeActive,
        providerInterstitialOpen: providerInterstitialOpen,
        homeEntShare: headerData.homeEntOverlay,
        pressKitShare: headerData.pressKitOverlay,
        hide: hideShare,
        inactive: this.props.calRemindOpen,
        video: headerData.videoOverlayOpen,
        dualView
      }),
      trigger: this.toggleShare,
      ariaLabel: copy.accessibilityCopy.$OPEN_SHARE_ARIA,
      key: "toggle-share"
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)(components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].cta, fontStyles.headerShare)
    }, copy.baseCopy.$SHARE), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_share__WEBPACK_IMPORTED_MODULE_14__["default"], {
      class: components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].share,
      "aria-hidden": true
    })), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_header_sharePopout__WEBPACK_IMPORTED_MODULE_18__["default"], {
      appData: this.props.appData,
      shareOpen: headerData.shareOpen,
      toggleSharePop: this.toggleShare,
      shareDetails: headerData.shareDetails,
      closeBtnstyle: this.getCurrentHeaderAction().shareBtn,
      key: "share"
    })];
  }
  renderHeaderLogo() {
    const headerLogo = this.props?.appData?.header?.powsterHeader?.logo;
    const isDesktopSize = this.props?.client?.isDesktopSize;
    if (!headerLogo || !isDesktopSize) return;
    const {
      pageExclusions,
      pageInclusions,
      path,
      sameWindow,
      src,
      alt
    } = headerLogo;
    const headerLogoExclusions = (pageExclusions || '').split(',')?.map(e => e.trim())?.filter(e => e);
    const headerLogoInclusions = (pageInclusions || '').split(',')?.map(e => e.trim())?.filter(e => e);
    const activePage = store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get().activePage;
    let hideHeaderLogo;
    if (headerLogoInclusions.length > 0) {
      hideHeaderLogo = !headerLogoInclusions.includes(activePage);
    } else {
      hideHeaderLogo = headerLogoExclusions.includes(activePage);
    }
    const className = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)(components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].headerLogo, hideHeaderLogo && components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].hide, !headerLogo.path && components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].unclickable);
    const content = (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("img", {
      src: src,
      alt: alt
    });
    if (/^(https?:\/\/|mailto:)/i.test(path)) {
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("a", {
        class: className,
        href: path,
        target: sameWindow ? '_self' : '_blank',
        rel: "noopener noreferrer",
        onClick: () => this.trackPersistentButtonClick(path, alt || 'headerLogo'),
        key: "headerLogoLink"
      }, content);
    }
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_button_button__WEBPACK_IMPORTED_MODULE_11__["default"], {
      class: className,
      trigger: e => path && this.triggerPersistentButton(path, 'Logo', sameWindow, e),
      key: "headerLogoBtn"
    }, content);
  }
  renderSonyHeader() {
    const props = this.props;
    const appData = props.appData;
    if (!appData?.options?.sonyFeatures?.sonyHeader || (0,utils_bolt_client__WEBPACK_IMPORTED_MODULE_6__.getIsSinglePageIframed)()) {
      return;
    }
    const sharedMedia = appData?.urls?.roots?.sharedMedia || '';
    let sonyPicturesLink = appData?.copy.baseCopy.$SONY_PICTURES_LINK || 'https://www.sonypictures.com/';
    let sonyLink = appData?.copy.baseCopy.$SONY_LINK || 'https://www.sony.com/en/';
    const a11y = appData?.copy.accessibilityCopy;
    let languageSelector = null;
    if (false) {}
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].sony,
      style: {
        position: 'absolute',
        top: props.offsetTop ? `${props.offsetTop - 34}px` : '',
        zIndex: 9
      }
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].left
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_link_link__WEBPACK_IMPORTED_MODULE_12__["default"], {
      class: !sonyPicturesLink && components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].disabled,
      target: "_blank",
      href: sonyPicturesLink,
      ariaLabel: a11y?.$SONY_PICTURES_LINK_ARIA_LABEL
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("img", {
      class: components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].sonyPicturesLogo,
      src: `${sharedMedia}/sonypictures/images/sony-pictures-logo.svg`,
      alt: a11y?.$SONY_PICTURES_LOGO_ALT
    }))), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].right
    }, languageSelector, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_link_link__WEBPACK_IMPORTED_MODULE_12__["default"], {
      class: !sonyLink && components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].disabled,
      target: "_blank",
      href: sonyLink,
      ariaLabel: a11y?.$SONY_LINK_ARIA_LABEL
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("img", {
      class: components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].sonyLogo,
      src: `${sharedMedia}/sonypictures/images/sony-logo.svg`,
      alt: a11y?.$SONY_LOGO_ALT
    }))));
  }
  render(props) {
    const {
      appData,
      headerData,
      isCalendarRemindMode,
      client,
      solidBackground,
      desktopSolidHeader,
      style,
      offsetTop,
      calRemindOpen
    } = props;
    const {
      copy
    } = appData;
    const {
      showtimesOverlay,
      homeEntOverlay,
      pressKitOverlay,
      homeEntMerchantOpen,
      activeSection,
      videoOverlayOpen,
      showtimesSearchOverlay,
      open: navOpen,
      shareOpen,
      interstitialOpen,
      hubTextOverlayOpen
    } = headerData || {};
    const store = store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get();
    const isMobile = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(this.props, 'client.device', '') !== 'desktop';
    const homeActive = isMobile ? store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get().activePage === 'boltHome' : (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(store, 'homeActivePercentage', 1) > (0,utils_visibilityChecks__WEBPACK_IMPORTED_MODULE_4__.getPercentageThreshold)(offsetTop);
    const locationClassName = videoOverlayOpen ? 'boltVideos' : activeSection || 'bolt';
    const actionData = this.getCurrentHeaderAction();
    const regionSelector = this.renderRegionSelector();
    const regionSelectorEnabled = typeof (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(appData, 'header.powsterHeader.regionSelector') !== 'undefined';
    // Should be set at studio level
    const {
      regionSelectorShowing
    } = this.state;
    const fontStyles = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(this.props, 'appData.styling.fontVariables');
    const oneSheetOverlay = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(store, 'synopsis.onesheetExpanded');
    // TODO: let trailerOverlay component itself handle hiding the burger menu if needed to better match the behaviour
    const trailerOverlayOpen = store.trailerOverlay?.overlayOpen && store.trailerOverlay?.data?.video;

    // const headerLogo = accessNested(appData, 'header.powsterHeader.logo', false);
    // const headerLogoExclusions = (headerLogo?.pageExclusions || '').split(',')?.map(e => e.trim())?.filter(e => e);
    // const hideHeaderLogo = headerLogoExclusions.includes(store.activePage);
    const hideBurgerMenu = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get(), 'appData.options.disableBurgerMenu', false);
    const isDesktopSize = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(this.props, 'client.isDesktopSize');
    let containerStyle = {};
    if (offsetTop) {
      containerStyle.position = 'fixed';
      containerStyle.top = offsetTop + 'px';
      containerStyle.zIndex = 9;
    }
    let sonyHeader = this.renderSonyHeader();
    if (!(0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(this.props, 'appData.header.powsterHeader')) {
      return sonyHeader;
    }
    let burgerMenuAriaLabel;

    // Should probably set the Aria label when setting the action (when calling SET_HEADER_ACTION)
    if (actionData.icon === 'burger') {
      burgerMenuAriaLabel = copy.accessibilityCopy.$OPEN_NAV_ARIA;
    } else if (actionData.tag === 'closeNavMenu') {
      burgerMenuAriaLabel = copy.accessibilityCopy.$CLOSE_NAV_ARIA;
    } else if (actionData.tag === 'closeOnesheetOverlay') {
      burgerMenuAriaLabel = copy.accessibilityCopy.$CLOSE_ONESHEET_ARIA;
    } else if (actionData.tag === 'closeCalRemind') {
      burgerMenuAriaLabel = copy.accessibilityCopy.$CALENDAR_REMINDER_CLOSE_ARIA;
    } else if (actionData.tag === 'closeVideoOverlay') {
      burgerMenuAriaLabel = copy.accessibilityCopy.$CLOSE_VIDEOS_ARIA;
    } else if (actionData.icon === 'back') {
      burgerMenuAriaLabel = copy.accessibilityCopy.$BACK_BTN_SHOWTIMES_ARIA;
    }
    const navDisabled = !this.props?.appData?.header?.powsterHeader?.nav;
    const isSinglePageIframed = (0,utils_bolt_client__WEBPACK_IMPORTED_MODULE_6__.getIsSinglePageIframed)();
    const menuText = copy.baseCopy.$NAVIGATION_LABEL;
    const showMenuText = menuText && !showtimesOverlay && !homeEntOverlay && !videoOverlayOpen && !navDisabled;
    const providerInterstitialOpen = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(store, 'showtimes.providerInterstitialOpen', false) || (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(store, 'previewPanel.providerInterstitialOpen', false);
    const sectionSpecificStyle = this.getSectionSpecificStyle();
    const navLabelStyle = {};
    if (sectionSpecificStyle) {
      const {
        headerNavLabel
      } = sectionSpecificStyle;
      navLabelStyle.color = headerNavLabel;
    }
    const burgerStyle = {};
    if (sectionSpecificStyle && !headerData.open) {
      const {
        headerNavIconOpen,
        headerNavIconOpenMob
      } = sectionSpecificStyle;
      burgerStyle.background = headerNavIconOpenMob && !isDesktopSize ? headerNavIconOpenMob : headerNavIconOpen;
    }
    const isBurgerIcon = !actionData.icon || actionData.icon === 'burger';
    const customBurgerMenu = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(store, 'appData.header.powsterHeader.customBurgerMenu', null);
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)(`header-${store.activePage}`, navOpen && 'navOpen', {
        s: components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"],
        headerContainer: true,
        homeEntMerchantOpen
      })
    }, sonyHeader, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)({
        s: components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"],
        container: true,
        showtimesSearchOverlay,
        solidBackground,
        desktopSolidHeader,
        hubTextOverlayOpen
      }, components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"][`activeSection--${locationClassName}`]),
      style: containerStyle,
      key: "container",
      id: "header"
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_button_button__WEBPACK_IMPORTED_MODULE_11__["default"], {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)(components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].burgerMenuBtn, (shareOpen || regionSelectorShowing || navDisabled || providerInterstitialOpen || hideBurgerMenu && isBurgerIcon) && components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].hide, isSinglePageIframed && components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].disabled),
      trigger: this.triggerBurgerBtn,
      ariaLabel: burgerMenuAriaLabel,
      key: "burgerButton"
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_burgerMenu_burgerMenu__WEBPACK_IMPORTED_MODULE_13__["default"], {
      type: actionData.icon || 'burger',
      dark: actionData.dark,
      style: actionData.style,
      hidden: interstitialOpen,
      lineStyle: burgerStyle,
      showtimesOverlayOpen: showtimesOverlay,
      homeEntOverlayOpen: homeEntOverlay,
      pressKitOverlayOpen: pressKitOverlay,
      isSinglePageIframed: isSinglePageIframed,
      homeScrolled: !homeActive,
      navOpen: navOpen,
      showtimesSearchOverlay: showtimesSearchOverlay,
      videoOverlayOpen: videoOverlayOpen,
      oneSheetOverlayOpen: oneSheetOverlay,
      trailerOverlayOpen: trailerOverlayOpen,
      calendarRemindOpen: calRemindOpen,
      widgetFullyExpanded: store.widgetFullyExpanded,
      customBurgerMenu: customBurgerMenu
    })), this.renderHeaderLogo(), !!showMenuText && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)(components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"].menuText, fontStyles.headerShare, {
        s: components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_19__["default"],
        homeScrolled: !homeActive
      }),
      style: navLabelStyle,
      onClick: this.triggerBurgerBtn
    }, menuText), this.renderExtraActions(), this.renderPersistentButton(), this.renderShare(), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_header_headerExpanded__WEBPACK_IMPORTED_MODULE_17__["default"], {
      appData: appData,
      activePage: props.activePage,
      headerData: headerData,
      navOpen: navOpen,
      client: client,
      isCalendarRemindMode: isCalendarRemindMode,
      showRegionSelector: regionSelector && regionSelectorEnabled,
      regionSelectorClick: this.toggleRegionSelector,
      style: style,
      key: "expand"
    }), regionSelector));
  }
}

/***/ }),

/***/ "./static/src/components/bolt/header/headerExpanded.js":
/*!*************************************************************!*\
  !*** ./static/src/components/bolt/header/headerExpanded.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderExpanded)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var utils_bolt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/bolt */ "./static/src/utils/bolt/index.js");
/* harmony import */ var utils_bolt_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/bolt/header */ "./static/src/utils/bolt/header.js");
/* harmony import */ var utils_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/assets */ "./static/src/utils/assets.js");
/* harmony import */ var utils_parseQueryString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/parseQueryString */ "./static/src/utils/parseQueryString.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var components_core_html_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/core/html/html */ "./static/src/components/core/html/html.js");
/* harmony import */ var components_bolt_socials_socials__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/bolt/socials/socials */ "./static/src/components/bolt/socials/socials.js");
/* harmony import */ var components_bolt_link_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/bolt/link/link */ "./static/src/components/bolt/link/link.js");
/* harmony import */ var components_bolt_header_headerExpanded_sss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/bolt/header/headerExpanded.sss */ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/header/headerExpanded.sss");
/* harmony import */ var utils_bolt_webp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! utils/bolt/webp */ "./static/src/utils/bolt/webp.js");













class HeaderExpanded extends preact__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.closeAndNavigate = this.closeAndNavigate.bind(this);
    this.getFallbackFormat = this.getFallbackFormat.bind(this);
    this.updateLinks(props);
    this.isSplitHeader = !!this.featuredLinks.length;
    this.updateLinks = this.updateLinks.bind(this);
  }
  componentDidMount() {
    store_store__WEBPACK_IMPORTED_MODULE_7__["default"].on('REFRESH_HEADER_LINKS', this.updateLinks);
  }
  componentWillUnmount() {
    store_store__WEBPACK_IMPORTED_MODULE_7__["default"].off('REFRESH_HEADER_LINKS', this.updateLinks);
  }
  updateLinks() {
    let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
    this.navItems = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.sortObjectByOrder)((0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(props, 'appData.header.powsterHeader.nav'));
    this.filteredNavItems = (0,utils_bolt_header__WEBPACK_IMPORTED_MODULE_3__.filterUnusedPages)(props, this.navItems);
    this.standardLinks = this.filteredNavItems.filter(item => item && item.linkType === 'primary');
    this.featuredLinks = this.navItems.filter(item => item && item.linkType === 'secondary');
  }
  trackNavLink(linkName, id) {
    store_store__WEBPACK_IMPORTED_MODULE_7__["default"].emit('TRACK_NAV_LINK_CLICK', linkName, id);
  }
  getFallbackFormat() {
    return (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'appData.header.alternativeImageFormat', 'png');
  }
  closeAndNavigate(id, e, linkName, queryString) {
    // TODO: Store.emit('CLOSE_AND_NAVIGATE', id, e);

    if (e && e.preventDefault) {
      e.preventDefault();
    }
    this.trackNavLink(linkName, id);
    store_store__WEBPACK_IMPORTED_MODULE_7__["default"].emit('CLOSE_NAV_MENU');
    const groupBookingsEnabled = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'appData.pages.boltShowtimes.data.groupBookings.isEnabled', false);
    // group bookings hack to clear ?booknow and ?groupbookings on other header clicks
    if (groupBookingsEnabled) {
      if (store_store__WEBPACK_IMPORTED_MODULE_7__["default"].get().activePage === 'boltShowtimes' && queryString) {
        // if query string, replace with querystring appended to location.pathname
        history.replaceState(null, '', location.pathname + queryString);
        if (queryString === '?groupbookings') {
          store_store__WEBPACK_IMPORTED_MODULE_7__["default"].get().set({
            groupBookingsShowtimes: true
          });
          store_store__WEBPACK_IMPORTED_MODULE_7__["default"].emit('UPDATE_SHOWTIMES_ACTIVE_TAB', 'Group Bookings', true);
        }
        if (queryString === '?booknow') {
          store_store__WEBPACK_IMPORTED_MODULE_7__["default"].emit('UPDATE_SHOWTIMES_ACTIVE_TAB', 'Book Now', true);
        }
      } else {
        if (store_store__WEBPACK_IMPORTED_MODULE_7__["default"].get().activePage === 'boltShowtimes') {
          if (store_store__WEBPACK_IMPORTED_MODULE_7__["default"].get().groupBookingsShowtimes === true) {
            history.replaceState(null, '', location.pathname + '?groupbookings');
          } else if (store_store__WEBPACK_IMPORTED_MODULE_7__["default"].get().groupBookingsShowtimes === false) {
            history.replaceState(null, '', location.pathname + '?booknow');
          }
        }
        // if no query string, keep old hack
        history.replaceState(null, '', location.pathname);
      }
    }
    if (id.startsWith('@')) {
      store_store__WEBPACK_IMPORTED_MODULE_7__["default"].emit('OPEN_RESERVED_VARIABLE_LINK', id);
    }
    const [pageId, hash] = id.split('#');
    const page = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, ['appData', 'pages', pageId]);
    if (!page) {
      return;
    }
    if (!page.section && !page.type && id !== 'boltHome') {
      store_store__WEBPACK_IMPORTED_MODULE_7__["default"].emit('CLOSE_ALL_OVERLAYS');
      // Fandango Deeplink campaign query
      let qs = (0,utils_parseQueryString__WEBPACK_IMPORTED_MODULE_5__["default"])();
      if (qs?.cmp) {
        store_store__WEBPACK_IMPORTED_MODULE_7__["default"].emit('SET_ACTIVE_PAGE', pageId, `?cmp=${qs.cmp}`, {
          hashInPage: hash
        });
        return;
      }
      store_store__WEBPACK_IMPORTED_MODULE_7__["default"].emit('SET_ACTIVE_PAGE', pageId, null, {
        hashInPage: hash
      });
      return;
    }
    if (page.type === 'showtimes') {
      if (this.props.isCalendarRemindMode) {
        store_store__WEBPACK_IMPORTED_MODULE_7__["default"].emit('SET_ACTIVE_PAGE', (0,utils_bolt__WEBPACK_IMPORTED_MODULE_2__.getMainPage)());
        store_store__WEBPACK_IMPORTED_MODULE_7__["default"].emit('SHOW_CAL_REMIND');
      } else {
        store_store__WEBPACK_IMPORTED_MODULE_7__["default"].emit('SHOWTIMES_SHOW', undefined, queryString, id);
      }
    } else if (page.type === 'homeEnt') {
      store_store__WEBPACK_IMPORTED_MODULE_7__["default"].emit('HOMEENT_SHOW', undefined, undefined, id);
    } else if (page.type === 'pressKit') {
      store_store__WEBPACK_IMPORTED_MODULE_7__["default"].emit('PRESSKIT_SHOW', undefined, undefined, id);
    } else if ((0,utils_bolt__WEBPACK_IMPORTED_MODULE_2__.isVideosPage)(id)) {
      store_store__WEBPACK_IMPORTED_MODULE_7__["default"].emit('OPEN_VIDEO_OVERLAY', id);
    } else {
      store_store__WEBPACK_IMPORTED_MODULE_7__["default"].emit('CLOSE_ALL_OVERLAYS');
      store_store__WEBPACK_IMPORTED_MODULE_7__["default"].emit('SET_ACTIVE_PAGE', id);
      store_store__WEBPACK_IMPORTED_MODULE_7__["default"].emit('CHANGE_ACTIVE_SECTION', id, {
        instant: true,
        mainPage: (0,utils_bolt__WEBPACK_IMPORTED_MODULE_2__.getMainPage)()
      });
      if (page.type === 'stickAndScaleWidget') {
        store_store__WEBPACK_IMPORTED_MODULE_7__["default"].emit('EXPAND_WIDGET');
      }
    }
  }
  getLinkSizing(isLinkOut) {
    if (isLinkOut) {
      return null;
    }
    return this.isSplitHeader ? components_bolt_header_headerExpanded_sss__WEBPACK_IMPORTED_MODULE_11__["default"].h4 : components_bolt_header_headerExpanded_sss__WEBPACK_IMPORTED_MODULE_11__["default"].h3;
  }
  renderLink(element, isFeatured) {
    // const isInternalLink = /^bolt/.test(element.path);
    const [pageId, hash] = element.path?.split('#') || [];
    const page = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, ['appData', 'pages', pageId]);
    const calendarEnabled = !!(0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'appData.header.powsterHeader.calendars', null);
    const isInternalLink = !!page || element.path?.startsWith('@');
    const sizing = this.getLinkSizing(!isInternalLink);
    const activePage = this.props.activePage || 'boltHome';
    const activeSection = this.props.headerData.activeSection || 'boltHome';
    let active = activePage === pageId || activePage === 'boltHome' && activeSection === element.path;
    const baseCopy = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'appData.copy.baseCopy', {});
    let content = baseCopy[element.name] || element.name || element.id;

    // - start  - groupBookings same page 2 header items active 'hack'
    const groupBookingsEnabled = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'appData.pages.boltShowtimes.data.groupBookings.isEnabled', false);
    if (groupBookingsEnabled && activePage == pageId && element.path === 'boltShowtimes' && element?.queryString === '?groupbookings') {
      active = store_store__WEBPACK_IMPORTED_MODULE_7__["default"].get().groupBookingsShowtimes === true;
    }
    if (groupBookingsEnabled && activePage == pageId && element.path === 'boltShowtimes' && element?.queryString === '?booknow') {
      active = store_store__WEBPACK_IMPORTED_MODULE_7__["default"].get().groupBookingsShowtimes === false;
    }
    //- end -

    if (page?.ageRestricted && this.props.client?.ofAge === false) {
      return;
    }
    if (element.path === 'boltShowtimes' && this.props.isCalendarRemindMode) {
      if (!calendarEnabled) return;
      content = baseCopy.$MENU_CALENDAR_REMINDER || 'Reminder';
    }
    let attributes = {};
    if (!element.disabled) {
      if (!isInternalLink) {
        attributes.href = element.path;
        attributes.target = element.sameWindow ? '_self' : '_blank';
        attributes.rel = 'noopener noreferrer';
        attributes.onClick = () => this.trackNavLink(content);
      } else {
        attributes.href = (0,utils_bolt__WEBPACK_IMPORTED_MODULE_2__.getRelativePageUrl)(pageId, '', hash) || '#';
        attributes.onClick = element.onClick || (e => this.closeAndNavigate(element.path, e, content, element.queryString));
      }
    } else {
      attributes['aria-disabled'] = true;
    }
    const fontStyles = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'appData.styling.fontVariables');
    const font = isFeatured ? fontStyles.navSecondaryLink : fontStyles.navPrimaryLink;
    return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(components_bolt_link_link__WEBPACK_IMPORTED_MODULE_10__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: element.id || element.link || element.name,
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_header_headerExpanded_sss__WEBPACK_IMPORTED_MODULE_11__["default"].link, active && components_bolt_header_headerExpanded_sss__WEBPACK_IMPORTED_MODULE_11__["default"].active, sizing, font),
      ariaLabel: element.name
    }, attributes), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_8__["default"], {
      class: components_bolt_header_headerExpanded_sss__WEBPACK_IMPORTED_MODULE_11__["default"].content,
      content: content,
      markdown: true
    }), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_8__["default"], {
      class: components_bolt_header_headerExpanded_sss__WEBPACK_IMPORTED_MODULE_11__["default"].hidden,
      content: content,
      "aria-hidden": true,
      markdown: true
    }));
  }
  renderRegionSelector() {
    const regionData = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'appData.meta.region') || {};
    const regionSelectorCustomisation = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'appData.header.powsterHeader.regionSelector.extraRegions', {});
    const currentRegionNameOverride = regionSelectorCustomisation[regionData.slug] || {};
    let currentRegionLabel = currentRegionNameOverride.label || regionData.slug;
    const useLanguage = this.props?.appData?.header?.powsterHeader?.regionSelector?.useLanguage;
    if (useLanguage) {
      currentRegionLabel = currentRegionNameOverride.label || regionData.languageFull || regionData.language;
    }
    const accessibilityCopy = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props.appData, 'copy.accessibilityCopy');
    return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      class: components_bolt_header_headerExpanded_sss__WEBPACK_IMPORTED_MODULE_11__["default"].regionSelectorButton,
      onClick: this.props.regionSelectorClick,
      key: "regionSelectorButton",
      ariaLabel: accessibilityCopy.$REGION_SELECTOR_BTN_ARIA
    }, (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: components_bolt_header_headerExpanded_sss__WEBPACK_IMPORTED_MODULE_11__["default"].icon
    }), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("span", {
      class: components_bolt_header_headerExpanded_sss__WEBPACK_IMPORTED_MODULE_11__["default"].name
    }, currentRegionLabel));
  }
  renderSocial() {
    const socials = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'appData.header.powsterHeader.follow');
    if (!socials) {
      return;
    }
    return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(components_bolt_socials_socials__WEBPACK_IMPORTED_MODULE_9__["default"], {
      class: components_bolt_header_headerExpanded_sss__WEBPACK_IMPORTED_MODULE_11__["default"].socials,
      socials: socials,
      navOpen: this.props.navOpen,
      key: "socials"
    });
  }
  getTTSize(tt) {
    if (tt?.titleTreatmentSize?.desktop || tt?.titleTreatmentSize?.tablet || tt?.titleTreatmentSize?.mobile) {
      return (0,utils_bolt__WEBPACK_IMPORTED_MODULE_2__.getValueForClientSize)(tt.titleTreatmentSize);
    }
  }
  render(_ref) {
    let {
      navOpen,
      showRegionSelector
    } = _ref;
    const store = store_store__WEBPACK_IMPORTED_MODULE_7__["default"].get();
    let ttStyle;
    let {
      pushDown,
      cookieBannerOpen,
      height: cookieHeight
    } = store.cookies || {};
    const externalBannerOpen = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(store, 'externalCookieBanner.bannerOpen');
    const bannerPushDown = externalBannerOpen || pushDown && cookieBannerOpen;
    const sonyHeaderEnabled = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'appData.options.sonyFeatures.sonyHeader', false);
    const bannerPushDownMobile = bannerPushDown && !(0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(store, 'client.isDesktopSize', false);
    const copy = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'appData.copy');
    const tt = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'appData.header.powsterHeader.tt', null);
    const ttSize = this.getTTSize(tt);
    const isSplitHeader = this.isSplitHeader;
    const deviceSize = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'client.deviceSize');
    let deviceBreakpoint = deviceSize;
    if (deviceSize !== 'mobile' && deviceSize !== 'tablet') {
      deviceBreakpoint = 'desktop';
    }
    const fallbackFormat = this.getFallbackFormat();
    if (bannerPushDown) {
      cookieHeight = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(store, 'externalCookieBanner.height');
    }
    if (ttSize) {
      ttStyle = {
        width: '100%',
        height: '100%',
        maxWidth: ttSize.maxWidth,
        maxHeight: ttSize.maxHeight
      };
    }
    let links = [(0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: components_bolt_header_headerExpanded_sss__WEBPACK_IMPORTED_MODULE_11__["default"].standard,
      key: "standard"
    }, tt && deviceBreakpoint in tt && (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(utils_bolt_webp__WEBPACK_IMPORTED_MODULE_12__.Picture, {
      style: ttStyle,
      class: components_bolt_header_headerExpanded_sss__WEBPACK_IMPORTED_MODULE_11__["default"].tt,
      src: (0,utils_assets__WEBPACK_IMPORTED_MODULE_4__.useDynamicAssetFolder)((0,utils_bolt__WEBPACK_IMPORTED_MODULE_2__.getValueForClientSize)(tt)),
      alt: copy.accessibilityCopy[tt.alt] || tt.alt,
      fallbackFormat: fallbackFormat
    }), this.standardLinks.map(link => this.renderLink(link, false)))];
    if (isSplitHeader) {
      links.push((0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: components_bolt_header_headerExpanded_sss__WEBPACK_IMPORTED_MODULE_11__["default"].separator,
        key: "separator"
      }), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: components_bolt_header_headerExpanded_sss__WEBPACK_IMPORTED_MODULE_11__["default"].featured,
        key: "featured"
      }, this.featuredLinks.map(link => this.renderLink(link, true))));
    }
    let paddingTop = sonyHeaderEnabled ? 34 : 0;
    if (bannerPushDown) {
      paddingTop += cookieHeight;
    }
    const totalLinks = this.standardLinks.length + this.featuredLinks.length;
    let isDesktop = true;
    if (deviceSize !== 'desktop' && deviceSize !== 'largeDesktop') {
      isDesktop = false;
    }
    return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)({
        s: components_bolt_header_headerExpanded_sss__WEBPACK_IMPORTED_MODULE_11__["default"],
        container: true,
        open: navOpen,
        splitHeader: isSplitHeader,
        hasRegionSelector: showRegionSelector,
        hasManyLinks: totalLinks >= 8
      }),
      style: navOpen && paddingTop && {
        top: `${paddingTop}px`,
        height: `calc(var(--windowHeight) - ${paddingTop}px)`
      },
      "body-scroll-lock-ignore": bannerPushDownMobile,
      inert: !navOpen
    }, (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: components_bolt_header_headerExpanded_sss__WEBPACK_IMPORTED_MODULE_11__["default"].linksContainer,
      style: {
        height: isSplitHeader && !isDesktop ? 'auto' : bannerPushDownMobile ? 'var(--windowHeight)' : '100%'
      }
    }, (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: components_bolt_header_headerExpanded_sss__WEBPACK_IMPORTED_MODULE_11__["default"].links,
      role: "navigation"
    }, links, this.renderSocial()), this.renderRegionSelector()));
  }
}

/***/ }),

/***/ "./static/src/components/bolt/header/sharePopout.js":
/*!**********************************************************!*\
  !*** ./static/src/components/bolt/header/sharePopout.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SharePopout)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var utils_copy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/copy */ "./static/src/utils/copy.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var utils_bolt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/bolt */ "./static/src/utils/bolt/index.js");
/* harmony import */ var utils_getCopyWithParams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/getCopyWithParams */ "./static/src/utils/getCopyWithParams.js");
/* harmony import */ var components_bolt_button_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/bolt/button/button */ "./static/src/components/bolt/button/button.js");
/* harmony import */ var components_bolt_link_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/bolt/link/link */ "./static/src/components/bolt/link/link.js");
/* harmony import */ var components_bolt_icons_close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/bolt/icons/close */ "./static/src/components/bolt/icons/close.js");
/* harmony import */ var components_bolt_icons_facebook__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/bolt/icons/facebook */ "./static/src/components/bolt/icons/facebook.js");
/* harmony import */ var components_bolt_icons_whatsapp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/bolt/icons/whatsapp */ "./static/src/components/bolt/icons/whatsapp.js");
/* harmony import */ var components_bolt_icons_twitter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/bolt/icons/twitter */ "./static/src/components/bolt/icons/twitter.js");
/* harmony import */ var components_bolt_icons_pinterest__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/bolt/icons/pinterest */ "./static/src/components/bolt/icons/pinterest.js");
/* harmony import */ var components_bolt_icons_tumblr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/bolt/icons/tumblr */ "./static/src/components/bolt/icons/tumblr.js");
/* harmony import */ var components_bolt_icons_viber__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/bolt/icons/viber */ "./static/src/components/bolt/icons/viber.js");
/* harmony import */ var components_bolt_icons_mail__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/bolt/icons/mail */ "./static/src/components/bolt/icons/mail.js");
/* harmony import */ var components_bolt_icons_telegram__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/bolt/icons/telegram */ "./static/src/components/bolt/icons/telegram.js");
/* harmony import */ var components_bolt_icons_copy__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/bolt/icons/copy */ "./static/src/components/bolt/icons/copy.js");
/* harmony import */ var components_bolt_icons_check__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! components/bolt/icons/check */ "./static/src/components/bolt/icons/check.js");
/* harmony import */ var components_bolt_header_sharePopout_sss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! components/bolt/header/sharePopout.sss */ "./static/src/components/bolt/header/sharePopout.sss");





















const icons = {
  facebook: (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_facebook__WEBPACK_IMPORTED_MODULE_10__["default"], {
    class: components_bolt_header_sharePopout_sss__WEBPACK_IMPORTED_MODULE_20__["default"].facebook
  }),
  whatsapp: (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_whatsapp__WEBPACK_IMPORTED_MODULE_11__["default"], {
    class: components_bolt_header_sharePopout_sss__WEBPACK_IMPORTED_MODULE_20__["default"].whatsapp
  }),
  twitter: (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_twitter__WEBPACK_IMPORTED_MODULE_12__["default"], {
    class: components_bolt_header_sharePopout_sss__WEBPACK_IMPORTED_MODULE_20__["default"].twitter
  }),
  pinterest: (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_pinterest__WEBPACK_IMPORTED_MODULE_13__["default"], {
    class: components_bolt_header_sharePopout_sss__WEBPACK_IMPORTED_MODULE_20__["default"].pinterest
  }),
  email: (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_mail__WEBPACK_IMPORTED_MODULE_16__["default"], {
    class: components_bolt_header_sharePopout_sss__WEBPACK_IMPORTED_MODULE_20__["default"].mail
  }),
  tumblr: (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_tumblr__WEBPACK_IMPORTED_MODULE_14__["default"], {
    class: components_bolt_header_sharePopout_sss__WEBPACK_IMPORTED_MODULE_20__["default"].tumblr
  }),
  viber: (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_viber__WEBPACK_IMPORTED_MODULE_15__["default"], {
    class: components_bolt_header_sharePopout_sss__WEBPACK_IMPORTED_MODULE_20__["default"].viber
  }),
  telegram: (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_telegram__WEBPACK_IMPORTED_MODULE_17__["default"], {
    class: components_bolt_header_sharePopout_sss__WEBPACK_IMPORTED_MODULE_20__["default"].telegram
  })
};
class SharePopout extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
    const supportedTypes = ['email', 'facebook', 'pinterest', 'telegram', 'tumblr', 'twitter', 'viber', 'whatsapp'];
    const data = (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.accessNested)(props, 'appData.header.powsterHeader.share') || {};
    this.shareItems = (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.sortObjectByOrder)(data).filter(type => supportedTypes.includes(type.id));
    this.shareImage = data.shareImage;
    this.shareCopy = (0,utils_getCopyWithParams__WEBPACK_IMPORTED_MODULE_6__["default"])(props.appData?.copy?.baseCopy, data.socialCopy || '$SOCIAL_COPY');
    this.shareUrl = data.shareUrl && data.shareUrl.startsWith('$') ? (0,utils_copy__WEBPACK_IMPORTED_MODULE_3__.getCopy)(data.shareUrl, {}, '', null, 'baseCopy') : data.shareUrl;
    if (!this.shareUrl) {
      this.shareUrl = (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.accessNested)(this.props, 'appData.meta.url', null);
    }
    if (typeof window !== 'undefined' && false) {}
    this.getSharingLink = this.getSharingLink.bind(this);
    this.renderIcon = this.renderIcon.bind(this);
    this.copyToClipboard = this.copyToClipboard.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  componentWillUnmount() {
    window.clearTimeout(this.timeout);
  }
  getShareURL() {
    const useMetaUrl = (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.accessNested)(this.props, 'appData.header.powsterHeader.share.useMetaUrl', false);
    if (useMetaUrl) {
      return this.props?.appData?.meta?.url;
    }
    if (this.props.shareUrl) {
      return this.props.shareUrl;
    }
    return (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.joinPaths)(this.shareUrl, this.props.shareDetails);
  }
  removeLocationQueryParameter(str) {
    if (!str) return str;
    try {
      let url = new URL(str, location.href);
      url.searchParams.delete('location');
      url.searchParams.delete('lat');
      url.searchParams.delete('lon');
      return url.toString();
    } catch (e) {
      return str;
    }
  }
  getSharingLink(type) {
    let safeString = str => JSON.stringify((str || '') + '').slice(1, -1);
    const shareData = (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.accessNested)(this.props, 'appData.header.powsterHeader.share') || {};
    let url = this.getShareURL(type);
    url = this.removeLocationQueryParameter(url);
    url = encodeURIComponent(url);
    const URLS = {
      facebook: (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.accessNested)(shareData, 'facebook.shareUrl', `https://www.facebook.com/sharer/sharer.php?u=${url}`),
      twitter: (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.accessNested)(shareData, 'twitter.shareUrl', `https://twitter.com/intent/tweet?text=${this.shareCopy}&url='${url}'`),
      whatsapp: (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.accessNested)(shareData, 'whatsapp.shareUrl', `whatsapp://send?text=${this.shareCopy} ${url}`),
      pinterest: (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.accessNested)(shareData, 'pinterest.shareUrl', `https://www.pinterest.co.uk/pin/create/button/?url=${url}&media=${this.props.shareImage || this.shareImage}&description=${this.shareCopy}`),
      email: (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.accessNested)(shareData, 'email.shareUrl', `mailto:?subject=${this.shareCopy}&body=${url}`),
      tumblr: (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.accessNested)(shareData, 'tumblr.shareUrl', `http://www.tumblr.com/share/link?url=${url}/&description=${this.shareCopy}`),
      viber: (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.accessNested)(shareData, 'viber.shareUrl', `viber://forward?text=${url} ${this.shareCopy}`),
      telegram: (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.accessNested)(shareData, 'telegram.shareUrl', `https://telegram.me/share/url?url=${url}&text=${this.shareCopy}`)
    };
    // if %SOCIAL_COPY% has been used and replaced, but %SOCIAL_COPY% itself contains %MOVIE_NAME%
    // moved %SOCIAL_COPY and %SHARE_URL% from expandAppData to here to fix encodeURIComponent issue on Thundr builds

    return URLS[type].replace(/%MOVIE_NAME%/g, safeString(this.props.appData.meta.title.locale || this.props.appData.meta.title.en)).replace(/%SOCIAL_COPY%/g, encodeURIComponent(this.shareCopy)).replace(/%SHARE_URL%/g, url).replace(/%HEADER_SHARE_IMAGE%/g, safeString(this.props.shareImage || this.shareImage)).replace(/%SHARE_IMAGE%/g, safeString(this.props.shareImage || this.shareImage));
  }
  copyToClipboard() {
    let url = this.getShareURL('copy');
    copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default()(url);
    this.setState({
      copied: true
    });
    store_store__WEBPACK_IMPORTED_MODULE_2__["default"].emit('CLICKED_SHARE', {
      label: 'copy',
      activePage: store_store__WEBPACK_IMPORTED_MODULE_2__["default"].get().activePage
    });
    this.copyTimeout = window.setTimeout(() => {
      this.setState({
        copied: false
      });
    }, 1000);
  }
  renderIcon(type) {
    return icons[type];
  }
  handleClose() {
    this.setState({
      copied: false
    });
    this.props.toggleSharePop();
  }
  render(props, _ref) {
    let {
      copied
    } = _ref;
    const {
      shareOpen,
      closeBtnstyle,
      extraClass
    } = props;
    const store = store_store__WEBPACK_IMPORTED_MODULE_2__["default"].get();
    const shareCTA = (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.accessNested)(this.props, 'appData.header.powsterHeader.share.shareCTA');
    const fontStyles = (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.accessNested)(this.props, 'appData.styling.fontVariables');
    const accessibilityCopy = (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.accessNested)(this.props, 'appData.copy.accessibilityCopy', {});
    const isRTL = fontStyles.textDirection === 'rtl';
    const activePage = store.activePage;
    const externalBannerOpen = (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.accessNested)(store, 'externalCookieBanner.bannerOpen', false);
    let cookieHeight = (externalBannerOpen ? (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.accessNested)(store, 'externalCookieBanner.height') : (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.accessNested)(store, 'cookies.height')) || 0;
    const sonyHeaderEnabled = (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.accessNested)(store, 'appData.options.sonyFeatures.sonyHeader', false);
    if (sonyHeaderEnabled) {
      cookieHeight += 34;
    }
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.joinClasses)(components_bolt_header_sharePopout_sss__WEBPACK_IMPORTED_MODULE_20__["default"].wrapper, shareOpen && components_bolt_header_sharePopout_sss__WEBPACK_IMPORTED_MODULE_20__["default"].open, extraClass && extraClass),
      style: {
        marginTop: cookieHeight + 'px'
      }
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.joinClasses)(components_bolt_header_sharePopout_sss__WEBPACK_IMPORTED_MODULE_20__["default"].container, isRTL && components_bolt_header_sharePopout_sss__WEBPACK_IMPORTED_MODULE_20__["default"].rtlContainer),
      style: {
        marginTop: cookieHeight + 'px'
      }
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_header_sharePopout_sss__WEBPACK_IMPORTED_MODULE_20__["default"].headline
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("p", {
      class: fontStyles.headerShareCta
    }, (0,utils_copy__WEBPACK_IMPORTED_MODULE_3__.getCopy)(shareCTA, {}, '', 'baseCopy') || shareCTA || 'Create social post'), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_button_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      class: components_bolt_header_sharePopout_sss__WEBPACK_IMPORTED_MODULE_20__["default"].close,
      trigger: this.handleClose,
      style: closeBtnstyle,
      ariaLabel: accessibilityCopy.$CLOSE_SHARE_ARIA
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_close__WEBPACK_IMPORTED_MODULE_9__["default"], {
      "aria-hidden": true
    }))), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_header_sharePopout_sss__WEBPACK_IMPORTED_MODULE_20__["default"].shareButtons
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_button_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.joinClasses)(components_bolt_header_sharePopout_sss__WEBPACK_IMPORTED_MODULE_20__["default"].copyButton, copied && components_bolt_header_sharePopout_sss__WEBPACK_IMPORTED_MODULE_20__["default"].copied),
      trigger: this.copyToClipboard,
      ariaLabel: accessibilityCopy.$COPY_LINK_BTN_ARIA
    }, copied ? (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_check__WEBPACK_IMPORTED_MODULE_19__["default"], {
      class: components_bolt_header_sharePopout_sss__WEBPACK_IMPORTED_MODULE_20__["default"].copy
    }) : (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_copy__WEBPACK_IMPORTED_MODULE_18__["default"], {
      class: components_bolt_header_sharePopout_sss__WEBPACK_IMPORTED_MODULE_20__["default"].copy
    })), this.shareItems.map(item => {
      const type = item.id.toLowerCase();
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_link_link__WEBPACK_IMPORTED_MODULE_8__["default"], {
        class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.joinClasses)(components_bolt_header_sharePopout_sss__WEBPACK_IMPORTED_MODULE_20__["default"].shareButton, components_bolt_header_sharePopout_sss__WEBPACK_IMPORTED_MODULE_20__["default"][`shareButton--${type}`]),
        href: this.getSharingLink(type),
        target: "_blank",
        rel: "noopener noreferrer",
        onClick: () => {
          store_store__WEBPACK_IMPORTED_MODULE_2__["default"].emit('CLICKED_SHARE', {
            label: type,
            activePage
          });
        },
        ariaLabel: accessibilityCopy.$SHARE_ARIA.replace('<platform>', item.title)
      }, this.renderIcon(type));
    }))), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_header_sharePopout_sss__WEBPACK_IMPORTED_MODULE_20__["default"].backgroundContainer,
      onClick: this.handleClose
    }));
  }
}

/***/ }),

/***/ "./static/src/components/bolt/icons/arrowDown.js":
/*!*******************************************************!*\
  !*** ./static/src/components/bolt/icons/arrowDown.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");


const ArrowDown = props => {
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 33 33"
  }, props), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    "fill-rule": "evenodd",
    d: "M15 29.585L7.45 21a1.003 1.003 0 0 0-1.416 0 1.003 1.003 0 0 0 0 1.416l9.259 10.291c.392.39 1.024.39 1.416 0L26 22.416A1.004 1.004 0 0 0 26 21a1.003 1.003 0 0 0-1.416 0L17 29.585V2a1 1 0 0 0-2 0v27.585z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowDown);

/***/ }),

/***/ "./static/src/components/bolt/icons/check.js":
/*!***************************************************!*\
  !*** ./static/src/components/bolt/icons/check.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");


const Check = props => {
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    role: "img"
  }, props), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M5.59937809,11.790571 L3.19856553,9.26329035 C2.93354482,8.98396283 2.93354482,8.5313056 3.19856553,8.25264473 C3.46358623,7.97331722 3.89361983,7.97331722 4.15864053,8.25264473 L6.07941559,10.2759359 L11.8404907,4.20939564 C12.1061364,3.93006812 12.53617,3.93006812 12.8005657,4.20939564 C13.0662114,4.48872315 13.0662114,4.94271369 12.8005657,5.22137455 L6.5594531,11.790571 C6.42694275,11.9299015 6.25317917,11.9999 6.07941559,11.9999 C5.90565202,11.9999 5.73188844,11.9299015 5.59937809,11.790571"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Check);

/***/ }),

/***/ "./static/src/components/bolt/icons/chevron.js":
/*!*****************************************************!*\
  !*** ./static/src/components/bolt/icons/chevron.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");


const Chevron = props => {
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 223 512",
    role: "img"
  }, props), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M192 0l31 24L48 256l175 232-31 24L0 256z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chevron);

/***/ }),

/***/ "./static/src/components/bolt/icons/close.js":
/*!***************************************************!*\
  !*** ./static/src/components/bolt/icons/close.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");


const Close = props => {
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, props), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M7.292 8L1.146 1.854a.502.502 0 01.708-.708L8 7.292l6.146-6.146a.502.502 0 01.708.708L8.708 8l6.146 6.146a.502.502 0 01-.708.708L8 8.708l-6.146 6.146A.502.502 0 011.5 15s-.256-.049-.354-.146a.502.502 0 010-.708L7.292 8z",
    "fill-rule": "evenodd"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Close);

/***/ }),

/***/ "./static/src/components/bolt/icons/copy.js":
/*!**************************************************!*\
  !*** ./static/src/components/bolt/icons/copy.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");


const Copy = props => {
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    role: "img"
  }, props), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M13 3h-2V2a1 1 0 00-1-1H3a1 1 0 00-1 1v10a1 1 0 001 1h2v1a1 1 0 001 1h7a1 1 0 001-1V4a1 1 0 00-1-1zM3 12V2h7v1H6a1 1 0 00-1 1v8H3zm10 2H6V4h7v10z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Copy);

/***/ }),

/***/ "./static/src/components/bolt/icons/download.js":
/*!******************************************************!*\
  !*** ./static/src/components/bolt/icons/download.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");


const Download = props => {
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, props), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M8 0a.5.5 0 0 1 .5.5v8.793l1.646-1.647a.502.502 0 0 1 .708.708l-2.5 2.5a.502.502 0 0 1-.708 0l-2.5-2.5a.502.502 0 0 1 .708-.708L7.5 9.293V.5A.501.501 0 0 1 8 0z"
  }), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M13.5 11a.5.5 0 0 1 .5.5v3c0 .827-.673 1.5-1.5 1.5h-9c-.827 0-1.5-.673-1.5-1.5l.001-3a.5.5 0 0 1 1 0v3a.5.5 0 0 0 .499.5h9c.275 0 .5-.225.5-.5v-3a.5.5 0 0 1 .5-.5z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Download);

/***/ }),

/***/ "./static/src/components/bolt/icons/facebook.js":
/*!******************************************************!*\
  !*** ./static/src/components/bolt/icons/facebook.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");


const Facebook = props => {
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 30 30",
    role: "img"
  }, props), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Facebook);

/***/ }),

/***/ "./static/src/components/bolt/icons/giphy.js":
/*!***************************************************!*\
  !*** ./static/src/components/bolt/icons/giphy.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");


const Giphy = props => {
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "-4 -4 32 32",
    role: "img"
  }, props), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M2 2.057h2.797v19.886H2zM18.787 10.996l2.797-2.463v13.41h-2.797z"
  }), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M2 21.257h19.584V24H2zM2 0h10.912L11 2.743H2zM18.787 5.485V2.743h-2.799V0h-2.797v8.228h8.393V5.485"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Giphy);

/***/ }),

/***/ "./static/src/components/bolt/icons/instagram.js":
/*!*******************************************************!*\
  !*** ./static/src/components/bolt/icons/instagram.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => {
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    role: "img"
  }, props), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M8 2c-1.63 0-1.834.007-2.474.036-.638.029-1.075.131-1.456.279a2.932 2.932 0 00-1.063.692 2.932 2.932 0 00-.692 1.063c-.148.382-.25.818-.279 1.456C2.007 6.166 2 6.37 2 8s.007 1.834.036 2.474c.029.639.131 1.075.279 1.456.153.395.358.729.692 1.063.334.334.668.539 1.063.692.382.148.818.25 1.456.279.64.029.844.036 2.474.036 1.63 0 1.834-.007 2.474-.036.638-.029 1.075-.131 1.456-.279a2.932 2.932 0 001.063-.692c.334-.334.539-.668.692-1.063.148-.382.25-.818.279-1.456C13.993 9.834 14 9.63 14 8c0-1.63-.007-1.834-.036-2.474-.029-.638-.131-1.075-.279-1.456a2.932 2.932 0 00-.692-1.063 2.932 2.932 0 00-1.063-.692c-.382-.148-.818-.25-1.456-.279C9.834 2.007 9.63 2 8 2m0 1.081c1.602 0 1.792.006 2.425.035.584.027.902.124 1.114.207.28.109.48.239.69.449.21.21.34.41.449.69.082.211.18.529.207 1.114.028.632.034.822.034 2.424 0 1.602-.006 1.792-.035 2.425-.027.585-.125.902-.207 1.114-.109.28-.239.48-.449.69-.21.21-.41.34-.69.449-.211.082-.529.18-1.114.207-.632.028-.822.034-2.424.034s-1.792-.006-2.425-.035c-.585-.027-.902-.125-1.114-.207a1.862 1.862 0 01-.69-.449c-.21-.21-.34-.41-.449-.69-.082-.211-.179-.528-.206-1.113-.029-.633-.035-.823-.035-2.425 0-1.602.006-1.792.035-2.425.027-.585.124-.902.207-1.114.109-.28.239-.48.449-.69.21-.21.41-.34.69-.449.211-.082.529-.18 1.114-.207.632-.028.822-.034 2.424-.034"
  }), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M7.986 9.982a1.995 1.995 0 110-3.99 1.995 1.995 0 010 3.99m0-5.07a3.074 3.074 0 100 6.147 3.074 3.074 0 000-6.147M11.182 5.509a.718.718 0 110-1.436.718.718 0 010 1.436z"
  }));
});

/***/ }),

/***/ "./static/src/components/bolt/icons/mail.js":
/*!**************************************************!*\
  !*** ./static/src/components/bolt/icons/mail.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");


const Mail = props => {
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    role: "img"
  }, props), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zm-1.519 1L8 7.671 3.519 4h8.962zM14 12H2V4l5.341 4.424a1 1 0 001.318 0L14 4v8z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mail);

/***/ }),

/***/ "./static/src/components/bolt/icons/phone.js":
/*!***************************************************!*\
  !*** ./static/src/components/bolt/icons/phone.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => {
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    role: "img"
  }, props), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("circle", {
    cx: "21.596",
    cy: "21.243",
    r: "1"
  }), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M13.172 5.101c.267 0 .518.104.707.293l12.728 12.728a1 1 0 0 1 0 1.414l-7.071 7.071a.993.993 0 0 1-.707.293.993.993 0 0 1-.707-.293L5.393 13.879a.993.993 0 0 1-.293-.707c0-.267.104-.518.293-.707l7.071-7.071a.994.994 0 0 1 .708-.293m0-1a1.99 1.99 0 0 0-1.414.586l-7.071 7.071a2 2 0 0 0 0 2.828l12.728 12.728c.391.391.902.586 1.414.586s1.024-.195 1.414-.586l7.071-7.071a2 2 0 0 0 0-2.828L14.586 4.686a1.997 1.997 0 0 0-1.414-.585zm-.668 23.787c-3.641-.975-6.634-3.729-7.968-7.244l1.364.62a.5.5 0 1 0 .411-.911l-2.479-1.126a.5.5 0 0 0-.662.248l-1.126 2.48a.5.5 0 1 0 .91.414l.635-1.399c1.451 3.875 4.634 6.807 8.655 7.884a.498.498 0 0 0 .612-.354.498.498 0 0 0-.352-.612zm6.992-23.776c3.641.975 6.634 3.729 7.968 7.244l-1.364-.62a.5.5 0 1 0-.411.911l2.479 1.126a.5.5 0 0 0 .662-.248l1.126-2.48a.5.5 0 1 0-.91-.414l-.635 1.399c-1.451-3.875-4.634-6.807-8.655-7.884a.498.498 0 0 0-.612.354.498.498 0 0 0 .352.612z"
  }));
});

/***/ }),

/***/ "./static/src/components/bolt/icons/pinterest.js":
/*!*******************************************************!*\
  !*** ./static/src/components/bolt/icons/pinterest.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");


const Pinterest = props => {
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    role: "img"
  }, props), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M11.493 3.23C10.667 2.437 9.523 2 8.273 2c-1.908 0-3.082.783-3.731 1.439-.8.808-1.258 1.882-1.258 2.947 0 1.335.559 2.361 1.494 2.743a.487.487 0 00.188.039c.197 0 .354-.129.408-.336.033-.12.105-.413.137-.54.068-.252.013-.372-.136-.548-.27-.321-.397-.699-.397-1.192 0-1.464 1.09-3.02 3.11-3.02 1.603 0 2.599.911 2.599 2.378 0 .926-.2 1.782-.561 2.413-.252.438-.695.961-1.373.961a.912.912 0 01-.724-.331.83.83 0 01-.146-.723c.071-.303.169-.618.263-.923.173-.557.335-1.084.335-1.503 0-.718-.441-1.2-1.098-1.2-.835 0-1.489.848-1.489 1.93 0 .531.141.927.205 1.08l-.849 3.594c-.069.291-.482 2.595.202 2.778.768.207 1.455-2.037 1.524-2.29.057-.206.255-.986.376-1.465.37.357.968.598 1.548.598 1.095 0 2.079-.493 2.773-1.387.672-.867 1.042-2.077 1.042-3.406.001-1.036-.445-2.06-1.222-2.806z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pinterest);

/***/ }),

/***/ "./static/src/components/bolt/icons/share.js":
/*!***************************************************!*\
  !*** ./static/src/components/bolt/icons/share.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => {
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, props), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M8.354,0.146l2.5,2.5C10.951,2.744,11,2.872,11,3s-0.049,0.256-0.146,0.354c-0.196,0.195-0.513,0.195-0.708,0 L8.5,1.707V10.5C8.5,10.776,8.277,11,8,11c-0.276,0-0.5-0.224-0.5-0.5V1.707L5.854,3.354c-0.196,0.195-0.512,0.195-0.708,0 c-0.195-0.196-0.195-0.512,0-0.708l2.5-2.5C7.843-0.049,8.159-0.049,8.354,0.146z"
  }), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M4.5,6C4.776,6,5,6.224,5,6.5S4.776,7,4.5,7h-1C3.224,7,3,7.224,3,7.5v7C3,14.775,3.224,15,3.5,15h9 c0.275,0,0.5-0.225,0.5-0.5v-7C13,7.224,12.775,7,12.5,7h-1C11.224,7,11,6.776,11,6.5S11.224,6,11.5,6h1C13.327,6,14,6.673,14,7.5v7 c0,0.827-0.673,1.5-1.5,1.5h-9C2.673,16,2,15.327,2,14.5v-7C2,6.673,2.673,6,3.5,6H4.5z"
  }));
});

/***/ }),

/***/ "./static/src/components/bolt/icons/snapchat.js":
/*!******************************************************!*\
  !*** ./static/src/components/bolt/icons/snapchat.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");


const Snapchat = props => {
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    role: "img"
  }, props), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M12.117 20.248c-.05 0-.098-.002-.134-.004a1.03 1.03 0 0 1-.088.004c-1.045 0-1.744-.494-2.361-.93-.443-.313-.86-.608-1.348-.69-.24-.04-.479-.06-.71-.06-.415 0-.743.065-.983.112a2.185 2.185 0 0 1-.373.054c-.103 0-.228-.023-.28-.201-.042-.14-.072-.277-.1-.408-.072-.327-.124-.527-.246-.546-1.312-.203-2.087-.5-2.24-.862a.335.335 0 0 1-.028-.114.21.21 0 0 1 .176-.22c1.041-.17 1.967-.721 2.752-1.636a6.171 6.171 0 0 0 .944-1.47c.151-.306.181-.571.09-.787-.17-.399-.729-.577-1.1-.694a3.955 3.955 0 0 1-.248-.084c-.328-.13-.868-.404-.796-.782.052-.276.417-.468.712-.468.082 0 .154.015.215.043.333.156.633.235.89.235.321 0 .476-.122.513-.156l-.031-.523v-.002c-.076-1.197-.17-2.686.211-3.54 1.14-2.555 3.558-2.754 4.271-2.754l.311-.003h.043c.715 0 3.138.199 4.279 2.756.38.854.287 2.345.211 3.543l-.003.057c-.01.162-.02.316-.028.466.035.032.176.144.465.155.245-.01.528-.088.838-.233a.663.663 0 0 1 .275-.055c.11 0 .22.021.313.06l.005.002c.264.094.436.28.44.477.003.183-.133.457-.802.722a4.062 4.062 0 0 1-.249.084c-.37.118-.93.295-1.099.693-.092.216-.061.482.09.789l.005.01c.046.11 1.174 2.681 3.691 3.096a.21.21 0 0 1 .176.22.338.338 0 0 1-.028.114c-.153.36-.928.657-2.24.86-.123.018-.175.217-.246.543-.029.135-.059.267-.1.405-.038.13-.123.194-.259.194h-.02a2.1 2.1 0 0 1-.374-.047 4.91 4.91 0 0 0-.983-.104c-.231 0-.47.02-.71.06-.488.081-.905.376-1.346.688-.619.437-1.318.931-2.363.931"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Snapchat);

/***/ }),

/***/ "./static/src/components/bolt/icons/spotify.js":
/*!*****************************************************!*\
  !*** ./static/src/components/bolt/icons/spotify.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");


const Spotify = props => {
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    role: "img"
  }, props), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-5.522-4.477-10-10-10Zm4.586 14.422a.623.623 0 0 1-.857.208c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 1 1-.277-1.216c3.809-.87 7.076-.495 9.712 1.115.294.181.387.564.207.857ZM17.81 13.7a.78.78 0 0 1-1.073.257c-2.687-1.652-6.785-2.13-9.965-1.165a.78.78 0 0 1-.973-.52.781.781 0 0 1 .52-.972c3.632-1.102 8.147-.569 11.233 1.328a.779.779 0 0 1 .258 1.072Zm.105-2.835C14.69 8.95 9.375 8.775 6.297 9.708a.935.935 0 1 1-.543-1.79c3.533-1.072 9.405-.865 13.115 1.338a.935.935 0 0 1-.954 1.609Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spotify);

/***/ }),

/***/ "./static/src/components/bolt/icons/telegram.js":
/*!******************************************************!*\
  !*** ./static/src/components/bolt/icons/telegram.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");


const Telegram = props => {
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    role: "img"
  }, props), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M13.557 2.799L2.209 7.176a.326.326 0 00.003.61l2.765 1.032 1.07 3.442c.069.22.338.302.517.156l1.541-1.256a.462.462 0 01.561-.016l2.78 2.018a.325.325 0 00.51-.197l2.036-9.796a.325.325 0 00-.435-.37zm-2.165 2.29L6.933 9.235a.919.919 0 00-.286.552l-.152 1.127c-.02.151-.232.165-.273.02L5.637 8.88a.544.544 0 01.238-.612l5.404-3.328c.097-.06.197.072.113.149z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Telegram);

/***/ }),

/***/ "./static/src/components/bolt/icons/threads.js":
/*!*****************************************************!*\
  !*** ./static/src/components/bolt/icons/threads.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");


const Threads = props => {
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 192 192",
    role: "img"
  }, props), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Threads);

/***/ }),

/***/ "./static/src/components/bolt/icons/tiktok.js":
/*!****************************************************!*\
  !*** ./static/src/components/bolt/icons/tiktok.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");


const Tiktok = props => {
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    role: "img"
  }, props), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M18.86 10.47a4.281 4.281 0 0 1-3.977-1.916l.001 6.593a4.873 4.873 0 1 1-4.873-4.873c.102 0 .202.01.302.016v2.4c-.1-.011-.199-.03-.302-.03a2.487 2.487 0 0 0 0 4.974c1.374 0 2.587-1.082 2.587-2.456l.024-11.196h2.297a4.279 4.279 0 0 0 3.944 3.82v2.668"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tiktok);

/***/ }),

/***/ "./static/src/components/bolt/icons/tumblr.js":
/*!****************************************************!*\
  !*** ./static/src/components/bolt/icons/tumblr.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");


const Tumblr = props => {
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    role: "img"
  }, props), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M11.732 11.117a.232.232 0 00-.236.01c-.536.353-1.08.531-1.616.531-.288 0-.536-.064-.758-.197a.84.84 0 01-.341-.381c-.049-.129-.048-.477-.047-.958V7.189h2.437a.231.231 0 00.231-.231V4.899a.231.231 0 00-.231-.231H8.733V2.231A.23.23 0 008.502 2H6.861a.23.23 0 00-.229.203c-.069.564-.197 1.033-.381 1.394a2.95 2.95 0 01-.722.92c-.24.205-.652.403-1.223.589a.23.23 0 00-.159.219v1.634c0 .127.103.231.231.231h1.336v3.815c0 .562.06.985.182 1.294.125.313.347.608.66.877.308.264.683.47 1.115.614.42.136.753.21 1.316.21.476 0 .929-.049 1.348-.147a7.1 7.1 0 001.385-.505.23.23 0 00.133-.209V11.32a.232.232 0 00-.121-.203z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tumblr);

/***/ }),

/***/ "./static/src/components/bolt/icons/twitch.js":
/*!****************************************************!*\
  !*** ./static/src/components/bolt/icons/twitch.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => {
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -400 2400 3200",
    role: "img"
  }, props), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M500 0 0 500v1800h600v500l500-500h400l900-900V0H500zm1700 1300-400 400h-400l-350 350v-350H600V200h1600v1100z"
  }), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M1700 550h200v600h-200zm-550 0h200v600h-200z"
  }));
});

/***/ }),

/***/ "./static/src/components/bolt/icons/twitter.js":
/*!*****************************************************!*\
  !*** ./static/src/components/bolt/icons/twitter.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");


const svgStyle = {
  height: '17px'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => {
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "black",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img"
  }, props), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M13.4019 11.2735L18.6575 5H17.4121L12.8487 10.4472L9.20386 5H5L10.5117 13.2372L5 19.8159H6.24548L11.0646 14.0635L14.9138 19.8159H19.1176L13.4016 11.2735H13.4019ZM11.6961 13.3097L11.1376 12.4895L6.69425 5.9628H8.60724L12.1931 11.2301L12.7515 12.0503L17.4127 18.8969H15.4997L11.6961 13.31V13.3097Z"
  }));
});

/***/ }),

/***/ "./static/src/components/bolt/icons/viber.js":
/*!***************************************************!*\
  !*** ./static/src/components/bolt/icons/viber.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");


const Viber = props => {
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    role: "img"
  }, props), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M12.405 3.17c-.298-.275-1.503-1.15-4.187-1.162 0 0-3.165-.191-4.708 1.225-.86.859-1.162 2.116-1.194 3.675-.032 1.559-.073 4.479 2.742 5.271h.003l-.001 1.209s-.018.489.304.589c.39.121.618-.251.99-.652.204-.22.486-.543.699-.79 1.926.162 3.406-.208 3.575-.263.389-.126 2.589-.408 2.947-3.329.369-3.01-.179-4.914-1.17-5.773zm.327 5.557c-.302 2.439-2.086 2.592-2.415 2.697-.14.045-1.441.369-3.076.262 0 0-1.219 1.47-1.599 1.853-.059.06-.129.084-.176.072-.066-.016-.084-.094-.083-.207l.01-2.008s-.001 0 0 0c-2.382-.661-2.243-3.147-2.216-4.449.027-1.302.272-2.368.998-3.085C5.48 2.679 8.168 2.856 8.168 2.856c2.271.01 3.359.694 3.611.923.838.717 1.265 2.433.953 4.948z"
  }), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M9.323 6.992a.151.151 0 01-.151-.144c-.026-.516-.269-.769-.764-.795a.151.151 0 01-.144-.159.151.151 0 01.159-.144c.654.034 1.017.408 1.051 1.082a.151.151 0 01-.144.159l-.007.001z"
  }), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M10.102 7.253h-.003a.151.151 0 01-.148-.155c.011-.519-.137-.939-.453-1.284-.317-.345-.75-.533-1.324-.575a.153.153 0 01-.14-.163.151.151 0 01.162-.14c.646.047 1.159.274 1.524.672.366.4.546.904.533 1.496a.151.151 0 01-.151.149z"
  }), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M10.899 7.565a.152.152 0 01-.152-.151c-.007-.916-.282-1.645-.817-2.166-.536-.523-1.214-.79-2.014-.796a.152.152 0 01.002-.304h.001c.881.006 1.629.303 2.223.882.595.58.901 1.382.909 2.382a.152.152 0 01-.151.153h-.001zM8.446 8.873s.213.018.328-.124l.224-.282c.108-.14.369-.229.624-.087.191.109.377.228.557.355.169.125.516.414.518.414.165.14.203.344.091.561l-.001.005a2.325 2.325 0 01-.466.574l-.004.003c-.161.134-.318.211-.473.229a.625.625 0 01-.27-.027l-.005-.007c-.239-.067-.637-.236-1.301-.602a7.709 7.709 0 01-1.093-.722 5.267 5.267 0 01-.495-.436l-.016-.016-.017-.017-.016-.016-.017-.017c-.155-.155-.3-.32-.436-.492a7.709 7.709 0 01-.722-1.093c-.367-.664-.535-1.062-.603-1.301l-.007-.006a.654.654 0 01-.027-.27.937.937 0 01.229-.474l.004-.004c.165-.185.359-.342.574-.466l.005-.001c.216-.113.421-.074.56.09.001.001.29.348.414.518.128.18.246.366.355.557.142.255.053.516-.087.624l-.281.224c-.142.115-.123.328-.123.328s.417 1.58 1.977 1.978z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Viber);

/***/ }),

/***/ "./static/src/components/bolt/icons/vimeo.js":
/*!***************************************************!*\
  !*** ./static/src/components/bolt/icons/vimeo.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");


const Vimeo = props => {
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    role: "img"
  }, props), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M21.99 7.164c-.09 2.026-1.449 4.799-4.078 8.32-2.72 3.677-5.02 5.516-6.903 5.516-1.165 0-2.151-1.122-2.958-3.366l-1.614-6.17C5.84 9.221 5.197 8.1 4.51 8.1c-.15 0-.672.327-1.569.981L2 7.818c.978-.896 1.949-1.8 2.913-2.71C6.228 3.922 7.214 3.3 7.872 3.237c1.553-.156 2.51.95 2.868 3.318.389 2.556.657 4.145.807 4.768.448 2.12.941 3.179 1.479 3.179.418 0 1.046-.686 1.882-2.057.837-1.371 1.285-2.415 1.345-3.132.12-1.184-.329-1.776-1.345-1.776-.478 0-.97.109-1.479.327.986-3.334 2.869-4.955 5.648-4.861 2.062.062 3.033 1.449 2.913 4.16Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vimeo);

/***/ }),

/***/ "./static/src/components/bolt/icons/whatsapp.js":
/*!******************************************************!*\
  !*** ./static/src/components/bolt/icons/whatsapp.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");


const Whatsapp = props => {
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    role: "img"
  }, props), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    class: "st0",
    d: "M11.084 9.192c-.036-.06-.133-.096-.277-.167a22.711 22.711 0 00-.987-.466c-.132-.048-.229-.072-.325.071a8.325 8.325 0 01-.457.562c-.084.096-.168.108-.313.036-.144-.072-.609-.223-1.161-.711a4.332 4.332 0 01-.803-.992c-.084-.144-.009-.221.063-.292.065-.064.145-.167.217-.251s.096-.143.144-.239c.048-.096.024-.179-.012-.251-.036-.072-.325-.777-.445-1.064s-.24-.239-.325-.239c-.084 0-.181-.012-.277-.012a.533.533 0 00-.385.179c-.132.144-.505.49-.505 1.195s.517 1.386.59 1.482c.072.095.999 1.589 2.467 2.163 1.468.573 1.468.382 1.733.358.265-.024.854-.347.975-.681.119-.335.119-.622.083-.681zM8.109 2.931c-2.731 0-4.953 2.205-4.953 4.915 0 1.075.351 2.071.943 2.881l-.619 1.825 1.903-.605a4.954 4.954 0 002.725.813c2.731 0 4.953-2.204 4.953-4.914S10.84 2.931 8.109 2.931zM14 7.845c0 3.228-2.637 5.845-5.891 5.845a5.908 5.908 0 01-2.848-.727L2 14l1.063-3.136a5.789 5.789 0 01-.845-3.019C2.218 4.617 4.855 2 8.109 2S14 4.617 14 7.845z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Whatsapp);

/***/ }),

/***/ "./static/src/components/bolt/icons/youtube.js":
/*!*****************************************************!*\
  !*** ./static/src/components/bolt/icons/youtube.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");


const Youtube = props => {
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    role: "img"
  }, props), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M12 5s-6.26 0-7.825.412c-.84.23-1.532.922-1.763 1.779C2 8.755 2 12 2 12s0 3.261.412 4.81c.23.856.906 1.531 1.763 1.762C5.756 19 12 19 12 19s6.26 0 7.825-.412a2.506 2.506 0 0 0 1.763-1.762c.412-1.565.412-4.81.412-4.81s.016-3.26-.412-4.825a2.506 2.506 0 0 0-1.763-1.763C18.26 5 12 5 12 5Zm-1.994 4.003L15.212 12l-5.206 2.997V9.003Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Youtube);

/***/ }),

/***/ "./static/src/components/bolt/landscapeOverlay/landscapeOverlay.js":
/*!*************************************************************************!*\
  !*** ./static/src/components/bolt/landscapeOverlay/landscapeOverlay.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LandscapeOverlay)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var components_bolt_icons_phone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/bolt/icons/phone */ "./static/src/components/bolt/icons/phone.js");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var components_bolt_landscapeOverlay_landscapeOverlay_sss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/bolt/landscapeOverlay/landscapeOverlay.sss */ "./static/src/components/bolt/landscapeOverlay/landscapeOverlay.sss");




class LandscapeOverlay extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  componentDidMount() {
    if (store_store__WEBPACK_IMPORTED_MODULE_2__["default"].get().quizPhotobooth) {
      store_store__WEBPACK_IMPORTED_MODULE_2__["default"].emit('TRACK_QUIZPHOTOBOOTH_VIEW', 'rotate-device');
    }
  }
  render() {
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      className: components_bolt_landscapeOverlay_landscapeOverlay_sss__WEBPACK_IMPORTED_MODULE_3__["default"].wrapper
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_phone__WEBPACK_IMPORTED_MODULE_1__["default"], {
      class: components_bolt_landscapeOverlay_landscapeOverlay_sss__WEBPACK_IMPORTED_MODULE_3__["default"].phoneIcon,
      ariaLabel: "Phone Icon"
    }));
  }
}

/***/ }),

/***/ "./static/src/components/bolt/link/link.js":
/*!*************************************************!*\
  !*** ./static/src/components/bolt/link/link.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");

// import Store from 'store/store';
// import { accessNested } from 'utils/utils';

class Link extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  // addExternalLinkModal(attributes) {
  // 	const prevOnClick = attributes.onClick;
  // 	attributes.onClick = (e) => {
  // 		e.stopPropagation();
  // 		e.preventDefault();
  // 		Store.emit('DISPLAY_EXTERNAL_LINK_MODAL', {
  // 			originalEvent: e,
  // 			onClick: prevOnClick,
  // 			target: attributes.target,
  // 			href: attributes.href
  // 		});
  // 		return false;
  // 	};
  // 	return attributes;
  // }

  render(_ref) {
    let {
      children,
      ...attributes
    } = _ref;
    // const appData = Store.get().appData;
    // const hasExternalLinkModal = accessNested(appData, 'options.externalLinkModal', false) && !attributes.ignoreExternalLinkModal;
    // const isExternalLink = attributes.href && /^(https?:)?\/\//.test(attributes.href);
    // if (hasExternalLinkModal && isExternalLink) {
    // 	attributes = this.addExternalLinkModal(attributes);
    // }

    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("a", attributes, children);
  }
}

/***/ }),

/***/ "./static/src/components/bolt/matterhorn/matterhorn.js":
/*!*************************************************************!*\
  !*** ./static/src/components/bolt/matterhorn/matterhorn.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Matterhorn)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _matterhorn_sss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matterhorn.sss */ "./static/src/components/bolt/matterhorn/matterhorn.sss");


class Matterhorn extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  componentDidMount() {
    if (typeof this.props.onPlayerReady === 'function') {
      this.props.onPlayerReady();
    }
  }
  render(props) {
    const {
      activeVideo
    } = props;
    const src = activeVideo.disneySrc;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("iframe", {
      id: "matterhorn_player",
      class: _matterhorn_sss__WEBPACK_IMPORTED_MODULE_1__["default"].iframe,
      src: src,
      allowfullscreen: true,
      webkitallowfullscreen: true,
      mozAllowFullScreen: true,
      allow: "autoplay *; fullscreen *; encrypted-media *",
      sandbox: "allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation",
      frameborder: "0",
      title: "Matterhorn Player"
    });
  }
}

/***/ }),

/***/ "./static/src/components/bolt/nativeVideo/nativeVideo.js":
/*!***************************************************************!*\
  !*** ./static/src/components/bolt/nativeVideo/nativeVideo.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NativeVideo)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var components_bolt_nativeVideo_nativeVideo_sss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/bolt/nativeVideo/nativeVideo.sss */ "./static/src/components/bolt/nativeVideo/nativeVideo.sss");




class NativeVideo extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.progressTracking = {};
    this.videoName = this.props.activeVideo.videoSrc.split('\\').pop().split('/').pop();
    this.videoPlaying = this.videoPlaying.bind(this);
    this.videoPaused = this.videoPaused.bind(this);
    this.progressTracker = this.progressTracker.bind(this);
    this.videoCanPlayHandler = this.videoCanPlayHandler.bind(this);
  }
  play() {
    this.$video?.play();
  }
  get duration() {
    return this.$video?.duration || 0;
  }
  componentDidMount() {
    const {
      autoplay,
      onEnded,
      activeVideo
    } = this.props;
    if (activeVideo.videoSrc.match(/m3u8$/)) {
      if (typeof Hls === 'undefined') {
        (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.loadScript)('https://cdn.jsdelivr.net/npm/hls.js@latest').then(() => this.initHLS(activeVideo.videoSrc, autoplay));
      } else {
        this.initHLS(activeVideo.videoSrc, autoplay);
      }
    }
    if (this.$video) {
      if (autoplay) {
        this.$video.load();
        this.$video.play();
      }
      if (onEnded) {
        this.$video.addEventListener('ended', onEnded);
      }
      if (this.props.fromStart) {
        this.$video.currentTime = 0;
      }
      this.$video.addEventListener('canplay', this.videoCanPlayHandler);
      this.$video.addEventListener('playing', this.videoPlaying);
      this.$video.addEventListener('pause', this.videoPaused);

      // Video already loaded, have to call the callback manually
      if (this.$video.readyState) {
        this.videoCanPlayHandler();
      }
    }
  }
  componentWillUnmount() {
    this.$video.removeEventListener('ended', this.props.onEnded);
    this.$video.removeEventListener('canplay', this.videoCanPlayHandler);
    this.$video.removeEventListener('playing', this.videoPlaying);
    this.$video.removeEventListener('pause', this.videoPaused);
    cancelAnimationFrame(this.timer);
  }
  initHLS(src, autoplay) {
    if (typeof Hls !== 'undefined' && window.Hls.isSupported()) {
      const hls = new window.Hls();
      hls.loadSource(src);
      hls.attachMedia(this.$video);
      if (autoplay) {
        this.$video.play();
      }
    }
  }
  videoCanPlayHandler() {
    if (this.videoCanPlay) {
      return;
    }
    this.videoCanPlay = true;
    this.setState({
      playing: !this.$video.paused,
      loading: false
    });
    if (typeof this.props.canPlayCallback === 'function') {
      this.props.canPlayCallback(this.$video);
    }
  }
  progressTracker() {
    if (!this.trackProgress || !this.$video) {
      // We shouldn't be tracking the progress, so let's quit
      return;
    }

    // Only update the state progress if displaying the controls
    // if (this.props.showControls) {
    // 	this.setState({ progress: this.$video.currentTime });
    // }

    const progress = this.$video.currentTime / this.$video.duration;
    let step = [0, 25, 50, 75, 95].find(step => progress > step / 100 && !this.progressTracking[step]);
    if (step || step === 0) {
      this.progressTracking[step] = true;
      store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit('VIDEO_PLAYER_PROGRESS', {
        step,
        video: this.videoName,
        time: this.$video.currentTime,
        platform: 'native',
        isShowtimesMessage: this.props.isShowtimesMessage,
        isTrailerOverlay: this.props.isTrailerOverlay,
        isTrailer: this.props.isTrailer
      });
    }
    this.timer = requestAnimationFrame(this.progressTracker);
  }
  videoPlaying() {
    if (this.props.useTracking && !this.progressTracking[0]) {
      store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit('VIDEO_PLAYER_PROGRESS', {
        step: 0,
        video: this.videoName,
        time: this.$video.currentTime,
        platform: 'native',
        isShowtimesMessage: this.props.isShowtimesMessage,
        isTrailerOverlay: this.props.isTrailerOverlay,
        isTrailer: this.props.isTrailer
      });
      this.progressTracking[0] = true;
    }
    let state = this.state;
    let newState = {
      playing: true,
      loading: false,
      duration: this.$video.duration,
      muted: this.$video.muted
    };
    let actualNewState = Object.keys(newState).reduce((o, k) => {
      let val = newState[k];
      if (state[k] !== val) {
        o[k] = newState[k];
      }
      return o;
    }, {});
    if (Object.keys(actualNewState).length) {
      this.setState(actualNewState);
    }
    if (!this.trackProgress && this.props.useTracking) {
      this.trackProgress = true;
      // Start tracking the progress
      cancelAnimationFrame(this.timer);
      this.timer = requestAnimationFrame(this.progressTracker);
    }
  }
  videoPaused() {
    cancelAnimationFrame(this.timer);
    this.trackProgress = false;
    this.setState({
      playing: false,
      loading: false
    });
  }
  render(props) {
    const {
      activeVideo,
      overrideStyles,
      muted
    } = props;
    const captionsLabel = activeVideo.captionsSrc && activeVideo.captionsSrc.replace(/.*\/([^/]*)\.[^/]+$/, '$1');
    const videoFile = activeVideo.videoSrc;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("video", {
      ref: $ref => this.$video = $ref,
      "webkit-playsinline": true,
      playsinline: true,
      controls: true,
      poster: activeVideo.posterSrc || activeVideo.thumbSrc,
      "aria-label": activeVideo.ariaLabel,
      class: overrideStyles && components_bolt_nativeVideo_nativeVideo_sss__WEBPACK_IMPORTED_MODULE_3__["default"].nativeVideo,
      muted: muted,
      key: videoFile
    }, videoFile.includes('.webm') && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("source", {
      src: videoFile,
      type: "video/webm"
    }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("source", {
      src: videoFile.replace(/\.[^.]*$/, '.mp4'),
      type: "video/mp4"
    }), activeVideo.captionsSrc && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("track", {
      label: captionsLabel,
      src: activeVideo.captionsSrc,
      kind: "captions",
      srclang: activeVideo.captionsLang,
      default: true
    }));
  }
}

/***/ }),

/***/ "./static/src/components/bolt/section/section.js":
/*!*******************************************************!*\
  !*** ./static/src/components/bolt/section/section.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var components_bolt_sectionBackground_sectionBackground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/bolt/sectionBackground/sectionBackground */ "./static/src/components/bolt/sectionBackground/sectionBackground.js");
/* harmony import */ var components_bolt_ageGate_ageGate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/bolt/ageGate/ageGate */ "./static/src/components/bolt/ageGate/ageGate.js");
/* harmony import */ var components_bolt_section_section_sss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/bolt/section/section.sss */ "./static/src/components/bolt/section/section.sss");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");





class Section extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  renderBgContent() {
    const {
      appData,
      id
    } = this.props;
    const pageData = appData.pages[id]?.data;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_section_section_sss__WEBPACK_IMPORTED_MODULE_3__["default"].contentBelow
    }, !!pageData?.bg && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_sectionBackground_sectionBackground__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ref: ref => this.sectionBackground = ref,
      data: pageData.bg
    }));
  }
  renderOverlayedContent() {
    const {
      appData,
      id
    } = this.props;
    const {
      ageGateOpen
    } = store_store__WEBPACK_IMPORTED_MODULE_4__["default"].get();
    let showAgeGate;
    const isSection = appData.pages[id]?.section;
    const ageGateEnabled = appData.options.ageGate;
    if (ageGateEnabled) {
      const ageGateOnlyOnPages = ageGateEnabled?.onlyOnPages || '';
      const hasAgeGate = ageGateOnlyOnPages.split(',').map(e => e.trim()).includes(id) && isSection;
      showAgeGate = hasAgeGate && ageGateOpen !== false;
    }
    if (!showAgeGate) {
      return;
    }
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_section_section_sss__WEBPACK_IMPORTED_MODULE_3__["default"].overlayedContent
    }, showAgeGate && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_ageGate_ageGate__WEBPACK_IMPORTED_MODULE_2__["default"], {
      appData: appData,
      copy: appData.copy,
      key: "ageGate",
      isSectionAgeGate: true
    }));
  }
}

/***/ }),

/***/ "./static/src/components/bolt/sectionBackground/sectionBackground.js":
/*!***************************************************************************!*\
  !*** ./static/src/components/bolt/sectionBackground/sectionBackground.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SectionBackground)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var utils_bolt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/bolt */ "./static/src/utils/bolt/index.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var utils_tryToPlayVideo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/tryToPlayVideo */ "./static/src/utils/tryToPlayVideo.js");
/* harmony import */ var utils_bolt_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/bolt/webp */ "./static/src/utils/bolt/webp.js");
/* harmony import */ var utils_assets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/assets */ "./static/src/utils/assets.js");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var components_bolt_sectionBackground_sectionBackground_sss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/bolt/sectionBackground/sectionBackground.sss */ "./static/src/components/bolt/sectionBackground/sectionBackground.sss");








class SectionBackground extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      posterVisible: true
    };
    this.playVideo = this.playVideo.bind(this);
    this.removeBgVideo = this.removeBgVideo.bind(this);
    this.hidePoster = this.hidePoster.bind(this);
    const bg = (0,utils_bolt__WEBPACK_IMPORTED_MODULE_1__.getValueForClientSize)(this.props.data);
    if (bg.tiled && !bg.tileSize) {
      const img = new Image();
      img.onload = () => {
        this.tileSize = img.naturalWidth;
      };
      img.src = bg.asset;
    }
  }
  componentDidMount() {
    this.playVideo();
  }
  playVideo() {
    (0,utils_tryToPlayVideo__WEBPACK_IMPORTED_MODULE_3__["default"])(this.video).then(this.hidePoster).catch(this.removeBgVideo);
  }
  removeBgVideo() {
    this.setState({
      removeBgVideo: true
    });
  }
  hidePoster() {
    this.setState({
      posterVisible: false,
      removeBgVideo: false
    });
  }
  getBgValue(field) {
    const {
      data
    } = this.props;
    if (!data || !data.desktop && !data.tablet && !data.mobile) {
      return undefined;
    }
    let bgValue = {};
    Object.entries(data).map(_ref => {
      let [device, data] = _ref;
      bgValue[device] = data[field];
    });
    return (0,utils_assets__WEBPACK_IMPORTED_MODULE_5__.useDynamicAssetFolder)((0,utils_bolt__WEBPACK_IMPORTED_MODULE_1__.getValueForClientSize)(bgValue));
  }
  forceBgSize(_ref2) {
    let {
      height
    } = _ref2;
    if (height && height !== 'auto' && !height.endsWith?.('px')) {
      height += 'px';
    }
    this.wrapper.style.height = height || '';
  }
  renderBgVideo(bg) {
    const {
      removeBgVideo,
      posterVisible
    } = this.state;
    const preloadImg = this.getBgValue('preLoadImg');
    const fallbackFormat = this.props.data?.alternativeImageFormat || 'jpg';
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_sectionBackground_sectionBackground_sss__WEBPACK_IMPORTED_MODULE_7__["default"].bgVideo
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("video", {
      ref: ref => this.video = ref,
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.joinClasses)(components_bolt_sectionBackground_sectionBackground_sss__WEBPACK_IMPORTED_MODULE_7__["default"].video, removeBgVideo && components_bolt_sectionBackground_sectionBackground_sss__WEBPACK_IMPORTED_MODULE_7__["default"].hide),
      style: {
        objectPosition: bg.bgPosition || 'center'
      },
      poster: preloadImg,
      autoPlay: true,
      muted: true,
      playsInline: true,
      loop: !bg.disableLoop,
      onCanPlay: this.playVideo
    }, bg.asset.endsWith('.webm') && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("source", {
      src: bg.asset,
      type: "video/webm"
    }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("source", {
      src: bg.asset.replace(/\.[^./]+$/, '.mp4'),
      type: "video/mp4"
    })), posterVisible && preloadImg && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(utils_bolt_webp__WEBPACK_IMPORTED_MODULE_4__.Picture, {
      src: preloadImg,
      alt: "",
      fallbackFormat: fallbackFormat
    }));
  }
  render(_ref3) {
    let {
      data
    } = _ref3;
    const bg = (0,utils_bolt__WEBPACK_IMPORTED_MODULE_1__.getValueForClientSize)(data);
    let isVideo;
    const wrapperStyle = {};
    if (bg?.asset) {
      const asset = bg.asset.trim();
      isVideo = asset.endsWith('webm') || asset.endsWith('mp4');
      wrapperStyle.backgroundImage = isVideo ? `url(${bg.fallbackImg})` : `url(${bg.asset})`;
      wrapperStyle.backgroundPosition = bg.bgPosition || 'center';
    }
    if (bg.tiled) {
      wrapperStyle.backgroundSize = bg.tileSize || this.tileSize || 'cover';
    }
    if (bg.backgroundColor) {
      const variables = store_store__WEBPACK_IMPORTED_MODULE_6__["default"].get().appData.styling.variables;
      wrapperStyle.backgroundColor = variables[bg.backgroundColor.substring(1)] || bg.backgroundColor;
    }
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      ref: ref => this.wrapper = ref,
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.joinClasses)(components_bolt_sectionBackground_sectionBackground_sss__WEBPACK_IMPORTED_MODULE_7__["default"].wrapper, bg.tiled && components_bolt_sectionBackground_sectionBackground_sss__WEBPACK_IMPORTED_MODULE_7__["default"].tiled),
      style: wrapperStyle
    }, isVideo && this.renderBgVideo(bg));
  }
}

/***/ }),

/***/ "./static/src/components/bolt/socials/socials.js":
/*!*******************************************************!*\
  !*** ./static/src/components/bolt/socials/socials.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Socials)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var components_bolt_icons_facebook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/bolt/icons/facebook */ "./static/src/components/bolt/icons/facebook.js");
/* harmony import */ var components_bolt_icons_twitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/bolt/icons/twitter */ "./static/src/components/bolt/icons/twitter.js");
/* harmony import */ var components_bolt_icons_twitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/bolt/icons/twitch */ "./static/src/components/bolt/icons/twitch.js");
/* harmony import */ var components_bolt_icons_instagram__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/bolt/icons/instagram */ "./static/src/components/bolt/icons/instagram.js");
/* harmony import */ var components_bolt_icons_youtube__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/bolt/icons/youtube */ "./static/src/components/bolt/icons/youtube.js");
/* harmony import */ var components_bolt_icons_snapchat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/bolt/icons/snapchat */ "./static/src/components/bolt/icons/snapchat.js");
/* harmony import */ var components_bolt_icons_tiktok__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/bolt/icons/tiktok */ "./static/src/components/bolt/icons/tiktok.js");
/* harmony import */ var components_bolt_icons_spotify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/bolt/icons/spotify */ "./static/src/components/bolt/icons/spotify.js");
/* harmony import */ var components_bolt_icons_pinterest__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/bolt/icons/pinterest */ "./static/src/components/bolt/icons/pinterest.js");
/* harmony import */ var components_bolt_icons_giphy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/bolt/icons/giphy */ "./static/src/components/bolt/icons/giphy.js");
/* harmony import */ var components_bolt_icons_tumblr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/bolt/icons/tumblr */ "./static/src/components/bolt/icons/tumblr.js");
/* harmony import */ var components_bolt_icons_vimeo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/bolt/icons/vimeo */ "./static/src/components/bolt/icons/vimeo.js");
/* harmony import */ var components_bolt_icons_mail__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/bolt/icons/mail */ "./static/src/components/bolt/icons/mail.js");
/* harmony import */ var components_bolt_icons_threads__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/bolt/icons/threads */ "./static/src/components/bolt/icons/threads.js");
/* harmony import */ var components_bolt_link_link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/bolt/link/link */ "./static/src/components/bolt/link/link.js");
/* harmony import */ var components_bolt_socials_socials_sss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/bolt/socials/socials.sss */ "./static/src/components/bolt/socials/socials.sss");



















class Socials extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  render(props) {
    const {
      socials = {},
      navOpen
    } = props;
    // allow for injecting custom styles
    const iconStyle = props.iconStyle ? props.iconStyle : components_bolt_socials_socials_sss__WEBPACK_IMPORTED_MODULE_18__["default"].icon;

    // TODO: dynamic import
    const icons = {
      facebook: (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_facebook__WEBPACK_IMPORTED_MODULE_3__["default"], {
        class: iconStyle
      }),
      twitter: (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_twitter__WEBPACK_IMPORTED_MODULE_4__["default"], {
        class: iconStyle
      }),
      twitch: (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_twitch__WEBPACK_IMPORTED_MODULE_5__["default"], {
        class: iconStyle
      }),
      instagram: (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_instagram__WEBPACK_IMPORTED_MODULE_6__["default"], {
        class: iconStyle
      }),
      youtube: (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_youtube__WEBPACK_IMPORTED_MODULE_7__["default"], {
        class: iconStyle
      }),
      snapchat: (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_snapchat__WEBPACK_IMPORTED_MODULE_8__["default"], {
        class: iconStyle
      }),
      tiktok: (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_tiktok__WEBPACK_IMPORTED_MODULE_9__["default"], {
        class: iconStyle
      }),
      spotify: (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_spotify__WEBPACK_IMPORTED_MODULE_10__["default"], {
        class: iconStyle
      }),
      pinterest: (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_pinterest__WEBPACK_IMPORTED_MODULE_11__["default"], {
        class: iconStyle
      }),
      giphy: (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_giphy__WEBPACK_IMPORTED_MODULE_12__["default"], {
        class: iconStyle
      }),
      tumblr: (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_tumblr__WEBPACK_IMPORTED_MODULE_13__["default"], {
        class: iconStyle
      }),
      vimeo: (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_vimeo__WEBPACK_IMPORTED_MODULE_14__["default"], {
        class: iconStyle
      }),
      email: (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_mail__WEBPACK_IMPORTED_MODULE_15__["default"], {
        class: iconStyle
      }),
      threads: (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_threads__WEBPACK_IMPORTED_MODULE_16__["default"], {
        class: iconStyle
      })
    };
    const entries = Object.entries(socials);
    const accessibilityCopy = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(store_store__WEBPACK_IMPORTED_MODULE_2__["default"].get(), 'appData.copy.accessibilityCopy', {});
    const isRTL = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(store_store__WEBPACK_IMPORTED_MODULE_2__["default"].get(), 'appData.styling.fontVariables.textDirection') === 'rtl';
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(components_bolt_socials_socials_sss__WEBPACK_IMPORTED_MODULE_18__["default"].socials, props.class, navOpen && components_bolt_socials_socials_sss__WEBPACK_IMPORTED_MODULE_18__["default"].navOpen)
    }, (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.sortObjectByOrder)(socials).slice(0, 5).map(social => {
      const id = entries.find(el => el[1].destination === social.destination)[0];
      let icon = icons[id];
      if (!icon && social.iconURL) {
        const iconSrc = navOpen && social.iconNav ? social.iconNav : social.iconURL;
        icon = (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("img", {
          class: components_bolt_socials_socials_sss__WEBPACK_IMPORTED_MODULE_18__["default"].icon,
          src: iconSrc,
          alt: ""
        });
      }
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_link_link__WEBPACK_IMPORTED_MODULE_17__["default"], {
        class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(!props.iconStyle && components_bolt_socials_socials_sss__WEBPACK_IMPORTED_MODULE_18__["default"].social, components_bolt_socials_socials_sss__WEBPACK_IMPORTED_MODULE_18__["default"][id], isRTL && components_bolt_socials_socials_sss__WEBPACK_IMPORTED_MODULE_18__["default"].rtlSocial),
        href: social.destination,
        target: "_blank",
        rel: "noopener noreferrer",
        key: id,
        onClick: () => {
          store_store__WEBPACK_IMPORTED_MODULE_2__["default"].emit('CLICKED_FOLLOW', id);
        },
        ariaLabel: accessibilityCopy.$SOCIAL_ARIA.replace('<platform>', id)
      }, icon);
    }));
  }
}

/***/ }),

/***/ "./static/src/components/bolt/text/text.js":
/*!*************************************************!*\
  !*** ./static/src/components/bolt/text/text.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.esm.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var utils_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/assets */ "./static/src/utils/assets.js");
/* harmony import */ var utils_bolt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/bolt */ "./static/src/utils/bolt/index.js");
/* harmony import */ var utils_smoothScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/smoothScroll */ "./static/src/utils/smoothScroll.js");
/* harmony import */ var components_bolt_section_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/bolt/section/section */ "./static/src/components/bolt/section/section.js");
/* harmony import */ var components_core_html_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/core/html/html */ "./static/src/components/core/html/html.js");
/* harmony import */ var components_bolt_gallery_gallery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/bolt/gallery/gallery */ "./static/src/components/bolt/gallery/gallery.js");
/* harmony import */ var components_bolt_countdown_countdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/bolt/countdown/countdown */ "./static/src/components/bolt/countdown/countdown.js");
/* harmony import */ var components_bolt_text_text_sss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/bolt/text/text.sss */ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/text/text.sss");












marked__WEBPACK_IMPORTED_MODULE_2__.marked.setOptions({
  breaks: true,
  smartLists: true
});
class Text extends components_bolt_section_section__WEBPACK_IMPORTED_MODULE_7__["default"] {
  constructor(props) {
    super(props);
    this.scrollOnHashChange = this.scrollOnHashChange.bind(this);
    this.updateHash = this.updateHash.bind(this);
    this.scrollToGallery = this.scrollToGallery.bind(this);
    this.updateHashAndScrollToGallery = this.updateHashAndScrollToGallery.bind(this);
    this.getPageWidth = this.getPageWidth.bind(this);
    this.onClick = this.onClick.bind(this);
    this.renderText = this.renderText.bind(this);
    this.renderGallery = this.renderGallery.bind(this);
    this.renderCountdown = this.renderCountdown.bind(this);
    let text = props.appData?.pages?.[props.id]?.data?.text;
    this.text = (0,utils_assets__WEBPACK_IMPORTED_MODULE_4__.useDynamicAssetFolder)(props.appData?.copy?.baseCopy?.[text] || text || '');
  }
  componentDidMount() {
    window.addEventListener('hashchange', this.scrollOnHashChange);
    const elems = document.querySelectorAll('.galleryContentLink');
    if (elems) {
      elems.forEach(item => {
        if (!item.id) return;
        item.addEventListener('click', () => this.updateHashAndScrollToGallery('#' + item.id));
      });
    }
    this.scrollOnHashChange();
  }
  componentWillUnmount() {
    window.removeEventListener('hashchange', this.scrollOnHashChange);
  }
  scrollOnHashChange() {
    const hash = typeof window !== 'undefined' && location.hash.slice(1);
    if (!hash) return;
    this.scrollToGallery();
  }
  updateHash(hash) {
    if (!hash) return;
    window.location.hash = hash;
  }
  scrollToGallery() {
    const offset = this.props.client.headerHeight || 60;
    const mainScroll = document.getElementById('mainScroll');
    const targetElem = document.getElementById(`${this.props.id}GalleryImageWrapper`);
    if (targetElem) {
      (0,utils_smoothScroll__WEBPACK_IMPORTED_MODULE_6__.smoothScrollTo)(mainScroll, targetElem, 500, {
        offset
      });
    }
  }
  updateHashAndScrollToGallery(hash) {
    this.updateHash(hash);
    this.scrollToGallery();
  }
  getPageWidth(currentPage, section) {
    const store = store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get();
    const deviceSize = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(store, 'client.deviceSize', '');
    const size = currentPage?.data?.size;
    if (!section || !size) {
      return;
    }
    let width = size.mobile || '100%';
    if (deviceSize === 'largeDesktop') {
      width = size.largeDesktop || '100%';
    } else if (deviceSize === 'desktop') {
      width = size.desktop || '100%';
    } else if (deviceSize === 'smallDesktop') {
      width = size.smallDesktop || '100%';
    } else if (deviceSize === 'tablet') {
      width = size.tablet || '100%';
    }
    if (width.trim().endsWith('px') || width.trim().endsWith('%')) {
      return width;
    }
    return width.replace(/\D/g, '') + 'px';
  }
  onClick(e) {
    let internalLink = e.target.closest('a[href^="#$"]');
    if (internalLink) {
      e.preventDefault();
      let page = internalLink.getAttribute('href').slice(2).trim();
      let navOptions = {};
      if (page.includes('/?')) {
        let [pageId, qs] = page.split('/?');
        page = pageId;
        navOptions.queryString = '?' + qs;
      }
      (0,utils_bolt__WEBPACK_IMPORTED_MODULE_5__.navigateInternally)(page, navOptions);
    }
  }
  renderText() {
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_8__["default"], {
      class: components_bolt_text_text_sss__WEBPACK_IMPORTED_MODULE_11__["default"].content,
      onClickCapture: this.onClick,
      content: this.text,
      markdown: true
    });
  }
  renderGallery() {
    const appData = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(this.props.store, 'appData', {});
    const client = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(this.props.store, 'client', {});
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_gallery_gallery__WEBPACK_IMPORTED_MODULE_9__["default"], {
      appData: appData,
      client: client,
      id: this.props.id,
      isEmbeded: true
    });
  }
  trackButtonClick(label) {
    store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit('MOVIE_DETAILS_BUTTON_CLICK', 'countdown', label);
  }
  renderCountdown(countdown, position) {
    let {
      hide,
      visible
    } = this.props;
    const {
      targetDateTime,
      annotation,
      heading,
      timeZone = '0',
      ctaButton
    } = countdown;
    const appData = this.props.appData;
    const headerHeight = store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get().client?.headerHeight || 0;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_text_text_sss__WEBPACK_IMPORTED_MODULE_11__["default"].countdownTextWrapper
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_countdown_countdown__WEBPACK_IMPORTED_MODULE_10__["default"], {
      appData: appData,
      heading: heading,
      annotation: annotation,
      datetime: targetDateTime,
      timeOffset: timeZone,
      hidden: hide
      // visible={visible}
      ,
      visible: true,
      position: position,
      headerHeight: headerHeight
    }), ctaButton && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("a", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)(components_bolt_text_text_sss__WEBPACK_IMPORTED_MODULE_11__["default"].button, 'mediumB'),
      href: ctaButton?.link,
      target: "_blank",
      "aria-label": ctaButton?.label,
      onClick: () => this.trackButtonClick(ctaButton.title)
    }, ctaButton?.title));
  }
  render(_ref) {
    let {
      store,
      id
    } = _ref;
    const currentPage = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(store, `appData.pages.${id}`, {});
    const section = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(store, `appData.pages.${id}.section`);
    const headerHeight = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(store, `client.headerHeight`, '');
    const isDesktopWidth = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(store, 'client.isDesktopWidth');
    const hasGallery = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(store, `appData.pages.${id}.data.gallery`, '');
    const needsPushDown = !isDesktopWidth && !section;
    const width = this.getPageWidth(currentPage, section);
    const text = this.renderText();
    const countdownClock = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(store, `appData.pages.${id}.data.countdownClock`, null);
    const countdownPos = countdownClock?.position || 'standard';
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)(components_bolt_text_text_sss__WEBPACK_IMPORTED_MODULE_11__["default"].container, id, !section && components_bolt_text_text_sss__WEBPACK_IMPORTED_MODULE_11__["default"].dedicatedPage, countdownClock && components_bolt_text_text_sss__WEBPACK_IMPORTED_MODULE_11__["default"].hasCountdownClock),
      "data-section": id
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      style: {
        width,
        marginTop: needsPushDown ? `${headerHeight}px` : '0px'
      },
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)(components_bolt_text_text_sss__WEBPACK_IMPORTED_MODULE_11__["default"].wrapper, currentPage.data.bg && components_bolt_text_text_sss__WEBPACK_IMPORTED_MODULE_11__["default"].noBg)
    }, countdownClock && countdownPos === 'top' && this.renderCountdown(countdownClock, countdownPos), this.renderBgContent(), text, this.renderOverlayedContent()), hasGallery && this.renderGallery(), countdownClock && countdownPos === 'standard' && this.renderCountdown(countdownClock, countdownPos));
  }
}

/***/ }),

/***/ "./static/src/components/bolt/toutHorizontal/toutHorizontal.js":
/*!*********************************************************************!*\
  !*** ./static/src/components/bolt/toutHorizontal/toutHorizontal.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToutHorizontal)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var components_bolt_section_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/bolt/section/section */ "./static/src/components/bolt/section/section.js");
/* harmony import */ var utils_bolt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/bolt */ "./static/src/utils/bolt/index.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var utils_smoothScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/smoothScroll */ "./static/src/utils/smoothScroll.js");
/* harmony import */ var components_bolt_toutHorizontal_toutHorizontal_sss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/bolt/toutHorizontal/toutHorizontal.sss */ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/toutHorizontal/toutHorizontal.sss");
/* harmony import */ var components_bolt_icons_arrowDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/bolt/icons/arrowDown */ "./static/src/components/bolt/icons/arrowDown.js");
/* harmony import */ var components_core_html_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/core/html/html */ "./static/src/components/core/html/html.js");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");









const DISPLAYED_TOUTS = 3;
class ToutHorizontal extends components_bolt_section_section__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(props) {
    super(props);
    this.state = {
      usingScrollWheel: true,
      touts: this.getTouts(props)
    };
    this.onToutsContainerScroll = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.debounce)(this.onToutsContainerScroll.bind(this), 20);
    this.move = this.move.bind(this);
    this.snapToClosestTout = this.snapToClosestTout.bind(this);
    this.setUsingScrollWheel = this.setUsingScrollWheel.bind(this);
    this.setNotUsingScrollWheel = this.setNotUsingScrollWheel.bind(this);
  }
  componentDidMount() {
    this.onToutsContainerScroll();
    window.addEventListener('resize', this.onToutsContainerScroll);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.id) {
      this.setState({
        touts: this.getTouts(nextProps)
      });
    }
  }
  componentWillUnmount() {
    window.clearTimeout(this.snapTimeout);
    window.removeEventListener('resize', this.onToutsContainerScroll);
  }
  getTouts() {
    let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
    const pageData = props?.appData?.pages?.[props.id]?.data;
    return (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.sortObjectByOrder)(pageData?.carousel, (tout, key) => ({
      ...tout,
      key
    }));
  }
  onToutsContainerScroll() {
    clearTimeout(this.snapTimeout);
    if (this.scrollingTo) {
      return;
    }
    let el = this.$toutsContainer;
    let maxScroll = el.scrollWidth;
    // Elements are duplicated three times - keep the scroll in the middle third to be able to scroll left and right
    let repeatingSize = maxScroll / 3;
    if (el.scrollLeft < repeatingSize) {
      el.scrollLeft += repeatingSize;
    } else if (el.scrollLeft > maxScroll - repeatingSize) {
      el.scrollLeft -= repeatingSize;
    }
    if (this.state.usingScrollWheel) {
      this.snapTimeout = setTimeout(this.snapToClosestTout, 500);
    }
  }
  getClosestChild(parent, position) {
    let closest;
    let closestDist = Infinity;
    let scroll = parent.scrollLeft;
    [...parent.children].find(el => {
      let elCenter = el.offsetLeft + el.offsetWidth * .5 - scroll;
      let dist = Math.abs(elCenter - position);
      if (dist >= closestDist) {
        return true;
      }
      closest = el;
      closestDist = dist;
    });
    return closest;
  }
  onClick(e) {
    let link = e.target.closest('a');
    if (!link) {
      return;
    }
    let href = link.getAttribute('href');
    if (href.startsWith('#$')) {
      e.preventDefault();
      let page = href.slice(2).trim();
      let navOptions = {};
      if (page.includes('/?')) {
        let [pageId, qs] = page.split('/?');
        page = pageId;
        navOptions.queryString = '?' + qs;
      }
      (0,utils_bolt__WEBPACK_IMPORTED_MODULE_2__.navigateInternally)(page, navOptions);
    }
    let trackAction = link.getAttribute('data-track-action');
    if (trackAction) {
      window.firePowsterCustomEvent?.(trackAction, link.getAttribute('data-track-category') || 'tout', link.getAttribute('data-track-label'));
    }
  }
  scrollTo(destination, checkScrollPositionAfter) {
    if (!destination) {
      return;
    }
    clearTimeout(this.snapTimeout);
    (0,utils_smoothScroll__WEBPACK_IMPORTED_MODULE_4__.smoothScrollTo)(this.$toutsContainer, destination, 200, {
      direction: 'horizontal',
      relativeTo: 'middle',
      callback: () => {
        this.scrollingTo = null;
        if (checkScrollPositionAfter) {
          setTimeout(this.onToutsContainerScroll, 0);
        }
      }
    });
    this.scrollingTo = destination;
  }
  snapToClosestTout() {
    let container = this.$toutsContainer;
    this.scrollTo(this.getClosestChild(container, container.offsetWidth * .5));
  }
  setUsingScrollWheel() {
    this.setState({
      usingScrollWheel: true
    });
  }
  setNotUsingScrollWheel() {
    this.setState({
      usingScrollWheel: false
    });
  }
  move(direction) {
    let el = this.$toutsContainer;
    if (!el) {
      return;
    }
    let currentElement = this.scrollingTo || this.getClosestChild(el, el.offsetWidth * .5);
    if (!currentElement) {
      return;
    }
    this.scrollTo(direction < 0 ? currentElement.previousElementSibling : currentElement.nextElementSibling, true);
  }
  trackToutClick(data) {
    store_store__WEBPACK_IMPORTED_MODULE_8__["default"].emit('TOUT_CLICK', 'horizontal', 'tout', `${data?.title} - ${data?.button}`);
  }
  triggerButtonClick(data) {
    const {
      path
    } = data;
    this.trackToutClick(data);
    (0,utils_bolt__WEBPACK_IMPORTED_MODULE_2__.navigateInternally)(path, {
      animate: true
    });
  }
  renderTout(data, index, keySuffix) {
    const {
      title,
      description,
      src,
      alt,
      button
    } = data;
    const imageOnly = !title && !description && !button;
    let buttonElement;
    if (button) {
      if (/^(https?:)?\/\//.test(data.path) || /^mailto:/.test(data.path)) {
        buttonElement = (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("a", {
          class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)(components_bolt_toutHorizontal_toutHorizontal_sss__WEBPACK_IMPORTED_MODULE_5__["default"].button, 'mediumB'),
          href: data.path,
          target: !data.sameWindow && '_blank',
          onClick: () => this.trackToutClick(data)
        }, button);
      } else {
        buttonElement = (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
          class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)(components_bolt_toutHorizontal_toutHorizontal_sss__WEBPACK_IMPORTED_MODULE_5__["default"].button, 'mediumB'),
          onClick: () => this.triggerButtonClick(data)
        }, button);
      }
    }
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_toutHorizontal_toutHorizontal_sss__WEBPACK_IMPORTED_MODULE_5__["default"].tout,
      key: (data.key || index) + (keySuffix || '')
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_toutHorizontal_toutHorizontal_sss__WEBPACK_IMPORTED_MODULE_5__["default"].toutContent
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_toutHorizontal_toutHorizontal_sss__WEBPACK_IMPORTED_MODULE_5__["default"].toutStuff
    }, src && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("img", {
      crossOrigin: "anonymous",
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)(components_bolt_toutHorizontal_toutHorizontal_sss__WEBPACK_IMPORTED_MODULE_5__["default"].image, imageOnly && components_bolt_toutHorizontal_toutHorizontal_sss__WEBPACK_IMPORTED_MODULE_5__["default"].imageOnly),
      alt: alt,
      src: src
    }), title && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_7__["default"], {
      tag: "h3",
      markdown: true,
      onClickCapture: this.onClick,
      content: title,
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)(components_bolt_toutHorizontal_toutHorizontal_sss__WEBPACK_IMPORTED_MODULE_5__["default"].toutTitle, 'largeB')
    }), description && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_7__["default"], {
      tag: "h4",
      markdown: true,
      content: description,
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)(components_bolt_toutHorizontal_toutHorizontal_sss__WEBPACK_IMPORTED_MODULE_5__["default"].toutDescription, components_bolt_toutHorizontal_toutHorizontal_sss__WEBPACK_IMPORTED_MODULE_5__["default"].showGradient, button && components_bolt_toutHorizontal_toutHorizontal_sss__WEBPACK_IMPORTED_MODULE_5__["default"].flex, 'large')
    }), buttonElement)));
  }
  renderTouts() {
    const {
      touts
    } = this.state;
    const tooManyTouts = touts.length > DISPLAYED_TOUTS;
    let content = touts.map((tout, index) => this.renderTout(tout, index));
    if (tooManyTouts || this.props.client?.deviceWidthSize === 'mobile' && touts.length > 1) {
      // Render duplicate items for infinite scrolling
      content.push(...touts.map((tout, index) => this.renderTout(tout, index, 'duplicate1')), ...touts.map((tout, index) => this.renderTout(tout, index, 'duplicate2')));
    }
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_toutHorizontal_toutHorizontal_sss__WEBPACK_IMPORTED_MODULE_5__["default"].toutsWrapper
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_toutHorizontal_toutHorizontal_sss__WEBPACK_IMPORTED_MODULE_5__["default"].toutsContainer,
      onScroll: this.onToutsContainerScroll,
      onMouseWheel: this.setUsingScrollWheel,
      onTouchStart: this.setNotUsingScrollWheel,
      onKeyDown: this.setNotUsingScrollWheel,
      ref: e => this.$toutsContainer = e
    }, content), tooManyTouts && this.renderArrows());
  }
  renderArrows() {
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_toutHorizontal_toutHorizontal_sss__WEBPACK_IMPORTED_MODULE_5__["default"].arrows
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)(components_bolt_toutHorizontal_toutHorizontal_sss__WEBPACK_IMPORTED_MODULE_5__["default"].arrow, components_bolt_toutHorizontal_toutHorizontal_sss__WEBPACK_IMPORTED_MODULE_5__["default"].left),
      onClick: () => this.move(-1)
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_arrowDown__WEBPACK_IMPORTED_MODULE_6__["default"], null)), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)(components_bolt_toutHorizontal_toutHorizontal_sss__WEBPACK_IMPORTED_MODULE_5__["default"].arrow, components_bolt_toutHorizontal_toutHorizontal_sss__WEBPACK_IMPORTED_MODULE_5__["default"].right),
      onClick: () => this.move(1)
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_arrowDown__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
  }
  render(_ref) {
    let {
      id
    } = _ref;
    const pageData = this.props?.appData?.pages[this.props.id].data || {};
    const {
      title,
      description
    } = pageData;
    const isSection = this.props?.appData?.pages[id].section || false;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)(components_bolt_toutHorizontal_toutHorizontal_sss__WEBPACK_IMPORTED_MODULE_5__["default"].wrapper, isSection && components_bolt_toutHorizontal_toutHorizontal_sss__WEBPACK_IMPORTED_MODULE_5__["default"].section, this.state.usingScrollWheel && components_bolt_toutHorizontal_toutHorizontal_sss__WEBPACK_IMPORTED_MODULE_5__["default"].usingScrollWheel),
      "data-section": id
    }, this.renderBgContent(), title && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_7__["default"], {
      tag: "h1",
      markdown: true,
      onClickCapture: this.onClick,
      content: title,
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)(components_bolt_toutHorizontal_toutHorizontal_sss__WEBPACK_IMPORTED_MODULE_5__["default"].title, 'h3')
    }), description && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_7__["default"], {
      tag: "h2",
      markdown: true,
      content: description,
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)(components_bolt_toutHorizontal_toutHorizontal_sss__WEBPACK_IMPORTED_MODULE_5__["default"].description, 'xlarge')
    }), this.renderTouts(), this.renderOverlayedContent());
  }
}

/***/ }),

/***/ "./static/src/components/bolt/videos/player.js":
/*!*****************************************************!*\
  !*** ./static/src/components/bolt/videos/player.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VideoPlayer)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var shallow_equals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallow-equals */ "./node_modules/shallow-equals/index.js");
/* harmony import */ var shallow_equals__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallow_equals__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_bolt_videos_player_sss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/bolt/videos/player.sss */ "./static/src/components/bolt/videos/player.sss");
/* harmony import */ var components_bolt_youtube_youtube__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/bolt/youtube/youtube */ "./static/src/components/bolt/youtube/youtube.js");
/* harmony import */ var components_bolt_vimeo_vimeo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/bolt/vimeo/vimeo */ "./static/src/components/bolt/vimeo/vimeo.js");
/* harmony import */ var components_bolt_nativeVideo_nativeVideo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/bolt/nativeVideo/nativeVideo */ "./static/src/components/bolt/nativeVideo/nativeVideo.js");
/* harmony import */ var components_bolt_matterhorn_matterhorn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/bolt/matterhorn/matterhorn */ "./static/src/components/bolt/matterhorn/matterhorn.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");









class VideoPlayer extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.hideLoader = this.hideLoader.bind(this);
    this.showLoader = this.showLoader.bind(this);
    this.toggleLoader = this.toggleLoader.bind(this);
    this.onReady = this.onReady.bind(this);
    this.disableYoutubeCookieCheck = store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get().appData?.options?.disableYoutubeCookieCheck;
  }
  shouldComponentUpdate(nextProps) {
    return !shallow_equals__WEBPACK_IMPORTED_MODULE_2___default()(nextProps.activeVideo, this.props.activeVideo) || this.props.hiddenPlaylist !== nextProps.hiddenPlaylist || !shallow_equals__WEBPACK_IMPORTED_MODULE_2___default()(nextProps.ageGateProtected, this.props.ageGateProtected) || nextProps.extraClass !== this.props.extraClass;
  }
  componentDidUpdate(prevProps) {
    if (prevProps.activeVideo !== this.props.activeVideo) {
      this.showLoader();
    }
    if (!this.props.ageGateProtected && prevProps.ageGateProtected && !this.props.noAutoplay) {
      this.play();
    }
  }
  play() {
    this.player?.play();
  }
  get duration() {
    return this.player?.duration || 0;
  }
  toggleLoader(show) {
    if (typeof show !== 'boolean') {
      show = !this.state.showLoader;
    }
    this.setState({
      showLoader: show
    });
  }
  showLoader() {
    this.toggleLoader(true);
  }
  hideLoader() {
    this.toggleLoader(false);
  }
  onReady() {
    this.hideLoader();
    if (this.props.onLoaded) {
      this.props.onLoaded();
    }
  }
  renderVideo() {
    const {
      activeVideo,
      onEnded,
      onStart,
      onPlay,
      onPause,
      overrideStyles,
      noAutoplay,
      muted,
      isShowtimesMessage,
      isTrailerOverlay,
      ageGateProtected
    } = this.props;
    if (!activeVideo) {
      return null;
    }
    const autoplay = !(noAutoplay || activeVideo.noAutoplay || ageGateProtected);
    if (activeVideo.youtubeId) {
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_youtube_youtube__WEBPACK_IMPORTED_MODULE_4__["default"], {
        ref: ref => this.player = ref,
        videoId: activeVideo.youtubeId,
        onEnded: onEnded,
        onStart: onStart,
        onPlay: onPlay,
        onPause: onPause,
        onPlayerReady: this.onReady,
        autoplay: autoplay,
        isShowtimesMessage: isShowtimesMessage,
        noCookies: activeVideo.noCookies && activeVideo.noCookies !== 'Cookie Mode',
        disableCookieCheck: this.disableYoutubeCookieCheck,
        isTrailerOverlay: isTrailerOverlay,
        isTrailer: activeVideo.isTrailer,
        key: `youtube-${activeVideo.youtubeId}`,
        muted: muted
      });
    }
    if (activeVideo.vimeoId) {
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_vimeo_vimeo__WEBPACK_IMPORTED_MODULE_5__["default"], {
        ref: ref => this.player = ref,
        videoId: activeVideo.vimeoId,
        videoHash: activeVideo.vimeoHash,
        autoplay: autoplay,
        onEnded: onEnded,
        onPlayerReady: this.onReady,
        isShowtimesMessage: isShowtimesMessage,
        isTrailerOverlay: isTrailerOverlay,
        isTrailer: activeVideo.isTrailer,
        key: `vimeo-${activeVideo.vimeoId}`,
        muted: muted
      });
    }
    if (activeVideo.videoSrc) {
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_nativeVideo_nativeVideo__WEBPACK_IMPORTED_MODULE_6__["default"], {
        ref: ref => this.player = ref,
        activeVideo: activeVideo,
        autoplay: autoplay,
        onEnded: onEnded,
        canPlayCallback: this.onReady,
        isShowtimesMessage: isShowtimesMessage,
        isTrailerOverlay: isTrailerOverlay,
        isTrailer: activeVideo.isTrailer,
        key: `nativeVideo-${activeVideo.videoSrc}`,
        overrideStyles: overrideStyles,
        muted: muted,
        useTracking: true
      });
    } else if (activeVideo.disneySrc) {
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_matterhorn_matterhorn__WEBPACK_IMPORTED_MODULE_7__["default"], {
        ref: ref => this.player = ref,
        activeVideo: activeVideo,
        autoplay: autoplay,
        isShowtimesMessage: isShowtimesMessage,
        isTrailerOverlay: isTrailerOverlay,
        isTrailer: activeVideo.isTrailer,
        onPlayerReady: this.onReady,
        key: `matterhorn-${activeVideo.disneySrc}`,
        muted: muted
      });
    }
  }
  render(props) {
    let {
      overrideStyles,
      hiddenPlaylist,
      extraClass
    } = props;
    let {
      showLoader
    } = this.state;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_8__.joinClasses)(!overrideStyles && components_bolt_videos_player_sss__WEBPACK_IMPORTED_MODULE_3__["default"].container, hiddenPlaylist && components_bolt_videos_player_sss__WEBPACK_IMPORTED_MODULE_3__["default"].hiddenPlaylist, extraClass)
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_videos_player_sss__WEBPACK_IMPORTED_MODULE_3__["default"].keepAspectRatio
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_8__.joinClasses)(components_bolt_videos_player_sss__WEBPACK_IMPORTED_MODULE_3__["default"].loader, showLoader && components_bolt_videos_player_sss__WEBPACK_IMPORTED_MODULE_3__["default"].visible),
      ref: ref => this.loader = ref
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_videos_player_sss__WEBPACK_IMPORTED_MODULE_3__["default"].spinner
    })), this.renderVideo()));
  }
}

/***/ }),

/***/ "./static/src/components/bolt/vimeo/vimeo.js":
/*!***************************************************!*\
  !*** ./static/src/components/bolt/vimeo/vimeo.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Vimeo)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var components_bolt_vimeo_vimeo_sss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/bolt/vimeo/vimeo.sss */ "./static/src/components/bolt/vimeo/vimeo.sss");




class Vimeo extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.onLoad = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.once)(this.onLoad.bind(this));
    this.onEnded = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.once)(this.onEnded.bind(this));
    this.onProgress = this.onProgress.bind(this);
    this.progressTracking = {};
  }
  componentDidMount() {
    const {
      videoId
    } = this.props;
    this.initVimeo(videoId);
  }
  componentWillUnmount() {
    if (!this.player) {
      return;
    }
    this.player.off('loaded');
    this.player.off('timeupdate');
    this.player.off('ended');
    this.player.destroy();
  }
  initVimeo(videoId) {
    if (typeof window === 'undefined') {
      return;
    }
    if (window.Vimeo && window.Vimeo.Player) {
      return this.loadPlayer(videoId);
    }
    if (!window.VimeoLoader) {
      window.VimeoLoader = new Promise((resolve, reject) => {
        const tag = document.createElement('script');
        tag.src = 'https://player.vimeo.com/api/player.js';
        document.body.appendChild(tag);
        tag.onload = resolve;
        tag.onerror = reject;
      });
    }
    return window.VimeoLoader.then(() => {
      this.loadPlayer(videoId);
    });
  }
  loadPlayer(videoId) {
    const vimeoIframe = document.getElementById(videoId);
    if (!vimeoIframe) return;
    this.player = new window.Vimeo.Player(vimeoIframe);
    this.player.on('loaded', this.onLoad);
    this.player.on('ended', this.onEnded);
    this.player.on('timeupdate', this.onProgress);
  }
  onLoad() {
    const {
      autoplay,
      onPlayerReady
    } = this.props;
    if (typeof onPlayerReady === 'function') {
      onPlayerReady();
    }
    if (autoplay) {
      this.player.play();
    }
  }
  onEnded() {
    const {
      onEnded
    } = this.props;
    if (onEnded) {
      onEnded();
    }
  }
  onProgress(_ref) {
    let {
      percent
    } = _ref;
    let step = [0, 25, 50, 75, 95].find(step => percent > step / 100 && !this.progressTracking[step]);
    if (step || step === 0) {
      this.progressTracking[step] = true;
      store_store__WEBPACK_IMPORTED_MODULE_2__["default"].emit('VIDEO_PLAYER_PROGRESS', {
        step,
        video: this.props.videoId,
        platform: 'vimeo',
        isShowtimesMessage: this.props.isShowtimesMessage,
        isTrailerOverlay: this.props.isTrailerOverlay,
        isTrailer: this.props.isTrailer
      });
    }
  }
  render(props) {
    const {
      videoId,
      videoHash
    } = props;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("iframe", {
      id: videoId,
      hash: videoHash,
      src: `https://player.vimeo.com/video/${videoId}?h=${videoHash}`,
      frameborder: "0",
      allow: "autoplay",
      fullscreen: true,
      allowfullscreen: true
    });
  }
}

/***/ }),

/***/ "./static/src/components/bolt/youtube/youtube.js":
/*!*******************************************************!*\
  !*** ./static/src/components/bolt/youtube/youtube.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var utils_gdpr_oneTrust__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/gdpr/oneTrust */ "./static/src/utils/gdpr/oneTrust/index.js");
/* harmony import */ var components_bolt_youtube_youtube_sss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/bolt/youtube/youtube.sss */ "./static/src/components/bolt/youtube/youtube.sss");





class Youtube extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.progressTracking = {};
    this.updateInstanceCounter = 0;
    this.started = false;
    this.getProgress = this.getProgress.bind(this);
    this.onPlayerReady = this.onPlayerReady.bind(this);
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    let appData = store_store__WEBPACK_IMPORTED_MODULE_2__["default"].get().appData;
    this.usesEvidon = appData?.options?.requireUserConsent?.companyId;
    this.usesOneTrust = appData?.options?.oneTrustCookieConsent?.scripts || appData?.options?.oneTrustCookieConsent?.configuredFromExternalScript;
    this.usesPowCookieBanner = appData?.options?.cookiesModal?.enableModal;
    this.needsCookieCheck = this.usesEvidon || this.usesOneTrust || this.usesPowCookieBanner;
    // if (this.props.noCookies) {
    // 	this.usesOneTrust = false;
    // 	this.usesPowCookieBanner = false;
    // 	this.needsCookieCheck = false;
    // }
  }
  componentDidMount() {
    this.blocked = this.shouldBlockRender();
    if (!this.blocked) {
      this.initYoutube();
    } else {
      this.props.onPlayerReady();
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const wasBlockedBefore = this.blocked;
    this.blocked = this.shouldBlockRender();

    // blocked -> unblocked (or video change while unblocked)
    const videoIdChanged = prevProps.videoId !== this.props.videoId;
    if (!this.blocked && (wasBlockedBefore || videoIdChanged)) {
      this.initYoutube();
    }

    // unblocked -> blocked
    if (this.blocked && !wasBlockedBefore && this.player) {
      this.player.destroy();
    }
  }
  componentWillUnmount() {
    clearInterval(this.progressUpdate);
    clearInterval(this.readyTimeout);
    this.unmounted = true;
    if (this.player) {
      this.player.destroy();
    }
  }
  shouldBlockRender() {
    return this.needsCookieCheck && !this.state.oneTrustAllowed;
  }
  play() {
    if (this.player && this.player.playVideo) {
      this.player.playVideo();
    }
  }
  pause() {
    if (this.player && this.player.pauseVideo) {
      this.player.pauseVideo();
    }
  }
  get duration() {
    if (this.player && this.player.getDuration) {
      return this.player.getDuration();
    }
    return 0;
  }
  initYoutube() {
    const {
      videoId
    } = this.props;
    if (typeof window === 'undefined') {
      return;
    }
    if (window.YT && (window.YT.Player || window.YT.loaded === 0)) {
      return window.YT.ready(() => this.loadPlayer(videoId));
    }
    if (!window.YTLoader) {
      window.YTLoader = new Promise(resolve => {
        // window.onYouTubeIframeAPIReady = () => setTimeout(resolve, 0);
        window.onYouTubeIframeAPIReady = () => window.YT.ready(resolve);
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
      });
    }
    let instanceCounter = ++this.updateInstanceCounter;
    return window.YTLoader.then(() => {
      if (this.unmounted || instanceCounter !== this.updateInstanceCounter) {
        return;
      }
      this.loadPlayer(videoId);
    });
  }
  loadPlayer(videoId) {
    if (!videoId || !this.$ytPlayer) {
      return;
    }
    let existingTarget = document.querySelector('.elementForYTiframe');
    if (existingTarget) {
      existingTarget.parentNode.removeChild(existingTarget);
    }
    let target = document.createElement('div');
    target.setAttribute('key', videoId);
    target.setAttribute('class', 'elementForYTiframe');
    this.$ytPlayer.appendChild(target);
    let ready = false;
    const onReady = () => {
      if (ready) return;
      ready = true;
      this.onPlayerReady();
    };
    // We sometimes don't get the ready event for some reason - add a timeout
    clearTimeout(this.readyTimeout);
    this.readyTimeout = setTimeout(onReady, 5000);
    this.player = new window.YT.Player(target, {
      height: '100%',
      width: '100%',
      videoId: videoId,
      host: this.props.noCookies && 'https://www.youtube-nocookie.com',
      events: {
        onReady: onReady,
        onStateChange: this.onPlayerStateChange
      },
      playerVars: {
        rel: 0,
        enablejsapi: 1
      }
    });
  }
  onPlayerReady() {
    const {
      autoplay,
      muted
    } = this.props;
    this.progressUpdate = setInterval(this.getProgress, 50);
    if (autoplay) {
      this.player?.playVideo?.();
    }
    if (typeof this.props.onPlayerReady === 'function') {
      this.props.onPlayerReady();
    }
    if (muted) {
      this.player?.mute();
    } else {
      this.player?.unMute?.();
    }
  }
  getProgress() {
    if (!this.player?.getCurrentTime) {
      return;
    }
    const currentTime = this.player.getCurrentTime();
    const videoLength = this.player.getDuration();
    const progress = currentTime / videoLength;
    let step = [0, 25, 50, 75, 95, 100].find(step => progress >= step / 100 && !this.progressTracking[step]);
    if (step || step === 0) {
      this.progressTracking[step] = true;
      const videoData = this.player.getVideoData();
      store_store__WEBPACK_IMPORTED_MODULE_2__["default"].emit('VIDEO_PLAYER_PROGRESS', {
        platform: 'youtube',
        video: this.props.videoId,
        step,
        time: currentTime,
        videoLength,
        isShowtimesMessage: this.props.isShowtimesMessage,
        isTrailerOverlay: this.props.isTrailerOverlay,
        isTrailer: this.props.isTrailer,
        videoTitle: videoData?.title
      });
    }
    if (typeof this.props.onProgress === 'function') {
      this.props.onProgress(progress, currentTime, videoLength);
    }
  }
  onPlayerStateChange(e) {
    const {
      onEnded,
      onStart,
      onPause,
      onPlay,
      onStateChange
    } = this.props;
    if (typeof onStateChange === 'function') {
      onStateChange(e);
    }
    if (e.data === 0 && typeof onEnded === 'function') {
      onEnded();
    }
    if (e.data === 1) {
      if (!this.started && typeof onStart === 'function') {
        onStart();
      }
      if (typeof onPlay === 'function') {
        onPlay();
      }
      this.started = true;
    }
    if (e.data === 2) {
      if (typeof onPause === 'function') {
        onPause();
      }
    }
  }
  getShowCookieSettingsFunction() {
    if (this.usesEvidon) return () => window.evidon.notice.showPreferencesDialog();
    if (this.usesOneTrust) return () => store_store__WEBPACK_IMPORTED_MODULE_2__["default"].emit('ONETRUST_SHOW');
    if (this.usesPowCookieBanner) return () => store_store__WEBPACK_IMPORTED_MODULE_2__["default"].emit('COOKIE_PREFERENCES_OPEN');
  }
  renderBlocked() {
    const copy = store_store__WEBPACK_IMPORTED_MODULE_2__["default"].get().appData?.copy?.baseCopy;
    let prompt = this.props.noCookies && copy.$VIDEOS_COOKIES_FUNCTIONAL || copy.$VIDEOS_COOKIES;
    let showCookieSettings = this.getShowCookieSettingsFunction();
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(components_bolt_youtube_youtube_sss__WEBPACK_IMPORTED_MODULE_4__["default"].wrapper, this.props.responsiveResize && components_bolt_youtube_youtube_sss__WEBPACK_IMPORTED_MODULE_4__["default"].responsiveResize),
      key: "blocked-wrapper"
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_youtube_youtube_sss__WEBPACK_IMPORTED_MODULE_4__["default"].prompt
    }, prompt), showCookieSettings && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
      id: "youtubeCookieSettings",
      class: components_bolt_youtube_youtube_sss__WEBPACK_IMPORTED_MODULE_4__["default"].cta,
      onClick: showCookieSettings
    }, copy.$VIDEOS_COOKIES_SETTINGS));
  }
  renderPlayer() {
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      className: this.props.responsiveResize && components_bolt_youtube_youtube_sss__WEBPACK_IMPORTED_MODULE_4__["default"].responsiveResize,
      ref: $ref => this.$ytPlayer = $ref,
      key: "player"
    });
  }
  render() {
    return this.shouldBlockRender() ? this.renderBlocked() : this.renderPlayer();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (utils_gdpr_oneTrust__WEBPACK_IMPORTED_MODULE_3__.connectToOneTrust(props => props.disableCookieCheck || (props.noCookies ? utils_gdpr_oneTrust__WEBPACK_IMPORTED_MODULE_3__.FUNCTIONAL : utils_gdpr_oneTrust__WEBPACK_IMPORTED_MODULE_3__.TARGETING), Youtube));

/***/ }),

/***/ "./static/src/components/core/html/html.js":
/*!*************************************************!*\
  !*** ./static/src/components/core/html/html.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HTML)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toArray */ "./node_modules/@babel/runtime/helpers/esm/toArray.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var utils_pure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/pure */ "./static/src/utils/pure.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.esm.js");


function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }
function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return (0,_babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_1__["default"])(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }
function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }
function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }
function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }
function _hasDecorators(element) { return element.decorators && element.decorators.length; }
function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }
function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



const getNewTabRenderer = (() => {
  let newTabRenderer;
  return () => {
    if (newTabRenderer) {
      return newTabRenderer;
    }
    newTabRenderer = new marked__WEBPACK_IMPORTED_MODULE_4__.marked.Renderer();
    let defaultLinkRenderer = newTabRenderer.link;
    newTabRenderer.link = (href, title, text) => {
      let html = defaultLinkRenderer.call(newTabRenderer, href, title, text);
      if (html) {
        html = html.replace(/^<a /, '<a target="_blank" ');
      }
      return html;
    };
    return newTabRenderer;
  };
})();
let HTML = _decorate([utils_pure__WEBPACK_IMPORTED_MODULE_3__["default"]], function (_initialize, _Component) {
  class HTML extends _Component {
    constructor() {
      super(...arguments);
      _initialize(this);
    }
  }
  return {
    F: HTML,
    d: [{
      kind: "method",
      key: "render",
      value: function render(props) {
        let {
          tag: HTMLTag = 'div',
          content,
          markdown,
          markdownOptions,
          children,
          // removeComments,
          forceNewTabLinks,
          ...extraProps
        } = props;
        content = (content || children[0] || '') + '';
        // if (removeComments) {
        // 	// This regex will look for any single comments starting with '//'
        // 	// and replace all characters up to the end of that line with an empty string.
        // 	// It will also search for multiline comments (wrapped with /* */) and remove them as well
        // 	// Bit risky in case we want to actually use /* or // in a copy. No way to escape it
        // 	content = content.replace(/(\/\*([\s\S]*?)\*\/)|(^\/\/(.*)$)/gm, '');
        // }

        if (markdown) {
          let options = {
            ...markdownOptions
          };
          if (forceNewTabLinks) {
            options.renderer = getNewTabRenderer();
          }
          content = (0,marked__WEBPACK_IMPORTED_MODULE_4__.marked)(content, options);
        }
        return (0,preact__WEBPACK_IMPORTED_MODULE_2__.h)(HTMLTag, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, extraProps, {
          dangerouslySetInnerHTML: {
            __html: content
          }
        }));
      }
    }]
  };
}, preact__WEBPACK_IMPORTED_MODULE_2__.Component);


/***/ }),

/***/ "./static/src/components/core/transition/transition.js":
/*!*************************************************************!*\
  !*** ./static/src/components/core/transition/transition.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Transition)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _transitionStates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transitionStates */ "./static/src/components/core/transition/transitionStates.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var utils_pendingPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/pendingPromise */ "./static/src/utils/pendingPromise.js");
/* harmony import */ var components_core_transition_transition_sss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/core/transition/transition.sss */ "./static/src/components/core/transition/transition.sss");



// import isShallowEqual from 'shallow-equals';



const isServer = typeof window === 'undefined';

/**
* Transition between children changing
* All the children involved should have an id or key set as a property!
* @prop {string} class - The class on the transitionWrapper
* @prop {Number} duration[!] - The duration for the whole transitionWrapper
* @prop {string} enteringClass - Extra class added when child is entering
* @prop {string} leavingClass - Extra class added when child is leaving
* @prop {string} visibleClass - Extra class added when child is visible
* @prop {string} emptyClass - Extra class added once child has left
*/
class Transition extends preact__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getStyles", () => {
      return {
        'transition-duration': this.props.duration / 2 + 'ms',
        'animation-duration': this.props.duration / 2 + 'ms'
      };
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "setTimer", (f, d) => {
      this.endTimer();
      this.timerFunc = f;
      this.timer = setTimeout(() => {
        f();
        this.timer = null;
        if (this.afterTimer) {
          this.afterTimer();
          this.afterTimer = null;
        }
      }, d);
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "endTimer", preventExecution => {
      if (!this.timer) return;
      clearTimeout(this.timer);

      // Call the function early
      if (!preventExecution) {
        this.timerFunc();
      }
      this.timer = null;
      if (this.afterTimer) {
        this.afterTimer();
        this.afterTimer = null;
      }
    });
    let childGenerator = this.getChildGenerator(props);
    // let children = childGenerator();

    let initialState = {
      firstChild: childGenerator,
      firstChildState: _transitionStates__WEBPACK_IMPORTED_MODULE_2__.STATE_CHILD_ENTERING,
      secondChild: null,
      secondChildState: _transitionStates__WEBPACK_IMPORTED_MODULE_2__.STATE_CHILD_EMPTY,
      upcomingChild: childGenerator
    };
    let disableInit = this.props.noInitialTransition;
    if (disableInit) {
      initialState.firstChildState = _transitionStates__WEBPACK_IMPORTED_MODULE_2__.STATE_CHILD_VISIBLE;
    }
    this.state = initialState;
    if (!disableInit) {
      this.setTimer(() => {
        this.setState({
          firstChildState: this.getNextStep('firstChild', this.state.firstChildState)
        });
      }, props.duration / 2);
    }
  }
  componentWillReceiveProps(_ref) {
    let {
      waitBeforeNext,
      ...props
    } = _ref;
    let childGenerator = this.getChildGenerator(props);
    let child = childGenerator();
    const newChildId = this.getId(child);
    const oldChildId = this.getId(this.state.upcomingChild());
    if (newChildId !== oldChildId) {
      this.setState({
        upcomingChild: childGenerator
      });
      let firstVisible = this.state.firstChildState === _transitionStates__WEBPACK_IMPORTED_MODULE_2__.STATE_CHILD_VISIBLE;
      let secondVisible = this.state.secondChildState === _transitionStates__WEBPACK_IMPORTED_MODULE_2__.STATE_CHILD_VISIBLE;
      if (!waitBeforeNext || firstVisible || secondVisible) {
        this.goToNextPage();
      } else {
        this.afterTimer = this.goToNextPage;
      }
    } else {
      // Update the current child so it gets it new props
      if (this.state.firstChild && this.getId(this.state.firstChild()) === newChildId) {
        this.setState({
          firstChild: childGenerator
        });
      }
      if (this.state.secondChild && this.getId(this.state.secondChild()) === newChildId) {
        this.setState({
          secondChild: childGenerator
        });
      }
    }
  }
  componentDidUpdate() {
    this.renderDone?.resolve();
    this.renderDone = null;
  }
  getChildGenerator(props) {
    return typeof props.renderChildren === 'function' ? props.renderChildren : () => props.children[0];
  }
  getId(vNode) {
    return vNode?.attributes?.id || vNode?.attributes?.key;
  }
  async goToNextPage() {
    this.endTimer();
    const {
      firstChild,
      secondChild,
      upcomingChild,
      firstChildState,
      secondChildState
    } = this.state;

    // Ugly quickfix to prevent same -> same transition
    const firstChildVisible = firstChildState === _transitionStates__WEBPACK_IMPORTED_MODULE_2__.STATE_CHILD_VISIBLE;
    const secondChildVisible = secondChildState === _transitionStates__WEBPACK_IMPORTED_MODULE_2__.STATE_CHILD_VISIBLE;
    if (firstChildVisible && this.getId(upcomingChild()) === this.getId(firstChild()) || secondChildVisible && this.getId(upcomingChild()) === this.getId(secondChild())) {
      return;
    }
    this.setState({
      firstChildState: this.getNextStep('firstChild', firstChildState),
      secondChildState: this.getNextStep('secondChild', secondChildState)
    });
    let next = () => {
      this.setState({
        firstChildState: this.getNextStep('firstChild', this.state.firstChildState),
        secondChildState: this.getNextStep('secondChild', this.state.secondChildState)
      });
    };
    this.renderDone?.resolve();
    this.renderDone = (0,utils_pendingPromise__WEBPACK_IMPORTED_MODULE_4__["default"])();
    await this.renderDone;
    this.setTimer(next, this.props.duration / 2);
  }
  getNextStep(childType, currentState) {
    let newState = {};
    switch (currentState) {
      case _transitionStates__WEBPACK_IMPORTED_MODULE_2__.STATE_CHILD_ENTERING:
        return _transitionStates__WEBPACK_IMPORTED_MODULE_2__.STATE_CHILD_VISIBLE;
      case _transitionStates__WEBPACK_IMPORTED_MODULE_2__.STATE_CHILD_VISIBLE:
        return _transitionStates__WEBPACK_IMPORTED_MODULE_2__.STATE_CHILD_LEAVING;
      case _transitionStates__WEBPACK_IMPORTED_MODULE_2__.STATE_CHILD_LEAVING:
        newState[childType] = null;
        this.setState(newState);
        return _transitionStates__WEBPACK_IMPORTED_MODULE_2__.STATE_CHILD_EMPTY;
      case _transitionStates__WEBPACK_IMPORTED_MODULE_2__.STATE_CHILD_EMPTY:
        newState[childType] = this.state.upcomingChild;
        this.setState(newState);
        return _transitionStates__WEBPACK_IMPORTED_MODULE_2__.STATE_CHILD_ENTERING;
    }
  }
  getActiveClass(currentState) {
    let {
      enteringClass,
      visibleClass,
      leavingClass,
      emptyClass
    } = this.props;
    let entering = currentState === _transitionStates__WEBPACK_IMPORTED_MODULE_2__.STATE_CHILD_ENTERING;
    let visible = currentState === _transitionStates__WEBPACK_IMPORTED_MODULE_2__.STATE_CHILD_VISIBLE;
    let leaving = currentState === _transitionStates__WEBPACK_IMPORTED_MODULE_2__.STATE_CHILD_LEAVING;
    let empty = currentState === _transitionStates__WEBPACK_IMPORTED_MODULE_2__.STATE_CHILD_EMPTY;
    return (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)(this.props.baseClass, entering && enteringClass, visible && visibleClass, leaving && leavingClass, empty && emptyClass, {
      s: components_core_transition_transition_sss__WEBPACK_IMPORTED_MODULE_5__["default"],
      entering,
      visible,
      leaving,
      empty
    });
  }
  render(_ref2, _ref3) {
    let {
      duration,
      ...props
    } = _ref2;
    let {
      firstChild,
      firstChildState,
      secondChild,
      secondChildState
    } = _ref3;
    // let child = this.getChildGenerator(props)();
    let firstChildNode;
    let secondChildNode;
    let styles = this.getStyles();
    firstChild = firstChild && firstChild();
    // Set the current state
    if (firstChild?.attributes && typeof firstChild?.nodeName !== 'string') {
      firstChild.attributes.transitionState = isServer ? _transitionStates__WEBPACK_IMPORTED_MODULE_2__.STATE_CHILD_VISIBLE : firstChildState;
    }
    secondChild = secondChild && secondChild();
    if (secondChild?.attributes && typeof secondChild?.nodeName !== 'string') {
      secondChild.attributes.transitionState = secondChildState;
    }
    let firstChildClass = this.getActiveClass(isServer ? _transitionStates__WEBPACK_IMPORTED_MODULE_2__.STATE_CHILD_VISIBLE : firstChildState);
    firstChildNode = (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: firstChildClass,
      style: styles
    }, firstChild);
    let secondChildClass = this.getActiveClass(secondChildState);
    secondChildNode = (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: secondChildClass,
      style: styles
    }, secondChild);
    return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: props.class,
      id: props.id
    }, firstChildNode, secondChildNode);
  }
}

/***/ }),

/***/ "./static/src/components/core/transition/transitionStates.js":
/*!*******************************************************************!*\
  !*** ./static/src/components/core/transition/transitionStates.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STATE_CHILD_EMPTY: () => (/* binding */ STATE_CHILD_EMPTY),
/* harmony export */   STATE_CHILD_ENTERING: () => (/* binding */ STATE_CHILD_ENTERING),
/* harmony export */   STATE_CHILD_LEAVING: () => (/* binding */ STATE_CHILD_LEAVING),
/* harmony export */   STATE_CHILD_VISIBLE: () => (/* binding */ STATE_CHILD_VISIBLE)
/* harmony export */ });
const STATE_CHILD_ENTERING = 'STATE_CHILD_ENTERING';
const STATE_CHILD_VISIBLE = 'STATE_CHILD_VISIBLE';
const STATE_CHILD_LEAVING = 'STATE_CHILD_LEAVING';
const STATE_CHILD_EMPTY = 'STATE_CHILD_EMPTY';

/***/ }),

/***/ "./static/src/components/shared/dynamicPageLoader/dynamicPageLoader.js":
/*!*****************************************************************************!*\
  !*** ./static/src/components/shared/dynamicPageLoader/dynamicPageLoader.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DynamicPageLoader),
/* harmony export */   pageTypesCache: () => (/* binding */ pageTypesCache)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var components_shared_dynamicPageLoader_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/shared/dynamicPageLoader/loader */ "./static/src/components/shared/dynamicPageLoader/loader.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var components_shared_dynamicPageLoader_dynamicPageLoader_sss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/shared/dynamicPageLoader/dynamicPageLoader.sss */ "./static/src/components/shared/dynamicPageLoader/dynamicPageLoader.sss");





const pageTypesCache = {};
class DynamicPageLoader extends preact__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.activeRequest = 0;
    this.componentKey = 1;
    this.state.components = [];
    this.usePage(props.page, props.data, props.props);
  }
  componentWillReceiveProps(nextProps) {
    if (!this.pagesEqual(nextProps.page, this.props.page)) {
      this.usePage(nextProps.page, nextProps.data, nextProps.props);
    } else {
      this.updateCurrentPageProps(nextProps.props);
    }
  }
  componentWillUnmount() {
    this.unmounted = true;
  }
  pagesEqual(page1, page2) {
    if (page1 === page2) {
      return true;
    }
    if (!page1 || !page2) {
      return false;
    }
    if (page1.id !== page2.id) {
      return false;
    }
    if (page1.page && page2.page && page1.page === page2.page) {
      return true;
    }
    return false;
  }
  updateActiveComponent(component, data, props) {
    let key = this.componentKey++;
    let components = this.state.components;
    this.state.components.forEach(el => {
      if (el.removeTimer) {
        return;
      }
      let removed = false;
      const remove = () => {
        if (this.unmounted || removed) {
          return;
        }
        removed = true;
        this.setState({
          components: this.state.components.filter(e => e !== el)
        });
      };
      el.rendered?.transitionOut?.(remove);
      // How should removeDelay be specified ?
      const desiredDelay = el.rendered?.removeDelay;
      let delay = Number.isFinite(desiredDelay) ? desiredDelay : 500;
      el.removeTimer = setTimeout(remove, delay);
    });
    components = components.concat({
      component,
      key,
      data,
      props
    });
    this.setState({
      components,
      activeKey: key
    });
  }
  updateCurrentPageProps(props) {
    this.activeProps = props;
    if (!this.state.components.length) {
      return;
    }
    let currentComponent = this.state.components[this.state.components.length - 1];
    currentComponent.props = props;
  }
  async usePage(page, data, props) {
    if (!page || !page.getter) {
      return;
    }
    if (typeof page.getter !== 'function') {
      const component = page.getter?.default || page.getter;
      return this.updateActiveComponent(component, data, props);
    }
    if (pageTypesCache[page.id]) {
      return this.updateActiveComponent(pageTypesCache[page.id], data, props);
    }
    let activeRequest = ++this.activeRequest;
    this.activeProps = props;
    this.updateActiveComponent(page.loader || components_shared_dynamicPageLoader_loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      loader: true
    });
    const raw = await page.getter();
    const component = raw?.default || raw;
    try {
      this.props.onLoad?.();
    } catch (e) {
      console.error(e);
    }
    pageTypesCache[page.id] = component;
    if (this.activeRequest !== activeRequest) {
      return;
    }
    this.updateActiveComponent(component, data, this.activeProps);
  }
  render(props, state) {
    return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)(components_shared_dynamicPageLoader_dynamicPageLoader_sss__WEBPACK_IMPORTED_MODULE_4__["default"].container, props.containerClass)
    }, state.components.map(el => {
      const Page = el.component;
      const active = state.activeKey === el.key;
      return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.joinClasses)({
          s: components_shared_dynamicPageLoader_dynamicPageLoader_sss__WEBPACK_IMPORTED_MODULE_4__["default"],
          component: true,
          active,
          loader: el.data?.loader
        }, props.class),
        key: el.key
      }, (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(Page, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        page: el.data,
        ref: e => el.rendered = e
      }, el.props)));
    }));
  }
}

/***/ }),

/***/ "./static/src/components/shared/dynamicPageLoader/loader.js":
/*!******************************************************************!*\
  !*** ./static/src/components/shared/dynamicPageLoader/loader.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var components_shared_dynamicPageLoader_loader_sss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/shared/dynamicPageLoader/loader.sss */ "./static/src/components/shared/dynamicPageLoader/loader.sss");


class Loader extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_shared_dynamicPageLoader_loader_sss__WEBPACK_IMPORTED_MODULE_1__["default"].loader
    }, "Loading...");
  }
}

/***/ }),

/***/ "./static/src/services/boltYoutube.js":
/*!********************************************!*\
  !*** ./static/src/services/boltYoutube.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPlaylistData: () => (/* binding */ getPlaylistData)
/* harmony export */ });
/* harmony import */ var _utils_handleApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/handleApi */ "./static/src/utils/handleApi.js");

const isServer = typeof window === 'undefined';
const serviceYoutubeEndpoint = 'https://youtube.s-prod.pow.io';
const getPlaylistData = async playlistId => {
  if (isServer) {
    throw new Error('Trying to call service-youtube server-side');
  }
  if (!playlistId) {
    throw new Error('No playlist id given');
  }
  return fetch(`${serviceYoutubeEndpoint}/getPlaylistData?playlistId=${playlistId}`).then(_utils_handleApi__WEBPACK_IMPORTED_MODULE_0__.handleApiResponse);
};

/***/ }),

/***/ "./static/src/store/actions.js":
/*!*************************************!*\
  !*** ./static/src/store/actions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADD_THEATERS: () => (/* binding */ ADD_THEATERS),
/* harmony export */   AFTER_THEATERS_UPDATE: () => (/* binding */ AFTER_THEATERS_UPDATE),
/* harmony export */   API_ERROR: () => (/* binding */ API_ERROR),
/* harmony export */   APPLY_FILTERS: () => (/* binding */ APPLY_FILTERS),
/* harmony export */   APP_LIST_SCROLLED: () => (/* binding */ APP_LIST_SCROLLED),
/* harmony export */   AUTH_CLEAR: () => (/* binding */ AUTH_CLEAR),
/* harmony export */   AUTH_RESPONSE: () => (/* binding */ AUTH_RESPONSE),
/* harmony export */   BEFORE_LOAD: () => (/* binding */ BEFORE_LOAD),
/* harmony export */   CALENDAR_CLICKED: () => (/* binding */ CALENDAR_CLICKED),
/* harmony export */   CHECK_FILTERS: () => (/* binding */ CHECK_FILTERS),
/* harmony export */   CLEAR_TICKETING_MESSAGE: () => (/* binding */ CLEAR_TICKETING_MESSAGE),
/* harmony export */   CLICKED_FOLLOW: () => (/* binding */ CLICKED_FOLLOW),
/* harmony export */   CLICKED_SHARE: () => (/* binding */ CLICKED_SHARE),
/* harmony export */   CLOSABLE_TRAILER_CLOSED: () => (/* binding */ CLOSABLE_TRAILER_CLOSED),
/* harmony export */   CLOSABLE_TRAILER_OPEN: () => (/* binding */ CLOSABLE_TRAILER_OPEN),
/* harmony export */   CLOSE_APP: () => (/* binding */ CLOSE_APP),
/* harmony export */   CLOSE_PAYMENT: () => (/* binding */ CLOSE_PAYMENT),
/* harmony export */   CLOSE_TICKETING: () => (/* binding */ CLOSE_TICKETING),
/* harmony export */   CREATE_OR_UPDATE_ORDER: () => (/* binding */ CREATE_OR_UPDATE_ORDER),
/* harmony export */   DISABLE_PIXELS: () => (/* binding */ DISABLE_PIXELS),
/* harmony export */   DISABLE_STORAGE: () => (/* binding */ DISABLE_STORAGE),
/* harmony export */   DOWNLOAD_WORKBOOK: () => (/* binding */ DOWNLOAD_WORKBOOK),
/* harmony export */   DO_LOCATION_SEARCH: () => (/* binding */ DO_LOCATION_SEARCH),
/* harmony export */   ENABLE_PIXELS: () => (/* binding */ ENABLE_PIXELS),
/* harmony export */   ENABLE_STORAGE: () => (/* binding */ ENABLE_STORAGE),
/* harmony export */   EVENT_DATA_LIST_SCROLLED: () => (/* binding */ EVENT_DATA_LIST_SCROLLED),
/* harmony export */   EXTERNAL_LINK_CLICKED: () => (/* binding */ EXTERNAL_LINK_CLICKED),
/* harmony export */   EXTRA_THEATERS: () => (/* binding */ EXTRA_THEATERS),
/* harmony export */   FILTER_DISABLE: () => (/* binding */ FILTER_DISABLE),
/* harmony export */   FILTER_EXCLUDE: () => (/* binding */ FILTER_EXCLUDE),
/* harmony export */   FIRST_DATA_LOADED: () => (/* binding */ FIRST_DATA_LOADED),
/* harmony export */   FLUSH_SEAT_LAYOUT: () => (/* binding */ FLUSH_SEAT_LAYOUT),
/* harmony export */   GALLERY_DOWNLOAD_IMAGE: () => (/* binding */ GALLERY_DOWNLOAD_IMAGE),
/* harmony export */   GALLERY_VIEW_IMAGE: () => (/* binding */ GALLERY_VIEW_IMAGE),
/* harmony export */   GALLERY_VIEW_IMAGE_FULLSCREEN: () => (/* binding */ GALLERY_VIEW_IMAGE_FULLSCREEN),
/* harmony export */   GET_SCREENINGS: () => (/* binding */ GET_SCREENINGS),
/* harmony export */   GMAPS_LOADED: () => (/* binding */ GMAPS_LOADED),
/* harmony export */   GO_TICKETING_CONTACT_DETAILS: () => (/* binding */ GO_TICKETING_CONTACT_DETAILS),
/* harmony export */   GO_TICKETING_PAYMENT: () => (/* binding */ GO_TICKETING_PAYMENT),
/* harmony export */   GO_TICKETING_REVIEW: () => (/* binding */ GO_TICKETING_REVIEW),
/* harmony export */   GO_TICKETING_SEATING: () => (/* binding */ GO_TICKETING_SEATING),
/* harmony export */   GO_TICKETING_TIMEOUT: () => (/* binding */ GO_TICKETING_TIMEOUT),
/* harmony export */   GO_TICKETING_TYPES: () => (/* binding */ GO_TICKETING_TYPES),
/* harmony export */   HEADER_HIDDEN: () => (/* binding */ HEADER_HIDDEN),
/* harmony export */   HIDE_MODAL: () => (/* binding */ HIDE_MODAL),
/* harmony export */   HOMEENT_VENDOR_CLICKED: () => (/* binding */ HOMEENT_VENDOR_CLICKED),
/* harmony export */   HOMEPAGE_TRAILER_ENDED: () => (/* binding */ HOMEPAGE_TRAILER_ENDED),
/* harmony export */   HOME_BUTTON_CLICKED: () => (/* binding */ HOME_BUTTON_CLICKED),
/* harmony export */   JW_PLAYER_PROGRESS: () => (/* binding */ JW_PLAYER_PROGRESS),
/* harmony export */   KALTURA_VIDEO: () => (/* binding */ KALTURA_VIDEO),
/* harmony export */   LINK_CLICKED: () => (/* binding */ LINK_CLICKED),
/* harmony export */   LINK_CLICK_OUT: () => (/* binding */ LINK_CLICK_OUT),
/* harmony export */   LOAD_STATIC_PIXELS: () => (/* binding */ LOAD_STATIC_PIXELS),
/* harmony export */   MAP_REQUEST_DIRECTIONS: () => (/* binding */ MAP_REQUEST_DIRECTIONS),
/* harmony export */   MATTERHORN_VIDEO: () => (/* binding */ MATTERHORN_VIDEO),
/* harmony export */   MESSENGER_CLICKED: () => (/* binding */ MESSENGER_CLICKED),
/* harmony export */   MODAL_RESULT_CANCEL: () => (/* binding */ MODAL_RESULT_CANCEL),
/* harmony export */   MODAL_RESULT_OK: () => (/* binding */ MODAL_RESULT_OK),
/* harmony export */   MOVIES_LIST_SCROLLED: () => (/* binding */ MOVIES_LIST_SCROLLED),
/* harmony export */   ONETRUST_SHOW: () => (/* binding */ ONETRUST_SHOW),
/* harmony export */   OPEN_PAYMENT: () => (/* binding */ OPEN_PAYMENT),
/* harmony export */   OPEN_TICKETING: () => (/* binding */ OPEN_TICKETING),
/* harmony export */   PAGE_STATE_LOADED: () => (/* binding */ PAGE_STATE_LOADED),
/* harmony export */   PAYMENT_MESSAGE_RECEIVED: () => (/* binding */ PAYMENT_MESSAGE_RECEIVED),
/* harmony export */   PICK_OR_UNPICK_SEATS: () => (/* binding */ PICK_OR_UNPICK_SEATS),
/* harmony export */   POWSTER_GA_EVENT_TRACK: () => (/* binding */ POWSTER_GA_EVENT_TRACK),
/* harmony export */   POWSTER_GA_PAGE_VIEW_TRACK: () => (/* binding */ POWSTER_GA_PAGE_VIEW_TRACK),
/* harmony export */   QUIZ_STARTED: () => (/* binding */ QUIZ_STARTED),
/* harmony export */   RELOAD_FILTERS: () => (/* binding */ RELOAD_FILTERS),
/* harmony export */   REOPEN_TICKETING: () => (/* binding */ REOPEN_TICKETING),
/* harmony export */   RESET_FILTER: () => (/* binding */ RESET_FILTER),
/* harmony export */   RESET_FILTERS: () => (/* binding */ RESET_FILTERS),
/* harmony export */   RIGHT_OR_WRONG_QUIZ_FINISHED: () => (/* binding */ RIGHT_OR_WRONG_QUIZ_FINISHED),
/* harmony export */   SCREENINGS_LIST_SCROLLED: () => (/* binding */ SCREENINGS_LIST_SCROLLED),
/* harmony export */   SCREENINGS_LOADED: () => (/* binding */ SCREENINGS_LOADED),
/* harmony export */   SCROLLSITE_BUTTON_CLICK: () => (/* binding */ SCROLLSITE_BUTTON_CLICK),
/* harmony export */   SCROLLSITE_GALLERY_ITEM_CLICK: () => (/* binding */ SCROLLSITE_GALLERY_ITEM_CLICK),
/* harmony export */   SCROLLSITE_RESOURCE_CLICK: () => (/* binding */ SCROLLSITE_RESOURCE_CLICK),
/* harmony export */   SCROLL_LOCK: () => (/* binding */ SCROLL_LOCK),
/* harmony export */   SCROLL_UNLOCK: () => (/* binding */ SCROLL_UNLOCK),
/* harmony export */   SEARCH_NEW_CITY: () => (/* binding */ SEARCH_NEW_CITY),
/* harmony export */   SELECT_MACCS_THEATER: () => (/* binding */ SELECT_MACCS_THEATER),
/* harmony export */   SELECT_NEARBY_CITY: () => (/* binding */ SELECT_NEARBY_CITY),
/* harmony export */   SELECT_PROVIDER: () => (/* binding */ SELECT_PROVIDER),
/* harmony export */   SELECT_SCREENING: () => (/* binding */ SELECT_SCREENING),
/* harmony export */   SELECT_ST_DATE: () => (/* binding */ SELECT_ST_DATE),
/* harmony export */   SELECT_THEATER: () => (/* binding */ SELECT_THEATER),
/* harmony export */   SELECT_TIME: () => (/* binding */ SELECT_TIME),
/* harmony export */   SET_ACTIVE_PAGE: () => (/* binding */ SET_ACTIVE_PAGE),
/* harmony export */   SET_BACKGROUND_ELEMENT: () => (/* binding */ SET_BACKGROUND_ELEMENT),
/* harmony export */   SET_BACKGROUND_VIDEO_ENABLED: () => (/* binding */ SET_BACKGROUND_VIDEO_ENABLED),
/* harmony export */   SET_BACKGROUND_VIDEO_MUTED: () => (/* binding */ SET_BACKGROUND_VIDEO_MUTED),
/* harmony export */   SET_BACKGROUND_VIDEO_PLAYING: () => (/* binding */ SET_BACKGROUND_VIDEO_PLAYING),
/* harmony export */   SET_BG_STATUS: () => (/* binding */ SET_BG_STATUS),
/* harmony export */   SET_CITIES: () => (/* binding */ SET_CITIES),
/* harmony export */   SET_CITY_SHOW_COUNT: () => (/* binding */ SET_CITY_SHOW_COUNT),
/* harmony export */   SET_CLIENT_GEO: () => (/* binding */ SET_CLIENT_GEO),
/* harmony export */   SET_CLIENT_SIZE: () => (/* binding */ SET_CLIENT_SIZE),
/* harmony export */   SET_FILTER_VISIBILITY: () => (/* binding */ SET_FILTER_VISIBILITY),
/* harmony export */   SET_IOSFIXEDFIX: () => (/* binding */ SET_IOSFIXEDFIX),
/* harmony export */   SET_MAP_OPEN: () => (/* binding */ SET_MAP_OPEN),
/* harmony export */   SET_SIDE_NAV_ACTIVE: () => (/* binding */ SET_SIDE_NAV_ACTIVE),
/* harmony export */   SET_SIDE_NAV_OPEN: () => (/* binding */ SET_SIDE_NAV_OPEN),
/* harmony export */   SET_THEATERS: () => (/* binding */ SET_THEATERS),
/* harmony export */   SET_TICKETING_MESSAGE: () => (/* binding */ SET_TICKETING_MESSAGE),
/* harmony export */   SET_USER: () => (/* binding */ SET_USER),
/* harmony export */   SET_USER_REGION_MODAL_DISMISSED: () => (/* binding */ SET_USER_REGION_MODAL_DISMISSED),
/* harmony export */   SHOW_COOKIES_MODAL: () => (/* binding */ SHOW_COOKIES_MODAL),
/* harmony export */   SHOW_MODAL: () => (/* binding */ SHOW_MODAL),
/* harmony export */   SHOW_SCREENING_AUTH: () => (/* binding */ SHOW_SCREENING_AUTH),
/* harmony export */   SIGN_UP_SUBMIT: () => (/* binding */ SIGN_UP_SUBMIT),
/* harmony export */   SMART_HOMEENT_LINK_CLICKED: () => (/* binding */ SMART_HOMEENT_LINK_CLICKED),
/* harmony export */   SMART_HOMEENT_SELECT: () => (/* binding */ SMART_HOMEENT_SELECT),
/* harmony export */   START_API: () => (/* binding */ START_API),
/* harmony export */   START_FORCE_CLIENT_ORIENTATION: () => (/* binding */ START_FORCE_CLIENT_ORIENTATION),
/* harmony export */   STOP_FORCE_CLIENT_ORIENTATION: () => (/* binding */ STOP_FORCE_CLIENT_ORIENTATION),
/* harmony export */   TICKET_LINK_CLICKED: () => (/* binding */ TICKET_LINK_CLICKED),
/* harmony export */   TICKET_PURCHASE_COMPLETE: () => (/* binding */ TICKET_PURCHASE_COMPLETE),
/* harmony export */   TOGGLE_FILTER: () => (/* binding */ TOGGLE_FILTER),
/* harmony export */   UPDATE_BACKGROUND_SETTINGS: () => (/* binding */ UPDATE_BACKGROUND_SETTINGS),
/* harmony export */   UPDATE_DYNAMIC_DATA: () => (/* binding */ UPDATE_DYNAMIC_DATA),
/* harmony export */   UPDATE_LOADER: () => (/* binding */ UPDATE_LOADER),
/* harmony export */   UPDATE_MODAL: () => (/* binding */ UPDATE_MODAL),
/* harmony export */   UPDATE_ORDER_TICKETS: () => (/* binding */ UPDATE_ORDER_TICKETS),
/* harmony export */   UPDATE_STORE: () => (/* binding */ UPDATE_STORE),
/* harmony export */   UPDATE_THEATER_FILTERED_SCREENINGS: () => (/* binding */ UPDATE_THEATER_FILTERED_SCREENINGS),
/* harmony export */   UPDATE_TICKETING_SEATS: () => (/* binding */ UPDATE_TICKETING_SEATS),
/* harmony export */   UPDATE_TICKET_TYPE_QUANTITY: () => (/* binding */ UPDATE_TICKET_TYPE_QUANTITY),
/* harmony export */   URL_CHANGED: () => (/* binding */ URL_CHANGED),
/* harmony export */   VIDEOS_TICKET_CLICK: () => (/* binding */ VIDEOS_TICKET_CLICK),
/* harmony export */   VIDEO_PLAYER_PROGRESS: () => (/* binding */ VIDEO_PLAYER_PROGRESS),
/* harmony export */   VIMEO_VIDEO_PROGRESS: () => (/* binding */ VIMEO_VIDEO_PROGRESS),
/* harmony export */   VISIBLE_MACCS_THEATER: () => (/* binding */ VISIBLE_MACCS_THEATER),
/* harmony export */   VR_SET_MODE: () => (/* binding */ VR_SET_MODE),
/* harmony export */   YOUTUBE_ENDED: () => (/* binding */ YOUTUBE_ENDED),
/* harmony export */   YOUTUBE_PAUSE: () => (/* binding */ YOUTUBE_PAUSE),
/* harmony export */   YOUTUBE_PLAY: () => (/* binding */ YOUTUBE_PLAY),
/* harmony export */   YOUTUBE_PROGRESS: () => (/* binding */ YOUTUBE_PROGRESS),
/* harmony export */   YOUTUBE_READY: () => (/* binding */ YOUTUBE_READY),
/* harmony export */   YOUTUBE_START: () => (/* binding */ YOUTUBE_START)
/* harmony export */ });
/* Action Types
-----------------------*/

const UPDATE_STORE = 'UPDATE_STORE';
const BEFORE_LOAD = 'BEFORE_LOAD';
const PAGE_STATE_LOADED = 'PAGE_STATE_LOADED';
const START_API = 'START_API';
const GMAPS_LOADED = 'GMAPS_LOADED';
const URL_CHANGED = 'URL_CHANGED';
const API_ERROR = 'API_ERROR';
const CLOSE_APP = 'CLOSE_APP';

// Loader
const UPDATE_LOADER = 'UPDATE_LOADER';

// Bg Status
const SET_BG_STATUS = 'SET_BG_STATUS';
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';

// App Dimensions/Browser Stats
const SET_CLIENT_SIZE = 'SET_CLIENT_SIZE';
const START_FORCE_CLIENT_ORIENTATION = 'START_FORCE_CLIENT_ORIENTATION';
const STOP_FORCE_CLIENT_ORIENTATION = 'STOP_FORCE_CLIENT_ORIENTATION';

// Background
const SET_BACKGROUND_VIDEO_PLAYING = 'SET_BACKGROUND_VIDEO_PLAYING';
const SET_BACKGROUND_VIDEO_ENABLED = 'SET_BACKGROUND_VIDEO_ENABLED';
const SET_BACKGROUND_VIDEO_MUTED = 'SET_BACKGROUND_VIDEO_MUTED';
const SET_BACKGROUND_ELEMENT = 'SET_BACKGROUND_ELEMENT';
const UPDATE_BACKGROUND_SETTINGS = 'UPDATE_BACKGROUND_SETTINGS';

// Home page
const CALENDAR_CLICKED = 'CALENDAR_CLICKED';
const MESSENGER_CLICKED = 'MESSENGER_CLICKED';
const HOMEPAGE_TRAILER_ENDED = 'HOMEPAGE_TRAILER_ENDED';
const CLICKED_FOLLOW = 'CLICKED_FOLLOW';
const HOME_BUTTON_CLICKED = 'HOME_BUTTON_CLICKED';

// Gallery
const GALLERY_VIEW_IMAGE = 'GALLERY_VIEW_IMAGE';
const GALLERY_VIEW_IMAGE_FULLSCREEN = 'GALLERY_VIEW_IMAGE_FULLSCREEN';
const GALLERY_DOWNLOAD_IMAGE = 'GALLERY_DOWNLOAD_IMAGE';

// Videos
const VIDEO_PLAYER_PROGRESS = 'VIDEO_PLAYER_PROGRESS';
const VIMEO_VIDEO_PROGRESS = 'VIMEO_VIDEO_PROGRESS';
const VIDEOS_TICKET_CLICK = 'VIDEOS_TICKET_CLICK';
const KALTURA_VIDEO = 'KALTURA_VIDEO';
const MATTERHORN_VIDEO = 'MATTERHORN_VIDEO';
const JW_PLAYER_PROGRESS = 'JW_PLAYER_PROGRESS';

// Home Ent
const HOMEENT_VENDOR_CLICKED = 'HOMEENT_VENDOR_CLICKED';
const SMART_HOMEENT_SELECT = 'SMART_HOMEENT_SELECT';
const SMART_HOMEENT_LINK_CLICKED = 'SMART_HOMEENT_LINK_CLICKED';

// Menu
const SET_SIDE_NAV_OPEN = 'SET_SIDE_NAV_OPEN';
const SET_SIDE_NAV_ACTIVE = 'SET_SIDE_NAV_ACTIVE';
const CLICKED_SHARE = 'CLICKED_SHARE';
const LINK_CLICKED = 'LINK_CLICKED';
const EXTERNAL_LINK_CLICKED = 'EXTERNAL_LINK_CLICKED';
const HEADER_HIDDEN = 'HEADER_HIDDEN';

// Footer
// export const FOOTER_SIZE = 'FOOTER_SIZE';

// Client Geo
const SET_CLIENT_GEO = 'SET_CLIENT_GEO';
const GET_SCREENINGS = 'GET_SCREENINGS';

// Dynamic Data
const UPDATE_DYNAMIC_DATA = 'UPDATE_DYNAMIC_DATA';

// Theaters
const SET_THEATERS = 'SET_THEATERS';
const ADD_THEATERS = 'ADD_THEATERS';
const SELECT_THEATER = 'SELECT_THEATER';
const SELECT_MACCS_THEATER = 'SELECT_MACCS_THEATER';
const VISIBLE_MACCS_THEATER = 'VISIBLE_MACCS_THEATER';
// export const SELECT_FIRST_THEATER               = 'SELECT_FIRST_THEATER';
const SET_MAP_OPEN = 'SET_MAP_OPEN';
const SET_CITIES = 'SET_CITIES';
const SET_CITY_SHOW_COUNT = 'SET_CITY_SHOW_COUNT';
const SELECT_NEARBY_CITY = 'SELECT_NEARBY_CITY';
const UPDATE_THEATER_FILTERED_SCREENINGS = 'UPDATE_THEATER_FILTERED_SCREENINGS';
const AFTER_THEATERS_UPDATE = 'AFTER_THEATERS_UPDATE';
const EXTRA_THEATERS = 'EXTRA_THEATERS';
const DO_LOCATION_SEARCH = 'DO_LOCATION_SEARCH';
const FIRST_DATA_LOADED = 'FIRST_DATA_LOADED';
const SCREENINGS_LOADED = 'SCREENINGS_LOADED';
const SELECT_ST_DATE = 'SELECT_ST_DATE';
const SELECT_PROVIDER = 'SELECT_PROVIDER';
const SELECT_TIME = 'SELECT_TIME'; // DON'T USE FOR TRACKING, use SELECT_SCREENING INSTEAD
const SELECT_SCREENING = 'SELECT_SCREENING';
const TICKET_LINK_CLICKED = 'TICKET_LINK_CLICKED';
const SHOW_SCREENING_AUTH = 'SHOW_SCREENING_AUTH';

// Ticketing
const OPEN_TICKETING = 'OPEN_TICKETING';
const REOPEN_TICKETING = 'REOPEN_TICKETING';
const GO_TICKETING_TYPES = 'GO_TICKETING_TYPES';
const UPDATE_TICKET_TYPE_QUANTITY = 'UPDATE_TICKET_TYPE_QUANTITY';
const CREATE_OR_UPDATE_ORDER = 'CREATE_OR_UPDATE_ORDER';
const UPDATE_ORDER_TICKETS = 'UPDATE_ORDER_TICKETS';
const GO_TICKETING_SEATING = 'GO_TICKETING_SEATING';
const PICK_OR_UNPICK_SEATS = 'PICK_OR_UNPICK_SEATS';
const UPDATE_TICKETING_SEATS = 'UPDATE_TICKETING_SEATS';
const FLUSH_SEAT_LAYOUT = 'FLUSH_SEAT_LAYOUT';
const GO_TICKETING_REVIEW = 'GO_TICKETING_REVIEW';
const GO_TICKETING_CONTACT_DETAILS = 'GO_TICKETING_CONTACT_DETAILS';
const GO_TICKETING_PAYMENT = 'GO_TICKETING_PAYMENT';
const OPEN_PAYMENT = 'OPEN_PAYMENT';
const PAYMENT_MESSAGE_RECEIVED = 'PAYMENT_MESSAGE_RECEIVED';
const CLOSE_PAYMENT = 'CLOSE_PAYMENT';
const TICKET_PURCHASE_COMPLETE = 'TICKET_PURCHASE_COMPLETE';
const SET_TICKETING_MESSAGE = 'SET_TICKETING_MESSAGE';
const CLEAR_TICKETING_MESSAGE = 'CLEAR_TICKETING_MESSAGE';
const GO_TICKETING_TIMEOUT = 'GO_TICKETING_TIMEOUT';
const CLOSE_TICKETING = 'CLOSE_TICKETING';
const MAP_REQUEST_DIRECTIONS = 'MAP_REQUEST_DIRECTIONS';

// Filters
const CHECK_FILTERS = 'CHECK_FILTERS';
const RELOAD_FILTERS = 'RELOAD_FILTERS';
const TOGGLE_FILTER = 'TOGGLE_FILTER';
const FILTER_EXCLUDE = 'FILTER_EXCLUDE';
const FILTER_DISABLE = 'FILTER_DISABLE';
const SET_FILTER_VISIBILITY = 'SET_FILTER_VISIBILITY';
const RESET_FILTER = 'RESET_FILTER';
const RESET_FILTERS = 'RESET_FILTERS';
const APPLY_FILTERS = 'APPLY_FILTERS';
const SEARCH_NEW_CITY = 'SEARCH_NEW_CITY';

// Modal
const SHOW_MODAL = 'SHOW_MODAL';
const HIDE_MODAL = 'HIDE_MODAL';
const UPDATE_MODAL = 'UPDATE_MODAL';
const SHOW_COOKIES_MODAL = 'SHOW_COOKIES_MODAL';
// MODAL RESULTS (should probably move that somewhere else)
const MODAL_RESULT_OK = 'OK';
const MODAL_RESULT_CANCEL = 'CANCEL';
const APP_LIST_SCROLLED = 'APP_LIST_SCROLLED';
const MOVIES_LIST_SCROLLED = 'MOVIES_LIST_SCROLLED';
const SCREENINGS_LIST_SCROLLED = 'SCREENINGS_LIST_SCROLLED';
const EVENT_DATA_LIST_SCROLLED = 'EVENT_DATA_LIST_SCROLLED';

// QUIZ
const QUIZ_STARTED = 'QUIZ_STARTED';
const RIGHT_OR_WRONG_QUIZ_FINISHED = 'RIGHT_OR_WRONG_QUIZ_FINISHED';

// USER
const SET_USER = 'SET_USER';
const SET_USER_REGION_MODAL_DISMISSED = 'SET_USER_REGION_MODAL_DISMISSED';
const SET_IOSFIXEDFIX = 'SET_IOSFIXEDFIX';

// YOUTUBE
const YOUTUBE_READY = 'YOUTUBE_READY';
const YOUTUBE_PROGRESS = 'YOUTUBE_PROGRESS';
const YOUTUBE_ENDED = 'YOUTUBE_ENDED';
const YOUTUBE_PAUSE = 'YOUTUBE_PAUSE';
const YOUTUBE_PLAY = 'YOUTUBE_PLAY';
const YOUTUBE_START = 'YOUTUBE_START';

// VR
const VR_SET_MODE = 'VR_SET_MODE';

// SCROLL CONTROLS
const SCROLL_LOCK = 'SCROLL_LOCK';
const SCROLL_UNLOCK = 'SCROLL_UNLOCK';

// TRACKING
const ONETRUST_SHOW = 'ONETRUST_SHOW';
const ENABLE_STORAGE = 'ENABLE_STORAGE';
const DISABLE_STORAGE = 'DISABLE_STORAGE';
const ENABLE_PIXELS = 'ENABLE_PIXELS';
const DISABLE_PIXELS = 'DISABLE_PIXELS';
const POWSTER_GA_EVENT_TRACK = 'POWSTER_GA_EVENT_TRACK';
const POWSTER_GA_PAGE_VIEW_TRACK = 'POWSTER_GA_PAGE_VIEW_TRACK';
const LOAD_STATIC_PIXELS = 'LOAD_STATIC_PIXELS';
const LINK_CLICK_OUT = 'LINK_CLICK_OUT';

// AUTHENTICATION
const AUTH_RESPONSE = 'AUTH_RESPONSE';
const AUTH_CLEAR = 'AUTH_CLEAR';

// CLOSABLE TRAILER
const CLOSABLE_TRAILER_OPEN = 'CLOSABLE_TRAILER_OPEN';
const CLOSABLE_TRAILER_CLOSED = 'CLOSABLE_TRAILER_CLOSED';

// NETFLIX BOOKMARKS
const DOWNLOAD_WORKBOOK = 'DOWNLOAD_WORKBOOK';

// SCROLLSITE
const SCROLLSITE_BUTTON_CLICK = 'SCROLLSITE_BUTTON_CLICK';
const SCROLLSITE_GALLERY_ITEM_CLICK = 'SCROLLSITE_GALLERY_ITEM_CLICK';
const SCROLLSITE_RESOURCE_CLICK = 'SCROLLSITE_RESOURCE_CLICK';

// SIGN UP
const SIGN_UP_SUBMIT = 'SIGN_UP_SUBMIT';

/***/ }),

/***/ "./static/src/store/bolt/ageGate.js":
/*!******************************************!*\
  !*** ./static/src/store/bolt/ageGate.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var utils_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/cookies */ "./static/src/utils/cookies.js");
/* harmony import */ var utils_gdpr_oneTrust__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/gdpr/oneTrust */ "./static/src/utils/gdpr/oneTrust/index.js");
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.min.js");
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__);




async function loadExtraOneTrust() {
  const oneTrustData = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().appData?.options?.oneTrustCookieConsent;
  const oneTrustScripts = oneTrustData?.scripts;

  // Only add the scripts if we were waiting for the age gate
  if (!oneTrustScripts || !oneTrustData.waitForAgeGate) {
    return;
  }
  try {
    // Ensure we show the banner by removing the closed banner cookie
    document.cookie = 'OptanonAlertBoxClosed=; expires=' + new Date(0).toUTCString();
  } catch (e) {}
  await Promise.all(Object.values(oneTrustScripts).map(async script => {
    if (script.inlineContent) {
      let el = document.createElement('script');
      el.text = script.inlineContent;
      document.body.appendChild(el);
      return;
    }
    return new Promise((resolve, reject) => {
      let el = document.createElement('script');
      el.onload = resolve;
      el.onerror = reject;
      if (script.integrity) {
        el.integrity = script.integrity;
      }
      if (script.crossOrigin && script.crossOrigin !== 'none') {
        el.crossOrigin = script.crossOrigin;
      }
      if (script.dataDomainScript) {
        el.setAttribute('data-domain-script', script.dataDomainScript);
      }
      if (script.async) {
        el.async = true;
      }
      el.src = script.src;
      document.body.appendChild(el);
    });
  }));
}
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('AGEGATE_OPEN', () => {
  const {
    deviceSize
  } = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().client;
  if (deviceSize !== 'mobile') {
    const page = document.getElementById('bolt');
    (0,body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__.disableBodyScroll)(page);
  }
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().set({
    ageGateOpen: true
  });
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('AGEGATE_CLOSE', () => {
  const {
    deviceSize
  } = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().client;
  if (deviceSize !== 'mobile') {
    const page = document.getElementById('bolt');
    (0,body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__.enableBodyScroll)(page);
  }
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().set({
    ageGateOpen: false
  });
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('AGEGATE_CONSENT', async consentGiven => {
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().client.set({
    ofAge: !!consentGiven
  });
  // Note (BaliBalo): not sure why we are resetting cookie consent here
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('ACCEPT_COOKIES', [], {
    doNotSetCookie: true
  });
  const ageGate = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().appData?.options?.ageGate;
  const cookieName = ageGate?.cookieName || 'pow-agegate';
  const cookieExpiry = +ageGate?.expiry || 365;
  if (!(0,utils_cookies__WEBPACK_IMPORTED_MODULE_1__.getCookie)(cookieName)) {
    (0,utils_cookies__WEBPACK_IMPORTED_MODULE_1__.setCookie)(cookieName, +consentGiven, cookieExpiry);
  }

  // TODO remove and move to new implementation
  if (!consentGiven) {
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('CHECK_ACTIVE_PAGE_AGE_RESTRICTION');
    await (0,utils_gdpr_oneTrust__WEBPACK_IMPORTED_MODULE_2__.waitForOneTrust)();
    window.Optanon?.RejectAll();
  } else {
    await loadExtraOneTrust();
    await (0,utils_gdpr_oneTrust__WEBPACK_IMPORTED_MODULE_2__.waitForOneTrust)();
    // const domainData = window.Optanon?.GetDomainData();
    // if (domainData?.ForceConsent) {
    // 	window.Optanon?.AllowAll();
    // }
    // If we want to ensure the banner does not show:
    // window.Optanon?.Close();
    // Or to show the "manage consent" modal:
    // window.Optanon?.ToggleInfoDisplay();
  }
});

/***/ }),

/***/ "./static/src/store/bolt/calendarRemind.js":
/*!*************************************************!*\
  !*** ./static/src/store/bolt/calendarRemind.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");


function prevDef(evt) {
  evt.preventDefault();
}
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('SHOW_CAL_REMIND', () => {
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().set({
    calRemindOpen: true
  });
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('SET_HEADER_ACTION', {
    icon: 'close',
    action: () => store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('CLOSE_CAL_REMIND'),
    tag: 'closeCalRemind'
  });
  (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.addClass)(document.body, 'locked');
  document.body.addEventListener('touchmove', prevDef, {
    passive: false
  });
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('CLOSE_CAL_REMIND', () => {
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().set({
    calRemindOpen: false
  });
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('REMOVE_HEADER_ACTIONS', 'closeCalRemind');
  (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.removeClass)(document.body, 'locked');
  document.body.removeEventListener('touchmove', prevDef, {
    passive: false
  });
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('CLOSE_ALL_OVERLAYS', () => {
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('CLOSE_CAL_REMIND');
});

/***/ }),

/***/ "./static/src/store/bolt/cookies.js":
/*!******************************************!*\
  !*** ./static/src/store/bolt/cookies.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var utils_gdpr_categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/gdpr/categories */ "./static/src/utils/gdpr/categories.js");
/* harmony import */ var utils_gdpr_dispatchEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/gdpr/dispatchEvent */ "./static/src/utils/gdpr/dispatchEvent.js");
/* harmony import */ var utils_gdpr_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/gdpr/constants */ "./static/src/utils/gdpr/constants.js");
/* harmony import */ var utils_gdpr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/gdpr */ "./static/src/utils/gdpr/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");





// import { arrayContains } from 'utils/bolt';

const POWSTER_COOKIE = 'pow-cookie-cats-';
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('SET_COOKIE_BAR_HEIGHT', val => {
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().cookies.set({
    height: val
  });
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('COOKIE_BANNER_OPEN', () => {
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().cookies.set({
    cookieBannerOpen: true
  });
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('COOKIE_BANNER_CLOSE', () => {
  const store = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get();
  const cookiesStore = store.cookies;
  if (cookiesStore.cookieBannerOpen && cookiesStore.pushDown && cookiesStore.height && store.homeActivePercentage < .5) {
    let mainScroll = document.getElementById('mainScroll');
    if (mainScroll) {
      let destination = mainScroll.scrollTop + cookiesStore.height;
      // Some automatic scroll adjustment happening from some browser, so setTimeout to wait for a render
      setTimeout(() => {
        // Refetch in case the element has changed during the render
        let mainScroll = document.getElementById('mainScroll');
        if (mainScroll) {
          mainScroll.scrollTop = destination;
        }
      }, 0);
    }
  }
  cookiesStore.set({
    cookieBannerOpen: false
  });
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('SET_COOKIE_BAR_HEIGHT', 0);
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('COOKIE_PREFERENCES_OPEN', () => {
  const {
    deviceSize
  } = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().client;
  if (deviceSize !== 'mobile') {
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('ENABLE_SCROLLING_LOCK');
  }
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().cookies.set({
    cookiePreferencesOpen: true
  });
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('COOKIE_PREFERENCES_CLOSE', () => {
  const {
    deviceSize
  } = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().client;
  if (deviceSize !== 'mobile') {
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('DISABLE_SCROLLING_LOCK');
  }
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().cookies.set({
    cookiePreferencesOpen: false
  });
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('ACCEPT_COOKIES', function () {
  let cats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let options = arguments.length > 1 ? arguments[1] : undefined;
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('COOKIE_BANNER_CLOSE');
  utils_gdpr_categories__WEBPACK_IMPORTED_MODULE_1__.set(cats);
  if (!options?.doNotSetCookie) {
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('SET_COOKIES', cats);
  }
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('ACCEPT_ALL_COOKIES', options => {
  const allCats = [...Object.keys(utils_gdpr_constants__WEBPACK_IMPORTED_MODULE_3__), 'UNCATEGORIZED'];
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('ACCEPT_COOKIES', allCats, options);
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('SET_COOKIES', function () {
  let cats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  js_cookie__WEBPACK_IMPORTED_MODULE_5__["default"].set(POWSTER_COOKIE + store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().appData?.meta?.id, JSON.stringify(cats), {
    expires: 30
  });
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('CHECK_COOKIES', () => {
  let cookieCategories;
  try {
    cookieCategories = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_5__["default"].get(POWSTER_COOKIE + store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().appData?.meta?.id));
  } catch (err) {}
  const allowedCategories = cookieCategories || utils_gdpr_categories__WEBPACK_IMPORTED_MODULE_1__.get();
  const autoOptIn = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().appData?.options?.cookiesModal?.autoOptIn || '';
  const autoOptInCategories = autoOptIn.split(',').filter(x => x);
  if (allowedCategories.length > 0) {
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('ACCEPT_COOKIES', allowedCategories, {
      doNotSetCookie: true
    });
  } else if (autoOptInCategories.length > 0) {
    utils_gdpr_categories__WEBPACK_IMPORTED_MODULE_1__.set(autoOptInCategories);
  } else {
    utils_gdpr_categories__WEBPACK_IMPORTED_MODULE_1__.set([]);
  }
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('ONETRUST_SHOW', () => utils_gdpr__WEBPACK_IMPORTED_MODULE_4__.oneTrust.displayModal());
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('DELETE_ALL_COOKIES', _ref => {
  let {
    reload
  } = _ref;
  const cookies = js_cookie__WEBPACK_IMPORTED_MODULE_5__["default"].get();
  Object.keys(cookies).map(cookie => {
    if (!cookie.startsWith(POWSTER_COOKIE)) {
      js_cookie__WEBPACK_IMPORTED_MODULE_5__["default"].remove(cookie);
    }
  });
  if (reload) {
    window.location.reload();
  }
});
utils_gdpr_categories__WEBPACK_IMPORTED_MODULE_1__.addChangeListener(allowedCategories => {
  (0,utils_gdpr_dispatchEvent__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)('categoriesUpdated', {
    categories: allowedCategories
  });
});

/***/ }),

/***/ "./static/src/store/bolt/externalCookieBanner.js":
/*!*******************************************************!*\
  !*** ./static/src/store/bolt/externalCookieBanner.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");


function $(selector) {
  return document.querySelector(selector);
}
let resizeObserver, cookieHeight;
if (typeof window !== 'undefined' && window.ResizeObserver) {
  if (window.ResizeObserver) {
    resizeObserver = new ResizeObserver(entries => {
      cookieHeight = entries[0].contentRect.height;
      updateCookieBanner(cookieHeight);
    });
  }
  lookForCookieBanner();
}
function lookForCookieBanner() {
  let start = Date.now();
  let check = () => {
    if ($('#_evidon_banner') && $('#_evidon_banner').offsetHeight) {
      if (resizeObserver) {
        return resizeObserver.observe($('#_evidon_banner'));
      }
      return setTimeout(() => updateCookieBanner($('#_evidon_banner').offsetHeight), 800);
    }
    if ($('#onetrust-banner-sdk') && $('#onetrust-banner-sdk').offsetHeight) {
      if (resizeObserver) {
        return resizeObserver.observe($('#onetrust-banner-sdk'));
      }
      return setTimeout(() => updateCookieBanner($('#onetrust-banner-sdk').offsetHeight), 800);
    }

    // After 20 seconds, give up
    if (Date.now() - start < 20000) {
      setTimeout(check, 100);
    }
  };
  check();
}
function updateCookieBanner(height) {
  const store = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get();
  const evidonPushDown = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(store, 'appData.options.requireUserConsent.position', '') === 'pushdown';
  const oneTrustPushDown = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(store, 'appData.options.oneTrustCookieConsent.position', '') === 'pushdown';
  if (!evidonPushDown && !oneTrustPushDown) {
    return;
  }
  const bannerContainer = document.createElement('div');
  bannerContainer.style.position = 'fixed';
  bannerContainer.style.top = 0;
  bannerContainer.style.width = '100%';
  bannerContainer.style.zIndex = 2147000001;
  document.body.insertBefore(bannerContainer, document.body.firstChild);
  if ($('#_evidon_banner')) {
    bannerContainer.appendChild($('#_evidon_banner'));
  } else if ($('#onetrust-consent-sdk')) {
    bannerContainer.appendChild($('#onetrust-consent-sdk'));
  }
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().set({
    externalCookieBanner: {
      bannerOpen: height > 0,
      height: height
    }
  });
}

/***/ }),

/***/ "./static/src/store/bolt/footer.js":
/*!*****************************************!*\
  !*** ./static/src/store/bolt/footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var utils_visibilityChecks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/visibilityChecks */ "./static/src/utils/visibilityChecks.js");


store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('FOOTER_AUTO_EXPANDED', () => {
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().footer.set({
    allowAutoExpand: false
  });
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('UPDATE_FOOTER_ACTIVE_PERCENTAGE', () => {
  let footerElem = document.querySelector('[data-section=boltFooter]');
  let percentage = (0,utils_visibilityChecks__WEBPACK_IMPORTED_MODULE_1__.visibleRatio)(footerElem);
  if (percentage === undefined) return;
  let footerStore = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().footer;
  let rounded = Math.ceil(percentage * 10) / 10;
  if (rounded !== footerStore.footerActivePercentage) {
    footerStore.set({
      activePercentage: rounded
    });
  }
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('UPDATE_VISIBILITY_PERCENTAGES', () => store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('UPDATE_FOOTER_ACTIVE_PERCENTAGE'));

/***/ }),

/***/ "./static/src/store/bolt/gallery.js":
/*!******************************************!*\
  !*** ./static/src/store/bolt/gallery.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var utils_bolt_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/bolt/api */ "./static/src/utils/bolt/api.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");



store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('CHANGE_ACTIVE_IMAGE', _ref => {
  let {
    image,
    pageId
  } = _ref;
  const gallery = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().gallery;
  if (!gallery) store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().set({
    gallery: {}
  });
  if (!pageId) {
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().gallery.set({
      activeImage: image
    });
  } else {
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().gallery.set({
      [pageId]: {
        activeImage: image
      }
    });
  }
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('GALLERY_SHARE_IMAGE', async _ref2 => {
  let {
    imageUrl,
    siteUrl,
    metaOverrides
  } = _ref2;
  const shareBaseUrl = 'https://share.s-prod.pow.io/';
  const hash = await (0,utils_bolt_api__WEBPACK_IMPORTED_MODULE_1__.imageShareApi)('generateHashFromQuery', {
    imageUrl,
    siteUrl,
    metaOverrides
  });
  const imageShareLink = shareBaseUrl + (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.toQueryString)({
    imageUrl,
    siteUrl,
    metaOverrides,
    hash
  });
  if (typeof navigator?.share === 'function') {
    navigator.share({
      url: imageShareLink
    });
  } else {
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().gallery.set({
      imageShareLink
    });
  }
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('CLOSE_GALLERY_SHARE', () => {
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().gallery.set({
    imageShareLink: false
  });
});

/***/ }),

/***/ "./static/src/store/bolt/geo.js":
/*!**************************************!*\
  !*** ./static/src/store/bolt/geo.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var utils_pendingPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/pendingPromise */ "./static/src/utils/pendingPromise.js");


let currentLocationRequest = 0;
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('SET_USER_LOCATION', async (location, source, ticketType) => {
  let geo = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().client.geo;
  let promise = geo.loading;
  if (!promise) {
    promise = (0,utils_pendingPromise__WEBPACK_IMPORTED_MODULE_1__["default"])();
    geo.set({
      loading: promise
    }).now();
  }
  let requestId = ++currentLocationRequest;
  try {
    location = await (typeof location === 'function' ? location() : location);
  } catch (e) {
    // Error while getting location
    console.log('Error while getting location', e);
  }
  if (requestId !== currentLocationRequest) {
    return;
  }
  let storeGeo = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().client.geo.set({
    loading: null
  });
  if (!location || !location.lat || !location.lon) {
    return promise.resolve();
  }
  let newValue = {
    ...location
  };
  if (!newValue.countryCode && newValue.country) {
    newValue.countryCode = newValue.country;
    delete newValue.country;
  }
  // Note: this only replaces the values in the new location object. We should clear the previous fields here as well
  //  (either by using .reset or by making sure the newValue contains all the keys we want - with undefined if they're not in the location object)
  storeGeo.set(newValue).now();
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('USER_LOCATION_UPDATED', {
    geo: newValue,
    source,
    ticketType
  });
  promise.resolve(newValue);
});

/***/ }),

/***/ "./static/src/store/bolt/header.js":
/*!*****************************************!*\
  !*** ./static/src/store/bolt/header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");


store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('OPEN_NAV_MENU', () => {
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().header.set({
    open: true
  });
  (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.addClass)(document.body, 'locked');
  // commented for now as it breaks the scrolling in the region selector
  // document.body.addEventListener('touchmove', preventDefault, { passive: false });
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('SET_HEADER_ACTION', {
    icon: 'close',
    action: () => store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('CLOSE_NAV_MENU'),
    tag: 'closeNavMenu'
  });
});
const toCommaSeparated = val => val && Array.isArray(val) ? val.join(',') : null;
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('TOGGLE_SHARE_OPEN', () => {
  const store = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get();
  const shareOpen = store.header.shareOpen;
  const onesheetExpanded = store.header.onesheetExpanded;
  if (shareOpen) {
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().header.set({
      shareOpen: false
    });
  }
  if (!shareOpen && onesheetExpanded) {
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('CLOSE_ALL_OVERLAYS');
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().header.set({
      shareOpen: true
    });
  }
  if (shareOpen || onesheetExpanded) {
    return;
  }
  let path = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(store, ['appData', 'pages', store.activePage, 'path']) || '/';
  let qs = {};
  if (store.showtimes && store.showtimes.show) {
    const geo = store.client && store.client.geo || {};
    const filters = store.showtimes.filters.selected || {};
    qs = {
      lat: geo.lat,
      lon: geo.lon,
      location: geo.city,
      country: geo.countryCode,
      date: toCommaSeparated(filters.date),
      format: toCommaSeparated(filters.format),
      time: toCommaSeparated(filters.time)
    };
  } else if (store.videos && store.videos.overlayOpen) {
    const activeVideo = store.videos.activeVideo;
    qs = {
      v: activeVideo && (activeVideo.youtubeId || activeVideo.key)
    };
  }
  let shareDetails = path + (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.toQueryString)(qs);
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().header.set({
    shareOpen: true,
    shareDetails
  });
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('CLOSE_ALL_OVERLAYS', () => {
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().header.set({
    open: false,
    shareOpen: false
  });
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('CLOSE_NAV_MENU', () => {
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().header.set({
    open: false
  });
  (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.removeClass)(document.body, 'locked');
  // document.body.removeEventListener('touchmove', preventDefault, { passive: false });
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('REMOVE_HEADER_ACTIONS', 'closeNavMenu');
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('CLOSE_ALL_OVERLAYS', () => {
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('CLOSE_NAV_MENU');
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('SET_HEADER_ACTION', data => {
  if (!data || !data.action) {
    console.error('Trying to set the header action without a function');
    return;
  }
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().header.actions.push(data);
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('POP_HEADER_ACTION', () => {
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().header.actions.pop();
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('REMOVE_HEADER_ACTIONS', tag => {
  let headerState = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().header;
  let remaining = headerState.actions.filter(action => action.tag !== tag);
  headerState.set({
    actions: remaining
  });
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('TOGGLE_INTERSTITIAL_OPEN', open => {
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().header.set({
    interstitialOpen: open
  });
});

/***/ }),

/***/ "./static/src/store/bolt/index.js":
/*!****************************************!*\
  !*** ./static/src/store/bolt/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var store_bolt_geo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/bolt/geo */ "./static/src/store/bolt/geo.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var utils_bolt_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/bolt/index */ "./static/src/utils/bolt/index.js");
/* harmony import */ var utils_bolt_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/bolt/client */ "./static/src/utils/bolt/client.js");
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.min.js");
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(body_scroll_lock__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var utils_bolt_showtimesLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/bolt/showtimesLoader */ "./static/src/utils/bolt/showtimesLoader.js");
/* harmony import */ var pages_bolt_pages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pages/bolt_pages */ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/pages/bolt_pages.js");
/* harmony import */ var utils_geoFencing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/geoFencing */ "./static/src/utils/geoFencing.js");
/* harmony import */ var utils_bolt_geo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/bolt/geo */ "./static/src/utils/bolt/geo.js");
/* harmony import */ var utils_bolt_appRegions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/bolt/appRegions */ "./static/src/utils/bolt/appRegions.js");
/* harmony import */ var utils_smoothScroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils/smoothScroll */ "./static/src/utils/smoothScroll.js");
/* harmony import */ var utils_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! utils/hooks */ "./static/src/utils/hooks.js");



// import { closestToCenter } from 'utils/visibilityChecks';










store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('UPDATE_CLIENT', () => {
  const client = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().client;
  const newClient = (0,utils_bolt_client__WEBPACK_IMPORTED_MODULE_4__.getDeviceInfo)();
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().set({
    client: {
      ...client,
      ...newClient
    }
  });
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('SET_ACTIVE_PAGE', async (newPage, queryString, options) => {
  newPage = await utils_hooks__WEBPACK_IMPORTED_MODULE_12__["default"].call('setActivePage.newPage', newPage, {
    options
  });
  if (!newPage) {
    return;
  }
  let store = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get();
  let activePage = store.activePage;
  let newPageData = store.appData?.pages?.[newPage];
  const groupBookingsEnabled = store.appData?.pages?.boltShowtimes?.data?.groupBookings?.isEnabled;
  if ((newPage === activePage || !newPageData) && !(newPage === 'boltShowtimes' && groupBookingsEnabled)) {
    if (options?.hashInPage && !options?.noUrlUpdate) {
      location.hash = '';
      location.hash = options.hashInPage;
    }
    return;
  }
  let header = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().header;
  if (newPage !== header.activeSection) {
    header.set({
      activeSection: newPage
    });
  }

  // retro-compatibility
  if (queryString === true) {
    queryString = '';
  }
  if (!options?.noUrlUpdate) {
    let newUrl = (0,utils_bolt_index__WEBPACK_IMPORTED_MODULE_3__.getRelativePageUrl)(newPage, queryString, options?.hashInPage);
    history.pushState({
      activePage: newPage
    }, '', newUrl);
    document.title = (0,utils_bolt_index__WEBPACK_IMPORTED_MODULE_3__.getPageTitle)({
      store,
      page: newPage
    });
  }
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().set({
    activePage: newPage
  });
  if (!newPageData.section && newPage !== 'boltHome' && !window.disableAutoScrollReset) {
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().set({
      ignoreScroll: true
    });
    document.getElementById('mainScroll')?.scrollTo(0, 0);
    window.setTimeout(() => {
      store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().set({
        ignoreScroll: false
      });
    }, 100);
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('SET_SECTION_UNDER_HEADER', null);
  }
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('ACTIVE_PAGE_UPDATED', newPage);
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('CHECK_ACTIVE_PAGE_AGE_RESTRICTION');
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('CHECK_ACTIVE_PAGE_AGE_RESTRICTION', () => {
  let store = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get();
  let activePage = store.appData?.pages[store.activePage];
  if (activePage?.ageRestricted && store.client?.ofAge === false) {
    // TODO: improve how to decide which page gets priority
    let destination = ['boltHome', 'boltSynopsis', 'boltGallery', 'boltVideos', ...Object.keys(store.appData?.pages)].find(page => {
      let data = store.appData?.pages?.[page];
      return data && !data.ageRestricted;
    });
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('CLOSE_AND_NAVIGATE', destination);
  }
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('SET_SECTION_UNDER_HEADER', section => {
  let header = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().header;
  if (header.sectionUnderHeader !== section) {
    header.set({
      sectionUnderHeader: section
    });
  }
});
function getDesktopOffset(store, id) {
  const hasSonyHeader = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.accessNested)(store, 'appData.options.sonyFeatures.sonyHeader', false);
  const isHubPage = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.accessNested)(store, `appData.pages.${id}.component`, '') === 'hub';
  if (hasSonyHeader || isHubPage) {
    return 34;
  } else {
    return 0;
  }
}
function getMobileOffset(store) {
  const hasSonyHeader = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.accessNested)(store, 'appData.options.sonyFeatures.sonyHeader', false);
  if (hasSonyHeader) {
    return 58;
  } else {
    return (0,utils_bolt_index__WEBPACK_IMPORTED_MODULE_3__.getHeaderHeight)();
  }
}
function getSectionElement(id) {
  const store = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get();
  const noSlug = store.appData?.pages?.[id];
  if (!noSlug) {
    const pages = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.accessNested)(store, 'appData.pages', null);
    const parentSection = pages && Object.keys(pages).filter(page => pages[page].slug === id)[0];
    id = parentSection || id;
  }
  try {
    return document.querySelector(`[data-section="${id}"]`);
  } catch (e) {
    return null;
  }
}
let sectionLoadVersion = 0;
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('CHANGE_ACTIVE_SECTION', (id, options) => {
  options = options || {};
  if (options.mainPage && !getSectionElement(options.mainPage)) {
    options.instant = false;
  }
  const store = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get();
  let toElem = getSectionElement(id);
  const isDesktop = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.accessNested)(store, 'client.isDesktopSize', false);
  const hasUarHeader = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.accessNested)(store, 'appData.header.uarHeader');
  let scrollOffset = isDesktop ? getDesktopOffset(store, id) : getMobileOffset(store);
  if (id === 'boltHome') {
    scrollOffset = 0;
  }
  if (hasUarHeader) {
    scrollOffset = isDesktop ? 80 : 64;
  }

  // for creative projects and whatnot
  const forceScrollOffsetDesktop = store?.appData?.options?.forceScrollOffsetForSection?.[id]?.desktop || store?.appData?.options?.forceScrollOffsetDesktop;
  const forceScrollOffsetMobile = store?.appData?.options?.forceScrollOffsetForSection?.[id]?.mobile || store?.appData?.options?.forceScrollOffsetMobile;
  if (forceScrollOffsetMobile) {
    scrollOffset = +forceScrollOffsetMobile;
  }
  if (isDesktop && forceScrollOffsetDesktop) {
    scrollOffset = +forceScrollOffsetDesktop;
  }
  let ignoreNextScroll = false;
  const go = toElem => {
    if (!toElem) {
      return;
    }
    const scroller = document.getElementById('mainScroll');
    ignoreNextScroll = true;
    (0,utils_smoothScroll__WEBPACK_IMPORTED_MODULE_11__.smoothScrollTo)(scroller, toElem, options.instant ? 0 : options.scrollDuration || 400, {
      ...options,
      offset: scrollOffset,
      force: true,
      callback: () => store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('CLOSE_ALL_OVERLAYS')
    });
  };
  let version = ++sectionLoadVersion;
  const listener = (loadedId, dom) => {
    if (version !== sectionLoadVersion) {
      setTimeout(() => store_store__WEBPACK_IMPORTED_MODULE_0__["default"].off('SECTION_LOADED', listener), 0);
      return;
    }
    if (!options.instant) {
      if (loadedId !== id) {
        return;
      }
      setTimeout(() => store_store__WEBPACK_IMPORTED_MODULE_0__["default"].off('SECTION_LOADED', listener), 0);
    }
    go(loadedId === id ? dom : getSectionElement(id));
  };

  // If section has already loaded scroll to it, otherwise try to load it
  if (toElem) {
    go(toElem);
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].off('SECTION_LOADED', listener);
  } else {
    if (id === options.mainPage) {
      document.getElementById('mainScroll')?.scrollTo(0, 0);
    }
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('SECTION_LOADED', listener);
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('LOAD_SECTION', id);
  }
  if (options.instant) {
    // Remove the automatic scrolling to the desired section once the user has scrolled
    let scrollListener = () => {
      if (ignoreNextScroll) {
        ignoreNextScroll = false;
        return;
      }
      store_store__WEBPACK_IMPORTED_MODULE_0__["default"].off('SECTION_LOADED', listener);
      window.removeEventListener('scroll', scrollListener, true);
    };
    window.addEventListener('scroll', scrollListener, true);
  }
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('POP_STATE', newPage => {
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('CLOSE_ALL_OVERLAYS', {
    animate: true
  });
  // noUrlUpdate since the URL already gets updated from the native browser behaviour
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('SET_ACTIVE_PAGE', newPage, undefined, {
    noUrlUpdate: true
  });
  updateSiteContent(newPage, {
    instant: true
  });
});
let getRegionURL = async countryCode => {
  try {
    let regions = await (0,utils_bolt_appRegions__WEBPACK_IMPORTED_MODULE_10__["default"])();
    return regions[countryCode] && regions[countryCode].url;
  } catch (e) {}
};
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('LANDING', async _ref => {
  let {
    page
  } = _ref;
  updateSiteContent(page, {
    instant: true
  });
  let limitlessKey = false;
  try {
    limitlessKey = localStorage.getItem('limitlessKey');
  } catch (e) {}
  if (limitlessKey) {
    useLimitlessKey();
  }
  const store = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get();
  const socialInterstitialEnabled = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.accessNested)(store, 'appData.options.socialInterstitial', false);
  let pageType = store.appData?.pages?.[page]?.type;
  const pageNeedsApi = pageType === 'showtimes' || pageType === 'homeEnt';
  const disableGeo = pageNeedsApi && store.limitExceeded && socialInterstitialEnabled;
  if (!disableGeo) {
    await (0,utils_geoFencing__WEBPACK_IMPORTED_MODULE_8__["default"])(utils_bolt_geo__WEBPACK_IMPORTED_MODULE_9__.geoFromIP, {
      getRegionURL
    });
  }
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('CLOSE_AND_NAVIGATE', (id, e, opts) => {
  if (e && e.preventDefault) {
    e.preventDefault();
  }
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('CLOSE_NAV_MENU');
  (0,utils_bolt_index__WEBPACK_IMPORTED_MODULE_3__.navigateInternally)(id, opts);
});
function updateSiteContent(newPage, options) {
  const page = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.accessNested)(store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get(), ['appData', 'pages', newPage]);
  if (page?.type === 'showtimes') {
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('SHOWTIMES_SHOW', undefined, undefined, newPage);
  } else if (page?.type === 'homeEnt') {
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('HOMEENT_SHOW', undefined, undefined, newPage);
  } else if (page?.type === 'pressKit') {
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('PRESSKIT_SHOW', undefined, undefined, newPage);
  } else if (page?.type === 'videos') {
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('OPEN_VIDEO_OVERLAY', newPage);
  } else {
    const isSection = pages_bolt_pages__WEBPACK_IMPORTED_MODULE_7__.sections.some(p => p.id === newPage);
    const isMainScrollPage = newPage === (0,utils_bolt_index__WEBPACK_IMPORTED_MODULE_3__.getMainPage)();
    if (isSection || isMainScrollPage) {
      store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('CHANGE_ACTIVE_SECTION', newPage, options);
    }
  }
}
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('LANDING_QUERY', function () {
  let query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const store = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get();
  if (query.v && store.videos && !store.videos.preSelected) {
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().videos.set({
      preSelected: query.v
    });
  }
  if (query.debug) {
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().set({
      debugMode: true
    });
  }
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('DISABLE_SCROLLING_LOCK', () => {
  const page = document.getElementById('bolt');
  const app = document.getElementById('app');
  (0,body_scroll_lock__WEBPACK_IMPORTED_MODULE_5__.enableBodyScroll)(page);
  if (app) {
    app.style.pointerEvents = '';
  }
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('ENABLE_SCROLLING_LOCK', disablePointerEvents => {
  const page = document.getElementById('bolt');
  const app = document.getElementById('app');
  // disableBodyScroll(page);

  (0,body_scroll_lock__WEBPACK_IMPORTED_MODULE_5__.disableBodyScroll)(page, {
    allowTouchMove: el => {
      while (el && el !== document.body) {
        if (el.getAttribute('body-scroll-lock-ignore') !== null) {
          return true;
        }
        el = el.parentElement;
      }
    }
  });
  if (disablePointerEvents && app) {
    app.style.pointerEvents = 'none';
  }
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('SAFARI_MOBILE_LOCATION_SEARCH_FOCUS', () => {
  document.body.style.height = '5000px';
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('SAFARI_MOBILE_LOCATION_SEARCH_BLUR', () => {
  document.body.style.height = '100%';
});
const requestedSections = [];
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('LOAD_SECTION', id => requestedSections.push(id));
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('GET_REQUESTED_SECTIONS', () => requestedSections);
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('OPEN_RESERVED_VARIABLE_LINK', async link => {
  const lines = link?.split('\n') || [];
  for (let line of lines) {
    if (!line?.startsWith('@')) {
      continue;
    }
    let [type, ...args] = line.slice(1).split('::');
    // @date::YYYY-MM-DD as a shortcut for @filter::date::YYYY-MM-DD
    if (['date', 'format', 'time', 'exhibitor'].includes(type.toLowerCase())) {
      args.unshift(type);
      type = 'filter';
    }
    let qs = args[0];
    const store = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get();
    switch (type.toLowerCase()) {
      case 'subscriberpopup':
        const mailchimpData = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.accessNested)(store, 'appData.options.formEmbeds.popup');
        return store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('SUBSCRIBER_POPUP', mailchimpData, false);
      case 'calendarreminder':
        return store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('SHOW_CAL_REMIND');
      case 'newsletterbanner':
        return store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('TOGGLE_NEWSLETTER_BANNER', false);
      case 'preferencecentre':
        return store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('COOKIE_PREFERENCES_OPEN');
      case 'otcookiesettings':
        window.OneTrust?.ToggleInfoDisplay();
        break;
      case 'dynamicpriority':
        const hasShowtimesPage = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.accessNested)(store, 'appData.pages.boltShowtimes');
        const dualViewEnabled = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.accessNested)(store, 'appData.options.dualView');
        if (hasShowtimesPage && dualViewEnabled) {
          const hasShowtimes = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.accessNested)(store, 'showtimes.data', []);
          const hasHomeEntPage = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.accessNested)(store, 'appData.pages.boltHomeEnt');
          store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit(hasHomeEntPage && (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(hasShowtimes) ? 'HOMEENT_SHOW' : 'SHOWTIMES_SHOW');
        }
        break;
      case 'openshowtimes':
        store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('SHOWTIMES_SHOW', false, qs);
        let selectedFilters = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().showtimes?.filters?.selected;
        if (qs && selectedFilters) {
          selectedFilters.set(await (0,utils_bolt_showtimesLoader__WEBPACK_IMPORTED_MODULE_6__.getBaseFilters)(qs));
          if (store.activePage === 'boltShowtimes') {
            store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('SHOWTIMES_REFRESH');
          }
        }
        break;
      case 'filter':
        // ensure the showtimes store functions are loaded (not great)
        // await import(/* webpackChunkName: "showtimes" */ `components/bolt/showtimes/showtimes`);
        // console.log('imported');
        const [filterType, ...filterValues] = args;
        store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('FILTER_SET', filterType, filterValues, filterType !== 'date');
        store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('SHOWTIMES_REFRESH');
        break;
      case 'openhomeent':
        store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('HOMEENT_SHOW', true, qs);
        break;
      case 'videooverlay':
        const [videoId] = args;
        if (videoId) {
          store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().videos.set({
            activeVideo: null,
            preSelected: videoId
          });
        }
        const pageId = (0,utils_bolt_index__WEBPACK_IMPORTED_MODULE_3__.getPageFromVideoId)(videoId);
        store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('OPEN_VIDEO_OVERLAY', pageId);
    }
  }
});
function useLimitlessKey() {
  const limitlessKey = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.accessNested)(store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get(), 'appData.meta.powApiLimitlessKey') || 'K4xhuBoeYm59LMIDRkqIz6KKCoIV1Ikq5rLdoe3I';
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().set({
    apiKey: limitlessKey,
    usingLimitlessKey: true,
    limitExceeded: false
  });
}
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('UPDATE_API_KEY', async () => {
  useLimitlessKey();
  try {
    localStorage.setItem('limitlessKey', true);
  } catch (e) {}
});

/***/ }),

/***/ "./static/src/store/bolt/pixels.js":
/*!*****************************************!*\
  !*** ./static/src/store/bolt/pixels.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var utils_gdpr_maybeHandle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/gdpr/maybeHandle */ "./static/src/utils/gdpr/maybeHandle.js");
/* harmony import */ var utils_formatDateTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/formatDateTime */ "./static/src/utils/formatDateTime.js");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/actions */ "./static/src_overrides/studios/netflix/store/actions.js");
/* harmony import */ var utils_cached__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/cached */ "./static/src/utils/cached.js");
// import { h } from 'preact';





// import { getStaticData } from 'utils/staticData';
// import { staticPixels } from 'pages/bolt_features';

const tealiumTheaterData = theater => {
  if (!theater || typeof theater !== 'object') {
    let predicate = () => true;
    if (typeof theater === 'string') {
      predicate = t => t.id === theater;
    }
    theater = store_store__WEBPACK_IMPORTED_MODULE_3__["default"].get().showtimes.data.find(predicate);
  }
  if (!theater) {
    return;
  }
  return {
    cinemaName: theater.name,
    cinemaChain: (0,utils_utils__WEBPACK_IMPORTED_MODULE_0__.accessNested)(theater, 'chain.name'),
    location: (0,utils_utils__WEBPACK_IMPORTED_MODULE_0__.accessNested)(theater, 'address.intl.city') || (0,utils_utils__WEBPACK_IMPORTED_MODULE_0__.accessNested)(theater, 'address.local.city')
  };
};
if (false) {}

//
// Ensighten tracking
//
if (typeof window !== 'undefined' && window.__INITIAL_STATE__?.appData?.options?.enableEnsighten) {
  const ensightenPageViewTrack = pageId => {
    if (!window.__dataLayer) {
      return;
    }
    if (pageId.startsWith('bolt')) {
      pageId = pageId.substring(4);
    }
    if (pageId === 'showtimes') {
      pageId = 'tickets';
    }
    const appData = store_store__WEBPACK_IMPORTED_MODULE_3__["default"].get().appData;
    const siteName = appData.meta?.title?.slug;
    let country = appData.meta?.region?.slug;
    const pageName = _dl.page.page.replace(`:${country === 'uk' ? 'gb' : country}`, '');
    if (country === 'gb') {
      country = 'uk';
    }
    window.__dataLayer.page.page_name = _dl.site.region + ":" + _dl.site.country + ":" + _dl.site.site + ":" + pageName + pageId.toLowerCase();
    window.__dataLayer.trackPage();
  };
  const ensightenActionTrack = eventData => {
    if (!window.__dataLayer || typeof window.__dataLayer.publish !== 'function') {
      return;
    }
    const data = {
      event_name: 'click',
      actionName: eventData.action,
      ...eventData
    };
    delete data.action;
    window.__dataLayer.publish('click', {
      event_name: 'click',
      ...eventData
    });
  };
  store_store__WEBPACK_IMPORTED_MODULE_3__["default"].on('LANDING', _ref6 => {
    let {
      page
    } = _ref6;
    ensightenPageViewTrack(page);
  });
  store_store__WEBPACK_IMPORTED_MODULE_3__["default"].on('SET_ACTIVE_PAGE', activePage => {
    ensightenPageViewTrack(activePage);
  });
  store_store__WEBPACK_IMPORTED_MODULE_3__["default"].on('POWSTER_GA_PAGE_VIEW_TRACK', pageId => {
    ensightenPageViewTrack(pageId);
  });
  store_store__WEBPACK_IMPORTED_MODULE_3__["default"].on('VIDEO_PLAYER_PROGRESS', _ref7 => {
    let {
      video,
      step,
      time
    } = _ref7;
    let event = 'video_milestone';
    if (step === 0) {
      event = 'video_start';
    } else if (step === 100) {
      event = 'video_complete';
    }
    ensightenActionTrack({
      tealium_event: event,
      video_playhead: time,
      video_id: video,
      video_platform: 'YouTube'
    });
  });
  store_store__WEBPACK_IMPORTED_MODULE_3__["default"].on('SELECT_THEATER', (theater, source) => {
    ensightenActionTrack({
      action: source === 'map' ? 'placeSelectFromMap' : 'cinemaSelect',
      ...tealiumTheaterData(theater)
    });
  });
  store_store__WEBPACK_IMPORTED_MODULE_3__["default"].on('SELECT_TIME', (data, page) => {
    if (!page) page = 'tickets';
    const {
      screening,
      theater
    } = data;
    if (!screening || !theater) {
      return;
    }
    let dateTime = null;
    if (screening.date) {
      dateTime = (0,utils_utils__WEBPACK_IMPORTED_MODULE_0__.parseDate)(screening.date);
      dateTime.setHours(...screening.time.split(':'));
    }
    ensightenActionTrack({
      action: 'timeSelect',
      ...tealiumTheaterData(theater),
      targetLink: screening.link.direct,
      format: screening.format,
      showDateTime: dateTime?.toISOString(),
      dateSelected: screening.date
    });
  });
  store_store__WEBPACK_IMPORTED_MODULE_3__["default"].on('SET_USER_LOCATION', (data, source) => {
    if (source === 'suggestion') {
      ensightenActionTrack({
        action: 'cinemaSearch',
        searchPhrase: data && data.city
      });
    }
  });
  store_store__WEBPACK_IMPORTED_MODULE_3__["default"].on('USER_LOCATION_UPDATED', async _ref8 => {
    let {
      geo,
      source
    } = _ref8;
    if (source === 'landing' || !geo) {
      return;
    }
    if (source === 'nearby') {
      ensightenActionTrack({
        action: 'moreShowTimes',
        location: geo.city
      });
    }
  });
  store_store__WEBPACK_IMPORTED_MODULE_3__["default"].on('FILTER_SET', (filter, value) => {
    if (filter === 'date') {
      ensightenActionTrack({
        action: 'dateSelect',
        dateSelected: value
      });
    }
  });
  store_store__WEBPACK_IMPORTED_MODULE_3__["default"].on('FILTER_TOGGLE', (filter, value) => {
    if (filter === 'format') {
      ensightenActionTrack({
        action: 'formatSelect',
        format: value
      });
    }
  });
  store_store__WEBPACK_IMPORTED_MODULE_3__["default"].on('TRACK_NAV_LINK_CLICK', linkName => {
    if (linkName) {
      ensightenActionTrack({
        action: 'menuSelect',
        actionValue: linkName
      });
    }
  });
}
store_store__WEBPACK_IMPORTED_MODULE_3__["default"].on('ENSIGHTEN_VIDEO_PLAY', data => {
  if (!window.__dataLayer || typeof window.__dataLayer.publish !== 'function') {
    return;
  }
  const showName = store_store__WEBPACK_IMPORTED_MODULE_3__["default"].get().appData.meta.title.slug;
  let eventData = {
    'mediaItem.show.name': showName,
    'mediaItem.title': data.videoTitle
  };
  window.__dataLayer.publish('dtci.media', ['dtci.play', eventData, null]);
});

/***/ }),

/***/ "./static/src/store/bolt/subscriberPopup.js":
/*!**************************************************!*\
  !*** ./static/src/store/bolt/subscriberPopup.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var utils_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/cookies */ "./static/src/utils/cookies.js");


const cookies = {
  closed: 'MCPopupClosed',
  subscribed: 'MCPopupSubscribed'
};
const showMailchimpPopup = (mailchimpData, isLanding) => {
  try {
    const {
      baseUrl,
      lid,
      uuid,
      landingDelay,
      ignoreClosedCookie,
      ignoreSubscribedCookie
    } = mailchimpData;
    if (ignoreClosedCookie) {
      (0,utils_cookies__WEBPACK_IMPORTED_MODULE_1__.setCookie)(cookies.closed, '', -1000);
    }
    if (ignoreSubscribedCookie) {
      (0,utils_cookies__WEBPACK_IMPORTED_MODULE_1__.setCookie)(cookies.subscribed, '', -1000);
    }
    const cookiePopupClosed = (0,utils_cookies__WEBPACK_IMPORTED_MODULE_1__.getCookie)(cookies.closed);
    const cookieSubscribed = (0,utils_cookies__WEBPACK_IMPORTED_MODULE_1__.getCookie)(cookies.subscribed);
    if (isLanding) {
      if (!cookiePopupClosed) {
        setTimeout(() => triggerPopup(baseUrl, lid, uuid), landingDelay * 1000);
      }
    } else {
      if (cookiePopupClosed) {
        (0,utils_cookies__WEBPACK_IMPORTED_MODULE_1__.setCookie)(cookies.closed, '', -1000);
      }
      if (cookieSubscribed) {
        (0,utils_cookies__WEBPACK_IMPORTED_MODULE_1__.setCookie)(cookies.subscribed, '', -1000);
      }
      triggerPopup(baseUrl, lid, uuid);
    }
  } catch (e) {}
};
const triggerPopup = (baseUrl, lid, uuid) => {
  if (typeof window.dojoRequire !== undefined) {
    mailchimpPopup(baseUrl, lid, uuid);
  } else {
    const untilDojoRequireIs = setInterval(() => {
      if (typeof window.dojoRequire !== undefined) {
        clearInterval(untilDojoRequireIs);
        mailchimpPopup(baseUrl, lid, uuid);
      }
    }, 200);
  }
};
const mailchimpPopup = (baseUrl, lid, uuid) => {
  window.dojoRequire(['mojo/signup-forms/Loader'], L => L.start({
    baseUrl,
    uuid,
    lid,
    uniqueMethods: true
  }));
};
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('SUBSCRIBER_POPUP', (mailchimpData, isLanding) => {
  showMailchimpPopup(mailchimpData, isLanding);
});

/***/ }),

/***/ "./static/src/store/bolt/trackingV2.js":
/*!*********************************************!*\
  !*** ./static/src/store/bolt/trackingV2.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fire: () => (/* binding */ fire),
/* harmony export */   getStaticPixels: () => (/* binding */ getStaticPixels),
/* harmony export */   getVariables: () => (/* binding */ getVariables),
/* harmony export */   init: () => (/* binding */ init),
/* harmony export */   register: () => (/* binding */ register)
/* harmony export */ });
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var utils_cached__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/cached */ "./static/src/utils/cached.js");
/* harmony import */ var utils_gdpr_categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/gdpr/categories */ "./static/src/utils/gdpr/categories.js");
/* harmony import */ var utils_runHTMLScripts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/runHTMLScripts */ "./static/src/utils/runHTMLScripts.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");





const isProd =  true && !true;
const showLogs = typeof window !== 'undefined' && /[?&]powdebug([&=]|$)/i.test(location.search);
function log() {
  if (!showLogs) {
    return;
  }
  // Note: logs will not show up on prod because of the drop_console terser option in webpack
  // Is there a way to bypass that for this line specifically ?
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  console.log('[PowDebug]', ...args);
}
function logPixel(icon, message, pixel, code) {
  log(...[icon, pixel.static && 'static', pixel.type, 'pixel', pixel.id && '[' + pixel.id + ']', pixel.category && '(' + pixel.category + ')', message, code && '\nExecuted Code:',
  // Converting code to string hides things in the case of bound functions, but passing it to console.log shows the source
  code].filter(e => e));
}
let _init;
let _getStaticPixels;
let _register;
let _fire;
let _getVariables;
if (true) {
  const pixels = {};
  const queues = {};
  const shouldUsePixel = pixel => pixel?.code && !(pixel.prodOnly && ( false || true));
  const register = (pixel, id) => {
    if (!shouldUsePixel(pixel) || !pixel.trigger || pixel.static) {
      return;
    }
    if (!pixel.id && id) {
      pixel.id = id;
    }
    let trigger = pixel.trigger;
    if (trigger === 'pageView' && pixel.page) {
      trigger += ':' + pixel.page;
    }
    if (!pixels[trigger]) {
      pixels[trigger] = [];
    }
    pixels[trigger].push(pixel);
  };
  const addToQueue = (category, code) => {
    if (!queues[category]) {
      queues[category] = [];
    }
    queues[category].push(code);
  };
  const withVariables = (code, variables) => {
    if (!variables) {
      return code;
    }
    if (typeof code === 'function') {
      return code.bind(null, variables);
    }
    return code?.replace?.(/(\\)?\{\{(.+?)\}\}/g, (match, escaped, variable) => {
      if (escaped) {
        return '{{' + variable + '}}';
      }
      let raw = false;
      if (variable[0] === '=') {
        raw = true;
        variable = variable.slice(1);
      }
      // TODO: add way to specify default value (e.g. {{variable:default}})
      if (!Object.prototype.hasOwnProperty.call(variables, variable)) {
        return match;
      }
      if (raw || typeof variables[variable] !== 'string') {
        return variables[variable];
      }
      return JSON.stringify(variables[variable]).slice(1, -1).replace(/\\"/g, '"').replace(/'/g, '\\\'').replace(/<\/script>/ig, '<\\/script>').replace(/<!--/ig, '<\\!--');
    }) || '';
  };
  const runCode = async code => {
    try {
      if (typeof code === 'function') {
        await code();
        return;
      }
      // Handle HTML tags vs simple JS
      // Should this be checked in runHTMLScripts directly?
      if (/^\s*</.test(code)) {
        await (0,utils_runHTMLScripts__WEBPACK_IMPORTED_MODULE_3__["default"])(code);
      } else {
        // (0, eval) to run the code in the global context
        //   and make sure they cannot access/modify stuff like the "queues" variable
        (0, eval)(code);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Inserts the pixel code to the page
  const fire = async function (type) {
    let variables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!pixels[type]) {
      // log(`no pixels fired for event: ${type}`);
      return;
    }
    log(`--- FIRING PIXELS FOR EVENT: ${type} ---`);
    for (let pixel of pixels[type]) {
      if (pixel.once && pixel.triggered) {
        return;
      }
      pixel.triggered = (pixel.triggered || 0) + 1;
      let code = withVariables(pixel.code, variables);
      if (!pixel.category || utils_gdpr_categories__WEBPACK_IMPORTED_MODULE_2__.has(pixel.category)) {
        logPixel('✔️⚡', 'fired', pixel, code);
        await runCode(code);
      } else {
        logPixel('🛑🍪', `stopped from firing. Pixel Category: ${pixel.category} not within accepted categories (${utils_gdpr_categories__WEBPACK_IMPORTED_MODULE_2__.toString()})${pixel.useQueue ? '. The pixel was queued and will fire if the desired category is accepted later' : ''}`, pixel);
        if (pixel.useQueue) {
          addToQueue(pixel.category, [pixel, code]);
        }
      }
    }
  };
  utils_gdpr_categories__WEBPACK_IMPORTED_MODULE_2__.addChangeListener(cats => {
    log(`🍪📃 Accepted cookie categories changed. New accepted categories: ${cats.join(',')}`);
    cats.forEach(async category => {
      if (!queues[category]) {
        return;
      }
      for (let [pixel, code] of queues[category]) {
        logPixel('✔️⚡', 'fired from queue', pixel, code);
        await runCode(code);
      }
      queues[category].length = 0;
    });
  });

  // Cache the variables that will never change over time
  const getStaticBaseVariables = (0,utils_cached__WEBPACK_IMPORTED_MODULE_1__["default"])(() => {
    let appData = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().appData;
    const debug_mode = !isProd;
    const movieTitle = appData?.meta?.title?.locale;
    const app = movieTitle + ' - ' + "us".toUpperCase();
    return {
      movieTitle,
      app,
      movie: "the-real-squid-game",
      studioName: appData?.meta?.studio?.name,
      studio: "netflix",
      region: "us",
      releaseDate: appData?.meta?.dates?.release,
      boxOfficeDate: appData?.meta?.dates?.boxOffice,
      vanityUrl: appData?.meta?.url,
      domain: typeof window !== 'undefined' ? location.host : '',
      debug_mode
    };
  });
  let customVariables = {};
  const getVariables = eventSpecific => {
    const store = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get();
    const activePage = store.activePage;
    let customExpanded = Object.fromEntries(Object.entries(customVariables).map(_ref => {
      let [name, value] = _ref;
      if (typeof value === 'string') {
        if (value[0] === '@') {
          value = value.slice(1).split('.').reduce((r, p) => r?.[p], store);
        } else if (value[0] === '=') {
          value = value.slice(1);
        }
      }
      return [name, value];
    }));
    const result = {
      ...getStaticBaseVariables(),
      page: activePage,
      pageName: getPageName(activePage),
      ...customExpanded,
      ...eventSpecific
    };
    return (0,utils_utils__WEBPACK_IMPORTED_MODULE_4__.escapeObjectValues)(result);
  };
  const getPageName = pageId => {
    const appData = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().appData;
    let nameValue = appData?.pages?.[pageId]?.name;
    if (nameValue) {
      return appData.copy?.baseCopy?.[nameValue] || nameValue;
    }
    // boltHomeEnt -> homeEnt
    const pageWithoutBolt = pageId.replace(/^bolt([A-Z])/, (m, l) => l.toLowerCase());
    // homeEnt -> Home Ent
    return pageWithoutBolt.replace(/^([a-z])|([a-z])([A-Z])/g, (m, first, wordEnd, nextWord) => first?.toUpperCase() || `${wordEnd} ${nextWord}`);
  };

  // -- TRIGGERS --
  const firePageView = page => {
    let variables = getVariables({
      page,
      pageName: getPageName(page)
    });
    fire('pageView', variables);
    fire('pageView:' + page, variables);
  };
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('LANDING', _ref2 => {
    let {
      page
    } = _ref2;
    const loadTime = Math.round(window.startLoadTime);
    let variables = getVariables({
      page,
      pageName: getPageName(page),
      loadTime
    });
    fire('landing', variables);
    firePageView(page);
    fire('timingComplete', variables);
  });
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('ACTIVE_PAGE_UPDATED', firePageView);
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('TICKET_CONVERSION', _ref3 => {
    let {
      date,
      time,
      format,
      provider,
      theater,
      source,
      conversion,
      day,
      url,
      movieTitle,
      movieSlug,
      ticketType = 'tickets'
    } = _ref3;
    return fire('ticket', getVariables({
      theater: theater?.name,
      chain: theater?.chain?.name,
      screeningDate: date,
      screeningTime: time,
      format,
      ticketProvider: provider,
      source,
      conversion,
      day,
      url,
      screeningMovie: movieSlug,
      screeningMovieTitle: movieTitle,
      ticketType
    }));
  });

  /** Home Ent Events */
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('HOME_ENT_CONVERSION', _ref4 => {
    let {
      product,
      merchant,
      selectedFormat,
      region,
      availability,
      dataProvider
    } = _ref4;
    return fire('homeEntLinkOut', getVariables({
      merchant,
      region,
      availability,
      format: selectedFormat,
      edition: product.edition,
      price: product.price,
      dataProvider
    }));
  });
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('HOME_ENT_MERCHANT_SELECT', _ref5 => {
    let {
      merchant,
      region
    } = _ref5;
    return fire('homeEntMerchantSelection', getVariables({
      merchant,
      region
    }));
  });
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('HOME_ENT_FORMAT_SELECT', format => fire('homeEntFormatSelection', getVariables({
    format
  })));
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('HOME_ENT_PROVIDER_ATTRIBUTION_CLICK', provider => fire('homeEntProviderClick', getVariables({
    provider
  })));

  /** Social Events */
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('CLICKED_SHARE', _ref6 => {
    let {
      label
    } = _ref6;
    return fire('socialShare', getVariables({
      socialSharePlatform: label
    }));
  });
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('CLICKED_FOLLOW', label => fire('socialFollow', getVariables({
    socialFollowPlatform: label
  })));

  /* Synopsis Events */
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('SYNOPSIS_ENLARGE_IMAGE', imageName => fire('synopsisImageEnlarge', getVariables({
    synopsisImage: imageName
  })));
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('SYNOPSIS_DOWNLOAD_IMAGE', imageName => fire('synopsisImageDownload', getVariables({
    synopsisImage: imageName
  })));

  /* Gallery Events */
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('GALLERY_VIEW_IMAGE', activeImage => fire('galleryImageView', getVariables({
    galleryImage: activeImage
  })));
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('GALLERY_DOWNLOAD_IMAGE', activeImage => fire('galleryImageDownload', getVariables({
    galleryImage: activeImage
  })));
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('GALLERY_DOWNLOAD_ALL', () => fire('galleryImageDownloadAll', getVariables()));

  /* Showtimes / Tickets Maps Events */
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('MAP_REQUEST_DIRECTIONS', travelMode => fire('showtimeMapRequestDirections', getVariables({
    travelMode: travelMode.toLowerCase()
  })));

  /* Region Selector Events */
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('REGION_SELECTOR_CLICKED', (origin, destination) => fire('regionSelectorClick', getVariables({
    origin,
    destination
  })));

  /* Video Events */

  /* Tout Events */
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('TOUT_CLICK', (toutType, _, toutLabel) => fire('toutSelectionClick', getVariables({
    toutType,
    toutLabel
  })));

  /* Expandable Text List */
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('TEXT_LIST_CLICK', name => fire('textListClick', getVariables({
    name
  })));

  /* Notification Banner */
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('NOTIFICATION_BANNER_CLICK', (page, _, label) => fire('notificationBannerClick', getVariables({
    page,
    label
  })));

  /* Landing Page Events */
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('MOVIE_DETAILS_BUTTON_CLICK', (page, label) => fire('movieDetailsButtonClick', getVariables({
    page,
    label
  })));
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('HEADER_PERSISTENT_BUTTON_CLICK', (action, category, label) => fire('headerPersistentButtonClick', getVariables({
    label
  })));
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('SHOW_CAL_REMIND', () => fire('showCalendarReminder', getVariables()));
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('TOGGLE_SHARE_OPEN', () => fire('openShareDialog', getVariables()));
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('SELECT_TIME', _ref7 => {
    let {
      screening,
      theater,
      ticketType = 'tickets'
    } = _ref7;
    const {
      date,
      time,
      format
    } = screening;
    const {
      name,
      chain
    } = theater;
    const chainName = chain?.name;
    fire('showtimeSelectTime', getVariables({
      name,
      chainName,
      date,
      time,
      format,
      ticketType
    }));
  });
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('SELECT_THEATER', function (theater, _) {
    let ticketType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'tickets';
    const name = theater.name || '';
    const chain = theater?.chain?.name || '';
    const theaterChainName = name + '-' + chain;
    fire('showtimeSelectTheater', getVariables({
      theaterChainName,
      ticketType
    }));
  });
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('GROUP_BOOKINGS_INQUIRE', theater => {
    const name = theater.name || '';
    const chain = theater?.chain?.name || '';
    const theaterChainName = name + '-' + chain;
    fire('groupBookingsInquire', getVariables({
      theaterChainName
    }));
  });
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('GROUP_BOOKINGS_NAVIGATE_STAGES', direction => {
    fire('groupBookingsNavigateStages', getVariables({
      direction
    }));
  });
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('GROUP_BOOKINGS_SUBMIT', theater => {
    const name = theater.name || '';
    const chain = theater?.chain?.name || '';
    const theaterChainName = name + '-' + chain;
    fire('groupBookingsSubmit', getVariables({
      theaterChainName
    }));
  });
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('WRONG_REGION', (region, ticketType) => fire('wrongRegion', getVariables({
    region,
    ticketType
  })));
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('SHOWTIMES_ERROR', ticketType => fire('showtimesError', getVariables({
    ticketType
  })));
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('SHOWTIMES_EMPTY', (region, ticketType) => {
    const {
      countryCode = '',
      city = ''
    } = region;
    fire('showtimesEmpty', getVariables({
      countryCode,
      city,
      ticketType
    }));
  });
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('FILTER_SELECTED_TIME', function (times) {
    let ticketType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'tickets';
    return fire('showtimesFilterSelectedTime', getVariables({
      times,
      ticketType
    }));
  });
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('FILTER_SELECTED_DAY', function (date) {
    let ticketType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'tickets';
    return fire('showtimesFilterSelectedDay', getVariables({
      date,
      ticketType
    }));
  });
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('FILTER_SELECTED_FORMAT', function (formats) {
    let ticketType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'tickets';
    return fire('showtimesFilterSelectedFormat', getVariables({
      formats,
      ticketType
    }));
  });
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('SET_USER_LOCATION', (_, source, ticketType) => fire('showtimesSetUserLocation', getVariables({
    source,
    ticketType
  })));
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('GEO_FROM_IP', (geo, ticketType) => {
    const {
      countryCode = '',
      city = ''
    } = geo;
    fire('showtimesGeoFromIP', getVariables({
      countryCode,
      city,
      ticketType
    }));
  });
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('USER_LOCATION_UPDATED', _ref8 => {
    let {
      geo,
      source,
      ticketType = 'tickets'
    } = _ref8;
    if (source === 'landing' || !geo) {
      return;
    }
    const {
      city = '',
      countryCode = ''
    } = geo;
    fire('showtimesUserLocationUpdated', getVariables({
      city,
      countryCode,
      ticketType
    }));
  });
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('CALENDAR_CLICKED', _ref9 => {
    let {
      label
    } = _ref9;
    return fire('calendarReminder', getVariables({
      calendarLabel: label
    }));
  });

  /* Video Events */
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('VIDEO_PLAYER_PROGRESS', _ref10 => {
    let {
      platform,
      video,
      step,
      isShowtimesMessage,
      isTrailerOverlay
    } = _ref10;
    const progress = step === 95 ? 100 : step;
    let type = isTrailerOverlay ? 'trailer' : 'videos';
    fire('videoProgress', getVariables({
      video,
      platform,
      progress,
      type,
      showtimesMessage: isShowtimesMessage ? 'true' : 'false'
    }));
  });

  /* Photobooth Events */
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('START_PHOTOBOOTH', () => fire('photoboothStart'));
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('PHOTOBOOTH_GRANT_CAMERA_ACCESS', () => fire('photoboothAllowCameraAccess'));
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('PHOTOBOOTH_DENY_CAMERA_ACCESS', () => fire('photoboothDenyCameraAccess'));
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('PHOTOBOOTH_USE_CAMERA', () => fire('photoboothUseCamera'));
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('PHOTOBOOTH_UPLOAD', () => fire('photoboothUpload'));
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('PHOTOBOOTH_PHOTO_CAPTURED', () => fire('photoboothPhotoCaptured'));
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('PHOTOBOOTH_IMAGE_UPLOADED', () => fire('photoboothImageUploaded'));
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('SHARE_PHOTOBOOTH_IMAGE', () => fire('photoboothShare'));
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('DOWNLOAD_PHOTOBOOTH_IMAGE', () => fire('photoboothDownload'));
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('PHOTOBOOTH_SOCIAL_CLICK', _ref11 => {
    let {
      platform
    } = _ref11;
    return fire('photoboothSocialClick', getVariables({
      platform
    }));
  });
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('PHOTOBOOTH_RESTART', () => fire('photoboothRestart'));

  /* QuizPhotobooth Events */
  // Store.on('TRACK_QUIZPHOTOBOOTH_VIEW', (cat) => fire('view', cat, '-'));
  // Store.on('TRACK_QUIZPHOTOBOOTH_NAME_CLICK', () => fire('name-click', 'name', '-'));
  // Store.on('TRACK_QUIZPHOTOBOOTH_START_CLICK', () => fire('start-button-click', 'name', '-'));
  // Store.on('TRACK_QUIZPHOTOBOOTH_ANSWER_CLICK', ({ questionNum, answer }) => fire('answer-click', 'quiz', `question-${questionNum}_${answer}`));
  // Store.on('TRACK_QUIZPHOTOBOOTH_RESULT_REVEAL', (result) => fire('result-reveal', 'results', result));
  // Store.on('TRACK_QUIZPHOTOBOOTH_RESULT_SHARE', () => fire('result-share-cta', 'results', '-'));
  // Store.on('TRACK_QUIZPHOTOBOOTH_UPLOAD_OR_TAKE_PHOTO', (action) => fire('photo-options-click', 'results', action));
  // Store.on('TRACK_QUIZPHOTOBOOTH_CAMERA_PERMISSIONS', (allowOrDeny) => fire('camera-permissions', 'camera', allowOrDeny));
  // Store.on('TRACK_QUIZPHOTOBOOTH_CAPTURE_PHOTO', () => fire('photo-capture-click', 'camera', '-'));
  // Store.on('TRACK_QUIZPHOTOBOOTH_FLIP_CAMERA', () => fire('flip-camera', 'camera', '-'));
  // Store.on('TRACK_QUIZPHOTOBOOTH_RETAKE_OR_CONTINUE', (retakeOrContinue) => fire('resize-button-click', 'resize', retakeOrContinue));
  // Store.on('TRACK_QUIZPHOTOBOOTH_PINCH_ZOOM', () => fire('pinch-zoom', 'resize', '-'));
  // Store.on('TRACK_QUIZPHOTOBOOTH_ZOOM_CLICK', (plusOrMinus) => fire('zoom-click', 'resize', plusOrMinus));
  // Store.on('TRACK_QUIZPHOTOBOOTH_ROTATE_TWIST', () => fire('rotate-twist', 'resize', '-'));
  // Store.on('TRACK_QUIZPHOTOBOOTH_ROTATE_CLICK', (dir) => fire('rotate-click', 'resize', dir));
  // Store.on('TRACK_QUIZPHOTOBOOTH_RESULT_REVEAL_NO_INTERSTITIAL', () => fire('result-share-cta', 'shareable', '-'));
  // Store.on('TRACK_QUIZPHOTOBOOTH_CAROUSEL_SWIPE', () => fire('share-card-carousel-swipe', 'shareable', '-'));
  // Store.on('TRACK_QUIZPHOTOBOOTH_SHARE_CARD_CLICK', () => fire('share-card-click', 'shareable', '-'));
  // Store.on('TRACK_QUIZPHOTOBOOTH_REDO_CLICK', () => fire('redo-click', 'shareable', '-'));
  // Store.on('TRACK_QUIZPHOTOBOOTH_ERROR_BACK', (screen) => fire('error-screen-back', `${screen}-error`, 'back-home'));
  // Store.on('TRACK_QUIZPHOTOBOOTH_LOGO_CLICK', () => fire('logo-home', 'header', 'back-home'));

  /* Custom Event - for single app GA tracking */
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('CUSTOM_EVENT', _ref12 => {
    let {
      category,
      action,
      label
    } = _ref12;
    fire('customEvent', getVariables({
      category,
      action,
      label
    }));
  });
  _init = data => {
    if (!data) {
      return;
    }
    if (data.variables) {
      customVariables = data.variables;
    }
    Object.entries(data).forEach(_ref13 => {
      let [id, pixel] = _ref13;
      return register(pixel, id);
    });
  };
  _getStaticPixels = data => {
    let variables = getVariables();
    return Object.values(data).filter(pixel => shouldUsePixel(pixel) && pixel.static).map(pixel => withVariables(pixel.code, variables));
  };
  _register = register;
  _fire = fire;
  _getVariables = getVariables;
}
function init(data) {
  return _init?.(data);
}
function getStaticPixels(data) {
  return _getStaticPixels?.(data);
}
function register() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  return _register?.(...args);
}
function fire() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }
  return _fire?.(...args);
}
function getVariables() {
  for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }
  return _getVariables?.(...args);
}

/***/ }),

/***/ "./static/src/store/bolt/trailerOverlay.js":
/*!*************************************************!*\
  !*** ./static/src/store/bolt/trailerOverlay.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");

store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('ENABLE_TRAILER_OVERLAY', video => {
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('TOGGLE_TRAILER_OVERLAY', !!video, video);
});
store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('TOGGLE_TRAILER_OVERLAY', (open, video) => {
  if (!store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().trailerOverlay) {
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().set({
      trailerOverlay: {}
    });
  }
  if (typeof open !== 'boolean') {
    open = !store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().trailerOverlay.overlayOpen;
  }
  const data = video ? {
    video
  } : store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().appData?.options?.videoOverlay;
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().trailerOverlay.set({
    overlayOpen: open,
    data
  });
  if (open) {
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().trailerOverlay.set({
      overlayTriggered: true
    });
  }
  store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit(open ? 'ENABLE_SCROLLING_LOCK' : 'DISABLE_SCROLLING_LOCK');
  if (open) {
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('SET_HEADER_ACTION', {
      icon: 'close',
      action: () => store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('TOGGLE_TRAILER_OVERLAY', false),
      tag: 'closeTrailerOverlay'
    });
  } else {
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('REMOVE_HEADER_ACTIONS', 'closeTrailerOverlay');
  }
});

/***/ }),

/***/ "./static/src/store/store.js":
/*!***********************************!*\
  !*** ./static/src/store/store.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var freezer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! freezer-js */ "./node_modules/freezer-js/freezer.js");
/* harmony import */ var freezer_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(freezer_js__WEBPACK_IMPORTED_MODULE_0__);

const Store = new (freezer_js__WEBPACK_IMPORTED_MODULE_0___default())({}, {
  // live: true
});
Store.on('afterAll', function (reactionName) {
  // UNCOMMENT THIS TO LOG EVENTS
  //   PLEASE COMMENT BACK BEFORE PUSHING
  // console.log(...arguments);

  if (reactionName === 'update') {
    return;
  }
  dispatch(reactionName);
});
Store.on(undefined, () => {
  // console.trace();
  throw new Error('Undefined action! Please define your actions!');
});
function dispatch(eventName) {
  if (typeof window === 'undefined' || typeof Event !== 'function' || !window.dispatchEvent) {
    return;
  }
  const event = new Event(eventName);
  window.dispatchEvent(event);
}
if (typeof window !== 'undefined') {
  window.Store = Store;
  dispatch('NEW_STORE');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Store);

/***/ }),

/***/ "./static/src/utils/assets.js":
/*!************************************!*\
  !*** ./static/src/utils/assets.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IMAGE_REGION_ROOT_DYNAMIC: () => (/* binding */ IMAGE_REGION_ROOT_DYNAMIC),
/* harmony export */   useDynamicAssetFolder: () => (/* binding */ useDynamicAssetFolder)
/* harmony export */ });
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");

const IMAGE_REGION_ROOT_DYNAMIC = '%IMAGE_REGION_ROOT_DYNAMIC%';
function useDynamicAssetFolder(path) {
  if (!path || typeof path !== 'string') {
    return path;
  }
  const store = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get();
  const imageRegionRoot = store?.appData?.urls?.roots?.imageRegion;
  const assetUpdateDateTime = store?.appData?.options?.useAssetUpdateDateTime;
  let newRoot = imageRegionRoot;
  if (assetUpdateDateTime && Date.now() > assetUpdateDateTime) {
    newRoot += '/updates';
  }
  return path.replace(/%IMAGE_REGION_ROOT_DYNAMIC%/g, newRoot);
}

/***/ }),

/***/ "./static/src/utils/bolt/api.js":
/*!**************************************!*\
  !*** ./static/src/utils/bolt/api.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   api: () => (/* binding */ api),
/* harmony export */   homeEntApi: () => (/* binding */ homeEntApi),
/* harmony export */   imageShareApi: () => (/* binding */ imageShareApi),
/* harmony export */   userFeedbackApi: () => (/* binding */ userFeedbackApi)
/* harmony export */ });
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var utils_parseQueryString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/parseQueryString */ "./static/src/utils/parseQueryString.js");



async function api(endpoint) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let fetchOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (typeof window === 'undefined') {
    throw new Error('Trying to request server-side');
  }
  fetchOptions.headers = fetchOptions.headers || {};
  if (!fetchOptions.headers['content-type']) {
    fetchOptions.headers['content-type'] = 'application/json';
  }
  fetchOptions.referrer = '';

  // Move lat/lon to headers
  if (options.lon && options.lat) {
    fetchOptions.headers['x-requested-lat'] = options.lat;
    fetchOptions.headers['x-requested-lon'] = options.lon;
    options = {
      ...options,
      lat: undefined,
      lon: undefined
    };
  }
  // Move bounding regions to headers
  if (options.countries) {
    fetchOptions.headers['x-requested-countries'] = options.countries;
    options = {
      ...options,
      countries: undefined
    };
  }
  // Move location approximation (used for caching - typically city name) to headers
  if (options.approxPos) {
    fetchOptions.headers['x-requested-approxpos'] = options.approxPos.replace(/[^ -~]/g, '');
    options = {
      ...options,
      approxPos: undefined
    };
  }
  const store = store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get();
  let topPages = Object.entries(store.appData.pages);
  let pagesAndSubpages = topPages.concat(topPages?.flatMap(_ref => {
    let [id, p] = _ref;
    return p.type === 'filmPage' && Object.values(p?.data || {}).map(e => [id, e]);
  })).filter(e => e);
  let showtimesPages = pagesAndSubpages.filter(_ref2 => {
    let [, page] = _ref2;
    return page.type === 'showtimes';
  });
  let [, showtimesPage] = showtimesPages.find(_ref3 => {
    let [id] = _ref3;
    return id === store.activePage;
  }) || showtimesPages[0] || [];
  const apiUsageInterstetialEnabled = store.appData?.options?.apiUsageInterstetial;
  const spreadsheetId = showtimesPage?.data?.spreadsheetId;
  let useV2 = showtimesPage?.data?.useV2 ?? true;
  if ('useV2' in fetchOptions) {
    useV2 = fetchOptions.useV2;
    fetchOptions = {
      ...fetchOptions,
      useV2: undefined
    };
  }
  const expandedTheater = store?.showtimes?.inCinemaDetailView;
  if (expandedTheater) {
    options.include_theaters = expandedTheater;
  }

  // Create required rules
  // Note: rules should be added in utils/bolt/showtimes, like other options (avoids adding it to all endpoints)
  const rules = (0,utils_utils__WEBPACK_IMPORTED_MODULE_0__.accessNested)(store, 'appData.pages.boltShowtimes.data.rules', {});
  if (rules.changesSheet?.id && rules.changesSheet?.name) {
    options.rules_groups = [`manualEntry::${rules.changesSheet?.id}::${rules.changesSheet?.name}`].concat(options.rules_groups || []);
  }
  if (rules.customRule?.name) {
    const parameters = rules.customRule.parameters;
    const normParameters = parameters ? `::${parameters.replace(/\s*,\s*/ig, '::')}` : '';
    options.rules_groups = [`${rules.customRule.name}${normParameters}`].concat(options.rules_groups || []);
  }
  if (Object.keys(rules).length >= (rules.customRule ? 1 : 0)) {
    let id = store.appData?.meta?.id;
    let activePagePath = store.appData?.pages?.[store.activePage]?.path;
    options.rules_groups = [['appId', id, activePagePath].join('::')].concat(options.rules_groups || []);
  }

  // backward compatibility for builds without API keys
  let host = 'https://showtimes.s-prod.pow.io/v1.1';
  if (store.apiKey && apiUsageInterstetialEnabled) {
    fetchOptions.headers['X-API-Key'] = store.apiKey;
    host = 'https://showtimes.pow.io/v1.1';
  }
  if (useV2) {
    host = 'https://showtimes-v2.s-prod.pow.io/v2.0';
  }
  if (spreadsheetId) {
    const isAltered = ['/filters', '/location', '/screenings/more', 'chain/more'].find(x => endpoint.indexOf(x) !== -1);
    if (true) endpoint = endpoint.replace('dummy/', '');
    if (isAltered) {
      delete fetchOptions.headers['X-API-Key'];
      host = `https://geolocated-results.s-prod.pow.io/v1.0/${spreadsheetId}`;
    }
  }
  if (true) {
    let qs = (0,utils_parseQueryString__WEBPACK_IMPORTED_MODULE_2__["default"])();
    if (qs.localserver) {
      host = host.endsWith('v1.1') ? 'http://localhost:3000/v1.1' : 'http://localhost:3300/v2.0';
    }
    //Only used for showtimes rules which are not impelemented yet
    // if (useV2 && !qs.regularCache) {
    // 	fetchOptions.headers['pow-cache-include'] = 'theatersCore';
    // 	// fetchOptions.headers['x-pow-cache-include'] = 'theatersCore';
    // }
    if (qs.serverDebugLogs) {
      options.debugLogs = true;
    }
  }
  // host = 'http://localhost:3000/v1.1';
  // host = 'http://localhost:3000/v2.0';
  // host = 'https://showtimes-v2.s-test.pow.io/v2.0';
  // ^ to test with your local server

  if (store.limitExceeded) {
    store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit('LIMIT_EXCEEDED', true);
    throw 429;
  }

  // let minimum = new Promise((resolve) => setTimeout(resolve, 250));
  // let [res] = await Promise.all([
  // 	fetch(joinPaths(`${host}`, endpoint) + toQueryString(options), fetchOptions),
  // 	minimum
  // ]);
  let res = await fetch((0,utils_utils__WEBPACK_IMPORTED_MODULE_0__.joinPaths)(host, endpoint) + (0,utils_utils__WEBPACK_IMPORTED_MODULE_0__.toQueryString)(options), fetchOptions);
  if (!res.ok) {
    if (res.status === 429 && !store.usingLimitlessKey) {
      let limitlessKeyPreviouslyUsed = false;
      try {
        limitlessKeyPreviouslyUsed = localStorage.getItem('limitlessKey');
      } catch (e) {}
      if (limitlessKeyPreviouslyUsed) {
        store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit('UPDATE_API_KEY');
      } else {
        store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get().set({
          limitExceeded: true
        });
        store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit('LIMIT_EXCEEDED', true);
      }
    }
    throw res.status || res.error || res;
  }
  return res.json();
}
async function homeEntApi(dataToSend) {
  if (typeof window === 'undefined') {
    throw new Error('Trying to request server-side');
  }
  const {
    justWatchId,
    jwRegion,
    jwFilmIdType,
    fafId,
    thundrData,
    useDummyData
  } = dataToSend;
  const baseUrl = 'https://homeent.s-prod.pow.io/bolt-home-ent';
  const query = {};
  if (justWatchId && jwRegion) {
    query.jwFilmId = justWatchId;
    query.jwLocale = jwSupportedLocales[jwRegion.toLowerCase()];
  }
  if (jwRegion && useDummyData) {
    query.jwLocale = jwSupportedLocales[jwRegion.toLowerCase()];
  }
  if (jwFilmIdType) {
    query.jwFilmIdType = jwFilmIdType;
  }
  if (fafId) {
    query.fafFilmId = fafId;
  }
  if (useDummyData) {
    query.useDummyData = 'true';
  }
  const res = await fetch(baseUrl + (0,utils_utils__WEBPACK_IMPORTED_MODULE_0__.toQueryString)(query), {
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(thundrData)
  });
  if (!res.ok) {
    throw res.status || res.error || res;
  }
  return res.json();
}

// We should probably have this mapping on the server-side instead to avoid bloating the app's JS with it
const jwSupportedLocales = {
  us: 'en_US',
  //united states
  gb: 'en_GB',
  //united kingdom
  fr: 'fr_FR',
  //france
  de: 'de_DE',
  //germany
  br: 'pt_BR',
  //brazil
  au: 'en_AU',
  //Australia
  nz: 'en_NZ',
  //New Zealand
  ca: 'en_CA',
  //Canada for both ca or ca_fr
  ca_fr: 'en_CA',
  //Canada for both ca or ca_fr
  za: 'en_ZA',
  //South Africa
  ie: 'en_IE',
  //Ireland
  mx: 'es_MX',
  //Mexico
  jp: 'ja_JP',
  //Japan
  nl: 'en_NL',
  //Netherlands
  be: 'fr_BE',
  //Belgium for be, be_fr and be_nl
  be_fr: 'fr_BE',
  //Belgium for be, be_fr and be_nl
  be_nl: 'fr_BE',
  //Belgium for be, be_fr and be_nl
  se: 'sv_SE',
  //Sweden
  th: 'en_TH',
  //Thailand
  pt: 'pt_PT',
  //Portugal
  cz: 'cs_CZ',
  //Czech Republic
  no: 'en_NO',
  //Norway
  ru: 'ru_RU',
  //Russia
  in: 'en_IN',
  //India
  ch: 'de_CH',
  //Switzerland for ch, ch_ch and ch_fr
  ch_ch: 'de_CH',
  //Switzerland for ch, ch_ch and ch_fr
  ch_fr: 'de_CH',
  //Switzerland for ch, ch_ch and ch_fr
  at: 'de_AT',
  //Austria
  ph: 'en_PH',
  //Philippines
  sg: 'en_SG',
  //Singapore
  pl: 'pl_PL',
  //Poland
  fi: 'fi_FI',
  //Finland
  gr: 'el_GR',
  //Greece
  tr: 'tr_TR',
  //Turkey
  co: 'es_CO',
  //Colombia
  dk: 'en_DK',
  //Denmark
  ar: 'es_AR',
  //Argentina
  cl: 'es_CL',
  //Chile
  es: 'es_ES',
  //Spain
  kr: 'ko_KR',
  //South Korea
  it: 'it_IT',
  //Italy
  lt: 'en_LT',
  //Lithuania
  pe: 'es_PE',
  //Peru
  ee: 'en_EE',
  //Estonia
  lv: 'en_LV',
  //Latvia
  my: 'en_MY',
  //Malaysia
  id: 'en_ID',
  //Indonesia
  hu: 'hu_HU',
  //Hungary
  ve: 'es_VE',
  //Venezuela
  ro: 'ro_RO',
  //Romania
  ec: 'es_EC' //Ecuador
};
async function imageShareApi(endpoint, _ref4) {
  let {
    imageUrl,
    siteUrl,
    metaOverrides
  } = _ref4;
  if (typeof window === 'undefined') {
    throw new Error('Trying to request server-side');
  }
  const baseUrl = 'https://share.s-prod.pow.io';
  const query = {
    imageUrl,
    siteUrl,
    metaOverrides
  };
  const res = await fetch((0,utils_utils__WEBPACK_IMPORTED_MODULE_0__.joinPaths)(baseUrl, endpoint) + (0,utils_utils__WEBPACK_IMPORTED_MODULE_0__.toQueryString)(query));
  if (!res.ok) {
    throw res.status || res.error || res;
  }
  return res.text();
}
async function userFeedbackApi(_ref5) {
  let {
    method,
    path,
    query,
    body
  } = _ref5;
  if (typeof window === 'undefined') {
    throw new Error('Trying to request server-side');
  }
  let url = `https://user-feedback.s-prod.pow.io${path || '/'}`;
  if (query) {
    url += (0,utils_utils__WEBPACK_IMPORTED_MODULE_0__.toQueryString)(query);
  }
  const fetchOptions = {
    method
  };
  if (body) {
    fetchOptions.headers = {
      'content-type': 'application/json'
    };
    fetchOptions.body = JSON.stringify(body);
  }
  try {
    const res = await fetch(url, fetchOptions);
    if (!res.ok) {
      throw res.status || res.error || res;
    }
    return res.json();
  } catch (err) {
    return err;
  }
}

/***/ }),

/***/ "./static/src/utils/bolt/appRegions.js":
/*!*********************************************!*\
  !*** ./static/src/utils/bolt/appRegions.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var utils_cached__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/cached */ "./static/src/utils/cached.js");
/* harmony import */ var utils_bolt_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/bolt/api */ "./static/src/utils/bolt/api.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");




const getAppRegions = (0,utils_cached__WEBPACK_IMPORTED_MODULE_1__["default"])(async () => {
  const store = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get();
  const slug = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(store, 'appData.meta.title.slug');
  try {
    const result = await (0,utils_bolt_api__WEBPACK_IMPORTED_MODULE_2__.api)('/app/regions', {
      slug
    });
    return result.response;
  } catch (e) {
    console.error(e);
    return null;
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAppRegions);

/***/ }),

/***/ "./static/src/utils/bolt/client.js":
/*!*****************************************!*\
  !*** ./static/src/utils/bolt/client.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDevice: () => (/* binding */ getDevice),
/* harmony export */   getDeviceInfo: () => (/* binding */ getDeviceInfo),
/* harmony export */   getDims: () => (/* binding */ getDims),
/* harmony export */   getIsDesktopSize: () => (/* binding */ getIsDesktopSize),
/* harmony export */   getIsDesktopWidth: () => (/* binding */ getIsDesktopWidth),
/* harmony export */   getIsEdge: () => (/* binding */ getIsEdge),
/* harmony export */   getIsIOS: () => (/* binding */ getIsIOS),
/* harmony export */   getIsSafari: () => (/* binding */ getIsSafari),
/* harmony export */   getIsShowtimesOnlyIframed: () => (/* binding */ getIsShowtimesOnlyIframed),
/* harmony export */   getIsSinglePageIframed: () => (/* binding */ getIsSinglePageIframed),
/* harmony export */   getIsSocialWebview: () => (/* binding */ getIsSocialWebview),
/* harmony export */   getOrientation: () => (/* binding */ getOrientation),
/* harmony export */   getSize: () => (/* binding */ getSize),
/* harmony export */   hideFooter: () => (/* binding */ hideFooter),
/* harmony export */   isIframed: () => (/* binding */ isIframed)
/* harmony export */ });
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");


function getDeviceInfo() {
  const dimensions = getDims();
  const device = getDevice();
  const deviceSize = getSize(dimensions, device);
  const deviceWidthSize = getSize(dimensions, device, true);
  const orientation = getOrientation(dimensions);
  const isIOS = getIsIOS();
  const isEdge = getIsEdge();
  const isSafari = getIsSafari();
  const isDesktopSize = getIsDesktopSize();
  const isDesktopWidth = getIsDesktopWidth();
  const isSocialWebview = getIsSocialWebview();
  return {
    dimensions,
    device,
    deviceSize,
    deviceWidthSize,
    orientation,
    isIOS,
    isEdge,
    isSafari,
    isDesktopSize,
    isDesktopWidth,
    isSocialWebview
  };
}
function getDims() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}
function getDevice() {
  if (typeof window !== 'undefined') {
    const agent = ('' + navigator.userAgent).toLowerCase();
    if (agent.indexOf('android') !== -1) {
      return 'android';
    }
    if (agent.indexOf('iphone') !== -1) {
      return 'iphone';
    }
    if (agent.indexOf('ipad') !== -1) {
      return 'ipad'; //ipad no longer seems to always appear in user agent
    }
  }
  return navigator.maxTouchPoints > 1 ? 'tablet' : 'desktop';
}
function getSize() {
  let dimensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getDims();
  let device = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getDevice();
  let byWidthOnly = arguments.length > 2 ? arguments[2] : undefined;
  // Bypass checks for iPhone as iPhone X is large
  if (device == 'iphone') {
    return 'mobile';
  }
  const store = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get();
  const breakTablet = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(store, 'appData.styling.variables.breakTablet', '767').replace('px', '');
  const breakSmallDesktop = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(store, 'appData.styling.variables.breakSmallDesktop', '1024').replace('px', '');
  const breakDesktop = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(store, 'appData.styling.variables.breakDesktop', '1280').replace('px', '');
  const breakLargeDesktop = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(store, 'appData.styling.variables.breakLargeDesktop', '1600').replace('px', '');

  // List of breakpoints (used if width is stritcly lower than the value)
  const breakpoints = [[+breakTablet, 'mobile'], [+breakSmallDesktop, 'tablet'], [+breakDesktop, 'smallDesktop'], [+breakLargeDesktop, 'desktop'], [Infinity, 'largeDesktop']];
  for (let i = 0; i < breakpoints.length; i++) {
    let [breakpoint, name] = breakpoints[i];
    if (dimensions.width >= breakpoint) {
      continue;
    }

    // return tablet if small desktop but portrait
    if (name === 'smallDesktop' && dimensions.width < dimensions.height && !byWidthOnly) {
      return 'tablet';
    }

    // recognise a mobile when its long and in landscape mode
    if (name !== 'mobile' && device !== 'tablet' && device !== 'desktop' && getOrientation({
      width: dimensions.width,
      height: dimensions.height
    }) === 'landscape' && dimensions.height < breakTablet && !byWidthOnly) {
      return 'mobile';
    }
    return name;
  }
  return 'unknown';
}
function getOrientation(_ref) {
  let {
    width,
    height
  } = _ref;
  return width > height ? 'landscape' : 'portrait';
}
function getIsDesktopSize() {
  let size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getSize();
  const orientation = getOrientation(getDims());
  return size === 'desktop' || size === 'largeDesktop' || size === 'smallDesktop' && orientation === 'landscape';
}
function getIsDesktopWidth() {
  let size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getSize(getDims(), getDevice(), true);
  return size.toLowerCase().includes('desktop');
}
function getIsIOS() {
  if (typeof window === 'undefined') {
    return false;
  }
  const agent = ('' + navigator.userAgent).toLowerCase();
  const isIpad = /Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1;
  return agent.indexOf('ipad') !== -1 || isIpad || agent.indexOf('iphone') !== -1;
}
function getIsEdge() {
  const ua = navigator.userAgent || '';
  // Chromium edge uses "Edg" - but we might want to treat it differently because different engine
  const edge = ua.match(/Edge\/(\d+)\./);
  if (edge) {
    return +edge[1];
  }
  return false;
}
function getIsSafari() {
  return /^((?!chrome|android|CriOS|fxios).)*safari/i.test(navigator.userAgent);
}
function isIframed() {
  return window.top !== window.self || /[?&]iframe([=&]|$)/i.test(location.search);
}

// check if it is a standalone home ent / ticketing page iframed on another site.
// should be iframed and also have the query string showbarebones
function getIsSinglePageIframed() {
  if ((0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get(), 'appData.options.bareboneShowtimesView', false)) {
    return true;
  }
  if (typeof window === 'undefined') {
    return false;
  }
  const isSinglePage = /[?&]showbarebones([=&]|$)/i.test(location.search);
  return isIframed() && isSinglePage;
}
function getIsShowtimesOnlyIframed() {
  if ((0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get(), 'appData.options.bareboneShowtimesView', false)) {
    return true;
  }
  if (typeof window === 'undefined') {
    return false;
  }
  const isSinglePage = /[?&]showbarebones=showtimes([&]|$)/i.test(location.search);
  return isIframed() && isSinglePage;
}
function getIsSocialWebview() {
  const agent = (navigator.userAgent || '').toLowerCase();
  return ['instagram', 'webview', 'fban', 'fbav', 'tiktok'].some(type => agent.indexOf(type) !== -1);
}
function hideFooter() {
  if (typeof window === 'undefined') {
    return false;
  }
  const hideFooter = /[?&]hideFooter([=&]|$)/i.test(location.search);
  return hideFooter;
}

/***/ }),

/***/ "./static/src/utils/bolt/geo.js":
/*!**************************************!*\
  !*** ./static/src/utils/bolt/geo.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   geoFromIP: () => (/* binding */ geoFromIP),
/* harmony export */   geoSearch: () => (/* binding */ geoSearch),
/* harmony export */   geoSearchOne: () => (/* binding */ geoSearchOne)
/* harmony export */ });
/* harmony import */ var utils_cached__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/cached */ "./static/src/utils/cached.js");
/* harmony import */ var utils_bolt_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/bolt/api */ "./static/src/utils/bolt/api.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var utils_bolt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/bolt */ "./static/src/utils/bolt/index.js");
// import Store from 'store/store';





// Not waiting, we just want whatever is available
const currentLocationOptions = async () => {
  // Should we use geo from ip or the current location?
  // let geo = accessNested(Store.get(), 'client.geo') || {};
  // return { lat: geo.lat, lon: geo.lon };
  try {
    const geo = await geoFromIP();
    return {
      lat: geo.lat,
      lon: geo.lon
    };
  } catch (err) {
    return {};
  }
};

// const getDefaultRegionBiasing = cached(() => {
// 	// let region = (await geoFromIP()).countryCode;
// 	let region = __REGION__;
// 	// Special cases (ccTLD, not ISO ; see https://developers.google.com/maps/documentation/geocoding/intro#RegionCodes)
// 	if (region === 'gb') {
// 		region = 'uk';
// 	}
// 	if (!/^[a-z]{2}$/.test(region)) {
// 		return;
// 	}
// 	return { region };
// });

const geoFromIP = (0,utils_cached__WEBPACK_IMPORTED_MODULE_0__["default"])(async () => {
  let data = {};
  try {
    let result = await fetch('https://stdata.powster.com/geo');
    data = await result.json();
  } catch (err) {}
  if (!data?.city) {
    try {
      let countryCode = data?.countryCode || "us";
      let capitalURL = new URL('https://stdata.powster.com/capital');
      capitalURL.searchParams.set('country', countryCode.toLowerCase());
      let capitalRes = await fetch(capitalURL);
      if (!capitalRes.ok) throw new Error();
      Object.assign(data, await capitalRes.json());
    } catch (err) {}
  }
  if (data?.countryCode) {
    data.countryCode = data.countryCode.toLowerCase();
  }
  return data;
});
async function geoSearch(options) {
  const allAllowedRegions = ["us", ...(0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.asList)((0,utils_bolt__WEBPACK_IMPORTED_MODULE_3__.getShowtimesData)().boundingRegions)].map(s => s.toUpperCase());
  options = Object.assign({
    region: allAllowedRegions.join(',')
  }, await currentLocationOptions(), options);
  if (!options.search) {
    throw new Error('Searching with empty value');
  }
  const data = await (0,utils_bolt_api__WEBPACK_IMPORTED_MODULE_1__.api)('/geo/search', options);
  if (!data?.response) {
    throw new Error('Unable to search for ' + options.search);
  }
  return data.response.sort((a, b) => {
    let aAllowed = allAllowedRegions.includes(a.countryCode);
    let bAllowed = allAllowedRegions.includes(b.countryCode);
    if (aAllowed && !bAllowed) {
      return -1;
    }
    if (!aAllowed && bAllowed) {
      return 1;
    }
    return 0;
  });
}
async function geoSearchOne(options) {
  let res = await geoSearch(options);
  if (!res?.[0]) {
    throw new Error('No results for ' + options.search);
  }
  return res[0];
}

/***/ }),

/***/ "./static/src/utils/bolt/header.js":
/*!*****************************************!*\
  !*** ./static/src/utils/bolt/header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterUnusedPages: () => (/* binding */ filterUnusedPages)
/* harmony export */ });
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");

function filterUnusedPages(props, items) {
  const pages = (0,utils_utils__WEBPACK_IMPORTED_MODULE_0__.accessNested)(props, 'appData.pages');
  return items.filter(item => pages[item.path] || item.path?.match(/^https?:\/\//i) || item.path?.startsWith('@') || item.path?.startsWith('mailto:') || item.forceShow);
}

/***/ }),

/***/ "./static/src/utils/bolt/index.js":
/*!****************************************!*\
  !*** ./static/src/utils/bolt/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCSSRuleset: () => (/* binding */ addCSSRuleset),
/* harmony export */   arrayWithUniqueKeys: () => (/* binding */ arrayWithUniqueKeys),
/* harmony export */   buildClientStoreData: () => (/* binding */ buildClientStoreData),
/* harmony export */   getHeaderHeight: () => (/* binding */ getHeaderHeight),
/* harmony export */   getMainPage: () => (/* binding */ getMainPage),
/* harmony export */   getPageFromVideoId: () => (/* binding */ getPageFromVideoId),
/* harmony export */   getPageIdFromURL: () => (/* binding */ getPageIdFromURL),
/* harmony export */   getPageMeta: () => (/* binding */ getPageMeta),
/* harmony export */   getPagePath: () => (/* binding */ getPagePath),
/* harmony export */   getPageTitle: () => (/* binding */ getPageTitle),
/* harmony export */   getPageType: () => (/* binding */ getPageType),
/* harmony export */   getRelativePageUrl: () => (/* binding */ getRelativePageUrl),
/* harmony export */   getSectionsWithContent: () => (/* binding */ getSectionsWithContent),
/* harmony export */   getShowtimesData: () => (/* binding */ getShowtimesData),
/* harmony export */   getSizeOverride: () => (/* binding */ getSizeOverride),
/* harmony export */   getTTSizeOverride: () => (/* binding */ getTTSizeOverride),
/* harmony export */   getValueForClientSize: () => (/* binding */ getValueForClientSize),
/* harmony export */   isDualViewEnabled: () => (/* binding */ isDualViewEnabled),
/* harmony export */   isVideosPage: () => (/* binding */ isVideosPage),
/* harmony export */   linkOut: () => (/* binding */ linkOut),
/* harmony export */   navigateInternally: () => (/* binding */ navigateInternally),
/* harmony export */   normalizeRegion: () => (/* binding */ normalizeRegion),
/* harmony export */   shouldShowShowtimes: () => (/* binding */ shouldShowShowtimes)
/* harmony export */ });
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var utils_bolt_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/bolt/client */ "./static/src/utils/bolt/client.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var utils_stringWithParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/stringWithParams */ "./static/src/utils/stringWithParams.js");



// import cached from 'utils/cached';

function buildClientStoreData(state) {
  Object.assign(state.client, (0,utils_bolt_client__WEBPACK_IMPORTED_MODULE_1__.getDeviceInfo)());
  return state;
}
function getValueForClientSize() {
  let variable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let client = arguments.length > 1 ? arguments[1] : undefined;
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (typeof variable === 'string' || !variable) {
    return variable;
  }
  if (!client) {
    client = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().client;
  }
  let {
    deviceSize = 'mobile',
    orientation = 'portrait'
  } = client;
  if (deviceSize === 'largeDesktop' || deviceSize === 'smallDesktop') deviceSize = 'desktop';
  let deviceOrientation = `${deviceSize}${orientation[0].toUpperCase() + orientation.slice(1)}`;
  if (options.nullIfDisabled) {
    // if you want to return nothing when the relevant item in thundr is disabled,
    // instead of using the fallback logic.
    // ex: don't show TT on mobile landscape if "mobileLanscape" is disabled in "variable", but use the next
    // available asset if "mobileLandscape" is an empty string.
    if (variable[deviceOrientation] === undefined && variable[deviceSize] === undefined) {
      return null;
    }
  }
  if (deviceOrientation === 'mobileLandscape' && !variable.mobileLandscape) {
    deviceOrientation = 'tabletLandscape';
  }
  if (deviceOrientation === 'tabletLandscape' && !variable.tabletLandscape) {
    deviceOrientation = 'desktopLandscape';
    deviceSize = 'desktop';
  }
  return variable[deviceOrientation] || variable[deviceSize] || variable.desktop || variable.tablet || variable.mobile;
}
const replaceVH = str => typeof str === 'string' ? str.replace(/\b(\d+)vh\b/g, 'calc($1 * var(--vh))') : str;
function getSizeOverride(data) {
  const size = getValueForClientSize(data);
  if (!size) {
    return size;
  }
  if (typeof size === 'string') {
    return replaceVH(size);
  }
  return Object.fromEntries(Object.entries(size).map(_ref => {
    let [key, value] = _ref;
    return [key, replaceVH(value)];
  }));
}
function getTTSizeOverride(tt) {
  return getSizeOverride(tt?.titleTreatmentSize) || {};
}
function normalizeRegion(region) {
  if (!region || typeof region !== 'string') {
    return null;
  }
  region = region.toUpperCase().replace(/^([A-Z]{2})_.+$/, '$1');
  return region.length === 2 ? region : null;
}
function getPagePath(pageData) {
  let path = pageData?.path || '/';
  let hash = '';
  if (path.startsWith('#')) {
    hash = path;
    path = '/';
    if (pageData.section) {
      path = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().pages?.boltHome?.path || '/';
    }
  }
  return {
    path,
    hash
  };
}
function getRelativePageUrl(page) {
  let queryString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : typeof window !== 'undefined' ? location.search : '';
  let hashInPage = arguments.length > 2 ? arguments[2] : undefined;
  let store = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get();
  let activePage = store.activePage;
  let newPageData = typeof page === 'string' ? store.appData?.pages?.[page] : page;
  if (!newPageData) {
    return null;
  }
  if (typeof queryString === 'object') {
    queryString = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.toQueryString)(queryString);
  }
  // let qs = !ignoreQueryString && typeof window !== 'undefined' ? location.search : '';

  let {
    path,
    hash
  } = getPagePath(newPageData);
  hash = hash || hashInPage || '';
  if (hash && !hash.startsWith('#')) {
    hash = '#' + hash;
  }
  let currentPageData = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.accessNested)(store, ['appData', 'pages', activePage]);
  if (!currentPageData) {
    return path + queryString + hash;
  }
  let relativeRoot = getPagePath(currentPageData).path.slice(1).split('/').slice(1).fill('../').join('');
  return relativeRoot + path.slice(1) + queryString + hash || './';
}
function getPageIdFromURL(pages) {
  let url = location.pathname + location.hash;
  if (false) {}
  let top = Object.values(pages || store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().appData.pages || {}).flatMap(page => {
    return [page.path, ...(0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.commaSeparatedList)(page.alternatePaths)].map(path => {
      if (page.baseHtml) {
        path = path?.startsWith('#') ? page.baseHtml + path : path + page.baseHtml;
      }
      return url.includes(path) ? {
        id: page.id,
        count: path.length
      } : null;
    });
  }).filter(e => e).sort((a, b) => a.count - b.count).pop();
  return top?.id;
}
function getMainPage() {
  const pageList = Object.values(store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().appData.pages);
  const homePage = pageList.find(page => page.page === 'home') || pageList[0];
  return homePage ? homePage.id : null;
}
function isVideosPage(id) {
  return store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().appData.pages[id]?.type === 'videos';
}
function getPageFromVideoId(id) {
  const videoPages = Object.values(store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().appData.pages).filter(page => page.type === 'videos');
  const page = videoPages.find(page => Object.values(page.data?.list).find(video => video.youtubeId === id || video.vimeoId === id || video.videoSrc === id));
  return page?.id || 'boltVideos';
}
function shouldShowShowtimes(forceLive, goLiveDate) {
  if (!arguments.length) {
    const store = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get();
    forceLive = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.accessNested)(store, 'appData.options.forceLive');
    goLiveDate = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.parseDate)((0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.accessNested)(store, 'appData.meta.dates.live') || (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.accessNested)(store, 'appData.meta.dates.release'));
  }
  return forceLive || goLiveDate <= Date.now();
}
const isDualViewEnabled = pages => {
  const appData = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().appData;
  if (!appData?.options?.dualView) {
    return false;
  }
  if (!pages) {
    pages = Object.values(appData.pages);
  }
  const hasShowtimes = pages.find(page => getPageType(page) === 'showtimes');
  const hasHomeEnt = pages.find(page => getPageType(page) === 'homeEnt');
  const hasWidget = pages.find(page => getPageType(page) === 'stickAndScaleWidget');
  return hasShowtimes && shouldShowShowtimes() && hasHomeEnt || hasShowtimes && hasHomeEnt && hasWidget;
};
const getPageType = page => page.component || page.type;
function addCSSRuleset(selector, declarations) {
  const style = document.createElement('style');
  const sheet = document.head.appendChild(style).sheet;
  if (Array.isArray(declarations)) {
    declarations = declarations.join(';');
  }
  if (declarations && typeof declarations === 'object') {
    declarations = Object.entries(declarations).map(_ref2 => {
      let [key, val] = _ref2;
      return `${key}:${key === 'content' ? "'" + val + "'" : val}`;
    }).join(';');
  }
  sheet.insertRule(selector + '{' + declarations + '}', sheet.cssRules.length);
}
function navigateInternally(destination) {
  let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // Supports the following link formats:
  // - path
  // - path#section
  // - pageId
  // - pageId#section

  if (destination.startsWith('@')) {
    return store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('OPEN_RESERVED_VARIABLE_LINK', destination);
  }
  if (destination.includes('#') && !destination.startsWith('#')) {
    const pageAndHash = destination.match(/^([\w\d_-]+)#([\w\d_-]+)$/);
    if (pageAndHash?.length === 3) {
      store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('SET_ACTIVE_PAGE', pageAndHash[1], null, {
        hashInPage: `#${pageAndHash[2]}`
      });
    }
    return;
  }
  const pages = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().appData?.pages;
  // Tries to find page based on pageId
  let page = pages?.[destination];
  if (!page) {
    // If it didn't find page based on id, tries to find it based on path
    page = Object.values(pages || {}).find(e => e.path === destination || e.path === `/${destination}/`);
  }
  if (!page) {
    return;
  }
  if (!page.section && !page.type && destination !== 'boltHome') {
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('CLOSE_ALL_OVERLAYS');
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('SET_ACTIVE_PAGE', destination);
    return;
  }
  if (page?.type === 'showtimes') {
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('SHOWTIMES_SHOW', opts?.animate, opts?.queryString, page?.id);
    if ((0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.accessNested)(store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get(), 'appData.pages.boltShowtimes.data.groupBookings.isEnabled', false)) {
      if (store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().groupBookingsShowtimes) {
        history?.replaceState(null, '', location?.pathname + '?groupbookings');
      } else {
        history?.replaceState(null, '', location?.pathname + '?booknow');
      }
    }
  } else if (page?.type === 'homeEnt') {
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('HOMEENT_SHOW', undefined, undefined, destination);
  } else if (page?.type === 'pressKit') {
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('PRESSKIT_SHOW', undefined, undefined, destination);
  } else if (page?.type === 'videos') {
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('OPEN_VIDEO_OVERLAY', destination, opts?.queryString);
  } else if (page.parent && page.parent === store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().activePage) {
    // if the destination page is a child of the currently active page, just scroll to destination section
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('CHANGE_ACTIVE_SECTION', page.id);
  } else if (page.parent) {
    // if the destination page is a child of a page that is not the currently active page,
    // navigate to the parent page then scroll to the destination section
    //find hashinpage
    const hashInPage = '#' + page.path.replaceAll('/', '');
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('CLOSE_ALL_OVERLAYS');
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('SET_ACTIVE_PAGE', page.parent, null, {
      hashInPage
    });
  } else {
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('CLOSE_ALL_OVERLAYS');
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('SET_ACTIVE_PAGE', destination);
    store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('CHANGE_ACTIVE_SECTION', destination, {
      instant: opts?.instant !== false
    });
    if (page?.type === 'stickAndScaleWidget') {
      store_store__WEBPACK_IMPORTED_MODULE_0__["default"].emit('EXPAND_WIDGET');
    }
  }
}
const isObjectOrArray = v => typeof v === 'object' && v !== null;
function _merge(source, data) {
  if (!isObjectOrArray(data)) {
    return source;
  }
  Object.entries(data).forEach(_ref3 => {
    let [key, value] = _ref3;
    if (!isObjectOrArray(value)) {
      source[key] = value;
      return;
    }
    source[key] = _merge(isObjectOrArray(source[key]) ? source[key] : {}, value);
  });
  return source;
}
function merge(source) {
  for (var _len = arguments.length, objects = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    objects[_key - 1] = arguments[_key];
  }
  return objects.reduce((merged, obj) => _merge(merged, obj), source);
}
function getPageMeta() {
  let {
    store = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get(),
    appData = store.appData,
    page = store.activePage
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let metaTags = appData?.doc?.metaTags;
  let pageSpecificMeta = metaTags?.pageSpecificMetaTags?.[page];
  return merge({}, metaTags, pageSpecificMeta);
}
function getPageTitle(data) {
  let store = data?.store || store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get();
  let appData = data?.appData || store.appData;
  let page = data?.page || store.activePage;
  let meta = data?.meta || getPageMeta({
    store,
    appData,
    page
  });
  let title = meta.title;
  let pageData = appData.pages?.[page];
  let pageName = pageData ? (0,utils_stringWithParams__WEBPACK_IMPORTED_MODULE_3__["default"])(appData.copy?.baseCopy, pageData.name) : '';
  return (0,utils_stringWithParams__WEBPACK_IMPORTED_MODULE_3__["default"])({
    ...appData.copy?.baseCopy,
    PAGE_NAME: pageName
  }, title);
}
function getHeaderHeight() {
  const header = document.querySelector('#header');
  if (!header) {
    return 0;
  }
  const headerHeight = getComputedStyle(header).height;
  return parseInt(headerHeight, 10);
}
function linkOut(href, target) {
  const a = document.createElement('a');
  a.href = href;
  a.target = target || '_blank';
  a.rel = 'noopener';
  a.click();
}
function arrayWithUniqueKeys(array) {
  let key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key';
  // let map = array.reduce((map, obj) => map.set(obj?.[key], obj), new Map());
  // return [...map.values()];
  return Object.values(Object.fromEntries(array.map(e => [e?.[key], e])));
}
function getSectionsWithContent(sections) {
  if (typeof window === 'undefined') {
    return [];
  }
  return [...document.querySelectorAll('[data-section]')].filter(section => {
    return sections.find(s => s.id === section.getAttribute('data-section')) && section.hasChildNodes();
  });
}
function getShowtimesData() {
  let store = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get();
  // TODO: check store.showtimes.show rather than activePage?
  let activePage = store.activePage;
  const pageType = store.appData?.pages?.[activePage]?.type;
  const pageId = pageType === 'showtimes' || pageType === 'filmPage' ? activePage : 'boltShowtimes';
  let pageData = store.appData?.pages?.[pageId]?.data || {};
  if (pageType === 'filmPage') {
    pageData = Object.values(store.appData?.pages?.[activePage]?.data || {}).find(section => section.type === 'showtimes')?.data || {};
  }
  return pageData;
}

/***/ }),

/***/ "./static/src/utils/bolt/showtimesLoader.js":
/*!**************************************************!*\
  !*** ./static/src/utils/bolt/showtimesLoader.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBaseFilters: () => (/* binding */ getBaseFilters)
/* harmony export */ });
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var utils_cached__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/cached */ "./static/src/utils/cached.js");
/* harmony import */ var utils_parseQueryString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/parseQueryString */ "./static/src/utils/parseQueryString.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var utils_formatDateTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/formatDateTime */ "./static/src/utils/formatDateTime.js");
/* harmony import */ var utils_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/hooks */ "./static/src/utils/hooks.js");
/* harmony import */ var utils_slugify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/slugify */ "./static/src/utils/slugify.js");







const defaultDate = (0,utils_cached__WEBPACK_IMPORTED_MODULE_1__["default"])(() => {
  let value = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.parseDate)(store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().appData?.pages?.boltShowtimes?.data?.defaultDate);
  return !Number.isNaN(+value) ? (0,utils_formatDateTime__WEBPACK_IMPORTED_MODULE_4__["default"])(value, 'yyyy-MM-dd') : null;
});
const validTimes = ['morning', 'afternoon', 'evening', 'late'];
const getBaseFilters = async qs => {
  let query = (0,utils_parseQueryString__WEBPACK_IMPORTED_MODULE_2__["default"])(qs);
  let result = {};
  result.audioDetails = [];
  const formatArray = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.commaSeparatedList)(query.format);
  if (formatArray?.length) {
    result.format = formatArray;
    if (result.format.includes('dolby')) {
      result.format = result.format.filter(e => e !== 'dolby');
      result.audioDetails.push('Dolby Cinema');
    }
  }
  const timeArray = ((0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.commaSeparatedList)(query.time) || []).filter(e => validTimes.includes(e));
  if (timeArray?.length) {
    result.time = timeArray;
  }
  const exhibitor = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.commaSeparatedList)(query.chain || query.exhibitor);
  if (exhibitor?.length) {
    result.exhibitor = exhibitor;
  }
  const movies = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.commaSeparatedList)(query.m);
  if (movies?.length) {
    result.movie = movies;
  }
  const queryArray = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.commaSeparatedList)(query.movie || query.title);
  if (queryArray?.length) {
    const movieDataEntries = Object.entries(store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get().appData?.pages?.boltShowtimes?.data?.movieData || {});
    const queryMovieIds = queryArray.map(q => {
      const matchingEntry = movieDataEntries.find(entry => {
        const [movieId, movieData] = entry;
        const slug = movieData.querySlug || (0,utils_slugify__WEBPACK_IMPORTED_MODULE_6__["default"])(movieData.title, {
          replaceAccentedChars: true
        });
        return q === slug;
      });
      if (matchingEntry) {
        return matchingEntry[0];
      }
      return q;
    });
    let movie = await utils_hooks__WEBPACK_IMPORTED_MODULE_5__["default"].call('querystring.filters.movie', queryMovieIds);
    if (movie?.length) {
      result.movie = movie;
    }
  }

  // today's date is in store anyway, so no need to account for that here
  const desiredDate = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.parseDate)(query.date);
  const baseDefaultDate = defaultDate();
  let now = Date.now();
  if (desiredDate && !Number.isNaN(+desiredDate) && desiredDate > now) {
    result.date = [(0,utils_formatDateTime__WEBPACK_IMPORTED_MODULE_4__["default"])(desiredDate, 'yyyy-MM-dd')];
  } else if (baseDefaultDate && new Date(baseDefaultDate) > now) {
    result.date = [baseDefaultDate];
  }
  return result;
};

/***/ }),

/***/ "./static/src/utils/bolt/webp.js":
/*!***************************************!*\
  !*** ./static/src/utils/bolt/webp.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Picture: () => (/* binding */ Picture),
/* harmony export */   css: () => (/* binding */ css),
/* harmony export */   getAssetUrl: () => (/* binding */ getAssetUrl)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var utils_isWebPSupported__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/isWebPSupported */ "./static/src/utils/isWebPSupported.js");



const mimeTypesMap = {
  jpg: 'jpeg',
  png: 'png'
};
const getMimeType = ext => `image/${mimeTypesMap[ext] || ext}`;
function getAssetUrl(src) {
  let fallbackFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'jpg';
  return (0,utils_isWebPSupported__WEBPACK_IMPORTED_MODULE_2__.isWebPSupported)() ? src : src?.replace(/\.webp$/, `.${fallbackFormat}`);
}
function Picture(_ref) {
  let {
    src,
    fallbackFormat,
    ...props
  } = _ref;
  if (!src?.endsWith?.('.webp')) {
    return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("img", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      src: src
    }));
  }
  let fallback = src.replace(/webp$/, fallbackFormat || 'jpg');
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("picture", null, (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("source", {
    srcset: src,
    type: "image/webp"
  }), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("source", {
    srcset: fallback,
    type: getMimeType(fallbackFormat)
  }), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("img", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    src: fallback
  })));
}
function css(asset, fallbackFormat) {
  return asset ? `url("${encodeURI(getAssetUrl(asset, fallbackFormat))}")` : '';
}

/***/ }),

/***/ "./static/src/utils/cached.js":
/*!************************************!*\
  !*** ./static/src/utils/cached.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cached)
/* harmony export */ });
/*
CACHES A FUNCTION RESULT
Useful if an long function always returns the same result and can be called accross the code

Example:
const myAPICall = cached(() => fetch('/endpoint').then(r => r.json()));
const res1 = await myAPICall(); // actually calls the api
const res2 = await myAPICall(); // returns a resolved promise, so instantly goes through
// res1 === res2

Important note:
While it passes the arguments down to the function, it does not cache based on them
This can lead to unexpected results if the function expects any non-constant argument, example:

let getColorValue = cached(color => color);
let blue = getColorValue('blue');
let red = getColorValue('red'); // THIS WILL RETURN BLUE
*/

function cached(fn) {
  let ran = false;
  let cache;
  let clearTimer;
  let cachedFunc = function () {
    if (!ran) {
      ran = true;
      cache = fn.apply(this, arguments);
    }
    return cache;
  };
  cachedFunc.expireIn = ms => {
    clearTimer = setTimeout(() => this.reset(), ms);
  };
  cachedFunc.reset = () => {
    clearTimeout(clearTimer);
    ran = false;
  };
  cachedFunc.force = function () {
    cachedFunc.reset();
    cachedFunc.apply(this, arguments);
  };
  return cachedFunc;
}

/***/ }),

/***/ "./static/src/utils/cookies.js":
/*!*************************************!*\
  !*** ./static/src/utils/cookies.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCookie: () => (/* binding */ getCookie),
/* harmony export */   setCookie: () => (/* binding */ setCookie)
/* harmony export */ });
function getCookie(name) {
  let nameEq = `${name}=`;
  let cookies = document.cookie.split(';').map(e => e.trim());
  for (let cookie of cookies) {
    if (cookie.startsWith(nameEq)) {
      return cookie.slice(nameEq.length);
    }
  }
  return null;
}
function setCookie(name, value, days) {
  let expiry;
  if (+days) {
    expiry = new Date(Date.now() + days * 24 * 3600 * 1000).toUTCString();
  }
  let parts = [[name, value], expiry && ['expires', expiry], ['path', '/']];
  document.cookie = parts.filter(e => e).map(part => part.join('=')).join('; ');
}

/***/ }),

/***/ "./static/src/utils/copy.js":
/*!**********************************!*\
  !*** ./static/src/utils/copy.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCopy: () => (/* binding */ getCopy)
/* harmony export */ });
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");


// Utils related to copy

let copy = {};
let isCopySet = false;

/**
 * Gets copy for the provided key + replace variables inside that copy.
 *
 * @example
 * getCopy('GALLERY_ALT_TITLE', { movieName: 'Rogue One', studioName: 'Disney' });
 * // returns 'Rogue One: Gallery | Disney'
 *
 * getCopy('CURRENCY', { value: 20 });
 * // returns £20
 *
 * getCopy('GET_TICKETS');
 * // returns Get Tickets
 *
 * getCopy('DYNAMIC_TITLE', { movieName: 'Star Trek' });
 * // returns: Star Trek: Hello There | Star Trek
 *
 * getCopy('TICKETS', {}, 'tickets');
 * // TICKETS isn't in the copy object, so it will return the fallback
 * // returns: tickets
 *
 * @note If there are two keys KEY and $KEY defined in copy, you WON'T be able to access
 *       KEY with this function. Use appData instead (or find a different name).
 *
 * @param {string} copyKey - the copy key (with or without the starting $)
 * @param {Object} [opts={}] - options
 * @param {string} [fallback=''] - the fallback value
 * @return {string} the localized string
 */
const getCopy = function (copyKey) {
  let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  let fromCopy = arguments.length > 3 ? arguments[3] : undefined;
  let boltCopyType = arguments.length > 4 ? arguments[4] : undefined;
  if (fromCopy && typeof fromCopy !== 'object') {
    fromCopy = null;
  }
  if (!fromCopy && !isCopySet || boltCopyType) {
    // Haven't retrieved copy yet, so lets do that first
    const store = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get();
    copy = store.appData?.copy || store.copy || {};
    isCopySet = true;
  }
  if (!fromCopy) {
    if (boltCopyType === 'accessibilityCopy') {
      fromCopy = copy.accessibilityCopy;
    } else if (boltCopyType === 'baseCopy' || copy.baseCopy) {
      fromCopy = copy.baseCopy;
    } else {
      fromCopy = copy;
    }
  }
  let copyItem = null;
  if (copyKey) {
    if (copyKey.charAt(0) !== '$') {
      copyItem = fromCopy['$' + copyKey];
      if (copyItem === undefined) copyItem = fromCopy[copyKey];
    } else {
      copyItem = fromCopy[copyKey];
      if (copyItem === undefined) copyItem = fromCopy[copyKey.substr(1)];
    }
  }
  if (copyItem === undefined) copyItem = fallback;

  // Loop through all the options to see replace
  Object.keys(opts).forEach(key => {
    // Transform movieName to MOVIE_NAME
    let realKey = key;
    if (key.toUpperCase() !== key) {
      realKey = key.replace(/([A-Z])/g, ' $1').replace(/ /g, '_').toUpperCase();
    }
    const regex = new RegExp('%' + realKey + '%', 'g');
    // Replace the keys with what was provided
    copyItem = copyItem.replace(regex, opts[key]);
  });
  return copyItem;
};

/***/ }),

/***/ "./static/src/utils/formatDateTime.js":
/*!********************************************!*\
  !*** ./static/src/utils/formatDateTime.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDateTime)
/* harmony export */ });
// Live testing http://jsfiddle.net/845v7d2p/
//   (see documentation/dateFormat.md for more info)

// Based on .Net DateTimeFormat.Format
// See https://msdn.microsoft.com/en-us/library/8kb3ddd4(v=vs.110).aspx for list of format specifiers
// MODIFICATIONS :
//  - unsupported: g (Era), K (time zone info)
//  - f and F are only precise up to 3 (= milliseconds)
//  - t/tt is lowercase and supports T/TT for uppercase alternative
//  - added oo for ordinal version of the date (e.g. 12th)
//  - adding more M or d changes the case:
//     - 1 = number            1
//     - 2 = padded number     01
//     - 3 = standard short    Jan
//     - 4 = standard long     January
//     - 5 = uppercase short   JAN
//     - 6 = uppercase long    JANUARY
//     - 7 = lowercase short   jan
//     - 8 = lowercase long    january
// Be careful to use \\ instead of \ when in a json/js string literal to prevent default backslash behaviour
// (Base implementation used as reference :
//   'FormatCustomized' @ http://referencesource.microsoft.com/#mscorlib/system/globalization/datetimeformat.cs,429)
function formatDateTime(date, format, copy) {
  if (!date || !format) return '';
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  if (copy) {
    copy = Object.assign({}, localeDefaults, copy);
  } else {
    copy = localeDefaults;
  }
  let result = '';
  let i, l, ch, tokenLen;
  for (i = 0, l = format.length; i < l; i += tokenLen) {
    tokenLen = 1;
    ch = format[i];
    let fn = baseFunctions[ch];
    if (fn) {
      tokenLen = parseRepeatPattern(format, i, ch, l);
      result += fn(date, tokenLen, copy);
    } else {
      switch (ch) {
        case ':':
          result += copy.$TIME_SEPARATOR;
          break;
        case '/':
          result += copy.$DATE_SEPARATOR;
          break;
        case '\'':
        case '"':
          tokenLen = parseQuoted(format, i); // Length including quotes
          // Add the string without quotes
          result += format.substr(i + 1, tokenLen - 2);
          break;
        case '\\':
          tokenLen = 2;
          if (i < l - 1) {
            result += format[i + 1];
          } else {
            // If \ is the last character of the string, add it as a literal
            result += '\\';
          }
          break;
        default:
          result += ch;
      }
    }
  }
  return result;
}

// Default that should be used if no copy is specified
let localeDefaults = {
  $AM: 'am',
  $PM: 'pm',
  $TIME_SEPARATOR: ':',
  $DATE_SEPARATOR: '/',
  $DAYS_SHORT: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  $DAYS_FULL: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  $MONTHS_SHORT: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  $MONTHS_FULL: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  $ORD: [
  //0     1     2     3     4     5     6     7     8     9
  'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th',
  //10   11    12    13    14    15    16    17    18    19
  'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
  //20   21    22    23    24    25    26    27    28    29
  'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th',
  //30   31
  'th', 'st']
};
let transforms = [str => str, str => (str || '').toUpperCase(), str => (str || '').toLowerCase()];
// Specifiers implementations
let baseFunctions = {
  h: (d, l) => pad(d.getHours() % 12 || 12, l),
  H: (d, l) => pad(d.getHours(), l),
  m: (d, l) => pad(d.getMinutes(), l),
  s: (d, l) => pad(d.getSeconds(), l),
  f: (d, l, copy, noZeroes) => {
    let v = d.getMilliseconds();
    let vl = l;
    while (vl++ < 3) v = ~~(v / 10);
    while (vl-- > 4) v *= 10;
    if (noZeroes && !v) return '';
    return pad(v, l);
  },
  F: (d, l, copy) => baseFunctions.f(d, l, copy, true),
  t: (d, l, copy, isUppercase) => {
    let designator = d.getHours() < 12 ? copy.$AM : copy.$PM;
    designator = isUppercase ? designator.toUpperCase() : designator.toLowerCase();
    if (l == 1) designator = designator.slice(0, 1);
    return designator;
  },
  T: (d, l, copy) => baseFunctions.t(d, l, copy, true),
  d: (d, l, copy) => {
    if (l <= 2) return pad(d.getDate(), l);
    l -= 3;
    let mode = l % 2,
      trf = transforms[(l >> 1) % transforms.length];
    return trf(copy[mode ? '$DAYS_FULL' : '$DAYS_SHORT'][d.getDay()]);
  },
  o: (d, l, copy) => {
    let day = d.getDate();
    return pad(day, l) + copy.$ORD[day];
  },
  M: (d, l, copy) => {
    if (l <= 2) return pad(d.getMonth() + 1, l);
    l -= 3;
    let mode = l % 2,
      trf = transforms[(l >> 1) % transforms.length];
    return trf(copy[mode ? '$MONTHS_FULL' : '$MONTHS_SHORT'][d.getMonth()]);
  },
  y: (d, l) => {
    let v = d.getFullYear();
    if (l <= 2) v %= 100;
    return pad(v, l);
  },
  z: (d, l, copy) => {
    let v = d.getTimezoneOffset();
    let ret = v < 0 ? '-' : '+';
    v = Math.abs(v);
    let hours = ~~(v / 60);
    ret += pad(hours, l <= 2 ? l : 2);
    // Add minutes
    if (l > 2) ret += copy.$TIME_SEPARATOR + pad(v - 60 * hours, 2);
    return ret;
  }
};

// Detect how many of the same character are in a row
function parseRepeatPattern(format, pos, ch, l) {
  let i = pos + 1;
  if (l == undefined) l = format.length;
  for (; i < l && format[i] === ch; i++);
  return i - pos;
}
// Detect a quoted string length (starting at a specified position)
function parseQuoted(format, pos) {
  let quote = format[pos];
  let next = pos;
  do {
    next = format.indexOf(quote, next + 1);
  } while (next !== -1 && format[next - 1] === '\\');
  if (next === -1) next = format.length;
  return next - pos + 1;
}

// Cast a positive int to string making sure it is at least the specified length
// If the string representation of the number is less than desired, 0s are added in front of it
function pad(n, l) {
  let v = n + '',
    vl = v.length;
  while (vl++ < l) v = '0' + v;
  return v;
}

/***/ }),

/***/ "./static/src/utils/gdpr/Pixel.js":
/*!****************************************!*\
  !*** ./static/src/utils/gdpr/Pixel.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pixel)
/* harmony export */ });
/* harmony import */ var _queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./queue */ "./static/src/utils/gdpr/queue.js");


// Class representing managed pixel
class Pixel {
  constructor(category, pixel) {
    let shouldQueue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    this.category = category;
    this.pixel = pixel;
    this.shouldQueue = shouldQueue;
  }
  createTrigger() {
    var _this = this;
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      (0,_queue__WEBPACK_IMPORTED_MODULE_0__.triggerOrQueue)(_this, _this.shouldQueue, args);
    };
  }
}

/***/ }),

/***/ "./static/src/utils/gdpr/categories.js":
/*!*********************************************!*\
  !*** ./static/src/utils/gdpr/categories.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addChangeListener: () => (/* binding */ addChangeListener),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   getChangeListeners: () => (/* binding */ getChangeListeners),
/* harmony export */   has: () => (/* binding */ has),
/* harmony export */   removeChangeListener: () => (/* binding */ removeChangeListener),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   toString: () => (/* binding */ toString)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./static/src/utils/gdpr/constants.js");

const state = {
  categories: [],
  changeListeners: []
};
const set = cats => {
  const newCats = cats.map(k => k.toUpperCase()).filter(a => _constants__WEBPACK_IMPORTED_MODULE_0__[a]);
  state.categories = newCats;
  // powsterOneTrust should not be set in this file
  // a onetrust specific file should use addChangeListener for this
  window.powsterOneTrust = [...newCats];
  state.changeListeners.forEach(listener => listener(state.categories));
};
const get = () => state.categories;
const has = category => state.categories.includes(category);
const getChangeListeners = () => state.changeListeners;
const addChangeListener = fn => {
  state.changeListeners.push(fn);
};
const removeChangeListener = fn => {
  state.changeListeners = state.changeListeners.filter(a => a !== fn);
};
const toString = () => state.categories.join(',');

/***/ }),

/***/ "./static/src/utils/gdpr/cleanCategoryName.js":
/*!****************************************************!*\
  !*** ./static/src/utils/gdpr/cleanCategoryName.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (s => {
  if (typeof s !== 'string') {
    return undefined;
  }
  return s.trim().toUpperCase() || undefined;
});

/***/ }),

/***/ "./static/src/utils/gdpr/constants.js":
/*!********************************************!*\
  !*** ./static/src/utils/gdpr/constants.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADVERTISING: () => (/* binding */ ADVERTISING),
/* harmony export */   FUNCTIONAL: () => (/* binding */ FUNCTIONAL),
/* harmony export */   PERFORMANCE: () => (/* binding */ PERFORMANCE),
/* harmony export */   SOCIAL: () => (/* binding */ SOCIAL),
/* harmony export */   STRICTLY_NECESSARY: () => (/* binding */ STRICTLY_NECESSARY),
/* harmony export */   TARGETING: () => (/* binding */ TARGETING)
/* harmony export */ });
const STRICTLY_NECESSARY = 'STRICTLY_NECESSARY';
const FUNCTIONAL = 'FUNCTIONAL';
const PERFORMANCE = 'PERFORMANCE';
const TARGETING = 'TARGETING';
const ADVERTISING = 'ADVERTISING';
const SOCIAL = 'SOCIAL';

/***/ }),

/***/ "./static/src/utils/gdpr/createPixelComponent.js":
/*!*******************************************************!*\
  !*** ./static/src/utils/gdpr/createPixelComponent.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createPixelComponent)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories */ "./static/src/utils/gdpr/categories.js");


function createPixelComponent() {
  for (var _len = arguments.length, Components = new Array(_len), _key = 0; _key < _len; _key++) {
    Components[_key] = arguments[_key];
  }
  // NOTE: Should we have the class outside of this function and just return an instance instead ? Can pass Components as a prop
  // Not a big issue but feels weird to create a whole new class at every call of this function (in the pixels render)
  return class PixelComponent extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor(props) {
      super(props);
      this.onCategoriesChange = this.onCategoriesChange.bind(this);
      this.state.categories = [..._categories__WEBPACK_IMPORTED_MODULE_1__.get()];
    }
    componentDidMount() {
      _categories__WEBPACK_IMPORTED_MODULE_1__.addChangeListener(this.onCategoriesChange);
    }
    componentWillUnmount() {
      _categories__WEBPACK_IMPORTED_MODULE_1__.removeChangeListener(this.onCategoriesChange);
    }
    shouldComponentUpdate(nextProps, nextState) {
      return nextState.categories !== this.state.categories || nextProps.children !== this.props.children;
    }
    onCategoriesChange(nextCategories) {
      this.setState({
        categories: [...nextCategories]
      });
    }
    render() {
      let displayedComps = Components.map(data => {
        if (!data) {
          return;
        }
        let [cat, comp] = data;
        if (_categories__WEBPACK_IMPORTED_MODULE_1__.has(this.state.categories, cat)) {
          return comp;
        }
      }).filter(comp => comp);
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, displayedComps.map(Component => (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(Component, this.props)));
    }
  };
}

/***/ }),

/***/ "./static/src/utils/gdpr/didomi/categories.js":
/*!****************************************************!*\
  !*** ./static/src/utils/gdpr/didomi/categories.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   set: () => (/* binding */ set)
/* harmony export */ });
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../categories */ "./static/src/utils/gdpr/categories.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./static/src/utils/gdpr/constants.js");


const dict = {
  'cookies': _constants__WEBPACK_IMPORTED_MODULE_1__.STRICTLY_NECESSARY,
  'ad_delivery': _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING,
  'advertising_personalization': _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING,
  'content_personalization': _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING,
  'cookies_marketing': _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING,
  'create_ads_profile': _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING,
  'create_content_profile': _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING,
  'device_access': _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING,
  'improve_products': _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING,
  'link_devices': _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING,
  'market_research': _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING,
  'measure_ad_performance': _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING,
  'offline_match': _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING,
  'precise_geo': _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING,
  'select_basic_ads': _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING,
  'select_personalized_ads': _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING,
  'select_personalized_content': _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING,
  'measure_content_performance': _constants__WEBPACK_IMPORTED_MODULE_1__.PERFORMANCE,
  'analytics': _constants__WEBPACK_IMPORTED_MODULE_1__.PERFORMANCE,
  'cookies_analytics': _constants__WEBPACK_IMPORTED_MODULE_1__.PERFORMANCE,
  'cookies_social': _constants__WEBPACK_IMPORTED_MODULE_1__.SOCIAL
};
const set = ids => {
  const newCats = (Array.isArray(ids) ? ids : ids.split(',')).map(id => dict[id]).filter(a => !!a);
  _categories__WEBPACK_IMPORTED_MODULE_0__.set(newCats);
};

/***/ }),

/***/ "./static/src/utils/gdpr/didomi/index.js":
/*!***********************************************!*\
  !*** ./static/src/utils/gdpr/didomi/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADVERTISING: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_9__.ADVERTISING),
/* harmony export */   FUNCTIONAL: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_9__.FUNCTIONAL),
/* harmony export */   Pixel: () => (/* reexport safe */ _Pixel__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   STRICTLY_NECESSARY: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_9__.STRICTLY_NECESSARY),
/* harmony export */   TARGETING: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_9__.TARGETING),
/* harmony export */   connectToOneTrust: () => (/* reexport safe */ _oneTrust_connectToOneTrust__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   createPixelComponent: () => (/* reexport safe */ _createPixelComponent__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   maybeHandle: () => (/* reexport safe */ _maybeHandle__WEBPACK_IMPORTED_MODULE_6__.maybeHandle)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../categories */ "./static/src/utils/gdpr/categories.js");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories */ "./static/src/utils/gdpr/didomi/categories.js");
/* harmony import */ var _queue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../queue */ "./static/src/utils/gdpr/queue.js");
/* harmony import */ var _dispatchEvent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dispatchEvent */ "./static/src/utils/gdpr/dispatchEvent.js");
/* harmony import */ var _Pixel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Pixel */ "./static/src/utils/gdpr/Pixel.js");
/* harmony import */ var _maybeHandle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../maybeHandle */ "./static/src/utils/gdpr/maybeHandle.js");
/* harmony import */ var _oneTrust_connectToOneTrust__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../oneTrust/connectToOneTrust */ "./static/src/utils/gdpr/oneTrust/connectToOneTrust.js");
/* harmony import */ var _createPixelComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../createPixelComponent */ "./static/src/utils/gdpr/createPixelComponent.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants */ "./static/src/utils/gdpr/constants.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");

// import Store from 'store/store';










_categories__WEBPACK_IMPORTED_MODULE_1__.addChangeListener(allowedCategories => {
  (0,_dispatchEvent__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)('categoriesUpdated', {
    categories: allowedCategories
  });
});
_categories__WEBPACK_IMPORTED_MODULE_1__.addChangeListener(allowedCategories => {
  _queue__WEBPACK_IMPORTED_MODULE_3__.drain(allowedCategories);
});
function getCookieCategories() {
  return window.Didomi.getUserConsentStatusForAll().purposes.enabled;
}
if (typeof window !== 'undefined') {
  const useDidomi = (0,utils_utils__WEBPACK_IMPORTED_MODULE_10__.accessNested)(window, '__INITIAL_STATE__.appData.options.didomiCookieConsent', false);
  let isDidomiInitialized = false;
  if (useDidomi) {
    if (!isDidomiInitialized) {
      window.didomiOnReady = window.didomiOnReady || [];
      window.didomiOnReady.push(function () {
        const activeGroups = getCookieCategories();
        _categories__WEBPACK_IMPORTED_MODULE_2__.set(activeGroups);
        window.Didomi.on('consent.changed', function () {
          const newGroups = getCookieCategories();
          return _categories__WEBPACK_IMPORTED_MODULE_2__.set(newGroups);
        });
      });
      isDidomiInitialized = true;
    }
  }
}

/***/ }),

/***/ "./static/src/utils/gdpr/dispatchEvent.js":
/*!************************************************!*\
  !*** ./static/src/utils/gdpr/dispatchEvent.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dispatchEvent: () => (/* binding */ dispatchEvent)
/* harmony export */ });
const dispatchEvent = (name, detail) => {
  const data = {
    bubbles: false,
    cancelable: false,
    detail: detail || null
  };
  let E = window.CustomEvent;
  if (typeof E !== 'function') {
    // eslint-disable-next-line
    function FakeEvent(name, data) {
      const e = document.createEvent('CustomEvent');
      e.initCustomEvent(name, data.bubbles, data.cancelable, data.detail);
      return e;
    }
    FakeEvent.prototype = window.Event.prototype;
    E = FakeEvent;
  }
  const event = new E(name, data);
  window.dispatchEvent(event);
};

/***/ }),

/***/ "./static/src/utils/gdpr/evidon/categories.js":
/*!****************************************************!*\
  !*** ./static/src/utils/gdpr/evidon/categories.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   set: () => (/* binding */ set)
/* harmony export */ });
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../categories */ "./static/src/utils/gdpr/categories.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./static/src/utils/gdpr/constants.js");


const dict = {
  'all': [_constants__WEBPACK_IMPORTED_MODULE_1__.STRICTLY_NECESSARY, _constants__WEBPACK_IMPORTED_MODULE_1__.FUNCTIONAL, _constants__WEBPACK_IMPORTED_MODULE_1__.PERFORMANCE, _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING, _constants__WEBPACK_IMPORTED_MODULE_1__.ADVERTISING, _constants__WEBPACK_IMPORTED_MODULE_1__.SOCIAL],
  'tag manager': _constants__WEBPACK_IMPORTED_MODULE_1__.STRICTLY_NECESSARY,
  'website optimization': _constants__WEBPACK_IMPORTED_MODULE_1__.PERFORMANCE,
  'business intelligence': _constants__WEBPACK_IMPORTED_MODULE_1__.PERFORMANCE,
  'optimizer': _constants__WEBPACK_IMPORTED_MODULE_1__.PERFORMANCE,
  'video': _constants__WEBPACK_IMPORTED_MODULE_1__.PERFORMANCE,
  'publisher': _constants__WEBPACK_IMPORTED_MODULE_1__.PERFORMANCE,
  'agency': _constants__WEBPACK_IMPORTED_MODULE_1__.PERFORMANCE,
  'mobile': _constants__WEBPACK_IMPORTED_MODULE_1__.PERFORMANCE,
  'data aggregator/supplier': _constants__WEBPACK_IMPORTED_MODULE_1__.FUNCTIONAL,
  'content management/saas': _constants__WEBPACK_IMPORTED_MODULE_1__.FUNCTIONAL,
  'online privacy platform': _constants__WEBPACK_IMPORTED_MODULE_1__.FUNCTIONAL,
  'advertisers': _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING,
  'marketing solutions': _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING,
  'demand side platform': _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING,
  'data management platform': _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING,
  'supply side platform': _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING,
  'social media': _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING,
  'retargeter': _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING,
  'research provider': _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING,
  'analytics provider': _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING,
  'creative/ad format technology': _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING,
  'other': _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING
};
const set = cats => {
  cats = Array.isArray(cats) ? cats : Object.entries(cats).map(_ref => {
    let [name, enabled] = _ref;
    return enabled && name;
  }).filter(e => e);
  const newCats = cats.flatMap(id => dict[id]).filter(a => !!a);
  _categories__WEBPACK_IMPORTED_MODULE_0__.set(newCats);
};

/***/ }),

/***/ "./static/src/utils/gdpr/evidon/index.js":
/*!***********************************************!*\
  !*** ./static/src/utils/gdpr/evidon/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADVERTISING: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_9__.ADVERTISING),
/* harmony export */   FUNCTIONAL: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_9__.FUNCTIONAL),
/* harmony export */   Pixel: () => (/* reexport safe */ _Pixel__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   STRICTLY_NECESSARY: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_9__.STRICTLY_NECESSARY),
/* harmony export */   TARGETING: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_9__.TARGETING),
/* harmony export */   connectToOneTrust: () => (/* reexport safe */ _oneTrust_connectToOneTrust__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   createPixelComponent: () => (/* reexport safe */ _createPixelComponent__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   maybeHandle: () => (/* reexport safe */ _maybeHandle__WEBPACK_IMPORTED_MODULE_6__.maybeHandle)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../categories */ "./static/src/utils/gdpr/categories.js");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories */ "./static/src/utils/gdpr/evidon/categories.js");
/* harmony import */ var _queue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../queue */ "./static/src/utils/gdpr/queue.js");
/* harmony import */ var _dispatchEvent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dispatchEvent */ "./static/src/utils/gdpr/dispatchEvent.js");
/* harmony import */ var _Pixel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Pixel */ "./static/src/utils/gdpr/Pixel.js");
/* harmony import */ var _maybeHandle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../maybeHandle */ "./static/src/utils/gdpr/maybeHandle.js");
/* harmony import */ var _oneTrust_connectToOneTrust__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../oneTrust/connectToOneTrust */ "./static/src/utils/gdpr/oneTrust/connectToOneTrust.js");
/* harmony import */ var _createPixelComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../createPixelComponent */ "./static/src/utils/gdpr/createPixelComponent.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants */ "./static/src/utils/gdpr/constants.js");

// import Store from 'store/store';









_categories__WEBPACK_IMPORTED_MODULE_1__.addChangeListener(allowedCategories => {
  (0,_dispatchEvent__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)('categoriesUpdated', {
    categories: allowedCategories
  });
  _queue__WEBPACK_IMPORTED_MODULE_3__.drain(allowedCategories);
});
if (typeof window !== 'undefined' && window.evidon) {
  let otherCallbacks = [window.evidon.priorConsentCallback];
  let lastCats;
  let priorConsentCallback = function (cats) {
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }
    if (cats === lastCats) {
      return;
    }
    lastCats = cats;
    otherCallbacks.forEach(callback => {
      try {
        callback?.(cats, ...rest);
      } catch (e) {}
    });
    _categories__WEBPACK_IMPORTED_MODULE_2__.set(cats);
  };
  const protectCallback = evidon => {
    Object.defineProperty(evidon, 'priorConsentCallback', {
      get() {
        return priorConsentCallback;
      },
      set(fn) {
        otherCallbacks.push(fn);
      }
    });
  };
  protectCallback(window.evidon);
  let _evidon = window.evidon;
  Object.defineProperty(window, 'evidon', {
    get() {
      return _evidon;
    },
    set(o) {
      protectCallback(o);
      _evidon = o;
    }
  });
}

/***/ }),

/***/ "./static/src/utils/gdpr/index.js":
/*!****************************************!*\
  !*** ./static/src/utils/gdpr/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   didomi: () => (/* reexport module object */ _didomi__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   evidon: () => (/* reexport module object */ _evidon__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   oneTrust: () => (/* reexport module object */ _oneTrust__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   sme: () => (/* reexport module object */ _sme__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   tealium: () => (/* reexport module object */ _tealium__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _oneTrust__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./oneTrust */ "./static/src/utils/gdpr/oneTrust/index.js");
/* harmony import */ var _tealium__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tealium */ "./static/src/utils/gdpr/tealium/index.js");
/* harmony import */ var _evidon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./evidon */ "./static/src/utils/gdpr/evidon/index.js");
/* harmony import */ var _didomi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./didomi */ "./static/src/utils/gdpr/didomi/index.js");
/* harmony import */ var _sme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sme */ "./static/src/utils/gdpr/sme/index.js");







/***/ }),

/***/ "./static/src/utils/gdpr/maybeHandle.js":
/*!**********************************************!*\
  !*** ./static/src/utils/gdpr/maybeHandle.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   maybeHandle: () => (/* binding */ maybeHandle)
/* harmony export */ });
/* harmony import */ var _Pixel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pixel */ "./static/src/utils/gdpr/Pixel.js");
/* harmony import */ var _cleanCategoryName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cleanCategoryName */ "./static/src/utils/gdpr/cleanCategoryName.js");


const maybeHandle = (oneTrustCategory, fn, shouldQueue) => {
  const category = (0,_cleanCategoryName__WEBPACK_IMPORTED_MODULE_1__["default"])(oneTrustCategory);
  if (typeof category === 'undefined') {
    return fn();
  }
  const pixel = new _Pixel__WEBPACK_IMPORTED_MODULE_0__["default"](category, fn, shouldQueue);
  return pixel.createTrigger()();
};

/***/ }),

/***/ "./static/src/utils/gdpr/oneTrust/categories.js":
/*!******************************************************!*\
  !*** ./static/src/utils/gdpr/oneTrust/categories.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   set: () => (/* binding */ set)
/* harmony export */ });
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../categories */ "./static/src/utils/gdpr/categories.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./static/src/utils/gdpr/constants.js");


const dict = {
  '1': _constants__WEBPACK_IMPORTED_MODULE_1__.STRICTLY_NECESSARY,
  '2': _constants__WEBPACK_IMPORTED_MODULE_1__.PERFORMANCE,
  '3': _constants__WEBPACK_IMPORTED_MODULE_1__.FUNCTIONAL,
  '4': _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING,
  '5': _constants__WEBPACK_IMPORTED_MODULE_1__.SOCIAL,
  '8': _constants__WEBPACK_IMPORTED_MODULE_1__.SOCIAL,
  'C0001': _constants__WEBPACK_IMPORTED_MODULE_1__.STRICTLY_NECESSARY,
  'C0002': _constants__WEBPACK_IMPORTED_MODULE_1__.PERFORMANCE,
  'C0003': _constants__WEBPACK_IMPORTED_MODULE_1__.FUNCTIONAL,
  'C0004': _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING,
  'C0005': _constants__WEBPACK_IMPORTED_MODULE_1__.SOCIAL,
  'C0007': _constants__WEBPACK_IMPORTED_MODULE_1__.PERFORMANCE,
  'C0008': _constants__WEBPACK_IMPORTED_MODULE_1__.SOCIAL
};
const set = ids => {
  const newCats = (Array.isArray(ids) ? ids : ids.split(',')).map(id => dict[id]).filter(a => !!a);
  _categories__WEBPACK_IMPORTED_MODULE_0__.set(newCats);
};

/***/ }),

/***/ "./static/src/utils/gdpr/oneTrust/connectToOneTrust.js":
/*!*************************************************************!*\
  !*** ./static/src/utils/gdpr/oneTrust/connectToOneTrust.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ connectToOneTrust)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../categories */ "./static/src/utils/gdpr/categories.js");
// import { h, Component } from 'preact';


function connectToOneTrust(category, C) {
  return class OneTrustComponent extends C {
    constructor(props) {
      super(props);
      this.onOneTrustCategoriesChange = this.onOneTrustCategoriesChange.bind(this);
      this.state = this.state || {};
      this.onOneTrustCategoriesChange(_categories__WEBPACK_IMPORTED_MODULE_1__.get());
    }
    componentDidMount() {
      if (super.componentDidMount && typeof super.componentDidMount === 'function') {
        super.componentDidMount(...arguments);
      }
      _categories__WEBPACK_IMPORTED_MODULE_1__.addChangeListener(this.onOneTrustCategoriesChange);
    }
    componentWillUnmount() {
      if (super.componentDidMount && typeof super.componentWillUnmount === 'function') {
        super.componentWillUnmount(...arguments);
      }
      _categories__WEBPACK_IMPORTED_MODULE_1__.removeChangeListener(this.onOneTrustCategoriesChange);
    }
    onOneTrustCategoriesChange(nextCategories) {
      let oneTrustCategories = [...nextCategories];
      let cat = typeof category === 'function' ? category(this.props, this.state) : category;
      let oneTrustAllowed = cat === true || _categories__WEBPACK_IMPORTED_MODULE_1__.has(cat);
      this.setState({
        oneTrustCategories,
        oneTrustAllowed
      });
    }
  };
}

// OLD VERSION FOR REFERENCE

// import { h, Component } from 'preact';
// import * as categories from './categories';
//
// export default function connectToOneTrust(category, C) {
// 	return class OneTrustComponent extends Component {
// 		constructor(props) {
// 			super(props);
// 			this.onCategoriesChange = this.onCategoriesChange.bind(this);
// 			this.state.categories = [...categories.get()];
// 		}
//
// 		componentDidMount() {
// 			categories.addChangeListener(this.onCategoriesChange);
// 		}
//
// 		componentWillUnmount() {
// 			categories.removeChangeListener(this.onCategoriesChange);
// 		}
//
// 		onCategoriesChange(nextCategories) {
// 			this.setState({
// 				categories: [...nextCategories],
// 			});
// 		}
//
// 		render() {
// 			return (
// 				<C
// 					{...this.props}
// 					oneTrustAllowed={categories.has(this.state.categories, category)}
// 				/>
// 			);
// 		}
// 	};
// }

/***/ }),

/***/ "./static/src/utils/gdpr/oneTrust/iframe.js":
/*!**************************************************!*\
  !*** ./static/src/utils/gdpr/oneTrust/iframe.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ passToIframe),
/* harmony export */   listenToIframe: () => (/* binding */ listenToIframe)
/* harmony export */ });
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");

function passToIframe() {
  function getCookie(name) {
    let decodedCookie = document.cookie;
    let cookies = decodedCookie.split(';').map(c => c.trim());
    let matching = cookies.find(cookie => cookie.indexOf(name) === 0);
    return matching;
  }
  let OptanonConsent = getCookie('OptanonConsent');
  let OptanonAlertBoxClosed = getCookie('OptanonAlertBoxClosed');
  const isIframed = window.self !== window.top;
  // We won't need this after we confirm demo stage.
  if (!isIframed) {
    //parent
    let pass_data = {
      OptanonConsent,
      OptanonAlertBoxClosed,
      OptanonActiveGroups: window.OptanonActiveGroups
    };
    for (let i = 0; i < window.frames.length; i++) {
      if (typeof window.frames[i].postMessage === 'function') {
        window.frames[i].postMessage(pass_data, '*');
      }
    }
  }
}
function listenToIframe() {
  const isIframed = window.self !== window.top;
  if (isIframed) {
    window.addEventListener('message', event => {
      let data = event && event.data;
      if (!data || typeof data !== 'object' || !data.OptanonActiveGroups) {
        return;
      }
      if (window.Optanon) {
        let cookie = null;
        const now = new Date();
        const inOneYear = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
        setTimeout(() => {
          if (data.OptanonConsent) {
            cookie = data.OptanonConsent;
            document.cookie = `${cookie};expires=${new Date(inOneYear).toUTCString()};path=/;SameSite=None;Secure`;
          }
          if (data.OptanonAlertBoxClosed) {
            cookie = data.OptanonAlertBoxClosed;
            document.cookie = `${cookie};expires=${new Date(inOneYear).toUTCString()};path=/;SameSite=None;Secure`;
          }
          if (data.OptanonActiveGroups) {
            window.OnetrustActiveGroups = data.OptanonActiveGroups;
            window.OptanonActiveGroups = data.OptanonActiveGroups;
          }
          setTimeout(() => {
            let t = new CustomEvent('consent.onetrust', {
              detail: data.OptanonActiveGroups.split(',').filter(e => e)
            });
            window.dispatchEvent(t);
            if (window.dataLayer) {
              window.dataLayer.push({
                event: 'OneTrustGroupsUpdated',
                OptanonActiveGroups: data.OptanonActiveGroups,
                OnetrustActiveGroups: data.OptanonActiveGroups
              });
            }
          });
        });
      }
    });
    const showtimesOneTrust = (0,utils_utils__WEBPACK_IMPORTED_MODULE_0__.accessNested)(window.__INITIAL_STATE__, 'appData.apis.tracking.oneTrust', {});
    const boltOneTrust = (0,utils_utils__WEBPACK_IMPORTED_MODULE_0__.accessNested)(window.__INITIAL_STATE__, 'appData.options.oneTrustCookieConsent', {});
    if (showtimesOneTrust.displayInIframe || boltOneTrust.displayInIframe) {
      setTimeout(checkAndHideOneTrust, 100);
    }
  }
}
function checkAndHideOneTrust() {
  let checkAndHideStart = Date.now();
  const oneTrustWrappers = ['#onetrust-consent-sdk', '#optanon'];
  const optanonElement = [...document.querySelectorAll(oneTrustWrappers)].find(x => !!x);
  if (optanonElement) {
    let alertBoxWrappers = document.getElementsByClassName('optanon-alert-box-wrapper');
    if (alertBoxWrappers && alertBoxWrappers.length) {
      alertBoxWrappers[0].style.display = 'none';
    }
    optanonElement.style.display = 'none';
    return;
  }

  // Not found yet, keep checking
  if (Date.now() - checkAndHideStart < 30000) {
    setTimeout(checkAndHideOneTrust, 100);
  }
}

/***/ }),

/***/ "./static/src/utils/gdpr/oneTrust/index.js":
/*!*************************************************!*\
  !*** ./static/src/utils/gdpr/oneTrust/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADVERTISING: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_13__.ADVERTISING),
/* harmony export */   FUNCTIONAL: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_13__.FUNCTIONAL),
/* harmony export */   PERFORMANCE: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_13__.PERFORMANCE),
/* harmony export */   Pixel: () => (/* reexport safe */ _Pixel__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   STRICTLY_NECESSARY: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_13__.STRICTLY_NECESSARY),
/* harmony export */   TARGETING: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_13__.TARGETING),
/* harmony export */   connectToOneTrust: () => (/* reexport safe */ _connectToOneTrust__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   createPixelComponent: () => (/* reexport safe */ _createPixelComponent__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   displayModal: () => (/* binding */ displayModal),
/* harmony export */   maybeHandle: () => (/* reexport safe */ _maybeHandle__WEBPACK_IMPORTED_MODULE_10__.maybeHandle),
/* harmony export */   waitForOneTrust: () => (/* binding */ waitForOneTrust)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../categories */ "./static/src/utils/gdpr/categories.js");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories */ "./static/src/utils/gdpr/oneTrust/categories.js");
/* harmony import */ var _queue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../queue */ "./static/src/utils/gdpr/queue.js");
/* harmony import */ var _iframe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iframe */ "./static/src/utils/gdpr/oneTrust/iframe.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var utils_pendingPromise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/pendingPromise */ "./static/src/utils/pendingPromise.js");
/* harmony import */ var _dispatchEvent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dispatchEvent */ "./static/src/utils/gdpr/dispatchEvent.js");
/* harmony import */ var _Pixel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Pixel */ "./static/src/utils/gdpr/Pixel.js");
/* harmony import */ var _maybeHandle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../maybeHandle */ "./static/src/utils/gdpr/maybeHandle.js");
/* harmony import */ var _connectToOneTrust__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./connectToOneTrust */ "./static/src/utils/gdpr/oneTrust/connectToOneTrust.js");
/* harmony import */ var _createPixelComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../createPixelComponent */ "./static/src/utils/gdpr/createPixelComponent.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constants */ "./static/src/utils/gdpr/constants.js");














const displayModal = () => {
  if (typeof window === 'object') {
    const api = window.Optanon || window.OneTrust;
    if (api && typeof api === 'object' && typeof api.ToggleInfoDisplay === 'function') {
      api.ToggleInfoDisplay();
    }
  }
};
const loadPromise = (0,utils_pendingPromise__WEBPACK_IMPORTED_MODULE_7__["default"])();
const waitForOneTrust = async () => loadPromise;
_categories__WEBPACK_IMPORTED_MODULE_2__.addChangeListener(allowedCategories => {
  (0,_dispatchEvent__WEBPACK_IMPORTED_MODULE_8__.dispatchEvent)('categoriesUpdated', {
    categories: allowedCategories
  });
  _queue__WEBPACK_IMPORTED_MODULE_4__.drain(allowedCategories);
});
function oneTrustFix() {
  const oneTrustFix = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get(), 'appData.apis.tracking.oneTrust.oneTrustFix');
  const oneTrustOverlapFix = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get(), 'appData.apis.tracking.oneTrust.oneTrustOverlapFix');
  if (oneTrustFix && !getCookie('OptanonAlertBoxClosed')) {
    let buttons = document.querySelectorAll('.optanon-white-button-middle, .accept-cookies-button');
    const bindEvent = (el, eventName, eventHandler) => {
      if (!el) {
        return;
      }
      if (el.addEventListener) {
        el.addEventListener(eventName, eventHandler, false);
      } else if (el.attachEvent) {
        el.attachEvent('on' + eventName, eventHandler);
      }
    };

    // ???
    const close = () => {
      let banner = document.getElementById('optanon');
      if (!banner) return;
      banner.style.opacity = 0;
      banner.style.transition = 'opacity .8s';
      setTimeout(() => {
        const bg = document.getElementById('optanon-popup-bg');
        if (bg) {
          bg.style.display = 'none';
          banner.style.opacity = 1;
        }
      }, 800);
    };
    [...buttons].forEach(button => bindEvent(button, 'click', close));
  }
  if (oneTrustFix && !getCookie('OptanonAlertBoxClosed') && oneTrustOverlapFix) {
    setTimeout(() => {
      const pixelConsent = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get(), 'client.pixelConsent');
      const banner = document.querySelectorAll('.optanon-alert-box-wrapper');
      const bannerDisplay = banner[0] && banner[0].style && banner[0].style.getPropertyValue('display');
      if (pixelConsent && bannerDisplay && bannerDisplay === 'none') {
        const body = document.getElementsByTagName('body');
        body[0].style.transform = 'none';
      }
    }, 800);
  }
}
function getCookie(name) {
  let value = '; ' + document.cookie;
  let parts = value.split('; ' + name + '=');
  if (parts.length == 2) {
    return parts.pop().split(';').shift();
  }
}
if (typeof window !== 'undefined') {
  let isOptatonInitialised = false;
  const existingOptanonWrapper = window.OptanonWrapper;
  (0,_iframe__WEBPACK_IMPORTED_MODULE_5__.listenToIframe)();

  // let justRejectedAll = false;
  window.OptanonWrapper = function () {
    loadPromise.resolve();

    // Rejection handled in the ageGate store event
    // if (Store.get().client?.ofAge === false && !justRejectedAll) {
    // 	justRejectedAll = true;
    // 	window.Optanon.RejectAll();
    // 	return;
    // }
    // justRejectedAll = false;

    if (typeof existingOptanonWrapper === 'function') {
      existingOptanonWrapper();
    }
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'OneTrustGroupsUpdated'
      });
    }
    (0,_iframe__WEBPACK_IMPORTED_MODULE_5__["default"])();
    oneTrustFix();
    if (!isOptatonInitialised) {
      const activeGroups = window.OptanonActiveGroups;
      _categories__WEBPACK_IMPORTED_MODULE_3__.set(activeGroups);
      isOptatonInitialised = true;
    }
  };
  window.addEventListener('consent.onetrust', _ref => {
    let {
      detail
    } = _ref;
    return _categories__WEBPACK_IMPORTED_MODULE_3__.set(detail);
  });
  window.addEventListener('OneTrustGroupsUpdated', _ref2 => {
    let {
      detail
    } = _ref2;
    return _categories__WEBPACK_IMPORTED_MODULE_3__.set(detail);
  });
}

/***/ }),

/***/ "./static/src/utils/gdpr/queue.js":
/*!****************************************!*\
  !*** ./static/src/utils/gdpr/queue.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   drain: () => (/* binding */ drain),
/* harmony export */   triggerOrQueue: () => (/* binding */ triggerOrQueue)
/* harmony export */ });
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories */ "./static/src/utils/gdpr/categories.js");

const state = {
  queue: []
};
const triggerOrQueue = (managed, shouldQueue, args) => {
  if (_categories__WEBPACK_IMPORTED_MODULE_0__.has(managed.category)) {
    return managed.pixel.apply(managed, args);
  }
  if (shouldQueue) {
    return add(managed, args);
  }
};
const add = (managed, args) => {
  state.queue = [...state.queue, [managed, args]];
};
const drain = () => {
  const prevQueue = [...state.queue];
  state.queue = [];
  prevQueue.forEach(_ref => {
    let [managed, args] = _ref;
    return triggerOrQueue(managed, managed.shouldQueue, args);
  });
};

/***/ }),

/***/ "./static/src/utils/gdpr/sme/index.js":
/*!********************************************!*\
  !*** ./static/src/utils/gdpr/sme/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../categories */ "./static/src/utils/gdpr/categories.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./static/src/utils/gdpr/constants.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");




function addHandlerToCookieAccept() {
  let cookie = js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get('sme_cookie_en');
  const acceptButton = document.getElementById('sme_cookie_accept');
  if (!acceptButton && !cookie) {
    window.setTimeout(addHandlerToCookieAccept, 100);
    return;
  }
  if (cookie) {
    _categories__WEBPACK_IMPORTED_MODULE_0__.set([_constants__WEBPACK_IMPORTED_MODULE_1__.STRICTLY_NECESSARY, _constants__WEBPACK_IMPORTED_MODULE_1__.FUNCTIONAL, _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING, _constants__WEBPACK_IMPORTED_MODULE_1__.ADVERTISING, _constants__WEBPACK_IMPORTED_MODULE_1__.PERFORMANCE]);
    return;
  }
  acceptButton.addEventListener('click', () => {
    _categories__WEBPACK_IMPORTED_MODULE_0__.set([_constants__WEBPACK_IMPORTED_MODULE_1__.STRICTLY_NECESSARY, _constants__WEBPACK_IMPORTED_MODULE_1__.FUNCTIONAL, _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING, _constants__WEBPACK_IMPORTED_MODULE_1__.ADVERTISING, _constants__WEBPACK_IMPORTED_MODULE_1__.PERFORMANCE]);
  });
}
if (typeof window !== 'undefined') {
  const useSME = (0,utils_utils__WEBPACK_IMPORTED_MODULE_3__.accessNested)(window, '__INITIAL_STATE__.appData.options.SMECookieConsent', false);
  if (useSME) {
    addHandlerToCookieAccept();
  }
}

/***/ }),

/***/ "./static/src/utils/gdpr/tealium/categories.js":
/*!*****************************************************!*\
  !*** ./static/src/utils/gdpr/tealium/categories.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   set: () => (/* binding */ set)
/* harmony export */ });
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../categories */ "./static/src/utils/gdpr/categories.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./static/src/utils/gdpr/constants.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");



const dict = {
  'consent': _constants__WEBPACK_IMPORTED_MODULE_1__.STRICTLY_NECESSARY,
  'c1': _constants__WEBPACK_IMPORTED_MODULE_1__.STRICTLY_NECESSARY,
  'c2': _constants__WEBPACK_IMPORTED_MODULE_1__.PERFORMANCE,
  'c3': _constants__WEBPACK_IMPORTED_MODULE_1__.FUNCTIONAL,
  'c4': _constants__WEBPACK_IMPORTED_MODULE_1__.TARGETING
};
const set = ids => {
  const list = Array.isArray(ids) ? ids : ids.split(',');
  const newCats = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.arrayUnique)(list.map(id => dict[id]).filter(a => !!a));
  _categories__WEBPACK_IMPORTED_MODULE_0__.set(newCats);
};

/***/ }),

/***/ "./static/src/utils/gdpr/tealium/index.js":
/*!************************************************!*\
  !*** ./static/src/utils/gdpr/tealium/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADVERTISING: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_10__.ADVERTISING),
/* harmony export */   FUNCTIONAL: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_10__.FUNCTIONAL),
/* harmony export */   Pixel: () => (/* reexport safe */ _Pixel__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   STRICTLY_NECESSARY: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_10__.STRICTLY_NECESSARY),
/* harmony export */   TARGETING: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_10__.TARGETING),
/* harmony export */   connectToOneTrust: () => (/* reexport safe */ _oneTrust_connectToOneTrust__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   createPixelComponent: () => (/* reexport safe */ _createPixelComponent__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   maybeHandle: () => (/* reexport safe */ _maybeHandle__WEBPACK_IMPORTED_MODULE_7__.maybeHandle)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../categories */ "./static/src/utils/gdpr/categories.js");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories */ "./static/src/utils/gdpr/tealium/categories.js");
/* harmony import */ var _queue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../queue */ "./static/src/utils/gdpr/queue.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var _dispatchEvent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dispatchEvent */ "./static/src/utils/gdpr/dispatchEvent.js");
/* harmony import */ var _Pixel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Pixel */ "./static/src/utils/gdpr/Pixel.js");
/* harmony import */ var _maybeHandle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../maybeHandle */ "./static/src/utils/gdpr/maybeHandle.js");
/* harmony import */ var _oneTrust_connectToOneTrust__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../oneTrust/connectToOneTrust */ "./static/src/utils/gdpr/oneTrust/connectToOneTrust.js");
/* harmony import */ var _createPixelComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../createPixelComponent */ "./static/src/utils/gdpr/createPixelComponent.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constants */ "./static/src/utils/gdpr/constants.js");

// import Store from 'store/store';










_categories__WEBPACK_IMPORTED_MODULE_1__.addChangeListener(allowedCategories => {
  (0,_dispatchEvent__WEBPACK_IMPORTED_MODULE_5__.dispatchEvent)('categoriesUpdated', {
    categories: allowedCategories
  });
  _queue__WEBPACK_IMPORTED_MODULE_3__.drain(allowedCategories);
});

// just rely on window.utag.gdpr.getCookieValues
// we used to filter out most of the keys here but not anymore (just the ones that are not activated, with value "0") - categories.js is the file in charge of using the values or ignoring the irrelevant ones
function getCookieCategories() {
  if (!window.utag) {
    return [];
  }
  const values = window.utag.gdpr.getCookieValues();
  return Object.keys(values).filter(key => values[key] === '1' || values[key] === 'true');
}
if (typeof window !== 'undefined') {
  const useTealium = window.__INITIAL_STATE__?.appData?.options?.enableTealiumCookieConsent;
  if (useTealium) {
    const updateCategories = () => _categories__WEBPACK_IMPORTED_MODULE_2__.set(getCookieCategories());

    // as before, we update the categories when receiving this event (Disney telling us the cookie settings have been saved)
    window.addEventListener('consentdecided', updateCategories);
    // and if the script utag.js has already loaded (and set window.utag), we can check the categories immediately
    if (window.utag) {
      updateCategories();
    } else {
      // but if it's not loaded yet, then every time something finishes loading on the page (image, script, etc.) we check if it's the relevant script and check the categories if that's the case
      // (once utag.js is loaded, we remove the listener as we don't need to monitor loads anymore)
      const checkLoad = e => {
        if (e.target.matches('script[src$="utag.js"]')) {
          document.removeEventListener('load', checkLoad, true);
          updateCategories();
        }
      };
      document.addEventListener('load', checkLoad, true);
    }
  }
}

/***/ }),

/***/ "./static/src/utils/geoFencing.js":
/*!****************************************!*\
  !*** ./static/src/utils/geoFencing.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ geoFencing)
/* harmony export */ });
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");


let defaultRedirect = (geoFencedLocation, options) => {
  if (!geoFencedLocation) {
    return;
  }
  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    console.log('GEOFENCING GOING TO', geoFencedLocation);
    return;
  }

  // Try to prevent SOME infinite redirect loops (wouldn't catch a lot of things)
  let loopRisk = location.href === geoFencedLocation;
  if (!options?.allowSameHostRedirect) {
    let [, protocol, host] = /^((?:https?:)?\/\/)?([^/]+)/.exec(geoFencedLocation) || [];
    loopRisk = location.host === host;
  }
  if (!loopRisk) {
    location.href = geoFencedLocation;
  }
  return true;
};
let defaultGetRegionURL = countryCode => {
  return (0,utils_utils__WEBPACK_IMPORTED_MODULE_0__.accessNested)(store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get(), ['dynamicData', 'regions', countryCode, 'url']);
};

// We do want to redirect accessed.com/page/a/ to redirect.com/page/a/
// However, our sites sometimes do not live at the root of the vanity
//   e.g. movies.powster.com/studio/movie/region/page/a/ -> redirect.com/page/a/
// So we need to figure out which part of the path to keep in the redirection
let getPathFromRoot = () => {
  // NOTE: this assumes that this function is called on landing, before any page change occurs
  // Otherwise, look into extracting root from getPagePath, like getRelativePageUrl
  const root = new URL(window.__RELATIVE_ROOT__, location.href);
  // Ignore query string and hash (handled separately)
  const rootOriginAndPath = root.origin + root.pathname;
  const currentOriginAndPath = location.origin + location.pathname;
  // If "root" is somehow a more deeply nested path than "current", default to the full pathname
  return currentOriginAndPath.startsWith(rootOriginAndPath) ? currentOriginAndPath.replace(rootOriginAndPath, '') : location.pathname;
};
async function geoFencing(getGeo, options) {
  if (!options) {
    options = {};
  }
  let redirect = typeof options.redirect === 'function' ? options.redirect : defaultRedirect;
  let redirectionActive = typeof location !== 'undefined' && !location.search.match(/[?&]redirect=(off|false|0|no)/);
  if (!redirectionActive || !window.__INITIAL_STATE__) {
    return;
  }
  let appData = window.__INITIAL_STATE__.appData || {};
  let accessedPath = getPathFromRoot();
  let queryString = location.search;
  let hash = location.hash;
  const opt = (include, val) => include ? val : '';
  let getDestination = function (url) {
    let {
      stripPath,
      stripQS,
      stripHash
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return (stripPath ? url : (0,utils_utils__WEBPACK_IMPORTED_MODULE_0__.joinPaths)(url, accessedPath)) + opt(!stripQS, queryString) + opt(!stripHash, hash);
  };
  let geoFence = appData.geofencing || {};
  let redirectObj = appData.redirection || {};
  let appRegion = (0,utils_utils__WEBPACK_IMPORTED_MODULE_0__.accessNested)(appData, 'meta.region.slug');
  let countryCode = (await getGeo()).countryCode;

  // allow for regions to be ignored per request
  const regionAllow = geoFence.allowRegions || '';
  const ignoreFor = regionAllow.split(',').map(region => region.trim().toLowerCase()).filter(e => e);
  const ignoreGeoFence = ignoreFor.indexOf(countryCode) !== -1;
  // check if site is in correct country (and ignore if it is)
  if (appRegion !== countryCode && geoFence.geofencing && !ignoreGeoFence) {
    let geoFencedLocation = (0,utils_utils__WEBPACK_IMPORTED_MODULE_0__.accessNested)(geoFence, ['overrides', countryCode]);
    if (!geoFencedLocation) {
      let getRegionURL = typeof options.getRegionURL === 'function' ? options.getRegionURL : defaultGetRegionURL;
      let regionUrl = await getRegionURL(countryCode);
      geoFencedLocation = regionUrl || geoFence.defaultLink;
    }
    if (geoFencedLocation) {
      let url = geoFencedLocation;
      let stripPath = geoFence.stripRedirectionPath;
      if ((0,utils_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(geoFencedLocation)) {
        url = geoFencedLocation.url;
        if (geoFencedLocation.stripPath != undefined) {
          stripPath = geoFencedLocation.stripPath;
        }
      }
      return redirect(getDestination(url, {
        stripPath
      }), geoFence);
    }
  } else {
    // standard redirect behaviour
    try {
      let optionsList = Object.keys(redirectObj).map(k => redirectObj[k]).concat(redirectObj).filter(e => e?.url);
      let redirect;
      for (let option of optionsList) {
        let checklist = [];
        if (option.country) {
          let list = option.country.split(',').map(e => e.trim());
          checklist.push(list.includes(countryCode));
        }
        if (option.countryNot) {
          let list = option.countryNot.split(',').map(e => e.trim());
          checklist.push(!list.includes(countryCode));
        }

        // Nothing is actually async at this point but change back to this if needed
        // let result = (await Promise.all(checklist)).every(e => e);
        let result = checklist.every(e => e);
        if (result) {
          redirect = option;
          break;
        }
      }
      if (redirect) {
        return redirect(getDestination(redirect.url));
      }
    } catch (e) {
      console.log('Failed redirecting', e);
    }
  }
}

/***/ }),

/***/ "./static/src/utils/getCopyWithParams.js":
/*!***********************************************!*\
  !*** ./static/src/utils/getCopyWithParams.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCopyWithParams)
/* harmony export */ });
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");


// Gets a copy value, and replaces %$THING% by other copy data
// Example:
// copy = {
// 	'$MSG': 'Hello %$NAME%',
// 	'$NAME': '%$FIRST_NAME% %$SURNAME%',
// 	'$FIRST_NAME': 'John',
// 	'$SURNAME': 'Doe'
// };
// getCopyWithParams(copy, '$MSG'); // Hello John Doe
// getCopyWithParams(copy, 'Bye %$NAME%'); // Bye John Doe (if attribute is not a copy element, it uses that value directly)
// getCopyWithParams(copy, '%$FIRST_NAME% is %$MOOD%'); // John is $MOOD (if a variable is not defined, outputs its name)
// getCopyWithParams(copy, '100% with %$SURNAME%'); // 100% with Doe (a % sign alone still works)
// getCopyWithParams(copy, 'a \\%protected% part'); // a %protected% part (prepend with a \ to prevent parsing ; warning : needs to be doubled in string literals because of default JS escaping)
function _getCopyWithParams(copy, attribute, _n) {
  // Prevent infinite recursion (e.g. $A = %$B%, $B = %$A%)
  if (++_n > 10) return attribute;
  // Allows using %subObject.$VALUE%
  const content = (0,utils_utils__WEBPACK_IMPORTED_MODULE_0__.accessNested)(copy, attribute, attribute) + '';
  return content.replace(/(\\)?%([^% ]+)%/g, (_, backslash, val) => backslash ? '%' + val + '%' : _getCopyWithParams(copy, val, _n));
}
function getCopyWithParams(copy, attribute) {
  return _getCopyWithParams(copy, attribute, 0);
}

/***/ }),

/***/ "./static/src/utils/handleApi.js":
/*!***************************************!*\
  !*** ./static/src/utils/handleApi.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleApiResponse: () => (/* binding */ handleApiResponse),
/* harmony export */   handleApiResponseText: () => (/* binding */ handleApiResponseText)
/* harmony export */ });
function isError(res) {
  return res.status === 0 || res.status >= 400 && res.status < 600;
  // ^ no-cors fetch can return status of 0
}
async function handleApiResponse(res) {
  if (isError(res)) {
    // Do not call res.json(), some things need the error code (e.g. reports page)
    throw res;
  }
  return res.json();
}
async function handleApiResponseText(res) {
  if (isError(res)) {
    throw res;
  }
  return res.text();
}

/***/ }),

/***/ "./static/src/utils/historyPushEvent.js":
/*!**********************************************!*\
  !*** ./static/src/utils/historyPushEvent.js ***!
  \**********************************************/
/***/ (() => {

if (typeof window !== 'undefined') {
  let history = window.history;
  ['pushState', 'replaceState'].forEach(fn => {
    let base = history[fn].bind(history);
    let eventName = 'on' + fn.toLowerCase();
    history[fn] = function () {
      let returnValue = base(...arguments);
      if (typeof history[eventName] === 'function') {
        history[eventName]({
          state: arguments.length <= 0 ? undefined : arguments[0]
        });
      }
      return returnValue;
    };
  });
}

/***/ }),

/***/ "./static/src/utils/hooks.js":
/*!***********************************!*\
  !*** ./static/src/utils/hooks.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   call: () => (/* binding */ call),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   register: () => (/* binding */ register)
/* harmony export */ });
const callbacks = {};
function register(name, fn, priority) {
  if (typeof fn !== 'function') {
    return false;
  }
  if (!callbacks[name]) {
    callbacks[name] = [];
  }
  fn._priority = priority ?? 10;
  callbacks[name].push(fn);
  callbacks[name].sort((a, b) => a._priority - b._priority);
}
async function call(name, data, context) {
  // console.log(name, data);
  if (!callbacks[name]) {
    return data;
  }
  return callbacks[name].reduce(async (data, fn) => fn(await data, context), data);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  register,
  call
});

/***/ }),

/***/ "./static/src/utils/hoverDetection.js":
/*!********************************************!*\
  !*** ./static/src/utils/hoverDetection.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let added = false;
let lastTouchTime = 0;
const className = 'useHover';
function onMouseMove() {
  if (Date.now() - lastTouchTime >= 500) {
    document.body.classList.add(className);
  }
}
function onTouchStart() {
  document.body.classList.remove(className);
  lastTouchTime = Date.now();
}
function remove() {
  window.removeEventListener('mousemove', onMouseMove, true);
  window.removeEventListener('touchstart', onTouchStart, true);
  document.body.classList.remove(className);
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  if (added) {
    return;
  }
  window.addEventListener('mousemove', onMouseMove, true);
  window.addEventListener('touchstart', onTouchStart, true);
  document.body.classList.add(className);
  return {
    remove
  };
}

/***/ }),

/***/ "./static/src/utils/isWebPSupported.js":
/*!*********************************************!*\
  !*** ./static/src/utils/isWebPSupported.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isWebPSupported: () => (/* binding */ isWebPSupported)
/* harmony export */ });
/* harmony import */ var utils_cached__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/cached */ "./static/src/utils/cached.js");

// import pendingPromise from './pendingPromise';

const isWebPSupported = (0,utils_cached__WEBPACK_IMPORTED_MODULE_0__["default"])(() => {
  if (typeof window === 'undefined') {
    return;
  }
  let elem = document.createElement('canvas');
  return elem?.toDataURL('image/webp')?.startsWith('data:image/webp');

  // Ideally should use this but need to change everything using it to be async
  // let promise = pendingPromise();
  // let img = new Image();
  // img.onload = () => promise.resolve(!!img.width);
  // img.onerror = () => promise.resolve(false);
  // img.src = 'data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==';
  // return promise;
});


/***/ }),

/***/ "./static/src/utils/math.js":
/*!**********************************!*\
  !*** ./static/src/utils/math.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Easing: () => (/* binding */ Easing),
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   dist: () => (/* binding */ dist),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   ilerp: () => (/* binding */ ilerp),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   mod: () => (/* binding */ mod),
/* harmony export */   scale: () => (/* binding */ scale)
/* harmony export */ });
// Clamps a value between two bounds. If a bound is undefined, ignore that bound.
// Note: the order of operations is important for undefined handling
function clamp(v, min, max) {
  return v <= min ? min : v >= max ? max : v;
}

// Linear interpolation between a and b
//   usually you want t in [0, 1] (0 -> a, 1 -> b)
function lerp(t, a, b) {
  return a + t * (b - a);
}

// Inverse linear interpolation: gets the progress of a value between two bounds
// ilerp(20, 0, 50) === 0.4 (because 20 is 40% of the way between 0 and 50)
function ilerp(t, a, b) {
  return (t - a) / (b - a);
}

// Similar to n % m, but returns a positive number even if n is negative
function mod(n, m) {
  if (!m) {
    return 0;
  }
  let v = n % m;
  return v < 0 ? v + m : v;
}

// Moves a number from an interval to another
// e.g. 2.2 from [2, 3] to [0, 100] gives 20 (20% on the way from 2 to 3)
// clampResult to limit the result to the desired interval
function scale(n, fromMin, fromMax, toMin, toMax, clampResult, easing) {
  let p = ilerp(n, fromMin, fromMax);
  if (clampResult) {
    p = clamp(p, 0, 1);
  }
  if (easing) {
    if (typeof easing === 'string') {
      easing = Easing[easing];
    }
    if (typeof easing === 'function') {
      p = easing(p);
    }
  }
  return lerp(p, toMin, toMax);
}

// Dot product
function dot(x1, y1, x2, y2) {
  return x1 * x2 + y1 * y2;
}

// Cartesian distance between two 2D points
function dist(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

// Taken from https://gist.github.com/gre/1650294
// I put a caps because we alread have some variables called `easing`.
const Easing = {
  // no easing, no acceleration
  linear: t => t,
  // small acceleration, large deceleration (approximation of CSS "ease", default transition timing function)
  // from https://github.com/mietek/ease-tween
  ease: t => 1.0042954579734844 * Math.exp(-6.4041738958415664 * Math.exp(-7.2908241330981340 * t)),
  // accelerating from zero velocity
  quadIn: t => t * t,
  // decelerating to zero velocity
  quadOut: t => t * (2 - t),
  // acceleration until halfway, then deceleration
  quadInOut: t => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  // accelerating from zero velocity
  cubicIn: t => t * t * t,
  // decelerating to zero velocity
  cubicOut: t => --t * t * t + 1,
  // acceleration until halfway, then deceleration
  cubicInOut: t => t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  // accelerating from zero velocity
  quartIn: t => t * t * t * t,
  // decelerating to zero velocity
  quartOut: t => 1 - --t * t * t * t,
  // acceleration until halfway, then deceleration
  quartInOut: t => t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
  // accelerating from zero velocity
  quintIn: t => t * t * t * t * t,
  // decelerating to zero velocity
  quintOut: t => 1 + --t * t * t * t * t,
  // acceleration until halfway, then deceleration
  quintInOut: t => t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
};

/***/ }),

/***/ "./static/src/utils/parseQueryString.js":
/*!**********************************************!*\
  !*** ./static/src/utils/parseQueryString.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let decodeSafe = v => {
  try {
    return decodeURIComponent(v);
  } catch (e) {
    return v;
  }
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  let queryString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : typeof location !== 'undefined' ? location.search : '';
  return (queryString || '').slice(1).split('&').reduce((qs, el) => {
    const [name, ...value] = el.split('=');
    qs[name] = value.length ? decodeSafe(value.join('=')) : true;
    return qs;
  }, {});
}

/***/ }),

/***/ "./static/src/utils/pendingPromise.js":
/*!********************************************!*\
  !*** ./static/src/utils/pendingPromise.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  let resolve;
  let reject;
  let prom = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  prom.resolve = resolve;
  prom.reject = reject;
  return prom;
}

/***/ }),

/***/ "./static/src/utils/pure.js":
/*!**********************************!*\
  !*** ./static/src/utils/pure.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var shallow_equals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shallow-equals */ "./node_modules/shallow-equals/index.js");
/* harmony import */ var shallow_equals__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shallow_equals__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Tells if a component should update given its next props and state.
**/
function shouldComponentUpdate(nextProps, nextState) {
  return !shallow_equals__WEBPACK_IMPORTED_MODULE_0___default()(nextProps, this.props, isSameProp) || !shallow_equals__WEBPACK_IMPORTED_MODULE_0___default()(nextState, this.state);
}

/**
 * Makes the given component "pure".
**/
function pureRenderDecorator(target) {
  if (target?.kind !== 'class') {
    return target;
  }
  target.finisher = Base => class extends Base {
    shouldComponentUpdate() {
      return shouldComponentUpdate.apply(this, arguments);
    }
  };
  return target;
}
function isSameProp(a, b) {
  return a === b || Array.isArray(a) && Array.isArray(b) && !a.length && !b.length;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pureRenderDecorator);

/***/ }),

/***/ "./static/src/utils/runHTMLScripts.js":
/*!********************************************!*\
  !*** ./static/src/utils/runHTMLScripts.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function execScripts(node) {
  if (!node || !node.children) {
    return;
  }
  const children = [...node.children];
  for (let child of children) {
    if (child.tagName !== 'SCRIPT') {
      await execScripts(child);
      continue;
    }
    try {
      let copy = document.createElement('script');
      copy.text = child.innerHTML;
      [...child.attributes].forEach(attr => copy.setAttribute(attr.name, attr.value));
      // child.parentElement.replaceChild(copy, child);
      // Move all scripts out, directly in the body
      child.remove();
      document.body.appendChild(copy);
      if (copy.src && !copy.hasAttribute('async') && !copy.hasAttribute('defer')) {
        // Meant to be executed synchronously
        await new Promise(res => copy.onload = res);
      }
    } catch (e) {
      console.error('Error in script', e);
    }
  }
}
/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(code) {
  const pixelsElem = document.createElement('div');
  pixelsElem.innerHTML = code;
  document.body.appendChild(pixelsElem);
  await execScripts(pixelsElem);
  // If all the children were scripts, do not leave an empty div in the HTML
  if (!pixelsElem.firstChild) {
    pixelsElem.remove();
  }
}

/***/ }),

/***/ "./static/src/utils/slugify.js":
/*!*************************************!*\
  !*** ./static/src/utils/slugify.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slugify)
/* harmony export */ });
function slugify(str) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!str || typeof str !== 'string') {
    return str;
  }
  if (options.replaceAccentedChars) {
    str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  return str.normalize().replace(/[^\w\s$*_+~.()'"!\-:@]+/g, '').trim().replace(/\s+/g, '-').toLowerCase();
}

/***/ }),

/***/ "./static/src/utils/smoothScroll.js":
/*!******************************************!*\
  !*** ./static/src/utils/smoothScroll.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSmoothScrolling: () => (/* binding */ isSmoothScrolling),
/* harmony export */   smoothScrollBy: () => (/* binding */ smoothScrollBy),
/* harmony export */   smoothScrollTo: () => (/* binding */ smoothScrollTo)
/* harmony export */ });
/* SEE BELOW FOR HOW TO USE */
let isIOS = function () {
  if (typeof navigator === 'undefined') {
    return false;
  }
  const agent = ('' + navigator.userAgent).toLowerCase();
  return agent.indexOf('ipad') !== -1 || agent.indexOf('iphone') !== -1;
}();
let now = Date.now || (() => new Date().getTime());
function getScroll(elem, hor) {
  if (elem === window) {
    return (hor ? window.pageXOffset || document.documentElement.scrollLeft : window.pageYOffset || document.documentElement.scrollTop) || 0;
  }
  return hor ? elem.scrollLeft : elem.scrollTop;
}
function setScroll(elem, v, hor) {
  if (elem === window) {
    window.scrollTo(hor ? v : getScroll(window, true), hor ? getScroll(window, false) : v);
  } else {
    elem[hor ? 'scrollLeft' : 'scrollTop'] = v;
  }
}
function getElemPos(e, parent, hor) {
  let prop = hor ? 'offsetLeft' : 'offsetTop';
  let pos = e[prop];
  let last = e;
  while ((e = e.parentElement) && e !== parent) {
    if (e === last.offsetParent) {
      last = e;
      pos += e[prop];
    }
  }
  if (parent !== window && e !== parent) return undefined;
  return pos;

  // Other possibility
  // let eBounds = e.getBoundingClientRect();
  // let pBounds = parent.getBoundingClientRect();
  // return eBounds[hor ? 'left' : 'top'] - pBounds[hor ? 'left' : 'top'];
}
function endScroll(elem) {
  let t = elem._smthscrl;
  if (!t) return;
  cancelAnimationFrame(t.timer);
  t.timer = null;
  if (typeof t.callback === 'function') {
    t.callback();
  }
  t.callback = null;
}
const relativeToKeywords = {
  top: 0,
  middle: 50,
  bottom: 100
};
function oneDir(elem, p, horizontal) {
  let t = elem._smthscrl;
  let currentScroll = getScroll(elem, horizontal);
  let dirIndex = horizontal ? 1 : 0;
  if (t.previousScroll[dirIndex] == undefined) {
    t.previousScroll[dirIndex] = currentScroll;
  }
  // Try to not block the user from scrolling. The user shouldn't be forced to watch the full scrolling animation
  // Disabled that on iOS as it seemed to be stopping too early
  //   (guessing some rounding or smoothscroll happens, which changes the scroll without the user touching)
  if (currentScroll !== t.previousScroll[dirIndex] && !t.force && !isIOS) {
    return endScroll(elem);
  }
  let to = t.to;
  if (Array.isArray(to)) {
    to = to[dirIndex];
  }
  if (to instanceof Element) {
    to = getElemPos(t.to, elem, horizontal);
    let sizeProp = horizontal ? 'clientWidth' : 'clientHeight';
    let rT = t.relativeTo;
    if (rT === 'view') {
      let maxPos = to - t.offsetStart;
      let minPos = to - (elem[sizeProp] - t.to[sizeProp]) + t.offsetEnd;
      to = Math.min(Math.max(currentScroll + t.offset, minPos), maxPos);
    } else {
      rT = relativeToKeywords[rT] || parseFloat(rT) || 0;
      to -= Math.max(elem[sizeProp] - t.to[sizeProp], 0) * rT * 0.01;
    }
  }
  to -= t.offset;
  let newValue = t.from[dirIndex] + p * (to - t.from[dirIndex]);
  setScroll(elem, newValue, horizontal);
  t.previousScroll[dirIndex] = getScroll(elem, horizontal);
}
const directions = {
  ver: [false],
  hor: [true],
  both: [false, true]
};
function loop(elem) {
  let t = elem._smthscrl;
  if (!t) {
    return;
  }
  // If t.timer is null, the scrolling has been stopped, don't request the next frame
  if (t.timer) {
    t.timer = requestAnimationFrame(loop.bind(this, elem));
  }
  let time = now() - t.start;
  let duration = t.duration;
  if (time >= duration) {
    time = duration;
  }
  let p = duration ? t.easing(time / duration) : 1;
  let directionsArray = directions[t.direction] || [];
  directionsArray.forEach(hor => oneDir(elem, p, hor));
  if (!duration || time >= duration) {
    return endScroll(elem);
  }
}

// elem     : element to scroll (parent container, having a scrollbar)
//   - if elem is null or the string 'root', the script will use either body or the documentElement based on which is detected to have a scrollbar
// to       : scroll to this. Can be a number (scrollTop = to at the end) or an element ! (more on that later)
// dur      : duration (in ms). Default to 300. 0 to instant scroll.
// settings : object containing
//   - callback : callback to be called after the scroll is ended (either goal reached or the user scrolled during it)
//   - direction: 'ver' (default) for vertical, 'hor' for horizontal or 'both' (in this case, to can be an array of two numbers, [verticalPos, horizontalPos])
//   - easing: a function taking a number v between 0 and 1 as argument and returning another number
//       easing(0) should be 0 and easing(1) should be 1 ! (can be used to handle acceleration)
//       default to ease-out-quad (decelerating)
//       See https://gist.github.com/gre/1650294 for a list of basic functions
//   - offset: number to be subtracted from the current scroll (useful if `to` is not a number)
//       an offset of 20 would scroll 20 pixels past the required value
//   - relativeTo: used when `to` is an element. Indicates where the element should be on the screen (works like background-position).
//       'top' (default): top of `to` is aligned with the top of elem (eq to '0%')
//       'bottom': bottom of `to` is aligned with the bottom of elem (eq to '100%')
//       'middle': middle of `to` is aligned with the middle of elem (eq to '50%')
//       'x%': aligns the xth percent of `to` with the xth percent of `elem`
//       'view': try to make the element visible (fully if possible)
//          will not scroll if the element is already fully in view
//          if to is bigger than elem, makes sure the top of to is visible
//   - offsetStart: used when `to` is an element and relativeTo is 'view'. ensure a minimum margin from the top or left, depending on the direction (can be negative)
//   - offsetEnd: used when `to` is an element and relativeTo is 'view'. ensure a minimum margin from the bottom or right, depending on the direction (can be negative)
//   - force: boolean (default false) to force the smoothScroll to finish (even if the user scrolled)
function smoothScrollTo(elem, to, dur, settings) {
  if (elem === null || elem === 'root') {
    let doc = document;
    elem = doc.scrollingElement || (doc.documentElement.scrollHeight > doc.body.scrollHeight && doc.compatMode.startsWith('CSS1') ? doc.documentElement : doc.body);
  }
  if (!elem || to === undefined) {
    return;
  }
  let t = elem._smthscrl;
  if (t && t.timer) {
    endScroll(elem);
  }
  let defaultEasing = t => 1 - (t = 1 - t) * t;
  settings = settings || {};
  let dir = 'ver';
  switch (settings.direction) {
    case 'horizontal':
    case 'hor':
      dir = 'hor';
      break;
    case 'both':
      dir = 'both';
      break;
  }
  // Legacy horizontal mode
  if (settings.horizontal) dir = 'hor';
  let currentScroll = [undefined, undefined];
  if (dir === 'ver' || dir === 'both') currentScroll[0] = getScroll(elem, false);
  if (dir === 'hor' || dir === 'both') currentScroll[1] = getScroll(elem, true);
  let start = now();
  if (settings.timeStart) {
    start = settings.timeStart < 60000 ? start + settings.timeStart : settings.timeStart;
  }
  if (typeof dur === 'function') {
    let from = dir === 'both' ? currentScroll : currentScroll[dir === 'ver' ? 0 : 1];
    dur = dur(from, to, elem);
  }
  dur = Number.isFinite(+dur) ? Math.abs(+dur) : 300;
  t = elem._smthscrl = {
    timer: null,
    easing: typeof settings.easing === 'function' ? settings.easing : defaultEasing,
    to: to,
    direction: dir,
    offset: settings.offset || 0,
    relativeTo: settings.relativeTo || 'top',
    offsetStart: settings.offsetStart || 0,
    offsetEnd: settings.offsetEnd || 0,
    from: currentScroll,
    previousScroll: [undefined, undefined],
    duration: dur,
    force: !!settings.force,
    callback: settings.callback,
    start: start
  };
  if (dur) {
    t.timer = requestAnimationFrame(loop.bind(this, elem));
  } else {
    loop(elem);
  }
  return {
    stop: endScroll.bind(this, elem)
  };
}

// Like smoothScrollTo but with v being an offset instead of an absolute value (v can't be an element)
function smoothScrollBy(elem, v, d, settings) {
  smoothScrollTo(elem, getScroll(elem, settings && settings.horizontal) + v, d, settings);
}

// Old way to scroll to an element
// Use smoothScrollTo with v an element to achieve this now.
// export function scrollToElem(elem, elem2, d, settings) {
// 	let top = getElemPos(elem2, elem, settings.horizontal);
// 	if (top == undefined) return;
// 	smoothScrollTo(elem, top, d, settings);
// }

function isSmoothScrolling(elem) {
  let t = elem._smthscrl;
  return t && t.timer;
}

/***/ }),

/***/ "./static/src/utils/stringWithParams.js":
/*!**********************************************!*\
  !*** ./static/src/utils/stringWithParams.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ stringWithParams)
/* harmony export */ });
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");


// Gets a value, and replaces %$THING% by other values from an object recursively
// Example:
// copy = {
// 	'$MSG': 'Hello %$NAME%',
// 	'$NAME': '%$FIRST_NAME% %$SURNAME%',
// 	'$FIRST_NAME': 'John',
// 	'$SURNAME': 'Doe'
// };
// stringWithParams(copy, '$MSG'); // Hello John Doe
// stringWithParams(copy, 'Bye %$NAME%'); // Bye John Doe (if attribute is not a copy element, it uses that value directly)
// stringWithParams(copy, '%$FIRST_NAME% is %$MOOD%'); // John is $MOOD (if a variable is not defined, outputs its name)
// stringWithParams(copy, '100% with %$SURNAME%'); // 100% with Doe (a % sign alone still works)
// stringWithParams(copy, 'a \\%protected% part'); // a %protected% part (prepend with a \ to prevent parsing ; warning : needs to be doubled in string literals because of default JS escaping)
function _stringWithParams(params, str, _n) {
  // Prevent infinite recursion (e.g. $A = %$B%, $B = %$A%)
  if (++_n > 10) return str;
  // Allow using %subObject.$VALUE%
  const content = (0,utils_utils__WEBPACK_IMPORTED_MODULE_0__.accessNested)(params, str, str) + '';
  return content.replace(/(\\)?%([^% ]+)%/g, (m, s, g) => s ? '%' + g + '%' : _stringWithParams(params, g, _n));
}
function stringWithParams(params, str) {
  return _stringWithParams(params, str, 0);
}

/***/ }),

/***/ "./static/src/utils/tabbingDetection.js":
/*!**********************************************!*\
  !*** ./static/src/utils/tabbingDetection.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let added = false;
const className = 'tabbing';
function onKeyDown(e) {
  if (e.key === 'Tab') {
    document.body.classList.add(className);
  }
}
function onMouseDown() {
  document.body.classList.remove(className);
}
const register = () => {
  if (added) {
    return;
  }
  added = true;
  window.addEventListener('keydown', onKeyDown, true);
  window.addEventListener('mousedown', onMouseDown, true);
  return {
    remove
  };
};
const remove = () => {
  if (!added) {
    return;
  }
  added = false;
  window.removeEventListener('keydown', onKeyDown, true);
  window.removeEventListener('mousedown', onMouseDown, true);
  document.body.classList.remove(className);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (register);

/***/ }),

/***/ "./static/src/utils/tryToPlayVideo.js":
/*!********************************************!*\
  !*** ./static/src/utils/tryToPlayVideo.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Manually play a video to catch low power mode play error (not triggered onError).
**/

/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(video) {
  await video.play();
}

/***/ }),

/***/ "./static/src/utils/utils.js":
/*!***********************************!*\
  !*** ./static/src/utils/utils.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   accessNested: () => (/* binding */ accessNested),
/* harmony export */   addClass: () => (/* binding */ addClass),
/* harmony export */   addToQuery: () => (/* binding */ addToQuery),
/* harmony export */   appDataDate: () => (/* binding */ appDataDate),
/* harmony export */   arrayUnion: () => (/* binding */ arrayUnion),
/* harmony export */   arrayUnique: () => (/* binding */ arrayUnique),
/* harmony export */   arraysEqual: () => (/* binding */ arraysEqual),
/* harmony export */   asList: () => (/* binding */ asList),
/* harmony export */   commaSeparatedList: () => (/* binding */ commaSeparatedList),
/* harmony export */   condClass: () => (/* binding */ condClass),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   displayWhen: () => (/* binding */ displayWhen),
/* harmony export */   encodeHtml: () => (/* binding */ encodeHtml),
/* harmony export */   encodeHtmlRecursively: () => (/* binding */ encodeHtmlRecursively),
/* harmony export */   escapeObjectValues: () => (/* binding */ escapeObjectValues),
/* harmony export */   escapeString: () => (/* binding */ escapeString),
/* harmony export */   getStylingImagePath: () => (/* binding */ getStylingImagePath),
/* harmony export */   hasClass: () => (/* binding */ hasClass),
/* harmony export */   hasOnlyNumericKeys: () => (/* binding */ hasOnlyNumericKeys),
/* harmony export */   isEmpty: () => (/* binding */ isEmpty),
/* harmony export */   isEmptyObject: () => (/* binding */ isEmptyObject),
/* harmony export */   isNumeric: () => (/* binding */ isNumeric),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   joinClasses: () => (/* binding */ joinClasses),
/* harmony export */   joinPaths: () => (/* binding */ joinPaths),
/* harmony export */   loadScript: () => (/* binding */ loadScript),
/* harmony export */   objToArr: () => (/* binding */ objToArr),
/* harmony export */   once: () => (/* binding */ once),
/* harmony export */   parseDate: () => (/* binding */ parseDate),
/* harmony export */   parseNumericArray: () => (/* binding */ parseNumericArray),
/* harmony export */   pathOnly: () => (/* binding */ pathOnly),
/* harmony export */   removeClass: () => (/* binding */ removeClass),
/* harmony export */   sanitizeObj: () => (/* binding */ sanitizeObj),
/* harmony export */   sortObjectByOrder: () => (/* binding */ sortObjectByOrder),
/* harmony export */   textToJsxArray: () => (/* binding */ textToJsxArray),
/* harmony export */   throttle: () => (/* binding */ throttle),
/* harmony export */   toQueryString: () => (/* binding */ toQueryString),
/* harmony export */   toggleClass: () => (/* binding */ toggleClass),
/* harmony export */   triggerAnim: () => (/* binding */ triggerAnim)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");

function debounce(f, d) {
  if (d == undefined) d = 250;
  let timer = null;
  let args = [];
  let thisArg = null;
  function trigger() {
    f.apply(thisArg, args);
  }
  function onEvent() {
    thisArg = this;
    args = [].slice.call(arguments);
    clearTimeout(timer);
    timer = setTimeout(trigger, d);
  }
  return onEvent;
}
function throttle(fn, threshold, scope) {
  if (typeof window === 'undefined') {
    return fn;
  }
  if (threshold == undefined) threshold = 250;
  let timeout = threshold === 'frame' ? requestAnimationFrame : setTimeout;
  let clear = threshold === 'frame' ? cancelAnimationFrame : clearTimeout;
  let last;
  let deferTimer;
  return function () {
    let context = scope || this;
    let now = Date.now();
    let args = arguments;
    if (last && now < last + threshold) {
      clear(deferTimer);
      deferTimer = timeout(() => {
        last = Date.now();
        fn.apply(context, args);
      }, threshold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

// Make a function only callable once
// Saves the return value and returns it for subsequent calls
function once(f) {
  let done = false;
  let result;
  return function () {
    if (done) return result;
    done = true;
    return result = f.apply(this, arguments);
  };
}

// DOM classNames handling

// Long versions accepting arrays
// function hasClass(elem, className) {
// 	if (!elem || !className) return false;
// 	let arr = Array.isArray(className) ? className : className.split(' ');
// 	if(arr.length > 1) return arr.every(cn=>hasClass(elem, cn));
// 	className = arr[0];
// 	return (' ' + elem.className + ' ').indexOf(' ' + className + ' ') !== -1;
// }
// function addClass(elem, className) {
// 	if (!elem || !className) return;
// 	let arr = Array.isArray(className) ? className : className.split(' ');
// 	if(arr.length > 1) return arr.forEach(cn=>addClass(elem, cn));
// 	className = arr[0];
// 	if(!hasClass(elem, className))
// 		elem.className += ' ' + className;
// }
// function removeClass(elem, className) {
// 	if (!elem || !className) return;
// 	let arr = Array.isArray(className) ? className : className.split(' ');
// 	if(arr.length > 1) return arr.forEach(cn=>removeClass(elem, cn));
// 	className = arr[0];
// 	if(hasClass(elem, className))
// 		elem.className = (' ' + elem.className + ' ').replace(className, ' ').slice(1,-1);
// }
// function toggleClass(e,c) { (hasClass(e,c) ? removeClass : addClass)(e,c); }

// Short versions
function hasClass(e, c) {
  return (' ' + e.className + ' ').indexOf(' ' + c + ' ') !== -1;
}
function addClass(e, c) {
  if (!hasClass(e, c)) e.className += (e.className ? ' ' : '') + c;
}
// function removeClass(e, c) { e.className = e.className.split(' ').filter(v => v != c).join(' '); }
function removeClass(e, c) {
  e.className = (' ' + e.className + ' ').replace(' ' + c + ' ', ' ').slice(1, -1);
}
function triggerAnim(e, c) {
  removeClass(e, c);
  e.offsetWidth;
  addClass(e, c);
}
function toggleClass(e, c) {
  (hasClass(e, c) ? removeClass : addClass)(e, c);
}

// Easy way to add a class based on a condition (also check the class exists)
function condClass(cond, className) {
  if (arguments.length === 1) {
    className = cond;
    cond = true;
  }
  if (Array.isArray(className)) return className.map(cn => condClass(cond, cn)).join('');
  return cond && className && typeof className === 'string' ? ' ' + className : '';
}

// Turns an object to a string
// { abc: true, def: false, xyz: true } -> 'abc xyz'
// Warning: "s" has a special value and be used as a lookup object (meant to be an imported sss)
//   will use the class s.abc instead of 'abc' if s object specified and the value exists
//   { s: { abc: 'comp__abc', def: 'comp__def' }, abc: true } -> 'comp__abc'
function expandClasses(classes) {
  if (!classes || typeof classes !== 'object' || Array.isArray(classes)) {
    return classes;
  }
  let mapKey = 's';
  let map = classes[mapKey];
  let hasMap = map && typeof map === 'object';
  let list = Object.keys(classes).filter(key => (!hasMap || key !== mapKey) && classes[key]);
  if (hasMap) {
    list = list.map(e => map[e] || e);
  }
  return list.join(' ');
}
/**
 * Join several classes together.
 * @example
 * joinClasses('square', 'blue', false && 'active');
 * // returns 'square blue'
 * @param {...string} classNames - the class names to join
 * @return {string} the full class name
**/
function joinClasses() {
  return [].concat.apply([], arguments).map(expandClasses).filter(e => e).join(' ');
}

// Access to a property of a nested object, or return a default value if the path cannot be accessed
// For example, if obj is { nested: { property : [ 'hello' ] } }
// to get 'hello', path would need to be 'nested.property.0' or ['nested', 'property', 0]
// if we use 'non.existing.path' as a path, it would return def
function accessNested(obj, path, def) {
  if (typeof path === 'string') path = path ? path.split('.') : [];
  if (!Array.isArray(path)) return def; // Path is not an array
  let len = path.length;
  if (!len) return obj;
  for (let i = 0; i < len; i++) {
    let prop = path[i];
    if (!obj || !Object.prototype.hasOwnProperty.call(obj, prop)) {
      return def;
    }
    obj = obj[prop];
  }
  return obj;
}
// mini version with less checks for console one-liners:
// var n=(o,p,k)=>(o&&(p=p.split?p.split('.'):p).length)?n(o[p.shift()],p):o;

// Used for example with appData.pages.showtimes.data.stuff, when you can specify either one or a list of values
// - if an array, returns it
// - if a string (e.g. 'hello'), returns it as the only element: ['hello']
// - if an object (e.g. { 1: 'abc', 2: 'def' }) returns the values: ['abc', 'def']
// - if an object of booleans (e.g. { abc: true, def: true, ghi: false }) returns the keys for true values ['abc', 'def']
// Also removes falsy values
function asList(value) {
  if (!value) return [];
  if (typeof value !== 'object') return [value];
  if (!Array.isArray(value)) value = Object.keys(value).map(k => typeof value[k] === 'boolean' ? value[k] && k : value[k]);
  return value.filter(e => e);
}
function commaSeparatedList(value) {
  if (!value || typeof value !== 'string') {
    return [];
  }
  return value.split(',').map(a => a.trim()).filter(a => a);
}

/* ---- ARRAY STUFF ---- */

// Returns an array with only unique values (remove duplicates)
function arrayUnique(array) {
  if (!array || !Array.isArray(array)) return array;
  return [...new Set(array)];
}

// Returns the union of a set of arrays ([1,2,3], [2,3,4] => [1,2,3,4])
function arrayUnion( /* array1, array2, ... */
) {
  return arrayUnique([].concat.apply([], arguments));
}

/* ---- ----------- ---- */

// Return a date based on a field set in thundr
// If a number, consider it a timestamp
// If a string yyyy-MM-dd, get the beginning of this day in local time (usually release dates for example are local)
// If something else tries new Date(val)
function appDataDate(val) {
  if (!isNaN(val)) {
    return new Date(+val);
  }
  if (typeof val === 'string') {
    let m = val.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
    return m ? new Date(+m[1], m[2] - 1, +m[3]) : new Date(val);
  }
  return new Date(NaN);
}
function sortObjectByOrder(object, mapCallback, property) {
  if (!object) {
    return [];
  }
  if (typeof mapCallback === 'string' && arguments.length === 2) {
    property = mapCallback;
    mapCallback = undefined;
  }
  property = property || 'order';
  let getProperty = typeof property === 'function' ? property : obj => obj?.[property];
  let objectByOrder = Object.keys(object).map(k => ({
    key: k,
    value: object[k]
  })).sort((obj1, obj2) => {
    if (!obj1.value) return 1;
    if (!obj2.value) return -1;
    let prop1 = getProperty(obj1.value, obj1.key);
    let prop2 = getProperty(obj2.value, obj2.key);
    // Keep it ==, not === to also get nulls
    let noProp1 = prop1 == undefined;
    let noProp2 = prop2 == undefined;
    // If both don't have an order set, sort them by keys (so that it works with 1, 2, etc.)
    if (noProp1 && noProp2) return obj1.key.localeCompare(obj2.key, undefined, {
      numeric: true
    });
    if (noProp1) return 1;
    if (noProp2) return -1;
    let stringCompare = isNaN(prop1) || isNaN(prop2);
    // sort them by order
    return stringCompare ? prop1.toString().localeCompare(prop2.toString()) : prop1 - prop2;
  });
  if (typeof mapCallback !== 'function') {
    mapCallback = value => value;
  }
  return objectByOrder.map((el, i, all) => mapCallback(el.value, el.key, i, all));
}
function addToQuery(q, path, o) {
  if (o == null) {
    return q;
  }
  if (typeof o !== 'object') {
    return q[path] = o;
  }
  const ks = Object.keys(o);
  ks.forEach(k => addToQuery(q, path + '[' + k + ']', o[k]));
  return q;
}
function toQueryString(obj) {
  if (!obj) return '';
  let value = obj;
  if (typeof obj !== 'string') {
    let query = {};
    Object.keys(obj).forEach(key => addToQuery(query, key, obj[key]));
    value = Object.keys(query).reduce((a, k) => {
      let v = query[k];
      if (v == null) return a;
      let addedVal = encodeURIComponent(k);
      if (typeof v !== 'boolean' && v !== '') {
        addedVal += '=' + encodeURIComponent(v);
      }
      a.push(addedVal);
      return a;
    }, []).join('&');
  }
  return value ? '?' + value : '';
}

// Parse dates in a few formats (e.g. dd/mm/yyyy ; yyyy-mm-dd)
function parseDate(d) {
  if (!d || d instanceof Date) {
    return d;
  }
  if (typeof d === 'number') {
    return new Date(d);
  }
  if (typeof d !== 'string') {
    return undefined;
  }
  // dd/mm/yyyy with optional day and month
  let match = d.match(/^(?:(?:([0-9]{1,2})\/)?([0-9]{1,2})\/)?([0-9]{4})(?:,? (\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?$/);
  if (match) {
    return new Date(+match[3], +(match[2] || 1) - 1, +(match[1] || 1), +match[4] || 0, +match[5] || 0, +match[6] || 0);
  }
  // yyyy-mm-dd
  // Could be handled by new Date(string) but interpreted as UTC and we want local so we need to handle that "manually"
  // (we want to be able to use getDate() etc. instead of getUTCDate())
  match = d.match(/^(\d{1,4})-(\d{1,2})(?:-(\d{1,2})(?:[T ](\d{1,2}):(\d{1,2})(?::(\d{1,2})(\.\d+)?)?Z?)?)?$/);
  if (match) {
    return new Date(+match[1], +match[2] - 1, +match[3] || 1, +match[4] || 0, +match[5] || 0, +match[6] || 0);
  }
  // stringified timestamp
  if (!Number.isNaN(+d)) {
    return new Date(+d);
  }
  // try native date parsing
  const date = new Date(d);
  return isNaN(date) ? undefined : date;
}

/**
 * Join several parts of a path together.
 *
 * @example
 * // returns 'http://myserver.com/images/title.jpg'
 * joinPaths('http://myserver.com', 'images', '/title.jpg');
 * @param {...string} parts - the path parts to join
 * @return {string} the final path containing all the parts
 */
function joinPaths() {
  // [...arguments].map(e => e.replace(/^\/|\/$/, '')).filter(e => e).join('/');
  let path = '';
  let slash = false; // whether slash is needed before
  for (let i = 0, il = arguments.length; i < il; i++) {
    let part = arguments[i];
    if (!part) continue;
    // ^ ensure empty string is not counted as a path part
    if (i > 0 && part.charAt(0) === '/') {
      part = part.substring(1);
    }
    path += slash ? '/' + part : part;
    slash = path.charAt(path.length - 1) !== '/';
  }
  return path;
}

/**
 * Return whether the given object has only numeric key strings.
 * Can be used to detect if an object is in reality an array.
 *
 * @example
 * hasOnlyNumericKeys({"0": "foo", "1": "bar", "3": "baz"}); // true
 * hasOnlyNumericKeys({"0": "foo", "sam": "bar"}); // false
 * hasOnlyNumericKeys({"0": "foo", "Infinity": "bar"}); // false
 * @param {Object} obj - the input object
 * @return {boolean} true if obj is an array with string keys, false otherwise
 */
function hasOnlyNumericKeys(obj) {
  for (const key in obj) {
    if (!isFinite(+key)) {
      return false;
    }
  }
  return true;
}

/**
 * Convert an object to an array. (stricter version of asList)
 * Non-numeric/Infinite keys will be removed in the array representation of the
 * object.
 *
 * @param {Object} obj - the input object
 * @return {Array} an array equivalent to obj
 */
function objToArr(obj) {
  const arr = [];
  for (const key in obj) {
    const idx = +key;
    if (isFinite(idx)) {
      arr[idx] = obj[key];
    }
  }
  return arr;
}

/**
 * Sanitize recursively an object created in Thundr.
 * Note that numeric value will be casted to Number unless a '@s' is explicitely
 * specified at the end of the key.
 *
 * @example
 * sanitizeObj({"power": "45", "range": {"0": "-5.6", "1": "5.2"}, "id@s": "124"})
 * // return {"power": 45, "range": [-5.6, 5.2], "id": "124"}
 * @param {Object} obj - the input object
 * @param {Object|Array} the sanitized object or array
 */
function sanitizeObj(obj) {
  const out = {};
  for (let key in obj) {
    let val = obj[key];
    if (val != null && typeof val === 'object') {
      val = sanitizeObj(val);
    } else if (key.endsWith('@s')) {
      key = key.substring(0, key.length - 2);
    } else {
      val = isFinite(+val) ? +val : val;
    }
    out[key] = val;
  }
  if (hasOnlyNumericKeys(out)) {
    return objToArr(out);
  }
  return out;
}

/**
 * Convert a multiline text to an array of JSX elements.
 *
 * @param {string} text - string with 0 or more \n
 * @return {Array.<string|JSX>} an array of JSX elements
 */
const textToJsxArray = (() => {
  function reduceTextJsx(jsxArray, line, i) {
    if (i > 0) {
      jsxArray.push((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("br", null));
    }
    jsxArray.push(line);
    return jsxArray;
  }
  return text => {
    let lines = text;
    if (typeof lines === 'string') lines = text.split('\n');
    const jsxArray = lines.reduce(reduceTextJsx, []);
    return jsxArray;
  };
})();

/**
 * Return the part part of a URI.
 *
 * @example
 * pathOnly('this/is/a/folder/file.txt');
 * // ^ returns 'this/is/a/folder/'
 *
 * @param {string} path - the full URI of a resource
 * @return {string} only the path part of the resource
 */
function pathOnly(path) {
  let rpath = decodeURIComponent(path);
  const index = rpath.lastIndexOf('/');
  if (index === -1 || index === rpath.length - 1) return rpath;
  let res = rpath.substr(index + 1);
  const qsIndex = res.indexOf('?');
  if (qsIndex > -1) {
    res = res.substring(0, qsIndex);
    rpath = rpath.substring(0, index + 1 + qsIndex);
  }
  if (res.length === 0) return rpath;
  const pointIndex = res.lastIndexOf('.');
  if (pointIndex === -1 || pointIndex === res.length - 1) return rpath + '/';
  return rpath.substring(0, index + 1);
}

/**
 * Return whether a variable is a JS (key, value) object.
 *
 * @param {*} obj - the object to test
 * @return {!boolean} true if obj is an object, false otherwise
 */
function isObject(obj) {
  return obj !== null && typeof obj === 'object' && !Array.isArray(obj);
}

/**
 * Return whether an object/array is empty.
 *
 * @param {*} obj
 * @returns {boolean} true if obj/array is empty, false otherwise
 */
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

/**
 * Return whether a variable is a valid numberic value (string number are allowed).
 *
 * @param {*} obj - the object to test
 * @return {!boolean} true if val is numeric, false otherwise
 */
function isNumeric(val) {
  return !isNaN(parseFloat(val)) && isFinite(val);
}

/**
 * Parse an string array of numeric numbers.
 *
 * @example
 * parseNumericArray('5, 2, 1.2, 7'); // returns [5, 2, 1.2, 7]
 *
 * @param {string} arrayStr - the string array
 * @return {Array.<number>|null} the array of numeric value, or null in case the parsing failed
 */
function parseNumericArray(arrayStr) {
  if (typeof arrayStr !== 'string') return null;
  const parts = arrayStr.split(/[|/,;]/);
  // use ES5 loop to early out in case of non-numeric value
  const il = parts.length;
  for (let i = 0; i < il; i++) {
    const val = parseFloat(parts[i].trim());
    if (!isFinite(val)) return null;
    parts[i] = val;
  }
  return parts;
}

/**
 * Quick helper to choose whether a node should be displayed.
 *
 * @example
 * <div style={displayWhen(isLoading)} />
 *
 * @param {boolean} cond - the condition to display the node
 * @return {{display: string}} the element display style
 */
const displayWhen = cond => ({
  display: cond ? 'block' : 'none'
});

/**
 * Return the uri of an image if it exists in appData -> styling -> images || returns the default image path
 *
 * @param {*} obj - appData
 * @param {!string} imgName - name of image we are trying to find
 * @param {!string} defaultImg - value returned if the imgName doesn't exist
 * @return {!string} path of the onesheet stored in appData or default value
 */
function getStylingImagePath(appData, imgName, defaultImg) {
  return accessNested(appData, ['styling', 'images', imgName]) || defaultImg;
}

/**
 * Checks to see if a given object is empty e.g. {} or null or undefined
 *
 * @param {object} inputObject
 * @returns bool
 */
function isEmptyObject(inputObject) {
  return inputObject == null || Object.keys(inputObject).length === 0;
}

/**
 * Transforms HTML tags in HTML entities for safe rendering.
 *
 * @example
 * encodeHtml('<script>'); // returns "&lt;script&gt;"
 * encodeHtml('%3Cscript%3E'); // returns "%lt;script%gt;"
 *
 * @param {!string} str - the string to encode
 * @return {!string} the string with HTML tags replaced with HTML entities
 */
const encodeHtml = str => {
  return str.toString().replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/%3C/g, '&lt;').replace(/%3E/g, '&gt;');
};

/**
 * Transforms HTML tags in HTML entities recursively in any object.
 *
 * @param {*} obj - the input object
 * @return {*} the same object with all string encoded with HTML entities
 */
const encodeHtmlRecursively = obj => {
  if (typeof obj === 'string') return encodeHtml(obj);
  if (Array.isArray(obj)) return obj.map(e => encodeHtmlRecursively(e));
  if (isObject(obj)) {
    for (const key in obj) obj[key] = encodeHtmlRecursively(obj[key]);
  }
  return obj;
};
const loadScript = url => {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.onload = resolve;
    script.onerror = reject;
    script.src = url;
    document.body.appendChild(script);
  });
};

/**
 *  Checks the equality between two arrays and returns true if there is no difference.
 * @param {Array} arr1
 * @param {Array} arr2
 */
const arraysEqual = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }
  return arr1.length === arr2.length && arr1.every((val, i) => val === arr2[i]);
};
const escapeString = variable => {
  if (typeof variable !== 'string') return variable;
  return variable.replace(/'/g, "\\'").replace(/"/g, '\\"');
};
const escapeObjectValues = obj => Object.entries(obj).reduce((acc, _ref) => {
  let [k, v] = _ref;
  acc[k] = escapeString(v);
  return acc;
}, {});






















/***/ }),

/***/ "./static/src/utils/visibilityChecks.js":
/*!**********************************************!*\
  !*** ./static/src/utils/visibilityChecks.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closestToCenter: () => (/* binding */ closestToCenter),
/* harmony export */   getPercentageThreshold: () => (/* binding */ getPercentageThreshold),
/* harmony export */   isScrolledIntoView: () => (/* binding */ isScrolledIntoView),
/* harmony export */   isSectionUnderHeader: () => (/* binding */ isSectionUnderHeader),
/* harmony export */   visibleRatio: () => (/* binding */ visibleRatio)
/* harmony export */ });
/* harmony import */ var utils_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/math */ "./static/src/utils/math.js");

function visibleRatio(elem) {
  if (!elem) return;
  const rect = elem.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const visibleTop = (0,utils_math__WEBPACK_IMPORTED_MODULE_0__.clamp)(rect.top, 0, windowHeight);
  const visibleBottom = (0,utils_math__WEBPACK_IMPORTED_MODULE_0__.clamp)(rect.bottom, 0, windowHeight);
  return Math.abs(visibleBottom - visibleTop) / Math.min(rect.height, windowHeight);
}
function isScrolledIntoView(elem) {
  if (!elem) return;
  return visibleRatio(elem) > .5;
}
function getPercentageThreshold(offsetTop) {
  if (typeof window === 'undefined' || !offsetTop) {
    return 0;
  }
  return offsetTop / window.innerHeight + 0.01;
}
function closestToCenter(elements) {
  let goal = window.innerHeight * .5;
  let prevDist = Infinity;
  for (let i = 0; i < elements.length; i++) {
    const rect = elements[i].getBoundingClientRect();
    let dist = Math.max(rect.top - goal, goal - rect.bottom);
    if (dist <= 0) {
      return elements[i];
    }
    if (dist >= prevDist) {
      return elements[i - 1];
    }
    prevDist = dist;
  }
  return null;
}
function isSectionUnderHeader(elem) {
  if (!elem) return;
  const rect = elem.getBoundingClientRect();
  return rect.top <= 25 && rect.bottom > 25;
}

/***/ }),

/***/ "./static/src_overrides/studios/netflix/store/actions.js":
/*!***************************************************************!*\
  !*** ./static/src_overrides/studios/netflix/store/actions.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADD_THEATERS: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.ADD_THEATERS),
/* harmony export */   AFTER_THEATERS_UPDATE: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.AFTER_THEATERS_UPDATE),
/* harmony export */   API_ERROR: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.API_ERROR),
/* harmony export */   APPLY_FILTERS: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.APPLY_FILTERS),
/* harmony export */   APP_LIST_SCROLLED: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.APP_LIST_SCROLLED),
/* harmony export */   AUTH_CLEAR: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.AUTH_CLEAR),
/* harmony export */   AUTH_RESPONSE: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.AUTH_RESPONSE),
/* harmony export */   BEFORE_LOAD: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.BEFORE_LOAD),
/* harmony export */   CALENDAR_CLICKED: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_CLICKED),
/* harmony export */   CHECK_FILTERS: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.CHECK_FILTERS),
/* harmony export */   CLEAR_TICKETING_MESSAGE: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.CLEAR_TICKETING_MESSAGE),
/* harmony export */   CLICKED_FOLLOW: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.CLICKED_FOLLOW),
/* harmony export */   CLICKED_SHARE: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.CLICKED_SHARE),
/* harmony export */   CLOSABLE_TRAILER_CLOSED: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.CLOSABLE_TRAILER_CLOSED),
/* harmony export */   CLOSABLE_TRAILER_OPEN: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.CLOSABLE_TRAILER_OPEN),
/* harmony export */   CLOSE_APP: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.CLOSE_APP),
/* harmony export */   CLOSE_PAYMENT: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.CLOSE_PAYMENT),
/* harmony export */   CLOSE_TICKETING: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.CLOSE_TICKETING),
/* harmony export */   CREATE_OR_UPDATE_ORDER: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.CREATE_OR_UPDATE_ORDER),
/* harmony export */   DISABLE_PIXELS: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.DISABLE_PIXELS),
/* harmony export */   DISABLE_STORAGE: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.DISABLE_STORAGE),
/* harmony export */   DOWNLOAD_WORKBOOK: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.DOWNLOAD_WORKBOOK),
/* harmony export */   DO_LOCATION_SEARCH: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.DO_LOCATION_SEARCH),
/* harmony export */   ENABLE_PIXELS: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.ENABLE_PIXELS),
/* harmony export */   ENABLE_STORAGE: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.ENABLE_STORAGE),
/* harmony export */   EVENT_DATA_LIST_SCROLLED: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.EVENT_DATA_LIST_SCROLLED),
/* harmony export */   EXTERNAL_LINK_CLICKED: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.EXTERNAL_LINK_CLICKED),
/* harmony export */   EXTRA_THEATERS: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.EXTRA_THEATERS),
/* harmony export */   FILTER_DISABLE: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.FILTER_DISABLE),
/* harmony export */   FILTER_EXCLUDE: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.FILTER_EXCLUDE),
/* harmony export */   FIRST_DATA_LOADED: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.FIRST_DATA_LOADED),
/* harmony export */   FLUSH_SEAT_LAYOUT: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.FLUSH_SEAT_LAYOUT),
/* harmony export */   GALLERY_DOWNLOAD_IMAGE: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.GALLERY_DOWNLOAD_IMAGE),
/* harmony export */   GALLERY_VIEW_IMAGE: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.GALLERY_VIEW_IMAGE),
/* harmony export */   GALLERY_VIEW_IMAGE_FULLSCREEN: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.GALLERY_VIEW_IMAGE_FULLSCREEN),
/* harmony export */   GET_SCREENINGS: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.GET_SCREENINGS),
/* harmony export */   GMAPS_LOADED: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.GMAPS_LOADED),
/* harmony export */   GO_TICKETING_CONTACT_DETAILS: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.GO_TICKETING_CONTACT_DETAILS),
/* harmony export */   GO_TICKETING_PAYMENT: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.GO_TICKETING_PAYMENT),
/* harmony export */   GO_TICKETING_REVIEW: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.GO_TICKETING_REVIEW),
/* harmony export */   GO_TICKETING_SEATING: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.GO_TICKETING_SEATING),
/* harmony export */   GO_TICKETING_TIMEOUT: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.GO_TICKETING_TIMEOUT),
/* harmony export */   GO_TICKETING_TYPES: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.GO_TICKETING_TYPES),
/* harmony export */   HEADER_HIDDEN: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.HEADER_HIDDEN),
/* harmony export */   HIDE_MODAL: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.HIDE_MODAL),
/* harmony export */   HOMEENT_VENDOR_CLICKED: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.HOMEENT_VENDOR_CLICKED),
/* harmony export */   HOMEPAGE_TRAILER_ENDED: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.HOMEPAGE_TRAILER_ENDED),
/* harmony export */   HOME_BUTTON_CLICKED: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.HOME_BUTTON_CLICKED),
/* harmony export */   JW_PLAYER_PROGRESS: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.JW_PLAYER_PROGRESS),
/* harmony export */   KALTURA_VIDEO: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.KALTURA_VIDEO),
/* harmony export */   LINK_CLICKED: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.LINK_CLICKED),
/* harmony export */   LINK_CLICK_OUT: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.LINK_CLICK_OUT),
/* harmony export */   LOAD_STATIC_PIXELS: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.LOAD_STATIC_PIXELS),
/* harmony export */   MAP_REQUEST_DIRECTIONS: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.MAP_REQUEST_DIRECTIONS),
/* harmony export */   MATTERHORN_VIDEO: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.MATTERHORN_VIDEO),
/* harmony export */   MESSENGER_CLICKED: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.MESSENGER_CLICKED),
/* harmony export */   MODAL_RESULT_CANCEL: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.MODAL_RESULT_CANCEL),
/* harmony export */   MODAL_RESULT_OK: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.MODAL_RESULT_OK),
/* harmony export */   MOVIES_LIST_SCROLLED: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.MOVIES_LIST_SCROLLED),
/* harmony export */   NETFLIX_BUTTON_CLICK: () => (/* binding */ NETFLIX_BUTTON_CLICK),
/* harmony export */   NETFLIX_GALLERY_ITEM_CLICK: () => (/* binding */ NETFLIX_GALLERY_ITEM_CLICK),
/* harmony export */   NETFLIX_RESOURCE_CLICK: () => (/* binding */ NETFLIX_RESOURCE_CLICK),
/* harmony export */   ONETRUST_SHOW: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.ONETRUST_SHOW),
/* harmony export */   OPEN_PAYMENT: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.OPEN_PAYMENT),
/* harmony export */   OPEN_TICKETING: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.OPEN_TICKETING),
/* harmony export */   PAGE_STATE_LOADED: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.PAGE_STATE_LOADED),
/* harmony export */   PAYMENT_MESSAGE_RECEIVED: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.PAYMENT_MESSAGE_RECEIVED),
/* harmony export */   PICK_OR_UNPICK_SEATS: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.PICK_OR_UNPICK_SEATS),
/* harmony export */   POWSTER_GA_EVENT_TRACK: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.POWSTER_GA_EVENT_TRACK),
/* harmony export */   POWSTER_GA_PAGE_VIEW_TRACK: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.POWSTER_GA_PAGE_VIEW_TRACK),
/* harmony export */   QUIZ_STARTED: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.QUIZ_STARTED),
/* harmony export */   RELOAD_FILTERS: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.RELOAD_FILTERS),
/* harmony export */   REOPEN_TICKETING: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.REOPEN_TICKETING),
/* harmony export */   RESET_FILTER: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.RESET_FILTER),
/* harmony export */   RESET_FILTERS: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.RESET_FILTERS),
/* harmony export */   RIGHT_OR_WRONG_QUIZ_FINISHED: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.RIGHT_OR_WRONG_QUIZ_FINISHED),
/* harmony export */   SCREENINGS_LIST_SCROLLED: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SCREENINGS_LIST_SCROLLED),
/* harmony export */   SCREENINGS_LOADED: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SCREENINGS_LOADED),
/* harmony export */   SCROLLSITE_BUTTON_CLICK: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SCROLLSITE_BUTTON_CLICK),
/* harmony export */   SCROLLSITE_GALLERY_ITEM_CLICK: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SCROLLSITE_GALLERY_ITEM_CLICK),
/* harmony export */   SCROLLSITE_RESOURCE_CLICK: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SCROLLSITE_RESOURCE_CLICK),
/* harmony export */   SCROLL_LOCK: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SCROLL_LOCK),
/* harmony export */   SCROLL_UNLOCK: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SCROLL_UNLOCK),
/* harmony export */   SEARCH_NEW_CITY: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SEARCH_NEW_CITY),
/* harmony export */   SELECT_MACCS_THEATER: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SELECT_MACCS_THEATER),
/* harmony export */   SELECT_NEARBY_CITY: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SELECT_NEARBY_CITY),
/* harmony export */   SELECT_PROVIDER: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SELECT_PROVIDER),
/* harmony export */   SELECT_SCREENING: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SELECT_SCREENING),
/* harmony export */   SELECT_ST_DATE: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SELECT_ST_DATE),
/* harmony export */   SELECT_THEATER: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SELECT_THEATER),
/* harmony export */   SELECT_TIME: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SELECT_TIME),
/* harmony export */   SET_ACTIVE_PAGE: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SET_ACTIVE_PAGE),
/* harmony export */   SET_BACKGROUND_ELEMENT: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SET_BACKGROUND_ELEMENT),
/* harmony export */   SET_BACKGROUND_VIDEO_ENABLED: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SET_BACKGROUND_VIDEO_ENABLED),
/* harmony export */   SET_BACKGROUND_VIDEO_MUTED: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SET_BACKGROUND_VIDEO_MUTED),
/* harmony export */   SET_BACKGROUND_VIDEO_PLAYING: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SET_BACKGROUND_VIDEO_PLAYING),
/* harmony export */   SET_BG_STATUS: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SET_BG_STATUS),
/* harmony export */   SET_CITIES: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SET_CITIES),
/* harmony export */   SET_CITY_SHOW_COUNT: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SET_CITY_SHOW_COUNT),
/* harmony export */   SET_CLIENT_GEO: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SET_CLIENT_GEO),
/* harmony export */   SET_CLIENT_SIZE: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SET_CLIENT_SIZE),
/* harmony export */   SET_FILTER_VISIBILITY: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SET_FILTER_VISIBILITY),
/* harmony export */   SET_IOSFIXEDFIX: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SET_IOSFIXEDFIX),
/* harmony export */   SET_MAP_OPEN: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SET_MAP_OPEN),
/* harmony export */   SET_SIDE_NAV_ACTIVE: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SET_SIDE_NAV_ACTIVE),
/* harmony export */   SET_SIDE_NAV_OPEN: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SET_SIDE_NAV_OPEN),
/* harmony export */   SET_THEATERS: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SET_THEATERS),
/* harmony export */   SET_TICKETING_MESSAGE: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SET_TICKETING_MESSAGE),
/* harmony export */   SET_USER: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SET_USER),
/* harmony export */   SET_USER_REGION_MODAL_DISMISSED: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SET_USER_REGION_MODAL_DISMISSED),
/* harmony export */   SHOW_COOKIES_MODAL: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SHOW_COOKIES_MODAL),
/* harmony export */   SHOW_MODAL: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SHOW_MODAL),
/* harmony export */   SHOW_SCREENING_AUTH: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SHOW_SCREENING_AUTH),
/* harmony export */   SIGN_UP_SUBMIT: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SIGN_UP_SUBMIT),
/* harmony export */   SMART_HOMEENT_LINK_CLICKED: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SMART_HOMEENT_LINK_CLICKED),
/* harmony export */   SMART_HOMEENT_SELECT: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.SMART_HOMEENT_SELECT),
/* harmony export */   START_API: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.START_API),
/* harmony export */   START_FORCE_CLIENT_ORIENTATION: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.START_FORCE_CLIENT_ORIENTATION),
/* harmony export */   STOP_FORCE_CLIENT_ORIENTATION: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.STOP_FORCE_CLIENT_ORIENTATION),
/* harmony export */   TICKET_LINK_CLICKED: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.TICKET_LINK_CLICKED),
/* harmony export */   TICKET_PURCHASE_COMPLETE: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.TICKET_PURCHASE_COMPLETE),
/* harmony export */   TOGGLE_FILTER: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.TOGGLE_FILTER),
/* harmony export */   UPDATE_BACKGROUND_SETTINGS: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.UPDATE_BACKGROUND_SETTINGS),
/* harmony export */   UPDATE_DYNAMIC_DATA: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.UPDATE_DYNAMIC_DATA),
/* harmony export */   UPDATE_LOADER: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.UPDATE_LOADER),
/* harmony export */   UPDATE_MODAL: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.UPDATE_MODAL),
/* harmony export */   UPDATE_ORDER_TICKETS: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.UPDATE_ORDER_TICKETS),
/* harmony export */   UPDATE_STORE: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.UPDATE_STORE),
/* harmony export */   UPDATE_THEATER_FILTERED_SCREENINGS: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.UPDATE_THEATER_FILTERED_SCREENINGS),
/* harmony export */   UPDATE_TICKETING_SEATS: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.UPDATE_TICKETING_SEATS),
/* harmony export */   UPDATE_TICKET_TYPE_QUANTITY: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.UPDATE_TICKET_TYPE_QUANTITY),
/* harmony export */   URL_CHANGED: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.URL_CHANGED),
/* harmony export */   VIDEOS_TICKET_CLICK: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.VIDEOS_TICKET_CLICK),
/* harmony export */   VIDEO_PLAYER_PROGRESS: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.VIDEO_PLAYER_PROGRESS),
/* harmony export */   VIMEO_VIDEO_PROGRESS: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.VIMEO_VIDEO_PROGRESS),
/* harmony export */   VISIBLE_MACCS_THEATER: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.VISIBLE_MACCS_THEATER),
/* harmony export */   VR_SET_MODE: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.VR_SET_MODE),
/* harmony export */   YOUTUBE_ENDED: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.YOUTUBE_ENDED),
/* harmony export */   YOUTUBE_PAUSE: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.YOUTUBE_PAUSE),
/* harmony export */   YOUTUBE_PLAY: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.YOUTUBE_PLAY),
/* harmony export */   YOUTUBE_PROGRESS: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.YOUTUBE_PROGRESS),
/* harmony export */   YOUTUBE_READY: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.YOUTUBE_READY),
/* harmony export */   YOUTUBE_START: () => (/* reexport safe */ store_actions_js__WEBPACK_IMPORTED_MODULE_0__.YOUTUBE_START)
/* harmony export */ });
/* harmony import */ var store_actions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/actions.js */ "./static/src/store/actions.js");

const NETFLIX_BUTTON_CLICK = 'NETFLIX_BUTTON_CLICK';
const NETFLIX_GALLERY_ITEM_CLICK = 'NETFLIX_GALLERY_ITEM_CLICK';
const NETFLIX_RESOURCE_CLICK = 'NETFLIX_RESOURCE_CLICK';

/***/ }),

/***/ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/header/header.js":
/*!*********************************************************************************************************************!*\
  !*** ./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/header/header.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var components_bolt_header_header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/bolt/header/header.js */ "./static/src/components/bolt/header/header.js");
/* harmony import */ var components_bolt_button_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/bolt/button/button */ "./static/src/components/bolt/button/button.js");
/* harmony import */ var components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/bolt/header/header.sss */ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/header/header.sss");






class Header extends components_bolt_header_header_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  renderHeaderLogo() {
    const headerLogo = this.props?.appData?.header?.powsterHeader?.logo;
    const headerLogoExclusions = (headerLogo?.pageExclusions || '').split(',')?.map(e => e.trim())?.filter(e => e);
    const hideHeaderLogo = headerLogoExclusions.includes(store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get().activePage);
    const className = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.joinClasses)(components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_5__["default"].headerLogo, hideHeaderLogo && components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_5__["default"].hide, !headerLogo.path && components_bolt_header_header_sss__WEBPACK_IMPORTED_MODULE_5__["default"].unclickable);
    const content = (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("img", {
      src: headerLogo.src,
      alt: headerLogo.alt
    });
    if (/^(https?:\/\/|mailto:)/i.test(headerLogo.path)) {
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("a", {
        class: className,
        href: headerLogo.path,
        target: headerLogo.sameWindow ? '_self' : '_blank',
        rel: "noopener noreferrer",
        onClick: () => this.trackPersistentButtonClick(headerLogo.path, headerLogo.alt || 'headerLogo'),
        key: "headerLogoLink"
      }, content);
    }
    if (headerLogo) {
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_button_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
        class: className,
        trigger: e => headerLogo.path && this.triggerPersistentButton(headerLogo.path, 'Logo', headerLogo.sameWindow, e),
        key: "headerLogo"
      }, content);
    }
  }
}

/***/ }),

/***/ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/text/text.js":
/*!*****************************************************************************************************************!*\
  !*** ./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/text/text.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var components_bolt_text_text_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/bolt/text/text.js */ "./static/src/components/bolt/text/text.js");


// import s from 'components/bolt/text/text.sss';

class Text extends components_bolt_text_text_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  onClick(e) {
    const elem = e.target.closest('a[data-track][data-action]');
    if (elem) {
      const isSameWindowLink = !elem.target || elem.target === '_self' || elem.target === '_top';
      const opensInSameWindow = isSameWindowLink && !e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && e.button === 0;
      if (opensInSameWindow) {
        e.preventDefault();
      }
      const action = elem.getAttribute('data-action');
      const category = elem.getAttribute('data-track');
      const label = elem.getAttribute('data-label');
      // window.firePowsterCustomEvent?.(action, category, label);
      Store.emit('CUSTOM_EVENT', {
        action,
        category,
        label
      });
      if (opensInSameWindow) {
        location.href = elem.href;
      }
    }
    super.onClick(e);
  }
}

/***/ }),

/***/ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/toutHorizontal/toutHorizontal.js":
/*!*************************************************************************************************************************************!*\
  !*** ./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/toutHorizontal/toutHorizontal.js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToutHorizontal)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var components_bolt_toutHorizontal_toutHorizontal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/bolt/toutHorizontal/toutHorizontal.js */ "./static/src/components/bolt/toutHorizontal/toutHorizontal.js");
/* harmony import */ var components_bolt_toutHorizontal_toutHorizontal_sss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/bolt/toutHorizontal/toutHorizontal.sss */ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/toutHorizontal/toutHorizontal.sss");



const DISPLAYED_TOUTS = 3;
class ToutHorizontal extends components_bolt_toutHorizontal_toutHorizontal_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  renderTouts() {
    const {
      touts
    } = this.state;
    const tooManyTouts = touts.length > DISPLAYED_TOUTS;
    let content = touts.map((tout, index) => this.renderTout(tout, index));
    if (tooManyTouts && !this.props.client?.deviceWidthSize === 'mobile') {
      // Render duplicate items for infinite scrolling
      content.push(...touts.map((tout, index) => this.renderTout(tout, index, 'duplicate1')), ...touts.map((tout, index) => this.renderTout(tout, index, 'duplicate2')));
    }
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_toutHorizontal_toutHorizontal_sss__WEBPACK_IMPORTED_MODULE_2__["default"].toutsWrapper
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_toutHorizontal_toutHorizontal_sss__WEBPACK_IMPORTED_MODULE_2__["default"].toutsContainer,
      onScroll: this.onToutsContainerScroll,
      onMouseWheel: this.setUsingScrollWheel,
      onTouchStart: this.setNotUsingScrollWheel,
      onKeyDown: this.setNotUsingScrollWheel,
      ref: e => this.$toutsContainer = e
    }, content), tooManyTouts && this.renderArrows());
  }
}

/***/ }),

/***/ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/pages/bolt_features.js":
/*!***********************************************************************************************************!*\
  !*** ./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/pages/bolt_features.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pixelsCategories: () => (/* binding */ pixelsCategories)
/* harmony export */ });
const pixelsCategories = ["PERFORMANCE", "TARGETING"];


/***/ }),

/***/ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/pages/bolt_pages.js":
/*!********************************************************************************************************!*\
  !*** ./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/pages/bolt_pages.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   sections: () => (/* binding */ sections),
/* harmony export */   sectionsWithParent: () => (/* binding */ sectionsWithParent)
/* harmony export */ });
/* harmony import */ var components_bolt_toutHorizontal_toutHorizontal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/bolt/toutHorizontal/toutHorizontal */ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/toutHorizontal/toutHorizontal.js");
/* harmony import */ var components_bolt_text_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/bolt/text/text */ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/text/text.js");
const pages = {
  'landing': {
    id: 'landing',
    page: 'customScroll',
    getter: () => __webpack_require__.e(/*! import() | customScroll */ "customScroll").then(__webpack_require__.bind(__webpack_require__, /*! components/bolt/customScroll/customScroll */ "./static/src/components/bolt/customScroll/customScroll.js"))
  },
  'castingLinks': {
    id: 'castingLinks',
    page: 'toutHorizontal',
    getter: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! components/bolt/toutHorizontal/toutHorizontal */ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/toutHorizontal/toutHorizontal.js"))
  }
};
const sections = [];


const sectionsWithParent = [{
  id: 'castingLinks',
  isPreloaded: true,
  component: components_bolt_toutHorizontal_toutHorizontal__WEBPACK_IMPORTED_MODULE_0__["default"],
  parent: 'landing'
}, {
  id: 'info',
  isPreloaded: true,
  component: components_bolt_text_text__WEBPACK_IMPORTED_MODULE_1__["default"],
  parent: 'landing'
}];

/***/ }),

/***/ "./static/src/base-styles/boltGlobal.sss":
/*!***********************************************!*\
  !*** ./static/src/base-styles/boltGlobal.sss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./static/src/base-styles/reset.sss":
/*!******************************************!*\
  !*** ./static/src/base-styles/reset.sss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./static/src/components/bolt/ageGate/ageGate.sss":
/*!********************************************************!*\
  !*** ./static/src/components/bolt/ageGate/ageGate.sss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tt":"ageGate__tt__M6VPs","sectionAgeGate":"ageGate__sectionAgeGate__aprP4","screenCover":"ageGate__screenCover__BZy_v","screenContainer":"ageGate__screenContainer__fGlYP","container":"ageGate__container__cm3Ov","top":"ageGate__top__JlxVx","title":"ageGate__title__HZ64L","bottom":"ageGate__bottom__P_C7c","description":"ageGate__description__u01bO","middle":"ageGate__middle__A7zEP","lockedOut":"ageGate__lockedOut__w3Wna","instruction":"ageGate__instruction__LXyIo","inputs":"ageGate__inputs__rTi8J","selectWrapper":"ageGate__selectWrapper__EuvWG","chevron":"ageGate__chevron__svwaa","error":"ageGate__error__kpbRQ"});

/***/ }),

/***/ "./static/src/components/bolt/button/button.sss":
/*!******************************************************!*\
  !*** ./static/src/components/bolt/button/button.sss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"button__container__Vgkga","primary":"button__primary__JkbQR","outlined":"button__outlined__L52sA","floating":"button__floating__Elewb","time":"button__time__Ndxk6","interstitial":"button__interstitial__Z_8fj","noHover":"button__noHover__G6tl3","allStyling":"button__allStyling__iHyRz","icon":"button__icon__qI18a","tag":"button__tag__VCfyJ","active":"button__active__t9Wy6","text":"button__text__Zqxzg"});

/***/ }),

/***/ "./static/src/components/bolt/countdown/countdown.sss":
/*!************************************************************!*\
  !*** ./static/src/components/bolt/countdown/countdown.sss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"wrapper":"countdown__wrapper__A1wwf","visible":"countdown__visible__z7jYe","hide":"countdown__hide__GjtbD","remove":"countdown__remove__iaDqx","heading":"countdown__heading__ItakV","annotation":"countdown__annotation__kdtlE","countdown":"countdown__countdown__Y86Zb","denomination":"countdown__denomination__KmCFi","value":"countdown__value__C2wF7","wide":"countdown__wide__o5apd","label":"countdown__label__WvLkm","fadeZoomIn":"countdown__fadeZoomIn__HbzVt"});

/***/ }),

/***/ "./static/src/components/bolt/gallery/gallery.sss":
/*!********************************************************!*\
  !*** ./static/src/components/bolt/gallery/gallery.sss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"gallery__container__b6mgP","dedicatedPage":"gallery__dedicatedPage__ODOLc","inner":"gallery__inner__EmDvV","includeTopArrows":"gallery__includeTopArrows__P4ie_","loading":"gallery__loading__CbFjR","galleryTitle":"gallery__galleryTitle__xucGB","galleryDescription":"gallery__galleryDescription__F2r8z","withMobileArrows":"gallery__withMobileArrows__Q8l9Q","videoContainer":"gallery__videoContainer__g17y5","touchOverlay":"gallery__touchOverlay__TyM1K","spinner":"gallery__spinner__UoQSk","spin":"gallery__spin__rwO7C","contentWrapper":"gallery__contentWrapper__soQmY","imageWrapper":"gallery__imageWrapper__rGAe7","imageTransitionContainer":"gallery__imageTransitionContainer__lhUJ3","imageTransitionVisible":"gallery__imageTransitionVisible__DLzJQ","imageTransitionLeaving":"gallery__imageTransitionLeaving__VI_hJ","annotationTransitionContainer":"gallery__annotationTransitionContainer__tvK8U","annotationTransitionLeaving":"gallery__annotationTransitionLeaving__EGqOq","activeImage":"gallery__activeImage__di0aY","clickable":"gallery__clickable__QqWgz","video":"gallery__video__iu41X","arrows":"gallery__arrows__juXL2","hideArrowsDesktop":"gallery__hideArrowsDesktop__ZifcS","mobileArrows":"gallery__mobileArrows__zY58T","noDownloads":"gallery__noDownloads__G1pgK","hideArrowsMobile":"gallery__hideArrowsMobile__Y_p3L","arrowBtn":"gallery__arrowBtn__Fhjzr","leftArrow":"gallery__leftArrow__Q5oZI","rightArrow":"gallery__rightArrow__EHH27","bottomWrapper":"gallery__bottomWrapper__gu8as","bottom":"gallery__bottom__wzoIS","navDots":"gallery__navDots__htQ0d","dotBtn":"gallery__dotBtn__ZTbca","pointer":"gallery__pointer__wePl0","hasDownloads":"gallery__hasDownloads__IT805","canShare":"gallery__canShare__AFMX4","dot":"gallery__dot__FBXZn","activeDot":"gallery__activeDot___4Yku","popBack":"gallery__popBack__wzBMZ","fade":"gallery__fade__nLK0o","pop":"gallery__pop__c_kpU","goingLeft":"gallery__goingLeft__wbWqG","isLast":"gallery__isLast__JSU7b","goingRight":"gallery__goingRight__lFZy2","isFirst":"gallery__isFirst__DcNnX","annotation":"gallery__annotation__M0J7O","share":"gallery__share__E2fWR","sharePopout":"gallery__sharePopout__BicKL","downloadBtnContainer":"gallery__downloadBtnContainer__KzoSD","downloadButton":"gallery__downloadButton__TP3T7","downloadSingle":"gallery__downloadSingle__fMIoG","downloadAll":"gallery__downloadAll__fO8tA","rotate":"gallery__rotate__GJmdH","downloadInProgress":"gallery__downloadInProgress__C8ffS","downloadIcon":"gallery__downloadIcon__QgxEO","extraActions":"gallery__extraActions__A3I5X","isEmbeded":"gallery__isEmbeded__Jbtyq","active":"gallery__active__SGFTn","disabled":"gallery__disabled__Ri0Bl","lowerOpacity":"gallery__lowerOpacity__Dh2ef"});

/***/ }),

/***/ "./static/src/components/bolt/header/sharePopout.sss":
/*!***********************************************************!*\
  !*** ./static/src/components/bolt/header/sharePopout.sss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"wrapper":"sharePopout__wrapper__Q6_Wy","container":"sharePopout__container__VP7Qu","backgroundContainer":"sharePopout__backgroundContainer__Yw1vz","open":"sharePopout__open__XycXM","headline":"sharePopout__headline__QHX_g","close":"sharePopout__close__mH_ml","shareButtons":"sharePopout__shareButtons__DMScD","shareButton":"sharePopout__shareButton__sHvBq","copyButton":"sharePopout__copyButton__Yosy2","copied":"sharePopout__copied__eOS8A","activated":"sharePopout__activated__2XewU","zoom":"sharePopout__zoom__G8AKC","facebook":"sharePopout__facebook__iYY8S","twitter":"sharePopout__twitter__ZX1FA","whatsapp":"sharePopout__whatsapp__G5LZi","instagram":"sharePopout__instagram__oEfiz","pinterest":"sharePopout__pinterest__xLsHm","viber":"sharePopout__viber__v5dqr","tumblr":"sharePopout__tumblr__Wdn4n","telegram":"sharePopout__telegram__kgz6g","rtlContainer":"sharePopout__rtlContainer__CDlPt","shareButton--whatsapp":"sharePopout__shareButton--whatsapp__Rh2FK","shareButton--viber":"sharePopout__shareButton--viber__FB1Cx"});

/***/ }),

/***/ "./static/src/components/bolt/landscapeOverlay/landscapeOverlay.sss":
/*!**************************************************************************!*\
  !*** ./static/src/components/bolt/landscapeOverlay/landscapeOverlay.sss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"wrapper":"landscapeOverlay__wrapper__ySlEt","phoneIcon":"landscapeOverlay__phoneIcon__hXNeF","phoneRotate":"landscapeOverlay__phoneRotate__NBry2"});

/***/ }),

/***/ "./static/src/components/bolt/matterhorn/matterhorn.sss":
/*!**************************************************************!*\
  !*** ./static/src/components/bolt/matterhorn/matterhorn.sss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"iframe":"matterhorn__iframe__dSweB"});

/***/ }),

/***/ "./static/src/components/bolt/nativeVideo/nativeVideo.sss":
/*!****************************************************************!*\
  !*** ./static/src/components/bolt/nativeVideo/nativeVideo.sss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./static/src/components/bolt/section/section.sss":
/*!********************************************************!*\
  !*** ./static/src/components/bolt/section/section.sss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./static/src/components/bolt/sectionBackground/sectionBackground.sss":
/*!****************************************************************************!*\
  !*** ./static/src/components/bolt/sectionBackground/sectionBackground.sss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"wrapper":"sectionBackground__wrapper__p3w2S","tiled":"sectionBackground__tiled__BUHba","bgVideo":"sectionBackground__bgVideo__RrFE4","video":"sectionBackground__video__lAduZ","hide":"sectionBackground__hide__saZRO"});

/***/ }),

/***/ "./static/src/components/bolt/socials/socials.sss":
/*!********************************************************!*\
  !*** ./static/src/components/bolt/socials/socials.sss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"socials":"socials__socials__BRMQT","social":"socials__social__cEC91","rtlSocial":"socials__rtlSocial__kG2oF","icon":"socials__icon__WSlYK","navOpen":"socials__navOpen__vbk7Q"});

/***/ }),

/***/ "./static/src/components/bolt/videos/player.sss":
/*!******************************************************!*\
  !*** ./static/src/components/bolt/videos/player.sss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"player__container__Ctj9y","keepAspectRatio":"player__keepAspectRatio__dM5ZY","loader":"player__loader__fOioB","spin":"player__spin__uoIPb","spinner":"player__spinner___m8Oh","visible":"player__visible__Dag_e","hiddenPlaylist":"player__hiddenPlaylist__pNlqu"});

/***/ }),

/***/ "./static/src/components/bolt/vimeo/vimeo.sss":
/*!****************************************************!*\
  !*** ./static/src/components/bolt/vimeo/vimeo.sss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./static/src/components/bolt/youtube/youtube.sss":
/*!********************************************************!*\
  !*** ./static/src/components/bolt/youtube/youtube.sss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"wrapper":"youtube__wrapper__A5RxE","prompt":"youtube__prompt__qKMmg","cta":"youtube__cta__qttoK","responsiveResize":"youtube__responsiveResize__e1ryh"});

/***/ }),

/***/ "./static/src/components/core/transition/transition.sss":
/*!**************************************************************!*\
  !*** ./static/src/components/core/transition/transition.sss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"visible":"transition__visible__cG1Az","leaving":"transition__leaving__m3Ebj","entering":"transition__entering__BjqLR","empty":"transition__empty__sRqEI"});

/***/ }),

/***/ "./static/src/components/shared/dynamicPageLoader/dynamicPageLoader.sss":
/*!******************************************************************************!*\
  !*** ./static/src/components/shared/dynamicPageLoader/dynamicPageLoader.sss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"dynamicPageLoader__container__dP_35","component":"dynamicPageLoader__component__RFlGe","active":"dynamicPageLoader__active__VQEx9"});

/***/ }),

/***/ "./static/src/components/shared/dynamicPageLoader/loader.sss":
/*!*******************************************************************!*\
  !*** ./static/src/components/shared/dynamicPageLoader/loader.sss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./static/src_overrides/studios/netflix/regions/us/base/bolt/boltApp.sss":
/*!*******************************************************************************!*\
  !*** ./static/src_overrides/studios/netflix/regions/us/base/bolt/boltApp.sss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"boltApp__container__YUbee","mainScrollWrapper":"boltApp__mainScrollWrapper__FBUyK","mainScroll":"boltApp__mainScroll__CXyX9","hideScrollbar":"boltApp__hideScrollbar__PdkBj","dedicatedPage":"boltApp__dedicatedPage__Nqw_q","pageWrapper":"boltApp__pageWrapper__EI3_9","pageContainer":"boltApp__pageContainer__WMeJA","pageName":"boltApp__pageName__aaks0","background":"boltApp__background__eV5Oq","hasStickyFooter":"boltApp__hasStickyFooter__DDlDO","hideBackground":"boltApp__hideBackground__Afd6U","bgVideo":"boltApp__bgVideo__jDBDI","sidePanelOpen":"boltApp__sidePanelOpen__Pcx9V","fadeIn":"boltApp__fadeIn__FZNEO","loadingOccluder":"boltApp__loadingOccluder__Gm9Uz","sound":"boltApp__sound__RUBw1","icon":"boltApp__icon__dH9XI","muted":"boltApp__muted__m28EV","top-left":"boltApp__top-left__yKEmz","top-right":"boltApp__top-right__T_Q3L","bottom-left":"boltApp__bottom-left__IFU3p","bottom-right":"boltApp__bottom-right__wUvRP","removeOccluder":"boltApp__removeOccluder__t8bo5","sidePanelAnimation":"boltApp__sidePanelAnimation__L4TnV"});

/***/ }),

/***/ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/burgerMenu/burgerMenu.sss":
/*!******************************************************************************************************************************!*\
  !*** ./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/burgerMenu/burgerMenu.sss ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"burgerMenu__container__woa17","showtimes":"burgerMenu__showtimes__FAh8z","navOpen":"burgerMenu__navOpen__rVqHL","back":"burgerMenu__back__HVhCb","line":"burgerMenu__line__q6JLQ","homeEnt":"burgerMenu__homeEnt__LMdYh","pressKit":"burgerMenu__pressKit__JPx5Z","homeScrolled":"burgerMenu__homeScrolled__hStX9","video":"burgerMenu__video__XFRwc","searching":"burgerMenu__searching__K1wpb","customBurgerMenu":"burgerMenu__customBurgerMenu__EiK9f","oneSheetOverlayOpen":"burgerMenu__oneSheetOverlayOpen__ys2jp","trailerOverlayOpen":"burgerMenu__trailerOverlayOpen__mBnrR","calendarRemindOpen":"burgerMenu__calendarRemindOpen__vunK1","close":"burgerMenu__close__zpKO6","oneSheetOverlay":"burgerMenu__oneSheetOverlay__rzfD_","trailerOverlay":"burgerMenu__trailerOverlay__DlT2b","calendarRemind":"burgerMenu__calendarRemind__ro3Ej","burger":"burgerMenu__burger__A0rsM","hidden":"burgerMenu__hidden__HwYTB"});

/***/ }),

/***/ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/footer/footer.sss":
/*!**********************************************************************************************************************!*\
  !*** ./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/footer/footer.sss ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"wrapper":"footer__wrapper__bk3Sh","hidden":"footer__hidden__bTOEy","showtimes":"footer__showtimes__KuqjY","cta":"footer__cta__id9x1","scrollTop":"footer__scrollTop__vGu9o","outer":"footer__outer__PXHdo","copyright":"footer__copyright__WA4AV","sidePanelOpen":"footer__sidePanelOpen__dbJhK","pressKit":"footer__pressKit__kRG_2","links":"footer__links__Ob9x9 small","openWrapper":"footer__openWrapper__q3qyC","line":"footer__line__OwPe3","inlineFooter":"footer__inlineFooter__TnQqZ","watchHomeFooterColor":"footer__watchHomeFooterColor__WA1bl","loneVideoDefaultFooter":"footer__loneVideoDefaultFooter__Pc4kf","shadow":"footer__shadow__e5Znj","sticky":"footer__sticky__t75F3","noLegalBtn":"footer__noLegalBtn__K1103","openCropper":"footer__openCropper__dSPuq","staticAutoExpand":"footer__staticAutoExpand__K_CGS","open":"footer__open__r4Er1","closeBtn":"footer__closeBtn__vPgpv","studioDetails":"footer__studioDetails__icxht","logos":"footer__logos__WROGD","logoWrapper":"footer__logoWrapper__KRLUu","logo":"footer__logo__RPe3n","linkWrapper":"footer__linkWrapper__o36LA","homeEnt":"footer__homeEnt__YAib3","dedicatedIframePage":"footer__dedicatedIframePage__FF9C4","signUpFormFooterLinks":"footer__signUpFormFooterLinks__zpfe4","sizer":"footer__sizer__Az_pK","autoExpandingBar":"footer__autoExpandingBar__ggxyj"});

/***/ }),

/***/ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/header/header.sss":
/*!**********************************************************************************************************************!*\
  !*** ./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/header/header.sss ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"header__container__ovQRx","showtimesSearchOverlay":"header__showtimesSearchOverlay__BJ3GW","hubTextOverlayOpen":"header__hubTextOverlayOpen__U0WDh","headerContainer":"header__headerContainer__QhzKa","homeEntMerchantOpen":"header__homeEntMerchantOpen__eiq86","menuText":"header__menuText__KX0qh","homeScrolled":"header__homeScrolled__G9ukl","sony":"header__sony__v4dJA","right":"header__right__JJJSK","sonyCALanguageSelector":"header__sonyCALanguageSelector__ZWeT6","separator":"header__separator___IpXu","active":"header__active__KnZEa","sonyLogo":"header__sonyLogo__ZfJi2","sonyPicturesLogo":"header__sonyPicturesLogo__tPjZI","disabled":"header__disabled__G3in3","solidBackground":"header__solidBackground__a_X7q","hidden":"header__hidden__QHHYI","persistentBtn":"header__persistentBtn__dW31r","hide":"header__hide__gQZv0","allStyling":"header__allStyling__ZTblR","persistentBtnLabel":"header__persistentBtnLabel__UJnG_","burgerMenuBtn":"header__burgerMenuBtn__ue7o9","shareBtn":"header__shareBtn__Ir2a7","inactive":"header__inactive__LBCCd","closeBtn":"header__closeBtn__tjQho","headerLogo":"header__headerLogo__T_ZSp","unclickable":"header__unclickable__gntrM","cta":"header__cta__i9oz9","showtimesShare":"header__showtimesShare__sHeEv","homeEntShare":"header__homeEntShare__sn_sL","pressKitShare":"header__pressKitShare__cKS57","navOpen":"header__navOpen__kasYE","video":"header__video__RbW11","share":"header__share__Y3U45","reset":"header__reset___IUsK","collapse":"header__collapse__rMl26","close":"header__close__AFDSg","actionButton":"header__actionButton__QNBKC","homeEntBtn":"header__homeEntBtn__YESAq","pressKitBtn":"header__pressKitBtn___bocU","activeSection--boltVideos":"header__activeSection--boltVideos__B9nxl","regionSelectorOverlay":"header__regionSelectorOverlay__iYURS","backdrop":"header__backdrop__NaFUm","showing":"header__showing__ij3VA","regionSelector":"header__regionSelector__I9vJc","regions":"header__regions__HgwmY","region":"header__region__JLdtb","closeRegionSelector":"header__closeRegionSelector__CWJD1","desktopSolidHeader":"header__desktopSolidHeader__IABGH","outerActionButton":"header__outerActionButton__OVy9x","providerInterstitialOpen":"header__providerInterstitialOpen__C917X","dualView":"header__dualView__DLkHg","pop":"header__pop__lza_l","providerInterstitial":"header__providerInterstitial__UXgvc","back":"header__back__GInS3","homeInactive":"header__homeInactive__wty3W","fadeIn":"header__fadeIn__O9HFy"});

/***/ }),

/***/ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/header/headerExpanded.sss":
/*!******************************************************************************************************************************!*\
  !*** ./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/header/headerExpanded.sss ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"headerExpanded__container__vm19z","open":"headerExpanded__open__TTvrE","linksContainer":"headerExpanded__linksContainer__HQNEe","links":"headerExpanded__links__ijQud","link":"headerExpanded__link__QUCTJ","active":"headerExpanded__active__XKagJ","splitHeader":"headerExpanded__splitHeader__cGClR","standard":"headerExpanded__standard__AAxda","tt":"headerExpanded__tt__VseN2","content":"headerExpanded__content__Pnbjs","hidden":"headerExpanded__hidden__Asgw8","featured":"headerExpanded__featured__TuZFF","separator":"headerExpanded__separator__oulxw","socials":"headerExpanded__socials__hCzyL","hasRegionSelector":"headerExpanded__hasRegionSelector__pBog4","regionSelectorButton":"headerExpanded__regionSelectorButton__WfQ3Y","icon":"headerExpanded__icon__gRSli","features":"headerExpanded__features__qpaCL","hasManyLinks":"headerExpanded__hasManyLinks__IrCvT"});

/***/ }),

/***/ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/text/text.sss":
/*!******************************************************************************************************************!*\
  !*** ./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/text/text.sss ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"text__container__tdMo9","dedicatedPage":"text__dedicatedPage__zHuvo","wrapper":"text__wrapper__xC105","noBg":"text__noBg__OYi7v","hasCountdownClock":"text__hasCountdownClock__Hp85J","countdownTextWrapper":"text__countdownTextWrapper__ipcVf","button":"text__button__EHttz button__floating__Elewb","fadeZoomIn":"text__fadeZoomIn__x5MOf","content":"text__content__qkgDO"});

/***/ }),

/***/ "./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/toutHorizontal/toutHorizontal.sss":
/*!**************************************************************************************************************************************!*\
  !*** ./static/src_overrides/studios/netflix/titles/the-real-squid-game/regions/us/components/bolt/toutHorizontal/toutHorizontal.sss ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"wrapper":"toutHorizontal__wrapper__y1KRB","section":"toutHorizontal__section__EnCwm","title":"toutHorizontal__title__do4du","description":"toutHorizontal__description__Gip5Q","toutsWrapper":"toutHorizontal__toutsWrapper__tLLZJ","toutsContainer":"toutHorizontal__toutsContainer__TPUVS","usingScrollWheel":"toutHorizontal__usingScrollWheel__Bf0Jm","tout":"toutHorizontal__tout__UhDU4","arrows":"toutHorizontal__arrows__f_xhh","flex":"toutHorizontal__flex__p5zKN","toutContent":"toutHorizontal__toutContent__kvW8s","toutStuff":"toutHorizontal__toutStuff__WM4he","image":"toutHorizontal__image__VqqDv","imageOnly":"toutHorizontal__imageOnly__H_we0","toutTitle":"toutHorizontal__toutTitle__GzPMY","toutDescription":"toutHorizontal__toutDescription__cbWH1","button":"toutHorizontal__button__Shq2J","touts":"toutHorizontal__touts__XPJ3O","arrow":"toutHorizontal__arrow__Dl152","left":"toutHorizontal__left__D8ECa","right":"toutHorizontal__right__KbLAh","tuff":"toutHorizontal__tuff__l9C7_"});

/***/ }),

/***/ "./node_modules/body-scroll-lock/lib/bodyScrollLock.min.js":
/*!*****************************************************************!*\
  !*** ./node_modules/body-scroll-lock/lib/bodyScrollLock.min.js ***!
  \*****************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(e,t){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var o; }}(this,function(exports){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}Object.defineProperty(exports,"__esModule",{value:!0});var l=!1;if("undefined"!=typeof window){var e={get passive(){l=!0}};window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}function d(t){return u.some(function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(t))})}function c(e){var t=e||window.event;return!!d(t.target)||(1<t.touches.length||(t.preventDefault&&t.preventDefault(),!1))}function o(){setTimeout(function(){void 0!==m&&(document.body.style.paddingRight=m,m=void 0),void 0!==f&&(document.body.style.overflow=f,f=void 0)})}var a="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&1<window.navigator.maxTouchPoints),u=[],s=!1,v=-1,f=void 0,m=void 0;exports.disableBodyScroll=function(r,e){if(a){if(!r)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(r&&!u.some(function(e){return e.targetElement===r})){var t={targetElement:r,options:e||{}};u=[].concat(i(u),[t]),r.ontouchstart=function(e){1===e.targetTouches.length&&(v=e.targetTouches[0].clientY)},r.ontouchmove=function(e){var t,o,n,i;1===e.targetTouches.length&&(o=r,i=(t=e).targetTouches[0].clientY-v,d(t.target)||(o&&0===o.scrollTop&&0<i||(n=o)&&n.scrollHeight-n.scrollTop<=n.clientHeight&&i<0?c(t):t.stopPropagation()))},s||(document.addEventListener("touchmove",c,l?{passive:!1}:void 0),s=!0)}}else{n=e,setTimeout(function(){if(void 0===m){var e=!!n&&!0===n.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;e&&0<t&&(m=document.body.style.paddingRight,document.body.style.paddingRight=t+"px")}void 0===f&&(f=document.body.style.overflow,document.body.style.overflow="hidden")});var o={targetElement:r,options:e||{}};u=[].concat(i(u),[o])}var n},exports.clearAllBodyScrollLocks=function(){a?(u.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),s&&(document.removeEventListener("touchmove",c,l?{passive:!1}:void 0),s=!1),u=[],v=-1):(o(),u=[])},exports.enableBodyScroll=function(t){if(a){if(!t)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");t.ontouchstart=null,t.ontouchmove=null,u=u.filter(function(e){return e.targetElement!==t}),s&&0===u.length&&(document.removeEventListener("touchmove",c,l?{passive:!1}:void 0),s=!1)}else(u=u.filter(function(e){return e.targetElement!==t})).length||o()}});


/***/ }),

/***/ "./node_modules/copy-to-clipboard/index.js":
/*!*************************************************!*\
  !*** ./node_modules/copy-to-clipboard/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var deselectCurrent = __webpack_require__(/*! toggle-selection */ "./node_modules/toggle-selection/index.js");

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // avoid screen readers from reading out loud the text
    mark.ariaHidden = "true"
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ "./node_modules/freezer-js/freezer.js":
/*!********************************************!*\
  !*** ./node_modules/freezer-js/freezer.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Freezer = __webpack_require__(/*! ./src/freezer */ "./node_modules/freezer-js/src/freezer.js");
module.exports = Freezer;

/***/ }),

/***/ "./node_modules/freezer-js/src/emitter.js":
/*!************************************************!*\
  !*** ./node_modules/freezer-js/src/emitter.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Utils = __webpack_require__( /*! ./utils */ "./node_modules/freezer-js/src/utils.js" );



//#build


var BEFOREALL = 'beforeAll',
	AFTERALL = 'afterAll'
;
var specialEvents = [BEFOREALL, AFTERALL];

// The prototype methods are stored in a different object
// and applied as non enumerable properties later
var emitterProto = {
	on: function( eventName, listener, once ){
		var listeners = this._events[ eventName ] || [];

		listeners.push({ callback: listener, once: once});
		this._events[ eventName ] =  listeners;

		return this;
	},

	once: function( eventName, listener ){
		return this.on( eventName, listener, true );
	},

	off: function( eventName, listener ){
		if( typeof eventName === 'undefined' ){
			this._events = {};
		}
		else if( typeof listener === 'undefined' ) {
			this._events[ eventName ] = [];
		}
		else {
			var listeners = this._events[ eventName ] || [],
				i
			;

			for (i = listeners.length - 1; i >= 0; i--) {
				if( listeners[i].callback === listener )
					listeners.splice( i, 1 );
			}
		}

		return this;
	},

	emit: function( eventName ){
		var args = [].slice.call( arguments, 1 ),
			listeners = this._events[ eventName ] || [],
			onceListeners = [],
			special = specialEvents.indexOf( eventName ) !== -1,
			i, listener, returnValue, lastValue
		;

		special || this.emit.apply( this, [BEFOREALL, eventName].concat( args ) );

		// Call listeners
		for (i = 0; i < listeners.length; i++) {
			listener = listeners[i];

			if( listener.callback )
				lastValue = listener.callback.apply( this, args );
			else {
				// If there is not a callback, remove!
				listener.once = true;
			}

			if( listener.once )
				onceListeners.push( i );

			if( lastValue !== undefined ){
				returnValue = lastValue;
			}
		}

		// Remove listeners marked as once
		for( i = onceListeners.length - 1; i >= 0; i-- ){
			listeners.splice( onceListeners[i], 1 );
		}

		special || this.emit.apply( this, [AFTERALL, eventName].concat( args ) );

		return returnValue;
	},

	trigger: function(){
		Utils.warn( false, 'Method `trigger` is deprecated and will be removed from freezer in upcoming releases. Please use `emit`.' );
		return this.emit.apply( this, arguments );
	}
};

// Methods are not enumerable so, when the stores are
// extended with the emitter, they can be iterated as
// hashmaps
var Emitter = Utils.createNonEnumerable( emitterProto );
//#build

module.exports = Emitter;


/***/ }),

/***/ "./node_modules/freezer-js/src/freezer.js":
/*!************************************************!*\
  !*** ./node_modules/freezer-js/src/freezer.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Utils = __webpack_require__( /*! ./utils.js */ "./node_modules/freezer-js/src/utils.js" ),
	Emitter = __webpack_require__( /*! ./emitter */ "./node_modules/freezer-js/src/emitter.js" ),
	Frozen = __webpack_require__( /*! ./frozen */ "./node_modules/freezer-js/src/frozen.js" )
;

//#build
var Freezer = function( initialValue, options ) {
	var me = this,
		ops = options || {},
		store = {
			live: ops.live || false,
			freezeInstances: ops.freezeInstances || false,
			singleParent: ops.singleParent || false
		}
	;

	// Immutable data
	var frozen;
	var pivotTriggers = [], pivotTicking = 0;
	var triggerNow = function( node ){
		var _ = node.__,
			i
		;

		if( _.listener ){
			var prevState = _.listener.prevState || node;
			_.listener.prevState = 0;
			Frozen.emit( prevState, 'update', node, true );
		}

		for (i = 0; i < _.parents.length; i++) {
			_.store.notify( 'now', _.parents[i] );
		}
	};

	var addToPivotTriggers = function( node ){
		pivotTriggers.push( node );
		if( !pivotTicking ){
			pivotTicking = 1;
			Utils.nextTick( function(){
				pivotTriggers = [];
				pivotTicking = 0;
			});
		}
	};

	// Last call to display info about orphan calls
	var lastCall;
	store.notify = function notify( eventName, node, options, name ){
		if( name ){
			if( lastCall && !lastCall.onStore ){
				detachedWarn( lastCall );
			}
			lastCall = {name: name, node: node, options: options, onStore: false};
		}

		if( eventName === 'now' ){
			if( pivotTriggers.length ){
				while( pivotTriggers.length ){
					triggerNow( pivotTriggers.shift() );
				}
			}
			else {
				triggerNow( node );
			}

			return node;
		}

		var update = Frozen[eventName]( node, options );

		if( eventName !== 'pivot' ){
			var pivot = Utils.findPivot( update );
			if( pivot ) {
				addToPivotTriggers( update );
	  		return pivot;
			}
		}

		return update;
	};

	store.freezeFn = ops.mutable === true ?
		function(){} :
		function( obj ){ Object.freeze( obj ); }
	;

	// Create the frozen object
	frozen = Frozen.freeze( initialValue, store );
	frozen.__.updateRoot = function( prevNode, updated ){
		if( prevNode === frozen ){
			frozen = updated;
			if( lastCall ){
				lastCall.onStore = true;
			}
		}
		else if( lastCall ) {
			setTimeout( function(){
				if( !lastCall.onStore ){
					detachedWarn( lastCall );
				}
			});
		}
	}

	// Listen to its changes immediately
	var listener = frozen.getListener(),
		hub = {}
	;

	Utils.each(['on', 'off', 'once', 'emit', 'trigger'], function( method ){
		var attrs = {};
		attrs[ method ] = listener[method].bind(listener);
		Utils.addNE( me, attrs );
		Utils.addNE( hub, attrs );
	});

	Utils.addNE( this, {
		get: function(){
			return frozen;
		},
		set: function( node ){
			frozen.reset( node );
		},
		getEventHub: function(){
			return hub;
		}
	});

	Utils.addNE( this, { getData: this.get, setData: this.set } );
};

function detachedWarn( lastCall ){
	Utils.warn( false, 'Method ' + lastCall.name + ' called on a detached node.', lastCall.node, lastCall.options );
}

//#build

module.exports = Freezer;


/***/ }),

/***/ "./node_modules/freezer-js/src/frozen.js":
/*!***********************************************!*\
  !*** ./node_modules/freezer-js/src/frozen.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Utils = __webpack_require__( /*! ./utils */ "./node_modules/freezer-js/src/utils.js" ),
	nodeCreator = __webpack_require__( /*! ./nodeCreator */ "./node_modules/freezer-js/src/nodeCreator.js"),
	Emitter = __webpack_require__(/*! ./emitter */ "./node_modules/freezer-js/src/emitter.js")
;

//#build
var Frozen = {
	freeze: function( node, store ){
		if( node && node.__ ){
			return node;
		}

		var me = this,
			frozen = nodeCreator.clone(node)
		;

		Utils.addNE( frozen, { __: {
			listener: false,
			parents: [],
			store: store
		}});

		// Freeze children
		Utils.each( node, function( child, key ){
			if( !Utils.isLeaf( child, store.freezeInstances ) ){
				child = me.freeze( child, store );
			}

			if( child && child.__ ){
				me.addParent( child, frozen );
			}

			frozen[ key ] = child;
		});

		store.freezeFn( frozen );

		return frozen;
	},

	merge: function( node, attrs ){
		var _ = node.__,
			trans = _.trans,

			// Clone the attrs to not modify the argument
			attrs = Utils.extend( {}, attrs)
		;

		if( trans ){
			for( var attr in attrs )
				trans[ attr ] = attrs[ attr ];
			return node;
		}

		var me = this,
			frozen = this.copyMeta( node ),
			store = _.store,
			val, key, isFrozen
		;

		Utils.each( node, function( child, key ){
			isFrozen = child && child.__;

			if( isFrozen ){
				me.removeParent( child, node );
			}

			val = attrs[ key ];
			if( !val ){
				if( isFrozen )
					me.addParent( child, frozen );
				return frozen[ key ] = child;
			}

			if( !Utils.isLeaf( val, store.freezeInstances ) )
				val = me.freeze( val, store );

			if( val && val.__ )
				me.addParent( val, frozen );

			delete attrs[ key ];

			frozen[ key ] = val;
		});


		for( key in attrs ) {
			val = attrs[ key ];

			if( !Utils.isLeaf( val, store.freezeInstances ) )
				val = me.freeze( val, store );

			if( val && val.__ )
				me.addParent( val, frozen );

			frozen[ key ] = val;
		}

		_.store.freezeFn( frozen );

		this.refreshParents( node, frozen );

		return frozen;
	},

	replace: function( node, replacement ) {
		var me = this,
			_ = node.__,
			frozen = replacement
		;

		if( !Utils.isLeaf( replacement, _.store.freezeInstances ) ) {

			frozen = me.freeze( replacement, _.store );
			frozen.__.parents = _.parents;
			frozen.__.updateRoot = _.updateRoot;

			// Add the current listener if exists, replacing a
			// previous listener in the frozen if existed
			if( _.listener )
				frozen.__.listener = _.listener;
		}
		if( frozen ){
			this.fixChildren( frozen, node );
		}
		this.refreshParents( node, frozen );

		return frozen;
	},

	remove: function( node, attrs ){
		var trans = node.__.trans;
		if( trans ){
			for( var l = attrs.length - 1; l >= 0; l-- )
				delete trans[ attrs[l] ];
			return node;
		}

		var me = this,
			frozen = this.copyMeta( node ),
			isFrozen
		;

		Utils.each( node, function( child, key ){
			isFrozen = child && child.__;

			if( isFrozen ){
				me.removeParent( child, node );
			}

			if( attrs.indexOf( key ) !== -1 ){
				return;
			}

			if( isFrozen )
				me.addParent( child, frozen );

			frozen[ key ] = child;
		});

		node.__.store.freezeFn( frozen );
		this.refreshParents( node, frozen );

		return frozen;
	},

	splice: function( node, args ){
		var _ = node.__,
			trans = _.trans
		;

		if( trans ){
			trans.splice.apply( trans, args );
			return node;
		}

		var me = this,
			frozen = this.copyMeta( node ),
			index = args[0],
			deleteIndex = index + args[1],
			child
		;

		// Clone the array
		Utils.each( node, function( child, i ){

			if( child && child.__ ){
				me.removeParent( child, node );

				// Skip the nodes to delete
				if( i < index || i>= deleteIndex )
					me.addParent( child, frozen );
			}

			frozen[i] = child;
		});

		// Prepare the new nodes
		if( args.length > 1 ){
			for (var i = args.length - 1; i >= 2; i--) {
				child = args[i];

				if( !Utils.isLeaf( child, _.store.freezeInstances ) )
					child = this.freeze( child, _.store );

				if( child && child.__ )
					this.addParent( child, frozen );

				args[i] = child;
			}
		}

		// splice
		Array.prototype.splice.apply( frozen, args );

		_.store.freezeFn( frozen );
		this.refreshParents( node, frozen );

		return frozen;
	},

	transact: function( node ) {
		var me = this,
			transacting = node.__.trans,
			trans
		;

		if( transacting )
			return transacting;

		trans = node.constructor === Array ? [] : {};

		Utils.each( node, function( child, key ){
			trans[ key ] = child;
		});

		node.__.trans = trans;

		// Call run automatically in case
		// the user forgot about it
		Utils.nextTick( function(){
			if( node.__.trans )
				me.run( node );
		});

		return trans;
	},

	run: function( node ) {
		var me = this,
			trans = node.__.trans
		;

		if( !trans )
			return node;

		// Remove the node as a parent
		Utils.each( trans, function( child, key ){
			if( child && child.__ ){
				me.removeParent( child, node );
			}
		});

		delete node.__.trans;

		var result = this.replace( node, trans );
		return result;
	},

	pivot: function( node ){
		node.__.pivot = 1;
		this.unpivot( node );
		return node;
	},

	unpivot: function( node ){
		Utils.nextTick( function(){
			node.__.pivot = 0;
		});
	},

	refresh: function( node, oldChild, newChild ){
		var me = this,
			trans = node.__.trans,
			found = 0
		;

		if( trans ){

			Utils.each( trans, function( child, key ){
				if( found ) return;

				if( child === oldChild ){

					trans[ key ] = newChild;
					found = 1;

					if( newChild && newChild.__ )
						me.addParent( newChild, node );
				}
			});

			return node;
		}

		var frozen = this.copyMeta( node ),
			replacement, __
		;

		Utils.each( node, function( child, key ){
			if( child === oldChild ){
				child = newChild;
			}

			if( child && (__ = child.__) ){
				me.removeParent( child, node );
				me.addParent( child, frozen );
			}

			frozen[ key ] = child;
		});

		node.__.store.freezeFn( frozen );

		this.refreshParents( node, frozen );
	},

	fixChildren: function( node, oldNode ){
		var me = this;
		Utils.each( node, function( child ){
			if( !child || !child.__ )
				return;

			// Update parents in all children no matter the child
			// is linked to the node or not.
			me.fixChildren( child );

			if( child.__.parents.length === 1 )
				return child.__.parents = [ node ];

			if( oldNode )
				me.removeParent( child, oldNode );

			me.addParent( child, node );
		});
	},

	copyMeta: function( node ){
		var me = this,
			frozen = nodeCreator.clone( node ),
			_ = node.__
		;

		Utils.addNE( frozen, {__: {
			store: _.store,
			updateRoot: _.updateRoot,
			listener: _.listener,
			parents: _.parents.slice( 0 ),
			trans: _.trans,
			pivot: _.pivot,
		}});

		if( _.pivot )
			this.unpivot( frozen );

		return frozen;
	},

	refreshParents: function( oldChild, newChild ){
		var _ = oldChild.__,
			parents = _.parents.length,
			i
		;

		if( oldChild.__.updateRoot ){
			oldChild.__.updateRoot( oldChild, newChild );
		}
		if( newChild ){
			this.emit( oldChild, 'update', newChild, _.store.live );
		}
		if( parents ){
			for (i = parents - 1; i >= 0; i--) {
				this.refresh( _.parents[i], oldChild, newChild );
			}
		}
	},

	removeParent: function( node, parent ){
		var parents = node.__.parents,
			index = parents.indexOf( parent )
		;

		if( index !== -1 ){
			parents.splice( index, 1 );
		}
	},

	addParent: function( node, parent ){
		var parents = node.__.parents,
			index = parents.indexOf( parent )
		;

		if( index === -1 ){
			if(node.__.store.singleParent && parents.length >= 1){
				throw new Error("Freezer: Can't add node to the tree. It's already added and freezer is configured to `singleParent: true`.");
			}
			parents[ parents.length ] = parent;
		}
	},

	emit: function( node, eventName, param, now ){
		var listener = node.__.listener;
		if( !listener )
			return;

		var ticking = listener.ticking;

		if( now ){
			if( ticking || param ){
				listener.ticking = 0;
				listener.emit( eventName, ticking || param, node );
			}
			return;
		}

		listener.ticking = param;
		if( !listener.prevState ){
			listener.prevState = node;
		}

		if( !ticking ){
			Utils.nextTick( function(){
				if( listener.ticking ){
					var updated = listener.ticking,
						prevState = listener.prevState
					;

					listener.ticking = 0;
					listener.prevState = 0;

					listener.emit( eventName, updated, node );
				}
			});
		}
	},

	createListener: function( frozen ){
		var l = frozen.__.listener;

		if( !l ) {
			l = Object.create(Emitter, {
				_events: {
					value: {},
					writable: true
				}
			});

			frozen.__.listener = l;
		}

		return l;
	}
};

nodeCreator.init( Frozen );
//#build

module.exports = Frozen;


/***/ }),

/***/ "./node_modules/freezer-js/src/nodeCreator.js":
/*!****************************************************!*\
  !*** ./node_modules/freezer-js/src/nodeCreator.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Utils = __webpack_require__( /*! ./utils.js */ "./node_modules/freezer-js/src/utils.js" );

//#build
var nodeCreator = {
	init: function( Frozen ){

		var commonMethods = {
			set: function( attr, value ){
				var attrs = attr,
					update = this.__.trans,
					isArray = this.constructor === Array,
					msg = 'Freezer arrays only accept numeric attributes, given: '
				;

				if( typeof attr !== 'object' ){
					if( isArray && parseInt(attr) != attr ){
						Utils.warn( 0, msg + attr );
						return Utils.findPivot( this ) || this;
					}
					attrs = {};
					attrs[ attr ] = value;
				}

				if( !update ){
					for( var key in attrs ){
						if( isArray && parseInt(key) != key ){
							Utils.warn( 0, msg + key );
							return Utils.findPivot( this ) || this;
						}
						else {
							update = update || this[ key ] !== attrs[ key ];
						}
					}

					// No changes, just return the node
					if( !update )
						return Utils.findPivot( this ) || this;
				}

				var name = isArray ? 'array.set' : 'object.set';
				return this.__.store.notify( 'merge', this, attrs, name );
			},

			reset: function( attrs ) {
				return this.__.store.notify( 'replace', this, attrs, 'object.replace' );
			},

			getListener: function(){
				return Frozen.createListener( this );
			},

			toJS: function(){
				var js;
				if( this.constructor === Array ){
					js = new Array( this.length );
				}
				else {
					js = {};
				}

				Utils.each( this, function( child, i ){
					if( child && child.__ )
						js[ i ] = child.toJS();
					else
						js[ i ] = child;
				});

				return js;
			},

			transact: function(){
				return this.__.store.notify( 'transact', this );
			},

			run: function(){
				return this.__.store.notify( 'run', this );
			},

			now: function(){
				return this.__.store.notify( 'now', this );
			},

			pivot: function(){
				return this.__.store.notify( 'pivot', this );
			}
		};

		var arrayMethods = Utils.extend({
			push: function( el ){
				return this.append( [el], 'array.push' );
			},

			append: function( els, name ){
				if( els && els.length )
					return this.__.store.notify( 'splice', this, [this.length, 0].concat( els ), name || 'array.append' );
				return this;
			},

			pop: function(){
				if( !this.length )
					return this;

				return this.__.store.notify( 'splice', this, [this.length -1, 1], 'array.pop' );
			},

			unshift: function( el ){
				return this.prepend( [el], 'array.unshift' );
			},

			prepend: function( els ){
				if( els && els.length )
					return this.__.store.notify( 'splice', this, [0, 0].concat( els ), 'array.prepend' );
				return this;
			},

			shift: function(){
				if( !this.length )
					return this;

				return this.__.store.notify( 'splice', this, [0, 1], 'array.shift' );
			},

			splice: function( index, toRemove, toAdd ){
				return this.__.store.notify( 'splice', this, arguments, 'array.splice' );
			},

			sort: function(){
				var mutable = this.slice();
				mutable.sort.apply(mutable, arguments);
				return this.__.store.notify( 'replace', this, mutable, 'array.sort' );
			}
		}, commonMethods );

		var FrozenArray = Object.create( Array.prototype, Utils.createNE( arrayMethods ) );

		var objectMethods = Utils.createNE( Utils.extend({
			remove: function( keys ){
				var filtered = [],
					k = keys
				;

				if( keys.constructor !== Array )
					k = [ keys ];

				for( var i = 0, l = k.length; i<l; i++ ){
					if( this.hasOwnProperty( k[i] ) )
						filtered.push( k[i] );
				}

				if( filtered.length )
					return this.__.store.notify( 'remove', this, filtered, 'object.remove' );
				return this;
			}
		}, commonMethods));

		var FrozenObject = Object.create( Object.prototype, objectMethods );

		var createArray = (function(){
			// fast version
			if( [].__proto__ )
				return function( length ){
					var arr = new Array( length );
					arr.__proto__ = FrozenArray;
					return arr;
				}

			// slow version for older browsers
			return function( length ){
				var arr = new Array( length );

				for( var m in arrayMethods ){
					arr[ m ] = arrayMethods[ m ];
				}

				return arr;
			}
		})();

		this.clone = function( node ){
			var cons = node.constructor;
			if( cons === Array ){
				return createArray( node.length );
			}
			else {
				if( cons === Object ){
					return Object.create( FrozenObject );
				}
				// Class instances
				else {
					return Object.create( cons.prototype, objectMethods );
				}
			}
		}
	}
}
//#build

module.exports = nodeCreator;


/***/ }),

/***/ "./node_modules/freezer-js/src/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/freezer-js/src/utils.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


//#build
var global = typeof global !== 'undefined' ?
	global :
	typeof self !== 'undefined' ?
		self :
		typeof window !== 'undefined' ?
			window :
			{};

var Utils = {
	extend: function( ob, props ){
		for( var p in props ){
			ob[p] = props[p];
		}
		return ob;
	},

	createNonEnumerable: function( obj, proto ){
		var ne = {};
		for( var key in obj )
			ne[key] = {value: obj[key] };
		return Object.create( proto || {}, ne );
	},

	error: function( message ){
		var err = new Error( message );
		if( console )
			return console.error( err );
		else
			throw err;
	},

	each: function( o, clbk ){
		var i,l,keys;
		if( o && o.constructor === Array ){
			for (i = 0, l = o.length; i < l; i++)
				clbk( o[i], i );
		}
		else {
			keys = Object.keys( o );
			for( i = 0, l = keys.length; i < l; i++ )
				clbk( o[ keys[i] ], keys[i] );
		}
	},

	addNE: function( node, attrs ){
		for( var key in attrs ){
			Object.defineProperty( node, key, {
				enumerable: false,
				configurable: true,
				writable: true,
				value: attrs[ key ]
			});
		}
	},

	/**
	 * Creates non-enumerable property descriptors, to be used by Object.create.
	 * @param  {Object} attrs Properties to create descriptors
	 * @return {Object}       A hash with the descriptors.
	 */
	createNE: function( attrs ){
		var ne = {};

		for( var key in attrs ){
			ne[ key ] = {
				writable: true,
				configurable: true,
				enumerable: false,
				value: attrs[ key ]
			}
		}

		return ne;
	},

	// nextTick - by stagas / public domain
	nextTick: (function () {
    var queue = [],
		dirty = false,
		fn,
		hasPostMessage = !!global.postMessage && (typeof Window !== 'undefined') && (global instanceof Window),
		messageName = 'fzr' + Date.now(),
		trigger = (function () {
			return hasPostMessage
				? function trigger () {
				global.postMessage(messageName, '*');
			}
			: function trigger () {
				setTimeout(function () { processQueue() }, 0);
			};
		}()),
		processQueue = (function () {
			return hasPostMessage
				? function processQueue (event) {
					if (event.data === messageName) {
						event.stopPropagation();
						flushQueue();
					}
				}
				: flushQueue;
    	})()
    ;

    function flushQueue () {
				dirty = false;
        while (fn = queue.shift()) {
            fn();
        }
    }

    function nextTick (fn) {
        queue.push(fn);
        if (dirty) return;
        dirty = true;
        trigger();
    }

    if (hasPostMessage) global.addEventListener('message', processQueue, true);

    nextTick.removeListener = function () {
        global.removeEventListener('message', processQueue, true);
    }

    return nextTick;
  })(),

  findPivot: function( node ){
  		if( !node || !node.__ )
  			return;

  		if( node.__.pivot )
  			return node;

  		var found = 0,
  			parents = node.__.parents,
  			i = 0,
  			parent
  		;

  		// Look up for the pivot in the parents
  		while( !found && i < parents.length ){
  			parent = parents[i];
  			if( parent.__.pivot )
  				found = parent;
  			i++;
  		}

  		if( found ){
  			return found;
  		}

  		// If not found, try with the parent's parents
  		i=0;
  		while( !found && i < parents.length ){
	  		found = this.findPivot( parents[i] );
	  		i++;
	  	}

  		return found;
  },

	isLeaf: function( node, freezeInstances ){
		var cons;
		return !node || !(cons = node.constructor) || (freezeInstances ?
			(cons === String || cons === Number || cons === Boolean) :
			(cons !== Object && cons !== Array)
		);
	},

	warn: function(){
		var args;
		if( typeof process === 'undefined' || "production" !== 'production' ){
			if( !arguments[0] && typeof console !== 'undefined' ){
				args = Array.prototype.slice.call( arguments, 1 );
				args[0] = 'Freezer.js WARNING: ' + args[0];
				console.warn.apply( console, args );
			}
		}
	}
};

//#build


module.exports = Utils;


/***/ }),

/***/ "./node_modules/shallow-equals/index.js":
/*!**********************************************!*\
  !*** ./node_modules/shallow-equals/index.js ***!
  \**********************************************/
/***/ ((module) => {

module.exports = shallow

function shallow(a, b, compare) {
  var aIsNull = a === null
  var bIsNull = b === null

  if (aIsNull !== bIsNull) return false

  var aIsArray = Array.isArray(a)
  var bIsArray = Array.isArray(b)

  if (aIsArray !== bIsArray) return false

  var aTypeof = typeof a
  var bTypeof = typeof b

  if (aTypeof !== bTypeof) return false
  if (flat(aTypeof)) return compare
    ? compare(a, b)
    : a === b

  return aIsArray
    ? shallowArray(a, b, compare)
    : shallowObject(a, b, compare)
}

function shallowArray(a, b, compare) {
  var l = a.length
  if (l !== b.length) return false

  if (compare) {
    for (var i = 0; i < l; i++)
      if (!compare(a[i], b[i])) return false
  } else {
    for (var i = 0; i < l; i++) {
      if (a[i] !== b[i]) return false
    }
  }

  return true
}

function shallowObject(a, b, compare) {
  var ka = 0
  var kb = 0

  if (compare) {
    for (var key in a) {
      if (
        a.hasOwnProperty(key) &&
        !compare(a[key], b[key])
      ) return false

      ka++
    }
  } else {
    for (var key in a) {
      if (
        a.hasOwnProperty(key) &&
        a[key] !== b[key]
      ) return false

      ka++
    }
  }

  for (var key in b) {
    if (b.hasOwnProperty(key)) kb++
  }

  return ka === kb
}

function flat(type) {
  return (
    type !== 'function' &&
    type !== 'object'
  )
}


/***/ }),

/***/ "./node_modules/toggle-selection/index.js":
/*!************************************************!*\
  !*** ./node_modules/toggle-selection/index.js ***!
  \************************************************/
/***/ ((module) => {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ "./node_modules/marked/lib/marked.esm.js":
/*!***********************************************!*\
  !*** ./node_modules/marked/lib/marked.esm.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hooks: () => (/* binding */ _Hooks),
/* harmony export */   Lexer: () => (/* binding */ _Lexer),
/* harmony export */   Marked: () => (/* binding */ Marked),
/* harmony export */   Parser: () => (/* binding */ _Parser),
/* harmony export */   Renderer: () => (/* binding */ _Renderer),
/* harmony export */   TextRenderer: () => (/* binding */ _TextRenderer),
/* harmony export */   Tokenizer: () => (/* binding */ _Tokenizer),
/* harmony export */   defaults: () => (/* binding */ _defaults),
/* harmony export */   getDefaults: () => (/* binding */ _getDefaults),
/* harmony export */   lexer: () => (/* binding */ lexer),
/* harmony export */   marked: () => (/* binding */ marked),
/* harmony export */   options: () => (/* binding */ options),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseInline: () => (/* binding */ parseInline),
/* harmony export */   parser: () => (/* binding */ parser),
/* harmony export */   setOptions: () => (/* binding */ setOptions),
/* harmony export */   use: () => (/* binding */ use),
/* harmony export */   walkTokens: () => (/* binding */ walkTokens)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
/**
 * marked v9.1.6 - a markdown parser
 * Copyright (c) 2011-2023, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */

/**
 * Gets the original marked default options.
 */
function _getDefaults() {
  return {
    async: false,
    breaks: false,
    extensions: null,
    gfm: true,
    hooks: null,
    pedantic: false,
    renderer: null,
    silent: false,
    tokenizer: null,
    walkTokens: null
  };
}
let _defaults = _getDefaults();
function changeDefaults(newDefaults) {
  _defaults = newDefaults;
}

/**
 * Helpers
 */
const escapeTest = /[&<>"']/;
const escapeReplace = new RegExp(escapeTest.source, 'g');
const escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
const escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, 'g');
const escapeReplacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
const getEscapeReplacement = ch => escapeReplacements[ch];
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html;
}
const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}
const caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
  regex = typeof regex === 'string' ? regex : regex.source;
  opt = opt || '';
  const obj = {
    replace: (name, val) => {
      val = typeof val === 'object' && 'source' in val ? val.source : val;
      val = val.replace(caret, '$1');
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}
function cleanUrl(href) {
  try {
    href = encodeURI(href).replace(/%25/g, '%');
  } catch (e) {
    return null;
  }
  return href;
}
const noopTest = {
  exec: () => null
};
function splitCells(tableRow, count) {
  // ensure that every cell-delimiting pipe has a space
  // before it to distinguish it from an escaped pipe
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
      let escaped = false;
      let curr = offset;
      while (--curr >= 0 && str[curr] === '\\') escaped = !escaped;
      if (escaped) {
        // odd number of slashes means | is escaped
        // so we leave it alone
        return '|';
      } else {
        // add space before unescaped |
        return ' |';
      }
    }),
    cells = row.split(/ \|/);
  let i = 0;
  // First/last cell in a row cannot be empty if it has no leading/trailing pipe
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) {
    cells.pop();
  }
  if (count) {
    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count) cells.push('');
    }
  }
  for (; i < cells.length; i++) {
    // leading or trailing whitespace is ignored per the gfm spec
    cells[i] = cells[i].trim().replace(/\\\|/g, '|');
  }
  return cells;
}
/**
 * Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
 * /c*$/ is vulnerable to REDOS.
 *
 * @param str
 * @param c
 * @param invert Remove suffix of non-c chars instead. Default falsey.
 */
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return '';
  }
  // Length of suffix matching the invert condition.
  let suffLen = 0;
  // Step left until we fail to match the invert condition.
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  let level = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '\\') {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}
function outputLink(cap, link, raw, lexer) {
  const href = link.href;
  const title = link.title ? escape(link.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, '$1');
  if (cap[0].charAt(0) !== '!') {
    lexer.state.inLink = true;
    const token = {
      type: 'link',
      raw,
      href,
      title,
      text,
      tokens: lexer.inlineTokens(text)
    };
    lexer.state.inLink = false;
    return token;
  }
  return {
    type: 'image',
    raw,
    href,
    title,
    text: escape(text)
  };
}
function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null) {
    return text;
  }
  const indentToCode = matchIndentToCode[1];
  return text.split('\n').map(node => {
    const matchIndentInNode = node.match(/^\s+/);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join('\n');
}
/**
 * Tokenizer
 */
class _Tokenizer {
  constructor(options) {
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "options", void 0);
    // TODO: Fix this rules type
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "rules", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "lexer", void 0);
    this.options = options || _defaults;
  }
  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: 'space',
        raw: cap[0]
      };
    }
  }
  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ {1,4}/gm, '');
      return {
        type: 'code',
        raw: cap[0],
        codeBlockStyle: 'indented',
        text: !this.options.pedantic ? rtrim(text, '\n') : text
      };
    }
  }
  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || '');
      return {
        type: 'code',
        raw,
        lang: cap[2] ? cap[2].trim().replace(this.rules.inline._escapes, '$1') : cap[2],
        text
      };
    }
  }
  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();
      // remove trailing #s
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, '#');
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          // CommonMark requires space before trailing #s
          text = trimmed.trim();
        }
      }
      return {
        type: 'heading',
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: 'hr',
        raw: cap[0]
      };
    }
  }
  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      const text = rtrim(cap[0].replace(/^ *>[ \t]?/gm, ''), '\n');
      const top = this.lexer.state.top;
      this.lexer.state.top = true;
      const tokens = this.lexer.blockTokens(text);
      this.lexer.state.top = top;
      return {
        type: 'blockquote',
        raw: cap[0],
        tokens,
        text
      };
    }
  }
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list = {
        type: 'list',
        raw: '',
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : '',
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : '[*+-]';
      }
      // Get next list item
      const itemRegex = new RegExp(`^( {0,3}${bull})((?:[\t ][^\\n]*)?(?:\\n|$))`);
      let raw = '';
      let itemContents = '';
      let endsWithBlankLine = false;
      // Check if current bullet point can start a new List Item
      while (src) {
        let endEarly = false;
        if (!(cap = itemRegex.exec(src))) {
          break;
        }
        if (this.rules.block.hr.test(src)) {
          // End list if bullet was actually HR (possibly move into itemRegex?)
          break;
        }
        raw = cap[0];
        src = src.substring(raw.length);
        let line = cap[2].split('\n', 1)[0].replace(/^\t+/, t => ' '.repeat(3 * t.length));
        let nextLine = src.split('\n', 1)[0];
        let indent = 0;
        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimStart();
        } else {
          indent = cap[2].search(/[^ ]/); // Find first non-space char
          indent = indent > 4 ? 1 : indent; // Treat indented code blocks (> 4 spaces) as having only 1 indent
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }
        let blankLine = false;
        if (!line && /^ *$/.test(nextLine)) {
          // Items begin with at most one blank line
          raw += nextLine + '\n';
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`);
          const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
          const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
          const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
          // Check if following lines should be included in List Item
          while (src) {
            const rawLine = src.split('\n', 1)[0];
            nextLine = rawLine;
            // Re-align to follow commonmark nesting rules
            if (this.options.pedantic) {
              nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ');
            }
            // End list item if found code fences
            if (fencesBeginRegex.test(nextLine)) {
              break;
            }
            // End list item if found start of new heading
            if (headingBeginRegex.test(nextLine)) {
              break;
            }
            // End list item if found start of new bullet
            if (nextBulletRegex.test(nextLine)) {
              break;
            }
            // Horizontal rule found
            if (hrRegex.test(src)) {
              break;
            }
            if (nextLine.search(/[^ ]/) >= indent || !nextLine.trim()) {
              // Dedent if possible
              itemContents += '\n' + nextLine.slice(indent);
            } else {
              // not enough indentation
              if (blankLine) {
                break;
              }
              // paragraph continuation unless last line was a different block level element
              if (line.search(/[^ ]/) >= 4) {
                // indented code block
                break;
              }
              if (fencesBeginRegex.test(line)) {
                break;
              }
              if (headingBeginRegex.test(line)) {
                break;
              }
              if (hrRegex.test(line)) {
                break;
              }
              itemContents += '\n' + nextLine;
            }
            if (!blankLine && !nextLine.trim()) {
              // Check if current line is blank
              blankLine = true;
            }
            raw += rawLine + '\n';
            src = src.substring(rawLine.length + 1);
            line = nextLine.slice(indent);
          }
        }
        if (!list.loose) {
          // If the previous item ended with a blank line, the list is loose
          if (endsWithBlankLine) {
            list.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        let istask = null;
        let ischecked;
        // Check for task list items
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== '[ ] ';
            itemContents = itemContents.replace(/^\[[ xX]\] +/, '');
          }
        }
        list.items.push({
          type: 'list_item',
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents,
          tokens: []
        });
        list.raw += raw;
      }
      // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic
      list.items[list.items.length - 1].raw = raw.trimEnd();
      list.items[list.items.length - 1].text = itemContents.trimEnd();
      list.raw = list.raw.trimEnd();
      // Item child tokens handled here at end because we needed to have the final item to trim it first
      for (let i = 0; i < list.items.length; i++) {
        this.lexer.state.top = false;
        list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
        if (!list.loose) {
          // Check if list should be loose
          const spacers = list.items[i].tokens.filter(t => t.type === 'space');
          const hasMultipleLineBreaks = spacers.length > 0 && spacers.some(t => /\n.*\n/.test(t.raw));
          list.loose = hasMultipleLineBreaks;
        }
      }
      // Set all items to loose if list is loose
      if (list.loose) {
        for (let i = 0; i < list.items.length; i++) {
          list.items[i].loose = true;
        }
      }
      return list;
    }
  }
  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: 'html',
        block: true,
        raw: cap[0],
        pre: cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style',
        text: cap[0]
      };
      return token;
    }
  }
  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      const tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
      const href = cap[2] ? cap[2].replace(/^<(.*)>$/, '$1').replace(this.rules.inline._escapes, '$1') : '';
      const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline._escapes, '$1') : cap[3];
      return {
        type: 'def',
        tag,
        raw: cap[0],
        href,
        title
      };
    }
  }
  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (cap) {
      if (!/[:|]/.test(cap[2])) {
        // delimiter row must have a pipe (|) or colon (:) otherwise it is a setext heading
        return;
      }
      const item = {
        type: 'table',
        raw: cap[0],
        header: splitCells(cap[1]).map(c => {
          return {
            text: c,
            tokens: []
          };
        }),
        align: cap[2].replace(/^\||\| *$/g, '').split('|'),
        rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, '').split('\n') : []
      };
      if (item.header.length === item.align.length) {
        let l = item.align.length;
        let i, j, k, row;
        for (i = 0; i < l; i++) {
          const align = item.align[i];
          if (align) {
            if (/^ *-+: *$/.test(align)) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(align)) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(align)) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }
        }
        l = item.rows.length;
        for (i = 0; i < l; i++) {
          item.rows[i] = splitCells(item.rows[i], item.header.length).map(c => {
            return {
              text: c,
              tokens: []
            };
          });
        }
        // parse child tokens inside headers and cells
        // header child tokens
        l = item.header.length;
        for (j = 0; j < l; j++) {
          item.header[j].tokens = this.lexer.inline(item.header[j].text);
        }
        // cell child tokens
        l = item.rows.length;
        for (j = 0; j < l; j++) {
          row = item.rows[j];
          for (k = 0; k < row.length; k++) {
            row[k].tokens = this.lexer.inline(row[k].text);
          }
        }
        return item;
      }
    }
  }
  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      return {
        type: 'heading',
        raw: cap[0],
        depth: cap[2].charAt(0) === '=' ? 1 : 2,
        text: cap[1],
        tokens: this.lexer.inline(cap[1])
      };
    }
  }
  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const text = cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1];
      return {
        type: 'paragraph',
        raw: cap[0],
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      return {
        type: 'text',
        raw: cap[0],
        text: cap[0],
        tokens: this.lexer.inline(cap[0])
      };
    }
  }
  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: 'escape',
        raw: cap[0],
        text: escape(cap[1])
      };
    }
  }
  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: 'html',
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: false,
        text: cap[0]
      };
    }
  }
  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        // commonmark requires matching angle brackets
        if (!/>$/.test(trimmedUrl)) {
          return;
        }
        // ending angle bracket cannot be escaped
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), '\\');
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        // find closing parenthesis
        const lastParenIndex = findClosingBracket(cap[2], '()');
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf('!') === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = '';
        }
      }
      let href = cap[2];
      let title = '';
      if (this.options.pedantic) {
        // split pedantic href and title
        const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
        if (link) {
          href = link[1];
          title = link[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : '';
      }
      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
          // pedantic allows starting angle bracket without ending angle bracket
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
        title: title ? title.replace(this.rules.inline._escapes, '$1') : title
      }, cap[0], this.lexer);
    }
  }
  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      let link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = links[link.toLowerCase()];
      if (!link) {
        const text = cap[0].charAt(0);
        return {
          type: 'text',
          raw: text,
          text
        };
      }
      return outputLink(cap, link, cap[0], this.lexer);
    }
  }
  emStrong(src, maskedSrc) {
    let prevChar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    let match = this.rules.inline.emStrong.lDelim.exec(src);
    if (!match) return;
    // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u)) return;
    const nextChar = match[1] || match[2] || '';
    if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
      // unicode Regex counts emoji as 1 char; spread into array for proper count (used multiple times below)
      const lLength = [...match[0]].length - 1;
      let rDelim,
        rLength,
        delimTotal = lLength,
        midDelimTotal = 0;
      const endReg = match[0][0] === '*' ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      endReg.lastIndex = 0;
      // Clip maskedSrc to same section of string as src (move to lexer?)
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim) continue; // skip single * in __abc*abc__
        rLength = [...rDelim].length;
        if (match[3] || match[4]) {
          // found another Left Delim
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          // either Left or Right Delim
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue; // CommonMark Emphasis Rules 9-10
          }
        }
        delimTotal -= rLength;
        if (delimTotal > 0) continue; // Haven't found enough closing delimiters
        // Remove extra characters. *a*** -> *a*
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        // char length can be >1 for unicode characters;
        const lastCharLength = [...match[0]][0].length;
        const raw = src.slice(0, lLength + match.index + lastCharLength + rLength);
        // Create `em` if smallest delimiter has odd char count. *a***
        if (Math.min(lLength, rLength) % 2) {
          const text = raw.slice(1, -1);
          return {
            type: 'em',
            raw,
            text,
            tokens: this.lexer.inlineTokens(text)
          };
        }
        // Create 'strong' if smallest delimiter has even char count. **a***
        const text = raw.slice(2, -2);
        return {
          type: 'strong',
          raw,
          text,
          tokens: this.lexer.inlineTokens(text)
        };
      }
    }
  }
  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, ' ');
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = escape(text, true);
      return {
        type: 'codespan',
        raw: cap[0],
        text
      };
    }
  }
  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: 'br',
        raw: cap[0]
      };
    }
  }
  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: 'del',
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2])
      };
    }
  }
  autolink(src) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === '@') {
        text = escape(cap[1]);
        href = 'mailto:' + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      return {
        type: 'link',
        raw: cap[0],
        text,
        href,
        tokens: [{
          type: 'text',
          raw: text,
          text
        }]
      };
    }
  }
  url(src) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === '@') {
        text = escape(cap[0]);
        href = 'mailto:' + text;
      } else {
        // do extended autolink path validation
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);
        text = escape(cap[0]);
        if (cap[1] === 'www.') {
          href = 'http://' + cap[0];
        } else {
          href = cap[0];
        }
      }
      return {
        type: 'link',
        raw: cap[0],
        text,
        href,
        tokens: [{
          type: 'text',
          raw: text,
          text
        }]
      };
    }
  }
  inlineText(src) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      if (this.lexer.state.inRawBlock) {
        text = cap[0];
      } else {
        text = escape(cap[0]);
      }
      return {
        type: 'text',
        raw: cap[0],
        text
      };
    }
  }
}

/**
 * Block-Level Grammar
 */
// Not all rules are defined in the object literal
// @ts-expect-error
const block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: '^ {0,3}(?:' // optional indentation
  + '<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
  + '|comment[^\\n]*(\\n+|$)' // (2)
  + '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
  + '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
  + '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
  + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (6)
  + '|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) open tag
  + '|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) closing tag
  + ')',
  def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def).replace('label', block._label).replace('title', block._title).getRegex();
block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = edit(/^( *)(bull) */).replace('bull', block.bullet).getRegex();
block.list = edit(block.list).replace(/bull/g, block.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block.def.source + ')').getRegex();
block._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = edit(block.html, 'i').replace('comment', block._comment).replace('tag', block._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
block.lheading = edit(block.lheading).replace(/bull/g, block.bullet) // lists can interrupt
.getRegex();
block.paragraph = edit(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6}(?:\\s|$)').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
.replace('|table', '').replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
.getRegex();
block.blockquote = edit(block.blockquote).replace('paragraph', block.paragraph).getRegex();
/**
 * Normal Block Grammar
 */
block.normal = {
  ...block
};
/**
 * GFM Block Grammar
 */
block.gfm = {
  ...block.normal,
  table: '^ *([^\\n ].*)\\n' // Header
  + ' {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)' // Align
  + '(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells
};
block.gfm.table = edit(block.gfm.table).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6}(?:\\s|$)').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
.getRegex();
block.gfm.paragraph = edit(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6}(?:\\s|$)').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
.replace('table', block.gfm.table) // interrupt paragraphs with table
.replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
.getRegex();
/**
 * Pedantic grammar (original John Gruber's loose markdown specification)
 */
block.pedantic = {
  ...block.normal,
  html: edit('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
  + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(block.normal._paragraph).replace('hr', block.hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', block.lheading).replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').getRegex()
};
/**
 * Inline-Level Grammar
 */
// Not all rules are defined in the object literal
// @ts-expect-error
const inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: '^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
  + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
  + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
  + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
  + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: 'reflink|nolink(?!\\()',
  emStrong: {
    lDelim: /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,
    //         (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
    //         | Skip orphan inside strong      | Consume to delim | (1) #***              | (2) a***#, a***                    | (3) #***a, ***a                  | (4) ***#                 | (5) #***#                         | (6) a***a
    rDelimAst: /^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/ // ^- Not allowed for _
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^((?![*_])[\spunctuation])/
};
// list of unicode punctuation marks, plus any missing characters from CommonMark spec
inline._punctuation = '\\p{P}$+<=>`^|~';
inline.punctuation = edit(inline.punctuation, 'u').replace(/punctuation/g, inline._punctuation).getRegex();
// sequences em should skip over [title](link), `code`, <html>
inline.blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;
inline.anyPunctuation = /\\[punct]/g;
inline._escapes = /\\([punct])/g;
inline._comment = edit(block._comment).replace('(?:-->|$)', '-->').getRegex();
inline.emStrong.lDelim = edit(inline.emStrong.lDelim, 'u').replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, 'gu').replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, 'gu').replace(/punct/g, inline._punctuation).getRegex();
inline.anyPunctuation = edit(inline.anyPunctuation, 'gu').replace(/punct/g, inline._punctuation).getRegex();
inline._escapes = edit(inline._escapes, 'gu').replace(/punct/g, inline._punctuation).getRegex();
inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink).replace('scheme', inline._scheme).replace('email', inline._email).getRegex();
inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
inline.tag = edit(inline.tag).replace('comment', inline._comment).replace('attribute', inline._attribute).getRegex();
inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
inline.link = edit(inline.link).replace('label', inline._label).replace('href', inline._href).replace('title', inline._title).getRegex();
inline.reflink = edit(inline.reflink).replace('label', inline._label).replace('ref', block._label).getRegex();
inline.nolink = edit(inline.nolink).replace('ref', block._label).getRegex();
inline.reflinkSearch = edit(inline.reflinkSearch, 'g').replace('reflink', inline.reflink).replace('nolink', inline.nolink).getRegex();
/**
 * Normal Inline Grammar
 */
inline.normal = {
  ...inline
};
/**
 * Pedantic Inline Grammar
 */
inline.pedantic = {
  ...inline.normal,
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace('label', inline._label).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline._label).getRegex()
};
/**
 * GFM Inline Grammar
 */
inline.gfm = {
  ...inline.normal,
  escape: edit(inline.escape).replace('])', '~|])').getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
};
inline.gfm.url = edit(inline.gfm.url, 'i').replace('email', inline.gfm._extended_email).getRegex();
/**
 * GFM + Line Breaks Inline Grammar
 */
inline.breaks = {
  ...inline.gfm,
  br: edit(inline.br).replace('{2,}', '*').getRegex(),
  text: edit(inline.gfm.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex()
};

/**
 * Block Lexer
 */
class _Lexer {
  constructor(options) {
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tokens", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "options", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tokenizer", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "inlineQueue", void 0);
    // TokenList cannot be created in one go
    // @ts-expect-error
    this.tokens = [];
    this.tokens.links = Object.create(null);
    this.options = options || _defaults;
    this.options.tokenizer = this.options.tokenizer || new _Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules = {
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }
  /**
   * Static Lex Method
   */
  static lex(src, options) {
    const lexer = new _Lexer(options);
    return lexer.lex(src);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(src, options) {
    const lexer = new _Lexer(options);
    return lexer.inlineTokens(src);
  }
  /**
   * Preprocessing
   */
  lex(src) {
    src = src.replace(/\r\n|\r/g, '\n');
    this.blockTokens(src, this.tokens);
    let next;
    while (next = this.inlineQueue.shift()) {
      this.inlineTokens(next.src, next.tokens);
    }
    return this.tokens;
  }
  blockTokens(src) {
    let tokens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    if (this.options.pedantic) {
      src = src.replace(/\t/g, '    ').replace(/^ +$/gm, '');
    } else {
      src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
        return leading + '    '.repeat(tabs.length);
      });
    }
    let token;
    let lastToken;
    let cutSrc;
    let lastParagraphClipped;
    while (src) {
      if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(extTokenizer => {
        if (token = extTokenizer.call({
          lexer: this
        }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      // newline
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          // if there's a single \n as a spacer, it's terminating the last line,
          // so move it there so that we don't get unnecessary paragraph tags
          tokens[tokens.length - 1].raw += '\n';
        } else {
          tokens.push(token);
        }
        continue;
      }
      // code
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        // An indented code block cannot interrupt a paragraph.
        if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      // fences
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      // heading
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      // hr
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      // blockquote
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      // list
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      // html
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      // def
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }
      // table (gfm)
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      // lheading
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      // top-level paragraph
      // prevent paragraph consuming extensions by clipping 'src' to extension start
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach(getStartIndex => {
          tempStart = getStartIndex.call({
            lexer: this
          }, tempSrc);
          if (typeof tempStart === 'number' && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken.type === 'paragraph') {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      }
      // text
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === 'text') {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens;
  }
  inline(src) {
    let tokens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    this.inlineQueue.push({
      src,
      tokens
    });
    return tokens;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(src) {
    let tokens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    let token, lastToken, cutSrc;
    // String with links masked to avoid interference with em and strong
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;
    // Mask out reflinks
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + '[' + 'a'.repeat(match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    // Mask out other blocks
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + '[' + 'a'.repeat(match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    // Mask out escaped characters
    while ((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + '++' + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    }
    while (src) {
      if (!keepPrevChar) {
        prevChar = '';
      }
      keepPrevChar = false;
      // extensions
      if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(extTokenizer => {
        if (token = extTokenizer.call({
          lexer: this
        }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      // escape
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      // tag
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === 'text' && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      // link
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      // reflink, nolink
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === 'text' && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      // em & strong
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      // code
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      // br
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      // del (gfm)
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      // autolink
      if (token = this.tokenizer.autolink(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      // url (gfm)
      if (!this.state.inLink && (token = this.tokenizer.url(src))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      // text
      // prevent inlineText consuming extensions by clipping 'src' to extension start
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach(getStartIndex => {
          tempStart = getStartIndex.call({
            lexer: this
          }, tempSrc);
          if (typeof tempStart === 'number' && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== '_') {
          // Track prevChar before string of ____ started
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens;
  }
}

/**
 * Renderer
 */
class _Renderer {
  constructor(options) {
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "options", void 0);
    this.options = options || _defaults;
  }
  code(code, infostring, escaped) {
    const lang = (infostring || '').match(/^\S*/)?.[0];
    code = code.replace(/\n$/, '') + '\n';
    if (!lang) {
      return '<pre><code>' + (escaped ? code : escape(code, true)) + '</code></pre>\n';
    }
    return '<pre><code class="language-' + escape(lang) + '">' + (escaped ? code : escape(code, true)) + '</code></pre>\n';
  }
  blockquote(quote) {
    return `<blockquote>\n${quote}</blockquote>\n`;
  }
  html(html, block) {
    return html;
  }
  heading(text, level, raw) {
    // ignore IDs
    return `<h${level}>${text}</h${level}>\n`;
  }
  hr() {
    return '<hr>\n';
  }
  list(body, ordered, start) {
    const type = ordered ? 'ol' : 'ul';
    const startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
    return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
  }
  listitem(text, task, checked) {
    return `<li>${text}</li>\n`;
  }
  checkbox(checked) {
    return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox">';
  }
  paragraph(text) {
    return `<p>${text}</p>\n`;
  }
  table(header, body) {
    if (body) body = `<tbody>${body}</tbody>`;
    return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
  }
  tablerow(content) {
    return `<tr>\n${content}</tr>\n`;
  }
  tablecell(content, flags) {
    const type = flags.header ? 'th' : 'td';
    const tag = flags.align ? `<${type} align="${flags.align}">` : `<${type}>`;
    return tag + content + `</${type}>\n`;
  }
  /**
   * span level renderer
   */
  strong(text) {
    return `<strong>${text}</strong>`;
  }
  em(text) {
    return `<em>${text}</em>`;
  }
  codespan(text) {
    return `<code>${text}</code>`;
  }
  br() {
    return '<br>';
  }
  del(text) {
    return `<del>${text}</del>`;
  }
  link(href, title, text) {
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return text;
    }
    href = cleanHref;
    let out = '<a href="' + href + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += '>' + text + '</a>';
    return out;
  }
  image(href, title, text) {
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return text;
    }
    href = cleanHref;
    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += '>';
    return out;
  }
  text(text) {
    return text;
  }
}

/**
 * TextRenderer
 * returns only the textual part of the token
 */
class _TextRenderer {
  // no need for block level renderers
  strong(text) {
    return text;
  }
  em(text) {
    return text;
  }
  codespan(text) {
    return text;
  }
  del(text) {
    return text;
  }
  html(text) {
    return text;
  }
  text(text) {
    return text;
  }
  link(href, title, text) {
    return '' + text;
  }
  image(href, title, text) {
    return '' + text;
  }
  br() {
    return '';
  }
}

/**
 * Parsing & Compiling
 */
class _Parser {
  constructor(options) {
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "options", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderer", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "textRenderer", void 0);
    this.options = options || _defaults;
    this.options.renderer = this.options.renderer || new _Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new _TextRenderer();
  }
  /**
   * Static Parse Method
   */
  static parse(tokens, options) {
    const parser = new _Parser(options);
    return parser.parse(tokens);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens, options) {
    const parser = new _Parser(options);
    return parser.parseInline(tokens);
  }
  /**
   * Parse Loop
   */
  parse(tokens) {
    let top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    let out = '';
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      // Run any renderer extensions
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        const genericToken = token;
        const ret = this.options.extensions.renderers[genericToken.type].call({
          parser: this
        }, genericToken);
        if (ret !== false || !['space', 'hr', 'heading', 'code', 'table', 'blockquote', 'list', 'html', 'paragraph', 'text'].includes(genericToken.type)) {
          out += ret || '';
          continue;
        }
      }
      switch (token.type) {
        case 'space':
          {
            continue;
          }
        case 'hr':
          {
            out += this.renderer.hr();
            continue;
          }
        case 'heading':
          {
            const headingToken = token;
            out += this.renderer.heading(this.parseInline(headingToken.tokens), headingToken.depth, unescape(this.parseInline(headingToken.tokens, this.textRenderer)));
            continue;
          }
        case 'code':
          {
            const codeToken = token;
            out += this.renderer.code(codeToken.text, codeToken.lang, !!codeToken.escaped);
            continue;
          }
        case 'table':
          {
            const tableToken = token;
            let header = '';
            // header
            let cell = '';
            for (let j = 0; j < tableToken.header.length; j++) {
              cell += this.renderer.tablecell(this.parseInline(tableToken.header[j].tokens), {
                header: true,
                align: tableToken.align[j]
              });
            }
            header += this.renderer.tablerow(cell);
            let body = '';
            for (let j = 0; j < tableToken.rows.length; j++) {
              const row = tableToken.rows[j];
              cell = '';
              for (let k = 0; k < row.length; k++) {
                cell += this.renderer.tablecell(this.parseInline(row[k].tokens), {
                  header: false,
                  align: tableToken.align[k]
                });
              }
              body += this.renderer.tablerow(cell);
            }
            out += this.renderer.table(header, body);
            continue;
          }
        case 'blockquote':
          {
            const blockquoteToken = token;
            const body = this.parse(blockquoteToken.tokens);
            out += this.renderer.blockquote(body);
            continue;
          }
        case 'list':
          {
            const listToken = token;
            const ordered = listToken.ordered;
            const start = listToken.start;
            const loose = listToken.loose;
            let body = '';
            for (let j = 0; j < listToken.items.length; j++) {
              const item = listToken.items[j];
              const checked = item.checked;
              const task = item.task;
              let itemBody = '';
              if (item.task) {
                const checkbox = this.renderer.checkbox(!!checked);
                if (loose) {
                  if (item.tokens.length > 0 && item.tokens[0].type === 'paragraph') {
                    item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;
                    if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                      item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                    }
                  } else {
                    item.tokens.unshift({
                      type: 'text',
                      text: checkbox + ' '
                    });
                  }
                } else {
                  itemBody += checkbox + ' ';
                }
              }
              itemBody += this.parse(item.tokens, loose);
              body += this.renderer.listitem(itemBody, task, !!checked);
            }
            out += this.renderer.list(body, ordered, start);
            continue;
          }
        case 'html':
          {
            const htmlToken = token;
            out += this.renderer.html(htmlToken.text, htmlToken.block);
            continue;
          }
        case 'paragraph':
          {
            const paragraphToken = token;
            out += this.renderer.paragraph(this.parseInline(paragraphToken.tokens));
            continue;
          }
        case 'text':
          {
            let textToken = token;
            let body = textToken.tokens ? this.parseInline(textToken.tokens) : textToken.text;
            while (i + 1 < tokens.length && tokens[i + 1].type === 'text') {
              textToken = tokens[++i];
              body += '\n' + (textToken.tokens ? this.parseInline(textToken.tokens) : textToken.text);
            }
            out += top ? this.renderer.paragraph(body) : body;
            continue;
          }
        default:
          {
            const errMsg = 'Token with "' + token.type + '" type was not found.';
            if (this.options.silent) {
              console.error(errMsg);
              return '';
            } else {
              throw new Error(errMsg);
            }
          }
      }
    }
    return out;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = '';
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      // Run any renderer extensions
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        const ret = this.options.extensions.renderers[token.type].call({
          parser: this
        }, token);
        if (ret !== false || !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(token.type)) {
          out += ret || '';
          continue;
        }
      }
      switch (token.type) {
        case 'escape':
          {
            const escapeToken = token;
            out += renderer.text(escapeToken.text);
            break;
          }
        case 'html':
          {
            const tagToken = token;
            out += renderer.html(tagToken.text);
            break;
          }
        case 'link':
          {
            const linkToken = token;
            out += renderer.link(linkToken.href, linkToken.title, this.parseInline(linkToken.tokens, renderer));
            break;
          }
        case 'image':
          {
            const imageToken = token;
            out += renderer.image(imageToken.href, imageToken.title, imageToken.text);
            break;
          }
        case 'strong':
          {
            const strongToken = token;
            out += renderer.strong(this.parseInline(strongToken.tokens, renderer));
            break;
          }
        case 'em':
          {
            const emToken = token;
            out += renderer.em(this.parseInline(emToken.tokens, renderer));
            break;
          }
        case 'codespan':
          {
            const codespanToken = token;
            out += renderer.codespan(codespanToken.text);
            break;
          }
        case 'br':
          {
            out += renderer.br();
            break;
          }
        case 'del':
          {
            const delToken = token;
            out += renderer.del(this.parseInline(delToken.tokens, renderer));
            break;
          }
        case 'text':
          {
            const textToken = token;
            out += renderer.text(textToken.text);
            break;
          }
        default:
          {
            const errMsg = 'Token with "' + token.type + '" type was not found.';
            if (this.options.silent) {
              console.error(errMsg);
              return '';
            } else {
              throw new Error(errMsg);
            }
          }
      }
    }
    return out;
  }
}
class _Hooks {
  constructor(options) {
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "options", void 0);
    this.options = options || _defaults;
  }
  /**
   * Process markdown before marked
   */
  preprocess(markdown) {
    return markdown;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(html) {
    return html;
  }
}
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Hooks, "passThroughHooks", new Set(['preprocess', 'postprocess']));
var _parseMarkdown = /*#__PURE__*/new WeakSet();
var _onError = /*#__PURE__*/new WeakSet();
class Marked {
  constructor() {
    _classPrivateMethodInitSpec(this, _onError);
    _classPrivateMethodInitSpec(this, _parseMarkdown);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "defaults", _getDefaults());
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "options", this.setOptions);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "parse", _classPrivateMethodGet(this, _parseMarkdown, _parseMarkdown2).call(this, _Lexer.lex, _Parser.parse));
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "parseInline", _classPrivateMethodGet(this, _parseMarkdown, _parseMarkdown2).call(this, _Lexer.lexInline, _Parser.parseInline));
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "Parser", _Parser);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "Renderer", _Renderer);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "TextRenderer", _TextRenderer);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "Lexer", _Lexer);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "Tokenizer", _Tokenizer);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "Hooks", _Hooks);
    this.use(...arguments);
  }
  /**
   * Run callback for every token
   */
  walkTokens(tokens, callback) {
    let values = [];
    for (const token of tokens) {
      values = values.concat(callback.call(this, token));
      switch (token.type) {
        case 'table':
          {
            const tableToken = token;
            for (const cell of tableToken.header) {
              values = values.concat(this.walkTokens(cell.tokens, callback));
            }
            for (const row of tableToken.rows) {
              for (const cell of row) {
                values = values.concat(this.walkTokens(cell.tokens, callback));
              }
            }
            break;
          }
        case 'list':
          {
            const listToken = token;
            values = values.concat(this.walkTokens(listToken.items, callback));
            break;
          }
        default:
          {
            const genericToken = token;
            if (this.defaults.extensions?.childTokens?.[genericToken.type]) {
              this.defaults.extensions.childTokens[genericToken.type].forEach(childTokens => {
                values = values.concat(this.walkTokens(genericToken[childTokens], callback));
              });
            } else if (genericToken.tokens) {
              values = values.concat(this.walkTokens(genericToken.tokens, callback));
            }
          }
      }
    }
    return values;
  }
  use() {
    const extensions = this.defaults.extensions || {
      renderers: {},
      childTokens: {}
    };
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    args.forEach(pack => {
      // copy options to new object
      const opts = {
        ...pack
      };
      // set async to true if it was set to true before
      opts.async = this.defaults.async || opts.async || false;
      // ==-- Parse "addon" extensions --== //
      if (pack.extensions) {
        pack.extensions.forEach(ext => {
          if (!ext.name) {
            throw new Error('extension name required');
          }
          if ('renderer' in ext) {
            // Renderer extensions
            const prevRenderer = extensions.renderers[ext.name];
            if (prevRenderer) {
              // Replace extension with func to run new extension but fall back if false
              extensions.renderers[ext.name] = function () {
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  args[_key2] = arguments[_key2];
                }
                let ret = ext.renderer.apply(this, args);
                if (ret === false) {
                  ret = prevRenderer.apply(this, args);
                }
                return ret;
              };
            } else {
              extensions.renderers[ext.name] = ext.renderer;
            }
          }
          if ('tokenizer' in ext) {
            // Tokenizer Extensions
            if (!ext.level || ext.level !== 'block' && ext.level !== 'inline') {
              throw new Error("extension level must be 'block' or 'inline'");
            }
            const extLevel = extensions[ext.level];
            if (extLevel) {
              extLevel.unshift(ext.tokenizer);
            } else {
              extensions[ext.level] = [ext.tokenizer];
            }
            if (ext.start) {
              // Function to check for start of token
              if (ext.level === 'block') {
                if (extensions.startBlock) {
                  extensions.startBlock.push(ext.start);
                } else {
                  extensions.startBlock = [ext.start];
                }
              } else if (ext.level === 'inline') {
                if (extensions.startInline) {
                  extensions.startInline.push(ext.start);
                } else {
                  extensions.startInline = [ext.start];
                }
              }
            }
          }
          if ('childTokens' in ext && ext.childTokens) {
            // Child tokens to be visited by walkTokens
            extensions.childTokens[ext.name] = ext.childTokens;
          }
        });
        opts.extensions = extensions;
      }
      // ==-- Parse "overwrite" extensions --== //
      if (pack.renderer) {
        const renderer = this.defaults.renderer || new _Renderer(this.defaults);
        for (const prop in pack.renderer) {
          const rendererFunc = pack.renderer[prop];
          const rendererKey = prop;
          const prevRenderer = renderer[rendererKey];
          // Replace renderer with func to run extension, but fall back if false
          renderer[rendererKey] = function () {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }
            let ret = rendererFunc.apply(renderer, args);
            if (ret === false) {
              ret = prevRenderer.apply(renderer, args);
            }
            return ret || '';
          };
        }
        opts.renderer = renderer;
      }
      if (pack.tokenizer) {
        const tokenizer = this.defaults.tokenizer || new _Tokenizer(this.defaults);
        for (const prop in pack.tokenizer) {
          const tokenizerFunc = pack.tokenizer[prop];
          const tokenizerKey = prop;
          const prevTokenizer = tokenizer[tokenizerKey];
          // Replace tokenizer with func to run extension, but fall back if false
          tokenizer[tokenizerKey] = function () {
            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }
            let ret = tokenizerFunc.apply(tokenizer, args);
            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args);
            }
            return ret;
          };
        }
        opts.tokenizer = tokenizer;
      }
      // ==-- Parse Hooks extensions --== //
      if (pack.hooks) {
        const hooks = this.defaults.hooks || new _Hooks();
        for (const prop in pack.hooks) {
          const hooksFunc = pack.hooks[prop];
          const hooksKey = prop;
          const prevHook = hooks[hooksKey];
          if (_Hooks.passThroughHooks.has(prop)) {
            hooks[hooksKey] = arg => {
              if (this.defaults.async) {
                return Promise.resolve(hooksFunc.call(hooks, arg)).then(ret => {
                  return prevHook.call(hooks, ret);
                });
              }
              const ret = hooksFunc.call(hooks, arg);
              return prevHook.call(hooks, ret);
            };
          } else {
            hooks[hooksKey] = function () {
              for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                args[_key5] = arguments[_key5];
              }
              let ret = hooksFunc.apply(hooks, args);
              if (ret === false) {
                ret = prevHook.apply(hooks, args);
              }
              return ret;
            };
          }
        }
        opts.hooks = hooks;
      }
      // ==-- Parse WalkTokens extensions --== //
      if (pack.walkTokens) {
        const walkTokens = this.defaults.walkTokens;
        const packWalktokens = pack.walkTokens;
        opts.walkTokens = function (token) {
          let values = [];
          values.push(packWalktokens.call(this, token));
          if (walkTokens) {
            values = values.concat(walkTokens.call(this, token));
          }
          return values;
        };
      }
      this.defaults = {
        ...this.defaults,
        ...opts
      };
    });
    return this;
  }
  setOptions(opt) {
    this.defaults = {
      ...this.defaults,
      ...opt
    };
    return this;
  }
  lexer(src, options) {
    return _Lexer.lex(src, options ?? this.defaults);
  }
  parser(tokens, options) {
    return _Parser.parse(tokens, options ?? this.defaults);
  }
}
function _parseMarkdown2(lexer, parser) {
  return (src, options) => {
    const origOpt = {
      ...options
    };
    const opt = {
      ...this.defaults,
      ...origOpt
    };
    // Show warning if an extension set async to true but the parse was called with async: false
    if (this.defaults.async === true && origOpt.async === false) {
      if (!opt.silent) {
        console.warn('marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored.');
      }
      opt.async = true;
    }
    const throwError = _classPrivateMethodGet(this, _onError, _onError2).call(this, !!opt.silent, !!opt.async);
    // throw error in case of non string input
    if (typeof src === 'undefined' || src === null) {
      return throwError(new Error('marked(): input parameter is undefined or null'));
    }
    if (typeof src !== 'string') {
      return throwError(new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected'));
    }
    if (opt.hooks) {
      opt.hooks.options = opt;
    }
    if (opt.async) {
      return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then(src => lexer(src, opt)).then(tokens => opt.walkTokens ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens).then(tokens => parser(tokens, opt)).then(html => opt.hooks ? opt.hooks.postprocess(html) : html).catch(throwError);
    }
    try {
      if (opt.hooks) {
        src = opt.hooks.preprocess(src);
      }
      const tokens = lexer(src, opt);
      if (opt.walkTokens) {
        this.walkTokens(tokens, opt.walkTokens);
      }
      let html = parser(tokens, opt);
      if (opt.hooks) {
        html = opt.hooks.postprocess(html);
      }
      return html;
    } catch (e) {
      return throwError(e);
    }
  };
}
function _onError2(silent, async) {
  return e => {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if (silent) {
      const msg = '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
      if (async) {
        return Promise.resolve(msg);
      }
      return msg;
    }
    if (async) {
      return Promise.reject(e);
    }
    throw e;
  };
}
const markedInstance = new Marked();
function marked(src, opt) {
  return markedInstance.parse(src, opt);
}
/**
 * Sets the default options.
 *
 * @param options Hash of options
 */
marked.options = marked.setOptions = function (options) {
  markedInstance.setOptions(options);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
/**
 * Gets the original marked default options.
 */
marked.getDefaults = _getDefaults;
marked.defaults = _defaults;
/**
 * Use Extension
 */
marked.use = function () {
  markedInstance.use(...arguments);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
/**
 * Run callback for every token
 */
marked.walkTokens = function (tokens, callback) {
  return markedInstance.walkTokens(tokens, callback);
};
/**
 * Compiles markdown to HTML without enclosing `p` tag.
 *
 * @param src String of markdown source to be compiled
 * @param options Hash of options
 * @return String of compiled HTML
 */
marked.parseInline = markedInstance.parseInline;
/**
 * Expose
 */
marked.Parser = _Parser;
marked.parser = _Parser.parse;
marked.Renderer = _Renderer;
marked.TextRenderer = _TextRenderer;
marked.Lexer = _Lexer;
marked.lexer = _Lexer.lex;
marked.Tokenizer = _Tokenizer;
marked.Hooks = _Hooks;
marked.parse = marked;
const options = marked.options;
const setOptions = marked.setOptions;
const use = marked.use;
const walkTokens = marked.walkTokens;
const parseInline = marked.parseInline;
const parse = marked;
const parser = _Parser.parse;
const lexer = _Lexer.lex;


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toArray.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toArray.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _toArray(arr) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : String(i);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/js-cookie/dist/js.cookie.mjs":
/*!***************************************************!*\
  !*** ./node_modules/js-cookie/dist/js.cookie.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ api)
/* harmony export */ });
/*! js-cookie v3.0.5 | MIT */
/* eslint-disable no-var */
function assign (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target
}
/* eslint-enable no-var */

/* eslint-disable no-var */
var defaultConverter = {
  read: function (value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
  },
  write: function (value) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    )
  }
};
/* eslint-enable no-var */

/* eslint-disable no-var */

function init (converter, defaultAttributes) {
  function set (name, value, attributes) {
    if (typeof document === 'undefined') {
      return
    }

    attributes = assign({}, defaultAttributes, attributes);

    if (typeof attributes.expires === 'number') {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }

    name = encodeURIComponent(name)
      .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
      .replace(/[()]/g, escape);

    var stringifiedAttributes = '';
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue
      }

      stringifiedAttributes += '; ' + attributeName;

      if (attributes[attributeName] === true) {
        continue
      }

      // Considers RFC 6265 section 5.2:
      // ...
      // 3.  If the remaining unparsed-attributes contains a %x3B (";")
      //     character:
      // Consume the characters of the unparsed-attributes up to,
      // not including, the first %x3B (";") character.
      // ...
      stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
    }

    return (document.cookie =
      name + '=' + converter.write(value, name) + stringifiedAttributes)
  }

  function get (name) {
    if (typeof document === 'undefined' || (arguments.length && !name)) {
      return
    }

    // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all.
    var cookies = document.cookie ? document.cookie.split('; ') : [];
    var jar = {};
    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split('=');
      var value = parts.slice(1).join('=');

      try {
        var found = decodeURIComponent(parts[0]);
        jar[found] = converter.read(value, found);

        if (name === found) {
          break
        }
      } catch (e) {}
    }

    return name ? jar[name] : jar
  }

  return Object.create(
    {
      set,
      get,
      remove: function (name, attributes) {
        set(
          name,
          '',
          assign({}, attributes, {
            expires: -1
          })
        );
      },
      withAttributes: function (attributes) {
        return init(this.converter, assign({}, this.attributes, attributes))
      },
      withConverter: function (converter) {
        return init(assign({}, this.converter, converter), this.attributes)
      }
    },
    {
      attributes: { value: Object.freeze(defaultAttributes) },
      converter: { value: Object.freeze(converter) }
    }
  )
}

var api = init(defaultConverter, { path: '/' });
/* eslint-enable no-var */




/***/ }),

/***/ "./node_modules/preact/dist/preact.mjs":
/*!*********************************************!*\
  !*** ./node_modules/preact/dist/preact.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ Component),
/* harmony export */   cloneElement: () => (/* binding */ cloneElement),
/* harmony export */   createElement: () => (/* binding */ h),
/* harmony export */   createRef: () => (/* binding */ createRef),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   h: () => (/* binding */ h),
/* harmony export */   options: () => (/* binding */ options),
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   rerender: () => (/* binding */ rerender)
/* harmony export */ });
var VNode = function VNode() {};

var options = {};

var stack = [];

var EMPTY_CHILDREN = [];

function h(nodeName, attributes) {
	var children = EMPTY_CHILDREN,
	    lastSimple,
	    child,
	    simple,
	    i;
	for (i = arguments.length; i-- > 2;) {
		stack.push(arguments[i]);
	}
	if (attributes && attributes.children != null) {
		if (!stack.length) stack.push(attributes.children);
		delete attributes.children;
	}
	while (stack.length) {
		if ((child = stack.pop()) && child.pop !== undefined) {
			for (i = child.length; i--;) {
				stack.push(child[i]);
			}
		} else {
			if (typeof child === 'boolean') child = null;

			if (simple = typeof nodeName !== 'function') {
				if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
			}

			if (simple && lastSimple) {
				children[children.length - 1] += child;
			} else if (children === EMPTY_CHILDREN) {
				children = [child];
			} else {
				children.push(child);
			}

			lastSimple = simple;
		}
	}

	var p = new VNode();
	p.nodeName = nodeName;
	p.children = children;
	p.attributes = attributes == null ? undefined : attributes;
	p.key = attributes == null ? undefined : attributes.key;

	if (options.vnode !== undefined) options.vnode(p);

	return p;
}

function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }return obj;
}

function applyRef(ref, value) {
  if (ref) {
    if (typeof ref == 'function') ref(value);else ref.current = value;
  }
}

var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

function cloneElement(vnode, props) {
  return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
}

var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

var items = [];

function enqueueRender(component) {
	if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
		(options.debounceRendering || defer)(rerender);
	}
}

function rerender() {
	var p;
	while (p = items.pop()) {
		if (p._dirty) renderComponent(p);
	}
}

function isSameNodeType(node, vnode, hydrating) {
	if (typeof vnode === 'string' || typeof vnode === 'number') {
		return node.splitText !== undefined;
	}
	if (typeof vnode.nodeName === 'string') {
		return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
	}
	return hydrating || node._componentConstructor === vnode.nodeName;
}

function isNamedNode(node, nodeName) {
	return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
}

function getNodeProps(vnode) {
	var props = extend({}, vnode.attributes);
	props.children = vnode.children;

	var defaultProps = vnode.nodeName.defaultProps;
	if (defaultProps !== undefined) {
		for (var i in defaultProps) {
			if (props[i] === undefined) {
				props[i] = defaultProps[i];
			}
		}
	}

	return props;
}

function createNode(nodeName, isSvg) {
	var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
	node.normalizedNodeName = nodeName;
	return node;
}

function removeNode(node) {
	var parentNode = node.parentNode;
	if (parentNode) parentNode.removeChild(node);
}

function setAccessor(node, name, old, value, isSvg) {
	if (name === 'className') name = 'class';

	if (name === 'key') {} else if (name === 'ref') {
		applyRef(old, null);
		applyRef(value, node);
	} else if (name === 'class' && !isSvg) {
		node.className = value || '';
	} else if (name === 'style') {
		if (!value || typeof value === 'string' || typeof old === 'string') {
			node.style.cssText = value || '';
		}
		if (value && typeof value === 'object') {
			if (typeof old !== 'string') {
				for (var i in old) {
					if (!(i in value)) node.style[i] = '';
				}
			}
			for (var i in value) {
				node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
			}
		}
	} else if (name === 'dangerouslySetInnerHTML') {
		if (value) node.innerHTML = value.__html || '';
	} else if (name[0] == 'o' && name[1] == 'n') {
		var useCapture = name !== (name = name.replace(/Capture$/, ''));
		name = name.toLowerCase().substring(2);
		if (value) {
			if (!old) node.addEventListener(name, eventProxy, useCapture);
		} else {
			node.removeEventListener(name, eventProxy, useCapture);
		}
		(node._listeners || (node._listeners = {}))[name] = value;
	} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
		try {
			node[name] = value == null ? '' : value;
		} catch (e) {}
		if ((value == null || value === false) && name != 'spellcheck') node.removeAttribute(name);
	} else {
		var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));

		if (value == null || value === false) {
			if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
		} else if (typeof value !== 'function') {
			if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
		}
	}
}

function eventProxy(e) {
	return this._listeners[e.type](options.event && options.event(e) || e);
}

var mounts = [];

var diffLevel = 0;

var isSvgMode = false;

var hydrating = false;

function flushMounts() {
	var c;
	while (c = mounts.shift()) {
		if (options.afterMount) options.afterMount(c);
		if (c.componentDidMount) c.componentDidMount();
	}
}

function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	if (!diffLevel++) {
		isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

		hydrating = dom != null && !('__preactattr_' in dom);
	}

	var ret = idiff(dom, vnode, context, mountAll, componentRoot);

	if (parent && ret.parentNode !== parent) parent.appendChild(ret);

	if (! --diffLevel) {
		hydrating = false;

		if (!componentRoot) flushMounts();
	}

	return ret;
}

function idiff(dom, vnode, context, mountAll, componentRoot) {
	var out = dom,
	    prevSvgMode = isSvgMode;

	if (vnode == null || typeof vnode === 'boolean') vnode = '';

	if (typeof vnode === 'string' || typeof vnode === 'number') {
		if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
			if (dom.nodeValue != vnode) {
				dom.nodeValue = vnode;
			}
		} else {
			out = document.createTextNode(vnode);
			if (dom) {
				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
				recollectNodeTree(dom, true);
			}
		}

		out['__preactattr_'] = true;

		return out;
	}

	var vnodeName = vnode.nodeName;
	if (typeof vnodeName === 'function') {
		return buildComponentFromVNode(dom, vnode, context, mountAll);
	}

	isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

	vnodeName = String(vnodeName);
	if (!dom || !isNamedNode(dom, vnodeName)) {
		out = createNode(vnodeName, isSvgMode);

		if (dom) {
			while (dom.firstChild) {
				out.appendChild(dom.firstChild);
			}
			if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

			recollectNodeTree(dom, true);
		}
	}

	var fc = out.firstChild,
	    props = out['__preactattr_'],
	    vchildren = vnode.children;

	if (props == null) {
		props = out['__preactattr_'] = {};
		for (var a = out.attributes, i = a.length; i--;) {
			props[a[i].name] = a[i].value;
		}
	}

	if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
		if (fc.nodeValue != vchildren[0]) {
			fc.nodeValue = vchildren[0];
		}
	} else if (vchildren && vchildren.length || fc != null) {
			innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
		}

	diffAttributes(out, vnode.attributes, props);

	isSvgMode = prevSvgMode;

	return out;
}

function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
	var originalChildren = dom.childNodes,
	    children = [],
	    keyed = {},
	    keyedLen = 0,
	    min = 0,
	    len = originalChildren.length,
	    childrenLen = 0,
	    vlen = vchildren ? vchildren.length : 0,
	    j,
	    c,
	    f,
	    vchild,
	    child;

	if (len !== 0) {
		for (var i = 0; i < len; i++) {
			var _child = originalChildren[i],
			    props = _child['__preactattr_'],
			    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
			if (key != null) {
				keyedLen++;
				keyed[key] = _child;
			} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
				children[childrenLen++] = _child;
			}
		}
	}

	if (vlen !== 0) {
		for (var i = 0; i < vlen; i++) {
			vchild = vchildren[i];
			child = null;

			var key = vchild.key;
			if (key != null) {
				if (keyedLen && keyed[key] !== undefined) {
					child = keyed[key];
					keyed[key] = undefined;
					keyedLen--;
				}
			} else if (min < childrenLen) {
					for (j = min; j < childrenLen; j++) {
						if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
							child = c;
							children[j] = undefined;
							if (j === childrenLen - 1) childrenLen--;
							if (j === min) min++;
							break;
						}
					}
				}

			child = idiff(child, vchild, context, mountAll);

			f = originalChildren[i];
			if (child && child !== dom && child !== f) {
				if (f == null) {
					dom.appendChild(child);
				} else if (child === f.nextSibling) {
					removeNode(f);
				} else {
					dom.insertBefore(child, f);
				}
			}
		}
	}

	if (keyedLen) {
		for (var i in keyed) {
			if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
		}
	}

	while (min <= childrenLen) {
		if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
	}
}

function recollectNodeTree(node, unmountOnly) {
	var component = node._component;
	if (component) {
		unmountComponent(component);
	} else {
		if (node['__preactattr_'] != null) applyRef(node['__preactattr_'].ref, null);

		if (unmountOnly === false || node['__preactattr_'] == null) {
			removeNode(node);
		}

		removeChildren(node);
	}
}

function removeChildren(node) {
	node = node.lastChild;
	while (node) {
		var next = node.previousSibling;
		recollectNodeTree(node, true);
		node = next;
	}
}

function diffAttributes(dom, attrs, old) {
	var name;

	for (name in old) {
		if (!(attrs && attrs[name] != null) && old[name] != null) {
			setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
		}
	}

	for (name in attrs) {
		if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
			setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
		}
	}
}

var recyclerComponents = [];

function createComponent(Ctor, props, context) {
	var inst,
	    i = recyclerComponents.length;

	if (Ctor.prototype && Ctor.prototype.render) {
		inst = new Ctor(props, context);
		Component.call(inst, props, context);
	} else {
		inst = new Component(props, context);
		inst.constructor = Ctor;
		inst.render = doRender;
	}

	while (i--) {
		if (recyclerComponents[i].constructor === Ctor) {
			inst.nextBase = recyclerComponents[i].nextBase;
			recyclerComponents.splice(i, 1);
			return inst;
		}
	}

	return inst;
}

function doRender(props, state, context) {
	return this.constructor(props, context);
}

function setComponentProps(component, props, renderMode, context, mountAll) {
	if (component._disable) return;
	component._disable = true;

	component.__ref = props.ref;
	component.__key = props.key;
	delete props.ref;
	delete props.key;

	if (typeof component.constructor.getDerivedStateFromProps === 'undefined') {
		if (!component.base || mountAll) {
			if (component.componentWillMount) component.componentWillMount();
		} else if (component.componentWillReceiveProps) {
			component.componentWillReceiveProps(props, context);
		}
	}

	if (context && context !== component.context) {
		if (!component.prevContext) component.prevContext = component.context;
		component.context = context;
	}

	if (!component.prevProps) component.prevProps = component.props;
	component.props = props;

	component._disable = false;

	if (renderMode !== 0) {
		if (renderMode === 1 || options.syncComponentUpdates !== false || !component.base) {
			renderComponent(component, 1, mountAll);
		} else {
			enqueueRender(component);
		}
	}

	applyRef(component.__ref, component);
}

function renderComponent(component, renderMode, mountAll, isChild) {
	if (component._disable) return;

	var props = component.props,
	    state = component.state,
	    context = component.context,
	    previousProps = component.prevProps || props,
	    previousState = component.prevState || state,
	    previousContext = component.prevContext || context,
	    isUpdate = component.base,
	    nextBase = component.nextBase,
	    initialBase = isUpdate || nextBase,
	    initialChildComponent = component._component,
	    skip = false,
	    snapshot = previousContext,
	    rendered,
	    inst,
	    cbase;

	if (component.constructor.getDerivedStateFromProps) {
		state = extend(extend({}, state), component.constructor.getDerivedStateFromProps(props, state));
		component.state = state;
	}

	if (isUpdate) {
		component.props = previousProps;
		component.state = previousState;
		component.context = previousContext;
		if (renderMode !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
			skip = true;
		} else if (component.componentWillUpdate) {
			component.componentWillUpdate(props, state, context);
		}
		component.props = props;
		component.state = state;
		component.context = context;
	}

	component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	component._dirty = false;

	if (!skip) {
		rendered = component.render(props, state, context);

		if (component.getChildContext) {
			context = extend(extend({}, context), component.getChildContext());
		}

		if (isUpdate && component.getSnapshotBeforeUpdate) {
			snapshot = component.getSnapshotBeforeUpdate(previousProps, previousState);
		}

		var childComponent = rendered && rendered.nodeName,
		    toUnmount,
		    base;

		if (typeof childComponent === 'function') {

			var childProps = getNodeProps(rendered);
			inst = initialChildComponent;

			if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
				setComponentProps(inst, childProps, 1, context, false);
			} else {
				toUnmount = inst;

				component._component = inst = createComponent(childComponent, childProps, context);
				inst.nextBase = inst.nextBase || nextBase;
				inst._parentComponent = component;
				setComponentProps(inst, childProps, 0, context, false);
				renderComponent(inst, 1, mountAll, true);
			}

			base = inst.base;
		} else {
			cbase = initialBase;

			toUnmount = initialChildComponent;
			if (toUnmount) {
				cbase = component._component = null;
			}

			if (initialBase || renderMode === 1) {
				if (cbase) cbase._component = null;
				base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
			}
		}

		if (initialBase && base !== initialBase && inst !== initialChildComponent) {
			var baseParent = initialBase.parentNode;
			if (baseParent && base !== baseParent) {
				baseParent.replaceChild(base, initialBase);

				if (!toUnmount) {
					initialBase._component = null;
					recollectNodeTree(initialBase, false);
				}
			}
		}

		if (toUnmount) {
			unmountComponent(toUnmount);
		}

		component.base = base;
		if (base && !isChild) {
			var componentRef = component,
			    t = component;
			while (t = t._parentComponent) {
				(componentRef = t).base = base;
			}
			base._component = componentRef;
			base._componentConstructor = componentRef.constructor;
		}
	}

	if (!isUpdate || mountAll) {
		mounts.push(component);
	} else if (!skip) {

		if (component.componentDidUpdate) {
			component.componentDidUpdate(previousProps, previousState, snapshot);
		}
		if (options.afterUpdate) options.afterUpdate(component);
	}

	while (component._renderCallbacks.length) {
		component._renderCallbacks.pop().call(component);
	}if (!diffLevel && !isChild) flushMounts();
}

function buildComponentFromVNode(dom, vnode, context, mountAll) {
	var c = dom && dom._component,
	    originalComponent = c,
	    oldDom = dom,
	    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
	    isOwner = isDirectOwner,
	    props = getNodeProps(vnode);
	while (c && !isOwner && (c = c._parentComponent)) {
		isOwner = c.constructor === vnode.nodeName;
	}

	if (c && isOwner && (!mountAll || c._component)) {
		setComponentProps(c, props, 3, context, mountAll);
		dom = c.base;
	} else {
		if (originalComponent && !isDirectOwner) {
			unmountComponent(originalComponent);
			dom = oldDom = null;
		}

		c = createComponent(vnode.nodeName, props, context);
		if (dom && !c.nextBase) {
			c.nextBase = dom;

			oldDom = null;
		}
		setComponentProps(c, props, 1, context, mountAll);
		dom = c.base;

		if (oldDom && dom !== oldDom) {
			oldDom._component = null;
			recollectNodeTree(oldDom, false);
		}
	}

	return dom;
}

function unmountComponent(component) {
	if (options.beforeUnmount) options.beforeUnmount(component);

	var base = component.base;

	component._disable = true;

	if (component.componentWillUnmount) component.componentWillUnmount();

	component.base = null;

	var inner = component._component;
	if (inner) {
		unmountComponent(inner);
	} else if (base) {
		if (base['__preactattr_'] != null) applyRef(base['__preactattr_'].ref, null);

		component.nextBase = base;

		removeNode(base);
		recyclerComponents.push(component);

		removeChildren(base);
	}

	applyRef(component.__ref, null);
}

function Component(props, context) {
	this._dirty = true;

	this.context = context;

	this.props = props;

	this.state = this.state || {};

	this._renderCallbacks = [];
}

extend(Component.prototype, {
	setState: function setState(state, callback) {
		if (!this.prevState) this.prevState = this.state;
		this.state = extend(extend({}, this.state), typeof state === 'function' ? state(this.state, this.props) : state);
		if (callback) this._renderCallbacks.push(callback);
		enqueueRender(this);
	},
	forceUpdate: function forceUpdate(callback) {
		if (callback) this._renderCallbacks.push(callback);
		renderComponent(this, 2);
	},
	render: function render() {}
});

function render(vnode, parent, merge) {
  return diff(merge, vnode, {}, false, parent, false);
}

function createRef() {
	return {};
}

var preact = {
	h: h,
	createElement: h,
	cloneElement: cloneElement,
	createRef: createRef,
	Component: Component,
	render: render,
	rerender: rerender,
	options: options
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (preact);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + chunkId + ".bolt.js?v=" + {"cookies":"17a82e1aa2b5b25ba9ce","cookiesPreference":"f9857d3ad0571ca0fbb7","externalLinkModal":"18a3a1a3944d21a7a08e","userFeedbackModal":"27706a3a73033097e1c3","trailerOverlay":"1bb1dbca063b24401f6e","pressKitGalleryOverlay":"b13f90b4ee1b37f03a96","landingAudio":"14b790422c85126b5166","signUpForm":"1beddb122e9e1eb1341a","calendarRemind":"91631128fe33582853b5","debugInfo":"36740e71b2ec9e2a03d3","customScroll":"f5620ac6dab89c7541c0"}[chunkId] + "";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === "cookies") return "css/cookies.bolt.css?v=17a82e1aa2b5b25ba9ce";
/******/ 			if (chunkId === "cookiesPreference") return "css/cookiesPreference.bolt.css?v=f9857d3ad0571ca0fbb7";
/******/ 			if (chunkId === "externalLinkModal") return "css/externalLinkModal.bolt.css?v=18a3a1a3944d21a7a08e";
/******/ 			if (chunkId === "userFeedbackModal") return "css/userFeedbackModal.bolt.css?v=27706a3a73033097e1c3";
/******/ 			if (chunkId === "trailerOverlay") return "css/trailerOverlay.bolt.css?v=1bb1dbca063b24401f6e";
/******/ 			if (chunkId === "pressKitGalleryOverlay") return "css/pressKitGalleryOverlay.bolt.css?v=b13f90b4ee1b37f03a96";
/******/ 			if (chunkId === "landingAudio") return "css/landingAudio.bolt.css?v=14b790422c85126b5166";
/******/ 			if (chunkId === "signUpForm") return "css/signUpForm.bolt.css?v=1beddb122e9e1eb1341a";
/******/ 			if (chunkId === "calendarRemind") return "css/calendarRemind.bolt.css?v=91631128fe33582853b5";
/******/ 			if (chunkId === "debugInfo") return "css/debugInfo.bolt.css?v=36740e71b2ec9e2a03d3";
/******/ 			if (chunkId === "customScroll") return "css/customScroll.bolt.css?v=f5620ac6dab89c7541c0";
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "thundr:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && event.type;
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + errorType + ": " + realHref + ")");
/******/ 					err.name = "ChunkLoadError";
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			"js/bolt": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 			var cssChunks = {"cookies":1,"cookiesPreference":1,"externalLinkModal":1,"userFeedbackModal":1,"trailerOverlay":1,"pressKitGalleryOverlay":1,"landingAudio":1,"signUpForm":1,"calendarRemind":1,"debugInfo":1,"customScroll":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, (e) => {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"js/bolt": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = (typeof self !== 'undefined' ? self : this)["webpackChunkthundr"] = (typeof self !== 'undefined' ? self : this)["webpackChunkthundr"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************************!*\
  !*** ./static/src/base/bolt/bolt.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var base_bolt_setRelativeRoot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! base/bolt/setRelativeRoot */ "./static/src/base/bolt/setRelativeRoot.js");
/* harmony import */ var base_bolt_setRelativeRoot__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(base_bolt_setRelativeRoot__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var base_styles_reset_sss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! base-styles/reset.sss */ "./static/src/base-styles/reset.sss");
/* harmony import */ var base_styles_boltGlobal_sss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! base-styles/boltGlobal.sss */ "./static/src/base-styles/boltGlobal.sss");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var utils_bolt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/bolt */ "./static/src/utils/bolt/index.js");
/* harmony import */ var base_bolt_boltApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! base/bolt/boltApp */ "./static/src/base/bolt/boltApp.js");
/* harmony import */ var utils_historyPushEvent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/historyPushEvent */ "./static/src/utils/historyPushEvent.js");
/* harmony import */ var utils_historyPushEvent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(utils_historyPushEvent__WEBPACK_IMPORTED_MODULE_6__);







let initialStore = (0,utils_bolt__WEBPACK_IMPORTED_MODULE_4__.buildClientStoreData)(window.__INITIAL_STATE__);
let elem = document.getElementById('app') || document.body;
(0,preact__WEBPACK_IMPORTED_MODULE_3__.render)((0,preact__WEBPACK_IMPORTED_MODULE_3__.h)(base_bolt_boltApp__WEBPACK_IMPORTED_MODULE_5__["default"], {
  initialStore: initialStore
}), elem, elem.firstChild);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bolt.js.map