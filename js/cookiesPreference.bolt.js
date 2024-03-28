"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkthundr"] = (typeof self !== 'undefined' ? self : this)["webpackChunkthundr"] || []).push([["cookiesPreference"],{

/***/ "./static/src/components/bolt/cookiesPreference/cookiesPreference.js":
/*!***************************************************************************!*\
  !*** ./static/src/components/bolt/cookiesPreference/cookiesPreference.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CookiesPreference)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var store_bolt_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/bolt/cookies */ "./static/src/store/bolt/cookies.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var components_bolt_toggle_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/bolt/toggle/toggle */ "./static/src/components/bolt/toggle/toggle.js");
/* harmony import */ var components_core_html_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/core/html/html */ "./static/src/components/core/html/html.js");
/* harmony import */ var components_bolt_cookiesPreference_cookiesPreference_sss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/bolt/cookiesPreference/cookiesPreference.sss */ "./static/src/components/bolt/cookiesPreference/cookiesPreference.sss");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var utils_gdpr_categories__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/gdpr/categories */ "./static/src/utils/gdpr/categories.js");









const POWSTER_COOKIE = 'pow-cookie-cats-';
const copyAlt = {
  STRICTLY_NECESSARY: 'NECESSARY'
};
class CookiesPreference extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      allowAll: false,
      STRICTLY_NECESSARY: true,
      PERFORMANCE: false,
      FUNCTIONAL: false,
      TARGETING: false,
      SOCIAL: false
    };
    this.toggleAllowAll = this.toggleAllowAll.bind(this);
    this.saveSettings = this.saveSettings.bind(this);
    this.setCategories = this.setCategories.bind(this);
  }
  componentDidMount() {
    this.setCategories();
    store_store__WEBPACK_IMPORTED_MODULE_3__["default"].on('SET_COOKIES', this.setCategories);
  }
  componentWillUnmount() {
    store_store__WEBPACK_IMPORTED_MODULE_3__["default"].off('SET_COOKIES', this.setCategories);
  }
  setCategories(allowedCats) {
    if (!allowedCats) {
      const appId = (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.accessNested)(store_store__WEBPACK_IMPORTED_MODULE_3__["default"].get(), 'appData.meta.id', '');
      let cookieCategories;
      try {
        cookieCategories = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"].get(POWSTER_COOKIE + appId));
      } catch (err) {}
      this.allowedCategories = cookieCategories || utils_gdpr_categories__WEBPACK_IMPORTED_MODULE_8__.get() || [];
    } else {
      this.allowedCategories = allowedCats;
    }
    this.allowedCategories.forEach(cat => {
      let newState = {};
      newState[cat] = true;
      this.setState(newState);
    });
    if (!this.props.categories.some(cat => !this.state[cat])) {
      this.setState({
        allowAll: true
      });
    }
  }
  toggleAllowAll() {
    let newState = !this.state.allowAll;
    this.setState({
      allowAll: newState,
      PERFORMANCE: newState,
      FUNCTIONAL: newState,
      TARGETING: newState,
      SOCIAL: newState
    });
  }
  toggle(prop) {
    let newState = !this.state[prop];
    let allowAll = newState && this.props.categories.every(cat => cat === prop || this.state[cat]);
    this.setState({
      allowAll,
      [prop]: newState
    });
  }
  saveSettings() {
    store_store__WEBPACK_IMPORTED_MODULE_3__["default"].emit('COOKIE_PREFERENCES_CLOSE');
    store_store__WEBPACK_IMPORTED_MODULE_3__["default"].emit('COOKIE_BANNER_CLOSE');
    const getCategories = Object.keys(this.state).filter(k => k != 'allowAll');
    const allowedCategories = getCategories.filter(c => {
      return this.state[c] && this.props.categories.indexOf(c) > -1;
    });

    // If some categories get disabled, it means some third-party pixels might need to be unloaded
    // We don't really have a way to do that, so we refresh the page
    // Not great UX, but it's the best we can do
    const needsReload = this.allowedCategories.some(oldCat => !this.state[oldCat]);
    store_store__WEBPACK_IMPORTED_MODULE_3__["default"].emit('ACCEPT_COOKIES', this.state.allowAll ? this.props.categories : allowedCategories);
    if (needsReload) {
      // Do NOT delete pow-cookie-cats
      // It should be considered a NECESSARY-level cookie, so not be removed
      //  (otherwise we'll reset to the default cookie categories, which might not be what the user wants)
      // Store.emit('DELETE_ALL_COOKIES', { reload: true });
      location.reload();
    }
  }
  renderGroup(type, required) {
    if (!required && !this.props.categories.includes(type)) {
      return;
    }
    const fontStyles = this.props.appData?.styling?.fontVariables || {};
    const copy = this.props.copy || {};
    let alt = copyAlt[type] || type;
    let title = copy['$' + type] || copy['$' + alt] || type;
    let description = copy['$' + type + '_DESCRIPTION'] || copy['$' + alt + '_DESCRIPTION'] || '';
    let content;
    if (required) {
      content = (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_5__["default"], {
        class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.joinClasses)(components_bolt_cookiesPreference_cookiesPreference_sss__WEBPACK_IMPORTED_MODULE_6__["default"].cookieAction, components_bolt_cookiesPreference_cookiesPreference_sss__WEBPACK_IMPORTED_MODULE_6__["default"].required, fontStyles.prefCentreCatRequired),
        content: copy.$COOKIES_REQUIRED,
        markdown: true,
        key: "required"
      });
    } else {
      content = (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
        class: components_bolt_cookiesPreference_cookiesPreference_sss__WEBPACK_IMPORTED_MODULE_6__["default"].cookieAction
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_toggle_toggle__WEBPACK_IMPORTED_MODULE_4__["default"], {
        active: this.state[type],
        onClick: () => this.toggle(type),
        key: "toggle",
        ariaLabel: title
      }));
    }
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_cookiesPreference_cookiesPreference_sss__WEBPACK_IMPORTED_MODULE_6__["default"].preference,
      key: type
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_5__["default"], {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.joinClasses)(components_bolt_cookiesPreference_cookiesPreference_sss__WEBPACK_IMPORTED_MODULE_6__["default"].cookieType, fontStyles.prefCentreCatTitle),
      content: title,
      markdown: true,
      key: "title"
    }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_5__["default"], {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.joinClasses)(components_bolt_cookiesPreference_cookiesPreference_sss__WEBPACK_IMPORTED_MODULE_6__["default"].cookieDescription, fontStyles.prefCentreCatDescription),
      content: description,
      markdown: true,
      key: "description"
    }), content);
  }
  render() {
    const {
      $COOKIES_TITLE,
      $COOKIES_DESCRIPTION,
      $COOKIES_ALLOW_ALL = 'Allow all',
      $SAVE_SETTINGS
    } = this.props.copy || {};
    const fontStyles = this.props?.appData?.styling?.fontVariables || {};
    const {
      categories,
      cookiePrefsOpen
    } = this.props;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.joinClasses)(components_bolt_cookiesPreference_cookiesPreference_sss__WEBPACK_IMPORTED_MODULE_6__["default"].screenCover, cookiePrefsOpen && components_bolt_cookiesPreference_cookiesPreference_sss__WEBPACK_IMPORTED_MODULE_6__["default"].open)
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_cookiesPreference_cookiesPreference_sss__WEBPACK_IMPORTED_MODULE_6__["default"].container
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_cookiesPreference_cookiesPreference_sss__WEBPACK_IMPORTED_MODULE_6__["default"].top
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_5__["default"], {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.joinClasses)(components_bolt_cookiesPreference_cookiesPreference_sss__WEBPACK_IMPORTED_MODULE_6__["default"].title, fontStyles.prefCentreTitle),
      content: $COOKIES_TITLE,
      markdown: true
    }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_5__["default"], {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.joinClasses)(components_bolt_cookiesPreference_cookiesPreference_sss__WEBPACK_IMPORTED_MODULE_6__["default"].description, fontStyles.prefCentreDescription),
      content: $COOKIES_DESCRIPTION,
      markdown: true
    }), categories.length > 1 && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_cookiesPreference_cookiesPreference_sss__WEBPACK_IMPORTED_MODULE_6__["default"].preference
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.joinClasses)(components_bolt_cookiesPreference_cookiesPreference_sss__WEBPACK_IMPORTED_MODULE_6__["default"].disable, fontStyles.prefCentreDisableAll)
    }, $COOKIES_ALLOW_ALL, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_toggle_toggle__WEBPACK_IMPORTED_MODULE_4__["default"], {
      active: this.state.allowAll,
      onClick: this.toggleAllowAll,
      ariaLabel: $COOKIES_TITLE
    })))), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_cookiesPreference_cookiesPreference_sss__WEBPACK_IMPORTED_MODULE_6__["default"].middle
    }, this.renderGroup('STRICTLY_NECESSARY', true), this.renderGroup('PERFORMANCE'), this.renderGroup('FUNCTIONAL'), this.renderGroup('TARGETING'), this.renderGroup('SOCIAL')), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_cookiesPreference_cookiesPreference_sss__WEBPACK_IMPORTED_MODULE_6__["default"].bottom
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_2__.joinClasses)(components_bolt_cookiesPreference_cookiesPreference_sss__WEBPACK_IMPORTED_MODULE_6__["default"].save, fontStyles.prefCentreSaveBtn),
      onClick: this.saveSettings
    }, $SAVE_SETTINGS))));
  }
}

/***/ }),

/***/ "./static/src/components/bolt/toggle/toggle.js":
/*!*****************************************************!*\
  !*** ./static/src/components/bolt/toggle/toggle.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Toggle)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var components_bolt_toggle_toggle_sss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/bolt/toggle/toggle.sss */ "./static/src/components/bolt/toggle/toggle.sss");



class Toggle extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }
  render(props) {
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(components_bolt_toggle_toggle_sss__WEBPACK_IMPORTED_MODULE_2__["default"].switch, props.active && components_bolt_toggle_toggle_sss__WEBPACK_IMPORTED_MODULE_2__["default"].on, props.class),
      onClick: this.onClick,
      ariaLabel: props?.ariaLabel
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(components_bolt_toggle_toggle_sss__WEBPACK_IMPORTED_MODULE_2__["default"].toggle)
    }));
  }
}

/***/ }),

/***/ "./static/src/components/bolt/cookiesPreference/cookiesPreference.sss":
/*!****************************************************************************!*\
  !*** ./static/src/components/bolt/cookiesPreference/cookiesPreference.sss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"screenCover":"cookiesPreference__screenCover__GhIJq","open":"cookiesPreference__open__zpNiv","container":"cookiesPreference__container__Mes3Y","top":"cookiesPreference__top__V00Zo","title":"cookiesPreference__title__OJ302","description":"cookiesPreference__description__MUu3n","disable":"cookiesPreference__disable__aezpe","middle":"cookiesPreference__middle__VfSSC","preference":"cookiesPreference__preference__LSTLd","cookieType":"cookiesPreference__cookieType__YpF6S","cookieDescription":"cookiesPreference__cookieDescription__KuTp9","cookieAction":"cookiesPreference__cookieAction__GaRst","bottom":"cookiesPreference__bottom__tHNHy","save":"cookiesPreference__save__gSDJh"});

/***/ }),

/***/ "./static/src/components/bolt/toggle/toggle.sss":
/*!******************************************************!*\
  !*** ./static/src/components/bolt/toggle/toggle.sss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"switch":"toggle__switch__tLzku","on":"toggle__on___Qxg1","toggle":"toggle__toggle__dn0v9"});

/***/ })

}]);
//# sourceMappingURL=cookiesPreference.bolt.js.map?v=f9857d3ad0571ca0fbb7