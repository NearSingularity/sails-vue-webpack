module.exports = {
  test: /\.(scss|sass)$/i,
  use: [
    {
      loader: 'vue-style-loader',
    }, {
      loader: 'style-loader',
    }, {
      loader: 'css-loader',
      options: {
        // modules: true
      }
    }, {
      loader: 'sass-loader',
      options: { sourceMap: true }
    }, {
      loader: 'postcss-loader',
    },
  ]
};
