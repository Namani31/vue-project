// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

// build 할 때 `build`가 `docs`로 이름이 변경되게 함
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/VUE_PROJECT/" : "/",
  outputDir: "docs",
};