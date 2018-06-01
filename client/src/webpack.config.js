const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'index.tsx'),
  output: {
    path: path.join(__dirname, '../../server/public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devtool: 'inline-source-map'
}
