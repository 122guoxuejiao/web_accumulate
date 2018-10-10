(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{186:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("判断用户所使用的浏览器主要用到的 api 是"),a("a",{attrs:{href:"http://www.w3school.com.cn/htmldom/prop_nav_useragent.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("navigator.userAgent"),a("OutboundLink")],1),t._v("，这是一个只读的字符串，声明了浏览器用于 HTTP 请求的用户代理头的值，"),t._m(2),t._v("。")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("下面两个是刚做的 demo 获取的值，仔细观察下面两个字符串，会发现有些值是不一样的，并且浏览器特有的，依据这个我们就可以作为不同浏览器的判断条件。")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("mozilla/5.0 (iphone; cpu iphone os 11_1_2 like mac os x) applewebkit/604.3.5 (khtml, like gecko) mobile/15b202 qq/7.5.8.422 v1_iph_sq_7.5.8_1_app_a pixel/1080 core/uiwebview device/apple(iphone 8plus) nettype/wifi qbwebviewtype/1")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("mozilla/5.0 (iphone; cpu iphone os 11_1_2 like mac os x) applewebkit/604.3.5 (khtml, like gecko) mobile/15b202 micromessenger/6.6.6 nettype/wifi language/zh_cn")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),a("p",[t._v("以上2018.5.5")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"判断用户浏览器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#判断用户浏览器","aria-hidden":"true"}},[this._v("#")]),this._v(" 判断用户浏览器")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"navigator-useragent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigator-useragent","aria-hidden":"true"}},[this._v("#")]),this._v(" navigator.userAgent")])},function(){var t=this.$createElement,s=this._self._c||t;return s("strong",[this._v("不同浏览器的"),s("code",[this._v("userAgent")]),this._v("值都不相同，所以我们可以根据这个字符串来判断用户是从哪个浏览器进入")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"判断方式："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#判断方式：","aria-hidden":"true"}},[this._v("#")]),this._v(" 判断方式：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"qq-内置浏览器的-useragent-值："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qq-内置浏览器的-useragent-值：","aria-hidden":"true"}},[this._v("#")]),this._v(" QQ 内置浏览器的 userAgent 值：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"微信内置浏览器的-useragent-值："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微信内置浏览器的-useragent-值：","aria-hidden":"true"}},[this._v("#")]),this._v(" 微信内置浏览器的 userAgent 值：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"示例-判断qq和微信内置浏览器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-判断qq和微信内置浏览器","aria-hidden":"true"}},[this._v("#")]),this._v(" 示例:判断QQ和微信内置浏览器")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("使用方式，直接使用这个 api 读取值，然后"),s("strong",[this._v("根据事先观察"),s("code",[this._v("userAgent")]),this._v("字符串的不同之处")]),this._v("来判断：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" url "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" navigator"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userAgent"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toLowerCase")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//使用toLowerCase将字符串全部转为小写 方便我们判断使用")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("indexOf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'15b202 qq'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("//单独判断QQ内置浏览器")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("alert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'QQ APP 内置浏览器，做你想做的操作'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("indexOf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'micromessenger'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("//单独判断微信内置浏览器")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("alert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'微信内置浏览器，做你想做的操作'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("indexOf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'15b202'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("//判断微信内置浏览器，QQ内置浏览器")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("alert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'QQ和微信内置浏览器，做你想做的操作'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("上面判断了微信和 QQ 的内置浏览器，如果有更多不同的需求的话，可以按照上面的方式，先获取"),s("code",[this._v("userAgent")]),this._v("的字符串，然后再根据观察，使用"),s("code",[this._v("indexOf")]),this._v("判断是否含有指定的字符，来对不同浏览器进行不同的操作。")])}],!1,null,null,null);e.options.__file="判断用户浏览器.md";s.default=e.exports}}]);