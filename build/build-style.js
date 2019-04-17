const gulp = require('gulp');
const sass = require('gulp-sass');
const cssBase64 = require('gulp-base64');


gulp.task('sass', function () {
  return gulp.src('../packages/theme//index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssBase64({
      maxImageSize: 8*1024
    }))
    .pipe(gulp.dest('../dist/styles'));
});

gulp.task('fonts', function () {
  gulp.src('../packages/theme/font/*.*')
      .pipe(gulp.dest('../dist/font'));
});

gulp.task('default', ['sass', 'fonts']);