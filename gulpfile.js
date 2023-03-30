const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const compileFiles = ['./style/*.sass', './style/*.scss']
const watchFiles = ['./style/**/*.sass', './style/**/*.scss']

const compileSass = () => {
	return gulp
		.src(compileFiles)
		.pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
		.pipe(gulp.dest('dist/expanded'))
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(gulp.dest('dist/compressed'))
}

const watchTask = () => {
	gulp.watch(watchFiles, gulp.series(compileSass))
}

exports.default = gulp.series(compileSass, watchTask)