var gulp = require('gulp');
var less = require('gulp-less');
var cleancss = require('gulp-clean-css');

gulp.task('default', ['less-to-css', 'minify-css']);

gulp.task('less-to-css', function () {
	gulp.src('./site/less/*.less')
		.pipe(less())
		.pipe(gulp.dest('./site/dist'));
});

gulp.task('minify-css', function () {
	gulp.src('./site/dist/*.css')
		.pipe(cleancss())
		.pipe(gulp.dest('./site/dist/min'));
});
