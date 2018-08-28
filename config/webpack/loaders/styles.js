module.exports = {
  test: /\.(scss|sass)$/i,
  use: [
    {
      loader: 'vue-style-loader',
      options: { sourceMap: true }
    }, {
      loader: 'style-loader',
      options: { sourceMap: true }
    }, {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        // modules: true
        sourceMap: true,
      }
    }, {
      loader: 'sass-loader',
      options: { sourceMap: true }
    }, {
      loader: 'postcss-loader',
      options: { sourceMap: true }
    },
  ]
};
