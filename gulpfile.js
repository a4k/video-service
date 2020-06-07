var scssInput = ['src/scss/style.scss'],
    jsInput = ['src/js/main.js'],
    scssOutput = 'public/css',
    jsOutput = 'public/js';

// Start everything up.
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rigger = require('gulp-rigger');


function styles() {
    return gulp
        .src(scssInput)
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(scssOutput))
}

function scripts() {
    return gulp
        .src(jsInput)
        .pipe(rigger())
        .pipe(gulp.dest(jsOutput))
}


function watchFiles() {
    gulp.watch('src/scss/**/*.scss', styles);
    gulp.watch('src/js/**/*.js', scripts);
}

const watch = gulp.parallel(watchFiles);
exports.scripts = scripts;
exports.styles = styles;
exports.watch = watch;
