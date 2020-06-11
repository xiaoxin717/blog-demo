module.exports = {
  title: "小飞的博客",
  head: [["link", { rel: "icon", href: "/avatar.jpeg" }]],
  themeConfig: {
    logo: "/avatar.jpeg",
    nav: [
      { text: "主页", link: "/" },
      { text: "三小强", link: "/blog/javascript/" },
      { text: "Vue", link: "/vue/" },
      { text: "浏览器", link: "/chrome/" },
      { text: "HTTP", link: "/http/" },
    ],
    sidebar: {
      "/blog/": [
        {
          title: "JavaScript", // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            ["/blog/javascript/", "readme"],
            ["/blog/javascript/one", "one"],
          ],
        },
        {
          title: "css",
          collapsable: true,
          children: [
            ["/blog/css/", "readme"],
            ["/blog/css/one", "one"],
          ],
        },
        {
          title: "html",
          collapsable: true,
          children: [["/blog/html/", "readme"]],
        },
      ],
      "/vue/": ["", "a", "b"],
    },
  },
  serviceWorker: true, //是否开启PWA
};
