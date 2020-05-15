const path = require('path');

module.exports = {
  entry: {
    'planetas-ng': [
      path.resolve(__dirname, 'components/pluton/pluton.component.js'),
      path.resolve(__dirname, 'components/tierra/tierra.component.js'),
      path.resolve(__dirname, 'components/marte/marte.component.js'),
    ]
  },
  output: {
    filename: '[name].vendor.js',
    path: path.resolve(__dirname, './dist/'),
  }
}