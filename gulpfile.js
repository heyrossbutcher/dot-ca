var gulp   = require('gulp'),
	jshint = require('gulp-jshint'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	browserSync = require('browser-sync'),
	jade = require('gulp-jade'),
	reload = browserSync.reload;

gulp.task('default', ['browser-sync', 'jshint', 'styles', 'build', 'watch']);


gulp.task('jshint', function() {
	return gulp.src('scripts/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(reload({stream: true}));
});

gulp.task('styles', function() {
	gulp.src('./css/styles.scss')
		.pipe(sass({
	  	"sourcemap=none": true
	  }))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
		.pipe(gulp.dest('css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('css'))
		.pipe(reload({stream: true}));
});

gulp.task('build', function() {
  var YOUR_LOCALS = {};
 
  gulp.src('./jade/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./'))
});


gulp.task('browser-sync', function() {
	browserSync({
		server: { baseDir: "./" }
	});
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
	gulp.watch('scripts/**/*.js', ['jshint']);
	gulp.watch('css/**/*.scss', ['styles']);
	gulp.watch('jade/*.jade', ['build']);
	gulp.watch('**/*.html', reload);
});