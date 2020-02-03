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
        test: /\.s[ac]ss$/i,
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
      }
    ]
  }
}
