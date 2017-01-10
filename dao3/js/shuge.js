/**
 * Created by Administrator on 2016/11/27.
 */
var $doc=$(document);
$("#z-back").hide();
//窗口加滚动触发
$(window).scroll(scrollfun);

function scrollfun(){
    var hei=$(window).height();
    //如果滚动高度>窗口的高度,隐藏
    if($doc.scrollTop()>hei){
        $("#z-back").fadeIn(1500);
    }else{$("#z-back").hide();}
}
$("#z-back").click(back);
function back(){
    //全兼容各浏览器
    $('html,body').scrollTop(0);
}