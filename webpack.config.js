const path = require("path");

module.exports = {
    context: __dirname,
    entry: "./frontend/spaceflix.jsx",
    output: {
        path: path.resolve(__dirname, "app", "assets", "javascripts"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: ["@babel/env", "@babel/react"]
                    }
                }
            }
        ]
    },
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".jsx", "*"],
        alias: {
            css: path.resolve(__dirname, "frontend/css"),
            js: path.resolve(__dirname, "frontend/js"),
            store: path.resolve(__dirname, "frontend/redux/store"),
            util: path.resolve(__dirname, "frontend/redux/util"),
            reducers: path.resolve(__dirname, "frontend/redux/reducers"),
            actions: path.resolve(__dirname, "frontend/redux/actions")
        }
    }
};