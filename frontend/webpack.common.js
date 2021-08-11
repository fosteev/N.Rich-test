const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Configuration = require('./configuration');
const configuration = new Configuration();

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    useBuiltIns: "usage",
                                    "corejs": "2",
                                    targets: {
                                        browsers: "> 1%, not ie 11, not op_mini all"
                                    }
                                }
                            ],
                            "@babel/preset-react"
                        ],
                        plugins: [
                            [
                                'babel-plugin-import',
                                {
                                    'libraryName': '@material-ui/core',
                                    // Use "'libraryDirectory': ''," if your bundler does not support ES modules
                                    'libraryDirectory': 'esm',
                                    'camel2DashComponentName': false
                                },
                                'core'
                            ],
                            [
                                'babel-plugin-import',
                                {
                                    'libraryName': '@material-ui/icons',
                                    // Use "'libraryDirectory': ''," if your bundler does not support ES modules
                                    'libraryDirectory': 'esm',
                                    'camel2DashComponentName': false
                                },
                                'icons'
                            ]
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'url-loader'],
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        filename: './bundle.[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Production',
            favicon: "./src/assets/favicon.ico"
        }),
        new webpack.DefinePlugin({
            API_URL: JSON.stringify(process.env.API_URL || configuration.getBackendUrl()),
        }),
    ],
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        hot: true,
        port: 3000,
        disableHostCheck: true
    }
};
