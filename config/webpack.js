const options = require(`./webpack/shared`);
const development = require(`./webpack/development`);
const production = require(`./webpack/production`);

module.exports.webpack = {
  options,
  development,
  production
};
