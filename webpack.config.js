const path = require("path"); // npm package for absolute paths

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    filename: "bundled.js", // name the file to be
    path: path.resolve(__dirname, "app"), // path file should be written to
  },
  mode: "development",
  watch: true, // makes webpack to run whenever a file is changed
};
