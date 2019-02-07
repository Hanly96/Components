const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task('sass', function() {
    return gulp.src('./**/*.scss')
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(gulp.dest('./css'))
});

gulp.task('default', gulp.series('sass').apply, function () {
    gulp.watch('./**/*.scss'), gulp.series('sass');
});
