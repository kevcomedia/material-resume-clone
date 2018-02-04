const gulp = require('gulp');
const browserSync = require('browser-sync');
const {reload} = browserSync;

// Watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'src',
    },
  });

  gulp.watch(
    ['*.html', 'styles/**/*.css', 'scripts/**/*.js'],
    {cwd: 'src'},
    reload
  );
});

gulp.task('default', ['serve']);
