require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([40],{157:function(t,e,s){"use strict";var i=n(s(2)),a=n(s(158));function n(t){return t&&t.__esModule?t:{default:t}}s(0).default;new i.default(a.default).$mount()},158:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(160),a=s.n(i),n=s(161),c=!1;var o=function(t){c||s(159)},r=s(1)(a.a,n.a,o,null,null);r.options.__file="C:\\Users\\admin\\Desktop\\bbsj\\pages\\friend\\infodetail.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] infodetail.vue: functional components are not supported with templates, they should use render functions."),e.default=r.exports},159:function(t,e){},160:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(0).default;e.default={data:function(){return{}},onLoad:function(){},methods:{goback:function(){i.navigateBack({delta:1})},gochangeinfo:function(){i.navigateTo({url:"changeinfo"})},godialog:function(){i.navigateTo({url:"dialog"})}}}},161:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"page"},[s("view",{staticClass:"header"},[s("image",{attrs:{src:"../../static/mybg.png",mode:""}}),t._v(" "),s("view",{staticClass:"header-left",attrs:{eventid:"0"},on:{click:function(e){t.goback()}}},[s("image",{attrs:{src:"../../static/left_01.png"}})]),t._v(" "),s("view",{staticClass:"headermask"}),t._v(" "),s("view",{staticClass:"user-info"},[s("image",{staticClass:"face",attrs:{src:"../../static/bg.jpg"}}),t._v(" "),s("view",{staticClass:"user-name"},[t._v("\n\t\t\t\t克里斯\n\t\t\t\t"),s("image",{attrs:{src:"../../static/xiugai.png",mode:"",eventid:"1"},on:{click:t.gochangeinfo}})])])]),t._v(" "),s("view",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("view",{staticClass:"btn1",attrs:{eventid:"2"},on:{click:t.godialog}},[t._v("\n\t\t\t发消息\n\t\t")]),t._v(" "),s("view",{staticClass:"btn2"},[t._v("\n\t\t\t删除好友\n\t\t")])])])};i._withStripped=!0;var a={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"bigbox"},[e("view",{staticClass:"box"},[e("view",{staticClass:"item"},[e("image",{attrs:{src:"../../static/myselect.png",mode:""}}),this._v("\n\t\t\t\t\t尼古拉斯（1844663555）\n\t\t\t\t")]),this._v(" "),e("view",{staticClass:"item"},[e("image",{attrs:{src:"../../static/jianjie.png",mode:""}}),this._v("\n\t\t\t\t\t男 27岁 摩羯座\n\t\t\t\t")]),this._v(" "),e("view",{staticClass:"item"},[e("image",{attrs:{src:"../../static/weizhi.png",mode:""}}),this._v("\n\t\t\t\t\t福建－厦门\n\t\t\t\t")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"chat"},[e("view",{staticClass:"list"},[e("view",{staticClass:"item-content"},[this._v("\n\t\t\t\t\t聊天记录\n\t\t\t\t")]),this._v(" "),e("view",{staticClass:"item-right"},[e("image",{attrs:{src:"../../static/right.png",mode:""}})])]),this._v(" "),e("view",{staticClass:"list"},[e("view",{staticClass:"item-content"},[this._v("\n\t\t\t\t\t屏蔽此人\n\t\t\t\t")]),this._v(" "),e("view",{staticClass:"item-right"},[e("switch")])])])}]};e.a=a}},[157]);
//# sourceMappingURL=../../.sourcemap/pages/friend/infodetail.js.map