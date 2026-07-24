"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const {
  BundleAnalyzerPlugin,
} = require("webpack-bundle-analyzer");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  const shouldAnalyze = Boolean(env && env.analyze);

  return {
    entry: "./src/js/index.js",

    output: {
      path: path.resolve(__dirname, "dist"),
      // 1. Хешування імен файлів — окремий контент дає окремий хеш,
      //    тож браузер не роздасть застарілу версію з кешу.
      filename: "js/[name].[contenthash].js",
      clean: true,
    },

    // Дозволяємо імпортувати .ts без розширення поруч із .js
    resolve: {
      extensions: [".ts", ".js"],
    },

    devtool: isProduction ? "source-map" : "eval-source-map",

    module: {
      rules: [
        // Транспіляція JS через Babel (звичайні .js файли проєкту,
        // node_modules не чіпаємо — вони вже зібрані видавцями пакетів)
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },

        // Компіляція TypeScript
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: "ts-loader",
        },

        // Звичайний CSS (у т.ч. "зовнішні" стилі з npm-пакетів, напр. normalize.css)
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },

        // Препроцесор Sass/SCSS
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        },

        // Препроцесор LESS
        {
          test: /\.less$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "less-loader",
          ],
        },

        // Робота із зображеннями (png/jpg/svg/gif) — asset modules,
        // вбудований у Webpack 5 функціонал, без file-loader.
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: "asset/resource",
          generator: {
            filename: "images/[name].[contenthash][ext]",
          },
          parser: {
            // невеликі іконки (<4кб) інлайняться в base64 — менше запитів
            dataUrlCondition: { maxSize: 4 * 1024 },
          },
        },

        // Підтримка локальних шрифтів — теж asset/resource,
        // файли з src/fonts копіюються в dist/fonts з хешем в імені.
        {
          test: /\.(woff2?|eot|ttf|otf)$/i,
          type: "asset/resource",
          generator: {
            filename: "fonts/[name].[contenthash][ext]",
          },
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
      }),
      new MiniCssExtractPlugin({
        // хеш і для CSS-файлу теж
        filename: "css/[name].[contenthash].css",
      }),
      // Лінтимо код прямо в процесі збірки/девсервера
      new ESLintPlugin({
        extensions: ["js"],
        emitWarning: true,
        failOnError: isProduction,
      }),
      // Аналізатор бандла піднімається лише за прапорцем --env analyze,
      // щоб не заважати звичайній збірці/розробці
      ...(shouldAnalyze
        ? [
            new BundleAnalyzerPlugin({
              analyzerMode: "static",
              openAnalyzer: false,
              reportFilename: "report.html",
            }),
          ]
        : []),
    ],

    // 5. Оптимізоване використання зовнішніх бібліотек:
    //    - lodash-es імпортується поіменно (lodash-es/debounce),
    //      і Webpack у продакшн-режимі (usedExports + minimize)
    //      відкидає невикористаний код через tree-shaking;
    //    - splitChunks виносить будь-який спільний/вендорний код
    //      в окремий кешований файл, щоб він не перезбирався
    //      разом з кодом застосунку при кожній зміні.
    optimization: {
      usedExports: true,
      minimize: isProduction,
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
      runtimeChunk: "single",
    },

    // DevServer — автоматичне перезавантаження сторінки при зміні коду
    devServer: {
      static: path.resolve(__dirname, "dist"),
      watchFiles: ["src/**/*"],
      port: 8080,
      open: false,
      hot: true,
      client: {
        overlay: true,
      },
    },
  };
};
