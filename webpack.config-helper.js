'use strict';

const Path = require("path");
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const pages = require('./src/pages');
let renderedPages = [];
for (let i = 0; i < pages.length; i++) {
    let page = Object.assign({}, pages[i]);
    renderedPages.push(
        new HtmlWebpackPlugin({
            template: page.template,
            filename: page.output,
            title: page.content.title,
            heading_icon: page.content.heading_icon,
            description: page.content.description,
            lista: page.content.lista,
        })
    );
}

module.exports = (options) => {
    const dest = Path.join(__dirname, 'cm-panel');
    let webpackConfig = {
        mode: 'none',
        devtool: options.devtool,
        entry: {
            main: './src/app.js',
            demo: './src/scripts-init/demo.js',
            ladda: './src/scripts-init/ladda-loading.js',
            blockui: './src/scripts-init/blockui.js',
            circle_progress: './src/scripts-init/circle-progress.js',
            count_up: './src/scripts-init/count-up.js',
            toastr: './src/scripts-init/toastr.js',
            sweet_alerts: './src/scripts-init/sweet-alerts.js',
            scrollbar: './src/scripts-init/scrollbar.js',
            sticky_elements: './src/scripts-init/sticky-elements.js',
            carousel_slider: './src/scripts-init/carousel-slider.js',
            fullcalendar: './src/scripts-init/calendar.js',
            treeview: './src/scripts-init/treeview.js',
            //maps: './src/scripts-init/maps.js',
            rating: './src/scripts-init/rating.js',
            image_crop: './src/scripts-init/image-crop.js',
            guided_tours: './src/scripts-init/guided-tours.js',
            tables: './src/scripts-init/tables.js',

            form_validation: './src/scripts-init/form-components/form-validation.js',
            form_wizard: './src/scripts-init/form-components/form-wizard.js',
            clipboard: './src/scripts-init/form-components/clipboard.js',
            datepicker: './src/scripts-init/form-components/datepicker.js',
            input_mask: './src/scripts-init/form-components/input-mask.js',
            input_select: './src/scripts-init/form-components/input-select.js',
            range_slider: './src/scripts-init/form-components/range-slider.js',
            textarea_autosize: './src/scripts-init/form-components/textarea-autosize.js',
            toggle_switch: './src/scripts-init/form-components/toggle-switch.js',

            chart_js: './src/scripts-init/charts/chartjs.js',
            apex_charts: './src/scripts-init/charts/apex-charts.js',
            sparklines: './src/scripts-init/charts/charts-sparklines.js',
        },
        output: {
            path: dest,
            filename: './assets/scripts/[name].[hash].js'
        },
        plugins: [
            new Webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Tether: 'tether',
                'window.Tether': 'tether',
                Popper: ['popper.js', 'default'],
            }),
            new ESLintPlugin(),
            new MiniCssExtractPlugin({
                filename: './assets/styles/[name].css',
            }),
            new CleanWebpackPlugin({
                cleanAfterEveryBuildPatterns: dest
            }),
            new CopyWebpackPlugin({
                patterns: [
                    { from: './src/assets/images', to: './assets/images' }
                ]
            }),
            new CopyWebpackPlugin({
                patterns: [
                    { from: './src/assets/fonts', to: './assets/fonts' }
                ]
            }),
            new Webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(options.isProduction ? 'production' : 'development'),
                }
            })
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.hbs$/,
                    loader: 'handlebars-loader',
                    options: {
                        helperDirs: [
                            Path.join(__dirname, 'src', 'helpers')
                        ],
                        partialDirs: [
                            Path.join(__dirname, 'src', 'layouts'),
                            Path.join(__dirname, 'src', 'views'),
                        ]
                    }
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                }
            ]
        }
    };

    if (options.isProduction) {
        webpackConfig.entry = [
            './src/app.js',
            './src/scripts-init/demo.js',
        ];

        webpackConfig.module.rules.push({
            test: /\.scss$/i,
            use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ] ,

        }, {
            test: /\.css$/i,
            use: [ MiniCssExtractPlugin.loader, 'css-loader'],
        });

    } else {
        webpackConfig.plugins.push(
            new Webpack.HotModuleReplacementPlugin()
        );

        webpackConfig.module.rules.push({
            test: /\.scss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        });

        webpackConfig.devServer = {
            port: options.port,
            static: {
                directory: dest,
            },
            compress: options.isProduction,
            hot: !options.isProduction
        };

        webpackConfig.plugins.push(
            new BrowserSyncPlugin({
                host: 'localhost',
                port: 3001,
                files: ["public/**/*.*"],
                browser: "google chrome",
                reloadDelay: 1000,
            }, {
                reload: false
            })
        );

    }

    webpackConfig.plugins = webpackConfig.plugins.concat(renderedPages);

    return webpackConfig;
};