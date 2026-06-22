const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    // Точка входу
    entry: './src/index.js',

    // Налаштування виходу та ХЕШУВАННЯ для запобігання проблемам із кешуванням
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? 'js/[name].[contenthash:8].js' : 'js/[name].js',
      assetModuleFilename: 'assets/[name].[hash:8][ext][query]',
      clean: true, // Очищає папку dist перед кожною збіркою
    },

    // Модулі та правила для обробки різних типів файлів
    module: {
      rules: [
        // ІНТЕГРАЦІЯ CSS СТИЛІВ
        {
          test: /\.css$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
          ],
        },
        // РОБОТА З ЗОБРАЖЕННЯМИ
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name].[hash:8][ext]',
          },
        },
        // ПІДТРИМКА ЛОКАЛЬНИХ ШРИФТІВ
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name].[hash:8][ext]',
          },
        },
      ],
    },

    // ОПТИМІЗАЦІЯ ЗОВНІШНІХ БІБЛІОТЕК ТА КОДУ
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin(), // Стискає JavaScript
        new CssMinimizerPlugin(), // Стискає CSS
      ],
      splitChunks: {
        chunks: 'all', // Виносить важкі зовнішні бібліотеки (node_modules) в окремий файл chunk
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
      usedExports: true, // Включає Tree Shaking для видалення невикористаного коду бібліотек
    },

    // Плагіни
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        inject: 'body',
      }),
      // Винесення CSS в окремі файли з хешуванням (тільки для Production)
      ...(isProduction
        ? [
            new MiniCssExtractPlugin({
              filename: 'css/[name].[contenthash:8].css',
            }),
          ]
        : []),
    ],

    // Налаштування локального сервера для розробки
    devServer: {
      port: 3000,
      hot: true,
    },

    devtool: isProduction ? false : 'source-map',
  };
};
