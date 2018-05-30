
const extractCSS = process.env.NODE_ENV !== 'development';

module.exports = {
  test: /\.vue?$/,
  use: [
    {
      loader: 'vue-loader',
      options: { extractCSS }
    }
  ]
};
