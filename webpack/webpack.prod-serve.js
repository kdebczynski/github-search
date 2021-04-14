const { merge } = require("webpack-merge");
const prod = require("./webpack.prod.js");
const devServer = require("./devServer.js");

module.exports = (env = {}) => merge(prod(env), {
    devServer: devServer(env)
});
