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
	
	watch('./app/assets/styles/**/*.css', gulp.series('manageCSS'));
	watch('./app/assets/scripts/**/*.js', gulp.series('scriptsRefresh'));
/*	watch('./app/assets/scripts/\**\/*.js', gulp.series('scriptsRefresh'));*/
	
});

gulp.task('cssInject', function () {
	return gulp.src('./app/temp/styles/styles.css').pipe(browserSync.stream());
});
/*
gulp.task('reloadBrowser', function () {
	browserSync.reload();	
});*/

gulp.task('manageCSS', gulp.series('styles', 'cssInject'));
gulp.task('scriptsRefresh', gulp.series('scripts'));


