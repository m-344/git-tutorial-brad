var gulp = require('gulp'),
  imagemin = require('gulp-imagemin');

gulp.task('optimizeImages', function() {
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**'])
    .pipe(imagemin({
      // optimize JPEG
      progressive: true,
      // gif
      interlaced: true,
      // svg
      multipass: true
    }))
    .pipe(gulp.dest("./dist/assets/images"));
})

gulp.task('build', gulp.series('optimizeImages'));