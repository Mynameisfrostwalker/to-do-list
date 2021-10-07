const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/scripts/main.js',
        initialpage: './src/scripts/initialpage.js',
        DomDisplay: './src/scripts/DomDisplay.js',
        todo: './src/scripts/todo.js',
        event: './src/scripts/events.js',
        formInputs: './src/scripts/formInputs.js',
        todolistDisplay: './src/scripts/todolistDisplay.js',
        tabSwitch: './src/scripts/tab-switch.js',
        dateProject: './src/scripts/dateProject.js',
        localStorage: './src/scripts/localStorage.js',
        JsonFunction: './src/scripts/Json-function.js',
        fireBase: './src/scripts/fireBase.js',
        signInPage: './src/scripts/signInPage.js',
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/images/favicon.ico'
        }),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
                { from: './src/styles/reset.css', to: 'style' },
            ],
        }),
    ],
    module: {
        rules: [{
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpg|svg|jpeg|gif|)$/i,
                type: 'asset/resource',
            },
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    experiments: {
        topLevelAwait: true,
    },
};