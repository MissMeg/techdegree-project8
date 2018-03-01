//NOTE: The files I downloaded had an empty global.js file. It is the main js file attached to index.html, but it is empty, so the preview of the html file looks incorrect.
//      I added it to the pipeline in case it was a mistake and the file was supposed to have js inside of it, but this may affect how the index.html file looks when served up (if it is indeed missing the js).

'use strict';

//////////////// modules needed ////////////////////////
//gulp
const gulp          = require("gulp");
//concat files
const concat        = require("gulp-concat");
//minify the files
const uglify        = require("gulp-uglify");
//rename files
const rename        = require("gulp-rename");
//compile sass to css
const sass          = require("gulp-sass");
//minify css
const cleanCss      = require("gulp-clean-css");
//create sourcemaps for css and js
const maps          = require("gulp-sourcemaps");
//optimize images
const imagemin      = require("gulp-imagemin");
//delete files/folders
const del           = require("del");
//start server
const browserSync   = require("browser-sync").create(); 

//scripts task
gulp.task('scripts', ()=> {
    //grab source files
    return gulp.src([
        'js/global.js', 
        'js/circle/autogrow.js', 
        'js/circle/circle.js'])
    //start map
    .pipe(maps.init())
    //concat all files into one file
    .pipe(concat('all.js'))
    //minify the file
    .pipe(uglify())
    //rename to correct name
    .pipe(rename('all.min.js'))
    //write the map
    .pipe(maps.write('./'))
    //place into the correct location
    .pipe(gulp.dest('dist/scripts'));
});

//styles task
gulp.task('styles', ()=>{
    //grab the correct file
    return gulp.src('sass/global.scss')
    //start map
    .pipe(maps.init())
    //compile to css
    .pipe(sass())
    //minify the file
    .pipe(cleanCss())
    //rename to correct name
    .pipe(rename('all.min.css'))
    //write the map
    .pipe(maps.write('./'))
    //place into the correct location
    .pipe(gulp.dest('dist/styles'));
});

//images task
gulp.task('images', ()=>{
    //get all image files
    return gulp.src('images/*')
    //optimize them
    .pipe(imagemin())
    //place them into the correct location
    .pipe(gulp.dest('dist/content'));
});

//clean task
gulp.task('clean', ()=>{
    //delete the dist folder with all old files
    del('dist');
});

//watch task
gulp.task('watch', ()=>{
    //watch all scss files and call the styles task if any changes then reload the browser
    gulp.watch(['sass/**/*.scss'], ['styles']).on('change', browserSync.reload);
    //watch all js files and call the scripts task if any changes then reload the browser
    gulp.watch('js/**/*.js', ['scripts']).on('change', browserSync.reload);
});

//build task
//call the clean task first and let it finish
gulp.task('build', ['clean'], ()=>{
    //start the other tasks
    gulp.start(['scripts', 'styles', 'images', 'watch']);
    //start the server
    browserSync.init({
        server: {
            // baseDir: './'
            port: process.env.PORT || 3000,
            proxy: process.env.IP || "localhost:3000"
        }
    });
});

//call the build task to run all tasks
gulp.task('default', ['build']);