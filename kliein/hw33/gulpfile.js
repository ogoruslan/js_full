const gulp = require('gulp'); // Исправлено: добавили импорт самого gulp
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const cssbeautify = require('gulp-cssbeautify');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

const paths = {
    scss: 'src/scss/**/*.scss',
    html: 'src/**/*.html',
    cssDest: 'dist/css'
};

// 1. Таска для обработки стилей (SCSS -> CSS)
function styles() {
    return gulp.src(paths.scss)
        .pipe(sass().on('error', sass.logError)) // Компиляция
        .pipe(cssbeautify())                    // Делаем красивым
        .pipe(gulp.dest(paths.cssDest))         // Сохраняем обычный CSS
        .pipe(autoprefixer())                   // Добавляем префиксы
        .pipe(cleanCSS())                       // Минифицируем
        .pipe(rename({ suffix: '.min' }))       // Переименовываем в .min.css
        .pipe(gulp.dest(paths.cssDest))         // Сохраняем минифицированный CSS
        .pipe(browserSync.stream());            // Инжектим стили в браузер без перезагрузки
}

// 2. Таска для запуска сервера и отслеживания файлов
function serve() {
    browserSync.init({
        server: {
            baseDir: './' // Исправлено: корень сервера, обычно это корень проекта или dist
        }
    });

    gulp.watch(paths.scss, styles);
    gulp.watch(paths.html).on('change', browserSync.reload);
}

// Экспорт задач для терминала
exports.styles = styles;
exports.serve = serve;
exports.default = gulp.series(styles, serve); // По команде 'gulp' выполнится сначала styles, потом serve
