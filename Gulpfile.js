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
  uncss = require('gulp-uncss'),
  runSequence = require('run-sequence'),
  copy = require('copy'),
  uglify = require('gulp-uglify'),
  svgmin = require('gulp-svgmin'),
  inquirer = require('inquirer'),
  image = require('gulp-image');

/*---------------------------------------------------------
 Required paths for Gulp
 --------------------------------------------------------*/

var paths = {
  scss: {
    src: './scss/**/**/**/**/*.scss',
    dest: './assets/css/',
    file: './scss/main.scss',
  },
  css: {
    src: './assets/css/*.css',
    dest: './assets/css/',
    file: 'style.css',
  },
  js: {
    src: '',
    dest: '',
    file: 'compiled.js',
  },
  img: {
    src: ['', '', '', ''],
    svg: '',
    dest: '',
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
    .pipe(uglify())
    .pipe(gulp.dest(paths.js.dest));
});

/*---------------------------------------------------------
Image Tasks
--------------------------------------------------------*/

/* Minify PNG, JPEG, GIF and SVG images
----------------------------------*/

gulp.task('image', function () {
  return gulp.src(paths.img.src)
      .pipe(image({
        pngquant: true,
        optipng: true,
        zopflipng: false,
        jpegRecompress: true,
        jpegoptim: true,
        mozjpeg: true,
        gifsicle: true,
        svgo: true,
        concurrent: 10,
      }))
      .pipe(gulp.dest(paths.img.dest));
});
