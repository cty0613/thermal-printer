const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js', // 엔트리 포인트 파일
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
      "buffer": require.resolve("buffer/"),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
  mode: 'development',
};