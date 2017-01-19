'use strict';

const gulp = tars.packages.gulp;
const plumber = tars.packages.plumber;
const notifier = tars.helpers.notifier;
const staticFolderName = tars.config.fs.staticFolderName;
const jsonSrcPath = `./markup/${staticFolderName}/json/*.json`;
const jsonDestPath = `./dev/${staticFolderName}/json`;

/**
 * Move json to dev folder
 */
module.exports = function () {

    return gulp.task('move-json', /*['required-task-name'],*/ function (done) {
        console.log(tars.config);
        console.log(jsonSrcPath);
        console.log(jsonDestPath);
        return gulp.src(jsonSrcPath)
            .pipe(gulp.dest(jsonDestPath))
    });
};
