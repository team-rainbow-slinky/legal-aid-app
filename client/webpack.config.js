/* eslint-env node */
//const CleanPlugin = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  // start here
  entry: './src/index.js',
  // put the build output here (not dev server)
  output: {
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  // mode (will eventually be cmd line arg in package.json scripts)
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 7844,
    historyApiFallback: true,
    proxy: {
      '/api': { target:'http://localhost:7890' }
    }
  },
  plugins: [
    // add plugins
    //new CleanPlugin('./dist/bundle.*.js'),
    new HtmlPlugin({ template: './src/index.html' })
  ],
  module: {
    rules: [
      // js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },

      // css
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require('autoprefixer')(),
                require('postcss-nested')(),
                require('postcss-simple-vars')()
              ]
            }
          }
        ]
      },

      // images
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: { limit: 1000 },
        },
      }
    ]
  }
};
