(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1236:function(t,e,n){var content=n(1244);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(231).default)("18735209",content,!0,{sourceMap:!1})},1238:function(t,e,n){"use strict";n.d(e,"b",(function(){return m})),n.d(e,"a",(function(){return h})),n.d(e,"g",(function(){return v})),n.d(e,"f",(function(){return x})),n.d(e,"c",(function(){return _})),n.d(e,"e",(function(){return w})),n.d(e,"d",(function(){return y}));n(86),n(68),n(85),n(127),n(69),n(128);var o=n(55),r=(n(36),n(1234));function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f=r.a.create({timeout:5e3,baseURL:"https://106.14.32.178:8080/api",headers:{"Content-Type":"application/json;charset=UTF-8"}});function d(t){return new Promise((function(e,n){f(t).then((function(t){e(t)})).catch((function(t){n(t)}))}))}r.a.defaults.crossDomain=!0,r.a.defaults.withCredentials=!0;function m(t){return d({url:"/brief",method:"get",params:t})}function h(t){return d({url:"/advantage",method:"get",params:t})}function v(t){return d({url:"/solution?current=1&pagesize=10",method:"get",params:t})}function x(t){return d({url:"/servere",method:"get",params:t})}function _(t){return d({url:"/cases",method:"get",params:t})}function w(t){return d({url:"/news",method:"get",params:t})}function y(t){return d({url:"/message",method:"post",data:l({},t)})}d({url:"",method:""}).then((function(t){console.log(t.data)})).catch((function(t){console.log(t)}))},1242:function(t,e,n){t.exports=n.p+"img/WeChat-official-account.8f13575.png"},1243:function(t,e,n){"use strict";n(1236)},1244:function(t,e,n){var o=n(230)((function(i){return i[1]}));o.push([t.i,".container[data-v-4b0d2cf4]{background:#1f242b;height:570px;position:relative;width:100%}.main[data-v-4b0d2cf4]{padding:60px 20%}.main h1[data-v-4b0d2cf4]{color:#fff;font-size:40px}.main h4[data-v-4b0d2cf4]{color:#ccc;font-size:26px}.main h2[data-v-4b0d2cf4]{color:#fff;font-size:22px}.main h3[data-v-4b0d2cf4]{color:#ccc;font-size:16px}.firstIpt[data-v-4b0d2cf4],.secondIpt[data-v-4b0d2cf4]{background:#2f3640;height:50px;width:260px}.thirdIpt[data-v-4b0d2cf4]{background:#2f3640;height:120px;width:400px}.footer[data-v-4b0d2cf4]{border-top:1px solid #292d34;bottom:0;color:#fff;font-size:14px;height:60px;line-height:60px;margin:0 auto;position:absolute;text-align:center;width:100%}.btn[data-v-4b0d2cf4]{color:#fff;font-size:18px;height:46px;margin-top:54px;width:140px}.name[data-v-4b0d2cf4],.phone[data-v-4b0d2cf4]{background:#2f3640;border:none;color:#fff;height:50px;list-style:none;outline:none;padding:10px;width:90%}.phone[data-v-4b0d2cf4]{margin-top:20px}.message[data-v-4b0d2cf4]{background:#2f3640;border:none;color:#fff;height:120px;list-style:none;outline:none;padding:20px;vertical-align:top;width:90%}",""]),o.locals={},t.exports=o},1246:function(t,e,n){"use strict";n.r(e);n(84);var o=n(10),r=n(1238),c={__name:"FooterView",setup:function(t){var e=Object(o.ref)({name:"",content:"",phone:""});return{__sfc:!0,messageValue:e,submitClick:function(){""===e.value.name?alert("请输入姓名"):console.log(e.value.name),""===e.value.phone?alert("请输入电话"):console.log(e.value.phone),""!==e.value.name&&""!==e.value.phone&&Object(r.d)(e.value).then((function(t){alert("您输入的信息我们已收到"),console.log(t)})).catch((function(t){console.log(t)}))}}}},l=(n(1243),n(96)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c,o=t._self._setupProxy;return e("div",{staticClass:"container"},[e("div",{staticClass:"main"},[e("h1",[t._v("联系我们")]),t._v(" "),e("h4",[t._v("Contact Us")]),t._v(" "),e("a-row",{attrs:{gutter:100}},[e("a-col",{attrs:{span:16}},[e("a-row",[e("a-col",{attrs:{span:12}},[e("input",{directives:[{name:"model",rawName:"v-model",value:o.messageValue.name,expression:"messageValue.name"}],staticClass:"name",attrs:{name:"name",placeholder:"请输入姓名"},domProps:{value:o.messageValue.name},on:{input:function(e){e.target.composing||t.$set(o.messageValue,"name",e.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:o.messageValue.phone,expression:"messageValue.phone"}],staticClass:"phone",attrs:{name:"phone",placeholder:"请输入手机号"},domProps:{value:o.messageValue.phone},on:{input:function(e){e.target.composing||t.$set(o.messageValue,"phone",e.target.value)}}})]),t._v(" "),e("a-col",{attrs:{span:12}},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:o.messageValue.content,expression:"messageValue.content"}],staticClass:"message",attrs:{name:"message",placeholder:"请输入留言内容"},domProps:{value:o.messageValue.content},on:{input:function(e){e.target.composing||t.$set(o.messageValue,"content",e.target.value)}}})]),t._v(" "),e("a-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:o.submitClick}},[t._v("提交")])],1)],1),t._v(" "),e("a-col",{staticStyle:{color:"white: padding-left: 0","padding-right":"0"},attrs:{span:8}},[e("h2",{staticStyle:{"font-size":"16px"}},[t._v("上海疆通科技有限公司")]),t._v(" "),e("h3",[t._v("邮箱：sales@jungt.com")]),t._v(" "),e("div",[e("img",{staticStyle:{width:"110px",height:"110px"},attrs:{src:n(1242),alt:""}}),t._v(" "),e("div",{staticStyle:{"text-align":"center",width:"110px","margin-top":"6px",color:"#ffffff"}},[t._v("\n            官方公众号\n          ")])])])],1)],1),t._v(" "),t._m(0)])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"footer"},[t._v("\n    上海疆通科技有限公司版权所有\n    "),e("a",{staticStyle:{"list-style":"none","text-decoration":"none",color:"purple"},attrs:{href:"https://beian.miit.gov.cn/"}},[t._v("沪ICP备")]),t._v("\n    18029365号\n  ")])}],!1,null,"4b0d2cf4",null);e.default=component.exports}}]);