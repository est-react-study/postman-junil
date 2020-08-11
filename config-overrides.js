module.exports = function override(config, env) {
  config.output.publicPath = './'; // build 경로 변경
  return config
}