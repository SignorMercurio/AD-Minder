(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chose-test/chose-test"],{"0285":function(t,e,s){"use strict";var n=s("13dc"),a=s.n(n);a.a},"0fd3":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content"},[s("view",{staticClass:"my-common-my uni-padding-wrap"},[s("view",{staticClass:"page-section-spacing"},t._l(t.myAllTestList,function(e,n){return s("view",{key:n,staticClass:"uni-card my-common-mb my-card-select-tap",class:[t.bgColor[n%4],{"my-card-selected":1==t.myIdList[n]}],attrs:{eventid:"3a2c5756-0-"+n},on:{tap:function(e){t.changeSelect(n)}}},[s("view",{staticClass:"uni-card-content"},[s("view",{staticClass:"uni-card-content-inner"},[s("view",{staticClass:"my-card-des"},[s("text",[t._v(t._s(e.name))]),0==t.myIdList[n]?s("text",{staticClass:"my-card-navigat-add"},[t._v("+")]):s("text",{staticClass:"my-card-navigat-add my-card-selected-text",staticStyle:{"margin-left":"520rpx"}},[t._v("✓")])])])])])}))]),0==t.mySelectedNum?s("view",{staticClass:"my-footer has-bg-red",attrs:{eventid:"3a2c5756-2"},on:{tap:function(e){t.confirmTest()}}},[t._v("确认")]):s("view",{staticClass:"my-footer has-bg-red",attrs:{eventid:"3a2c5756-1"},on:{tap:function(e){t.confirmTest()}}},[t._v("确认"+t._s("("+t.mySelectedNum+")"))])])},a=[];s.d(e,"a",function(){return n}),s.d(e,"b",function(){return a})},"13dc":function(t,e,s){},b546:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(s("f3d3"));function a(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{mySelectedNum:0,myAllTestList:[],myIdList:[],bgColor:["my-bg-blue","my-bg-green","my-bg-bg","my-bg-green"]}},methods:{changeSelect:function(t){n.default.set(this.myIdList,t,!this.myIdList[t]),1==this.myIdList[t]?this.mySelectedNum++:this.mySelectedNum--},confirmTest:function(){n.default.prototype.chosenId=this.myIdList,n.default.prototype.selectedNum=this.mySelectedNum,console.log(this.selectedNum),t.navigateBack({delta:1})}},onLoad:function(){this.myAllTestList=this.allTests,this.myIdList=this.chosenId,this.mySelectedNum=this.selectedNum,console.log(this.selectedNum)},onUnload:function(){n.default.prototype.chosenId=this.myIdList,n.default.prototype.selectedNum=this.mySelectedNum}};e.default=c}).call(this,s("649d")["default"])},b816:function(t,e,s){"use strict";s.r(e);var n=s("0fd3"),a=s("e98f");for(var c in a)"default"!==c&&function(t){s.d(e,t,function(){return a[t]})}(c);s("0285");var i=s("2877"),o=Object(i["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},e98f:function(t,e,s){"use strict";s.r(e);var n=s("b546"),a=s.n(n);for(var c in n)"default"!==c&&function(t){s.d(e,t,function(){return n[t]})}(c);e["default"]=a.a},f636:function(t,e,s){"use strict";s("2b83");var n=c(s("b0ce")),a=c(s("b816"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(a.default))}},[["f636","common/runtime","common/vendor"]]]);