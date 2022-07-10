const gulp = require('gulp');
const rename = require('gulp-rename');

// DEV
gulp.task('dev', async function () {
  gulp
    .src('./resources/dev/app.env.js')
    .pipe(rename('app.env.ts')) // Rename file
    .pipe(gulp.dest('./src/@config/', {overwrite: true})); // Thư mục chứa file json
  gulp
    .src('./resources/dev/strings.xml')
    .pipe(rename('strings.xml')) // Rename file
    .pipe(gulp.dest('./android/app/src/main/res/values/', {overwrite: true})); // Thư mục chứa file json
});

//PROD
gulp.task('prod', async function () {
  gulp
    .src('./resources/prod/app.env.js')
    .pipe(rename('app.env.ts')) // Rename file
    .pipe(gulp.dest('./src/@config/', {overwrite: true})); // Thư mục chứa file json
  gulp
    .src('./resources/prod/strings.xml')
    .pipe(rename('strings.xml')) // Rename file
    .pipe(gulp.dest('./android/app/src/main/res/values/', {overwrite: true})); // Thư mục chứa file json
});
