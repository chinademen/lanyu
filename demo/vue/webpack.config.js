const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
//const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
//const ImageminPlugin = require('imagemin-webpack-plugin').default
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const path = require('path')
const webpack = require('webpack')

const isDevMode = process.env.NODE_ENV == 'development'

let proxyIP = '127.0.0.1'    // 测试环境

const config = {
	entry: {
		build: './src/main.js',
	},

	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: isDevMode ? '/' : '/',
		filename: '[name].[hash].js'
    },
    stats: 'errors-only',
	devtool: isDevMode ? '#source-map' : '',
	module: {
		rules: [{
			test: /\.vue/,
			loader: 'vue-loader'
		}, {
			test: /\.(png|jpg|gif)$/,
			use: 'url-loader?limit=8192&name=[name][hash].[ext]?'
		}, {
			test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
			use: 'url-loader?limit=50000&name=[path][name].[ext]'
		}, {
			test: /\.(sa|sc|le)ss$/,
			use: [
				isDevMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
				'css-loader',
				'sass-loader',
				'less-loader'
			],
		}, {
			test: /\.css$/,
			use: [
				isDevMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
				'css-loader',
			],
		}, {
			test: /\.js|\.jsx$/,
			use: 'babel-loader',
			exclude: /node_modules/
		}, {
			test: /\.(mp3)(\?.*)?$/,
			loader: 'url-loader',
			options: {
				name: 'audios/[name].[ext]',
				limit: 10
			}
		}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			src: path.resolve(__dirname, './src/'),
		}
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			filename: './index.html',
			template: './src/index.tpl',
			inject: 'body',
			hash: true,
			minify: {
				removeComments: true,
				collapseWhitespace: false
			}
		}),

		new CleanWebpackPlugin(['dist/*.*'], {
			root: path.resolve(__dirname, '.'),
			exclude: [],
			verbose: true,
			dry: false
		}),

		new MiniCssExtractPlugin({
			filename: isDevMode ? '[name].css' : '[name].[hash].css',
			chunkFilename: isDevMode ? '[id].css' : '[id].[hash].css',
		}),

		new webpack.DefinePlugin({
            'isDevMode': isDevMode, 
			'PUSH_SERVER': JSON.stringify('http://' + proxyIP)
		})

		/**
		new ImageminPlugin({
			disable: isDevMode,
			pngquant: {
			  quality: '95-100'
			}
		})*/
	],
	devServer: {
		host: '127.0.0.1', //允许外部ip访问设定0.0.0.0
		historyApiFallback: true,
		hot: true,
		inline: true,
		stats: {
			colors: true
		},
		port: 80,
		disableHostCheck: true,
		proxy: [{
			context: ['/hz', '/sso', '/upload'],
			target: 'http://' + proxyIP
		},{
			'/socket.io': {
				target: 'http://' + proxyIP,
				changeOrigin: false,
				ws: true
			}
		}]
	},
	optimization: {
		splitChunks: {
			chunks: 'initial',
			minSize: 30000,
			maxSize: 0,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: '~',
			name: true,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true
				}
			}
		},
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					compress: {
						drop_console: true
					},
				}
			}),
			new OptimizeCSSAssetsPlugin({}),
			new BundleAnalyzerPlugin({
				analyzerMode: process.env.npm_config_report == 'true' ? 'server' : 'disabled'
			})
		]
	}
}

module.exports = config
