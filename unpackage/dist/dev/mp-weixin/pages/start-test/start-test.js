(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/start-test/start-test"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!F:\\AD Minder\\pages\\start-test\\start-test.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!F:/AD Minder/pages/start-test/start-test.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;














































































var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue/index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  data: function data() {
    return {
      myCurId: 0,

      indicatorstyle: "height: ".concat(Math.round(uni.getSystemInfoSync().screenWidth / (750 / 100)), "px;"),
      pSrc: __webpack_require__(/*! ../../static/videoCover.png */ "F:\\AD Minder\\static\\videoCover.png"),
      source: '',

      myExes: [],

      animationData: {},
      timer: '',

      value: ["白天", 0, 0],
      sections: '',
      hours: 0,
      minutes: 0,
      needPV: false,
      testName: '',
      testDiff: 0,
      ansArray: [],
      subArray: [],
      curId: 0,
      matrix: [],
      hasExeDes: false,
      lastState: 0,
      curState: 0,
      correctIdx: 0,
      exeDes: '',
      myQuestion: '',

      totScore: 0,
      curPoints: 0,
      totNum: 0,
      curNum: 0,
      mySelections: [] };

  },
  methods: {
    bindChange: function bindChange(e) {
      var val = e.detail.value;
      this.sections = val[0] == 0 ? "上午" : "下午";
      this.hours = val[1];
      this.minutes = val[2];
    },
    videoErrorCallback: function videoErrorCallback(e) {
      uni.showModal({
        content: e.target.errMsg,
        showCancel: false });

    },
    type2SelectBlock: function type2SelectBlock(index) {
      if (this.hasExeDes == true || this.curState != 0) return;
      _vue.default.set(this.subArray, index, !this.subArray[index]);
      _vue.default.set(this.matrix, index, this.matrix[index] == "my-testing-type2-bgBlue" ? "my-testing-type2-bgWhite" : "my-testing-type2-bgBlue");
    },
    choseNext: function choseNext() {
      clearInterval(this.timer);
      var animation = uni.createAnimation({
        duration: 500,
        timingFunction: "ease" });

      this.animation = animation;
      this.animation.opacity(0 + this.curNum * 0.000001).step();
      if (this.curNum != this.totNum) {
        this.animation.opacity(1 - this.curNum * 0.000001).step();
      }
      this.animationData = this.animation.export();
      this.timer = setInterval(function () {
        clearInterval(this.timer);
        if (this.curNum == this.totNum) {
          this.showScore();
          return;
        }
        this.curState = 0;
        this.nextExe();
      }.bind(this), 500);

    },
    showScore: function showScore() {
      uni.redirectTo({
        url: "../show-score/show-score?myScore=" + this.totScore });

    },
    choseIndex: function choseIndex(index) {
      console.log(index);
      this.curNum++;
      if (index == -2) {
        var flag = true;
        for (var i = 0; i < this.subArray.length; i++) {
          if (this.subArray[i] == this.ansArray[i]) continue;else
          {
            flag = false;
            if (this.ansArray[i] == true)
            _vue.default.set(this.matrix, i, "my-testing-type2-bgnBlue");else

            _vue.default.set(this.matrix, i, "my-testing-type2-bgRed");
          }
        }
        if (flag == true) {
          this.playMusic();
          this.curState = 1;
          this.totScore += this.curPoints;
        } else
        this.curState = -1;
        console.log(this.curState);
      } else
      {
        if (index == this.correctIdx) {
          this.curState = 1;
          this.totScore += this.curPoints;
          this.playMusic();
        } else
        {
          this.curState = index * -1 - 1;
        }
      }
      this.timer = setInterval(this.choseNext, 2000);
    },
    playMusic: function playMusic() {
      var innerAudioContext = uni.createInnerAudioContext();
      innerAudioContext.autoplay = true;
      innerAudioContext.src = '../../static/right.mp3';
    },
    nextExe: function nextExe() {
      var chosen = this.myCurId++;
      var ins = this.myExes[chosen];
      this.hasExeDes = ins.hasExeDes;
      this.curState = 0;
      if (this.hasExeDes) this.exeDes = ins.exeDes;
      this.testName = this.allTests[ins.type].name;
      this.testDiff = ins.diff;
      this.curId = ins.exeId;
      if (ins.type == 0) {
        this.source = ins.aSrc;
        var array = new Array(ins.selections.length),rev = new Array(ins.selections.length);
        for (var i = 0; i < ins.selections.length; i++) {
          array[i] = Math.floor(Math.random() * 1024);
          rev[i] = 0;
        }
        this.mySelections = new Array(ins.selections.length);
        for (var i = 0; i < ins.selections.length; i++) {
          for (var j = 0; j < ins.selections.length; j++) {
            if (i == j) continue;
            if (array[j] < array[i]) {
              rev[i]++;
            } else
            if (array[j] == array[i]) {
              if (j < i) rev[i]++;
            }
          }
          this.mySelections[rev[i]] = ins.selections[i];
        }
        this.correctIdx = rev[ins.answer];
        this.source = ins.aSrc;
      } else
      if (ins.type == 1) {
        this.source = ins.aSrc;
        var tmpSelections = new Array(4);
        tmpSelections[0] = ins.answer;
        for (var i = 1; i < 4; i++) {
          var tmp = Math.floor(Math.random() * 24);
          var flag = true;
          for (var j = 0; j < i; j++) {
            if (tmp == tmpSelections[j]) {
              flag = false;
              break;
            }
          }
          if (!flag) i--;else
          tmpSelections[i] = tmp;
        }
        var array = new Array(4),rev = new Array(4);
        for (var i = 0; i < 4; i++) {
          array[i] = Math.floor(Math.random() * 1024);
          rev[i] = 0;
        }
        for (var i = 0; i < 4; i++) {
          for (var j = 0; j < 4; j++) {
            if (i == j) continue;
            if (array[j] < array[i]) {
              rev[i]++;
            } else
            if (array[j] == array[i]) {
              if (j < i) rev[i]++;
            }
          }
          this.mySelections[rev[i]] = tmpSelections[i];
        }
        this.correctIdx = rev[0];
      } else
      if (ins.type == 3) {
        this.myQuestion = ins.question;
        console.log(ins.selections.length);
        var array = new Array(ins.selections.length),rev = new Array(ins.selections.length);
        for (var i = 0; i < ins.selections.length; i++) {
          array[i] = Math.floor(Math.random() * 1024);
          rev[i] = 0;
        }
        this.mySelections = new Array(ins.selections.length);
        for (var i = 0; i < ins.selections.length; i++) {
          for (var j = 0; j < ins.selections.length; j++) {
            if (i == j) continue;
            if (array[j] < array[i]) {
              rev[i]++;
            } else
            if (array[j] == array[i]) {
              if (j < i) rev[i]++;
            }
          }
          this.mySelections[rev[i]] = ins.selections[i];
        }
        this.correctIdx = rev[ins.answer];
        this.source = ins.aSrc;
      } else
      if (ins.type == 2) {
        var sz = (ins.diff + 1) * (ins.diff + 1),randNum = 0;
        if (ins.diff == 1) randNum = 2;else
        if (ins.diff == 2) randNum = 4;else
        if (ins.diff == 3) randNum = 7;
        var array = new Array(sz);
        for (var i = 0; i < sz; i++) {array[i] = false;}
        for (var i = 0; i < randNum; i++) {
          array[Math.floor(Math.random() * (sz - 1))] = true;
        }
        this.ansArray = array;
        this.matrix = new Array(sz);
        var ans = "";
        for (var i = 0; i < sz; i++) {
          if (array[i] == true) {
            this.matrix[i] = "my-testing-type2-bgBlue";
            ans += i;
          } else
          {
            this.matrix[i] = "my-testing-type2-bgWhite";
          }
        }
        console.log('ans=' + ans);
        var cor = Math.floor(Math.random() * 3);
        /*this.mySelections=new Array(4);
                                                 this.mySelections[cor]=ans;
                                                 this.correctIdx=cor;
                                                 for(var i=0;i<4;i++) {
                                                 	if(i==cor) continue;
                                                 	var txt="";
                                                 	for(var j=0;j<randNum;j++) {
                                                 		txt+=Math.floor(Math.random()*(sz-1));
                                                 	}
                                                 	if(txt==ans) i--;
                                                 	else this.mySelections[i]=txt;
                                                 }*/

        this.subArray = new Array(sz);
        for (var i = 0; i < sz; i++) {this.subArray[i] = false;}
        console.log(this.matrix.length);
        for (var i = 0; i < this.matrix.length; i++) {
          console.log(this.matrix[i]);}
        console.log(cor);
        /*for(var i=0;i<4;i++)
                          	console.log(this.mySelections[i]);*/
        this.timer = setInterval(this.type2FadeIO, 4000);
      }
    },
    type3FadeIO: function type3FadeIO() {
      console.log("Video ended");
      console.log(this.myQuestion);
      var animation = uni.createAnimation({
        duration: 300,
        timingFunction: "ease" });

      this.animation = animation;
      this.animation.opacity(0 + this.curNum * 0.00000001).step();
      this.animation.opacity(1 - this.curNum * 0.00000001).step();
      this.animationData = this.animation.export();
      this.timer = setInterval(function () {
        clearInterval(this.timer);
        this.hasExeDes = false;
      }.bind(this), 300);
    },
    type2FadeIO: function type2FadeIO() {
      clearInterval(this.timer);
      var animation = uni.createAnimation({
        duration: 250,
        timingFunction: "ease" });

      this.animation = animation;
      this.animation.opacity(0 + this.curNum * 0.0000001).step();
      this.animation.opacity(1 - this.curNum * 0.0000001).step();
      this.animationData = this.animation.export();
      this.timer = setInterval(function () {
        clearInterval(this.timer);
        for (var i = 0; i < this.matrix.length; i++) {
          _vue.default.set(this.matrix, i, "my-testing-type2-bgWhite");
        }
        this.hasExeDes = false;
      }.bind(this), 250);
    } },

  onNavigationBarButtonTap: function onNavigationBarButtonTap(ret) {
    if (ret.index == 0) {
      console.log("!");
      uni.showModal({
        title: "确认退出？",
        content: "当前进度将不被保存",
        confirmColor: "#FF3333",
        success: function success(res) {
          if (res.confirm) {
            uni.navigateBack({
              delta: 1 });

          } else
          if (res.cancel) {
            console.log("Cancel");
          }
        } });

    }
  },
  onLoad: function onLoad() {
    console.log(this.allExe.length);
    for (var i = 0; i < this.chosenId.length; i++) {
      console.log(i + "" + this.chosenId[i]);}
    for (var i = 0; i < this.allExe.length; i++) {
      if (this.chosenId[this.allExe[i].type] == true) {
        //console.log(i+""+this.chosenId[this.allExe[i].type]);
        this.myExes = this.myExes.concat(this.allExe[i]);
        console.log(this.myExes.length);
      }
    }
    for (var i = 0; i < this.myExes.length; i++) {
      this.myExes[i].used = false;
    }
    var array = new Array(this.myExes.length),rev = new Array(this.myExes.length);
    for (var i = 0; i < this.myExes.length; i++) {
      array[i] = Math.floor(Math.random() * 1024);
      rev[i] = 0;
    }
    var tarArr = new Array(this.myExes.length);
    for (var i = 0; i < this.myExes.length; i++) {
      for (var j = 0; j < this.myExes.length; j++) {
        if (i == j) continue;
        if (array[j] < array[i]) {
          rev[i]++;
        } else
        if (array[j] == array[i]) {
          if (j < i) rev[i]++;
        }
      }
      tarArr[rev[i]] = this.myExes[i];
    }
    this.myExes = tarArr;
    this.totScore = 0;
    this.totNum = this.myExes.length;
    this.curPoints = 100 / this.myExes.length;
    this.myAllTestList = this.allTests;
    this.nextExe();
  },
  onShow: function onShow() {
    this.testClosed = false;
  },
  onUnload: function onUnload() {
    clearInterval(this.timer);
    this.testClosed = true;
  },
  onReady: function onReady() {
    this.videoContext = uni.createVideoContext("myVideo");
    console.log(this.curId);
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!F:\\AD Minder\\pages\\start-test\\start-test.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!F:/AD Minder/pages/start-test/start-test.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!F:\\AD Minder\\pages\\start-test\\start-test.vue?vue&type=template&id=7cb21e64&style=background-color%3A%20%23FFFFFF%3B&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!F:/AD Minder/pages/start-test/start-test.vue?vue&type=template&id=7cb21e64&style=background-color%3A%20%23FFFFFF%3B& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { staticStyle: { "background-color": "#FFFFFF" } }, [
    _c("view", { staticClass: "my-testing-head" }, [
      _c("view", { staticClass: "my-testing-bar" }, [
        _c(
          "view",
          { staticClass: "my-testing-progress-pd" },
          [
            _c("progress", {
              attrs: {
                percent: (_vm.curNum / _vm.totNum) * 100,
                "stroke-width": "4",
                active: "true",
                "active-mode": "forwards",
                activeColor: "white",
                "background-color": "#8bc34a"
              }
            })
          ],
          1
        )
      ]),
      _c(
        "view",
        { staticClass: "my-testing-content-header my-testing-content" },
        [_vm._v(_vm._s(_vm.testName) + " · 难度" + _vm._s(_vm.testDiff))]
      ),
      _c(
        "view",
        {
          staticClass: "has-mgb-0",
          staticStyle: { width: "100%" },
          attrs: { animation: _vm.animationData }
        },
        [
          _vm.curId >= 1 && _vm.curId <= 199
            ? _c("view", { staticClass: "my-image-wrapper" }, [
                _c("image", {
                  staticStyle: { width: "100%" },
                  attrs: { src: _vm.source }
                })
              ])
            : _vm._e(),
          _vm.curId >= 3001 && _vm.curId <= 3999
            ? _c(
                "view",
                { staticClass: "my-audio-wrapper" },
                [
                  _vm.hasExeDes == true
                    ? _c(
                        "block",
                        [
                          _c("audio", {
                            attrs: {
                              src: _vm.source,
                              author: "来源网络",
                              name: "题目音频",
                              poster: _vm.pSrc,
                              controls: "",
                              eventid: "a7636fd6-0"
                            },
                            on: {
                              ended: function($event) {
                                _vm.type3FadeIO()
                              }
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm.hasExeDes == false
                    ? _c(
                        "view",
                        {
                          staticClass: "my-testing-audio-question",
                          staticStyle: {
                            "text-align": "center",
                            "font-size": "50rpx"
                          }
                        },
                        [_vm._v(_vm._s(_vm.myQuestion))]
                      )
                    : _vm._e()
                ],
                1
              )
            : _vm._e(),
          _vm.curId >= 301 && _vm.curId <= 399
            ? _c(
                "view",
                { staticClass: "my-video-wrapper" },
                [
                  _vm.hasExeDes == true
                    ? _c("block", [
                        _c("video", {
                          attrs: {
                            id: "myVideo",
                            src: _vm.source,
                            autoplay: "true",
                            objectFit: "cover",
                            eventid: "a7636fd6-1"
                          },
                          on: {
                            error: _vm.videoErrorCallback,
                            ended: function($event) {
                              _vm.type3FadeIO()
                            }
                          }
                        })
                      ])
                    : _vm._e(),
                  _vm.hasExeDes == false
                    ? _c(
                        "view",
                        {
                          staticClass: "my-testing-question",
                          staticStyle: {
                            "text-align": "center",
                            "font-size": "50rpx"
                          }
                        },
                        [_vm._v(_vm._s(_vm.myQuestion))]
                      )
                    : _vm._e()
                ],
                1
              )
            : _vm._e(),
          _vm.curId >= 201 && _vm.curId <= 203
            ? _c("view", { staticClass: "my-grid-wrapper" }, [
                _vm.curId == 203
                  ? _c(
                      "view",
                      { staticClass: "uni-grid-16" },
                      _vm._l(16, function(item, index) {
                        return _c("view", {
                          key: index,
                          staticClass: "uni-grid-16-item uni-grid-item-hover",
                          class: _vm.matrix[index],
                          staticStyle: { "text-align": "center" },
                          attrs: { eventid: "a7636fd6-2-" + index },
                          on: {
                            tap: function($event) {
                              _vm.type2SelectBlock(index)
                            }
                          }
                        })
                      })
                    )
                  : _vm._e(),
                _vm.curId == 202
                  ? _c(
                      "view",
                      { staticClass: "uni-grid-9" },
                      _vm._l(9, function(item, index1) {
                        return _c("view", {
                          key: index1,
                          staticClass: "uni-grid-9-item uni-grid-item-hover",
                          class: _vm.matrix[index1],
                          staticStyle: { "text-align": "center" },
                          attrs: { eventid: "a7636fd6-3-" + index1 },
                          on: {
                            tap: function($event) {
                              _vm.type2SelectBlock(index1)
                            }
                          }
                        })
                      })
                    )
                  : _vm._e(),
                _vm.curId == 201
                  ? _c(
                      "view",
                      { staticClass: "uni-grid-4" },
                      _vm._l(4, function(item, index2) {
                        return _c("view", {
                          key: index2,
                          staticClass: "uni-grid-4-item uni-grid-item-hover",
                          class: _vm.matrix[index2],
                          staticStyle: { "text-align": "center" },
                          attrs: { eventid: "a7636fd6-4-" + index2 },
                          on: {
                            tap: function($event) {
                              _vm.type2SelectBlock(index2)
                            }
                          }
                        })
                      })
                    )
                  : _vm._e()
              ])
            : _vm._e()
        ]
      )
    ]),
    _c(
      "view",
      {
        staticClass: "my-testing-button-area has-mgt-35 uni-padding-wrap",
        staticStyle: { "background-color": "#FFFFFF" },
        attrs: { animation: _vm.animationData }
      },
      [
        _c(
          "block",
          [
            _vm._l(_vm.mySelections, function(item, index3) {
              return !(_vm.curId >= 201 && _vm.curId <= 203) &&
                _vm.hasExeDes == false
                ? _c(
                    "view",
                    { key: index3 },
                    [
                      _vm.curState == 0
                        ? _c(
                            "button",
                            {
                              attrs: {
                                type: "default",
                                eventid: "a7636fd6-5-" + index3
                              },
                              on: {
                                tap: function($event) {
                                  _vm.choseIndex(index3)
                                }
                              }
                            },
                            [_vm._v(_vm._s(item))]
                          )
                        : _vm.curState == 1 && _vm.correctIdx == index3
                        ? _c("button", { attrs: { type: "primary" } }, [
                            _vm._v(_vm._s(item))
                          ])
                        : _vm.curState == 1 && _vm.correctIdx != index3
                        ? _c("button", { attrs: { disabled: "true" } }, [
                            _vm._v(_vm._s(item))
                          ])
                        : _vm.curState < 0 && _vm.correctIdx == index3
                        ? _c("button", { attrs: { type: "primary" } }, [
                            _vm._v(_vm._s(item))
                          ])
                        : _vm.curState < 0 && -1 * _vm.curState + -1 == index3
                        ? _c(
                            "button",
                            { attrs: { type: "warn", disabled: "true" } },
                            [_vm._v(_vm._s(item))]
                          )
                        : _c("button", { attrs: { disabled: "true" } }, [
                            _vm._v(_vm._s(item))
                          ])
                    ],
                    1
                  )
                : _vm._e()
            }),
            _vm.curId >= 201 && _vm.curId <= 203 && _vm.hasExeDes == false
              ? _c(
                  "view",
                  { staticClass: "my-testing-button-area my-mgt-62" },
                  [
                    _vm.curState == 0
                      ? _c(
                          "button",
                          {
                            attrs: { type: "default", eventid: "a7636fd6-6" },
                            on: {
                              tap: function($event) {
                                _vm.choseIndex(-2)
                              }
                            }
                          },
                          [_vm._v("确定")]
                        )
                      : _vm.curState == 1
                      ? _c("button", { attrs: { type: "primary" } }, [
                          _vm._v("确定")
                        ])
                      : _vm.curState == -1
                      ? _c(
                          "button",
                          { attrs: { type: "warn", disabled: "true" } },
                          [_vm._v("确定")]
                        )
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e(),
            _vm.hasExeDes == true
              ? _c(
                  "view",
                  {
                    staticClass: "has-pdlr-20",
                    staticStyle: {
                      "vertical-align": "middle",
                      "text-align": "center",
                      "font-size": "50rpx",
                      color: "#576B95 !important"
                    },
                    attrs: { animation: _vm.animationData }
                  },
                  [_vm._v(_vm._s(_vm.exeDes))]
                )
              : _vm._e(),
            _vm.hasExeDes == true &&
            ((_vm.curId >= 301 && _vm.curId <= 399) ||
              (_vm.curId >= 3001 && _vm.curId <= 3999))
              ? _c("image", {
                  staticClass: "has-mgtb-25",
                  staticStyle: { "margin-left": "20rpx", height: "250rpx" },
                  attrs: {
                    animation: _vm.animationData,
                    src: "../../static/this.gif"
                  }
                })
              : _vm._e()
          ],
          2
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "F:\\AD Minder\\main.js?{\"page\":\"pages%2Fstart-test%2Fstart-test\"}":
/*!***********************************************************************!*\
  !*** F:/AD Minder/main.js?{"page":"pages%2Fstart-test%2Fstart-test"} ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "F:\\AD Minder\\pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _startTest = _interopRequireDefault(__webpack_require__(/*! ./pages/start-test/start-test.vue */ "F:\\AD Minder\\pages\\start-test\\start-test.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_startTest.default));

/***/ }),

/***/ "F:\\AD Minder\\pages\\start-test\\start-test.vue":
/*!****************************************************!*\
  !*** F:/AD Minder/pages/start-test/start-test.vue ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _start_test_vue_vue_type_template_id_7cb21e64_style_background_color_3A_20_23FFFFFF_3B___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-test.vue?vue&type=template&id=7cb21e64&style=background-color%3A%20%23FFFFFF%3B& */ "F:\\AD Minder\\pages\\start-test\\start-test.vue?vue&type=template&id=7cb21e64&style=background-color%3A%20%23FFFFFF%3B&");
/* harmony import */ var _start_test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start-test.vue?vue&type=script&lang=js& */ "F:\\AD Minder\\pages\\start-test\\start-test.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _start_test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _start_test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _start_test_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start-test.vue?vue&type=style&index=0&lang=css& */ "F:\\AD Minder\\pages\\start-test\\start-test.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _start_test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _start_test_vue_vue_type_template_id_7cb21e64_style_background_color_3A_20_23FFFFFF_3B___WEBPACK_IMPORTED_MODULE_0__["render"],
  _start_test_vue_vue_type_template_id_7cb21e64_style_background_color_3A_20_23FFFFFF_3B___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "F:/AD Minder/pages/start-test/start-test.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "F:\\AD Minder\\pages\\start-test\\start-test.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** F:/AD Minder/pages/start-test/start-test.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_start_test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./start-test.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!F:\\AD Minder\\pages\\start-test\\start-test.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_start_test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_start_test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_start_test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_start_test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_start_test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "F:\\AD Minder\\pages\\start-test\\start-test.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** F:/AD Minder/pages/start-test/start-test.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_start_test_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./start-test.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!F:\\AD Minder\\pages\\start-test\\start-test.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_start_test_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_start_test_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_start_test_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_start_test_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_start_test_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "F:\\AD Minder\\pages\\start-test\\start-test.vue?vue&type=template&id=7cb21e64&style=background-color%3A%20%23FFFFFF%3B&":
/*!****************************************************************************************************************************!*\
  !*** F:/AD Minder/pages/start-test/start-test.vue?vue&type=template&id=7cb21e64&style=background-color%3A%20%23FFFFFF%3B& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_start_test_vue_vue_type_template_id_7cb21e64_style_background_color_3A_20_23FFFFFF_3B___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./start-test.vue?vue&type=template&id=7cb21e64&style=background-color%3A%20%23FFFFFF%3B& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!F:\\AD Minder\\pages\\start-test\\start-test.vue?vue&type=template&id=7cb21e64&style=background-color%3A%20%23FFFFFF%3B&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_start_test_vue_vue_type_template_id_7cb21e64_style_background_color_3A_20_23FFFFFF_3B___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_start_test_vue_vue_type_template_id_7cb21e64_style_background_color_3A_20_23FFFFFF_3B___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "F:\\AD Minder\\static\\videoCover.png":
/*!******************************************!*\
  !*** F:/AD Minder/static/videoCover.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })

},[["F:\\AD Minder\\main.js?{\"page\":\"pages%2Fstart-test%2Fstart-test\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/start-test/start-test.js.map