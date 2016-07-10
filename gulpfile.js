var gulp = require("gulp");
var markdown = require("gulp-markdown");

var imagemin = require("gulp-imagemin");

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

