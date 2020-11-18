module.exports = {
  title: "programmer",
  description: "This is a blog example built by VuePress",
  theme: "@vuepress/theme-blog",
  themeConfig: {
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions;
    },
    nav: [
      {
        text: "JavaScript",
        link: "/",
      },
      {
        text: "HTML+CSS",
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
        ],
      },
    ],
  ],
};
