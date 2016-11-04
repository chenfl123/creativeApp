
//require引入文件，目的是编译sass文件
var gulp =require('gulp');
var sass =require('gulp-sass');
// 合并文件插件
var concat =require('gulp-concat');
// 压缩js插件
var jsmin =require('gulp-uglify');
// 压缩html文件
var htmlmin=require('gulp-htmlmin');

// 引入重命名文件
var rename =require('gulp-rename');
// 引入同步测试的文件
var browserSync=require('browser-sync');

// 创建任务
gulp.task('buildSass',function(){
	// src匹配文件
	gulp.src('./app/sass/*.scss')
	.pipe(sass({outputStyle:'compact'}))
	.pipe(gulp.dest('./app/dist/css'))
	// .pipe(sass({outputStyle:'compact'}))
	// .pipe(rename({suffix:'.min'}))
	// .pipe(gulp.dest('./dist/css'));
});
//监听sass文件
gulp.task('jtSass',function(){
	gulp.watch('./app/sass/*.scss',['buildSass'])
});
// 创建合并压缩js文件
gulp.task('buildJs',function(){
	gulp.src('./app/js/*.js')
	.pipe(concat('app.js'))
	.pipe(gulp.dest('./dist/js'))

	.pipe(jsmin())
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest('./dist/js'));

});
// 创建合并压缩html文件
gulp.task('buildHtml',function(){
	gulp.src('./app/**/*.html')
	.pipe(htmlmin({collapseWhitespace:true,removeComments:true}))
	.pipe(gulp.dest('./dist'));

});
// 全站编译
gulp.task('default',['buildSass','buildHtml','buildJs','jtSass']);

// 同步测试
gulp.task('server',['jtSass'],function(){
	browserSync.init({
		server:{
			baseDir:'./app'
		},
		file:['./app/css/*.css','./app/js/*.js','./app/**/*.html']
	})
});