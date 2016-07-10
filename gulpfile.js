var gulp = require("gulp");
var markdown = require("gulp-markdown");
var imagemin = require("gulp-imagemin");
var fs = require("fs");

gulp.task("imageMinTask", function() {
 gulp.src("images/*.png")
     .pipe(imagemin())
     .pipe(gulp.dest("minified_images/")); 
});

gulp.task('default', function() {
    return gulp.src('intro.md')
        .pipe(markdown())
        .pipe(gulp.dest('dist'));
})


/**
var s3 = require("gulp-s3");
 
gulp.task('s3', function() {
  aws = JSON.parse(fs.readFileSync('./aws.json'));
  return gulp.src('./s3/**')
    .pipe(s3(aws));
})
**/
