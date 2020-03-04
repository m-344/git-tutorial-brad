var gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  cssImport = require('postcss-import'),
  nested = require('postcss-nested'),
  cssvars = require('postcss-simple-vars'),
  autoprefixer = require('autoprefixer'),
  browserSync = require('browser-sync').create(),
  mixins = require('postcss-mixins'),
  hexrgba = require('postcss-hexrgba');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer])).on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
  /*	the on() is a mechanism to prevent gulp watch stop if an error ocucres on the one hand; on the other hand it throws an error message*/
});