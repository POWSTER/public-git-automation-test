"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkthundr"] = (typeof self !== 'undefined' ? self : this)["webpackChunkthundr"] || []).push([["calendarRemind"],{

/***/ "./static/src/components/bolt/calendarRemind/calendarRemind.js":
/*!*********************************************************************!*\
  !*** ./static/src/components/bolt/calendarRemind/calendarRemind.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CalendarRemind)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var utils_formatDateTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/formatDateTime */ "./static/src/utils/formatDateTime.js");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var components_bolt_burgerMenu_burgerMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/bolt/burgerMenu/burgerMenu */ "./static/src/components/bolt/burgerMenu/burgerMenu.js");
/* harmony import */ var components_bolt_calendarRemind_calendarRemindButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/bolt/calendarRemind/calendarRemindButtons */ "./static/src/components/bolt/calendarRemind/calendarRemindButtons.js");
/* harmony import */ var components_core_html_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/core/html/html */ "./static/src/components/core/html/html.js");
/* harmony import */ var components_bolt_calendarRemind_calendarRemind_sss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/bolt/calendarRemind/calendarRemind.sss */ "./static/src/components/bolt/calendarRemind/calendarRemind.sss");








class CalendarRemind extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.closeOverlay = this.closeOverlay.bind(this);
  }
  closeOverlay(_ref) {
    let {
      target
    } = _ref;
    if (target === this.container) {
      store_store__WEBPACK_IMPORTED_MODULE_3__["default"].emit('CLOSE_CAL_REMIND');
    }
  }
  render(_ref2) {
    let {
      appData,
      open,
      offsetTop
    } = _ref2;
    if (!open) {
      return;
    }
    const {
      copy
    } = appData;
    const store = store_store__WEBPACK_IMPORTED_MODULE_3__["default"].get();
    let siteUrl = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(appData, 'meta.url', '');
    siteUrl = siteUrl.replace(/https:\/\//, '');
    const liveDate = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(this.props, 'appData.meta.dates.live') || (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(this.props, 'appData.meta.dates.boxOffice') || (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(this.props, 'appData.meta.dates.release');
    const remindMeDateWithOffset = new Date(liveDate);
    const remindMeDate = new Date(remindMeDateWithOffset.getTime() - remindMeDateWithOffset.getTimezoneOffset() * -60000);
    const dateTimeCopy = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(copy, 'baseCopy.$DATETIME_LOCALE', {});
    const dateTimeFormat = dateTimeCopy.calendarReminderFormat || 'dddd, dd MMM yyyy';
    const formattedDate = (0,utils_formatDateTime__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(remindMeDate), dateTimeFormat, dateTimeCopy);
    const calObj = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(appData, 'header.powsterHeader.calendars', {});
    const summary = copy.baseCopy[calObj.calEventTitle] || calObj.calEventTitle || '';
    const description = copy.baseCopy[calObj.calEventBody] || calObj.calEventBody;
    const location = copy.baseCopy[calObj.calEventLocation] || calObj.calEventLocation || '';
    const chooseCalCopy = copy.baseCopy[calObj.chooseCalCopy] || calObj.chooseCalCopy || 'Choose a calendar';
    const fontStyles = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(appData, 'styling.fontVariables');
    let style = {};
    const externalCookieBanner = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(store, 'externalCookieBanner', false);
    const isMobile = !(0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(store, 'client.isDesktopSize', false);
    const externalBannerOpenMobile = externalCookieBanner.bannerOpen && isMobile;
    if (offsetTop && typeof window !== 'undefined') {
      // make the overlay scrollable if the evidon banner is open
      style = {
        height: window.innerHeight - offsetTop + 'px',
        top: offsetTop + 'px'
      };
    }
    if (externalBannerOpenMobile) {
      style.overflowY = 'scroll';
      style.display = 'block';
    }
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      style: style,
      class: components_bolt_calendarRemind_calendarRemind_sss__WEBPACK_IMPORTED_MODULE_7__["default"].container,
      onClick: this.closeOverlay,
      ref: ref => this.container = ref
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_burgerMenu_burgerMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "close",
      calendarRemind: true,
      extraClass: components_bolt_calendarRemind_calendarRemind_sss__WEBPACK_IMPORTED_MODULE_7__["default"].calendarRemindCloseButton
    }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_calendarRemind_calendarRemind_sss__WEBPACK_IMPORTED_MODULE_7__["default"].notepad,
      role: "dialog",
      style: externalBannerOpenMobile && {
        margin: '100px auto'
      }
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_calendarRemind_calendarRemind_sss__WEBPACK_IMPORTED_MODULE_7__["default"].header
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_calendarRemind_calendarRemind_sss__WEBPACK_IMPORTED_MODULE_7__["default"].hole
    }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_calendarRemind_calendarRemind_sss__WEBPACK_IMPORTED_MODULE_7__["default"].hole
    })), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_calendarRemind_calendarRemind_sss__WEBPACK_IMPORTED_MODULE_7__["default"].content
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_calendarRemind_calendarRemind_sss__WEBPACK_IMPORTED_MODULE_7__["default"].releaseDetails
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_6__["default"], {
      tag: "span",
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(components_bolt_calendarRemind_calendarRemind_sss__WEBPACK_IMPORTED_MODULE_7__["default"].title, fontStyles.headerCalendarReminderTitle),
      markdown: true,
      content: summary
    }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(components_bolt_calendarRemind_calendarRemind_sss__WEBPACK_IMPORTED_MODULE_7__["default"].date, fontStyles.headerCalendarReminderBody)
    }, formattedDate), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
      class: components_bolt_calendarRemind_calendarRemind_sss__WEBPACK_IMPORTED_MODULE_7__["default"].vanity
    }, siteUrl)), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_calendarRemind_calendarRemindButtons__WEBPACK_IMPORTED_MODULE_5__["default"], {
      remindMeDate: remindMeDate,
      summary: summary,
      description: description,
      location: location,
      calObj: calObj,
      isShowtimes: true,
      chooseCalCopy: chooseCalCopy
    }))));
  }
}

/***/ }),

/***/ "./static/src/components/bolt/calendarRemind/calendarRemindButtons.js":
/*!****************************************************************************!*\
  !*** ./static/src/components/bolt/calendarRemind/calendarRemindButtons.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CalendarRemindButtons)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var utils_formatDateTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/formatDateTime */ "./static/src/utils/formatDateTime.js");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");
/* harmony import */ var components_bolt_link_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/bolt/link/link */ "./static/src/components/bolt/link/link.js");
/* harmony import */ var components_bolt_calendarRemind_calendarRemindButtons_sss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/bolt/calendarRemind/calendarRemindButtons.sss */ "./static/src/components/bolt/calendarRemind/calendarRemindButtons.sss");






class CalendarRemindButtons extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.setCalData(props);
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setCalData(this.props);
    }
  }
  setCalData(props) {
    const {
      remindMeDate,
      summary,
      description,
      location
    } = props;
    const startTime = (0,utils_formatDateTime__WEBPACK_IMPORTED_MODULE_2__["default"])(remindMeDate, 'yyyyMMdd');
    let endTime = remindMeDate.setDate(remindMeDate.getDate() + 1);
    endTime = (0,utils_formatDateTime__WEBPACK_IMPORTED_MODULE_2__["default"])(endTime, 'yyyyMMdd');
    const icsDescription = (description || '').split('\n').filter(a => a).join('\\n\\n');
    const icsCalendarContent = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//powster//NONSGML v1.0//EN', 'BEGIN:VEVENT',
    // 'URL;VALUE=URI:' + siteUrl,
    'DTSTART;VALUE=DATE:' + (startTime || ''), 'DTEND:' + (endTime || ''), 'SUMMARY:' + summary, 'DESCRIPTION:' + icsDescription, 'LOCATION:' + location, 'END:VEVENT', 'END:VCALENDAR', ''].join(typeof navigator !== 'undefined' && navigator.appVersion.indexOf('Win') !== -1 ? '\r\n' : '\n');
    const icsHref = 'data:text/calendar;charset=utf8,' + encodeURIComponent(icsCalendarContent);
    this.calDetails = {
      googleCal: {
        name: 'Google Calendar',
        icon: 'googlecal.png',
        href: ['https://www.google.com/calendar/render', '?action=TEMPLATE', '&text=' + encodeURIComponent(summary), '&location=' + encodeURIComponent(location), '&dates=' + (startTime || ''), '/' + (endTime || ''), '&details=' + encodeURIComponent([description].filter(e => e).join(' ')), '&sprop=&sprop=name:'].join(''),
        target: '_blank',
        order: 1
      },
      iCal: {
        name: 'Apple iCal',
        icon: 'ical.png',
        download: 'calendar.ics',
        href: icsHref,
        order: 2
      },
      outlook: {
        name: 'Microsoft Outlook',
        icon: 'outlook.png',
        download: 'calendar.ics',
        href: icsHref,
        order: 3
      },
      yahoo: {
        name: 'Yahoo',
        icon: 'yahoo.png',
        download: 'calendar.ics',
        href: icsHref,
        order: 4
      }
    };
  }
  getEnabledCals(calObj) {
    const calPriority = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.sortObjectByOrder)(this.calDetails, (obj, cal) => cal).reverse();
    return Object.keys(calObj).filter(cal => calObj[cal] && calPriority.includes(cal)).sort((a, b) => calPriority.indexOf(b) - calPriority.indexOf(a));
  }
  renderCal(cal, i) {
    const sharedImageRoot = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(store_store__WEBPACK_IMPORTED_MODULE_3__["default"].get(), 'appData.urls.roots.sharedImages');
    const {
      iconShade
    } = this.props;
    let calAriaLabel = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(store_store__WEBPACK_IMPORTED_MODULE_3__["default"].get(), 'appData.copy.accessibilityCopy.$CALENDAR_NAME_ARIA');
    if (calAriaLabel) {
      calAriaLabel = calAriaLabel.replace('<calendar>', this.calDetails[cal].name);
    }
    const iconFolder = iconShade ? `cal-icons-${iconShade}` : `cal-icons-light`;
    let calColor;
    if (iconShade && iconShade === 'dark') {
      calColor = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(store_store__WEBPACK_IMPORTED_MODULE_3__["default"].get(), 'appData.styling.variables.white', '#FFF');
    } else if (iconShade && iconShade === 'light') {
      calColor = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(store_store__WEBPACK_IMPORTED_MODULE_3__["default"].get(), 'appData.styling.variables.black', '#000');
    }
    const homeEntCalNameOverride = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(store_store__WEBPACK_IMPORTED_MODULE_3__["default"].get(), 'appData.styling.variables.homeEntCalNameColor');
    if (this.props.isHomeEnt && homeEntCalNameOverride) {
      calColor = homeEntCalNameOverride;
    }
    let calNameStyle = {
      color: calColor
    };
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_link_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
      href: this.calDetails[cal].href,
      target: this.calDetails[cal].target,
      download: this.calDetails[cal].download,
      "aria-label": calAriaLabel,
      title: this.calDetails[cal].name,
      key: cal,
      onClick: () => {
        store_store__WEBPACK_IMPORTED_MODULE_3__["default"].emit('CALENDAR_CLICKED', {
          label: cal
        });
      }
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(components_bolt_calendarRemind_calendarRemindButtons_sss__WEBPACK_IMPORTED_MODULE_5__["default"].cal, i === 0 && components_bolt_calendarRemind_calendarRemindButtons_sss__WEBPACK_IMPORTED_MODULE_5__["default"].firstCal)
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: components_bolt_calendarRemind_calendarRemindButtons_sss__WEBPACK_IMPORTED_MODULE_5__["default"].icon
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("img", {
      src: `${sharedImageRoot}/${iconFolder}/${this.calDetails[cal].icon}`
    })), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
      class: components_bolt_calendarRemind_calendarRemindButtons_sss__WEBPACK_IMPORTED_MODULE_5__["default"].calName,
      style: calNameStyle
    }, this.calDetails[cal].name)));
  }
  render(_ref) {
    let {
      calObj,
      isShowtimes,
      isHomeEnt,
      chooseCalCopy
    } = _ref;
    const enabledCalendars = this.getEnabledCals(calObj);
    const fontStyles = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(store_store__WEBPACK_IMPORTED_MODULE_3__["default"].get(), 'appData.styling.fontVariables', {});
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(components_bolt_calendarRemind_calendarRemindButtons_sss__WEBPACK_IMPORTED_MODULE_5__["default"].calendarOptions, isHomeEnt && components_bolt_calendarRemind_calendarRemindButtons_sss__WEBPACK_IMPORTED_MODULE_5__["default"].homeEntCalOptions)
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(components_bolt_calendarRemind_calendarRemindButtons_sss__WEBPACK_IMPORTED_MODULE_5__["default"].chooseCal, isShowtimes && fontStyles.headerChooseCalendar, isHomeEnt && fontStyles.homeEntCalRemindChooseCalCopy)
    }, chooseCalCopy), enabledCalendars.map((cal, i) => this.renderCal(cal, i)));
  }
}

/***/ }),

/***/ "./static/src/components/bolt/calendarRemind/calendarRemind.sss":
/*!**********************************************************************!*\
  !*** ./static/src/components/bolt/calendarRemind/calendarRemind.sss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"calendarRemind__container__fDBFu","notepad":"calendarRemind__notepad__FG4yr","header":"calendarRemind__header__G5cWc","hole":"calendarRemind__hole__y5ACY","content":"calendarRemind__content__yhiZJ","releaseDetails":"calendarRemind__releaseDetails__RaitU","title":"calendarRemind__title__QJ9a2","date":"calendarRemind__date__NyjjD","vanity":"calendarRemind__vanity__jD12A","calendarRemindCloseButton":"calendarRemind__calendarRemindCloseButton__eooAb"});

/***/ }),

/***/ "./static/src/components/bolt/calendarRemind/calendarRemindButtons.sss":
/*!*****************************************************************************!*\
  !*** ./static/src/components/bolt/calendarRemind/calendarRemindButtons.sss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"calendarOptions":"calendarRemindButtons__calendarOptions__S1xOp","chooseCal":"calendarRemindButtons__chooseCal__q_RWn","cal":"calendarRemindButtons__cal__yhK8L","icon":"calendarRemindButtons__icon__lnItL","calName":"calendarRemindButtons__calName__UOZvc medium","homeEntCalOptions":"calendarRemindButtons__homeEntCalOptions__Mg7LQ","firstCal":"calendarRemindButtons__firstCal__f5LQ4"});

/***/ })

}]);
//# sourceMappingURL=calendarRemind.bolt.js.map?v=91631128fe33582853b5