const withReactSvg = require('next-react-svg');
const path = require('path');

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'src/icons'),
  webpack(config, options) {
    return config;
  },
});
