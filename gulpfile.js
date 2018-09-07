const gulp = require('gulp');
gulp.task('copy-to-dist', () => {
	gulp.src([ './src/**/*', '!./src/**/*.ts' ]).pipe(gulp.dest('./dist/'));
});
gulp.task('default', ['copy-to-dist']);