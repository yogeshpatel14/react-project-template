const webpack = require("webpack");
const { inProduction } = require("./webpack.helper");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const paths = require("./paths");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = [
  new CleanWebpackPlugin(),
  new ForkTsCheckerWebpackPlugin(),
  !inProduction() && new webpack.HotModuleReplacementPlugin(),
  !inProduction() && new ReactRefreshWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: paths.public + "/index.html",
    favicon: paths.public + "/favicon.ico",
    inject: true,
    filename: "index.html",
  }),
  new MiniCssExtractPlugin({
    filename: "styles/[name].[chunkhash].css",
    chunkFilename: "styles/vendor/[name].[chunkhash].chunk.css",
  }),
  new CopyWebpackPlugin({
    patterns: [
      path.resolve(__dirname, "../public", "logo192.png"),
      path.resolve(__dirname, "../public", "manifest.json"),
      path.resolve(__dirname, "../public", "robots.txt"),
      // {
      //   from: paths.src + "/assets/images",
      //   to: "assets/images/",
      //   globOptions: {
      //     ignore: ["*.DS_Store"],
      //   },
      // },
    ],
  }),
].filter(Boolean);
