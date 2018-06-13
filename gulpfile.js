var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-clean-css'),
    concatCss = require('gulp-concat-css'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del')

gulp.task('clean', function() {
    return del('build')
})

gulp.task('css', function() {
    return gulp.src('css/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(concatCss('ui.min.css'))
        .pipe(autoprefixer('last 2 version'))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build'))
})

gulp.task('js', function() {
    return gulp.src('js/ui.js')
        .pipe(uglify())
        .pipe(gulp.dest('build'))
})

gulp.task('default', ['clean'], function() {
    gulp.start('css', 'js')
})