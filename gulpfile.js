const gulp = require('gulp');
const browserSync = require('browser-sync');
const htmlmin = require('gulp-htmlmin');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const {reload} = browserSync;

gulp.task('html', function() {
  return gulp.src('src/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('css', function() {
  const plugins = [
    autoprefixer({browsers: ['last 2 versions'], cascade: false}),
    cssnano(),
  ]
  return gulp.src('./src/styles/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/styles'));
});

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

gulp.task('build', ['html', 'css']);
gulp.task('default', ['serve']);
