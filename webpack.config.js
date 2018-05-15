const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const env = process.env.NODE_ENV;
const __DEV__ = env === "development";
const __PRODUCTION__ = env === "production";

const paths = {
  src: path.resolve(__dirname, "src"),
  dist: path.resolve(__dirname, "dist")
};

//noinspection JSUnresolvedVariable
module.exports = {
  devtool: "inline-source-map",
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path: paths.dist,
    filename: __PRODUCTION__
      ? "[name].bundle.[chunkhash].js"
      : "[name].bundle.js",
    chunkFilename: __PRODUCTION__
      ? "[name].bundle.[chunkhash].js"
      : "[name].bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      filename: "./index.html"
    })
  ],
  devServer: {
    historyApiFallback: true,
    inline: false,
    contentBase: "./dist"
  }
};
