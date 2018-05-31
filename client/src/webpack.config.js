const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: path.join(__dirname, '../../server/public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'inline-source-map'
}
