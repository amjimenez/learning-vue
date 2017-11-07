var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('script', function (){
    console.log('starting script task');
    return gulp.src('public/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/dist'));
});

gulp.task('watch', function () {
    console.log('Adding watch task')
});