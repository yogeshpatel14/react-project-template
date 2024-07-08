const paths = require("./paths");
var path = require("path");

module.exports = {
  mode: "production",
  entry: [paths.src + "/index.tsx"],
  module: {
    rules: require("./webpack.rules"),
  },
  output: {
    filename: "js/[name].[chunkhash].js",
    chunkFilename: "js/vendors/[name]/[name].[chunkhash].chunk.js",
    clean: true,
    path: paths.build,
    asyncChunks: true,
    ignoreBrowserWarnings: true,
    publicPath: "/",
  },
  plugins: [...require("./webpack.plugins")],
  resolve: {
    roots: [
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "node_modules"),
    ],
    modules: ["src", "node_modules"],
    extensions: ["", ".js", ".ts", ".jsx", ".tsx", ".css"],
    alias: {
      // Custom Aliases
      ...require("./webpack.aliases"),
    },
  },
  stats: "errors-warnings",
  optimization: {
    minimize: true,
    sideEffects: true,
    concatenateModules: true,
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: 10,
      minSize: 0,
      cacheGroups: {
        vendor: {
          name: "vendors",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
        },
      },
    },
  },
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
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
