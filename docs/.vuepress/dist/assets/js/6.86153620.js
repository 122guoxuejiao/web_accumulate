(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{202:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("好记性不如烂笔头，研究了一下 BFC，发现里面比较细的东西也是很多的！关于 BFC，很多人可能都听说过 BFC 这个东西，大概知道这是个啥东西，相信很多人对此并没有一个非常细致的了解，本文预计篇幅较长，认真，耐着性子看，应该都能够比较深入的理解 BFC 这个概念的规则、作用以及用法。希望喜欢的朋友可以点个赞，或者关注一波本人，谢谢。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("先稳住别懵逼，接着往下走。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),a("hr"),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("上文定义中提到过的块级盒：block-level box，在这里解析一波：")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),a("p",[t._v("上文提到过，决定块盒在包含块中与相邻块盒的垂直间距的便是 margin-box。，上面的栗子就是这种情况。")]),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),a("p",[t._v("下面是代码：")]),t._v(" "),t._m(26),t._m(27),t._v(" "),a("h4",{attrs:{id:"这里有一个网址可以在线演示，通过演示，可以更直观一点："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#这里有一个网址可以在线演示，通过演示，可以更直观一点：","aria-hidden":"true"}},[t._v("#")]),t._v(" 这里有一个网址可以在"),a("a",{attrs:{href:"http://www.cnblogs.com/xiaohuochai/p/5248536.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("线演示"),a("OutboundLink")],1),t._v("，通过演示，可以更直观一点：")]),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),a("p",[t._v("还可以向同一个方向浮动来达到清除浮动的目的，清除浮动的原理是两个 div 都位于同一个浮动的 BFC 区域之中。")]),t._v(" "),t._m(36),t._v(" "),t._m(37),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),a("hr"),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._m(47),t._v(" "),t._m(48),t._v(" "),a("p",[t._v("这里两个 div 被撑开，是因为父 div 被 p 标签撑开了，并不是因为清除浮动的原因，从下面这张图片可以清楚的知道。")]),t._v(" "),t._m(49),t._v(" "),a("p",[t._v("其实以上的几个例子都体现了 BFC 布局规则第五条————")]),t._v(" "),t._m(50),t._v(" "),t._m(51),t._v(" "),t._m(52),t._m(53),t._v(" "),a("p",[t._v("问题：为什么 div 的左上角被覆盖了，而文本却没有被覆盖，float 不是应该跟普通流不在一个层级吗？是因为 float 属性不生效吗？")]),t._v(" "),t._m(54),t._v(" "),t._m(55),t._v(" "),t._m(56),t._v(" "),t._m(57),t._v(" "),a("p",[t._v("以上。2017.5.4.")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"css-概念-bfc-深入浅出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-概念-bfc-深入浅出","aria-hidden":"true"}},[this._v("#")]),this._v(" CSS 概念-BFC 深入浅出")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"bfc-是什么鬼？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc-是什么鬼？","aria-hidden":"true"}},[this._v("#")]),this._v(" BFC 是什么鬼？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("所谓的 BFC 就是 css 布局的一个概念，是一块区域，一个环境。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"关于-bfc-的定义："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于-bfc-的定义：","aria-hidden":"true"}},[this._v("#")]),this._v(" 关于 BFC 的定义：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v('BFC(Block formatting context)直译为"块级格式化上下文"。它'),s("strong",[this._v("是一个独立的渲染区域")]),this._v("，只有"),s("strong",[this._v("Block-level box")]),this._v("参与（在下面有解释）， 它规定了内部的 Block-level Box 如何布局，并且与这个区域外部毫不相干。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"通俗的说"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通俗的说","aria-hidden":"true"}},[this._v("#")]),this._v(" 通俗的说:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("BFC 可以简单的理解为"),s("strong",[this._v("某个元素的一个 CSS 属性")]),this._v("，拥有这个属性的元素"),s("strong",[this._v("对内部元素和外部元素会表现出一些特性，这就是 BFC")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"触发条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#触发条件","aria-hidden":"true"}},[this._v("#")]),this._v(" 触发条件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("满足下列条件之一就可触发 BFC")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[a("p",[t._v("根元素，即 HTML 元素")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("float")]),t._v("的值不为"),a("code",[t._v("none")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("overflow")]),t._v("的值不为"),a("code",[t._v("visible")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("display")]),t._v("的值为"),a("code",[t._v("inline-block")]),t._v("、"),a("code",[t._v("table-cell")]),t._v("、"),a("code",[t._v("table-caption")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("position")]),t._v("的值为"),a("code",[t._v("absolute")]),t._v("或"),a("code",[t._v("fixed")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"bfc-布局规则："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc-布局规则：","aria-hidden":"true"}},[this._v("#")]),this._v(" BFC 布局规则：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[a("p",[t._v("内部的 Box 会在垂直方向，一个接一个地放置。")])]),t._v(" "),a("li",[a("p",[t._v("Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠")])]),t._v(" "),a("li",[a("p",[t._v("每个元素的 margin box 的左边， 与包含块 border box 的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。")])]),t._v(" "),a("li",[a("p",[t._v("BFC 的区域不会与 float box 重叠。")])]),t._v(" "),a("li",[a("p",[t._v("BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。")])]),t._v(" "),a("li",[a("p",[t._v("计算 BFC 的高度时，浮动元素也参与计算")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"bfc-有哪些作用："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc-有哪些作用：","aria-hidden":"true"}},[this._v("#")]),this._v(" BFC 有哪些作用：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("自适应两栏布局")]),this._v(" "),s("li",[this._v("可以阻止元素被浮动元素覆盖")]),this._v(" "),s("li",[this._v("可以包含浮动元素——清除内部浮动")]),this._v(" "),s("li",[this._v("分属于不同的 BFC 时可以阻止 margin 重叠")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"bfc-的规则和作用介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc-的规则和作用介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" BFC 的规则和作用介绍:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"bfc-布局规则-1：内部的-box-会在垂直方向，一个接一个地放置。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc-布局规则-1：内部的-box-会在垂直方向，一个接一个地放置。","aria-hidden":"true"}},[this._v("#")]),this._v(" BFC 布局规则 1：内部的 Box 会在垂直方向，一个接一个地放置。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://lc-gold-cdn.xitu.io/b80801d8707be24ecbc0",alt:"这个就是我们平常操作盒子的组成"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们平常说的盒子是由 margin、border、padding、content 组成的，实际上每种类型的四条边定义了一个盒子，分别是分别是"),s("strong",[this._v("content box、padding box、border box、margin box")]),this._v("，这四种类型的盒子一直存在，即使他们的值为 0.决定块盒在包含块中与相邻块盒的垂直间距的便是 margin-box。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("提示")]),this._v("：Box 之间的距离虽然也可以使用 padding 来控制，但是此时实际上还是属于 box 内部里面，而且使用 padding 来控制的话就不能再使用 border 属性了。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("布局规则 1 就是我们"),s("strong",[this._v("平常 div 一行一行块级放置的样式")]),this._v("，大家想一下就知道了，这里就不展开了。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"bfc-布局规则-2：box-垂直方向的距离由-margin-决定。属于同一个-bfc-的两个相邻-box-的-margin-会发生重叠。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc-布局规则-2：box-垂直方向的距离由-margin-决定。属于同一个-bfc-的两个相邻-box-的-margin-会发生重叠。","aria-hidden":"true"}},[this._v("#")]),this._v(" BFC 布局规则 2：Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://lc-gold-cdn.xitu.io/6b0fc0e3d34f94875d35.gif",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("演示中 css 属性设置")]),this._v("：上面的 box：margin-bottom: 100px;下面的 box：margin-top: 100px;（他们是同一侧的 margin，所以会发生 margin 重叠的情况，两个 div 的距离实际上只有 100px。）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"bfc-的作用-4：阻止-margin-重叠"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc-的作用-4：阻止-margin-重叠","aria-hidden":"true"}},[this._v("#")]),this._v(" BFC 的作用 4：阻止 margin 重叠:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当两个相邻块级子元素"),s("strong",[this._v("分属于不同的 BFC")]),this._v("时可以"),s("strong",[this._v("阻止 margin 重叠")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("操作方法")]),this._v(":给其中一个 div 外面包一个 div，然后通过触发外面这个 div 的 BFC，就可以阻止这两个 div 的 margin 重叠")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("aside"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("main"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- css代码 --\x3e")]),t._v("\n.aside {\n  margin-bottom: 100px; //margin属性\n  width: 100px;\n  height: 150px;\n  background: #f66;\n}\n.main {\n  margin-top: 100px; //margin属性\n  height: 200px;\n  background: #fcc;\n}\n.text {\n  /*盒子main的外面包一个div，通过改变此div的属性使两个盒子分属于两个不同的BFC，以此来阻止margin重叠*/\n  overflow: hidden; //此时已经触发了BFC属性。\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("ps")]),this._v(":触发方式可以参考上文给出的触发条件。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://lc-gold-cdn.xitu.io/6daeb3cbf5f82d1f6db8.gif",alt:"这里面也是一篇好文章，关于BFC的"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"bfc-布局规则-3：每个元素的-margin-box-的左边，-与包含块-border-box-的左边相接触-对于从左往右的格式化，否则相反-。即使存在浮动也是如此。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc-布局规则-3：每个元素的-margin-box-的左边，-与包含块-border-box-的左边相接触-对于从左往右的格式化，否则相反-。即使存在浮动也是如此。","aria-hidden":"true"}},[this._v("#")]),this._v(" BFC 布局规则 3：每个元素的 margin box 的左边， 与包含块 border box 的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("par"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("child"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    //给这两个子div加浮动，浮动的结果，如果没有清除浮动的话，父div不会将下面两个div包裹，但还是在父div的范围之内。\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("child"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("解析")]),this._v("：给这两个子 div 加浮动，浮动的结果，如果没有清除浮动的话，父 div 不会将下面两个 div 包裹，但还是在父 div 的范围之内，"),s("strong",[this._v("左浮是子 div 的左边接触父 div 的 borderbox 的左边，右浮是子 div 接触父 div 的 borderbox 右边")]),this._v("，除非设置 margin 来撑开距离，否则一直是这个规则。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"bfc-作用-3：可以包含浮动元素——清除内部浮动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc-作用-3：可以包含浮动元素——清除内部浮动","aria-hidden":"true"}},[this._v("#")]),this._v(" BFC 作用 3：可以包含浮动元素——清除内部浮动")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("给父 divpar 加上 "),s("code",[this._v("overflow: hidden;")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("清除浮动原理")]),this._v(":触发父 div 的 BFC 属性，使下面的子 div 都"),s("strong",[this._v("处在父 div 的同一个 BFC 区域之内")]),this._v("，此时已成功清除浮动。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://lc-gold-cdn.xitu.io/dfe63a3d19cae8adf5fa.gif",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"bfc-布局规则-4：bfc-的区域不会与-float-box-重叠："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc-布局规则-4：bfc-的区域不会与-float-box-重叠：","aria-hidden":"true"}},[this._v("#")]),this._v(" BFC 布局规则 4：BFC 的区域不会与 float box 重叠：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("aside"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("main"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n.aside {\n  width: 100px;\n  height: 150px;\n  float: left;\n  background: #f66;\n}\n.main {\n  height: 200px;\n  overflow: hidden; //触发main盒子的BFC\n  background: #fcc;\n}\n.text {\n  width: 500px;\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("上面 aside 盒子有一个浮动属性，覆盖了 main 盒子的内容，main 盒子没有清除 aside 盒子的浮动。只做了一个动作，就是"),s("strong",[this._v("触发自身的 BFC")]),this._v("，然后就"),s("strong",[this._v("不再被 aside 盒子覆盖")]),this._v("了。所以："),s("strong",[this._v("BFC 的区域不会与 float box 重叠")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://lc-gold-cdn.xitu.io/0e2c7b710c4a13111120.gif",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"bfc-作用：自适应两栏布局。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc-作用：自适应两栏布局。","aria-hidden":"true"}},[this._v("#")]),this._v(" BFC 作用：自适应两栏布局。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://lc-gold-cdn.xitu.io/304255779293ba4c2082.gif",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("还是上面的代码，此时 BFC 的区域不会与 float box 重叠，因此"),s("strong",[this._v("会根据包含块（父 div）的宽度，和 aside 的宽度，自适应宽度。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"bfc-与-layout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc-与-layout","aria-hidden":"true"}},[this._v("#")]),this._v(" BFC 与 Layout")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("IE 作为浏览器中的奇葩，当然不可能按部就班的支持 BFC 标准，于是乎 IE 中有了 Layout 这个东西。"),s("strong",[this._v("Layout 和 BFC 基本是等价的")]),this._v("，为了处理 IE 的兼容性，在需要触发 BFC 时，我们除了需要用触发条件中的 CSS 属性来触发 BFC，还需要针对 IE 浏览器使用 zoom: 1 来触发 IE 浏览器的 Layout。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"有趣的文本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有趣的文本","aria-hidden":"true"}},[this._v("#")]),this._v(" 有趣的文本:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v(".par")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("margin-top")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3rem"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("border")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px solid #fcc"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v(".child")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("border")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px solid #f66"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("float")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://lc-gold-cdn.xitu.io/216207666aa8bef15115",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("原因：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://lc-gold-cdn.xitu.io/5f7dc07585ae6c512bb8",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"bfc-布局规则-5：bfc-就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc-布局规则-5：bfc-就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。","aria-hidden":"true"}},[this._v("#")]),this._v(" BFC 布局规则 5：BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("文本环绕 float")]),this._v("：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token style-attr language-css"}},[a("span",{attrs:{class:"token attr-name"}},[t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token property"}},[t._v("float")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("background")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #000"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token style-attr language-css"}},[a("span",{attrs:{class:"token attr-name"}},[t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token property"}},[t._v("height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("background")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #AAA"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token style-attr language-css"}},[a("span",{attrs:{class:"token attr-name"}},[t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{attrs:{class:"token attr-value"}},[t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("background")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("content"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("content"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("content"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("content"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("content"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://lc-gold-cdn.xitu.io/c02b2396d987f4d7439a",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("解决")]),this._v("：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("float 属性定义元素在哪个方向浮动。以往这个属性总应用于图像，"),s("strong",[this._v("使文本围绕在图像周围")]),this._v("，不过在 CSS 中，"),s("strong",[this._v("任何元素都可以浮动")]),this._v("。浮动元素会生成一个块级框，而不论它本身是何种元素。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://lc-gold-cdn.xitu.io/5994ed11ebc3e4b971db.gif",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("从上图可以看到，float 属性确实生效，将 float 隐藏后，下面还有一个红色的 div，这个 div 是被黑色 div 所覆盖掉的。"),s("strong",[this._v("div 会被 float 覆盖，而文本却没有被 float 覆盖")]),this._v("，是因为"),s("strong",[this._v("float 当初设计的时候")]),this._v("就是为了"),s("strong",[this._v("使文本围绕在浮动对象的周围")]),this._v("。")])}],!1,null,null,null);e.options.__file="CSS概念-BFC深入浅出.md";s.default=e.exports}}]);