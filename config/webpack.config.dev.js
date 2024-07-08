const path = require("path");
const paths = require("./paths");

module.exports = {
  mode: "development",
  entry: [paths.src + "/index.tsx"],
  module: {
    rules: require("./webpack.rules"),
  },
  output: {
    filename: "js/[name].js",
    chunkFilename: "js/vendors/[chunkhash]/[name].chunk.js",
    path: paths.build,
    asyncChunks: true,
    publicPath: "/",
  },
  plugins: require("./webpack.plugins"),
  resolve: {
    roots: [
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "node_modules"),
    ],
    modules: ["src", "node_modules"],
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
    alias: require("./webpack.aliases"),
  },
  stats: "errors-warnings",
  devtool: "eval-nosources-cheap-source-map",
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    static: {
      directory: paths.public,
      serveIndex: true,
    },
    devMiddleware: {
      index: true,
      mimeTypes: { phtml: "text/html" },
      publicPath: "/",
      serverSideRender: true,
      writeToDisk: true,
    },
    port: "auto",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  performance: {
    hints: false,
  },
};
