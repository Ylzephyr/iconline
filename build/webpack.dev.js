const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        dev: path.resolve(__dirname, '../src', 'App.tsx')
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.css$/, use: [{ loader: "style-loader" }, { loader: "css-loader" }] }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
            filename: "index.html",
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: false,
                dropConsole: true
            },
        })
    ],
    devServer: {
        port: 3001,
        open: true,
        hot: true,
        historyApiFallback: true
    }
}