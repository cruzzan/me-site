var gulp = require('gulp');
var less = require('gulp-less');
var cleancss = require('gulp-clean-css');

gulp.task('default', function () {
	console.log('Wee a gulp task');
});

gulp.task('less-to-css', function () {
	return gulp.src('./site/less/*.less')
		.pipe(less())
		.pipe(gulp.dest('./site/dist'))
});

gulp.task('minify-css', function () {
	return gulp.src('./site/dist/*.css')
		.pipe(cleancss())
		.pipe(gulp.dest('./site/dist/min'))
});
