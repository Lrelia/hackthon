/*
 *
 *  YMC shorted for YoumiChart: 有米内部通讯工具
 *
 *  2014 @ www.youmi.net
 *
 *  Group Member: 李斌斌 卢紫庭 朱嘉俊 吴蔼仪
 *
 */

var currentContent = '#conversation',   //当前面板
          curBoard = '#con-img',        //当前面板标识
              item;                     //当前对话框


$('.btn-gap').addClass('friend-btn-active'); //当前面板标识默认为对话面板


$('.btn-wrap a').click(function() {
    var content = $(this).data('dir'),      //下一个标识指向的面板
            img = $(this).data('img'),      
         curImg = $(curBoard).data('img');

    $(currentContent).hide();
    $(curBoard).attr('src', curImg);
    curBoard  = $(img);
    var image = $(curBoard).data('onimg');
    $(img).attr('src',image);
    $('.btn-wrap a').removeClass('friend-btn-active');
    $(this).addClass('friend-btn-active');

    $(content).show(200);
    currentContent = content;
});

/* 面板列表元素 */
$('.board-list-conversation').delegate("li", "click", function () {
    $(item).removeClass('item-active');
    $('.dialog').show();
    item = $(this);
    $(this).addClass('item-active');
});
$('.board-list-member').delegate("li", "click", function() {
    var    img = $(this).data('img'),
        curImg = $(curBoard).data('img');

    $(currentContent).hide();
    $(curBoard).attr('src', curImg);
    $('#con-img').attr('src', 'img/conversation-on.png');
    curBoard  = '#con-img';
    var image = $(curBoard).data('onimg');
    $(img).attr('src',image);
    $('#conversation').show(400);
    $('.btn-wrap a').removeClass('friend-btn-active');
    $('.btn-wrap a').first().addClass('friend-btn-active');
    $('.dialog').show(300);
    $('.item-active').removeClass('item-active');

    //添加元素
    $('.board-list-conversation li:nth-child(2)').before('<li></li>');
    item = $('.board-list-conversation li:nth-child(2)')
    $(item).addClass('item-active');
    currentContent = '#conversation';
});

/* 设置选项卡 */
$('.config').click(function() {
    $('#menu').show();
    $('.wrapper').show();
});
$('.wrapper').click(function() {
    var img = $('.config img').data('img');
    $('.config img').attr('src',img);
    $(this).hide();
    $('#menu').hide(200);
});
$('.config img').click(function() {
    var img = $(this).data('onimg');
    $(this).attr('src',img);
});

/* conversation-X */
$('.close').click(function() {
    var li = $(this).parent();
    $(li).remove();
    if ( $(li).hasClass('item-active') ) {
        $('.dialog').hide();
    }
});

/* dialog-X */
$('.exit').click(function() {
    $('.dialog').hide();
    $('.item-active').removeClass('item-active');
});

$('#menu').delegate('li', 'click', function(e) {

});
