const path = require('path');
const webpack = require('webpack')
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
    new webpack.EnvironmentPlugin(['NODE_ENV'])
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

    externals: {
      up: 'up'
    },

    resolve: {
      fallback: {
        // "imba/core": path.resolve(__dirname, 'node_modules/imba/dist/imba.min.js'),
        // "layerCompose": path.resolve(__dirname, '.yalc/layerCompose/lib/index.js'),
        "util": false,
        "os": false,
        "path": false,
        "leveldown": false,
        "assert": false
      }
    },

    output: { path: __dirname + '/dist/client', filename: "[name].js" }
  }]
