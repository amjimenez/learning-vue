var gulp = require('gulp');
var uglify = require('gulp-uglify');
var liveReload = require('gulp-livereload');
//File Paths
var SCRIPTS_PATH = 'public/scripts/*.js';

gulp.task('scripts', function (){
    console.log('starting script task');
    return gulp.src(SCRIPTS_PATH)
        .pipe(uglify())
        .pipe(gulp.dest('public/dist'))
        .pipe(liveReload());
});

gulp.task('watch', function () {
    require('./server.js');
    liveReload.listen();
    gulp.watch(SCRIPTS_PATH, ['scripts']);
});