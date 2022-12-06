const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postCSSEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    autoprefixer,
    cssnano({ preset: 'default' }),
    postCSSEnv({ browsers: 'last 2 versions' }),
  ]
};