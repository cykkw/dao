var upapp=angular.module("upapp",[]);

upapp.controller('upctrl',['$scope','$http',function($scope,$http){
    $scope.upsend=function(){
        if($scope.username && $scope.content){
            if($scope.useremail){
                $http({
                    url:'/api/update',
                    method:'post',
                    data:{name:$scope.username,email:$scope.useremail,content:$scope.content}
                }).success(function(data){
                    alert(data.msg);
                    $scope.article=data.content;
                    $scope.author=data.name;
                });
            }else{
                alert("邮箱格式不正确");
            }
        }else{
            alert("请填写完整信息");
        }
    }
}])
