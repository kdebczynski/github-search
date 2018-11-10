const { srcPath, distPath } = require("./paths.js");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => ({
    entry: [
        srcPath + "/index.js"
    ],
    output: {
        path: distPath,
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
                    "style-loader",
                    "css-loader",
                    "sass-loader"
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
            template: srcPath + '/index.html',
            filename: './index.html'
        })
    ]
});