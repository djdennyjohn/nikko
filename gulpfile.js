var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');
var cssmin = require('gulp-cssmin');
var gulpCopy = require('gulp-copy');
var clean = require('gulp-clean');
var server = require('gulp-server-livereload');


var jsFiles = 'js/**/*.js',
    jsFiles1 = ['js/index.js','js/config.router.js','js/directive/background-image-directive.js','js/filter/cut-filter.js','js/factory/data-service.js','js/controller/main-ctrl.js','js/controller/search-ctrl.js'],
    vendor = ['vendor/jquery/jquery.min.js','vendor/bootstrap/js/bootstrap.bundle.min.js','vendor/angular/angular.min.js','vendor/angular-filter/angular-filter.min.js','vendor/angular-click-outside/clickoutside.directive.js','vendor/angular-ui-router/angular-ui-router.min.js','vendor/infinite-scroll/ng-infinite-scroll.min.js'],
    jsDest = 'dist/scripts',
    imgDest = 'dist/images',
    cssDest = 'dist/css',
    copyFilesFrom = ['./API/**/*','./images/**/*','./Slices/**/*','./views/**/*'],
    copyFilesDest = ('dist');

    

    gulp.task('jsmin', function() {
    return gulp.src(jsFiles1)
        .pipe(concat('scripts.js'))
        .pipe(jshint())
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
    });

    gulp.task('libmin', function() {
    return gulp.src(vendor)
        .pipe(concat('lib.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('lib.min.js'))
        .pipe(gulp.dest(jsDest));
    });

    gulp.task('cssmin', function () {
    gulp.src('css/*.css')
        .pipe(cssmin())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest(cssDest));
    });

    gulp.task('useref', function(){
     return gulp.src('index.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'))
    });

    gulp.task('copy', function () {
    return gulp.src(copyFilesFrom,
    	   {base:'./'}) 
     .pipe(gulp.dest(copyFilesDest));
    });

    gulp.task('webserver', function() {
     gulp.src('./dist')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true
    }));
    });

    gulp.task('clean', function () {
	return gulp.src('dist/', {read: false})
		.pipe(clean());
    });

gulp.task('default', ['clean','copy','jsmin','libmin','cssmin','useref']);

 
