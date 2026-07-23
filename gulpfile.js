let gulp = require('gulp');
let sass = require('gulp-sass')(require('sass'));
let uglifycss = require('gulp-uglifycss');

gulp.task('sass', function(){
    return gulp.src('./src/smelyk/hw33/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/smelyk/hw33/css'));
});

gulp.task('css', function(){
    return gulp.src('./src/smelyk/hw33/css/*.css')
    .pipe(uglifycss({
        "maxLineLen": 80,
        "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/smelyk'));
});

gulp.task('run', gulp.series('sass', 'css'));

gulp.task('watch', function() {
    gulp.watch('./src/smelyk/hw33/scss/*.scss', gulp.series('sass'));
    gulp.watch('./src/smelyk/hw33/css/*.css', gulp.series('css'))
});

gulp.task('default', gulp.series('run', 'watch'));