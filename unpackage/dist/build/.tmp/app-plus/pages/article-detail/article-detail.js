(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/article-detail/article-detail"],{"01d9":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("cbc1"));function n(t){return t&&t.__esModule?t:{default:t}}var s={components:{uniIcon:a.default},data:function(){return{detail:{},listData:[],agreed:0,liked:0,imgsrc:[]}},methods:{com_ans:function(e){t.navigateTo({url:"../post-article/post-article?type="+("art"===this.detail.type?"comment":"answer")+"&id="+e})},get_list:function(){var t=this;this.imgsrc=[],this.$ajax("get"+("art"===this.detail.type?"Comment":"Answer"),{id:this.detail.id},function(e){var i=function(i){t.listData.push(e.data[i]),t.$ajax("getPic",{username:e.data[i].author},function(e){t.$set(t.imgsrc,i,"../../static/"+e.data+".jpg")})};for(var a in e.data)i(a)})},get_agreed:function(){var t=this;this.$ajax("user/hasAgreedIt",{id:this.detail.id},function(e){t.agreed=1===e.data})},get_liked:function(){var t=this;this.$ajax("user/hasLikedIt",{id:this.detail.id},function(e){t.liked=1===e.data})},set_agree:function(){var t=this;this.$ajax("user/setAgree",{id:this.detail.id,new_val:1-this.agreed},function(e){"<"!==e.data[0]?(t.agreed=1-t.agreed,t.detail.agrees+=1===t.agreed?1:-1):t.$msg("请先登录")})},set_like:function(){var t=this;this.$ajax("user/setLike",{id:this.detail.id,new_val:1-this.liked},function(e){"<"!==e.data[0]?t.liked=1-t.liked:t.$msg("请先登录")})},check_comment:function(e){t.navigateTo({url:"./article-detail?id="+e})}},onLoad:function(t){var e=this;this.$ajax("articleDetail",{id:t.id},function(t){e.detail=t.data,e.get_agreed(),e.get_liked(),e.get_list()})},onPullDownRefresh:function(){this.listData=[],this.get_list(),setTimeout(function(){t.stopPullDownRefresh()},1e3)}};e.default=s}).call(this,i("649d")["default"])},1853:function(t,e,i){},"3b56":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("view",{staticClass:"uni-card"},[i("view",{staticClass:"uni-card-header"},[i("text",{staticStyle:{width:"70%"}},[t._v(t._s(("ans"!==t.detail.type?"":"Re")+t.detail.title))]),i("view",["ans"!==t.detail.type?i("button",{attrs:{type:"primary",plain:"true",size:"mini",eventid:"99107496-0"},on:{tap:function(e){t.com_ans(t.detail.id)}}},[t._v("添加回复")]):t._e()],1)]),i("view",{staticClass:"uni-card-footer"},[t._v(t._s(t.detail.author)+" 发表于 "+t._s(t.detail.date))]),i("view",{staticClass:"uni-card-content"},[i("view",{staticClass:"uni-card-content-inner"},[t._v(t._s(t.detail.content))])]),i("view",{staticClass:"uni-card-footer"},[i("view",{staticClass:"uni-flex uni-row",attrs:{eventid:"99107496-1"},on:{tap:t.set_agree}},[t.agreed?i("i",{staticClass:"iconfont"},[t._v("")]):t._e(),t.agreed?t._e():i("i",{staticClass:"iconfont",staticStyle:{color:"#999"}},[t._v("")]),i("view",[t._v(t._s(t.agreed?"已":"")+"赞同 "+t._s(t.detail.agrees))])],1),i("view",{staticClass:"uni-flex uni-row",attrs:{eventid:"99107496-2"},on:{tap:t.set_like}},[t.liked?i("i",{staticClass:"iconfont",staticStyle:{color:"#f0ad4e","font-size":"20px"}},[t._v("")]):t._e(),t.liked?t._e():i("i",{staticClass:"iconfont",staticStyle:{color:"#f0ad4e","font-size":"20px"}},[t._v("")]),i("view",[t._v(t._s(t.liked?"已":"")+"收藏")])],1)])]),t._l(t.listData,function(e,a){return i("view",{key:a,staticClass:"uni-card"},[i("view",{staticClass:"uni-card-header",attrs:{eventid:"99107496-3-"+a},on:{tap:function(i){t.check_comment(e.id)}}},[i("view",{staticClass:"uni-comment-list"},[i("view",{staticClass:"uni-comment-face"},[i("image",{attrs:{src:t.imgsrc[a],mode:"widthFix"}})]),i("view",{staticClass:"uni-comment-body"},[i("view",{staticClass:"uni-comment-top"},[i("text",[t._v(t._s(e.author))])]),i("view",{staticClass:"uni-comment-content"},[t._v(t._s(e.content))]),i("view",{staticClass:"uni-comment-date"},[i("view",[t._v(t._s(e.date))]),i("view",{staticClass:"uni-flex uni-row"},[i("uni-icon",{attrs:{type:"arrowup",size:"16",mpcomid:"99107496-0-"+a}}),i("view",[t._v("赞同 "+t._s(e.agrees))])],1)])])])])])})],2)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"4fa1":function(t,e,i){"use strict";i.r(e);var a=i("01d9"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},"674e":function(t,e,i){"use strict";var a=i("1853"),n=i.n(a);n.a},"7b0a":function(t,e,i){"use strict";i("2b83");var a=s(i("b0ce")),n=s(i("b8bb"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(n.default))},b8bb:function(t,e,i){"use strict";i.r(e);var a=i("3b56"),n=i("4fa1");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("674e");var c=i("2877"),r=Object(c["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports}},[["7b0a","common/runtime","common/vendor"]]]);