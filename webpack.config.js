const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const dotenv = require('dotenv').config({ path: './.env' });

const devMode = process.env.NODE_ENV !== 'production';
const isProductionMode = process.env.NODE_ENV === 'production';
const buildPath = path.resolve(__dirname, 'dist');

const babelConfig = [
    {
        loader: 'babel-loader',
        options: {
            cacheDirectory: true,
            comments: false,
            presets: ['@babel/preset-env'],
        },
    },
];

module.exports = {
    mode: process.env.NODE_ENV,

    // target: 'node',

    entry: {
        index: path.resolve(__dirname, './src/views/index.js'),
        quienes_somos: './src/quienes_somos/quienes_somos.js',
        login: '/src/login/login.js',
        // navbar: '/src/shared/navbar/navbar.js',
        // footer: '/src/shared/footer/footer.js',
        // home: '/src/shared/home/home.js',
        contacto: './src/contacto/contacto.js',
        enconstruccion: './src/shared/enconstruccion/enconstruccion.js',
    },

    output: {
        filename: '[name].bundle.js',
        assetModuleFilename: 'asset/[hash][ext]',
        path: buildPath,
        clean: true,
        publicPath: '/',
    },

    resolve: {
        modules: [
            'node_modules', // The default
            'src',
        ],
    },

    devtool: 'source-map',

    devServer: {
        // contentBase: path.join(__dirname, 'dist'),
        static: {
            directory: buildPath,
        },
        hot: true,
        compress: true,
        port: 3000,
        open: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './src/views/index.html',
            chunks: ['index'],
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
            },
        }),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './src/contacto/contacto.html',
            chunks: ['contacto'],
            filename: 'contacto.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
            },
        }),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './src/shared/home/home.html',
            chunks: ['home'],
            filename: 'home.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
            },
        }),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './src/login/login.html',
            chunks: ['login'],
            filename: 'login.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
            },
        }),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './src/quienes_somos/quienes_somos.html',
            chunks: ['quienes_somos'],
            filename: 'quienes_somos.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
            },
        }),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './src/shared/enconstruccion/enconstruccion.html',
            chunks: ['enconstruccion'],
            filename: 'enconstruccion.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
            },
        }),
        new MiniCssExtractPlugin({
            // filename: devMode ? '[name].css' : '[name].[contenthash].css',
            filename: isProductionMode
                ? '[name].[contenthash].css'
                : '[name].css',
        }),
    ],

    module: {
        rules: [
            {
                test: /.(js|jsx)$/i,
                use: babelConfig,
            },

            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => require['autoprefixer'],
                            },
                        },
                    },
                    { loader: 'sass-loader' },
                ],
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },

    stats: {
        errorDetails: true,
        warnings: true,
        errors: true,
    },

    cache: {
        type: 'memory',
        maxGenerations: Infinity,
    },
};
