var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite');

/*the variable config is an object literal which is passed as an agrument into svgSprite()*/
var config = {
	mode: {
		css: {
			render: {
				css: {
					/*path to a template*/
					template: './gulp/templates/sprite.css'
				}
			}
		}
	}
};

/*arg1='name of the task', arg2='what the task do'*/
gulp.task('createSprite', function () {
	return gulp.src('./app/assets/images/icons/**/*.svg').pipe(svgSprite(config)).pipe(gulp.dest('./app/temp/sprite/'));
});