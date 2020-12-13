const path = require('path');
const WebpackWatchedGlobEntries = require('webpack-watched-glob-entries-plugin');

const baseConfig = {
  externals: [{
    "uWebSockets.js":"commonjs2 uWebSockets.js",
  }
],
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.imba$/,
        loader: 'imba/loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static/styles/',
              publicPath: 'static/styles/',
            }
          },
        ]
      }
    ]
  },
  plugins: [
    new WebpackWatchedGlobEntries(),
  ],

  resolve: {
    extensions: [".imba", ".js", ".json", ".css"]
  },
}

module.exports = [{
  ...baseConfig,
  target: "node",
  externals: {
    "leveldown": "commonjs2 leveldown",
    "@sifrr/server": "commonjs2 @sifrr/server"
  },
  entry: WebpackWatchedGlobEntries.getEntries(
      [
        // Your path(s)
        path.resolve(__dirname, 'src/index.js'),
        // path.resolve(__dirname, 'src/pages*/*.imba')
      ]
  ),
  output: { path: __dirname + '/dist/server', filename: "[name].js" }
},
// client
  {
    ...baseConfig,
    target: "web",

    entry: WebpackWatchedGlobEntries.getEntries(
        [
          // Your path(s)
          path.resolve(__dirname, 'src/pages/**/*.client.js')
        ]
    ),

    resolve: {
      fallback: {
        "util": false,
        "os": false,
        "path": false,
        "leveldown": false,
        "assert": false
      }
    },

    output: { path: __dirname + '/dist/client', filename: "[name].js" }
  }]
