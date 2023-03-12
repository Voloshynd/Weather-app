"use strict";

let path = require("path");
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/js",
  },
  watch: true,

  devtool: "source-map",

  module: {},
  plugins: [
    new Dotenv(),
    ]
};
