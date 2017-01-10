var mongoose=require('mongoose');
//连接mongodb数据库
mongoose.connect('mongodb://127.0.0.1:27017/dao',function(err){
    if(err){
        console.log('连接数据库失败');
        console.log(err);
    }else{
        console.log('连接数据库成功');
    }
})
//创建用户表结构
var usertab=new mongoose.Schema({
    name:String,
    email:String,
    pass:String
});

//创建文章表结构
var articletab=new mongoose.Schema({
    name:String,
    email:String,
    content:String
});

//创建书本表结构
var booktab=new mongoose.Schema({
    name:String,
    id:Number
});



//关联表结构
var usermodel=mongoose.model("tables",usertab,"users");
var articlemodel=mongoose.model("artables",articletab,"article");
var bookmodel=mongoose.model("bktables",booktab,"books");



//导出
exports.db=usermodel;
exports.ardb=articlemodel;
exports.bkdb=bookmodel;