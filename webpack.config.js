// Node module syntax (CommonJS)
const path = require("path");

const config = {
  // Specifies the file that will serve as the entry point for bundling the application
  entry: ["@babel/polyfill", "./src/index.js"],
  // Defines the location where the bundled code will be stored
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.js",
  },
  // When we use the dev-server, the code is not bundled the usual way into the main.js file. The result of the bundling exists only in memory.
  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    compress: true,
    port: 3000,
  },
  module: {
    // Loaders
    rules: [
      // The definition for a single loader consists of three parts:
      {
        // test property specifies that the loader is for files that have names ending with .js.
        test: /\.js$/,
        // specifies that the processing for those files will be done with babel-loader
        loader: "babel-loader",
        // options are specifying parameters for the loader, that configure its functionality.
        options: {
          presets: ["@babel/preset-react", "@babel/preset-env"],
        },
      },
      {
        test: /\.css$/,
        // The job of the css loader is to load the CSS files
        // The job of the style loader is to generate and inject a style element that contains all of the styles of the application
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

module.exports = config;
