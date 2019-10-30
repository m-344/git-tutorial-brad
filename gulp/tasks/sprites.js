var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite');

/*arg1='name of the task', arg2='what the task do'*/
gulp.task('createSprite', function () {
return gulp.src('./app/assets/images/icons/**/*.svg').pipe(gulp.dest('./app/temp/sprite/'));
});