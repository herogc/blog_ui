module.exports = {
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            // 以设计稿750为例， html 文字大小: 750 / 10 = 75 页面元素rem值： 页面元素的px 值 / 75
            // 因为flexible是默认将屏幕分为10等分，但是当屏幕大于750（自定义的设计稿值）的时候希望不要再变大html字体了，这个时候就要手动通过媒体查询设置一下，当屏幕宽度大于750，html里的font-size：75px，并且要把权重提到最高！
            // remUnit: 37.5
            remUnit: 12
          })
        ]
      }
    }
  }
}
