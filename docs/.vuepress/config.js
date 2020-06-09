module.exports = {
  title: "小飞的博客",
  head: [["link", { rel: "icon", href: "/avatar.png" }]],
  themeConfig: {
    logo: "/avatar.png",
    nav: [
      { text: "主页", link: "/" },
      { text: "头部导航一", link: "/blog/javascript/" },
      { text: "头部导航二", link: "/about/" },
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
            ["/blog/css/two", "two"],
          ],
        },
      ],
      "/about/": ["", "a", "b"],
    },
  },
};
