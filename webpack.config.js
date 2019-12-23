const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const path = require('path');
const htmlPath = './src/index.html'

module.exports = (env, argv) => {
  const { mode } = argv
  return ({
    resolve: {
      alias: {
        "@views": path.resolve(__dirname, 'src', 'js', 'views'),
      },
    },
    devtool: "sourcemap",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader'
            }
          ]
        },
        {
          test: /\.scss$/,
          loader: [
            MiniCSSExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {},
            }
          ]
        }
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: mode === 'production' ? `!!prerender-loader?string!${htmlPath}` : htmlPath,
      }),
      new MiniCSSExtractPlugin({
        filename: 'main.css',
      })
    ],
    devServer: {
      historyApiFallback: true,
    }
  });
}