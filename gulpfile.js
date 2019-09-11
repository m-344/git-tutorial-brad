var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('styles', function () {
	console.log('works');
});

gulp.task('watch', function () {
	
	watch('./assets/styles/**/*..css', function () {
		gulp.start('styles');
	})
});