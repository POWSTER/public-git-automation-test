"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkthundr"] = (typeof self !== 'undefined' ? self : this)["webpackChunkthundr"] || []).push([["signUpForm"],{

/***/ "./static/src/components/bolt/icons/newsletter.js":
/*!********************************************************!*\
  !*** ./static/src/components/bolt/icons/newsletter.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");


const Newsletter = props => {
  return (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    role: "img"
  }, props), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
    d: "M23.775 10.526V5.101a1 1 0 00-1-1H8.301a1 1 0 00-1 1v5.425l-3.328 2.277a1.001 1.001 0 00-.435.825v13.473a1 1 0 001 1h22a1 1 0 001-1V13.628a1 1 0 00-.436-.825l-3.327-2.277zM8.301 5.101h14.474v11.175l-7.237 4.825-7.237-4.825V5.101zm-1 6.491v4.018l-3.013-2.009 3.013-2.009zm19.237 15.509h-22V14.97l10.445 6.963.555.37.555-.37 10.445-6.963v12.131zM23.775 15.61v-4.018l3.013 2.009-3.013 2.009zM10.538 8.101h10v-1h-10v1zm0 3h10v-1h-10v1zm0 3h5v-1h-5v1z",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Newsletter);

/***/ }),

/***/ "./static/src/components/bolt/signUpForm/signUpForm.js":
/*!*************************************************************!*\
  !*** ./static/src/components/bolt/signUpForm/signUpForm.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var store_bolt_signUpBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/bolt/signUpBanner */ "./static/src/store/bolt/signUpBanner.js");
/* harmony import */ var components_core_html_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/core/html/html */ "./static/src/components/core/html/html.js");
/* harmony import */ var components_bolt_icons_newsletter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/bolt/icons/newsletter */ "./static/src/components/bolt/icons/newsletter.js");
/* harmony import */ var components_bolt_icons_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/bolt/icons/close */ "./static/src/components/bolt/icons/close.js");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var utils_bolt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/bolt */ "./static/src/utils/bolt/index.js");
/* harmony import */ var utils_gdpr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/gdpr */ "./static/src/utils/gdpr/index.js");
/* harmony import */ var utils_gdpr_categories__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/gdpr/categories */ "./static/src/utils/gdpr/categories.js");
/* harmony import */ var components_bolt_signUpForm_signUpForm_sss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/bolt/signUpForm/signUpForm.sss */ "./static/src/components/bolt/signUpForm/signUpForm.sss");
/* harmony import */ var components_bolt_signUpForm_constantContact_sss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/bolt/signUpForm/constantContact.sss */ "./static/src/components/bolt/signUpForm/constantContact.sss");
/* harmony import */ var utils_copy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! utils/copy */ "./static/src/utils/copy.js");













class SignUpForm extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    const store = store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get();
    this.formType = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(store, 'appData.options.formEmbeds.signUp.formType', {});
    this.useMailchimp = this.formType === 'mailchimp';
    this.url = this.props.data.embedCode || '';
    this.u = this.url.match(/u=[^&]+/) || [];
    this.id = this.url.match(/id=[^&]+/) || [];
    this.hasFormSubmit = this.useMailchimp && !!(this.url && this.u && this.id);
    this.useConstantContact = this.formType === 'constantContact';
    this.FormTag = this.useConstantContact ? 'div' : 'form';
    this.dataFormId = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(store, 'appData.options.formEmbeds.signUp.embedCode', '').split(',')[1];
    this.usesEvidon = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(store, 'appData.options.requireUserConsent');
    this.state = {
      legalCopyMaxWidth: null
    };
    this.closeBanner = this.closeBanner.bind(this);
    this.closeSubscribed = this.closeBanner.bind(this, 'subscribed');
    this.closeDismiss = this.closeBanner.bind(this, 'dismiss');
    this.getForm = this.getForm.bind(this);
    this.toggleBanner = this.toggleBanner.bind(this);
    this.searchForConstantContact = this.searchForConstantContact.bind(this);
    this.checkIfCanShowBanner = this.checkIfCanShowBanner.bind(this);
  }
  componentDidMount() {
    this.restrictLegalCopyWidth();
    this.checkIfCanShowBanner();
    this.searchForConstantContact();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.clientData.deviceSize !== this.props.clientData.deviceSize) {
      this.restrictLegalCopyWidth();
    }
    if (prevState.oneTrustAllowed !== this.state.oneTrustAllowed || prevProps.cookies !== this.props.cookies || prevProps.externalCookieBanner !== this.props.externalCookieBanner || prevProps.activePage !== this.props.activePage) {
      this.checkIfCanShowBanner();
    }
    // TODO: Move to Bolt utils
    const signUpForm = document.querySelector('#signUpForm');
    const signUpFormHeight = getComputedStyle(signUpForm).height;
    const signUpFormHeightFormat = parseInt(signUpFormHeight, 10);
    store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get().client.set({
      signUpFormHeight: signUpFormHeightFormat
    });
  }
  componentWillUnmount() {
    window.clearInterval(this.ccInterval);
    window.clearTimeout(this.ccTimeout);
    window.clearTimeout(this.ccSuccessTimeout);
  }
  searchForConstantContact() {
    if ((0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get(), 'appData.options.formEmbeds.signUp.formType', '') !== 'constantContact') {
      return;
    }
    this.ccInterval = window.setInterval(() => {
      // Look for the success message on the page. Listen for a styling change.
      // If it changes from 'display: none' to 'display: block', form was successfully submitted
      const ccSuccessMessage = document.getElementById('success_message_1'); // Not sure if this will be the same for every form, check here first if any issue with Constant Contact
      if (ccSuccessMessage) {
        window.clearInterval(this.ccInterval);
        const observer = new MutationObserver(mutationList => {
          for (const mutation of mutationList) {
            if (mutation.type === 'attributes' && getComputedStyle(ccSuccessMessage).display !== 'none') {
              this.ccSuccessTimeout = window.setTimeout(this.closeSubscribed, 5000);
            }
          }
        });
        observer.observe(ccSuccessMessage, {
          attributes: true
        });
      }
    }, 200);
    this.ccTimeout = window.setTimeout(() => {
      // if not found after 10 seconds, give up
      window.clearInterval(this.ccInterval);
    }, 10000);
  }
  checkIfCanShowBanner() {
    if (this.userDismissed) return;
    // We need to show the signup banner once the user has dismissed the cookie banner (doesn't matter if they've accepted or not)
    if (!window.powsterOneTrust) return;
    // check if user has previously closed or subscribed
    if (this.hasHideBannerCookie()) {
      return;
    }
    // Exclude from certain pages or if the button is linking to this page
    const store = store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get();
    const {
      data
    } = this.props;
    const pageExclusions = (data?.pageExclusions || '').split(',').map(a => a.trim()).filter(a => a);
    const activePage = store.activePage;
    const bannerButtonLink = data?.button?.href;
    if (activePage && (activePage === bannerButtonLink || pageExclusions.includes(activePage))) {
      if (store.signupBanner?.open) {
        store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit('TOGGLE_NEWSLETTER_BANNER', true);
      }
      return;
    }
    const delayMs = (this.props.data.bannerDelay || 0) * 1000;
    setTimeout(() => {
      if (this.userDismissed) return;
      store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit('TOGGLE_NEWSLETTER_BANNER', false);
    }, delayMs);
  }
  setCookie(daysToLive) {
    const store = store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get();
    const usesOneTrust = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(store, 'appData.options.oneTrustCookieConsent');
    const usesPowCookieBanner = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(store, 'appData.options.cookiesModal.enableModal');
    if (usesPowCookieBanner && !utils_gdpr_categories__WEBPACK_IMPORTED_MODULE_9__.has('FUNCTIONAL')) {
      return;
    }
    const {
      oneTrustAllowed
    } = this.state;
    if (usesOneTrust && !oneTrustAllowed) {
      return;
    }
    document.cookie = `hideSignupBanner=true; max-age=${daysToLive * 24 * 60 * 60}`;
  }
  hasHideBannerCookie() {
    return document.cookie.match(/hideSignupBanner=true/);
  }
  restrictLegalCopyWidth() {
    const isMobile = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(this.props, 'clientData.deviceSize') === 'mobile';
    if (isMobile) {
      this.setState({
        legalCopyMaxWidth: null
      });
    } else {
      if (!this.$inputContainer) return;
      const legalCopyMaxWidth = this.$heading.clientWidth + this.$inputContainer.clientWidth;
      this.setState({
        legalCopyMaxWidth
      });
    }
  }
  closeBanner(reason, e) {
    // Some weird notes:
    // Setting state in here (the form's onSubmit function) makes the mailchimp form just open the action link without actually submitting the form data
    // If we absolutely must setState here, we can do ->
    // if (userSubscribed && e.target && typeof e.target.submit === 'function') {
    // 	e.preventDefault();
    // 	e.target.submit();
    // }
    // which fixes it in Chrome, but not Safari
    const userSubscribed = reason === 'subscribed';
    if ((0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get(), 'signupBanner.open')) {
      this.toggleBanner();
      this.userDismissed = true;
      const daysToLive = this.props.data?.cookieExpiration?.[userSubscribed ? 'userSubscribed' : 'bannerDismissed'] || (userSubscribed ? 183 : 1);
      this.setCookie(+daysToLive);
    }
  }
  toggleBanner() {
    store_store__WEBPACK_IMPORTED_MODULE_1__["default"].emit('TOGGLE_NEWSLETTER_BANNER');
  }
  renderCloseButton(className) {
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
      class: className,
      onClick: this.closeDismiss,
      type: "button",
      ariaLabel: this.props.data.closeBtnAriaLabel || 'Close banner'
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_close__WEBPACK_IMPORTED_MODULE_5__["default"], null));
  }
  getForm() {
    if (this.useConstantContact) {
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
        class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_signUpForm_constantContact_sss__WEBPACK_IMPORTED_MODULE_11__["default"].ctctForm, 'ctct-inline-form'),
        "data-form-id": this.dataFormId
      });
    }
    let submitBtn;
    const {
      data
    } = this.props;
    const btnData = data.button || {};
    let u = this.u[0]?.replace('u=', '');
    let id = this.id[0]?.replace('id=', '');
    if (this.hasFormSubmit && (!u || !id)) {
      console.log('Incorrect submit link for mailchimp!');
    }
    if (this.hasFormSubmit) {
      submitBtn = (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
        type: "submit",
        class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_signUpForm_signUpForm_sss__WEBPACK_IMPORTED_MODULE_10__["default"].button, components_bolt_signUpForm_signUpForm_sss__WEBPACK_IMPORTED_MODULE_10__["default"].submitFormBtn),
        value: (0,utils_copy__WEBPACK_IMPORTED_MODULE_12__.getCopy)(btnData.label) || btnData.label,
        name: "subscribe",
        ariaLabel: (0,utils_copy__WEBPACK_IMPORTED_MODULE_12__.getCopy)(btnData.ariaLabel) || btnData.ariaLabel
      });
    } else {
      let href = btnData.href;
      let onClick = this.closeSubscribed;
      let target = '_blank';
      const store = store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get();
      let page = store.appData?.pages?.[href];
      if (page) {
        href = (0,utils_bolt__WEBPACK_IMPORTED_MODULE_7__.getRelativePageUrl)(page);
        target = undefined;
        onClick = e => {
          e.preventDefault();
          (0,utils_bolt__WEBPACK_IMPORTED_MODULE_7__.navigateInternally)(btnData.href);
          this.closeSubscribed(e);
        };
      }
      submitBtn = (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("a", {
        class: components_bolt_signUpForm_signUpForm_sss__WEBPACK_IMPORTED_MODULE_10__["default"].button,
        href: href,
        target: target,
        ariaLabel: (0,utils_copy__WEBPACK_IMPORTED_MODULE_12__.getCopy)(btnData.ariaLabel) || btnData.ariaLabel,
        onClick: onClick
      }, (0,utils_copy__WEBPACK_IMPORTED_MODULE_12__.getCopy)(btnData.label) || btnData.label);
    }
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_signUpForm_signUpForm_sss__WEBPACK_IMPORTED_MODULE_10__["default"].inputContainer, this.hasFormSubmit && components_bolt_signUpForm_signUpForm_sss__WEBPACK_IMPORTED_MODULE_10__["default"].emailInputContainer),
      ref: ref => this.$inputContainer = ref
    }, this.hasFormSubmit && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
      type: "email",
      class: components_bolt_signUpForm_signUpForm_sss__WEBPACK_IMPORTED_MODULE_10__["default"].email,
      value: "",
      name: "EMAIL",
      id: "mce-EMAIL",
      placeholder: data.emailPlaceholder || 'Email address',
      required: true
    }), this.hasFormSubmit && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
      type: "text",
      class: components_bolt_signUpForm_signUpForm_sss__WEBPACK_IMPORTED_MODULE_10__["default"].antiBot,
      name: 'b_' + u + '_' + id,
      tabindex: "-1",
      value: "",
      "aria-hidden": "true"
    }), submitBtn);
  }
  render(_ref) {
    let {
      data
    } = _ref;
    const open = (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.accessNested)(store_store__WEBPACK_IMPORTED_MODULE_1__["default"].get(), 'signupBanner.open');
    const {
      legalCopyMaxWidth
    } = this.state;
    const legalCopyContainerStyle = legalCopyMaxWidth ? {
      maxWidth: `${legalCopyMaxWidth}px`
    } : {};
    let FormTag = this.FormTag;
    const {
      navOpen,
      showtimesProviderInterstitialOpen
    } = this.props;
    const hideBanner = navOpen || showtimesProviderInterstitialOpen;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      id: "signUpForm",
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_signUpForm_signUpForm_sss__WEBPACK_IMPORTED_MODULE_10__["default"].formContainer, !open && components_bolt_signUpForm_signUpForm_sss__WEBPACK_IMPORTED_MODULE_10__["default"].closedBanner, hideBanner && components_bolt_signUpForm_signUpForm_sss__WEBPACK_IMPORTED_MODULE_10__["default"].hide)
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(FormTag, {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_signUpForm_signUpForm_sss__WEBPACK_IMPORTED_MODULE_10__["default"].form, this.hasFormSubmit && components_bolt_signUpForm_signUpForm_sss__WEBPACK_IMPORTED_MODULE_10__["default"].formWithEmail, this.useConstantContact && components_bolt_signUpForm_constantContact_sss__WEBPACK_IMPORTED_MODULE_11__["default"].ctctFormContainer),
      onSubmit: !this.useConstantContact && this.closeSubscribed,
      action: this.url,
      method: "post",
      name: "mc-embedded-subscribe-form",
      target: "_blank",
      novalidate: true
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_signUpForm_signUpForm_sss__WEBPACK_IMPORTED_MODULE_10__["default"].heading,
      ref: ref => this.$heading = ref
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_newsletter__WEBPACK_IMPORTED_MODULE_4__["default"], {
      class: components_bolt_signUpForm_signUpForm_sss__WEBPACK_IMPORTED_MODULE_10__["default"].newsletterIcon,
      "aria-hidden": true
    }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_signUpForm_signUpForm_sss__WEBPACK_IMPORTED_MODULE_10__["default"].text, this.useConstantContact && components_bolt_signUpForm_constantContact_sss__WEBPACK_IMPORTED_MODULE_11__["default"].text)
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_3__["default"], {
      markdown: true,
      class: components_bolt_signUpForm_signUpForm_sss__WEBPACK_IMPORTED_MODULE_10__["default"].title,
      content: data.title
    }), data.blurb && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_3__["default"], {
      markdown: true,
      class: components_bolt_signUpForm_signUpForm_sss__WEBPACK_IMPORTED_MODULE_10__["default"].blurb,
      content: data.blurb
    })), this.renderCloseButton(components_bolt_signUpForm_signUpForm_sss__WEBPACK_IMPORTED_MODULE_10__["default"].closeBtn)), this.getForm(), this.renderCloseButton((0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_signUpForm_signUpForm_sss__WEBPACK_IMPORTED_MODULE_10__["default"].closeBtn, components_bolt_signUpForm_signUpForm_sss__WEBPACK_IMPORTED_MODULE_10__["default"].wideScreenCloseBtn))), data.legalCopy && !this.useConstantContact && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_6__.joinClasses)(components_bolt_signUpForm_signUpForm_sss__WEBPACK_IMPORTED_MODULE_10__["default"].legalCopyContainer, this.hasFormSubmit && components_bolt_signUpForm_signUpForm_sss__WEBPACK_IMPORTED_MODULE_10__["default"].legalCopyWithForm),
      style: legalCopyContainerStyle
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_3__["default"], {
      class: components_bolt_signUpForm_signUpForm_sss__WEBPACK_IMPORTED_MODULE_10__["default"].legalCopy,
      markdown: true,
      content: data.legalCopy
    })));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (utils_gdpr__WEBPACK_IMPORTED_MODULE_8__.oneTrust.connectToOneTrust(utils_gdpr__WEBPACK_IMPORTED_MODULE_8__.oneTrust.FUNCTIONAL, SignUpForm));

/***/ }),

/***/ "./static/src/store/bolt/signUpBanner.js":
/*!***********************************************!*\
  !*** ./static/src/store/bolt/signUpBanner.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");

store_store__WEBPACK_IMPORTED_MODULE_0__["default"].on('TOGGLE_NEWSLETTER_BANNER', close => {
  let store = store_store__WEBPACK_IMPORTED_MODULE_0__["default"].get();
  if (typeof close === 'undefined') {
    close = store.signupBanner?.open;
  }
  let newState = {
    open: !close
  };
  if (!store.signupBanner) {
    store.set({
      signupBanner: newState
    });
  } else {
    store.signupBanner.set(newState);
  }
});

/***/ }),

/***/ "./static/src/components/bolt/signUpForm/constantContact.sss":
/*!*******************************************************************!*\
  !*** ./static/src/components/bolt/signUpForm/constantContact.sss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"ctctForm":"constantContact__ctctForm__NGGpv","ctctFormContainer":"constantContact__ctctFormContainer__FnAPe","text":"constantContact__text__g4T5o"});

/***/ }),

/***/ "./static/src/components/bolt/signUpForm/signUpForm.sss":
/*!**************************************************************!*\
  !*** ./static/src/components/bolt/signUpForm/signUpForm.sss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"formContainer":"signUpForm__formContainer__MhmO4","closedBanner":"signUpForm__closedBanner__CmGMH","hide":"signUpForm__hide__iS88E","heading":"signUpForm__heading__k3os5","newsletterIcon":"signUpForm__newsletterIcon__ECePD","text":"signUpForm__text__owvCA","title":"signUpForm__title__AZnBt","blurb":"signUpForm__blurb__KYBJ7","closeBtn":"signUpForm__closeBtn__mVPUS","wideScreenCloseBtn":"signUpForm__wideScreenCloseBtn__LJI8B","inputContainer":"signUpForm__inputContainer__bUs5l","emailInputContainer":"signUpForm__emailInputContainer__nqW_c","email":"signUpForm__email__RIYrJ","button":"signUpForm__button__IKr52","submitFormBtn":"signUpForm__submitFormBtn__aFeZs","antiBot":"signUpForm__antiBot__HRkpR","legalCopy":"signUpForm__legalCopy__eGcGo","form":"signUpForm__form__hEktd","formWithEmail":"signUpForm__formWithEmail__Ohgdo","legalCopyContainer":"signUpForm__legalCopyContainer__B4EjB","legalCopyWithForm":"signUpForm__legalCopyWithForm___W7Bo"});

/***/ })

}]);
//# sourceMappingURL=signUpForm.bolt.js.map?v=1beddb122e9e1eb1341a