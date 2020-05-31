const path = require("path")
const withSass = require("@zeit/next-sass")
const withCSS = require("@zeit/next-css")

module.exports = withCSS(
  withSass({
    webpack: (config, options) => {
      config.resolve.alias["src"] = path.join(__dirname, "src")
      config.resolve.alias["pages"] = path.join(__dirname, "pages")
      config.module.rules.forEach((rule) => {
        if (String(rule.test) === String(/\.css$/)) {
          rule.use.forEach((u) => {
            if (u.options) {
              u.options.modules = false
            }
          })
        }
      })
      return config
    },
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]"
    },
    sassOptions: {
      includePaths: [path.resolve(__dirname, "src"), path.resolve(__dirname, "pages")]
    }
  })
)
