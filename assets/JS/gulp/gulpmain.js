var gulp= require('gulp'),
watch= require('gulp-watch');


gulp.task('steam',function(){
  return watch('html/**/*.html')
});
