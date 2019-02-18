/*
 * @Author: OBKoro1
 * @Github: https://github.com/OBKoro1
 * @Date: 2018-08-28 18:29:08
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-01-24 15:13:31
 * @Description: 
 */
module.exports = {
  title: 'OBKoro1前端积累',
  // TODO: 加到meta上
  description: '种一棵树最好的时间是十年前，其次就是现在。',
  base: '/web_accumulate/',
  markdown: {
    lineNumbers: true // 代码行数
  },
  themeConfig: {
    repo: 'OBKoro1/web_accumulate',
    docsBranch: 'master', // git 源仓库 仓库分支
    docsDir: 'docs', // 仓库下的文件夹
    editLinks: true, // 编辑链接
    editLinkText: '帮助我改善这个页面', // 链接字段
    serviceWorker: {
      updatePopup: {
        // 刷新内容的弹窗
        message: '就在刚刚,OBKoro1更新了内容',
        buttonText: '点这里'
      }
    },
    lastUpdated: 'Last Updated', // 最后更新时间
    sidebarDepth: 3,
    nav: [
      { text: '前端积累', link: '/accumulate/' },
      { text: '前端算法', link: '/algorithm/' },
      { text: '关于', link: 'http://obkoro1.com/about/' },
      {
        text: '其他仓库',
        items: [
          {
            text: '算法仓库',
            link: 'https://github.com/OBKoro1/Brush_algorithm'
          },
          {
            text: 'VsCode插件仓库',
            link:
              'https://github.com/OBKoro1/koro1FileHeader'
          }
        ]
      }
    ],
    sidebar: {
      '/accumulate/': [
        '/accumulate/',
        {
          title: 'JS',
          // TODO: 取消折叠
          // collapsable: false,
          children: [
            '/accumulate/JS/webWorker上手',
            '/accumulate/JS/手摸手教你使用WebSocket',
            '/accumulate/JS/数组API解析合集',
            '/accumulate/JS/函数防抖和函数节流',
            '/accumulate/JS/Object.defineProperty',
            '/accumulate/JS/数组交集差集',
            '/accumulate/JS/数组完全乱序',
            '/accumulate/JS/cookie和storage的使用以及区别',
            '/accumulate/JS/随机数组成的数组',
          ]
        },
        {
          title: 'ES6',
          children:[
            '/accumulate/ES6/',
            '/accumulate/ES6/let和const命令',
          ]
        },
        {
          title: 'Vue',
          children: [
            '/accumulate/Vue/vue钩子函数',
            '/accumulate/Vue/vue小技巧3',
            '/accumulate/Vue/你或许不知道Vue的这些小技巧',
            '/accumulate/Vue/vue小技巧',
            '/accumulate/Vue/vuex三步',
            '/accumulate/Vue/vue定义全局函数',
            '/accumulate/Vue/极简双向绑定',
            '/accumulate/Vue/弹窗'
          ]
        },
        {
          title: '功能',
          children: [
            '/accumulate/effect/网页全屏',
            '/accumulate/effect/复制粘贴系列',
            '/accumulate/effect/树状数组结构转化',
            '/accumulate/effect/input的一些坑点分享',
            '/accumulate/effect/前端弹幕效果实现思路',
            '/accumulate/effect/正则表达式收集',
            '/accumulate/effect/判断用户浏览器',
            '/accumulate/effect/退出页面发送请求',
            '/accumulate/effect/时间差与时区转换',
            '/accumulate/effect/多维数组展开',
            '/accumulate/effect/浏览器桌面通知',
            '/accumulate/effect/滚动底部',
            '/accumulate/effect/字符串绑定点击事件',
            '/accumulate/effect/网页标题闪烁',
            '/accumulate/effect/显示隐藏密码'
          ]
        },
        {
          title: '工具/浏览器/机制',
          children: [
            '/accumulate/tool/浏览器重绘重排',
            '/accumulate/tool/忍者秘籍定时器机制',
            '/accumulate/tool/js事件循环机制',
            '/accumulate/tool/js垃圾回收机制',
            '/accumulate/tool/http缓存',
            '/accumulate/tool/koroFileHeader',
            '/accumulate/tool/Eslint自动修复格式错误',
            '/accumulate/tool/一份超级详细的Vue-cli3.0使用教程',
            '/accumulate/tool/浏览器自动识别数字成电话号码'
          ]
        },
        {
          title: 'CSS',
          children: [
            '/accumulate/CSS/单行多行文本溢出',
            '/accumulate/CSS/CSS权重规则',
            '/accumulate/CSS/CSS概念-BFC深入浅出'
          ]
        },
        {
          title: '其他',
          children: [
            '/accumulate/amateur/VuePress文档',
            '/accumulate/amateur/高性能js',
            '/accumulate/amateur/推箱子'
          ]
        }
      ],
      '/algorithm/': [
        '/algorithm/',
        {
          title: '入门',
          children: [
            '/algorithm/induction/查找斐波纳契数列中第N个数',
            '/algorithm/induction/数组重复次数',
            '/algorithm/induction/水仙花数',
            '/algorithm/induction/反转3位整数'
          ]
        },
        {
          title: '简单',
          children: [
            '/algorithm/simple/奇偶分割数组',
            '/algorithm/simple/爬楼梯2',
            '/algorithm/simple/相亲数',
            '/algorithm/simple/丢失的数',
            '/algorithm/simple/判断字符串的循环移动',
            '/algorithm/simple/字符串压缩',
            '/algorithm/simple/第一个只出现一次的字符',
            '/algorithm/simple/删除元素',
            '/algorithm/simple/两个字符串是变位词',
            '/algorithm/simple/检测2的幂次',
            '/algorithm/simple/子数组之和',
            '/algorithm/simple/最长单词',
            '/algorithm/simple/爬楼梯',
            '/algorithm/simple/落单的数',
            '/algorithm/simple/中位数',
            '/algorithm/simple/两数之和',
            '/algorithm/simple/比较字符串',
            '/algorithm/simple/最大子数组',
            '/algorithm/simple/字符串密钥格式',
            '/algorithm/simple/搜索二维矩阵',
            '/algorithm/simple/合并排序数组',
            '/algorithm/simple/分解质因数',
            '/algorithm/simple/姓名去重',
            '/algorithm/simple/反转整数',
            '/algorithm/simple/回文'
          ]
        },
        {
          title: '中等',
          children: [
            '/algorithm/medium/第k大元素',
            '/algorithm/medium/丑数',
            '/algorithm/medium/统计数字'
          ]
        }
      ]
    }
  }
};
