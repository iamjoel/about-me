module.exports = {
  title: '关于 Joel',
  description: 'About Joel',
  plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    // https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F
    nav: [
      {text: 'GitHub', link: 'https://github.com/iamjoel'},
      {text: '简书', link: 'https://www.jianshu.com/u/EhUmA3'}
    ],
    // https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F
    sidebar: [{
      title: '关于我',
      path: '/',
      collapsable: true,
    }]
  }
}