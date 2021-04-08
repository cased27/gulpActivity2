const gulp = require('gulp');
const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');

gulp.task('default', function(completed) {
    console.log('hello');
    completed();
})

gulp.task('html', () => {
    return gulp.src('index.hbs')
        .pipe(handlebars({}, {
            batch: ['./partials']
        }))
        .pipe(rename({
            extname: '.html'
        }))
        .pipe(gulp.dest('./'));
})