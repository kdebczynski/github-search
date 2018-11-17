module.exports = ({ publicPath = "/" } = {}) => ({
    contentBase: publicPath,
    publicPath,
    historyApiFallback: true
});
