const path = require("path")

module.exports = {
  propsParser: require("react-docgen-typescript").parse,
  webpackConfig: Object.assign({}, require("./docs/webpack.style.config.js"), {}),
  ignore: [
    "**/__tests__/**",
    "**/*.test.{js,jsx,ts,tsx}",
    "**/*.spec.{js,jsx,ts,tsx}",
    "**/*.d.ts"
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, "docs/Wrapper")
  },
  styleguideDir: "docs.build",
  sections: [
    {
      name: "Documentation",
      content: "./README.md",
      sections: [
        ,
        {
          name: "Atoms",
          components: "src/components/atoms/**/*.tsx"
        },
        {
          name: "Molecules",
          components: "src/components/molecules/**/*.tsx"
        },
        {
          name: "Organisms",
          components: "src/components/organisms/**/*.tsx"
        },
        {
          name: "Templates",
          components: "src/components/templates/**/*.tsx"
        }
      ]
    }
  ]
}
