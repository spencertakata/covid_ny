const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');


function nunjucks() {
    //Get .html and .njk files in pages folder
    return gulp.src('./deploy/stage/*.njk')
    // Render template with nunjucksRender
        .pipe(nunjucksRender({
            path: ['./templates']
        }))
    // output files in deploy folder
    .pipe(gulp.dest('./deploy'))
};

exports.default = nunjucks;
