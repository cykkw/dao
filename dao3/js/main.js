$(function(){

    //获取屏幕的高度
    var heig=$(window).height();
    $(".main-picture").css("height",heig);
    $("body").css("height",heig);
    //事件切换
    $(".c_circle").toggle(cfun1,cfun2);
    function cfun1(){
        $(".c_circle").delay(100).slideUp();
        $(".c_picture").delay(400).fadeOut();
        $(".main-picture").delay(700).css({"opacity": 0.9});
        $(".main-picture").delay(800).slideUp();
        $(".x-btn").delay(800).fadeOut();
        $(".c_images").delay(1200).animate({height:0,width:0},1000);
        $(".c_wrap").delay(1600).slideUp();
        $(".c_circle").delay(2000).html("展开");
        $(".c_circle").delay(2000).slideDown();
    };
    function cfun2(){
        $(".c_circle").delay(200).fadeOut();
        $(".c_wrap").delay(400).slideDown();
        $(".c_images").delay(600).animate({height:180,width:180},1000);
        $(".main-picture").delay(1200).slideDown();
        $(".x-btn").delay(1200).fadeIn();
        $(".c_picture").delay(1600).fadeIn();
        $(".c_circle").delay(1800).html("关闭");
        $(".c_circle").delay(1800).fadeIn();
    };

    //登录窗口
    $('.login').click(function(){
        $('.mask').fadeIn(100);
        $('.alform').slideDown(200);
    })
    $('.poptit .close').click(function(){
        $('.mask').fadeOut(100);
        $('.alform .ipt').val("");
        $('.alform').slideUp(200);
    });

    //注册窗口
    $('.regist').click(function(){
        $('.mask').fadeIn(100);
        $('.regform').slideDown(200);
    })
    $('.repoptit .close').click(function(){
        $('.mask').fadeOut(100);
        $('.regform .reipt').val("");
        $('.regform').slideUp(200);

    });


















});
