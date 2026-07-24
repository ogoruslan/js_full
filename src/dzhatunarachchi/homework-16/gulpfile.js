"use strict";

/* ==========================================================
 * Gulp-конфігурація
 *
 * Задачі:
 *   styles   — SCSS -> CSS, автопрефікси, форматування (читабельний main.css)
 *   stylesMin— мінімізація зібраного CSS в окремий *.min.css
 *   html     — копіювання HTML з src у dist
 *   clean    — очищення dist перед збіркою
 *   serve    — BrowserSync-сервер з live reload
 *   watch    — стеження за файлами та перезапуск потрібних задач
 *   build    — повна одноразова збірка (без сервера)
 *   default  — build + serve + watch (для щоденної розробки)
 * ========================================================== */

const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer").default;
const sourcemaps = require("gulp-sourcemaps");
const cssbeautify = require("gulp-cssbeautify");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();
const { deleteAsync } = require("del");

/* ---------- Шляхи проєкту ---------- */
const paths = {
  scss: {
    src: "src/scss/**/*.scss",
    entry: "src/scss/main.scss",
    dest: "dist/css",
  },
  html: {
    src: "src/*.html",
    dest: "dist",
  },
  dist: "dist",
};

/* ---------- 1-3. SCSS -> CSS, автопрефікси, форматування ---------- */
function styles() {
  return src(paths.scss.entry)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 3 versions", "> 1%"],
        cascade: false,
      })
    )
    .pipe(cssbeautify({ indent: "  ", autosemicolon: true }))
    .pipe(sourcemaps.write("."))
    .pipe(dest(paths.scss.dest))
    .pipe(browserSync.stream());
}

/* ---------- 5. Мінімізація вже зібраного CSS ---------- */
function stylesMin() {
  return src(`${paths.scss.dest}/main.css`)
    .pipe(cleanCSS({ level: 2 }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest(paths.scss.dest));
}

const css = series(styles, stylesMin);

/* ---------- HTML: просто копіюємо в dist ---------- */
function html() {
  return src(paths.html.src).pipe(dest(paths.html.dest));
}

/* ---------- Очищення папки збірки ---------- */
function clean() {
  return deleteAsync([paths.dist]);
}

/* ---------- 2. BrowserSync — live reload ---------- */
function serve(cb) {
  browserSync.init({
    server: { baseDir: paths.dist },
    notify: false,
    open: false,
  });
  cb();
}

function reload(cb) {
  browserSync.reload();
  cb();
}

/* ---------- Стеження за файлами ---------- */
function watchFiles() {
  watch(paths.scss.src, css);
  watch(paths.html.src, series(html, reload));
}

/* ---------- Композитні задачі ---------- */
const build = series(clean, parallel(html, css));
const dev = series(build, parallel(serve, watchFiles));

exports.styles = css;
exports.html = html;
exports.clean = clean;
exports.build = build;
exports.watch = watchFiles;
exports.serve = serve;
exports.default = dev;
