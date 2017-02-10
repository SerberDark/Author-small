var gulp=require('gulp');
var sass=require('gulp-sass');
var autoprefixer=require('gulp-autoprefixer');
var spritesmith=require('gulp.spritesmith');
var merge=require('merge-stream');
gulp.task('sass', function () {
  return gulp.src('dist/scss/**/*.scss') .pipe(sass( {
    outputStyle: 'expanded'
  }
  ).on('error', sass.logError)) .pipe(autoprefixer(['last 15 versions', '>1%', 'ie 9'])) .pipe(gulp.dest('app/css'));
}

);
gulp.task('watch', ['sass'], function() {
  gulp.watch('dist/scss/**/*.scss', ['sass']);
}

);