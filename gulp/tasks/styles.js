var gulp = require('gulp'),
postcss = require('gulp-postcss'),
cssImport = require('postcss-import'),
nested = require('postcss-nested'),
cssvars = require('postcss-simple-vars'),
autoprefixer = require('autoprefixer');

gulp.task('styles', function () {
	return gulp.src('./app/assets/styles/styles.css').pipe(postcss([cssImport, nested, cssvars, autoprefixer])).on('error', function (errorInfo) {
		console.log(errorInfo.toString());
		this.emit('end');
	}).pipe(gulp.dest('./app/temp/styles'));
});