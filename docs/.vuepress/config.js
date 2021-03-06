module.exports = {
  title: "小飞的博客",
  head: [["link", { rel: "icon", href: "/imgs/avatar.jpeg" }]],
  themeConfig: {
    logo: "/imgs/avatar.jpeg",
    nav: [
      { text: "主页", link: "/" },
      { text: "三小强", link: "/three/javascript/methods" },
      { text: "Vue", link: "/vue/sourceCode/computed" },
      { text: "浏览器", link: "/chrome/principle/chrome" },
      { text: "HTTP", link: "/http/edition/0.9" },
    ],
    sidebar: {
      "/three/": [
        {
          title: "JavaScript", // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            ["/three/javascript/methods", "一些js方法"],
            ["/three/javascript/tips", "js小技巧"],
          ],
        },
        {
          title: "css",
          collapsable: true,
          children: [
            ["/three/css/", "readme"],
            ["/three/css/one", "one"],
          ],
        },
        {
          title: "html",
          collapsable: true,
          children: [["/three/html/", "readme"]],
        },
      ],
      "/vue/": [
        {
          title: "源码相关", // 侧边栏名称
          collapsable: true, // 可折叠
          children: [["/vue/sourceCode/computed", "computed"]],
        },
      ],
      "/chrome/": [
        {
          title: "一些原理", // 侧边栏名称
          collapsable: true, // 可折叠
          children: [["/chrome/principle/chrome", "这里改名字"]],
        },
      ],
      "/http/": [
        {
          title: "版本", // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            ["/http/edition/0.9", "0.9版本"],
            ["/http/edition/1.0", "1.0版本"],
            ["/http/edition/1.1", "1.1版本"],
            ["/http/edition/2.0", "2.0版本"],
          ],
        },
        {
          title: "状态码", // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            ["/http/code/1xx", "1xx"],
            ["/http/code/2xx", "2xx"],
            ["/http/code/3xx", "3xx"],
            ["/http/code/4xx", "4xx"],
            ["/http/code/5xx", "5xx"],
          ],
        },
        {
          title: "缓存", // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            ["/http/cache/S-cache", "强缓存"],
            ["/http/cache/C-cache", "协商缓存"],
            ["/http/cache/compare", "两者对比"],
          ],
        },
        {
          title: "原理", // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            ["/http/principle/mi.md", "加密"],
            ["/http/principle/ssl.md", "SSL"],
            ["/http/principle/polling.md", "轮询"],
            ["/http/principle/proxy.md", "代理"],
          ],
        },
        // { title: "参考", path: "/http/guide" },
      ],
    },
  },
  serviceWorker: true, //是否开启PWA
};
