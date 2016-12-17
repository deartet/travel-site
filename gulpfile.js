var gulp = require('gulp'), // one of the gulp package
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import')


gulp.task('default', function(){
  console.log('this is the first default task');
});

gulp.task('html', function(){
  console.log('something html can do for you');
});

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([
      cssImport,
      cssvars,
      nested,
      autoprefixer
  ]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){
  
  watch('./app/index.html', function(){
    gulp.start('html');
  }); // watch different files trigger different task depend on which file is saved
  
  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  }); // ** means any further folder
  
  // run watch and make something useful inside html / styles tasks
});