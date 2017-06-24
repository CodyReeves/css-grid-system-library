/*---------------------------------------------------------
 Gulp Dependencies
 --------------------------------------------------------*/

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  minify = require('gulp-minify'),
  sourcemaps = require('gulp-sourcemaps'),
  plumber = require('gulp-plumber'),
  plumberNotifier = require('gulp-plumber-notifier'),
  stripCssComments = require('gulp-strip-css-comments'),
  cleanCSS = require('gulp-clean-css'),
  uglifycss = require('gulp-uglifycss'),
  rename = require('gulp-rename');

/*---------------------------------------------------------
 Required paths for Gulp
 --------------------------------------------------------*/

var paths = {
  scss: {
    src: './scss/**/**/**/**/*.scss',
    dest: './css/',
    file: './scss/main.scss',
  },
  css: {
    src: './css/*.css',
    dest: './css/',
    file: 'style.css',
  },
  cssMin: {
    src: './css/*.css',
    dest: './css/',
    fileOg: '/css/style.css',
    fileMin: 'min.style.css',
  },
  js: {
    src: './assets/js/src/*.js',
    dest: './assets/js/',
    file: 'compiled.js',
  }
};

/*---------------------------------------------------------
 CSS/SCSS Tasks
 --------------------------------------------------------*/

/* Configures all tasks to automate
----------------------------------*/

gulp.task('watch', function () {
  gulp.watch(paths.scss.src, ['sass']);
  gulp.watch(paths.css.src, ['clean']);
  gulp.watch(paths.js.src, ['js-compile']);
});

/* Compiles all sass linking to prartials in source dir, concats, creates source map, and outputs
----------------------------------*/

gulp.task('sass', function () {
  return gulp.src(paths.scss.file)
    .pipe(plumberNotifier())
    .pipe(sourcemaps.init())
    .pipe(sass({ errLogToConsole: true }))
    .pipe(concat(paths.css.file))
    .pipe(plumber.stop())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(paths.scss.dest));
});

/* Cleans CSS Removes comments and minifies stylesheet
----------------------------------*/

gulp.task('clean', function () {
  return gulp.src(paths.css.src)
    .pipe(stripCssComments({ preserve: /(^#|^!)/ }))
    .pipe(uglifycss())
    .pipe(gulp.dest(paths.css.dest));
});

/*---------------------------------------------------------
 JS Tasks
 --------------------------------------------------------*/

 /* Compiles all js files together and minifies
 ----------------------------------*/
gulp.task('js-compile', function () {
  return gulp.src(paths.js.src)
    .pipe(concat(paths.js.file))
    .pipe(gulp.dest(paths.js.dest));
});

/*---------------------------------------------------------
Image Tasks
--------------------------------------------------------*/
