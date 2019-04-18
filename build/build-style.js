const gulp = require('gulp');
const sass = require('gulp-sass');
const base64 = require('gulp-base64');


gulp.task('sass', function () {
  return gulp.src('../packages/theme//index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(base64({
      extensions: ['svg', 'png', 'ttf', 'woff',/\.jpg#datauri$/i],
      maxImageSize: 8*1024
    }))
    .pipe(gulp.dest('../dist/styles'));
});

// gulp.task('fonts', function () {
//   gulp.src('../packages/theme/font/*.*')
//       .pipe(gulp.dest('../dist/font'));
// });

gulp.task('default', ['sass']);