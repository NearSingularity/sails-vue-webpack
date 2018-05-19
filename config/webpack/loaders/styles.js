module.exports = {
  test: /\.(scss|sass)$/i,
  use: [
    {
      loader: 'vue-style-loader',
    }, {
      loader: 'style-loader',
      options: {
        // hmr: isHMR,
        sourceMap: true
      }
    }, {
      loader: 'css-loader',
      options: {
        modules: true,
        sourceMap: true,
        localIdentName: '[local]_[hash:base64:8]',
        // minimize: isProduction,
        // importLoaders: 2,
      }
    }, {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
        // config: { path: postcssConfigPath }
      }
    }, {
      loader: 'sass-loader',
      options: { sourceMap: true }
    },
  ]
};
