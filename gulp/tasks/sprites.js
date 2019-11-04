var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename');

/*the variable config is an object literal which is passed as an agrument into svgSprite()*/
var config = {
	mode: {
		css: {
			sprite: 'sprite.svg',
			render: {
				css: {
					/*path to a template*/
					template: './gulp/templates/sprite.css'
				}
			}
		}
	}
};

/*Creates an SVG graphic which merges all input svg files.*/
/*Arguments of a task method: arg1='the name of the task', arg2='what the task does'*/
gulp.task('createSprite', function () {
	return gulp.src('./app/assets/images/icons/**/*.svg').pipe(svgSprite(config)).pipe(gulp.dest('./app/temp/sprite/'));
});
/*Copies the graphic created with createSprite task */
gulp.task('copySpriteGraphic', function () {
	return gulp.src('./app/temp/sprite/css/**/*.svg').pipe(gulp.dest('./app/assets/images/sprites'));
});

/*copies sprite.css to /modules and renames it to _sprite.css*/
gulp.task('copySprite', function () {
	return gulp.src('./app/temp/sprite/css/**/*.css').pipe(rename('_sprite.css')).pipe(gulp.dest('./app/assets/styles/modules/'));
});

gulp.task('icons', gulp.series('createSprite', 'copySpriteGraphic', 'copySprite'));
