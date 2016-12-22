var gulp = require('gulp'), // one of the gulp package
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssvars = require('postcss-simple-vars'),
  nested = require('postcss-nested'),
  cssImport = require('postcss-import'),
  mixins = require('postcss-mixins');


gulp.task('styles', function () {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([
      cssImport,
      mixins,
      cssvars,
      nested,
      autoprefixer // all different post-css filters
  ]))
    .on('error', function (errorInfo) {
    console.log(errorInfo.toString());  //gulp provide errorInfo for us
    this.emit('end'); // ignore error and continue move on without give any message in console
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
