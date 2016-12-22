var gulp = require('gulp'), // one of the gulp package
  watch = require('gulp-watch'),
  browserSync = require('browser-sync').create();
// don't need require entire package but one method called create 


gulp.task('watch', function () {

  //tell browsersync where our website-index.html lives, it need to know where the web server should point, and automatically launch the index.html in browser with lcoalhost:3000
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function () {
    browserSync.reload();
  }); // watch different files trigger different task depend on which file is saved

  watch('./app/assets/styles/**/*.css', function () {
    gulp.start('cssInject');
  }); // ** means any further folder

  // run watch and make something useful inside html / styles tasks
});


//make cross browser testing is a piece of cake
//also mobile / smartphone testing
//when dealing with interactive or javascript, this feature is nice update css w/o reset the state of browser at all
//browser sync has a neat feature for css, inject latest css without forcing refresh the browser
gulp.task('cssInject', ['styles'], function () {
  // [] is dependency, begin and complete dependency task first before begin cssInject, which means styles task is a dependency of CSSInject task
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream()); // make what we pipe in availabe in browser
});
