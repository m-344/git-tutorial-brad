var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer');
;

gulp.task('styles', function () {
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([autoprefixer])
	.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function () {
	
	watch('./app/assets/styles/**/*.css', gulp.series('styles'));		
	});