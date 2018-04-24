var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-clean-css');
var obfuscate = require('gulp-obfuscate');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var reload = browserSync.reload;
var historyFallback = require('connect-history-api-fallback');


gulp.task('css', function() {
    return gulp.src('./css/**/*.css')
        .pipe(concat('lib.css'))
        .pipe(gulp.dest('./bin/'))
        .pipe(reload({ stream: true }));
});




gulp.task('sass', function() {
  return gulp.src('./sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
});

gulp.task('js', function() {
  return gulp.src('./js/**/*.js')
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(obfuscate())
      .pipe(gulp.dest('./bin/'))
      .pipe(reload({ stream: true }));
});

gulp.task('build', ['sass', 'css', 'js']);



gulp.task('watch:css', function() {
  gulp.start('css');
  gulp.watch('./css/**/*.css', ['css']);
});

gulp.task('watch:js', function() {
  gulp.start('js');
  gulp.watch('./js/**/*.js', ['js']);
});

gulp.task('watch', function() {
  gulp.start('sass');
  gulp.start('css');
  gulp.start('js');
  gulp.watch('./sass/**/*.sass', ['sass']);
  gulp.watch('./css/**/*.css', ['css']);
  gulp.watch('./js/**/*.js', ['js']);

  // gulp.start('browserSync');
});


// gulp.task('watch', function(){
//     gulp.start('css');
//     gulp.watch('./css/**/*.css', ['css']);
//     gulp.start('browserSync');
// });

//watch css, js, html

// browserSync

gulp.task('browserSync', function() {
    browserSync({
      server: {
        baseDir: "./"
      },
      middleware: [
        historyFallback()
      ],
      port: 4900,
      open: true,
      notify: false
    });
  });