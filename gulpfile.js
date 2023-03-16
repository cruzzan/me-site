const {src, dest, series} = require('gulp');
const less = require('gulp-less');
const cleancss = require('gulp-clean-css');

function compileLess() {
	return src('./site/less/*.less')
		.pipe(less())
		.pipe(dest('./site/dist'));
}

function minifyCss() {
	return src('./site/dist/*.css')
		.pipe(cleancss())
		.pipe(dest('./site/dist/min'))
}

function fa() {
	status = src('./node_modules/@fortawesome/fontawesome-free/css/all.css')
		.pipe(dest('./site/dist/font-awesome/css/'));
	status = src('./node_modules/@fortawesome/fontawesome-free/webfonts/*')
		.pipe(dest('./site/dist/font-awesome/webfonts/'));

	return status
}

function materialize() {
	status = src('./node_modules/materialize-css/dist/css/materialize.css')
		.pipe(dest('./site/dist/materializecss/css/'));
	status = src('./node_modules/materialize-css/dist/js/materialize.js')
		.pipe(dest('./site/dist/materializecss/js/'));

	return status
}

exports.compileLess = compileLess;
exports.minifyCss = minifyCss;
exports.fa = fa;
exports.materialize = materialize;
exports.default = series(compileLess, minifyCss, fa, materialize);
