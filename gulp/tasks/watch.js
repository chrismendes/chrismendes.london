// Note:  gulp/tasks/browserify.js handles js recompiling via watchify.
// Note:  gulp/tasks/browserSync.js watches and reloads compiled files

var gulp     = require('gulp');
var config   = require('../config');

gulp.task('watch', ['watchify', 'browserSync'], function() {
  gulp.watch(config.src.components + '/**/*.scss',  ['sass']);
  gulp.watch(config.src.layoutstyles + '/**/*.scss',['sass']);
  gulp.watch(config.src.basestyles + '/**/*.scss',  ['sass']);
  gulp.watch(config.srcDir + '/app.scss',           ['sass']);

  gulp.watch(config.src.images + '/**/*',           ['images']);

  gulp.watch(config.src.templates + '/**/*.html',   ['templates']);
  gulp.watch(config.src.templates + '/**/*.json',   ['templates']);
  gulp.watch(config.src.partials + '/**/*.html',    ['templates']);
  gulp.watch(config.srcDir + '/index.html',         ['templates']);

  gulp.watch(config.src.components + '/**/*.js',    ['browserify']);
  gulp.watch(config.src.templates + '/**/*.js',     ['browserify']);

  // (Watchify will watch and recompile our JS, so no need to gulp.watch it.)
});