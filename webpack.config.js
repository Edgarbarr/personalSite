const path = require('path');

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
    devServer: {
        historyApiFallback: true
    },

}