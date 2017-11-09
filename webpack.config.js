var webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack/hot/only-dev-server',
        './src/index',
    ],

    output: {
        path: __dirname + "/public/",
        filename: 'bundle.js'
    },
    devServer: {
        hot: true,
        inline: true,
        historyApiFallback: true,
        host:"0.0.0.0",
        port: 4000,
        contentBase: __dirname+'/public/',
    },
    module:{
        loaders:[{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                plugins: ["react-hot-loader/babel"],
                cacheDirectory:true,
                presets: ["es2015","react"]
            },
            exclude: /node_modules/,
        }],
    },

    plugins: [ 
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};