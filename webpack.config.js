const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const homeworkRoot = path.resolve(__dirname, 'Denys_Chuhuiev/home-work-35C.D');
const sourceRoot = path.resolve(homeworkRoot, 'src');

module.exports = (env = {}, argv = {}) => {
  const isDev = argv.mode === 'development' || process.env.NODE_ENV === 'development';
  const isAnalyze = Boolean(env.analyze);
  const fileName = (folder, ext) => (isDev ? `${folder}/[name].${ext}` : `${folder}/[name].[contenthash].${ext}`);

  const styleLoaders = (extraLoader) => {
    const loaders = [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
    ];

    if (extraLoader) {
      loaders.push(extraLoader);
    }

    return loaders;
  };

  const plugins = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(sourceRoot, 'index.html'),
      favicon: path.resolve(sourceRoot, 'assets/images/webpack-cube.png'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(sourceRoot, 'assets/images/webpack-cube.png'),
          to: path.resolve(homeworkRoot, 'dist/assets/static/webpack-cube.png'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: fileName('css', 'css'),
    }),
    new ESLintPlugin({
      extensions: ['js'],
      files: path.resolve(sourceRoot, 'js'),
      exclude: 'node_modules',
      overrideConfig: {
        env: { browser: true, es2022: true },
        extends: ['eslint:recommended'],
        parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
        rules: {
          'no-console': 'off',
          semi: ['error', 'always'],
          quotes: ['error', 'single', { avoidEscape: true }],
        },
      },
    }),
  ];

  if (isAnalyze) {
    plugins.push(new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: path.resolve(homeworkRoot, 'dist/report.html'),
    }));
  }

  return {
    context: sourceRoot,
    mode: isDev ? 'development' : 'production',
    entry: {
      main: './js/index.js',
      metrics: './ts/buildMetrics.ts',
    },
    target: 'web',
    output: {
      path: path.resolve(homeworkRoot, 'dist'),
      filename: fileName('js', 'js'),
      assetModuleFilename: 'assets/[name].[contenthash][ext]',
      clean: false,
    },
    resolve: {
      alias: {
        '@': sourceRoot,
        '@assets': path.resolve(sourceRoot, 'assets'),
        '@styles': path.resolve(sourceRoot, 'styles'),
        '@modules': path.resolve(sourceRoot, 'js/modules'),
      },
      extensions: ['.js', '.ts', '.json'],
    },
    devtool: isDev ? 'source-map' : false,
    devServer: {
      static: path.resolve(homeworkRoot, 'dist'),
      port: 3500,
      hot: false,
      liveReload: true,
      open: false,
      historyApiFallback: true,
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            enforce: true,
            minSize: 0,
          },
        },
      },
      minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin(),
      ],
    },
    plugins,
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { targets: '> 0.5%, last 2 versions, not dead', useBuiltIns: false, modules: 'commonjs' }]],
            },
          },
        },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: '> 0.5%, last 2 versions, not dead', useBuiltIns: false, modules: 'commonjs' }],
                '@babel/preset-typescript',
              ],
            },
          },
        },
        { test: /\.css$/i, use: styleLoaders() },
        { test: /\.less$/i, use: styleLoaders('less-loader') },
        { test: /\.s[ac]ss$/i, use: styleLoaders('sass-loader') },
        {
          test: /\.(png|svg|jpg|jpeg|gif|webp|ico)$/i,
          type: 'asset/resource',
          generator: { filename: 'assets/images/[name].[contenthash][ext]' },
        },
        {
          test: /\.(woff|woff2|ttf|eot)$/i,
          type: 'asset/resource',
          generator: { filename: 'assets/fonts/[name].[contenthash][ext]' },
        },
      ],
    },
  };
};
