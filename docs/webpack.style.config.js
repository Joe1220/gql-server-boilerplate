const path = require("path")

module.exports = {
  resolve: {
    alias: {
      src: path.resolve(__dirname, "..", "src"),
      pages: path.resolve(__dirname, "..", "pages")
    }
  },
  module: {
    rules: [
      // Babel loader will use your project’s babel.config.js
      {
        test: /\.(ts|tsx)$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [["react-app", { flow: false, typescript: true }]]
        }
      },
      {
        test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg|\.woff(2)?|\.eot|\.ttf/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[md5:hash:hex:6].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(scss|sass)$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          // Compiles Sass to CSS
          "sass-loader"
        ]
      },
      {
        test: /\.css$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              modules: false
            }
          }
        ]
      }
    ]
  }
}
