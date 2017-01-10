/**
 * Created by Administrator on 2016/11/27.
 */
//手风琴动画效果
var _index7=0;
$(".z-flash ul li").mouseover(function(){
    _index7=$(this).index();
    $(this).stop().stop().animate({width:538},500).siblings("li").stop().animate({width:106},500);
    $(".imgCen").eq(_index7).css("display","block").siblings(".imgCen").css("display","none");
    $("p.bt_2").eq(_index7).css("display","block").siblings("p.bt_2").css("display","none");
    $(".imgTop img").eq(_index7).addClass("tm").siblings(".imgTop img").removeClass("tm");
});
$(".z-flash ul li").mouseout(function(){
    $(this).eq(_index7).stop().animate({width:106},500);
    $(".imgCen").css("display","none");
});
$(".z-flash ul li").mouseout(function(){
    $(this).eq(_index7).stop().animate({width:500},500);
    $("p.bt_2").css("display","none");
});

//

