module.exports = {
  title: "kang",
  description: "This is a blog example built by VuePress",
  theme: "@vuepress/theme-blog", // OR shortcut: @vuepress/blog
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions;
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
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
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/ulivz",
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
};
