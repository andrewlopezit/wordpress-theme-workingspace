'use strict';

const gulp         = require('gulp');

// Browers related plugins
const browserSync  = require( 'browser-sync' ).create();
const reload       = browserSync.reload;

// CSS related plugins
const sass         = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

const mainStyle    = './assets/scss/stylesheet.scss';
const stylesSrc    = [mainStyle]
const mapURL       = './';
const destSassUrl  = './assets/css';

// JS related plugins
const jsURL 	   = './assets/js/';


// Utility plugins
const sourcemaps   = require( 'gulp-sourcemaps' );

const styleWatch   = './assets/scss/**/*.scss';

// Tasks
gulp.task( 'styles', () => {
	return gulp.src( stylesSrc )
		.pipe( sourcemaps.init() )
		.pipe( sass({
			errLogToConsole: true,
			outputStyle: 'compressed'
		}) )
		.on( 'error', console.error.bind( console ) )
		.pipe(cleanCSS())
		.pipe( sourcemaps.write( mapURL ) )
		.pipe( gulp.dest( destSassUrl ) )
		.pipe( browserSync.stream() );
});


gulp.task( 'watch', () => {
	gulp.watch( styleWatch, gulp.series('styles') );
 });