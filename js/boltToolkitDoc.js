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

/***/ "./static/src/base/boltToolkit/boltToolkitApp.js":
/*!*******************************************************!*\
  !*** ./static/src/base/boltToolkit/boltToolkitApp.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BoltToolkitApp)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var utils_smoothScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/smoothScroll */ "./static/src/utils/smoothScroll.js");
/* harmony import */ var utils_math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/math */ "./static/src/utils/math.js");
/* harmony import */ var base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! base/boltToolkit/boltToolkitApp.sss */ "./static/src_overrides/studios/netflix/base/boltToolkit/boltToolkitApp.sss");
/* harmony import */ var components_core_html_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/core/html/html */ "./static/src/components/core/html/html.js");
/* harmony import */ var base_boltToolkit_campaignGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! base/boltToolkit/campaignGenerator */ "./static/src/base/boltToolkit/campaignGenerator.js");
/* harmony import */ var base_boltToolkit_toolkitMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! base/boltToolkit/toolkitMenu */ "./static/src/base/boltToolkit/toolkitMenu.js");
/* harmony import */ var components_bolt_link_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/bolt/link/link */ "./static/src/components/bolt/link/link.js");
/* harmony import */ var components_bolt_icons_powsterLogo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/bolt/icons/powsterLogo */ "./static/src/components/bolt/icons/powsterLogo.js");










// import { pages, sections, sectionsWithParent } from 'pages/bolt_pages';

class BoltToolkitApp extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: 'intro'
    };
    this.pages = this.getPages();
    this.scrollTo = this.scrollTo.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.updateActiveSection = this.updateActiveSection.bind(this);
    this.downloadImage = this.downloadImage.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('wheel', this.handleScroll);
    window.addEventListener('touchmove', this.handleScroll);
    window.scrollToContact = () => this.scrollTo('contact');
    if (window.location.hash) {
      this.scrollTo(window.location.hash.replace('#', ''));
      this.updateActiveSection(window.location.hash.replace('#', ''));
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('wheel', this.handleScroll);
    window.removeEventListener('touchmove', this.handleScroll);
  }
  download(image, link) {
    const isEdge = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(this.props, 'client.isEdge', false);
    const isIOS = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(this.props, 'client.isIOS', false);
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
  downloadImage() {
    const src = this.shareImage.src;
    let link = document.createElement('a');
    link.download = 'share-image.jpg';
    link.href = src;
    this.download(this.shareImage, link);
  }
  scrollTo(section) {
    this.updateActiveSection(section);
    this.setState({
      scrolling: true
    });
    let el = document.getElementById(section);
    if (el) {
      (0,utils_smoothScroll__WEBPACK_IMPORTED_MODULE_2__.smoothScrollTo)('root', el, 500, {
        easing: utils_math__WEBPACK_IMPORTED_MODULE_3__.Easing.ease,
        relativeTo: 'middle',
        callback: () => this.setState({
          scrolling: false
        })
      });
    }
  }
  updateActiveSection(activeSection) {
    this.setState({
      activeSection
    });
    let hash = activeSection === 'intro' ? '' : `#${activeSection}`;
    window.history.replaceState('', '', `.${hash}`);
  }
  getPages() {
    const pagesData = this.props.initialStore?.pages || {};
    const pageIdToNiceName = id => id.replace(/^bolt([A-Z])/, (m, p1) => p1.toLowerCase()).replace(/^([a-z])|([a-z])([A-Z])/g, (m, p1, p2, p3) => p1?.toUpperCase() || `${p2} ${p3}`);
    return (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.sortObjectByOrder)(pagesData, (page, id) => {
      const base = page?.base || 'bolt';
      if (!page?.path || base !== 'bolt') {
        return;
      }
      return {
        path: page.path,
        name: page.name || pageIdToNiceName(id)
      };
    }).filter(e => e);
  }
  handleScroll() {
    if (this.state.scrolling) return;
    const watchedSections = [...this.base.querySelectorAll('section[id]')].map(section => ({
      id: section.id,
      offset: section.offsetTop - window.innerHeight / 2
    }));
    const activeSection = watchedSections.reverse().find(_ref => {
      let {
        offset
      } = _ref;
      return offset <= document.body.scrollTop;
    })?.id || 'intro';
    if (this.state.activeSection !== activeSection) {
      this.updateActiveSection(activeSection);
    }
  }
  renderIntro(data) {
    const movieTitle = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(this.props, 'initialStore.appTitle', '');
    const href = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(this.props, 'initialStore.appUrl');
    const {
      pageTitle,
      tagline
    } = data;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("section", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].intro, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].section)
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_link_link__WEBPACK_IMPORTED_MODULE_8__["default"], {
      href: href,
      target: "_blank"
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h1", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].h1
    }, movieTitle)), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].h3
    }, pageTitle), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("p", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].p
    }, tagline));
  }
  renderShare(data) {
    const shareImage = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(this.props, 'initialStore.shareImage', '');
    const {
      shareTitle,
      description,
      download
    } = data;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("section", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].section, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].share)
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h1", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].h2
    }, shareTitle), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("img", {
      ref: ref => this.shareImage = ref,
      onClick: this.downloadImage,
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].shareImage,
      src: shareImage,
      crossOrigin: "anonymous",
      alt: ""
    }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("a", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].download, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].p, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].bold),
      onClick: this.downloadImage
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].icon
    }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, download)), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_5__["default"], {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].p,
      content: description,
      markdown: true
    }));
  }
  renderCampaign(data) {
    const {
      title,
      subtitle,
      steps = {},
      note,
      generator
    } = data;
    const appUrl = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(this.props, 'initialStore.appUrl', '');
    const copy = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(this.props, 'initialStore.copy', {});
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("section", {
      id: "campaign",
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].section, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].campaign)
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h1", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].title, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].p)
    }, title), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].h2
    }, subtitle), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("ul", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].steps
    }, Object.entries(steps).map(_ref2 => {
      let [step, blurb] = _ref2;
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("li", {
        class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].step
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h3", {
        class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].h3
      }, step), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_5__["default"], {
        class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].p,
        markdown: true,
        content: blurb
      }));
    })), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("p", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].p, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].note)
    }, note), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(base_boltToolkit_campaignGenerator__WEBPACK_IMPORTED_MODULE_6__["default"], {
      pages: this.pages,
      data: generator,
      appUrl: appUrl,
      copy: copy
    }));
  }
  renderSEO(data) {
    const {
      title,
      subtitle,
      description,
      tips
    } = data;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("section", {
      id: "seo",
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].section, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].seo)
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h1", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].title, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].p)
    }, title), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].h2
    }, subtitle), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("p", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].p, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].bold, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].description)
    }, description), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("ul", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].tips
    }, (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.sortObjectByOrder)(tips).map(tip => {
      const {
        id,
        tipTitle,
        tipSections,
        tipCTA = {}
      } = tip;
      const {
        label,
        href
      } = tipCTA;
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("li", {
        class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].tip, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"][id])
      }, !!tipTitle && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h3", {
        class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].h2
      }, tipTitle), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("ul", {
        class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].tipSections
      }, Object.entries(tipSections).map(_ref3 => {
        let [type, section] = _ref3;
        const {
          icon,
          title: tipSectionTitle,
          description: tipDescription
        } = section;
        return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("li", {
          class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].tipSection, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"][type])
        }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
          class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].tipHeader
        }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("img", {
          class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].tipIcon,
          src: icon,
          alt: ""
        }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h4", {
          class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].h3
        }, tipSectionTitle)), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_5__["default"], {
          class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].p, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].tipDescription),
          markdown: true,
          content: tipDescription
        }));
      })), !!label && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_link_link__WEBPACK_IMPORTED_MODULE_8__["default"], {
        class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].tipCTA, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].bold),
        href: href,
        target: "_blank"
      }, label));
    })));
  }
  renderAnalytics(data) {
    const {
      title,
      sectionIcon,
      subtitle,
      description,
      dashboard,
      note,
      pixel
    } = data;
    const GADashboard = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(this.props, 'initialStore.toolkitData.GADashboard', '');
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("section", {
      id: "analytics",
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].section, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].analytics)
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h1", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].title, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].p)
    }, title), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].sectionHeader
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].h2
    }, subtitle), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("img", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].sectionIcon,
      src: sectionIcon,
      alt: ""
    })), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].dashboardWrapper
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("p", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].p, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].dashboardDescription)
    }, description), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("a", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].p, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].bold, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].dashboard),
      href: GADashboard,
      target: "_blank"
    }, dashboard)), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_core_html_html__WEBPACK_IMPORTED_MODULE_5__["default"], {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].p,
      content: note,
      markdown: true
    }), !!pixel && this.renderPixel(pixel));
  }
  renderScreenings(data) {
    const {
      sectionIcon,
      subtitle,
      description,
      button,
      title
    } = data;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("section", {
      id: "screenings",
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].analytics, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].section)
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h1", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].title, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].p)
    }, title), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].sectionHeader
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].h2
    }, subtitle), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("img", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].sectionIcon,
      src: sectionIcon,
      alt: ""
    })), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].dashboardWrapper
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("p", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].p, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].dashboardDescription)
    }, description), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("a", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].p, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].bold, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].dashboard, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].child),
      href: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(this.props, 'initialStore.toolkitData.ScreeningsDashboard') || '',
      target: "_blank"
    }, button)));
  }
  renderPixel(data) {
    const {
      sectionIcon,
      subtitle,
      description,
      link,
      button
    } = data;
    return [(0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].sectionHeader
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].h2
    }, subtitle), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("img", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].sectionIcon,
      src: sectionIcon,
      alt: ""
    })), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].dashboardWrapper
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("p", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].p, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].dashboardDescription)
    }, description), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("a", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].p, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].bold, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].dashboard, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].child),
      href: link,
      target: "_blank"
    }, button))];
  }
  renderContact(data) {
    const {
      title,
      subtitle,
      description,
      offices = {}
    } = data;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("section", {
      id: "contact",
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].section, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].contact)
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h1", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].title, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].p)
    }, title), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].h2
    }, subtitle), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("p", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].p, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].bold, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].description)
    }, description), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("ul", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].offices
    }, Object.values(offices).map(office => {
      const {
        name,
        email,
        number
      } = office;
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("li", {
        class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].office
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h3", {
        class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].h3
      }, name), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("a", {
        class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].p, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].email),
        href: 'mailto:' + email
      }, email), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("p", {
        class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].p, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].number)
      }, number));
    })));
  }
  renderLearnMore(data) {
    const {
      title,
      subtitle,
      items
    } = data;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("section", {
      id: "learnMore",
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].section, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].learnMore)
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h1", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].title, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].p)
    }, title), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].h2
    }, subtitle), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("ul", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].items
    }, (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.sortObjectByOrder)(items).map(item => {
      const {
        icon,
        title,
        link
      } = item;
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_link_link__WEBPACK_IMPORTED_MODULE_8__["default"], {
        class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].item,
        href: link,
        target: "_blank"
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("img", {
        class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].itemIcon,
        src: icon,
        alt: ""
      }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h3", {
        class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].h3
      }, title)));
    })));
  }
  renderFooter() {
    const footer = (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.accessNested)(this.props, 'initialStore.toolkitData.footer', {});
    const {
      links,
      copyright
    } = footer;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("footer", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].footer
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].links
    }, (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.sortObjectByOrder)(links).map(item => {
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_link_link__WEBPACK_IMPORTED_MODULE_8__["default"], {
        class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].link,
        href: item.link,
        target: "_blank"
      }, item.name);
    })), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].powster
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].copyright
    }, copyright), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_link_link__WEBPACK_IMPORTED_MODULE_8__["default"], {
      href: "https://www.powster.com",
      target: "_blank"
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(components_bolt_icons_powsterLogo__WEBPACK_IMPORTED_MODULE_9__["default"], {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].logo
    }))));
  }
  render(props, state) {
    const data = props.initialStore?.toolkitData || {};
    const sections = data.sections || {};
    const checklist = data.checklist || {};
    const footer = data.footer || {};
    const {
      intro,
      share,
      campaign,
      seo,
      analytics,
      contact,
      learnMore,
      screenings
    } = sections;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("main", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].wrapper
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(base_boltToolkit_toolkitMenu__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: props.initialStore?.id,
      sections: sections,
      checklist: checklist,
      activeSection: state.activeSection,
      scrollTo: this.scrollTo
    }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_4__["default"].content
    }, intro && this.renderIntro(intro), share && this.renderShare(share), campaign && this.renderCampaign(campaign), seo && this.renderSEO(seo), analytics && this.renderAnalytics(analytics), screenings && this.renderScreenings(screenings), contact && this.renderContact(contact), learnMore && this.renderLearnMore(learnMore), footer && this.renderFooter(footer)));
  }
}

/***/ }),

/***/ "./static/src/base/boltToolkit/campaignGenerator.js":
/*!**********************************************************!*\
  !*** ./static/src/base/boltToolkit/campaignGenerator.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CampaignGenerator)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! base/boltToolkit/boltToolkitApp.sss */ "./static/src_overrides/studios/netflix/base/boltToolkit/boltToolkitApp.sss");
/* harmony import */ var base_boltToolkit_campaignGenerator_sss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! base/boltToolkit/campaignGenerator.sss */ "./static/src/base/boltToolkit/campaignGenerator.sss");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__);





function findRootPage(pages) {
  const rootPage = pages.find(page => page.path === '/');
  return rootPage;
}
class CampaignGenerator extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      campaignName: '',
      campaignSource: '',
      campaignMedium: '',
      landingPage: findRootPage(this.props.pages),
      copied: false,
      allRequiredFieldsFilled: false
    };
    this.updateResult = this.updateResult.bind(this);
  }
  componentWillUnmount() {
    window.clearTimeout(this.copyTimeout);
  }
  updateResult(e) {
    let newValue = e.target.value;
    if (e.target.name === 'landingPage') {
      newValue = this.props.pages.find(page => page.path === e.target.value);
    }
    let updatedValue = {};
    updatedValue[e.target.name] = newValue;
    this.setState(updatedValue);
  }
  generateResult(appUrl) {
    try {
      const {
        landingPage,
        campaignSource,
        campaignName,
        campaignMedium
      } = this.state;
      const base = appUrl + '/';
      const relativePath = landingPage?.path || '/';
      const url = new URL('.' + relativePath, base);
      if (campaignSource) {
        url.searchParams.set('utm_source', campaignSource);
      }
      if (campaignName) {
        url.searchParams.set('utm_campaign', campaignName);
      }
      if (campaignMedium) {
        url.searchParams.set('utm_medium', campaignMedium);
      }
      return url.toString();
    } catch (e) {
      return appUrl;
    }
  }
  render(_ref, _ref2) {
    let {
      data = {},
      pages,
      appUrl
    } = _ref;
    let {
      landingPage = {},
      copied,
      campaignSource,
      campaignMedium,
      campaignName
    } = _ref2;
    const {
      title,
      fields,
      ctas
    } = data;
    const result = this.generateResult(appUrl);
    let allRequiredFieldsFilled = !!campaignSource && !!campaignMedium && !!campaignName;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("form", {
      class: base_boltToolkit_campaignGenerator_sss__WEBPACK_IMPORTED_MODULE_3__["default"].generator,
      onSubmit: e => e.preventDefault()
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: base_boltToolkit_campaignGenerator_sss__WEBPACK_IMPORTED_MODULE_3__["default"].container
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h2", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_2__["default"].h2, base_boltToolkit_campaignGenerator_sss__WEBPACK_IMPORTED_MODULE_3__["default"].title)
    }, title), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: base_boltToolkit_campaignGenerator_sss__WEBPACK_IMPORTED_MODULE_3__["default"].fields
    }, (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.sortObjectByOrder)(fields).map(field => {
      const {
        id,
        label,
        placeholder
      } = field;
      let input = (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
        class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_2__["default"].p, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_2__["default"].bold, base_boltToolkit_campaignGenerator_sss__WEBPACK_IMPORTED_MODULE_3__["default"].input),
        name: id,
        placeholder: placeholder,
        onInput: this.updateResult
      });
      if (id === 'landingPage') {
        input = (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
          class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_2__["default"].p, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_2__["default"].bold, base_boltToolkit_campaignGenerator_sss__WEBPACK_IMPORTED_MODULE_3__["default"].input, base_boltToolkit_campaignGenerator_sss__WEBPACK_IMPORTED_MODULE_3__["default"].dropdown)
        }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("select", {
          ref: ref => this.pageSelect = ref,
          class: base_boltToolkit_campaignGenerator_sss__WEBPACK_IMPORTED_MODULE_3__["default"].select,
          name: id,
          onChange: this.updateResult
        }, pages.map(page => (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("option", {
          selected: page.path === '/' ? 'selected' : false,
          value: page.path
        }, this.props.copy[page.name] || page.name))), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
          class: base_boltToolkit_campaignGenerator_sss__WEBPACK_IMPORTED_MODULE_3__["default"].fakeSelect
        }, this.props.copy[landingPage.name] || landingPage.name));
      }
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
        class: base_boltToolkit_campaignGenerator_sss__WEBPACK_IMPORTED_MODULE_3__["default"].field
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
        class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_2__["default"].bold, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_2__["default"].p, base_boltToolkit_campaignGenerator_sss__WEBPACK_IMPORTED_MODULE_3__["default"].label, id !== 'landingPage' && base_boltToolkit_campaignGenerator_sss__WEBPACK_IMPORTED_MODULE_3__["default"].required)
      }, label), input);
    })), !allRequiredFieldsFilled && (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: base_boltToolkit_campaignGenerator_sss__WEBPACK_IMPORTED_MODULE_3__["default"].warning
    }, "Fill out all the required fields above and a tagged URL will be automatically generated for you below."), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_2__["default"].p, base_boltToolkit_campaignGenerator_sss__WEBPACK_IMPORTED_MODULE_3__["default"].result, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_2__["default"].bold),
      readonly: true,
      value: result
    }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: base_boltToolkit_campaignGenerator_sss__WEBPACK_IMPORTED_MODULE_3__["default"].ctas
    }, (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.sortObjectByOrder)(ctas).map(cta => {
      const trigger = () => {
        if (cta.type === 'visit') {
          window.open(result);
        } else if (cta.type === 'copy') {
          copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default()(result);
          this.setState({
            copied: true
          });
          this.copyTimeout = window.setTimeout(() => {
            this.setState({
              copied: false
            });
          }, 3000);
        }
      };
      let label = cta.name;
      if (copied && cta.type === 'copy') {
        label = (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
          class: base_boltToolkit_campaignGenerator_sss__WEBPACK_IMPORTED_MODULE_3__["default"].copyIcon
        });
      }
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
        onClick: trigger,
        class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_campaignGenerator_sss__WEBPACK_IMPORTED_MODULE_3__["default"].cta, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_2__["default"].bold, base_boltToolkit_boltToolkitApp_sss__WEBPACK_IMPORTED_MODULE_2__["default"].p, base_boltToolkit_campaignGenerator_sss__WEBPACK_IMPORTED_MODULE_3__["default"][cta.type], copied && base_boltToolkit_campaignGenerator_sss__WEBPACK_IMPORTED_MODULE_3__["default"].copied)
      }, label);
    }))));
  }
}

/***/ }),

/***/ "./static/src/base/boltToolkit/toolkitMenu.js":
/*!****************************************************!*\
  !*** ./static/src/base/boltToolkit/toolkitMenu.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TooklitMenu)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var utils_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/math */ "./static/src/utils/math.js");
/* harmony import */ var base_boltToolkit_toolkitMenu_sss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! base/boltToolkit/toolkitMenu.sss */ "./static/src/base/boltToolkit/toolkitMenu.sss");




const IconChart = (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 14 13"
}, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("path", {
  d: "M.61 6.252c.326 0 .589.261.587.588l-.012 3.417.012 2.172a.582.582 0 0 1-.587.587.6.6 0 0 1-.595-.594l-.007-1.285L0 11.134l.003-.935L0 9.673l.005-.003.01-2.823a.602.602 0 0 1 .5-.586zm6.587 6.177a.582.582 0 0 1-.587.587.6.6 0 0 1-.595-.594l-.011-1.957L6 10.463l.001-.666L6 9.673l.002-.001.013-6.458a.602.602 0 0 1 .5-.586l.095-.008a.583.583 0 0 1 .587.587c-.005 3.16-.01 5.31-.013 6.452l-.001.332.014 2.438zm6 0a.582.582 0 0 1-.587.587.6.6 0 0 1-.595-.594l-.014-2.599H12l.015-9.228A.602.602 0 0 1 12.61 0a.583.583 0 0 1 .587.588c-.006 5.107-.012 8.123-.015 9.048l-.001-.017.016 2.81z"
}));
const IconMaximize = (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 15 15"
}, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("path", {
  d: "M13.403 2.437 9.425 6.415a.59.59 0 0 1-.835-.005.59.59 0 0 1-.005-.835l3.978-3.978-2.75-.015A.598.598 0 0 1 9.22.988.582.582 0 0 1 9.807.4l4.173.025a.599.599 0 0 1 .594.595l.026 4.173a.585.585 0 0 1-.588.587.598.598 0 0 1-.594-.594l-.015-2.749zM2.87 12.88l3.977-3.977a.59.59 0 0 0-.005-.834.59.59 0 0 0-.835-.006L2.03 12.041l-.015-2.749a.6.6 0 0 0-.594-.594.583.583 0 0 0-.588.587l.024 4.175a.6.6 0 0 0 .594.594l4.174.025a.585.585 0 0 0 .587-.587.599.599 0 0 0-.594-.594l-2.749-.017z"
}));
const IconContact = (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 14 12"
}, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("path", {
  d: "M2.6 0C1.17 0 0 1.17 0 2.6v6.801c0 1.43 1.17 2.6 2.6 2.6h8.801c1.43 0 2.6-1.17 2.6-2.6V2.6c0-1.43-1.17-2.6-2.6-2.6zm0 1.199h8.801c.786 0 1.4.614 1.4 1.4V9.4c0 .786-.614 1.4-1.4 1.4H2.6c-.786 0-1.4-.614-1.4-1.4V2.599c0-.786.614-1.4 1.4-1.4z"
}), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("path", {
  d: "M6.576 7.667a.6.6 0 0 0 .848 0l4.243-4.243a.6.6 0 1 0-.848-.848L7 6.395 3.181 2.576a.6.6 0 1 0-.848.848z"
}));
const IconTicket = (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 14 12"
}, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("path", {
  d: "M5.391-.008a.6.6 0 0 0-.59.608v.6a.6.6 0 1 0 1.2 0V.6a.6.6 0 0 0-.61-.608zm0 2.199a.6.6 0 0 0-.59.61v1.065a.6.6 0 1 0 1.2 0V2.8a.6.6 0 0 0-.61-.609zm0 2.666a.6.6 0 0 0-.59.61v1.065a.6.6 0 1 0 1.2 0V5.466a.6.6 0 0 0-.61-.609zm0 2.668a.6.6 0 0 0-.59.607v1.066a.6.6 0 1 0 1.2 0V8.132a.6.6 0 0 0-.61-.607zm0 2.665a.6.6 0 0 0-.59.61v.599a.6.6 0 1 0 1.2 0v-.6a.6.6 0 0 0-.61-.609z"
}), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("path", {
  d: "M0 0v4.443l.541.053c.673.067 1.158.684 1.158 1.404S1.233 7.162.482 7.312L0 7.407V12h14V7.407l-.483-.095c-.75-.15-1.217-.692-1.217-1.412s.466-1.262 1.217-1.412L14 4.392V-.001zm1.199 1.199h11.6v2.393c-.961.41-1.701 1.226-1.701 2.309 0 1.082.74 1.896 1.701 2.307v2.594h-11.6V8.208c.96-.41 1.701-1.225 1.701-2.307 0-1.067-.722-1.928-1.701-2.309z"
}));
const IconMagnifyingGlass = (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 15 15"
}, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("path", {
  d: "M1.803 14.124a.583.583 0 0 1-.831.001.601.601 0 0 1-.052-.78l-.01-.021 1.22-1.211.775-.784.01.004 1.037-1.03a.6.6 0 0 1 .768-.06l.074.06a.583.583 0 0 1 0 .831l-1.872 1.859-.058.058-1.061 1.075z"
}), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("path", {
  d: "M12.494 2.447C10.352.305 6.86.305 4.716 2.447s-2.142 5.636 0 7.778 5.636 2.143 7.778 0 2.143-5.635 0-7.778zm-.847.848c1.684 1.684 1.684 4.398 0 6.083s-4.399 1.684-6.083 0-1.684-4.399 0-6.083a4.293 4.293 0 0 1 6.083 0z"
}));
const IconPlus = (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 15"
}, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("path", {
  d: "M7.99.39A.6.6 0 0 0 7.4 1v5.9H1.466a.6.6 0 1 0 0 1.199H7.4v5.9a.6.6 0 1 0 1.2 0v-5.9h5.933a.6.6 0 1 0 0-1.199H8.6V1a.6.6 0 0 0-.61-.61z"
}));
const icons = {
  analytics: IconChart,
  campaign: IconMaximize,
  contact: IconContact,
  screenings: IconTicket,
  seo: IconMagnifyingGlass,
  learnMore: IconPlus
};
const confettiColors = ['#34DC86', '#872CDE', '#F66163', '#BAE292'
// '#FFFFFF',
];
class TooklitMenu extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false,
      checkedBoxes: []
    };

    // TODO: store checked items
    // this.localStorageKey = `${props.id}-toolkit-actions`;

    this.onCheckBox = this.onCheckBox.bind(this);
    this.toggleNavOpen = this.toggleNavOpen.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  // componentDidMount() {
  // 	// Restore checked items
  // }

  toggleNavOpen() {
    const {
      navOpen
    } = this.state;
    this.setState({
      navOpen: !navOpen
    });
  }
  navigate(section) {
    this.props.scrollTo(section);
    this.toggleNavOpen();
  }
  celebrate(navItem) {
    for (let i = 0; i < 30; i++) {
      const c = document.createElement('div');
      c.classList.add(base_boltToolkit_toolkitMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].confetti);
      const x = Math.random();
      const y = Math.random();
      const baseA = Math.atan2(y - 1.5, x - .5);
      Object.entries({
        background: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        top: 4 + y * 16 + 'px',
        left: 4 + x * 16 + 'px',
        '--vel': (0,utils_math__WEBPACK_IMPORTED_MODULE_2__.lerp)(Math.random(), 40, 100),
        '--angle': baseA + (0,utils_math__WEBPACK_IMPORTED_MODULE_2__.lerp)(Math.random(), -Math.PI / 10, Math.PI / 10),
        '--rotX': (0,utils_math__WEBPACK_IMPORTED_MODULE_2__.lerp)(Math.random(), -1440, -720),
        '--rotZ': (0,utils_math__WEBPACK_IMPORTED_MODULE_2__.lerp)(Math.random(), 720, 1440)
      }).forEach(_ref => {
        let [prop, val] = _ref;
        return c.style.setProperty(prop, val);
      });
      c.addEventListener('animationend', () => c.remove());
      navItem.append(c);
    }
  }
  onCheckBox(e) {
    if (e.target.checked) {
      // this.celebrate(e.target.parentElement);
    }
  }
  renderNav(sections, checklist) {
    const {
      activeSection
    } = this.props;
    const {
      navOpen
    } = this.state;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_toolkitMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].nav, navOpen && base_boltToolkit_toolkitMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].open)
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h1", {
      class: base_boltToolkit_toolkitMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].title
    }, "Navigation"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("ul", {
      class: base_boltToolkit_toolkitMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].navItems
    }, (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.sortObjectByOrder)(sections).map(section => {
      if (!section.title) return;
      const isActive = activeSection === section.id;
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
        class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_toolkitMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].navItem, isActive && base_boltToolkit_toolkitMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].active),
        onClick: () => this.navigate(section.id)
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
        class: base_boltToolkit_toolkitMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].icon
      }, icons[section.id]), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("p", {
        class: base_boltToolkit_toolkitMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].name
      }, section.title)));
    })), this.renderChecklist(checklist));
  }
  renderChecklist(checklist) {
    const {
      checkedBoxes
    } = this.state;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: base_boltToolkit_toolkitMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].checklist
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h1", {
      class: base_boltToolkit_toolkitMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].title
    }, "Checklist"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("ul", {
      class: base_boltToolkit_toolkitMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].checklistItems
    }, (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.sortObjectByOrder)(checklist).map(item => {
      const isActive = checkedBoxes.indexOf(item.id) !== -1;
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("label", {
        class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_toolkitMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].navItem, isActive && base_boltToolkit_toolkitMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].active)
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", {
        type: "checkbox",
        name: item.id,
        onChange: this.onCheckBox
      }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
        class: base_boltToolkit_toolkitMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].item
      }, item.text)));
    })));
  }
  render(props, state) {
    const {
      sections,
      checklist
    } = props;
    const {
      navOpen
    } = state;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("header", {
      class: base_boltToolkit_toolkitMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].wrapper
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_toolkitMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].burger, navOpen && base_boltToolkit_toolkitMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].open),
      onClick: this.toggleNavOpen
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_toolkitMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].line, base_boltToolkit_toolkitMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].top)
    }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_toolkitMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].line, base_boltToolkit_toolkitMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].middle)
    }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(base_boltToolkit_toolkitMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].line, base_boltToolkit_toolkitMenu_sss__WEBPACK_IMPORTED_MODULE_3__["default"].bottom)
    })), this.renderNav(sections, checklist));
  }
}

/***/ }),

/***/ "./static/src/components/bolt/icons/powsterLogo.js":
/*!*********************************************************!*\
  !*** ./static/src/components/bolt/icons/powsterLogo.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");


const PowsterLogo = props => (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("svg", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 102 17"
}), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
  d: "M49.22 1.1l-3.46 10.29-3.46-10.3h-3.07l-3.46 10.3-3.46-10.3h-3.07l5 14.87h3.07l3.45-10.29 3.46 10.3h3.08l5-14.87zM18.14 8.53L15.66 1.1H5.2l-1 2.97h9.38l.94 2.8-6.54 2.05-2.6 4.34H4.2l2.4-7.15-2.78-.87-3.6 10.72h6.64L9.7 11.2zM74.09 1.1H61.8v2.97h4.6v11.9h3.08V4.06h4.6zm11.7 2.97V1.1H75.8V15.96h9.99V13h-6.92v-2.97h5.38V7.04h-5.38V4.07zm-28.1 3.7a7.8 7.8 0 012.83 1.33c.65.58 1 1.46 1 2.57 0 1.1-.51 2.53-1.37 3.21a5.26 5.26 0 01-3.38 1.05l-7.55.04 1-2.98h6.64c.4.03.79-.09 1.1-.33.3-.2.48-.55.49-.9a1.1 1.1 0 00-.48-.93c-.32-.22-.81-.41-1.73-.7l-4.57-1.44.85-2.54 5.18 1.63zm2.48-3.7h-6.95l1-2.97h5.95z"
}), (0,preact__WEBPACK_IMPORTED_MODULE_1__.h)("path", {
  d: "M21.59.93c-1.18 0-2.34.26-3.4.75l.95 2.88a4.87 4.87 0 016.53 1.6c1.36 2.17.64 5-1.6 6.32a4.88 4.88 0 01-6.55-1.5l-2.97.94a7.96 7.96 0 009.41 3.85 7.59 7.59 0 005.38-8.4A7.78 7.78 0 0021.58.94zm80.08 7.6L99.18 1.1H87.5v14.86h3.07v-3.92l5.58-1.76 1.91 5.7h3.06L98.9 9.4l2.76-.88zm-11.11.69V4.07h6.56l.94 2.8-7.5 2.35z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PowsterLogo);

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

/***/ "./static/src/base/boltToolkit/campaignGenerator.sss":
/*!***********************************************************!*\
  !*** ./static/src/base/boltToolkit/campaignGenerator.sss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"generator":"campaignGenerator__generator__Ll5F8","title":"campaignGenerator__title__gcnKp","field":"campaignGenerator__field__C5oja","label":"campaignGenerator__label__RZfm3","input":"campaignGenerator__input__XTZuH","select":"campaignGenerator__select__IgJXC","dropdown":"campaignGenerator__dropdown__mXDXh","fakeSelect":"campaignGenerator__fakeSelect__HswMi","warning":"campaignGenerator__warning__qb0_n","required":"campaignGenerator__required__OToXT","result":"campaignGenerator__result__YygJA","ctas":"campaignGenerator__ctas__Z3z9l","cta":"campaignGenerator__cta__aBlk_","visit":"campaignGenerator__visit__s7R5g","copy":"campaignGenerator__copy__Hl9sS","copyIcon":"campaignGenerator__copyIcon__mCrPQ","container":"campaignGenerator__container__CFJn2","fields":"campaignGenerator__fields__BEDFD"});

/***/ }),

/***/ "./static/src/base/boltToolkit/toolkitMenu.sss":
/*!*****************************************************!*\
  !*** ./static/src/base/boltToolkit/toolkitMenu.sss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"wrapper":"toolkitMenu__wrapper__AwH2F","burger":"toolkitMenu__burger__gyYeB","line":"toolkitMenu__line__b2GXs","top":"toolkitMenu__top__tvdj4","middle":"toolkitMenu__middle__GdeL2","bottom":"toolkitMenu__bottom__mUpZY","open":"toolkitMenu__open__VQBsk","nav":"toolkitMenu__nav__tzid1","title":"toolkitMenu__title__rV0gS","navItems":"toolkitMenu__navItems__sM9No","navItem":"toolkitMenu__navItem__PefHV","icon":"toolkitMenu__icon__ekyEZ","active":"toolkitMenu__active__YWdNU","checklistItems":"toolkitMenu__checklistItems__mzm2m","confetti":"toolkitMenu__confetti__OkljO","time":"toolkitMenu__time__XgJx0"});

/***/ }),

/***/ "./static/src_overrides/studios/netflix/base/boltToolkit/boltToolkitApp.sss":
/*!**********************************************************************************!*\
  !*** ./static/src_overrides/studios/netflix/base/boltToolkit/boltToolkitApp.sss ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"h1":"boltToolkitApp__h1__cvOPN","h2":"boltToolkitApp__h2__bIdHl","h3":"boltToolkitApp__h3__Jefm4","p":"boltToolkitApp__p__vwPFa","bold":"boltToolkitApp__bold__YFVdx","wrapper":"boltToolkitApp__wrapper__qGBhO","sectionIcon":"boltToolkitApp__sectionIcon__AKj4O","section":"boltToolkitApp__section__zCn17","title":"boltToolkitApp__title__dDDqg","intro":"boltToolkitApp__intro__wbOnE","share":"boltToolkitApp__share__OFhp4","shareImage":"boltToolkitApp__shareImage__P8z4Q","download":"boltToolkitApp__download__owQY9","icon":"boltToolkitApp__icon__y1CL4","campaign":"boltToolkitApp__campaign__hpI1V","steps":"boltToolkitApp__steps__z6hUg","step":"boltToolkitApp__step__iEGyc","seo":"boltToolkitApp__seo__lvJUR","tips":"boltToolkitApp__tips__YDvAD","tip":"boltToolkitApp__tip__eL8Ul","tipSection":"boltToolkitApp__tipSection__kyyWS","metadataConsiderations":"boltToolkitApp__metadataConsiderations__rcilj","tipHeader":"boltToolkitApp__tipHeader__rwJH_","monitorSearch":"boltToolkitApp__monitorSearch__g7aTM","backlink":"boltToolkitApp__backlink__YEAXN","tipIcon":"boltToolkitApp__tipIcon__EOAUS","tipDescription":"boltToolkitApp__tipDescription__treQg","tipCTA":"boltToolkitApp__tipCTA__N3_KB","metadata":"boltToolkitApp__metadata__gkEe8","analytics":"boltToolkitApp__analytics__RHfaK","sectionHeader":"boltToolkitApp__sectionHeader__Je08d","dashboard":"boltToolkitApp__dashboard__tV14R","child":"boltToolkitApp__child__rKcVr","contact":"boltToolkitApp__contact__GXBBT","offices":"boltToolkitApp__offices__O5dZe","office":"boltToolkitApp__office__QSUY6","email":"boltToolkitApp__email__vTbrm","number":"boltToolkitApp__number__n0lG7","learnMore":"boltToolkitApp__learnMore__JCP4J","item":"boltToolkitApp__item__j4qpL","itemIcon":"boltToolkitApp__itemIcon__HRoiH","footer":"boltToolkitApp__footer__bo3gO","links":"boltToolkitApp__links__aLrfe","powster":"boltToolkitApp__powster__fW1Qf","logo":"boltToolkitApp__logo__G83ex","copyright":"boltToolkitApp__copyright__FIxhv","content":"boltToolkitApp__content__Oun7d","note":"boltToolkitApp__note__Iqht4","description":"boltToolkitApp__description__rIt7L","dashboardWrapper":"boltToolkitApp__dashboardWrapper__Ua7zf","dashboardDescription":"boltToolkitApp__dashboardDescription__lTlGW","items":"boltToolkitApp__items__YPetD","link":"boltToolkitApp__link__fglLv"});

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************************************!*\
  !*** ./static/src/base/boltToolkit/boltToolkitDoc.js ***!
  \*******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var base_boltToolkit_boltToolkitApp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! base/boltToolkit/boltToolkitApp.js */ "./static/src/base/boltToolkit/boltToolkitApp.js");


const BoltToolkitDoc = _ref => {
  let {
    appProps,
    initialState,
    appData,
    relativeRoot,
    reload,
    ...rest
  } = _ref;
  let initialData = (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("script", {
    dangerouslySetInnerHTML: {
      __html: `
window.__INITIAL_STATE__ = JSON.parse('${JSON.stringify(initialState).replace(/[\u2028\u2029]/g, '').replace(/(['\\])/g, '\\$1')}');
window.__BUILD_DATE__ = ${Date.now()};`
    }
  });
  const title = initialState?.toolkitData?.title || `${appData?.meta?.title?.locale}: Powster Platform Toolkit`;
  const buildDate = Date.now();
  const favicon = appData?.doc?.metaTags?.favicon;
  const faviconIco = `${favicon?.ico || 'favicon.ico'}?v=${buildDate}`;
  const faviconPng = `${favicon?.png || 'favicon.png'}?v=${buildDate}`;
  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("html", null, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("head", null, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, title), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("meta", {
    charset: "UTF-8"
  }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("meta", {
    name: "viewport",
    content: "minimal-ui, initial-scale=1"
  }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("meta", {
    name: "robots",
    content: "noindex"
  }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("link", {
    rel: "stylesheet",
    href: "https://use.typekit.net/gsb3nxg.css"
  }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("link", {
    rel: "stylesheet",
    type: "text/css",
    href: `${relativeRoot}css/boltToolkit.css`
  }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("link", {
    rel: "shortcut icon",
    type: "image/png",
    href: faviconPng
  }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("link", {
    rel: "icon",
    type: "image/x-icon",
    href: faviconIco
  })), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("body", null, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
    id: "app"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(base_boltToolkit_boltToolkitApp_js__WEBPACK_IMPORTED_MODULE_1__["default"], appProps)), initialData, reload, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("script", {
    src: `${relativeRoot}js/boltToolkit.js`,
    charset: "utf-8"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoltToolkitDoc);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=boltToolkitDoc.js.map