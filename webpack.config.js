const HtmlPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

// eslint-disable-next-line
module.exports = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  output: {
    filename: "bundle.[fullhash].js",
    publicPath: "/",
  },
  devServer: {
    port: 7891,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlPlugin({ template: "./src/index.html" }),
    new CleanWebpackPlugin(),
    new Dotenv({
      systemvars: true,
    }),
    new CopyPlugin({
      patterns: [{ from: "public" }],
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre",
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  require("postcss-import")(),
                  require("autoprefixer")(),
                  require("postcss-nested")(),
                  require("postcss-simple-vars")(),
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, "src/components"),
        use: [
          "style-loader",
          {
            loader: "typings-for-css-modules-loader",
            options: {
              modules: true,
              namedExport: true,
            },
          },
        ],
      },
      {
        test: /\.(jpeg|jpg|png|svg)$/,
        use: {
          loader: "url-loader",
          options: { limit: 1000 },
        },
      },
    ],
  },
};
