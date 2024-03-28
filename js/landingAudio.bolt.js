"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkthundr"] = (typeof self !== 'undefined' ? self : this)["webpackChunkthundr"] || []).push([["landingAudio"],{

/***/ "./static/src/components/bolt/landingAudio/landingAudio.js":
/*!*****************************************************************!*\
  !*** ./static/src/components/bolt/landingAudio/landingAudio.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LandingAudio)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/utils */ "./static/src/utils/utils.js");
/* harmony import */ var components_bolt_landingAudio_landingAudio_sss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/bolt/landingAudio/landingAudio.sss */ "./static/src/components/bolt/landingAudio/landingAudio.sss");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/store */ "./static/src/store/store.js");


// import Sound from 'components/bolt/icons/sound';


const loadHowler = async () => {
  if (document.querySelector(`script[src*="howler.min.js"]`)) {
    return;
  }
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.onload = resolve;
    script.onerror = reject;
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js';
    script.type = 'module';
    document.body.appendChild(script);
  });
};
class LandingAudio extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.initAudio = this.initAudio.bind(this);
    this.play = this.togglePlaying.bind(this, false);
    this.pause = this.togglePlaying.bind(this, true);
    this.togglePlaying = this.togglePlaying.bind(this);
    this.checkIfAudioShouldPlay = this.checkIfAudioShouldPlay.bind(this);
    this.onVidOverlayOpen = this.onVidOverlayOpen.bind(this);
    this.onVidOverlayClose = this.onVidOverlayClose.bind(this);
    this.onEmbeddedVideoPlay = this.onEmbeddedVideoPlay.bind(this);
    this.onEmbeddedVideoPause = this.onEmbeddedVideoPause.bind(this);
    this.state = {
      userMuted: !props.data.autoplay,
      showAudio: false,
      paused: true
    };
  }
  componentDidMount() {
    store_store__WEBPACK_IMPORTED_MODULE_3__["default"].on('SET_ACTIVE_PAGE', this.checkIfAudioShouldPlay);
    store_store__WEBPACK_IMPORTED_MODULE_3__["default"].on('OPEN_VIDEO_OVERLAY', this.onVidOverlayOpen);
    store_store__WEBPACK_IMPORTED_MODULE_3__["default"].on('CLOSE_VIDEO_OVERLAY', this.onVidOverlayClose);
    store_store__WEBPACK_IMPORTED_MODULE_3__["default"].on('EMBEDDED_VIDEO_PLAY', this.onEmbeddedVideoPlay);
    store_store__WEBPACK_IMPORTED_MODULE_3__["default"].on('EMBEDDED_VIDEO_PAUSE', this.onEmbeddedVideoPause);
    if (typeof window !== 'undefined') {
      this.checkIfAudioShouldPlay();
    }
  }
  componentWillUnmount() {
    store_store__WEBPACK_IMPORTED_MODULE_3__["default"].off('SET_ACTIVE_PAGE', this.checkIfAudioShouldPlay);
    store_store__WEBPACK_IMPORTED_MODULE_3__["default"].off('OPEN_VIDEO_OVERLAY', this.onVidOverlayOpen);
    store_store__WEBPACK_IMPORTED_MODULE_3__["default"].off('CLOSE_VIDEO_OVERLAY', this.onVidOverlayClose);
    store_store__WEBPACK_IMPORTED_MODULE_3__["default"].off('EMBEDDED_VIDEO_PLAY', this.onEmbeddedVideoPlay);
    store_store__WEBPACK_IMPORTED_MODULE_3__["default"].off('EMBEDDED_VIDEO_PAUSE', this.onEmbeddedVideoPause);
    if (this.audio) {
      this.audio.unload();
    }
  }
  async checkIfAudioShouldPlay(activePage) {
    const {
      userMuted
    } = this.state;
    activePage = activePage || this.props?.store?.activePage;
    let inclusions = this.props?.data?.inclusions || '';
    if (inclusions) {
      inclusions = inclusions.split(',').map(page => page.trim());
    }
    if (!inclusions.length || inclusions.includes(activePage)) {
      if (!this.audio) {
        await this.initAudio();
      }
      if (this.audio && !this.audio.playing() && !userMuted) {
        this.audio.play();
      }
      this.setState({
        showAudio: true
      });
    } else {
      this.stopAndHideAudio();
    }
  }
  onVidOverlayOpen() {
    this.stopAndHideAudio(true);
  }
  onVidOverlayClose() {
    this.checkIfAudioShouldPlay();
  }
  onEmbeddedVideoPlay() {
    this.stopAndHideAudio(false);
  }
  onEmbeddedVideoPause() {
    this.checkIfAudioShouldPlay();
  }
  async initAudio() {
    await loadHowler();
    const {
      src,
      loop,
      autoplay
    } = this.props.data;
    this.audio = new window.Howl({
      src: [src],
      loop,
      autoplay: autoplay && !this.state.userMuted,
      onpause: () => {
        this.setState({
          paused: true
        });
      },
      onended: () => {
        this.setState({
          paused: true
        });
      },
      onerror: () => {
        this.setState({
          paused: true
        });
      },
      onplay: () => {
        this.setState({
          paused: false
        });
      }
    });
  }
  stopAndHideAudio() {
    let restartAudio = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    if (this.audio && this.audio.playing() && !this.state.userMuted) {
      this.audio.pause();
      if (restartAudio) {
        this.audio.seek(0);
      }
    }
    this.setState({
      showAudio: false
    });
  }
  togglePlaying(muted) {
    const {
      userMuted
    } = this.state;
    if (typeof muted !== 'boolean') {
      muted = !userMuted;
    }
    this.audio?.[muted ? 'pause' : 'play']();
    this.setState({
      userMuted: muted
    });
  }
  render() {
    const {
      showAudio,
      userMuted
    } = this.state;
    const {
      offsetTop
    } = this.props;
    const {
      position
    } = this.props.data;
    if (!showAudio) {
      return;
    }
    const wrapperStyle = {};
    if (offsetTop && offsetTop > 0 && position.match(/top/)) {
      wrapperStyle.top = `${64 + offsetTop}px`;
    }
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      onClick: this.togglePlaying,
      class: (0,utils_utils__WEBPACK_IMPORTED_MODULE_1__.joinClasses)(components_bolt_landingAudio_landingAudio_sss__WEBPACK_IMPORTED_MODULE_2__["default"].wrapper, userMuted && components_bolt_landingAudio_landingAudio_sss__WEBPACK_IMPORTED_MODULE_2__["default"].muted, components_bolt_landingAudio_landingAudio_sss__WEBPACK_IMPORTED_MODULE_2__["default"][position]),
      style: wrapperStyle
    }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
      class: components_bolt_landingAudio_landingAudio_sss__WEBPACK_IMPORTED_MODULE_2__["default"].icon
    }));
  }
}

/***/ }),

/***/ "./static/src/components/bolt/landingAudio/landingAudio.sss":
/*!******************************************************************!*\
  !*** ./static/src/components/bolt/landingAudio/landingAudio.sss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"wrapper":"landingAudio__wrapper__ciaSv","icon":"landingAudio__icon__TAEep","muted":"landingAudio__muted__fO6Qp","top-left":"landingAudio__top-left__VXEaM","top-right":"landingAudio__top-right__MHEIN","bottom-left":"landingAudio__bottom-left__Gdf27","bottom-right":"landingAudio__bottom-right__YLL_N"});

/***/ })

}]);
//# sourceMappingURL=landingAudio.bolt.js.map?v=14b790422c85126b5166