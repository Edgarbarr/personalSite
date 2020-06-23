const path = require('path');
var BrotliGzipPlugin = require("brotli-gzip-webpack-plugin");
module.exports = {
    entry: "./client/src/index.jsx",
    output: {
        path: path.resolve(__dirname, "./client/dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    
    module: {
        rules: [
            {
                test: /\.(js|jsx|mp4)$/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
   
            }
            
        ]
    },
    plugins: [
        new BrotliGzipPlugin({
            asset: '[path].br[query]',
            algorithm: 'brotli',
            test: /\.(js|css|html|svg)$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        new BrotliGzipPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.(js|css|html|svg)$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ],
        
    devServer: {
        historyApiFallback: true
    }

}