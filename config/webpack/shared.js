const path = require('path');

// TODO: put plugins somewhere else to be configured
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const rules = ['assets', 'styles', 'vue', 'js'].map(filename => require(`./loaders/${filename}`));

module.exports = {
  mode: process.env.NODE_ENV,

  context: path.resolve(__dirname, '../../assets'),

  entry: {
    app: './js'
  },

  output: {
    path: path.resolve(__dirname, '../../.tmp/public/js'),
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.js', '.vue'],
    modules: [
      'node_modules'
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'pages': path.resolve(__dirname, '../../assets/js/pages'),
      'components': path.resolve(__dirname, '../../assets/js/components'),
      'styles': path.resolve(__dirname, '../../assets/styles'),
    }
  },

  plugins: [
    new VueLoaderPlugin(),
    // new ExtractTextPlugin('styles/[name].bundle.css'),
    new CleanWebpackPlugin(['public'], {
      root: path.resolve(__dirname, '..', '.tmp'),
      verbose: true,
      dry: false
    }),
    new CopyWebpackPlugin([
      {
        from: './images',
        to: path.resolve(__dirname, '../..', '.tmp', 'public', 'images')
      },
      {
        from: './fonts',
        to: path.resolve(__dirname, '../..', '.tmp', 'public', 'fonts')
      }
    ]),
  ],

  module: {
    rules
  }
};
