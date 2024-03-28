"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkthundr"] = (typeof self !== 'undefined' ? self : this)["webpackChunkthundr"] || []).push([["cookies"],{

/***/ "./static/src/components/bolt/cookies/cookies.js":
/*!*******************************************************!*\
  !*** ./static/src/components/bolt/cookies/cookies.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cookies)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toArray */ "./node_modules/@babel/runtime/helpers/esm/toArray.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var utils_pure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/pure */ "./static/src/utils/pure.js");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var store_bolt_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/bolt/cookies */ "./static/src/store/bolt/cookies.js");
/* harmony import */ var components_bolt_cookies_cookies_sss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/bolt/cookies/cookies.sss */ "./static/src/components/bolt/cookies/cookies.sss");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var components_core_html_html_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/core/html/html.js */ "./static/src/components/core/html/html.js");

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







let Cookies = _decorate([utils_pure__WEBPACK_IMPORTED_MODULE_2__["default"]], function (_initialize, _Component) {
  class Cookies extends _Component {
    constructor(props) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      super(props, ...args);
      _initialize(this);
      this.state = {
        locked: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(props, 'appData.options.cookiesModal.lockout', false)
        // display: true
      };
      this.acceptAll = this.acceptAll.bind(this);
      this.displaySettings = this.displaySettings.bind(this);
      this.stickyHeader = this.stickyHeader.bind(this);
    }

    // LIFECYCLE METHODS

    // EVENT HANDLING
  }
  return {
    F: Cookies,
    d: [{
      kind: "method",
      key: "componentDidMount",
      value: function componentDidMount() {
        if (typeof document === 'undefined') {
          return;
        }
        if (this.state.locked) {
          (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.addClass)(document.body, 'cookieScrollLock');
        }
        if (window.history && 'scrollRestoration' in history) {
          history.scrollRestoration = 'manual';
        }
        // The cookie component should not be in charge of that on mount - otherwise will lead to inconsistencies if/when it is not present
        // window.scroll(0, 0);

        const fixedTop = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'appData.options.cookiesModal.position', '') === 'fixedTop';
        if (fixedTop) {
          this.header = document.getElementById('header') || {};
          this.headerOffset = this.header.offsetTop;
          window.addEventListener('scroll', this.stickyHeader);
        }
        if (window.ResizeObserver) {
          let cookieHeight;
          this.resizeObserver = new ResizeObserver(entries => {
            cookieHeight = entries[0].contentRect.height;
            store_store__WEBPACK_IMPORTED_MODULE_3__["default"].emit('SET_COOKIE_BAR_HEIGHT', cookieHeight);
          });
          this.resizeObserver.observe(this.$cookie);
        } else {
          store_store__WEBPACK_IMPORTED_MODULE_3__["default"].emit('SET_COOKIE_BAR_HEIGHT', this.$cookie.offsetHeight);
        }
      }
    }, {
      kind: "method",
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener('scroll', this.stickyHeader);
        if (this.resizeObserver) {
          this.resizeObserver.disconnect();
        }
      }
    }, {
      kind: "method",
      key: "stickyHeader",
      value: function stickyHeader() {
        // const isDisplaying =  accessNested(this.state, 'display', true);
        // if (isDisplaying) {
        // 	if (window.pageYOffset >= this.headerOffset) {
        // 		this.header.style.position = 'fixed';
        // 		this.header.style.top = '0px';
        // 	} else {
        // 		this.header.style.position = 'fixed';
        // 		this.header.style.top = `${this.$cookie.offsetHeight - window.pageYOffset}px`;
        // 	}
        // } else {
        // 	this.header.style.position = 'fixed';
        // 	this.header.style.top = '0px';
        // 	window.removeEventListener('scroll', this.stickyHeader);
        // }
      }
    }, {
      kind: "method",
      key: "acceptAll",
      value: function acceptAll() {
        if (this.props.onAccept) {
          this.props.onAccept();
        }
        if (typeof document !== 'undefined') {
          (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.removeClass)(document.body, 'cookieScrollLock');
        }
        // this.setState({ display: !this.state.display });

        store_store__WEBPACK_IMPORTED_MODULE_3__["default"].emit('ACCEPT_COOKIES', this.props.categories);
      }
    }, {
      kind: "method",
      key: "displaySettings",
      value: function displaySettings() {
        store_store__WEBPACK_IMPORTED_MODULE_3__["default"].emit('COOKIE_PREFERENCES_OPEN');
      }
    }, {
      kind: "method",
      key: "render",
      value: function render(props) {
        const {
          locked
        } = this.state;
        const {
          options = {},
          copy = {}
        } = props.appData || {};
        const {
          cookiesModal = {}
        } = options;
        const {
          legalCopy,
          position
        } = cookiesModal;
        const stickyTop = position === 'stickyTop';
        const stickyBottom = position === 'stickyBottom';
        const fixedTop = position === 'fixedTop';
        const float = position === 'float';
        const href = cookiesModal.link || (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(props, 'appData.urls.cookieTextLink');
        const fontStyles = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(props, 'appData.styling.fontVariables');
        return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
          class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_cookies_cookies_sss__WEBPACK_IMPORTED_MODULE_5__["default"].cookiesContainer, props.hidden && components_bolt_cookies_cookies_sss__WEBPACK_IMPORTED_MODULE_5__["default"].hidden),
          ref: ref => this.$cookie = ref
        }, locked && (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
          class: components_bolt_cookies_cookies_sss__WEBPACK_IMPORTED_MODULE_5__["default"].lockout
        }), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
          class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)({
            s: components_bolt_cookies_cookies_sss__WEBPACK_IMPORTED_MODULE_5__["default"],
            container: true,
            top: stickyTop,
            float,
            fixedTop,
            bottom: stickyBottom,
            display: this.state.display
          }),
          key: "cookie",
          "data-section": "cookies"
        }, (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
          class: components_bolt_cookies_cookies_sss__WEBPACK_IMPORTED_MODULE_5__["default"].spacer
        }, (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
          class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_cookies_cookies_sss__WEBPACK_IMPORTED_MODULE_5__["default"].text, fontStyles.cookieBannerCopy)
        }, legalCopy ? (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(components_core_html_html_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
          tag: "p",
          class: components_bolt_cookies_cookies_sss__WEBPACK_IMPORTED_MODULE_5__["default"].questionText,
          content: legalCopy,
          markdown: true
        }) : (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("p", null, (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(components_core_html_html_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
          tag: "span",
          markdown: true
        }, copy.baseCopy.$COOKIE_TEXT_START), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("span", null, " "), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("a", {
          href: href,
          target: "_blank",
          class: fontStyles.cookiePolicyLink,
          onClick: e => {
            const pageId = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(props, `appData.pages.${href}`, null);
            if (pageId) {
              // Store.emit('COOKIE_PREFERENCES_CLOSE');
              // Store.emit('COOKIE_BANNER_CLOSE');
              store_store__WEBPACK_IMPORTED_MODULE_3__["default"].emit('CLOSE_AND_NAVIGATE', href, e);
            }
          }
        }, copy.baseCopy.$COOKIE_LINK_COPY), copy.baseCopy.$COOKIE_TEXT_END)), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
          class: components_bolt_cookies_cookies_sss__WEBPACK_IMPORTED_MODULE_5__["default"].buttonWrapper
        }, (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
          class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_cookies_cookies_sss__WEBPACK_IMPORTED_MODULE_5__["default"].accept, components_bolt_cookies_cookies_sss__WEBPACK_IMPORTED_MODULE_5__["default"].button, fontStyles.cookieAcceptBtn),
          onClick: this.acceptAll
        }, copy.baseCopy.$ACCEPT_COOKIES), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
          class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_cookies_cookies_sss__WEBPACK_IMPORTED_MODULE_5__["default"].settings, components_bolt_cookies_cookies_sss__WEBPACK_IMPORTED_MODULE_5__["default"].button, fontStyles.cookieManageBtn),
          onClick: this.displaySettings
        }, copy.baseCopy.$COOKIE_SETTINGS)))));
      }
    }]
  };
}, preact__WEBPACK_IMPORTED_MODULE_1__.Component);


/***/ }),

/***/ "./static/src/components/bolt/cookies/cookies.sss":
/*!********************************************************!*\
  !*** ./static/src/components/bolt/cookies/cookies.sss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"cookies__container__tjb6A","top":"cookies__top__rrVG1","bottom":"cookies__bottom__IgtCK","fixedTop":"cookies__fixedTop__jvtEH","float":"cookies__float__iUfKj","text":"cookies__text__Pso0z","hidden":"cookies__hidden__dYEIU","cookiesContainer":"cookies__cookiesContainer__aSBt5","buttonWrapper":"cookies__buttonWrapper__nzpTu","lockout":"cookies__lockout__euX1X","spacer":"cookies__spacer__JjdIz","button":"cookies__button__xcRy6","accept":"cookies__accept__k17f1","settings":"cookies__settings__IKCdL"});

/***/ })

}]);
//# sourceMappingURL=cookies.bolt.js.map?v=17a82e1aa2b5b25ba9ce