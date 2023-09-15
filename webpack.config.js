const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const ESLintPlugin = require("eslint-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
// const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
    context: path.resolve(__dirname, "src"),  // место где лежат все исходники приложения (папка от которой будет отталкиваться webpack)
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[name].[contenthash][ext]",
    filename: "bundle.js",
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new ESLintPlugin({ fix: true }),
    new HtmlWebpackPlugin({
        template: "./index.html"
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.join(__dirname, "src", "images"),
    //       to: path.join(__dirname, "dist", "images"),
    //     },
    //   ],
    // }),
  ],
  mode: "development",
  devtool: "source-map",
  devServer: {
    // static: path.resolve(__dirname, 'dist'),
    port: 3002,
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(ico|png|jpg|jpeg|svg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
}
