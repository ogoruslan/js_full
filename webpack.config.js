const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const IS_DEV = process.env.NODE_ENV === 'development';
const IS_PROD = !IS_DEV;

const optimization = () => {
  return {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      new CssMinimizerWebpackPlugin(),
      new TerserPlugin(),
    ]
  }
} 

const filename = (ext) => {
  return IS_DEV ? 
      `[name].${ext}` : 
      `[name].[contenthash].${ext}`;
}

const cssLoaders = (extra) => {
  const loaders = [
    { loader: MiniCssExtractPlugin.loader }, 
    'css-loader',
  ];

if (extra) {
  loaders.push(extra);
}
  return loaders;
}

const jsLoaders = (extra) => {
  const loaders = {
    loader: "babel-loader",
    options: {
      presets: [
        '@babel/preset-env',
      ]
    }
  }

  if (extra) {
    loaders.options.presets.push(extra);
  }

  return loaders;
}

const setPlugins = (env = {}) => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname,'src/assets/favicon/favicon.ico'),
          to: path.resolve(__dirname, 'dist/assets/favicon'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
    new EslintWebpackPlugin({
      extensions: ['js'],
      fix: true
    }),
  ]

  if (env.analyze) {
    plugins.push(new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'bundle-report.html',
    }));
  }

  if(IS_PROD) {
    //code
  }

  if(IS_DEV) {
    //code
  }

  return plugins;
}

module.exports = (env = {}) => ({
  context: path.resolve(__dirname,'src'),
  mode: IS_DEV ? 'development' : 'production',
  entry: {
    main: './index.jsx',
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: filename('js'),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname,'src'),
      '@css': path.resolve(__dirname,'src/css'),
      '@assets': path.resolve(__dirname,'src/assets'),
    },
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx',],
  },
  optimization: optimization(),
  devServer: {
    port: 4200,
    hot: false,
    liveReload: true,
    watchFiles: ['src/**/*'],
  },
  devtool: IS_DEV ? 'source-map' : false,
  plugins: setPlugins(env),
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: jsLoaders('@babel/preset-typescript'),
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: jsLoaders('@babel/preset-react'),
      },
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.less$/,
        use: cssLoaders('less-loader'),
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader'),
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name].[hash][ext]',
        },
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[hash][ext]',
        },
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ],
      },
      {
        test: /\.csv$/,
        use: [
          'csv-loader'
        ],
      },
    ],
  }
})
