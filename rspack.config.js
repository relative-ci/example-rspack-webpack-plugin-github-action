const path = require('path');
const { RelativeCiAgentWebpackPlugin } = require('@relative-ci/agent');

const SRC_DIR = path.resolve(__dirname, 'src');
const OUT_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  context: SRC_DIR,
  entry: './index.jsx',
  builtins: {
    html: [
      {
        template: 'index.html',
        filename: 'index.html',
      },
    ],
  },
  output: {
    path: OUT_DIR,
    filename: '[name].bundle.[contenthash].js',
    chunkFilename: '[name].chunk.[contenthash].js',
    assetModuleFilename: '[path][name].[contenthash][ext][query]',
    hashDigestLength: 8,
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new RelativeCiAgentWebpackPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
  },
  optimization: {
    chunkIds: 'named',
    splitChunks: {
      name(_, chunks, cacheGroupKey) {
        const allChunksNames = chunks.map((item) => item.name).join('~');
        return `${cacheGroupKey}-${allChunksNames}`;
      },
    },
  },
};
