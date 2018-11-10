const { resolve } = require('path');

const rootPath = (path = "") => resolve(__dirname, "../" + path);
const distPath = rootPath("dist");
const srcPath = rootPath("src");

module.exports = {
    distPath,
    srcPath
};