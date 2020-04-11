const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');


function nunjucks() {
    //Get .html and .njk files in pages folder
    return gulp.src('stage/*.njk')
    // Render template with nunjucksRender
        .pipe(nunjucksRender({
            path: ['./templates']
        }))
    // output files in public folder
    .pipe(gulp.dest('./'))
};

exports.default = nunjucks;