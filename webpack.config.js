const path = require('path')

module.exports = (env) => {
	const isProd = env === 'production';
	console.log('env', env)
	return {
			entry: './src/app.js',
			output: {
				path: path.join(__dirname, 'public'),
				filename: 'bundle.js'
			},
			module: {
				rules: [{
					loader: 'babel-loader',
					test: /\.js$/,  //use REGEX to point to all the .js files
					exclude: /node_modules/,  
					//use REGEX to exclude the files in node_modules
				}, {
					test: /\.s?css$/,
					use: [
						'style-loader',
						'css-loader',
						'sass-loader'
					]
					
				}]
			},
			devtool: isProd ? 'source-map' : 'inline-source-map',
			devServer: {
				contentBase: path.join(__dirname, 'public'),
				historyApiFallback: true
			}
	}
}
