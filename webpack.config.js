var webpack = require('webpack')
var path = require('path')
var nodeExternals = require('webpack-node-externals')

// module.exports = {
// }


var browserConfig = {
	entry: './src/browser/index.js',
	output: {
		path: path.resolve(__dirname, 'public'), 
		filename:'bundle.js',
		publicPath: '/'
	},

	module: {
		rules: [
			{
				test:/\.(js)$/,
				loader: 'babel-loader'				
			}
		]

	},
	plugins: [
		new webpack.DefinePlugin({
			__isBrowser__: 'true'
		})
	]
}


var serverConfig = {
	entry: './src/server/index.js',
	target: 'node',
	externals: [nodeExternals()],
	output: {
		path: __dirname, 
		filename:'server.js',
		publicPath: '/'
	},

	module: {
		rules: [
			{
				test:/\.(js)$/,
				loader: 'babel-loader' 
			}
		]

	},
	plugins: [
		new webpack.DefinePlugin({
			__isBrowser__: 'false'
		})
	]
}

module.exports = [browserConfig, serverConfig]