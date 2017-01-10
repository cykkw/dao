//鼠标滚轮事件
$('html').mousewheel(function(event, delta) {

    var left=$(window). scrollLeft();
    // console.log(left);
    $(window). scrollLeft(left-(delta * 50));
    event.preventDefault();
    i=0;

});