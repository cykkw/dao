var express=require('express'),bodyparser=require('body-parser'),path=require('path')
    ,route=require('./route/route.js');

var app=express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

//接口区
app.post('/api/regist',route.User.register);
app.post('/api/login',route.User.login);
app.post('/api/update',route.Article.renew);
app.post('/api/book',route.Book.list);



//静态目录
app.use(express.static(path.join(__dirname,'/')));

//设置404 页面
app.use(function(req,res){
    res.status(404).send("<h1>404 Not Found</h1>")
});

//监听
app.listen(3000,function(err){
    if(err){
        console.log("服务器启动失败");
        throw err;
    }else{
        console.log("server started localhost:%d",3000);
    }

});


