const path = require('path');

//
// "long",
//     "pino-pretty",
//     "fast-json-stringify",

module.exports = {
  target: "node",
  externals: {
    "uWebSockets.js":"commonjs2 uWebSockets.js",
  },
  module: {
    rules: [
      {
        test: /\.imba$/,
        loader: 'imba/loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      }, {
        test: /\.css$/,
        loader: 'css-loader',
        options: {
          modules: {
            mode: 'local',
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
            context: path.resolve(__dirname, 'src'),
            hashPrefix: 'my-custom-hash',
          },
        },
      }
    ]
  },
  resolve: {
    extensions: [".imba", ".js", ".json", ".css"]
  },
  entry: "./src/index.js",
  output: { path: __dirname + '/dist', filename: "index.js" }
}
