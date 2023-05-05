const pjson = require("./package.json");
const PACKAGE_VERSION = "'" + pjson.version + "'";
const Timestamp = new Date().getTime();
const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/p",
  outputDir: "intellaParking",
  devServer: {
    proxy: {
      "/cart-server": {
        target: "https://s.intella.co/",
        changeOrigin: true,
      },
    },
  },
  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
    },
  },
  configureWebpack: {
    output: {
      filename: `js/[name]_${PACKAGE_VERSION}_${Timestamp}.js`,
      chunkFilename: `js/[name]_${PACKAGE_VERSION}_${Timestamp}.js`,
    },
  },
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
});
