var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production')
};


module.exports = {
    entry: {
        'polyfills': './src/polyfill.js',
        'vendor': './src/vendor.js',
        'app': './src/index.js'
    },
    output: {
        path: helpers.root('dist'),
        publicPath: '',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    resolve: {
        extensions: ['.es6', '.js']
    },
    module: {
        rules: [

            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!autoprefixer-loader'})
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!autoprefixer-loader!sass-loader'})
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!autoprefixer-loader!less-loader'})
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new webpack.DefinePlugin(GLOBALS),
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ],
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
};