const path = require('path');

module.exports = function override(config, env) {
  if (process.env.GH_PAGES === 'true') {
    config.output.publicPath = './'; // build 경로 변경
  }
  config.resolve.alias = {
    '@': path.resolve(__dirname, 'src/'),
  };
  return config
}