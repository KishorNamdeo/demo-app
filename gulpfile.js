var gulp = require('gulp');
var sass = require('gulp-sass');
var input = "./res/sass/**/*.scss";
var output ="./public/css";

gulp.task('default', function () {
  return gulp
    // Find all `.scss` files from the `stylesheets/` folder
    .src(input)
    // Run Sass on those files
    .pipe(sass())
    // Write the resulting CSS in the output folder
    .pipe(gulp.dest(output));
});

gulp.task('watch', function(){
  gulp.watch(input, function(event){
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
      gulp.start('default')
    });
});
