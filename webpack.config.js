const path = require('path');
const WebpackWatchedGlobEntries = require('webpack-watched-glob-entries-plugin');

module.exports = {
  target: "node",
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
          // {
          //   loader: 'css-loader',
          //   options: {
          //     modules: false 
          //     // {
          //     //   mode: 'local',
          //     // },
          //   },
          // }
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
  entry: WebpackWatchedGlobEntries.getEntries(
    [ 
      // Your path(s) 
      path.resolve(__dirname, 'src/index.js'),
      // path.resolve(__dirname, 'src/pages*/*.imba')
    ]
  ),
  output: { path: __dirname + '/dist', filename: "[name].js" }
}
