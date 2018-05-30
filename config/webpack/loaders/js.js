module.exports = {
  test: /\.(js|jsx)?$/,
  exclude: file => (
    /node_modules/.test(file) &&
    !/\.vue\.js/.test(file)
  ),
  use: [
    {
      loader: 'babel-loader',
    }
  ]
};
