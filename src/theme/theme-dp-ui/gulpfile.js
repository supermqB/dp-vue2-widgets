const { series, src, dest } = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')
const sass = require('gulp-sass')(require('sass'))

function compile() {
  return src('./src/index.scss')
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cssmin())
    .pipe(dest('./lib'))
}

// function copyfont() {
//   return src('./src/fonts/**').pipe(cssmin()).pipe(dest('./lib/fonts'))
// }

function copyimg() {
  return src('./src/img/**').pipe(cssmin()).pipe(dest('./lib/img'))
}

exports.build = series(compile, copyimg)
// exports.build = series(compile, copyfont)
