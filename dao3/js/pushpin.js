
var left;
document.onscroll = function(){
     left = document.body.scrollLeft;
//console.log(left);

};
//----点击改变btn背景颜色--------
$('.fbtn').click(function(){
    $(this).css({"background-color":"black","color":"white"}).siblings().css({"background-color":"white","color":"black"});//burlywood
    i=-1;
    $(document).scrollLeft("0");
});

//-------------左右快速移动--------------
//声明点击事件
$("#right").click(rightclick);
$("#left").click(leftclick);

//向前点击滑动
function leftclick(){
    $('body').stop(true).animate({'scrollLeft':0},2000);
    i=-1;

}

function rightclick(){

    $('body').stop(true).animate({'scrollLeft':12450},2000);
   //$(document).stop(true).scrollLeft(12450);

}
//定一个时间轴来控制没有操作按钮隐藏；
var set=window.setInterval(start,1000);
function start(){
    $('#left').stop(true).fadeOut(500);
    $('#right').stop(true).fadeOut(500);
}
//鼠标移到按钮处清除时间轴
$('#left,#right').mousemove(function(){
    $('#left').stop(true,true).fadeIn();
    $('#right').stop(true,true).fadeIn();
    window.clearInterval(set);

});

//鼠标离开按钮开启时间轴
$('#left,#right').mouseout(function(){
    $('#left').stop(true).fadeOut(2000);
    $('#right').stop(true).fadeOut(2000);
    window.clearInterval(set);
    set=window.setInterval(start,1000);

});

//鼠标滚轮事件
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
