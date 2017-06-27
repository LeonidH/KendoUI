const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpack = require('webpack');

const path = require('path');

const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');


const isProd = process.env.NODE_ENV === 'production';
const cssDev = [
    'style-loader',
    'css-loader?sourceMap',
    'sass-loader'
];
const cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'sass-loader'],
    publicPath: '/dist'
});
const cssConfig = isProd ? cssProd : cssDev;

module.exports = {
    entry: {
        app: './src/index.js',
        vendor: ['kendo-ui-core', 'jquery'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: cssConfig,
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader',
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [
                'file-loader?name=img/[name].[ext]',
                'image-webpack-loader?bypassOnDebug',
            ],
        },
        {
            test: /\.(woff2?)$/,
            use: 'url-loader?limit=10000&name=fonts/[name].[ext]',
        },
        {
            test: /\.(ttf|eot)$/,
            use: 'file-loader?name=fonts/[name].[ext]',
        },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        host: 'localhost',
        port: 9191,
        stats: {
            cached: true,
            cachedAssets: true,
            chunks: true,
            chunkModules: false,
            colors: true,
            hash: false,
            reasons: true,
            timings: true,
            version: false,
        },
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'KendoUI',
            hash: true,
            minify: {
                collapseWhitespace: true,
            },
            template: './src/index.html',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
        }),
        new ExtractTextPlugin({
            filename: '/css/[name].css',
            disable: !isProd,
            allChunks: true,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        // Make sure this is after ExtractTextPlugin!
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync(path.join(__dirname, 'src/*.html')),
        }),
    ],
    devtool: 'inline-source-map',
};