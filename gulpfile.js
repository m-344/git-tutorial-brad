var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
postcssNested = require('postcss-nested');

gulp.task('styles', function () {
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([postcssNested, cssvars, autoprefixer])
	.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function () {
	
	watch('./app/assets/styles/**/*.css', gulp.series('styles'));		
	});