var gulp = require('gulp');

var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync({
        files: "**",
        port:3588,
        logLevel: "debug",
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['browser-sync'], function() {

});
