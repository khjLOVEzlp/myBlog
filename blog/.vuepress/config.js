module.exports = {
  title: "BLOG",
  description: "This is a blog example built by VuePress",
  theme: "@vuepress/theme-blog",
  themeConfig: {
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions;
    },
    nav: [
      {
        text: "JS",
        link: "/",
      },
      {
        text: "HTML",
        link: "/tag/",
      },
      {
        text: "LINUX",
        link: "/linux/",
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
            pagination: {
              lengthPerPage: 5,
            },
          },
          {
            id: "tags",
            dirname: "tag",
            path: "/tag/",
            pagination: {
              lengthPerPage: 5,
            },
          },
          {
            id: "linux",
            dirname: "linux",
            path: "/linux/",
            pagination: {
              lengthPerPage: 5,
            },
          },
        ],
      },
    ],
  ],
};
