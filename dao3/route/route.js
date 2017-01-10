var dbuser=require('../model/model.js');

var user={};  //处理用户登录及注册的路由
var article={};  //处理更新文章的路由
var book={};   //处理书籍的路由
//注册
    user.register=function(req,res){
        //console.log(req.body);
        //res.status(200).json({success:true,msg:111});
        var body=req.body;
        if(body.email){
            if( body.name && body.pass ){
                if(body.pass.length>6 && body.pass.length<16 ){
                    if(body.pass==body.surpass){
                        dbuser.db.find({email:body.email},function(err,result){
                            if(err){
                                console.log("查询失败");
                                res.status(200).json({success:false,msg:"注册失败1"});
                            }else{
                                if(result!=null && result.length>0){
                                    res.status(200).json({success:false,msg:"该邮箱已被注册"});
                                }else{
                                    dbuser.db.create(body,function(err) {
                                        if (err) {
                                            console.log("添加数据失败");
                                            res.status(200).json({success: false, msg: "注册失败2"});
                                        } else {
                                            res.status(200).json({success: true, msg: "注册成功"});
                                        }
                                    });
                                }
                            }

                        });

                    }else{
                        res.status(200).json({success:false,msg:"两次密码不一致，注册失败"});
                    }
                }else{
                    res.status(200).json({success:false,msg:"密码长度不符合要去，注册失败"});
                }
            }else{
                res.status(200).json({success:false,msg:"信息不完整，注册失败"});
            }
        }else{
            res.status(200).json({success:false,msg:"邮箱格式不对，注册失败"});
        }
    };
//登录
    user.login=function(req,res){
        //console.log(req.body);
        //res.status(200).json({success:true,msg:22222});
        var body=req.body;
        if(body.email && body.pass ){
            if(body.pass.length>6 && body.pass.length<16){
                dbuser.db.find(body,function(err,result){
                    if(err){
                        console.log("查询失败");
                        res.status(200).json({success:false,msg:"登录失败"});
                    }else{
                       // console.log(body);
                       // console.log(result);
                        if(result!=null && result.length==1){
                            res.status(200).json({success:true,msg:"登录成功",name:result[0].name});
                        }else{
                            res.status(200).json({success:false,msg:"信息有误，无法登录"});
                        }
                    }
                })
            }else{
                res.status(200).json({success:false,msg:"密码长度不对，登录失败"});
            }
        }else{
            res.status(200).json({success:false,msg:"有空值,登录失败"});
        }
    };
//更新日志
   article.renew=function(req,res){
     // console.log(req.body);
      // res.status(200).json({success:true,msg:"121212"});
       var body=req.body;
      if(body.name && body.content){
          if(body.email){
              dbuser.db.find({name:body.name,email:body.email},function(err,result){
                  if(err){
                      console.log("查询失败");
                      res.status(200).json({success:false,msg:"发生错误"});
                  }else{
                    //  console.log(result);
                      if(result!=null && result.length==1){
                          dbuser.ardb.create(body,function(err) {
                              if (err) {
                                  console.log("添加数据失败");
                                  res.status(200).json({success: false, msg: "发生错误2"});
                              } else {
                                  res.status(200).json({success: true, msg: "日志更新成功",name:result[0].name,content:body.content});
                              }
                          });
                      }else{
                          res.status(200).json({success:false,msg:"请输入正确的用户名及邮箱"});
                      }
                  }
              });
          }else{
              res.status(200).json({success:false,msg:"邮箱格式不正确，或为空"});
          }
      }else{
          res.status(200).json({success:false,msg:"信息不完整"});
      }

   }

//搜素框查找书籍
  book.list=function(req,res){
      //console.log(req.body);
     // res.status(200).json("123456");
      var body=req.body;
      if(body.name){
          dbuser.bkdb.find({name: new RegExp("^.*"+body.name+".*$")},function(err,result){   //模糊查找
              if(err){
                  console.log(err);
              }else{
                  if(result!=null && result.length>0){
                      res.status(200).json(result);
                  }else{
                      res.status(200).json({success:false,msg:'未查到相关书籍'});
                  }
              }

          })
      }else{
          res.status(200).json({success:false,msg:'搜素框不能为空'});
      }
  }



exports.User=user;
exports.Article=article;
exports.Book=book;