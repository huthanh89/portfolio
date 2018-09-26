//-----------------------------------------------------------------------------//
// Imports
//-----------------------------------------------------------------------------//

const path = require('path');

module.exports = {
  entry: './src/js/main.js',
  performance: { hints: false },
  output: {
    filename: 'bundle.js'
  },

  // Configure webpack to read pug, babel, etc.

  module: {
    rules: [
      {
        test: /.pug?$/,
        loader: 'pug-loader',
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['@babel/react']
        }
      }
    ]
  }
};

//-----------------------------------------------------------------------------//
