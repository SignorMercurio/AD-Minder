(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/feedback/feedback"],{"41c4":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{msgContents:["界面显示错乱","启动缓慢","UI无法直视","偶发性崩溃"],stars:[1,2,3,4,5],imageList:[],sendDate:{score:0,content:"",contact:""}}},onLoad:function(){var e={appid:plus.runtime.appid,imei:plus.device.imei,p:"Android"===plus.os.name?"a":"i",md:plus.device.model,app_version:plus.runtime.version,plus_version:plus.runtime.innerVersion,os:plus.os.version,net:""+plus.networkinfo.getCurrentType()};this.sendDate=Object.assign(e,this.sendDate)},methods:{close:function(e){this.imageList.splice(e,1)},chooseMsg:function(){var t=this;e.showActionSheet({itemList:this.msgContents,success:function(e){t.sendDate.content=t.msgContents[e.tapIndex]}})},chooseImg:function(){var t=this;e.chooseImage({sourceType:["camera","album"],sizeType:"compressed",count:8-this.imageList.length,success:function(e){t.imageList=t.imageList.concat(e.tempFilePaths)}})},chooseStar:function(e){this.sendDate.score=e},previewImage:function(){e.previewImage({urls:this.imageList})},send:function(){var t=this;console.log(JSON.stringify(this.sendDate));var a=this.imageList.map(function(e,t){return{name:"image"+t,uri:e}});e.uploadFile({url:"https://service.dcloud.net.cn/feedback",files:a,formData:this.sendDate,success:function(a){200===a.statusCode&&(e.showToast({title:"反馈成功!"}),t.imageList=[],t.sendDate={score:0,content:"",contact:""})},fail:function(e){console.log(e)}})}}};t.default=a}).call(this,a("649d")["default"])},8833:function(e,t,a){"use strict";a.r(t);var s=a("ea5d"),i=a("9d08");for(var n in i)"default"!==n&&function(e){a.d(t,e,function(){return i[e]})}(n);a("da0e");var c=a("2877"),o=Object(c["a"])(i["default"],s["a"],s["b"],!1,null,null,null);t["default"]=o.exports},"8aec":function(e,t,a){"use strict";a("2b83");var s=n(a("b0ce")),i=n(a("8833"));function n(e){return e&&e.__esModule?e:{default:e}}Page((0,s.default)(i.default))},"9d08":function(e,t,a){"use strict";a.r(t);var s=a("41c4"),i=a.n(s);for(var n in s)"default"!==n&&function(e){a.d(t,e,function(){return s[e]})}(n);t["default"]=i.a},da0e:function(e,t,a){"use strict";var s=a("f9d7"),i=a.n(s);i.a},ea5d:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"page"},[a("view",{staticClass:"feedback-title"},[a("text",[e._v("问题和意见")]),a("text",{staticClass:"feedback-quick",attrs:{eventid:"0fac16d6-0"},on:{tap:e.chooseMsg}},[e._v("快速键入")])]),a("view",{staticClass:"feedback-body"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.sendDate.content,expression:"sendDate.content"}],staticClass:"feedback-textare",attrs:{placeholder:"请详细描述你的问题和意见...",eventid:"0fac16d6-1"},domProps:{value:e.sendDate.content},on:{input:function(t){t.target.composing||(e.sendDate.content=t.target.value)}}})]),e._m(0),a("view",{staticClass:"feedback-body feedback-uploader"},[a("view",{staticClass:"uni-uploader"},[a("view",{staticClass:"uni-uploader-head"},[a("view",{staticClass:"uni-uploader-title"},[e._v("点击预览图片")]),a("view",{staticClass:"uni-uploader-info"},[e._v(e._s(e.imageList.length)+"/8")])]),a("view",{staticClass:"uni-uploader-body"},[a("view",{staticClass:"uni-uploader__files"},[e._l(e.imageList,function(t,s){return a("block",{key:s},[a("view",{staticClass:"uni-uploader__file",staticStyle:{position:"relative"}},[a("image",{staticClass:"uni-uploader__img",attrs:{src:t,eventid:"0fac16d6-2-"+s},on:{tap:e.previewImage}}),a("view",{staticClass:"close-view",attrs:{eventid:"0fac16d6-3-"+s},on:{click:function(t){e.close(s)}}},[e._v("x")])])])}),a("view",{directives:[{name:"show",rawName:"v-show",value:e.imageList.length<8,expression:"imageList.length < 8"}],staticClass:"uni-uploader__input-box"},[a("view",{staticClass:"uni-uploader__input",attrs:{eventid:"0fac16d6-4"},on:{tap:e.chooseImg}})])],2)])])]),e._m(1),a("view",{staticClass:"feedback-body"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.sendDate.contact,expression:"sendDate.contact"}],staticClass:"feedback-input",attrs:{placeholder:"(选填,方便我们联系您 )",eventid:"0fac16d6-5"},domProps:{value:e.sendDate.contact},on:{input:function(t){t.target.composing||(e.sendDate.contact=t.target.value)}}})]),a("view",{staticClass:"feedback-title feedback-star-view"},[a("text",[e._v("应用评分")]),a("view",{staticClass:"feedback-star-view"},e._l(e.stars,function(t,s){return a("text",{key:s,staticClass:"feedback-star",class:s<e.sendDate.score?"active":"",attrs:{eventid:"0fac16d6-6-"+s},on:{tap:function(a){e.chooseStar(t)}}})}))]),a("button",{staticClass:"feedback-submit",attrs:{type:"default",eventid:"0fac16d6-7"},on:{tap:e.send}},[e._v("提交")])],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"feedback-title"},[a("text",[e._v("图片(选填,提供问题截图,总大小10M以下)")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"feedback-title"},[a("text",[e._v("QQ/邮箱")])])}];a.d(t,"a",function(){return s}),a.d(t,"b",function(){return i})},f9d7:function(e,t,a){}},[["8aec","common/runtime","common/vendor"]]]);