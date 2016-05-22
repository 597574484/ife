var gulp = require('gulp');
var sync = require('browser-sync');

gulp.task("sync",function(){
	sync({
		server : {
			baseDir : "./task0004/"
		}
	});

	gulp.watch('./task0004/**/*.*').on('change',sync.reload);
});