const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  return {
    entry: {
      main: "./wwwroot/source/app.js", // Entry point for React
    },
    output: {
      path: path.resolve(__dirname, "wwwroot/dist"),
      filename: "bundle.js",
      publicPath: "/dist/", // For HMR and static file serving
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
          ],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"], // Support .js and .jsx files
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: "react",
        ReactDOM: "react-dom",
      }),
      new MiniCssExtractPlugin({
        filename: "styles.css",
      }),
      ...(isProduction ? [] : [new webpack.HotModuleReplacementPlugin()]),
    ],
    optimization: {
      minimizer: [new UglifyJsPlugin()],
    },
    devtool: isProduction ? false : "source-map", // Source maps for dev debugging
    mode: isProduction ? "production" : "development",
  };
};
