const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');

function ourErrorHandler(error){
    console.log(error.toString());
    this.emit('end');
}

gulp.task("browseSync", function() {
    browserSync.init({
        server: ".",
        notify: true,
        //host: "192.168.0.24", //IPv4 Address Wirless LAN adapter WiFi from ipconfig
        // port: 3000,
        open: true
    });
});

gulp.task('sass', function () {
    return gulp.src('./src/styles/main.scss')
      .pipe(plumber({
          errorHandler :ourErrorHandler
      }))
      .pipe(sourcemaps.init())
      .pipe(sass({
        outputStyle: "compressed"
      }))
      .pipe(autoprefixer({
          browsers: ['last 2 versions']
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./public/css'))
      .pipe(browserSync.stream({match: "**/*.css"}));
});

gulp.task('watch', function () {
    gulp.watch("./src/styles/**/*.scss", ['sass'])
    gulp.watch("**/*.html").on("change", browserSync.reload);
  });

gulp.task("default", function() {
    console.log("----rozpoczynamy pracę-----");
    gulp.start(['sass', 'browseSync', 'watch']);
})