var path = require("path");
var webpack = require("webpack");
var autoprefixer = require("autoprefixer");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
var PKG_VERSION = require("./package.json").version;
// Assert this just to be safe.
if (process.env.NODE_ENV !== "production") {
  throw new Error("Production builds must have NODE_ENV=production.");
}

module.exports = {
  devtool: "cheap-module-source-map",
  entry: ["./src/index"],
  output: {
    // The build folder.
    path: path.join(__dirname, "dist"),
    // Generated JS file names (with nested folders).
    // There will be one main bundle, and one file per asynchronous chunk.
    // We don't currently advertise code splitting but Webpack supports it.
    filename: "js/[name].js",
    chunkFilename: "js/[name].[chunkhash:8].chunk.js",
    // We inferred the "public path" (such as / or /my-project) from homepage.
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      config: path.join(__dirname, "src", "config", "production")
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, "index.html"),
      inlineSource: ".(js|css)$",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new HtmlWebpackInlineSourcePlugin(),
    // This helps ensure the builds are consistent if source hasn't changed:
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: path.join(__dirname, "src")
      },
      {
        test: /\.coffee$/,
        loader: "coffee-loader",
        include: path.join(__dirname, "node_modules")
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, "node_modules"),
        loader: "style-loader!css-loader!postcss-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]&importLoaders=1",
        include: path.join(__dirname, "src")
      },
      {
        test: /\.json$/,
        include: [
          path.join(__dirname, "src"),
          path.join(__dirname, "node_modules")
        ],
        loader: "json-loader"
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|svg|ttf|woff|woff2)(\?.*)?$/,
        exclude: /\/favicon.ico$/,
        include: [
          path.join(__dirname, "src"),
          path.join(__dirname, "node_modules")
        ],
        loader: "file-loader",
        query: {
          name: "/files/[name].[ext]"
        }
      },
      // A special case for favicon.ico to place it into build root directory.
      {
        test: /\/favicon.ico$/,
        include: [path.join(__dirname, "src")],
        loader: "file-loader",
        query: {
          name: "/favicon.ico"
        }
      },
      // "html" loader is used to process template page (index.html) to resolve
      // resources linked with <link href="./relative/path"> HTML tags.
      {
        test: /\.html$/,
        loader: "html-loader",
        query: {
          attrs: ["link:href"]
        }
      }
    ]
  }
};
