const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const devServer = require("./devServer.js");

module.exports = (env = {}) => merge(common(env), {
    mode: "development",
    devServer: devServer(env)
});
