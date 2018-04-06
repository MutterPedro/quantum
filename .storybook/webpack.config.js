const path = require('path');

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
      },{
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      }],
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {}
      }]
    },
    {
      test: /\.(woff|woff2|ttf|svg|eot)$/,
      loader: 'url?limit=10240&name=fonts/[name]-[hash:7].[ext]',
      include: [/[\/\\]node_modules[\/\\]semantic-ui-less[\/\\]/]
    }],
  },
};
