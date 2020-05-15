const path = require('path');

module.exports = {
  entry: {
    'parse-component': [
      path.resolve(__dirname, '../dist/parse-component/polyfills-es5.js'),
      path.resolve(__dirname, '../dist/parse-component/main-es5.js')
    ]
  },
  output: {
    filename: '[name].vendor.js',
    path: path.resolve(__dirname, '../dist/parse-component/'),
  }
}
