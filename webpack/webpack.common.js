const { srcPath, distPath } = require("./paths.js");
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(srcPath, distPath)

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
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
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
        })
    ]
});