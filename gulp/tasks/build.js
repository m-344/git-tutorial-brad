var gulp = require('gulp'),
  imagemin = require('gulp-imagemin'),
  del = require('del'),
  usemin = require('gulp-usemin'),
  rev = require('gulp-rev'),
  cssnano = require('gulp-cssnano'),
  uglify = require('gulp-uglify'),
  browserSync = require('browser-sync').create();


gulp.task('previewDist', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "docs"
    }
  });
})

gulp.task('deleteDistFolder', function() {
  return del("./docs");
})

gulp.task('copyGeneralFiles', function() {
  var pathsToCopy = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/styles/**',
    '!./app/assets/scripts/**',
    '!./app/temp',
    '!./app/temp/**'
  ]
  return gulp.src(pathsToCopy)
    .pipe(gulp.dest("./docs"));
})

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
    .pipe(gulp.dest("./docs/assets/images"));
})

gulp.task('usemin', function() {
  return gulp.src("./app/index.html")
    .pipe(usemin({
      css: [function() {
        // return is needed for gulp to be aware when the function completes
        return rev()
      }, function() {
        return cssnano()
      }],
      js: [function() {
        return rev()
      }, function() {
        return uglify()
      }]
    }))
    .pipe(gulp.dest("./docs"))
})

gulp.task('build', gulp.series('deleteDistFolder', 'copyGeneralFiles', 'icons', 'styles', 'scripts', 'optimizeImages', 'usemin'));