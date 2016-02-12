module.exports = {
  context: __dirname + '/lib',
  entry: {
    yaas: './index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: './index.js',
    libraryTarget: 'umd'
  }
}
