const gulp = require("gulp");
const { src, dest, watch } = gulp;

const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();

function compileScss() {
  return src("src/scss/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))

    .pipe(dest("dist/css"))

    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("dist/css"))

    .pipe(browserSync.stream());
}

function copyHtml() {
  return src("src/*.html").pipe(dest("dist")).pipe(browserSync.stream());
}

function copyJs() {
  return src("src/js/*.js").pipe(dest("dist/js")).pipe(browserSync.stream());
}

function serve() {
  browserSync.init({
    server: {
      baseDir: "dist",
    },
    port: 3000,
    open: true,
  });

  watch("src/scss/**/*.scss", compileScss);
  watch("src/*.html", copyHtml);
  watch("src/js/**/*.js", copyJs);
}

exports.default = gulp.series(copyHtml, copyJs, compileScss, serve);
