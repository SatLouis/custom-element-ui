const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: false,
  devServer: {
    client: {
      logging: "warn",
      overlay: {
        errors: false,
      },
    },
  },
});
