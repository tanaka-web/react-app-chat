const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve('./src'),
    ],
    extensions: ['.tsx', '.ts', '.js', 'json']
  },
  devtool: "source-map",
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    contentBase: './dist'
  }
};