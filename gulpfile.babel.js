import gulp from 'gulp';
import browserify from 'browserify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import eslint from 'gulp-eslint';

import sourcemaps from 'gulp-sourcemaps';	
import autoprefixer from 'gulp-autoprefixer';	
import sass from 'gulp-sass';

import browserSync from 'browser-sync';
import util from 'gulp-util';
import uglify from 'gulp-uglify';
import gulpif from 'gulp-if';

const config = {
	sourceMaps: !util.env.production,
	uglify: util.env.production
};

gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			baseDir: 'public'
		},
	})
});


gulp.task('sass', function(){
	return gulp.src('src/sass/global.scss')
		.pipe(gulpif(config.sourceMaps, sourcemaps.init()))
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulpif(config.sourceMaps, sourcemaps.write()))
		.pipe(autoprefixer())
		.pipe(gulp.dest('public/assets/css'))
		.pipe(browserSync.stream())
});


gulp.task('bundle', ['lint'], function(){
    return bundle();
});


gulp.task('lint', function(){
    return gulp.src(['src/**/*.js', 'gulpfile.babel.js'])
      .pipe(eslint())
      .pipe(eslint.format())
});

gulp.task('watch', function(){
	gulp.watch('src/sass/**/*.scss', ['sass']);
	gulp.watch('src/**/*.js', ['bundle', 'lint']);
})

gulp.task('serve', ['sass', 'bundle'], () => browserSync.init({
	server: 'public',
	port: process.env.PORT || 8000,
	host: process.env.IP || 'localhost'
}));

gulp.task('default', ['browserSync', 'sass', 'watch', 'bundle']);



// Watchify args contains necessary cache options to achieve fast incremental bundles.
// Adding debug true for source-map generation.
watchify.args.debug = config.sourceMaps;
const bundler = watchify(browserify('src/app.js', watchify.args));

bundler.transform('babelify');
bundler.on('update', bundle);

function bundle() {
    return bundler.bundle()
        .on('error', function (err) {
            console.log(err.message);
            browserSync.notify('Browserify Error!');
            this.emit('end');
        })
        .pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(gulpif(config.uglify, uglify()))
        .pipe(gulp.dest('public/assets/js'))
        .pipe(browserSync.stream({once: true}));
}