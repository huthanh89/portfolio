//-----------------------------------------------------------------------------//
// Imports
//-----------------------------------------------------------------------------//

const _             = require ('lodash');
const gulp          = require('gulp');
const nodemon       = require('gulp-nodemon');
const webpackStream = require('webpack-stream');
const livereload    = require('gulp-livereload');
const webpackConfig = require('./webpack.config');
const cleanCSS      = require('gulp-clean-css');
const rename        = require('gulp-rename');
const pug           = require('gulp-pug');
const less          = require('gulp-less');
const htmlmin       = require('gulp-htmlmin');
const imagemin      = require('gulp-imagemin');
const open          = require('gulp-open');

//-----------------------------------------------------------------------------//
// Tasks
//-----------------------------------------------------------------------------//

gulp.task('compress-js', function () {

    let config = _.assignIn(webpackConfig, {
        mode: 'production'
    })

    return  gulp.src('src/main.js')
        .pipe(webpackStream({
            config: config
        }))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('compress-css', function () {
    return  gulp.src('dist/css/style.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('compress-html', function () {
    return  gulp.src('dist/index.html')
        .pipe(htmlmin({ 
            collapseWhitespace: true 
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('compress-img', function () {
    return  gulp.src('src/asset/image/*')
    .pipe(imagemin([
        imagemin.gifsicle({
            interlaced: true
        }),
        imagemin.jpegtran({
            progressive: true
        }),
        imagemin.optipng({
            optimizationLevel: 7
        }),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
    .pipe(gulp.dest('dist/asset'));
});

gulp.task('copy-pdf', function () {
    return  gulp.src('src/asset/pdf/*')
        .pipe(gulp.dest('dist/asset'));
});

gulp.task('build-js', function(cb) {

    let config = _.assignIn(webpackConfig, {
        mode: 'development'
    })

    let reload = function(){
        livereload.reload();
        cb();
    };

    gulp.src('src/js/main.js')
        .pipe(webpackStream({
            config: config
        }))
        .pipe(gulp.dest('dist/js')).on('end', reload);
});

gulp.task('build-css', function (cb) {

    let reload = function(){
        livereload.reload();
        cb();
    };

    gulp.src('src/css/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css')).on('end', reload);
});

gulp.task('build-html', function (cb) {
    let reload = function(){
        livereload.reload();
        cb();
    };

    gulp.src('src/html/**/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('dist')).on('end', reload);
});

gulp.task('start-server', function () {

    nodemon({
        script: 'server.js',
        ext:    'js html',
        watch: ['server.js'],
        env:  { 'NODE_ENV': 'development' }
    });

    // Start listening with livereload.

    livereload({ start: true });
})


// Open browser, using default browser.

gulp.task('browser', function (cb) {
    return gulp.src(__filename)
    .pipe(open({
        uri: 'http://localhost:3000'
    }));
})

//-----------------------------------------------------------------------------//
// Main tasks
//-----------------------------------------------------------------------------//

gulp.task('asset', [
    'compress-img',
    'copy-pdf'
])


// Production build.
// Compress files and move asset files to /dist folder.

gulp.task('production', [
    'compress-js', 
    'compress-css',
    'compress-html',
    'compress-img',
    'copy-pdf'
])

// Default task. Run command: "gulp" to start development environment.

gulp.task('default', [
    'build-js', 
    'build-css', 
    'build-html', 
    'start-server',
    'browser'
])

//-----------------------------------------------------------------------------//
// Watch changes
//-----------------------------------------------------------------------------//

gulp.watch('src/js/**',   ['build-js']);
gulp.watch('src/css/**',  ['build-css']);
gulp.watch('src/html/**', ['build-html']);

//-----------------------------------------------------------------------------//