const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
    context: resolve(__dirname, 'src'),
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './index.js'
    ],
    output: {
        path: resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },

    /**
     * Watch mode with Chrome DevTools
     */
    devtool: "inline-source-map",

    /**
     * Webpack Dev Server
     */
    devServer: {
        contentBase: resolve(__dirname, "build"),
        compress: true,
        port: 3000,
        clientLogLevel: "info",
        historyApiFallback: true,
        hot: true,
        overlay: true
    },

    plugins : [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};