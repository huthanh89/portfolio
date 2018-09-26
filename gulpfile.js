//-----------------------------------------------------------------------------//
// Imports
//-----------------------------------------------------------------------------//

var _             = require ('lodash');
var gulp          = require('gulp');
var nodemon       = require('gulp-nodemon');
var webpackStream = require('webpack-stream');
var livereload    = require('gulp-livereload');
var webpackConfig = require('./webpack.config');
var cleanCSS      = require('gulp-clean-css');
var rename        = require("gulp-rename");

//-----------------------------------------------------------------------------//
// Tasks
//-----------------------------------------------------------------------------//

// Compress js task not working. Currently compressed with webpack.

gulp.task('compress-js', function () {

    let config = _.assignIn(webpackConfig, {
        mode: 'production'
    })

    return  gulp.src('src/main.js')
        .pipe(webpackStream({
            config: config
        }))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('static'));
});

gulp.task('compress-css', function () {
    return  gulp.src('static/css/style.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename('style-min.css'))
        .pipe(gulp.dest('static'));
});

gulp.task('build', function(cb) {

    let config = _.assignIn(webpackConfig, {
        mode: 'development'
    })

    let reload = function(){
        livereload.reload();
        cb();
    };

    gulp.src('src/main.js')
        .pipe(webpackStream({
            config: config
        }))
        .pipe(gulp.dest('static')).on('end', reload);
});

gulp.task('run', function () {

    nodemon({
        script: 'server.js',
        ext:    'js html',
        watch: ['server.js'],
        env:  { 'NODE_ENV': 'development' }
    });

    // Start listening with livereload.

    livereload({ start: true });
})

// Default task. Run command: "gulp"

gulp.task('default', ['build', 'run'])

// Production build.

gulp.task('production', ['compress-css', 'compress-js'])

//-----------------------------------------------------------------------------//
// Watch changes
//-----------------------------------------------------------------------------//

gulp.watch('src/**', ['build']);
gulp.watch('static/css/**', ['build']);
gulp.watch('static/index.pug', ['build']);

//-----------------------------------------------------------------------------//