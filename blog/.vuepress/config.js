module.exports = {
  title: "kang",
  description: "This is a blog example built by VuePress",
  theme: "@vuepress/theme-blog",
  themeConfig: {
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions;
    },
    nav: [
      {
        text: "前端",
        link: "/",
      },
      {
        text: "文集",
        link: "/tag/",
      },
    ],
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/khjLOVEzlp",
        },
      ],
      copyright: [
        {
          text: "MIT Licensed | Copyright © 2018-present Vue.js",
          link: "",
        },
      ],
    },
  },
  plugins: [
    [
      "@vuepress/blog",
      {
        directories: [
          {
            id: "post",
            dirname: "_posts",
            path: "/",
          },
          {
            id: "tags",
            dirname: "tag",
            path: "/tag/",
          },
        ],
      },
    ],
  ],
};
