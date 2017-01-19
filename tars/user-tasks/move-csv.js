'use strict';

const gulp = tars.packages.gulp;
const plumber = tars.packages.plumber;
const notifier = tars.helpers.notifier;
const staticFolderName = tars.config.fs.staticFolderName;
const csvSrcPath = `./markup/${staticFolderName}/csv/*.csv`;
const csvDestPath = `./dev/${staticFolderName}/csv`;

/**
 * Move json to dev folder
 */
module.exports = function () {

    return gulp.task('move-csv', /*['required-task-name'],*/ function (done) {
        return gulp.src(csvSrcPath)
            .pipe(gulp.dest(csvDestPath))
    });
};
