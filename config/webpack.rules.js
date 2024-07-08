const { inProduction } = require("./webpack.helper");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [
  { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ["babel-loader"] },
  {
    // Typescript loader
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: "ts-loader",
      options: {
        transpileOnly: true,
      },
    },
  },
  {
    // CSS Loader
    test: /\.css$/,
    use: [
      {
        loader: !inProduction() ? "style-loader" : MiniCssExtractPlugin.loader,
      },
      { loader: "css-loader" },
    ],
  },
  {
    // SCSS (SASS) Loader
    test: /\.s[ac]ss$/i,
    use: [
      {
        loader: !inProduction() ? "style-loader" : MiniCssExtractPlugin.loader,
      },
      { loader: "css-loader" },
      { loader: "sass-loader" },
    ],
  },
  {
    // Less loader
    test: /\.less$/,
    use: [
      {
        loader: !inProduction() ? "style-loader" : MiniCssExtractPlugin.loader,
      },
      { loader: "css-loader" },
      { loader: "less-loader" },
    ],
  },
  {
    // Assets loader
    // More information here https://webpack.js.org/guides/asset-modules/
    test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg|eot|ttf|woff|woff2)$/i,
    type: "asset",
    generator: {
      filename: "assets/images/[hash][ext][query]",
    },
  },
];
