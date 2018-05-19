const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin')

const rules = ['assets', 'styles', 'vue', 'js'].map(filename => require(`./loaders/${filename}`))

module.exports = {
  mode: process.env.NODE_ENV,

  context: path.resolve(__dirname, "../../assets"),

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
    ]
  },

  plugins: [
    new VueLoaderPlugin()
  ],

  module: {
    rules
  }
};
