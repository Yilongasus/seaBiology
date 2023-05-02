const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title = '海生博物館'
      return args
    })
  }
}
