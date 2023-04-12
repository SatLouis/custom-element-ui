const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: false,
  lintOnSave: "warning",
  devServer: {
    client: {
      logging: "warn",
      overlay: false,
    },
  },
});
