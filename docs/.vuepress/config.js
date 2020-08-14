module.exports = {
  title: "小飞的博客",
  head: [["link", { rel: "icon", href: "/avatar.jpeg" }]],
  themeConfig: {
    logo: "/avatar.jpeg",
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
          children: [["/http/edition/0.9", "0.9版本"]],
        },
      ],
    },
  },
  serviceWorker: true, //是否开启PWA
};
