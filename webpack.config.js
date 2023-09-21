const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    app: `${__dirname}\\src\\index.js`,
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 5500,
    hot: true,
  },
  target: "web",
  module: {
    rules: [
      {
        test: /.html$/i,
        loader: "html-loader",
        options: {
          minimize: true,
        },
      },
      {
        test: /.(css|scss)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin({}), new TerserPlugin({})],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: `${__dirname}/src/index.html`,
    }),
    new MiniCssExtractPlugin({ filename: "css/style.css" }),
  ],
};
