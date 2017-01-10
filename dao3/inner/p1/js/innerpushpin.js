
$("#innerall").mousemove(enter1);
$("#innerall").mouseout(leave1);
$("#innerall").click(click1);

function  enter1(){
    window.clearInterval(set1);
}
function leave1(){
    set1 = window.setInterval(slide,50);
}


var set1 = window.setInterval(slide,50);
var i=0;
function  slide(){
    i++;
    $("#innerall").stop(true,true).animate({'margin-left': -1*i+"px"});

    //console.log({'margin-left':-1*i+"px"});


    //console.log( $("#innerall").scrollLeft);
};


function click1(){
    window.clearInterval(set1);
}

//声明点击事件
$("#inner-right").click(rightclick1);
$("#inner-left").click(leftclick1);

//向前点击滑动
function leftclick1(){
    $('body').stop(true).animate({scrollLeft:0},2000);
i=-1;

}

function rightclick1(){
    $('body').stop(true).animate({scrollLeft:13650},2000);
}
//定一个时间轴来控制没有操作按钮隐藏；
var set=window.setInterval(start1,1000);

function start1(){

    $('#inner-left').stop(true).fadeOut(500);
    $('#inner-right').stop(true).fadeOut(500);
}
//鼠标移到按钮处清除时间轴

$('#inner-left,#inner-right').mousemove(function(){
    $('#inner-left').stop(true,true).fadeIn();
    $('#inner-right').stop(true,true).fadeIn();

    window.clearInterval(set);

});

//鼠标离开按钮开启时间轴
$('#inner-left,#inner-right').mouseout(function(){
    $('#inner-left').stop(true).fadeOut(500);
    $('#inner-right').stop(true).fadeOut(500);
    window.clearInterval(set);
    set=window.setInterval(start1,1000);

});
//鼠标进入 显示页面 按钮出现 清除时间轴

$('#innerall').mousemove(function(){
    $('#inner-left').stop(true,true).fadeIn();
    $('#inner-right').stop(true,true).fadeIn();

    window.clearInterval(set);

});

//鼠标离开 显示页面 按钮隐藏  开启时间轴

$('#innerall').mouseout(function(){
    $('#inner-left').stop(true).fadeOut(2000);
    $('#inner-right').stop(true).fadeOut(2000);
    window.clearInterval(set);


    set=window.setInterval(start1,1000);

})
//按钮跟随鼠标滚动事件
$('html').mousewheel(function() {

    $('#inner-left').stop(true,true).fadeIn();
    $('#inner-right').stop(true,true).fadeIn();

    window.clearInterval(set);
    set=window.setInterval(start1,1000);

});






