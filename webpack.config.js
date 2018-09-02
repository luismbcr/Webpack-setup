const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output : {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      //here add the loaders
      {

        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use:'css-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/styles.css")
  ]
}
