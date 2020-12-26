// Node module syntax (CommonJS)
const path = require("path");

const config = {
  // Specifies the file that will serve as the entry point for bundling the application
  entry: "./src/index.js",
  // Defines the location where the bundled code will be stored
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.js",
  },
};

module.exports = config;
