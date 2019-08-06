const { srcPath, distPath } = require("./paths.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const webpack = require("webpack");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = ({ analyze = false, publicPath = "/" } = {}) => {
    return {
        entry: [
            "./src/index.js"
        ],
        output: {
            path: distPath,
            publicPath,
            filename: "index.bundle.js"
        },
        resolve: {
            modules: [
                srcPath,
                "node_modules"
            ],
            extensions: [
                "*", ".js", ".jsx"
            ]
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"]
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        {
                            loader: "style-loader"
                        },
                        {
                            loader: "css-loader",
                            options: {
                                modules: true,
                                localIdentName: "[local]___[hash:base64:5]"
                            }
                        },
                        {
                            loader: "sass-loader"
                        }
                    ]
                },
                {
                    test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                    loaders: ["file-loader"]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: srcPath + '/index.html'
            }),
            new webpack.DefinePlugin({
                WEBPACK_PUBLIC_PATH: JSON.stringify(publicPath)
            }),
            ...(analyze ? [new BundleAnalyzerPlugin()] : []),
            new CopyPlugin(
                [
                    { from: 'src/assets', to: 'assets' },
                    'src/manifest.json',
                    'src/sw.js'
                ],
                { ignore: ['.DS_Store'] }
            )
        ]
    };
};