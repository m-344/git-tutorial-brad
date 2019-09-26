var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function () {
	
	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});
	
	watch('./app/index.html', function () {
		browserSync.reload();
	});
	
	watch('./app/assets/styles/**/*.css', gulp.series('cssInject'));
	
	/*	another possibility to update CSS if cssInject doesn't work*/
	/*	watch('./app/assets/styles/\**\/*.css', function () {
	browserSync.reload();
	});*/
});

/*second argument is called 'dependencies' (series())*/
gulp.task('cssInject', gulp.series('styles'), function () {
	/*return is needed bcs .src is an asynchronious function*/
	return gulp.src('./app/temp/styles/styles.css').pipe(browserSync.stream());
});