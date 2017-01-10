
myapp.controller('myctrl',['$scope','$http','$rootScope','$location',function($scope,$http,$rootScope,$location){

    $scope.islogin=false;
    //初始判断是否已登录
    if( sessionStorage.getItem("name")){
        $scope.islogin=true;
        $scope.user=sessionStorage.getItem("name");
    }

    //注册
    $scope.resend=function(){
        if($scope.reuser && $scope.repass && $scope.agpass){
            if($scope.reemail){
                if($scope.repass.length>6 && $scope.repass.length<16 ){
                    if($scope.repass==$scope.agpass){
                        $http({
                            url:'/api/regist',
                            method:'post',
                            data:{name:$scope.reuser,email:$scope.reemail,pass:$scope.repass,surpass:$scope.agpass}
                        }).success(function(data){
                            alert(data.msg);
                            $(".regform").css({display:"none"});
                            $(".regform .reipt").val("");
                            $(".mask").css({display:"none"});
                        })

                    }else{
                        alert("两次密码不一致");
                    }
                }else{
                    alert("密码长度必须在6-16之间");
                }
            }else{
                alert("邮箱格式有误，请输入正确格式" );
            }
        }else{
            alert("请输入完整的信息");
        }

    }

   //登录
    $scope.logsend=function(){
      if($scope.logemail && $scope.logpass){
          if($scope.logpass.length>6 && $scope.logpass.length<16){
                $http({
                    url:'/api/login',
                    method:'post',
                    data:{email:$scope.logemail,pass:$scope.logpass}
                }).success(function(data){
                    alert(data.msg);
                    $(".alform").css({display:"none"});
                    $(".alform .ipt").val("");
                    $(".mask").css({display:"none"});
                    sessionStorage.setItem("name",data.name);
                    $scope.islogin=true;
                    $scope.user=sessionStorage.getItem("name");

                });

          }else{
              alert("密码长度为6-16之间，请按规范输入")
          }
      }else{
          alert("邮箱及密码不能为空")
      }

    }

    //点击退出事件
    $scope.logout=function(){
        sessionStorage.removeItem("name");
        $scope.islogin=false;
    }

    //搜素框
        $scope.enter = function(ev) {
            if (ev.keyCode == 13){   //判断按下的是否为回车键
                if($scope.searchs){
                    $http({
                        url:'/api/book',
                        method:'post',
                        data:{name:$scope.searchs}
                    }).success(function(data){
                        for(var i=0;i<data.length;i++){
                          //  console.log(data[i]);
                           // alert("书名:"+data[i].name+",路径为：/"+data[i].id);
                            $scope.loc=data[i].id;
                            $rootScope.nam=data[i].name;
                            //alert($scope.loc);
                            //alert( $rootScope.nam);
                            $location.path('/'+$scope.loc);
                        }

                    })

                }
            }
        }
   //路由改变
    $rootScope.$on('$routeChangeSuccess',function(evt,next,cur){
          //console.log(evt);
          //console.log(next.loadedTemplateUrl );
         //console.log(cur);
        //监听路由改变，当路由跳转到图片集索引页时，清除横向滚动监听及主页的一些东西
        if((next.loadedTemplateUrl=="/pages/index.html") )
            {
            $('html').unbind();
            $(".main-picture div").css({"display":"none"});
       }else {
            $('html').mousewheel(function(event, delta) {
               //左滑右滑按钮跟随鼠标滚动事件
                $('#left').stop(true,true).fadeIn();
                $('#right').stop(true,true).fadeIn();
                window.clearInterval(set);
                set=window.setInterval(start,1000);
               //鼠标滚动，页面横向展开
                var left=$(window). scrollLeft();
                // console.log(left);
                $(window). scrollLeft(left-(delta * 50));
                event.preventDefault();
                i=0;
               //导航收起与展开
                if(delta<0){
                    $(".c_wrap").slideUp(500);
                }else{
                    $(".c_wrap").slideDown(500);
                }

            });
            $(".main-picture div").css({"display":"block"});
        }


    });

}]);

