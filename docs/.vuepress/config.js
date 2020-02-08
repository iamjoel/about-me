module.exports = {
  title: '关于 Joel',
  description: 'About Joel',
  dest: './dist', // 构建输出的位置，从项目根路径开始算。
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
    },{
      title: '原则&方法论',
      path: '/priciple',
    },{
      title: '技能',
      collapsable: true,
      children: [
        {title: '前端', path: '/tech/front-end'},
        {title: '后端', path: '/tech/back-end'},
      ]
    },]

  }
}