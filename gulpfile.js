var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create();

gulp.task('styles', function () {
	return gulp.src('./app/assets/styles/styles.css').pipe(postcss([cssImport, nested, cssvars, autoprefixer])).pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function () {
browserSync.init({
	server: {
		baseDir: "app"
	}
});

	watch('./app/assets/styles/**/*.css', gulp.series('styles'));
});