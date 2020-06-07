var scssInput = ['src/scss/style.scss'],
    jsInput = ['src/js/main.js'],
    scssOutput = 'public/css',
    jsOutput = 'public/js';

// Start everything up.
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
// var sourcemaps = require('gulp-sourcemaps');
// var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var rigger = require('gulp-rigger');


// Watch SASS.
gulp.task('sass', function() {
    return gulp
        .src(scssInput)
        // .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest(scssOutput))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('domainScripts', function() {
    return gulp
        .src(jsInput) //Найдем наш main файл
        .pipe(rigger()) //Прогоним через rigger
        // .pipe(sourcemaps.init()) //Инициализируем sourcemap
        // .pipe(uglify()) //Сожмем наш js
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest(jsOutput)) //Выплюнем готовый файл в build
        .pipe(browserSync.reload({
            stream: true
        })); //И перезагрузим сервер
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
});


gulp.task('watch', ['sass', 'domainScripts'], function (){
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('js/**/*.js', ['domainScripts']);
});
