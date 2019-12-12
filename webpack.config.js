const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    App: "./app/assets/scripts/App.js",
    Vendor: "./app/assets/scripts/Vendor.js"
  },
  output: {
    path: path.resolve(__dirname, './app/temp/scripts'),
    filename: '[name].js',
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      },

      test: /\.js$/,
      /*apply babel for js-files only*/
      include: [
        path.resolve(__dirname, "app")
      ],
      exclude: [
        path.resolve(__dirname, "node_modules")
      ],
      /*says the babel that no js-files have to be processed*/
    }],
  },
};