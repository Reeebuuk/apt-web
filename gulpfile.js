var gulp = require('gulp'),
    concat = require('gulp-concat'),
    ngAnnotate = require('gulp-ng-annotate'),
    gulpIf = require('gulp-if'),
    argument = require('yargs').argv,
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    base64 = require('gulp-base64'),
    less = require('gulp-less'),
    path = require('path'),
    flatten = require('gulp-flatten');

var isProduction = argument.env === 'production';

var cssFiles = ['src/css/bootstrap/custom.css', 'src/css/app.css', 'src/css/photoswipe.css', 'src/css/default-skin.css', 'src/output/partials/*.css'];
var lessFiles = ['src/less/variables/*.less', 'src/less/pages/*.less', 'src/less/*.less', 'src/less/pages/partials/*.less'];
var jsFiles = [
    'src/web/*.js',
    'src/web/vendor/*.js',
    'src/web/shared/*.js',
    'src/web/location/*.js',
    'src/web/survey/*.js',
    'src/web/header/*.js',
    'src/web/contact/*.js',
    'src/web/booking/*.js',
    'src/web/apartments/*.js',
    'src/web/home/*.js',
    'src/web/surroundings/*.js',
    'src/web/boat/*.js',
    'src/web/bookings/*.js'
];

function concatScripts() {
    gulp.src(jsFiles)
        .pipe(concat('app.js'))
        .pipe(gulpIf(isProduction, ngAnnotate()))
        .pipe(gulpIf(isProduction, uglify()))
        .pipe(gulp.dest('src/output/'));
}

function concatCssFiles() {
    gulp.src(cssFiles)
        .pipe(concat('app.css'))
        .pipe(gulpIf(isProduction, base64()))
        .pipe(gulpIf(isProduction, minifyCss()))
        .pipe(gulp.dest('src/output/'));
}

function compileLssFiles() {
    gulp.src('src/less/style.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less') ]
        }))
        .pipe(gulp.dest('./src/output/partials'));
}

gulp.task('less', function () {
    compileLssFiles();
});

gulp.task('css', function () {
    concatCssFiles();
});

gulp.task('js', function () {
    concatScripts();
});

gulp.task('watch', function () {
    gulp.watch(jsFiles, ['js']);
    gulp.watch(lessFiles, ['less']);
    gulp.watch(cssFiles, ['css']);
});

gulp.task('default', ['js', 'less', 'css', 'watch']);