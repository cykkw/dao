

//引入gulp模块
var gulp=require('gulp');

//引入执行相关任务的模块
var less=require('gulp-less');

//创建一个gulp任务

gulp.task('buildLess', function () {
    gulp.src('./less/*.less')//选择定义需要编译的less的源文件的目录
        .pipe(less())       //调用中间的管道方法编译less文件
        .pipe(gulp.dest('./css'))//定义执行文件的输出目录

    //如何实现监听相应的文件变化后所要执行的任务
    gulp.watch('./less/*.less', ['buildLess']);

});

//定义gulp的默认执行任务
gulp.task('default',['buildLess'], function () {
    console.log('default task executed');
});


