var Webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/');
var APP_DIR = path.resolve(__dirname, 'src/client');

var config = {
    context: APP_DIR,
    devtool: 'source-map',
    entry :[
        path.resolve(BUILD_DIR,'main.js')
//        './src/client/main.js'
    ],
    output: {
        path: BUILD_DIR,
        publicPath: '/public/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
                    {
                        test: /\.jsx?$/,
                        loader: 'babel-loader',
                        exclude: /(node_modules[\\\/]+(?!react-icons)|bower_components)/,
                    },
                    {
                        test: /\.s?css$/,
                        loader: "style-loader!css-loader?sourceMap&localIdentName=[local]--[hash:base64:5]!sass-loader",
                    },
                    {test: /\.less$/, loader: "style-loader!css-loader!less-loader"},
                    {test: /\.png/, loader: "url-loader?limit=100000&mimetype=image/png"},
                    {test: /\.gif/, loader: "url-loader?limit=100000&mimetype=image/gif"},
                    {test: /\.jpg/, loader: "file-loader"},
                    {test: /\.svg/, loader: "url-loader?limit=10000"},
                    {test: /\.woff/, loader: "url-loader?limit=100000"},
                    {test: /\.woff2/, loader: "url-loader?limit=100000"},
                    {test: /\.ttf/, loader: "file-loader"},
                    {test: /\.eot/, loader: "file-loader"}
                ]
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin({multiStep:false}),
//        new Webpack.optimize.CommonsChunkPlugin({
//            name: 'shared',
//            filename: 'shared.js',
//            minChunks(module, count) {
//                var context = module.context;
//                return (context && context.indexOf('node_modules') >= 0) || count >= 2; 
//            }
//        }),
    ]
};

module.exports = config;
