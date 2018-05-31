// const shared = require('./shared')

module.exports = {
  devServer: {
    proxy: {
      '/api': 'http://localhost:1337'
    },
    publicPath: '/',
    https: false,
    hot: true,
    inline: true,
    noInfo: true,
    compress: true,
    historyApiFallback: true,
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/,
  },
};
