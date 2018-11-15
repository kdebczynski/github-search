const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const devServer = require("./devServer.js");

module.exports = () => merge(common(), {
    mode: "development",
    devServer
});
