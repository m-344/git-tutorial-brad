const path = require('path');

module.exports = {
	entry: "./app/assets/scripts/App.js",
	output: {
		filename: 'App.js',
		path: path.resolve(__dirname, './app/temp/scripts'),
	},
	module: {
		loaders:[ {
			loader: 'babel',
			query: {
				presets:[ 'es2015']
			},
			test: /\.js$/, /*apply babel for js-files only*/ 				exclude: /node_modules//*says the babel that no js-files have to be processed*/
		}]
	}
};